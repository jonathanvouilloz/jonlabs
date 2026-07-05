# HANDOFF — 2026-07-05

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **EN COURS** (14 pages migrées : home, services, Vague 1 (7), + **Phase blog : blog/[slug], tag, guides/index+[slug] + 5 composants blog + primitives .co-prose/.ar-*** ; reste 13 services, géo, outils) |
| Polish global & design system | docs/features/polish-design-system.md | EN ATTENTE (Phase 6 tags bloquée GSC + reframe blog Lécureux) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md | ✅ PRODUIT (Request Indexing GSC restant) |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Refonte blueprint** — Phase blog complète migrée (coordinateur direct : couche composants partagée → pas de parallélisation). 4 pages + 5 composants blog + primitives `.co-prose`/`.ar-*` promues dans `blueprint.css`. Build vert 218 pages, 0 console, scroll-spy OK. Prochain : **Phase services** (13 sous-pages `/services/*`, réf `styleguide-services` — vraiment file-disjointes → sous-agents parallèles possibles) OU **Phase géo/programmatique**. Même protocole (`blueprint.css`/Layout/chrome réservés coordinateur). Plan : `~/.claude/plans/ok-continue-sur-les-cheeky-pinwheel.md` (§ Phases suivantes). **Valider mobile <720/<900px sur device**. Note : `guides/[slug]` invisible tant que pubDate pillar future (12.08.2026).
Commit : (à venir) feat(design): Phase blog blueprint

## Actions manuelles en attente (GSC — côté Jonathan)
- **Vérif mobile** des pages blueprint : home, services + **Vague 1** (about, portfolio, contact, tarifs, blog, hermes, mentions) + **Phase blog** (article `blog/[slug]`, tag, `guides` + sidebar TOC repliée <1280px / TOC mobile) + `styleguide-*` (breakpoint <720/<900px non testable via l'outil = capture 1568px fixe).
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate + hub `/guides`.
- **Vérif indexation `/blog/tag/*` dans GSC** — prérequis Phase 6 (tags) de l'epic polish.
- **Reframe éditorial article blog Lécureux** (`visibilite-site-internet-2026.md`) — « 1 article = 20 400 imp » inflaté vs data GSC réelle (19,1k site-level). Décision de voix Jonathan.
