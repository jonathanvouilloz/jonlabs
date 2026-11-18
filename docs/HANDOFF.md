# HANDOFF — 2026-11-19 (main = rebrand-v2, en production)

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Plan éditorial fin 2026 (systèmes et agents IA) | docs/features/plan-editorial-fin-2026.md | **EN COURS 19.11** — 2 brouillons écrits, migration v2 du repo interrompue |
| Tri contenu « focus IA » | docs/features/tri-contenu-focus-ia.md | **EN COURS** — en ligne 09.11, bilan 23.11 → 09.12 |
| Cas client Swiss Dental Care | docs/features/cas-client-swiss-dental-care.md | VALIDÉ — publication production autorisée le 14.10.2026 |
| Canonical non-www, cannibalisation, dispersion | docs/features/canonical-cannibalisation.md | **EN COURS** — lots A+B livrés, C/D gelés jusqu'à S+3. Les 3 villes retirées le 09.11 (`ville-la-grand`, `saint-julien-en-genevois`, `la-roche-sur-foron`) sortent du périmètre ; le fichier `villes-frontalieres-ctr.md` est supprimé (cause couverte ici) |
| Silo mobile « agence application mobile » | docs/features/silo-mobile-agence.md | S+4 MESURÉ 08.09 — CTR toujours nul. Offre app mobile conservée dans le pivot IA |
| Refonte piliers micro-intentions / AIO | docs/features/refonte-piliers-micro-intentions.md | EN COURS — Lots A & B poussés, reste CTR blog + C + D/E/F |
| Polish global & design system | docs/features/polish-design-system.md | EN COURS |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN ATTENTE — plan 3 clusters en partie caduc après le pivot focus IA du 09.11 (SEO local/GMB/GEO abandonnés ; plan maître `restructuration-clusters.md` supprimé). Garde la carte du code `/developpement-web`. Mesure : nouvelle baseline 09.11 |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md | EN ATTENTE — Phase 3 ; devient le cœur du pivot focus IA (09.11) |
| Devis Cabinet Grange-Canal | docs/features/devis-cabinet-grange-canal.md | CODE FINI — attend le call |
| Refonte blueprint (design/typo) | docs/features/refonte-blueprint.md | BOUCLÉE — reste `/epic-recap` |
| Portfolio projets perso (Barnaby, Inkmesh, Quikform) | docs/features/portfolio-projets-perso.md | **CODE FINI 19.11** — reste : vérifier le rendu de `/portfolio/inkmesh` et le mobile |
| Home confiance et résultat client | docs/features/home-trust-roi.md | **CODE FINI 19.11** — reste : aligner la meta description de la home, vérifier le rendu des pages qui utilisent `CaseSpec`/`Faq` |
| Rebrand v2 (DA freelance systèmes IA) | docs/features/rebrand-v2.md | **EN PRODUCTION 17.11** — reste tests manuels (formulaire contact, Cal.com, dock mobile) + captures/chiffres des cas IA (tâches Jon) |
| Comparatif outils web pour agents IA | docs/features/comparatif-browser-agents-ia.md | **EN LIGNE 16.11** — reste indexation GSC + benchmark maison |
| Refresh piliers IA (kirako) | mergé dans main (`1cca170`) | **EN LIGNE 21.09** — mesurer vs baseline 428 imp / 0 clic |

## Reprendre ici
Plan éditorial fin 2026 — relancer `/init-all` (migration v2 interrompue), puis humanizer, review et covers des brouillons du 22.11 et du 24.11.
Commit : [5256dc6] fix(blog): prix d'installation Hermes aligné sur /tarifs

> Décisions structurantes → `docs/DECISIONS.md`. Tâches côté Jonathan → `cerveau/10-Projets/jonlabs/jonlabs-human.md`.
