"""
dashboard.py — Serveur local pour le Reddit Dashboard
Usage : python dashboard.py
Ouvrir : http://localhost:8765
"""

import json
import os
import subprocess
import sys
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

PORT = 8765
DESKTOP = Path(__file__).parent
HTML_FILE = DESKTOP / "dashboard.html"
SCRAPER = DESKTOP / "reddit_scraper.py"


def parse_txt(filepath: Path) -> dict:
    """Parse un fichier .txt du scraper en threads structurés."""
    try:
        content = filepath.read_text(encoding="utf-8")
    except Exception as e:
        return {"error": str(e), "threads": []}

    blocs = content.split("\n\n---\n\n")
    threads = []
    current_thread = None

    for bloc in blocs:
        bloc = bloc.strip()
        if not bloc:
            continue
        if bloc.startswith("[POST]"):
            if current_thread is not None:
                threads.append(current_thread)
            title = bloc[6:].strip()
            current_thread = {"title": title, "body": None, "comments": []}
        elif bloc.startswith("[BODY]"):
            if current_thread is None:
                current_thread = {"title": "(sans titre)", "body": None, "comments": []}
            current_thread["body"] = bloc[6:].strip()
        else:
            if current_thread is None:
                current_thread = {"title": "(sans titre)", "body": None, "comments": []}
            current_thread["comments"].append(bloc)

    if current_thread is not None:
        threads.append(current_thread)

    total_comments = sum(len(t["comments"]) for t in threads)
    return {
        "filename": filepath.name,
        "threads": threads,
        "stats": {"threads": len(threads), "comments": total_comments},
    }


def list_txt_files() -> list:
    """Liste les fichiers .txt du Desktop triés par date (plus récent en premier)."""
    files = sorted(
        [f for f in DESKTOP.glob("extraction_reddit_*.txt")],
        key=lambda f: f.stat().st_mtime,
        reverse=True,
    )
    return [
        {
            "name": f.name,
            "keyword": f.stem.replace("extraction_reddit_", "").replace("_", " "),
            "size_kb": round(f.stat().st_size / 1024, 1),
            "mtime": int(f.stat().st_mtime),
        }
        for f in files
    ]


class Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"  {self.address_string()} {format % args}")

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", len(body))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def send_error_json(self, message, status=500):
        self.send_json({"error": message}, status)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path

        if path == "/":
            if not HTML_FILE.exists():
                self.send_error_json("dashboard.html introuvable", 404)
                return
            body = HTML_FILE.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", len(body))
            self.end_headers()
            self.wfile.write(body)

        elif path == "/api/results":
            self.send_json(list_txt_files())

        elif path == "/api/load":
            params = parse_qs(parsed.query)
            filename = params.get("file", [None])[0]
            if not filename:
                self.send_error_json("Paramètre 'file' manquant", 400)
                return
            filepath = DESKTOP / Path(filename).name  # sécurité : juste le nom
            if not filepath.exists():
                self.send_error_json(f"Fichier '{filename}' introuvable", 404)
                return
            self.send_json(parse_txt(filepath))

        else:
            self.send_error_json("Route inconnue", 404)

    def do_POST(self):
        if self.path != "/api/run":
            self.send_error_json("Route inconnue", 404)
            return

        length = int(self.headers.get("Content-Length", 0))
        try:
            body = json.loads(self.rfile.read(length))
        except Exception:
            self.send_error_json("Body JSON invalide", 400)
            return

        keyword = str(body.get("keyword", "")).strip()
        threads = int(body.get("threads", 10))

        if not keyword:
            self.send_error_json("Le mot-clé est requis", 400)
            return

        threads = max(1, min(threads, 50))
        safe_kw = keyword.replace(" ", "_").replace("/", "_")
        output_file = DESKTOP / f"extraction_reddit_{safe_kw}.txt"

        print(f"\n[RUN] keyword='{keyword}' threads={threads} -> {output_file.name}")

        try:
            result = subprocess.run(
                [
                    sys.executable,
                    str(SCRAPER),
                    "--keyword", keyword,
                    "--threads", str(threads),
                    "--output", str(output_file),
                ],
                capture_output=True,
                text=True,
                timeout=180,
                cwd=str(DESKTOP),
            )
        except subprocess.TimeoutExpired:
            self.send_error_json("Timeout : le scraper a pris trop de temps (>180s)", 504)
            return
        except Exception as e:
            self.send_error_json(f"Erreur lancement scraper : {e}", 500)
            return

        if result.returncode != 0:
            self.send_error_json(
                f"Le scraper a échoué (code {result.returncode}) : {result.stderr[-500:]}", 500
            )
            return

        if not output_file.exists():
            self.send_error_json("Le scraper n'a produit aucun fichier", 500)
            return

        data = parse_txt(output_file)
        data["log"] = result.stdout[-1000:] if result.stdout else ""
        self.send_json(data)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()


if __name__ == "__main__":
    server = HTTPServer(("localhost", PORT), Handler)
    print(f"Reddit Dashboard — http://localhost:{PORT}")
    print(f"Dossier : {DESKTOP}")
    print(f"Ctrl+C pour arrêter\n")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServeur arrêté.")
