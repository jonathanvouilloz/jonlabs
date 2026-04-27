"""
gmb_build_from_articles.py

Génère un calendrier GMB à partir des N derniers articles publiés du blog Jon Labs.

Pour chaque article :
- crée 1 post GMB type whats_new (CTA = lien article)
- génère l'image via le pipeline officiel cli.py + preset gmb-post-template
- écrit le JSON dans la structure canonique attendue par /publish-hub
  (image: { url, text, template }) — zéro normalisation à faire après coup

Usage :
    python scripts/gmb_build_from_articles.py [--count 4] [--start-date 2026-04-27] [--every-days 3]

Sortie :
    gmb-calendar-draft.json à la racine projet
    static/gmb-assets/post-{NN}.png pour chaque post

Convention de structure JSON (à respecter pour publish-hub sans transformation) :
    {
      "title": "...",                    # title interne (DB hub, pas affiché)
      "content": "...",                  # corps du post GMB (60-150 mots)
      "type": "whats_new",
      "scheduled_at": "ISO8601",         # date publication
      "planned_date": "ISO8601",         # alias attendu par le hub (mappage status)
      "cta": { "action": "LEARN_MORE", "url": "..." },
      "image": {                         # structure DOIT être ce nom + cette forme
        "url": "/static/gmb-assets/post-XX.png",
        "text": "<title image> | <subtitle image>",
        "template": "gmb-post-template"
      },
      "source_article_slug": "..."       # traçabilité
    }
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

PROJ = Path(__file__).resolve().parent.parent
BLOG_DIR = PROJ / "src" / "content" / "blog"
OUT_DIR = PROJ / "static" / "gmb-assets"
CALENDAR_PATH = PROJ / "gmb-calendar-draft.json"
CLI = Path.home() / ".claude" / "skills" / "generate-images" / "scripts" / "cli.py"
SITE_URL = "https://www.jonlabs.ch"
TZ_OFFSET = "+02:00"


def list_recent_articles(today: datetime, n: int) -> list[dict]:
    """Return n most recently published articles (pubDate <= today)."""
    items = []
    for f in BLOG_DIR.iterdir():
        if f.suffix not in (".md", ".mdx"):
            continue
        text = f.read_text(encoding="utf-8", errors="ignore")
        m = re.search(r'^pubDate:\s*["\']?([\d\-T:]+)', text, re.MULTILINE)
        title_m = re.search(r'^title:\s*["\']?(.+?)["\']?$', text, re.MULTILINE)
        if not m:
            continue
        try:
            dt = datetime.fromisoformat(m.group(1)[:10])
        except ValueError:
            continue
        if dt.date() > today.date():
            continue
        items.append({
            "slug": f.stem,
            "title": title_m.group(1).strip() if title_m else f.stem,
            "pub_date": dt,
        })
    items.sort(key=lambda x: x["pub_date"], reverse=True)
    return items[:n]


def derive_image_texts(title: str) -> tuple[str, str]:
    """
    Heuristique pour extraire image_title (court) et image_subtitle (descriptif court)
    depuis un titre d'article. Coupe sur ':' / '—' / '?' selon ce qui est dispo.

    Recommandations :
    - image_title    : 12-22 caractères, max 1 ligne (auto-shrink sinon)
    - image_subtitle : 25-40 caractères, 4-7 mots (wrap auto sur 2 lignes)
    """
    t = title.strip()
    # Cherche un séparateur naturel
    for sep in [" : ", " — ", " - ", "? "]:
        if sep in t:
            head, tail = t.split(sep, 1)
            return head.strip().rstrip("?") + ("?" if "?" in head else ""), tail.strip()
    # Fallback : pas de séparateur — utiliser le titre complet comme image_title
    # et un sous-titre générique
    return t, "Lis le guide complet"


def generate_image(image_title: str, image_subtitle: str, slug: str, index: int) -> Path:
    """Generate one PNG via the official cli.py and rename to post-{index:02d}.png."""
    cmd = [
        sys.executable, str(CLI),
        "--project", str(PROJ),
        "--preset", "gmb-post-template",
        "--subject", slug,
        "--slug", slug,
        "--title-text", image_title,
        "--subtitle-text", image_subtitle,
    ]
    r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        raise RuntimeError(f"cli.py failed for {slug}: {r.stderr}")
    src = OUT_DIR / "post-00.png"
    dst = OUT_DIR / f"post-{index:02d}.png"
    if dst.exists():
        dst.unlink()
    src.rename(dst)
    return dst


def build_post(article: dict, image_path: Path, index: int, scheduled_at: datetime) -> dict:
    """Assemble one GMB post in canonical hub-ready structure."""
    image_title, image_subtitle = derive_image_texts(article["title"])
    rel_image = f"/static/gmb-assets/{image_path.name}"
    iso_date = scheduled_at.replace(microsecond=0).isoformat() + TZ_OFFSET
    return {
        "title": article["title"],
        "content": "",  # à remplir manuellement (60-150 mots, ton Jon Labs)
        "type": "whats_new",
        "scheduled_at": iso_date,
        "planned_date": iso_date,
        "cta": {
            "action": "LEARN_MORE",
            "url": f"{SITE_URL}/blog/{article['slug']}",
        },
        "image": {
            "url": rel_image,
            "text": f"{image_title} | {image_subtitle}",
            "template": "gmb-post-template",
        },
        "image_title": image_title,        # traçabilité
        "image_subtitle": image_subtitle,  # traçabilité
        "source_article_slug": article["slug"],
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--count", type=int, default=4)
    parser.add_argument("--start-date", default=None,
                        help="ISO date YYYY-MM-DD (default = today)")
    parser.add_argument("--every-days", type=int, default=3)
    parser.add_argument("--hour", type=int, default=9)
    args = parser.parse_args()

    today = datetime.now(timezone.utc)
    start = datetime.fromisoformat(args.start_date) if args.start_date else today
    start = start.replace(hour=args.hour, minute=0, second=0, microsecond=0, tzinfo=None)

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    articles = list_recent_articles(today, args.count)
    if len(articles) < args.count:
        print(f"WARNING: only {len(articles)} articles found, requested {args.count}")

    posts = []
    for i, art in enumerate(articles, start=1):
        scheduled = start + timedelta(days=(i - 1) * args.every_days)
        print(f"[{i}/{len(articles)}] {art['title']}")
        img_path = generate_image(*derive_image_texts(art["title"]), art["slug"], i)
        post = build_post(art, img_path, i, scheduled)
        posts.append(post)
        print(f"  → {img_path.name} | {post['scheduled_at']}")

    CALENDAR_PATH.write_text(
        json.dumps(posts, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"\nCalendar written: {CALENDAR_PATH}")
    print(f"Images: {OUT_DIR}/post-*.png")
    print("\nNext steps:")
    print("  1. Edit `content` field in each post (60-150 words, Jon Labs voice)")
    print("  2. /publish-hub gmb-calendar-draft.json")
    return 0


if __name__ == "__main__":
    sys.exit(main())
