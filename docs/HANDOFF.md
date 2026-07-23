# HANDOFF — 2026-07-23

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Polish global & design system | docs/features/polish-design-system.md | **EN COURS** (19.07 : CTA + blog UX + 48 covers ✅ ; spacing site-wide ✅ ; dernières images brutalistes + tableaux ✅) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN ATTENTE (indexation GSC : re-run /seo-index-diagnose mi-sept. vs baseline 50/88) |
| Devis Cabinet Grange-Canal | docs/features/devis-cabinet-grange-canal.md | CODE FINI — attend le call (3 vérifs bloquantes) |
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | BOUCLÉE — reste `/epic-recap` |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN ATTENTE (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte piliers micro-intentions / AIO | docs/features/refonte-piliers-micro-intentions.md | EN COURS (23.07 : Phase 0 GSC mesurée ✅ + plan re-priorisé data-driven — Lot A à démarrer ; D1/D2/D5 ne bloquent que D/E/F) |

## Reprendre ici
**Refonte piliers micro-intentions** — Phase 0 GSC mesurée ✅ (28j : pos moy 15.8 ; cannibalisation blog↔pilier + CTR page-1 nul = vrais leviers ; www/non-www = 308 déjà OK). Plan re-priorisé : **A** ciblage on-page → **CTR blog** → **B** schema pilier → **C** maillage → **D/E/F** contenu (gated D1/D2/D5). Prochain : **Lot A** (+ baseline `/seo-ai-visibility` juste avant le 1er déploiement). Détail + tables Phase 0 : `docs/features/refonte-piliers-micro-intentions.md`.
(Autre fil ouvert : Polish/design — revue live des 48 covers, `npm run dev` → /blog.)
Commit : 5ec98a9 docs(seo) epic piliers micro-intentions — HEAD

## Actions manuelles en attente (côté Jonathan)
- **Décisions D1-D5** de l'epic piliers micro-intentions (prix réels mvp/mobile, secteurs revendiqués, Webflow GE vs romand, section automatisation, chiffres clients publiables) — détail dans son feature file.
- **Devis Grange-Canal — 3 vérifs AVANT envoi** (« 45 à 60 min » concurrent, « 9 vs 160 », « dont personne ne se sert » sur les 31 avis) — détail dans son feature file.
- **`/epic-recap`** de l'epic Refonte blueprint (bouclé).
- **Portrait hero** : reprendre un portrait américain, détourer le fond, réintégrer sur crème (recadrage actuel transitoire) — `polish-design-system.md`.
- **Bandeau de confiance** : trancher « Lécureux Conseil » vs `client.name: "Léo Lécureux"` (`ClientsBanner.astro`).
- **Reframe éditorial article Lécureux** (`visibilite-site-internet-2026.md`) — chiffre inflaté vs GSC (choix de voix, reporté).
- Le dossier Bureau `covers-preview/` (vieilles previews v1/v2) peut être supprimé.
