# HANDOFF — 2026-07-06

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **EN COURS — quasi complète** (50/51 pages · reste **CV** `cv.astro`+`cv-pdf` repoussé par Jonathan, seule vraie page indexée encore brutaliste · + cleanup orphelins + validation mobile) |
| Polish global & design system | docs/features/polish-design-system.md | EN ATTENTE (Phase 6 tags bloquée GSC + reframe blog Lécureux) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |

## Reprendre ici
**Refonte blueprint** — quasi complète (4 commits ce jour : services `7ed8ada`, géo `3282bf2`, divers `dd3be04`, fix pilules `db619ce`). **Reste 1 vraie page** : `cv.astro` (+`cv-pdf`) — indexée, encore brutaliste, repoussée par décision Jonathan (9 composants `cv/*` + export PDF, gros effort). Autres options : cleanup orphelins (`Halo`/`CTASection`/`FAQ`/`IconChip`), 2 décisions ouvertes (sticky-score + couleurs sévérité `checklist-15`). Détail dans le fichier feature.
Commit : [db619ce] fix(design): retire les pilules-eyebrow au-dessus des titres + grave la règle

## Actions manuelles en attente (côté Jonathan)
- **Validation mobile <720/<900px sur device** de toutes les pages blueprint (l'outil capture à 1568px fixe — breakpoints non testables en screenshot).
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate + hub `/guides`.
- **Reframe éditorial article blog Lécureux** (`visibilite-site-internet-2026.md`) — chiffre inflaté vs data GSC réelle. Décision de voix.
