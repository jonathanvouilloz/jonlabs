# HANDOFF — 2026-07-03

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Polish global & design system | docs/features/polish-design-system.md | **EN COURS** (Phases 1-5 ✅ build vert — reste Phase 6 tags + 1 sous-tâche Phase 5 bloquée GSC) |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md (+ topical-map-mise-en-place-ia.md) | ✅ PRODUIT (14/14 — Request Indexing GSC restant, sortie au fil des pubDate 12.08→11.09) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md (+ topical-map-consultant-ia.md) | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Polish global & design system** — Phase 5 (Lecureux) faite : source unique `src/data/proof-lecureux.ts`, harmonisation de toutes les reprises sur « Top 1 Google · 5 mois · 10+ leads », **fix d'une erreur factuelle** (Léo décrit comme « avocat divorce » → juriste restauration dans referencement-local), et retrait de la preuve SEO de la page IA `consultant-ia` (remplacée par une preuve Barber Concept). Build vert (211 pages), **à committer**. **Prochain : Phase 6 (tags)** — bloquée : vérif indexation GSC `/blog/tag/*` d'abord. Détails : `docs/features/polish-design-system.md`.
Commit : [à committer] feat(content): Phase 5 — source unique preuve Lécureux + harmonisation + fix divorce→restauration

## Actions manuelles en attente (GSC — côté Jonathan)
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate (« Mettre l'IA en place » 12.08→11.09, SEO IA Phase 2, hub/géo Phase 1) + le nouveau hub `/guides`.
- **Vérif indexation `/blog/tag/*` dans GSC** — prérequis avant Phase 6 (tags noindex → savoir lesquels enrichir).
- **Chiffres GSC article blog Lécureux** — l'article `visibilite-site-internet-2026.md` affiche 340 clics / position moyenne 12,4 / 20 400 impressions (pour « 1 article »), divergent du portfolio (485 clics / #1). Jonathan redonne les **vrais chiffres GSC** → j'aligne `proof-lecureux.ts` (si le clic canonique change) + l'article. (Le couple canonique « Top 1 · 5 mois · 10+ leads » est figé ; seul ce point reste.)
- Known issue bénin : loader `blog` scanne `.briefs/` → warning `Duplicate id` au build (déterministe, l'article gagne). Fix optionnel : `loader: glob({ pattern: '*.md', base: './src/content/blog' })` dans `src/content/config.ts`.
