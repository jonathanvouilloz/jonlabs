# HANDOFF — 2026-07-15

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Devis Cabinet Grange-Canal | docs/features/devis-cabinet-grange-canal.md | **CODE FINI** — poussé, `status: draft`. Bloqué sur 3 vérifs + le call |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | **EN COURS** (indexation GSC : 3 lots déployés 15.07) |
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | **BOUCLÉE** — reste `/epic-recap` |
| Polish global & design system | docs/features/polish-design-system.md | EN COURS (Phase 6 tags débloquée · portrait + bandeau faits 15.07) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |

## Reprendre ici
**Refonte SEO / clusters** — mailler `/consultant-ia/geneve` + `/lausanne` par des liens **contextuels en corps** depuis `hermes-agent-ia-pme`, `workflows-vs-agents-ia-pme`, `temps-perdu-pme-automatisation`. **Pas par le footer** (raison dans le feature file). Puis re-run `/seo-index-diagnose` à J+60 (mi-sept.) vs baseline 50/88.
Le **Devis Grange-Canal** n'a plus rien à coder : il attend le call (3 vérifs bloquantes listées dans son feature file).
Commit : [5d3fa66] chore(seo-data) · devis : [8c522b9] feat(devis): migre le template en blueprint et réécrit le devis Grange-Canal

## Actions manuelles en attente (côté Jonathan)
- **Devis Grange-Canal — 3 vérifs AVANT envoi** : le « 45 à 60 minutes » attribué à un concurrent (réponse d'IA non reproductible → capture ou retrait), le « 9 vs 160 » (jamais recompté), et « dont personne ne se sert » sur les 31 avis (si elle y répond : faux et vexant). Détail dans le feature file.
- **`/epic-recap`** de l'epic Refonte blueprint (bouclé).
- **Portrait hero** : reprendre un **portrait américain**, détourer le fond, réintégrer sur crème (le recadrage actuel est transitoire). Détail dans `polish-design-system.md`.
- **Bandeau de confiance** : trancher « Lécureux Conseil » vs `client.name: "Léo Lécureux"` (`ClientsBanner.astro`).
- **Validation mobile <720/<900px sur device** des pages blueprint — inclut `/developpement-web` et **la nouvelle page devis** (jamais validée sur un vrai mobile : le viewport du navigateur outillé reste bloqué à 2116px).
- **Reframe éditorial article Lécureux** (`visibilite-site-internet-2026.md`) — chiffre inflaté vs GSC réelle (choix de voix, reporté).
- `src/content/devis/perf-lecureux.png` : orphelin (0 référence, non servi depuis `src/content/`). À supprimer ?
