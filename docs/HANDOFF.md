# HANDOFF — 2026-07-04

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **EN COURS** (Lots 0-4 faits : nav + blog + services + portfolio ; CV repoussé hors lab ; reste Lot 5 décoratifs, Lot motion+mocks+hub, puis migration vers vrai site) |
| Polish global & design system | docs/features/polish-design-system.md | EN ATTENTE (Phase 6 tags bloquée GSC + reframe blog Lécureux) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md | ✅ PRODUIT (Request Indexing GSC restant) |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Refonte blueprint** — pages lab nav/blog/services/**portfolio** faites (Lots 0-4), build OK **218 pages**. CV **repoussé hors lab** (décision Jonathan). Prochain : **Lot 5 — décoratifs** (SVG/assets `src/assets/` en langage blueprint) puis **Lot motion + réconciliation mocks + hub**, ensuite **cadrer la migration** du système blueprint vers le vrai site (homepage d'abord). Détails + pièges design : `docs/features/refonte-blueprint.md`. Valider le mobile <720/<900px sur device (non capturable en screenshot).
Commit : (Lot 4 à committer) — branche design/blueprint-lab

## Actions manuelles en attente (GSC — côté Jonathan)
- **Vérif mobile** des pages `/styleguide-compo` + `/styleguide-components` (breakpoint non testable via l'outil navigateur = capture 1568px fixe).
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate + hub `/guides`.
- **Vérif indexation `/blog/tag/*` dans GSC** — prérequis Phase 6 (tags) de l'epic polish.
- **Reframe éditorial article blog Lécureux** (`visibilite-site-internet-2026.md`) — « 1 article = 20 400 imp » inflaté vs data GSC réelle (19,1k site-level). Décision de voix Jonathan.
