# HANDOFF — 2026-07-05

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **EN COURS** (lab bouclé + **homepage & chrome migrés en blueprint** ; reste les autres pages) |
| Polish global & design system | docs/features/polish-design-system.md | EN ATTENTE (Phase 6 tags bloquée GSC + reframe blog Lécureux) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md | ✅ PRODUIT (Request Indexing GSC restant) |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Refonte blueprint** — homepage + chrome (Header/Footer, 35 pages) migrés en blueprint (Lots A/B/C). Prochain : **migrer `services.astro`** (couture n°1 : header solide sur son hero sombre transparent), puis les autres pages une par une (pattern : `<main class="co-root">` + sections `.co-*`). Détails/pièges : `docs/features/refonte-blueprint.md`. **Valider mobile <720/<900px sur device** (non capturable via l'outil).
Commit : [bfb7fa3] feat(design): Lot C homepage blueprint (sections + preuve Lécureux)

## Actions manuelles en attente (GSC — côté Jonathan)
- **Vérif mobile** de la homepage blueprint + pages `styleguide-*` (breakpoint non testable via l'outil = capture 1568px fixe).
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate + hub `/guides`.
- **Vérif indexation `/blog/tag/*` dans GSC** — prérequis Phase 6 (tags) de l'epic polish.
- **Reframe éditorial article blog Lécureux** (`visibilite-site-internet-2026.md`) — « 1 article = 20 400 imp » inflaté vs data GSC réelle (19,1k site-level). Décision de voix Jonathan.
