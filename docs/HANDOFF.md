# HANDOFF — 2026-07-04

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **EN COURS** (exploration lab OK — pairing 04 + BlueprintKit + pages compo/composants ; migration à cadrer) |
| Polish global & design system | docs/features/polish-design-system.md | EN ATTENTE (Phase 6 tags bloquée GSC + reframe blog Lécureux) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md | ✅ PRODUIT (Request Indexing GSC restant) |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Refonte blueprint** — exploration validée sur pages lab (pairing 04 Inter Tight × Instrument Serif, système blueprint, kit partagé `BlueprintKit.astro`, bibliothèque `/styleguide-components`). Prochain : Jonathan vérifie le mobile sur device réel, puis on **cadre la migration** vers le vrai site (homepage d'abord). Détails : `docs/features/refonte-blueprint.md`.
Commit : [à committer] feat(design): exploration blueprint — pairing 04, BlueprintKit, pages lab

## Actions manuelles en attente (GSC — côté Jonathan)
- **Vérif mobile** des pages `/styleguide-compo` + `/styleguide-components` (breakpoint non testable via l'outil navigateur = capture 1568px fixe).
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate + hub `/guides`.
- **Vérif indexation `/blog/tag/*` dans GSC** — prérequis Phase 6 (tags) de l'epic polish.
- **Reframe éditorial article blog Lécureux** (`visibilite-site-internet-2026.md`) — « 1 article = 20 400 imp » inflaté vs data GSC réelle (19,1k site-level). Décision de voix Jonathan.
