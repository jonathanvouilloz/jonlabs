# HANDOFF — 2026-07-05

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **EN COURS** (10 pages migrées : home, services + **Vague 1 : about/portfolio/contact/tarifs/blog/hermes/mentions** ; reste blog complet, 13 services, géo, outils) |
| Polish global & design system | docs/features/polish-design-system.md | EN ATTENTE (Phase 6 tags bloquée GSC + reframe blog Lécureux) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md | ✅ PRODUIT (Request Indexing GSC restant) |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Refonte blueprint** — services + Vague 1 (7 pages) migrés via sous-agents parallèles + vérif centralisée. Prochain : **Phase blog complète** (`blog/[slug]`, tag, guides — réutilisent les composants blog migrés) OU **Phase services** (13 sous-pages `/services/*`, réf `styleguide-services`). Même protocole (sous-agents file-disjoints, `blueprint.css`/Layout/chrome réservés coordinateur). Plan : `~/.claude/plans/ok-continue-sur-les-cheeky-pinwheel.md`. **Valider mobile <720/<900px sur device**.
Commit : [6a09a34] feat(design): Vague 1 blueprint — 7 pages principales

## Actions manuelles en attente (GSC — côté Jonathan)
- **Vérif mobile** des pages blueprint : home, services + **Vague 1** (about, portfolio, contact, tarifs, blog, hermes, mentions) + `styleguide-*` (breakpoint <720/<900px non testable via l'outil = capture 1568px fixe).
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate + hub `/guides`.
- **Vérif indexation `/blog/tag/*` dans GSC** — prérequis Phase 6 (tags) de l'epic polish.
- **Reframe éditorial article blog Lécureux** (`visibilite-site-internet-2026.md`) — « 1 article = 20 400 imp » inflaté vs data GSC réelle (19,1k site-level). Décision de voix Jonathan.
