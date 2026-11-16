# Comparatif des outils web pour agents IA

> Article `/blog/comparatif-browser-agents-ia` (11 outils : Obscura, Kitesurf, Lightpanda, agent-browser,
> Browser Use, Stagehand, Steel, Skyvern, Tavily, Firecrawl, Crawl4AI). Publié le 2026-11-16.

## Etat session 2026-11-16

**Fait :**
- Recherche sur les 11 dépôts et pages de prix officiels, puis matrice de 19 critères vérifiée case par case par 4 sous-agents (doc officielle uniquement).
- Article MDX (~7 600 mots) réécrit avec `humanizer`, vérifié avec `seo-lint` et `seo-review`, cover via le preset `blog-cover-visual` (skill `visual`).
- Comparateur interactif rendu côté serveur (filtres, tri, comparaison de 2 ou 3 outils partageable par `?comparer=`), cartes sur mobile.
- Maillage : 5 liens entrants (hermes-agent-ia-pme, openclaw-pme-suisse, meilleurs-vps-hermes-agent-suisse, integrer-agent-ia-outils-existants, workflows-vs-agents-ia-pme).
- Thème article : citations en Fragment Mono (au lieu d'Instrument Serif), en-tête « L'essentiel en bref » en casse normale.

**Prochain :** demander l'indexation GSC (tâche Jonathan). Puis lancer le protocole de benchmark décrit dans l'article (8 cibles, 10 passages, VPS 4 vCPU / 8 Go) et publier les résultats en mise à jour + changelog.

**Pieges :**
- Les styles scopés d'Astro ne matchent pas `.co-prose` (défini hors composant) : préfixer par `:global(.co-prose)`.
- `seo-lint` donne des faux positifs sur ce fichier : il ne lit pas le bloc `image:` imbriqué et prend `# docker-compose.yml` d'un bloc de code pour un H1.
- Données datées du 16.11.2026 : prix et versions bougent vite. Une fonction dispo seulement en cloud est notée « Partiel ».
- Fragment Mono n'est chargé qu'en poids 400 : le gras des citations est un faux gras.

**Commit :** [9a7c311] style(blog): citations en Fragment Mono, TL;DR sans capitales + maillage du comparatif

---

## Carte du code
> Mise a jour : 2026-11-16

| Fichier | Role |
|---------|------|
| `src/content/blog/comparatif-browser-agents-ia.mdx` | L'article ; importe le composant pour le tableau et la matrice |
| `src/data/browser-agents.ts` | Source unique : fiches outils + matrice (codes O/P/N/? par ligne, ordre des colonnes = `tools`) |
| `src/components/blog/BrowserAgentsCompare.astro` | `part="tableau"` (filtres, tri, comparateur) et `part="matrice"` ; script vanilla, SSR complet |
| `public/images/blog/comparatif-browser-agents-ia.webp` | Cover 1536×864 |
| `src/styles/blueprint.css` | `.co-prose blockquote` en Fragment Mono, `.co-tldr-head` simplifié |
| `src/layouts/Layout.astro` | Chargement Google Fonts + Fragment Mono |

### Decisions cles
- Le comparateur lit `src/data/browser-agents.ts` : mettre à jour une donnée = un seul endroit (tableau, comparateur et matrice suivent).
- Aucun chiffre de performance présenté comme test maison : benchmarks éditeurs et concurrent (Lightpanda) séparés.
