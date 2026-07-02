# HANDOFF — 2026-07-02

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Polish global & design system | docs/features/polish-design-system.md | **EN COURS** (Phase 1a+1b ✅ build vert — Phase 2 à venir) |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md (+ topical-map-mise-en-place-ia.md) | ✅ PRODUIT (14/14 — commit/push + Request Indexing restants) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md (+ topical-map-consultant-ia.md) | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Polish global & design system** — Phases 1a (tokens `@theme` mono-teal + alias legacy dans `Layout.astro`) et 1b (purge des couleurs rogue : magenta/roses/jaunes/bleus/rouge déco → teal) faites, build vert (209 pages). Nouvelle page live `/styleguide` (noindex) = source de vérité visuelle. **Prochain : Phase 2** — échelle de titres unique + surlignage wash teal partout, fix du H1 invisible des `/services/*`. Décisions restantes à trancher : **nav (3)** et **pages tags (4)**. Validation visuelle `/styleguide` recommandée avant Phase 2. Détails : `docs/features/polish-design-system.md`.
Commit : (commit Phase 1a+1b à créer ce wrap — pré-session 234a616)

## Actions manuelles en attente (pré-existantes)
- **Cluster « Mettre l'IA en place »** : `git push` (rebuild/deploy, sortie au fil des pubDate 12.08→11.09) puis Request Indexing GSC des nouvelles URLs. Cluster fini → proposer `/epic-recap`. Détails : `docs/plan-mise-en-place-ia.md`.
- `git push` des commits Phase 2 SEO IA (déclenche rebuild/deploy).
- Request Indexing GSC sur les 4 pages Phase 2 (+ hub/géo Phase 1).
- Known issue bénin : loader `blog` scanne `.briefs/` → warning `Duplicate id` au build (déterministe, l'article gagne). Fix optionnel : `loader: glob({ pattern: '*.md', base: './src/content/blog' })` dans `src/content/config.ts`.
