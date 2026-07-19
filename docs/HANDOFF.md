# HANDOFF — 2026-07-19

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Polish global & design system | docs/features/polish-design-system.md | **EN COURS** (19.07 : CTA + blog UX + 48 covers ✅ ; migration spacing site-wide BOUCLÉE ✅) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN ATTENTE (indexation GSC : re-run /seo-index-diagnose mi-sept. vs baseline 50/88) |
| Devis Cabinet Grange-Canal | docs/features/devis-cabinet-grange-canal.md | CODE FINI — attend le call (3 vérifs bloquantes) |
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | BOUCLÉE — reste `/epic-recap` |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN ATTENTE (Phase 1-2 ✅, Phase 3 à venir) |

## Reprendre ici
**Polish / design system** — migration spacing **bouclée** ✅ (0 résidu migrable co-root). Prochain : **revue live des 48 covers** (`npm run dev` → /blog, featured = article publié le + récent). Puis restes : reframe éditorial Lécureux (reporté), portrait hero détouré (piste Jonathan).
Commit : [9e0d476] feat(design): sweep final spacing — 3-valeurs + traînards co-root

## Actions manuelles en attente (côté Jonathan)
- **Devis Grange-Canal — 3 vérifs AVANT envoi** (« 45 à 60 min » concurrent, « 9 vs 160 », « dont personne ne se sert » sur les 31 avis) — détail dans son feature file.
- **`/epic-recap`** de l'epic Refonte blueprint (bouclé).
- **Portrait hero** : reprendre un portrait américain, détourer le fond, réintégrer sur crème (recadrage actuel transitoire) — `polish-design-system.md`.
- **Bandeau de confiance** : trancher « Lécureux Conseil » vs `client.name: "Léo Lécureux"` (`ClientsBanner.astro`).
- **Reframe éditorial article Lécureux** (`visibilite-site-internet-2026.md`) — chiffre inflaté vs GSC (choix de voix, reporté).
- Le dossier Bureau `covers-preview/` (vieilles previews v1/v2) peut être supprimé.
