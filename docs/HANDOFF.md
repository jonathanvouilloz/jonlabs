# HANDOFF — 2026-07-02

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md (+ topical-map-mise-en-place-ia.md) | **✅ PRODUIT** (14/14, build vert — commit/push + Request Indexing restants) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md (+ topical-map-consultant-ia.md) | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Cluster « Mettre l'IA en place »** — 14/14 produits (article + cover), build vert. RESTE : commit + `git push` (rebuild/deploy, sortie au fil des pubDate 12.08→11.09), puis Request Indexing GSC des nouvelles URLs une fois publiées. Cluster fini → proposer `/epic-recap`. Détails : `docs/plan-mise-en-place-ia.md`.
Commit : (commit de session à créer — pré-session 92ea148)

## Actions manuelles en attente (pré-existantes)
- `git push` des commits Phase 2 SEO IA (déclenche rebuild/deploy).
- Request Indexing GSC sur les 4 pages Phase 2 (+ hub/géo Phase 1).
- Known issue bénin : loader `blog` scanne `.briefs/` → warning `Duplicate id` au build (déterministe, l'article gagne). Fix optionnel : `loader: glob({ pattern: '*.md', base: './src/content/blog' })` dans `src/content/config.ts`.
