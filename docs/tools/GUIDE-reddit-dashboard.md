# Reddit Dashboard — Guide d'utilisation

Petit outil local pour scraper des discussions Reddit sur un mot-clé, sans API, et les lire dans une interface web propre.

---

## 1. Comment ça marche (en bref)

3 fichiers travaillent ensemble, tous sur le **Desktop** :

| Fichier | Rôle |
|---|---|
| `dashboard.py` | Le **serveur** local. C'est le seul fichier que tu lances. |
| `dashboard.html` | L'**interface web** (chargée automatiquement par le serveur). |
| `reddit_scraper.py` | Le **scraper**. Lancé en arrière-plan quand tu cliques sur "run". |

Le flux complet :

```
Toi (navigateur)  ──>  dashboard.py  ──>  reddit_scraper.py
   localhost:8765        (serveur)          (Playwright + DuckDuckGo)
                                                   │
                                                   ▼
                            extraction_reddit_<mot-clé>.txt
                                                   │
   Toi (navigateur)  <──  dashboard.py  <──────────┘
       (lecture)
```

1. Tu entres un mot-clé dans le dashboard.
2. Le scraper cherche les threads Reddit via DuckDuckGo (`site:reddit.com <mot-clé>`).
3. Il ouvre chaque thread sur `old.reddit.com` avec un navigateur invisible (Playwright) et extrait le titre, le corps et les commentaires.
4. Le résultat est sauvé dans un fichier `extraction_reddit_<mot-clé>.txt`.
5. Le dashboard affiche le contenu, prêt à copier-coller dans un prompt SEO.

Les anciennes extractions (`extraction_reddit_*.txt`) restent listées dans le dashboard : tu peux les rouvrir à tout moment.

---

## 2. Installation (à faire une seule fois)

Ouvre **PowerShell** et installe les dépendances :

```powershell
pip install ddgs playwright
python -m playwright install chromium
```

- `ddgs` → recherche DuckDuckGo
- `playwright` → pilote un navigateur Chromium invisible
- `playwright install chromium` → télécharge le navigateur utilisé pour scraper

---

## 3. Utilisation — étape par étape

### Étape 1 — Lancer le serveur

Dans PowerShell :

```powershell
python C:\Users\jojo-\Desktop\dashboard.py
```

Tu dois voir :

```
Reddit Dashboard — http://localhost:8765
Dossier : C:\Users\jojo-\Desktop
Ctrl+C pour arrêter
```

> ⚠️ Laisse cette fenêtre PowerShell **ouverte** : c'est le serveur. Si tu la fermes, le dashboard s'éteint.

### Étape 2 — Ouvrir le dashboard

Dans ton navigateur, va sur :

```
http://localhost:8765
```

### Étape 3 — Lancer un scrape

1. Entre ton **mot-clé** (ex : `chiang mai dtv`).
2. Choisis le **nombre de threads** à scraper (10 par défaut, max 50).
3. Clique sur **run / lancer**.
4. Patiente : le scraping prend de quelques secondes à ~3 min selon le nombre de threads (timeout à 180 s).

### Étape 4 — Lire / réutiliser le résultat

- Le contenu s'affiche directement (titre du post + commentaires).
- Le fichier est sauvé sur le Desktop : `extraction_reddit_<mot-clé>.txt`.
- Tu peux rouvrir n'importe quelle extraction précédente depuis la liste du dashboard.

### Étape 5 — Arrêter le serveur

Dans la fenêtre PowerShell, fais `Ctrl + C`.

---

## 4. Lancer le scraper sans le dashboard (optionnel)

Si tu veux scraper directement en ligne de commande, sans interface :

```powershell
python C:\Users\jojo-\Desktop\reddit_scraper.py --keyword "chiang mai dtv" --threads 10
```

Options :

| Option | Défaut | Description |
|---|---|---|
| `--keyword` | `price dtv thailand` | Le mot-clé à rechercher |
| `--threads` | `10` | Nombre de threads à scraper |
| `--output` | auto | Nom du fichier de sortie |

---

## 5. Problèmes courants

| Symptôme | Cause probable | Solution |
|---|---|---|
| `ModuleNotFoundError: ddgs` (ou `playwright`) | Dépendances pas installées | Refais l'étape 2 |
| `Executable doesn't exist` au scrape | Navigateur Playwright manquant | `python -m playwright install chromium` |
| `dashboard.html introuvable` | Les 3 fichiers ne sont pas dans le même dossier | Garde-les ensemble sur le Desktop |
| La page `localhost:8765` ne charge pas | Le serveur n'est pas lancé / fenêtre fermée | Relance l'étape 1 |
| "Aucun thread trouvé" | Pas de connexion ou mot-clé trop rare | Vérifie la connexion, change de mot-clé |
| Timeout (>180 s) | Trop de threads / Reddit lent | Réduis le nombre de threads |
