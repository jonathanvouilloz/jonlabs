# HANDOFF — 2026-07-06

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **MIGRATION COMPLÈTE** (45/51 · **toutes les pages indexées** en blueprint, CV inclus · reste cleanup orphelins + validation mobile + `/epic-recap`) |
| Polish global & design system | docs/features/polish-design-system.md | EN ATTENTE (Phase 6 tags bloquée GSC + reframe blog Lécureux) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |

## Reprendre ici
**Refonte blueprint** — **toutes les pages indexées migrées** (6 commits ce jour : services `7ed8ada`, géo `3282bf2`, divers `dd3be04`, fix pilules `db619ce`, CV `9fa5643`). Les 6 pages non-`.co-root` restantes sont **toutes noindex hors périmètre** : `styleguide{,-lab}` (réf brutaliste volontaire), `cv-pdf` + `devis-client/[slug]` + 2 `outils/*-pdf` (docs standalone sans chrome). Prochain : **`/epic-recap`** (epic bouclé), ou cleanup orphelins (`Halo`/`CTASection`/`FAQ`/`IconChip`), ou 2 décisions ouvertes (sticky-score + couleurs sévérité `checklist-15`, + pixel-explosion CV possiblement clippé).
Commit : [9fa5643] feat(design): CV blueprint — cv.astro + 9 composants cv/*

## Actions manuelles en attente (côté Jonathan)
- **Validation mobile <720/<900px sur device** de toutes les pages blueprint (l'outil capture à 1568px fixe — breakpoints non testables en screenshot).
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate + hub `/guides`.
- **Reframe éditorial article blog Lécureux** (`visibilite-site-internet-2026.md`) — chiffre inflaté vs data GSC réelle. Décision de voix.
