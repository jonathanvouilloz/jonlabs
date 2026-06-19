"""
reddit_scraper.py — Scrape Reddit via Playwright + old.reddit.com (pas d'API nécessaire)
Usage : python reddit_scraper.py [--keyword "sujet"] [--threads 10] [--output fichier.txt]
Sortie : extraction_reddit_<keyword>.txt (prêt pour le prompt SEO)
"""

import os
import time
import argparse
from ddgs import DDGS
from playwright.sync_api import sync_playwright

# ==========================================
# CONFIGURATION — args CLI ou valeurs par défaut
# ==========================================
_parser = argparse.ArgumentParser(description="Scrape Reddit threads sur un mot-clé")
_parser.add_argument("--keyword", default="price dtv thailand", help="Mot-clé à rechercher")
_parser.add_argument("--output", default=None, help="Nom du fichier de sortie (auto si absent)")
_parser.add_argument("--threads", type=int, default=10, help="Nombre de threads à scraper")
_args = _parser.parse_args()

MOT_CLE        = _args.keyword
NB_THREADS     = _args.threads
FICHIER_SORTIE = _args.output or f"extraction_reddit_{MOT_CLE.replace(' ', '_')}.txt"
CHARGER_PLUS   = True  # cliquer sur "load more comments" (plus lent, plus complet)
MIN_CHARS      = 40    # ignorer les commentaires trop courts

SKIP_BODIES  = {'[deleted]', '[removed]', ''}
SKIP_AUTHORS = {'AutoModerator'}


# ==========================================
# ÉTAPE 1 : Recherche DuckDuckGo
# ==========================================
def chercher_threads(mot_cle, nb):
    query = f"site:reddit.com {mot_cle}"
    print(f"[1/3] DuckDuckGo : '{query}'")
    urls = []
    try:
        with DDGS() as ddgs:
            for r in ddgs.text(query, max_results=nb + 5):
                if "/comments/" in r["href"] and len(urls) < nb:
                    urls.append(r["href"])
                    print(f"   -> {r['href']}")
    except Exception as e:
        print(f"   ERREUR : {e}")
    print(f"   {len(urls)} threads trouvés\n")
    return urls


# ==========================================
# ÉTAPE 2 : Scrape un thread via Playwright
# ==========================================
def scraper_thread(page, url):
    # Convertir en old.reddit pour avoir du HTML statique simple
    old_url = url.replace("www.reddit.com", "old.reddit.com").split('?')[0].rstrip('/')
    blocs = []

    try:
        page.goto(old_url, timeout=25000, wait_until="domcontentloaded")
        page.wait_for_timeout(1500)

        # Titre du post
        titre_el = page.query_selector('a[data-event-action="title"]')
        if not titre_el:
            titre_el = page.query_selector('.top-matter p.title a')
        if titre_el:
            blocs.append(f"[POST] {titre_el.inner_text().strip()}")

        # Corps du post (selftext)
        selftext_el = page.query_selector('.expando .usertext-body .md')
        if selftext_el:
            texte = selftext_el.inner_text().strip()
            if texte and texte not in SKIP_BODIES and len(texte) >= MIN_CHARS:
                blocs.append(f"[BODY] {texte}")

        # Charger plus de commentaires si activé
        if CHARGER_PLUS:
            for _ in range(3):  # max 3 rounds de "load more"
                more_links = page.query_selector_all('a.button[data-event-action="morecomments"]')
                if not more_links:
                    break
                for link in more_links[:5]:  # max 5 par round
                    try:
                        link.click()
                        page.wait_for_timeout(800)
                    except Exception:
                        pass

        # Extraire tous les commentaires
        for comment in page.query_selector_all('.comment'):
            # Auteur
            auteur_el = comment.query_selector('.author')
            auteur = auteur_el.inner_text().strip() if auteur_el else ''
            if auteur in SKIP_AUTHORS:
                continue

            # Corps
            corps_el = comment.query_selector('.usertext-body .md')
            if not corps_el:
                continue
            corps = corps_el.inner_text().strip()

            if corps in SKIP_BODIES or len(corps) < MIN_CHARS:
                continue
            if corps.startswith('[removed]') or corps.startswith('[deleted]'):
                continue

            blocs.append(corps)

    except Exception as e:
        print(f"   ERREUR sur {url} : {e}")

    return blocs


# ==========================================
# MAIN
# ==========================================
if __name__ == "__main__":
    urls = chercher_threads(MOT_CLE, NB_THREADS)

    if not urls:
        print("Aucun thread trouvé. Vérifie ta connexion.")
        exit(1)

    print(f"[2/3] Scraping {len(urls)} threads...\n")
    tous_blocs = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            locale='en-US',
        )
        page = context.new_page()

        for i, url in enumerate(urls):
            print(f"  Thread {i+1}/{len(urls)} : {url.split('/comments/')[1].split('/')[1][:50]}")
            blocs = scraper_thread(page, url)
            tous_blocs.extend(blocs)
            print(f"   -> {len(blocs)} blocs (total : {len(tous_blocs)})")
            time.sleep(1.5)  # poli avec Reddit

        browser.close()

    # ==========================================
    # ÉTAPE FINALE : fichier texte propre
    # ==========================================
    print(f"\n[3/3] Génération du fichier...")
    contenu = '\n\n---\n\n'.join(tous_blocs)

    with open(FICHIER_SORTIE, "w", encoding="utf-8") as f:
        f.write(contenu)

    print(f"\nTerminé !")
    print(f"  {len(tous_blocs)} blocs extraits")
    print(f"  {len(contenu):,} chars")
    print(f"  -> '{FICHIER_SORTIE}'")
