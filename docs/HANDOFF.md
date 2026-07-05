# HANDOFF — 2026-07-05

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **EN COURS** (Lots 0-5 faits : nav/blog/services/portfolio + CTA + décoratifs ; reste Lot motion+mocks+hub, puis migration vers le vrai site) |
| Polish global & design system | docs/features/polish-design-system.md | EN ATTENTE (Phase 6 tags bloquée GSC + reframe blog Lécureux) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md | ✅ PRODUIT (Request Indexing GSC restant) |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Refonte blueprint** — Lot 5 décoratifs bouclé (13 primitives + vitrine, FAQ smooth, règle motion ease-out). Prochain : **Lot motion + réconciliation mocks + hub** — animer la scénographie (`data-animate`) ET remplacer le mock preuve de `styleguide-compo` (l.140-167). Détails + pièges : `docs/features/refonte-blueprint.md`. Valider le mobile <720/<900px sur device.
Commit : [694dbfa] feat(design): Lot 5 décoratifs — 13 primitives blueprint + vitrine, FAQ smooth, règle motion ease-out

## Actions manuelles en attente (GSC — côté Jonathan)
- **Vérif mobile** des pages `styleguide-*` (breakpoint non testable via l'outil navigateur = capture 1568px fixe).
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate + hub `/guides`.
- **Vérif indexation `/blog/tag/*` dans GSC** — prérequis Phase 6 (tags) de l'epic polish.
- **Reframe éditorial article blog Lécureux** (`visibilite-site-internet-2026.md`) — « 1 article = 20 400 imp » inflaté vs data GSC réelle (19,1k site-level). Décision de voix Jonathan.
