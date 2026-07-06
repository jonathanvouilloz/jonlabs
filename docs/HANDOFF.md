# HANDOFF — 2026-07-06

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **MIGRATION COMPLÈTE** (tout le site réel en blueprint · reste : cleanup orphelins + validation mobile + `/epic-recap`) |
| Polish global & design system | docs/features/polish-design-system.md | EN ATTENTE (Phase 6 tags bloquée GSC + reframe blog Lécureux) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |

## Reprendre ici
**Refonte blueprint** — migration terminée (4 commits ce jour : services `7ed8ada`, géo `3282bf2`, divers `dd3be04`, fix pilules `db619ce`). Prochain : soit **`/epic-recap`** (epic de fait bouclé), soit cleanup des composants orphelins (`Halo`/`CTASection`/`FAQ`/`IconChip`), soit trancher les 2 décisions ouvertes (sticky-score + couleurs sévérité de `checklist-15`). Détail complet dans le fichier feature.
Commit : [db619ce] fix(design): retire les pilules-eyebrow au-dessus des titres + grave la règle

## Actions manuelles en attente (côté Jonathan)
- **Validation mobile <720/<900px sur device** de toutes les pages blueprint (l'outil capture à 1568px fixe — breakpoints non testables en screenshot).
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate + hub `/guides`.
- **Reframe éditorial article blog Lécureux** (`visibilite-site-internet-2026.md`) — chiffre inflaté vs data GSC réelle. Décision de voix.
