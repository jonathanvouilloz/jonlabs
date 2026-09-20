# HANDOFF — 2026-09-20

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Canonical non-www, cannibalisation, dispersion | docs/features/canonical-cannibalisation.md | **EN COURS** — lots A+B livrés, C/D gelés jusqu'à S+3 |
| Silo mobile « agence application mobile » | docs/features/silo-mobile-agence.md | S+4 MESURÉ 08.09 — CTR toujours nul |
| Villes frontalières — CTR + e-commerce | docs/features/villes-frontalieres-ctr.md | S+4 MESURÉ 08.09 — cause identifiée, cf. canonical-cannibalisation |
| Refonte piliers micro-intentions / AIO | docs/features/refonte-piliers-micro-intentions.md | EN COURS — Lots A & B poussés, reste CTR blog + C + D/E/F |
| Polish global & design system | docs/features/polish-design-system.md | EN COURS |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN ATTENTE — `/seo-index-diagnose` mi-sept. vs baseline 50/88 |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN ATTENTE — Phase 3 |
| Devis Cabinet Grange-Canal | docs/features/devis-cabinet-grange-canal.md | CODE FINI — attend le call |
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | BOUCLÉE — reste `/epic-recap` |
| Refresh piliers IA (kirako) | branche `refresh-piliers-ia` | **CODE FINI** — 6 commits, non mergé |

## Reprendre ici
**Refresh piliers IA** — branche `refresh-piliers-ia`, 6 commits, à relire puis merger. Née d'une veille sur kirako.ai (concurrent direct : même positionnement, même arborescence `/consultant-ia` · `/metiers/*` · `/hermes`).

Ce qui a changé :
1. Bug de spécificité du reset blueprint — l'échelle `--space-*` posée sur les Hn était muette partout. Passage en `:where()`, ce qui réveille ~12 règles mortes.
2. Respiration des 27 heros sortie du style inline → tokens `--hero-pad-*`.
3. `/hermes` repositionné sur « agent IA sur mesure » : il faisait 88 imp / 0 clic en se battant contre son propre article de blog sur « hermes agent ».
4. `/services/automatisation` et `/services/integration-outils` (noindex + hors sitemap) absorbés en sections ancrées de `/consultant-ia`, 301 dans `vercel.json`.
5. Services IA en deux familles « Sur mesure » / « Clé en main », rangée de pills orpheline retirée.
6. `src/components/FlowDiagram.astro` (promotion de `.rd-flow`) : schéma de flux dans le hero Hermès et dans le bento de cas d'usage.

**À surveiller après mise en ligne** : `/consultant-ia`, `/metiers/*` et `/hermes` faisaient ensemble 428 impressions et **zéro clic**. C'est la baseline contre laquelle mesurer ce refresh.

**Canonical & cannibalisation** — attendre la mesure S+3 (~29.09) avant de toucher aux lots C/D : modifier maintenant rend le gain illisible. Point prévu avec Jonathan vers le 22.09.
Commit : `8165924` fix(seo): éradique l'hôte non-www et sort le maillage géo de la home

> Décisions structurantes → `docs/DECISIONS.md`. Tâches côté Jonathan → `cerveau/10-Projets/jonlabs/jonlabs-human.md`.
