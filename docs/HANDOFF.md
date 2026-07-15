# HANDOFF — 2026-07-15

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | **EN COURS** (indexation GSC : 3 lots déployés 15.07) |
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **BOUCLÉE** — reste `/epic-recap` |
| Polish global & design system | docs/features/polish-design-system.md | EN COURS (Phase 6 tags **débloquée** 15.07) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |

## Reprendre ici
**Refonte SEO / clusters** — mailler `/consultant-ia/geneve` + `/lausanne` par des liens **contextuels en corps** depuis `hermes-agent-ia-pme`, `workflows-vs-agents-ia-pme`, `temps-perdu-pme-automatisation` (publiés + indexés). **Pas par le footer** (raison dans le feature file). Puis re-run `/seo-index-diagnose` à J+60 (mi-sept.) vs baseline 50/88.
Commit : [ffe993e] revert(footer): retire à nouveau les zones géo — la décision du 10.07 était juste

## Actions manuelles en attente (côté Jonathan)
- **`/epic-recap`** de l'epic Refonte blueprint (bouclé).
- **Validation mobile <720/<900px sur device** des pages blueprint (capture à 1568px fixe) — inclut le nouveau hub `/developpement-web`.
- **Reframe éditorial article Lécureux** (`visibilite-site-internet-2026.md`) — chiffre inflaté vs GSC réelle (choix de voix, reporté).
- Request Indexing GSC : plus nécessaire pour le sitemap (URL inchangée, Google re-fetch seul).
