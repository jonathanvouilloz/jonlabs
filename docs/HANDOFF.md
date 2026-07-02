# HANDOFF — 2026-07-02

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Polish global & design system | docs/features/polish-design-system.md | **EN COURS** (Phase 3 pilote v2 ✅ build vert/pushé — rollout à venir) |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md (+ topical-map-mise-en-place-ia.md) | ✅ PRODUIT (14/14 — commit/push + Request Indexing restants) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md (+ topical-map-consultant-ia.md) | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Polish global & design system** — Phase 3 **pilote v2 fait** : formes signature (`src/components/shapes/`), illustrations carré `visual` (about/freelance-geneve/consultant-ia), highlights unifiés en wash teal clair, `IconChip.astro` + kill emoji. Build vert (209 pages), pushé. **Prochain : Phase 3 rollout** — images carré + IconChip sur `consultant-ia/index`, `metiers/[metier]`, `developpement-web/[ville]`, puis `services/*` + composants CV. Décisions **nav (3)** + **tags (4)** toujours à trancher. Détails : `docs/features/polish-design-system.md`.
Commit : 643f592 feat(design): Phase 3 pilote — aération, illustrations carré & cohérence

## Actions manuelles en attente (pré-existantes)
- **Cluster « Mettre l'IA en place »** : `git push` (rebuild/deploy, sortie au fil des pubDate 12.08→11.09) puis Request Indexing GSC des nouvelles URLs. Cluster fini → proposer `/epic-recap`. Détails : `docs/plan-mise-en-place-ia.md`.
- `git push` des commits Phase 2 SEO IA (déclenche rebuild/deploy).
- Request Indexing GSC sur les 4 pages Phase 2 (+ hub/géo Phase 1).
- Known issue bénin : loader `blog` scanne `.briefs/` → warning `Duplicate id` au build (déterministe, l'article gagne). Fix optionnel : `loader: glob({ pattern: '*.md', base: './src/content/blog' })` dans `src/content/config.ts`.
