# HANDOFF — 2026-07-05

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **EN COURS** (Lots 0-5 + motion compo + preuve réelle + template proof faits ; reste réconciliation "hub", puis migration vers le vrai site) |
| Polish global & design system | docs/features/polish-design-system.md | EN ATTENTE (Phase 6 tags bloquée GSC + reframe blog Lécureux) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md | ✅ PRODUIT (Request Indexing GSC restant) |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Refonte blueprint** — Lot motion compo + preuve Lécureux réelle + template `proof-<client>.ts` bouclés. Prochain : **réconciliation "hub"** (dernier item du lot) puis **cadrer la migration** blueprint → vrai site (homepage d'abord). Décision ouverte : unifier le pattern `proof-<client>.ts` vers les autres repos sites. Détails + pièges : `docs/features/refonte-blueprint.md`. Valider mobile <720/<900px sur device.
Commit : [e4e482d] feat(design): Lot motion compo + preuve Lécureux réelle + template proof-<client>.ts

## Actions manuelles en attente (GSC — côté Jonathan)
- **Vérif mobile** des pages `styleguide-*` (breakpoint non testable via l'outil navigateur = capture 1568px fixe).
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate + hub `/guides`.
- **Vérif indexation `/blog/tag/*` dans GSC** — prérequis Phase 6 (tags) de l'epic polish.
- **Reframe éditorial article blog Lécureux** (`visibilite-site-internet-2026.md`) — « 1 article = 20 400 imp » inflaté vs data GSC réelle (19,1k site-level). Décision de voix Jonathan.
