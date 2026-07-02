# HANDOFF — 2026-07-02

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md (+ topical-map-mise-en-place-ia.md) | **EN COURS** (planifié, prêt à produire) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md (+ topical-map-consultant-ia.md) | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Cluster « Mettre l'IA en place »** — démarrer le chantier : `/seo-brief mettre-en-place-ia-entreprise-guide` (pillar en premier, `page_type: pillar` → `src/content/pages/`), puis #1→#13 du Tableau de production. Cadence pleine jusqu'au 28.08 → caler dès septembre 2026 (`/calendar`). Skill lead-magnet en backlog (portée = FOND).
Commit : (voir dernier commit docs de ce wrap)

## Actions manuelles en attente (pré-existantes)
- `git push` des commits Phase 2 SEO IA (déclenche rebuild/deploy).
- Request Indexing GSC sur les 4 pages Phase 2 (+ hub/géo Phase 1).
- Known issue bénin : loader `blog` scanne `.briefs/` → warning `Duplicate id` au build (déterministe, l'article gagne). Fix optionnel : `loader: glob({ pattern: '*.md', base: './src/content/blog' })` dans `src/content/config.ts`.
