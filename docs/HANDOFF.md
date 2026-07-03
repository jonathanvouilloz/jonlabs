# HANDOFF — 2026-07-03

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Polish global & design system | docs/features/polish-design-system.md | **EN COURS** (Phases 1-5 ✅ build vert — reste Phase 6 tags + 1 sous-tâche Phase 5 bloquée GSC) |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md (+ topical-map-mise-en-place-ia.md) | ✅ PRODUIT (14/14 — Request Indexing GSC restant, sortie au fil des pubDate 12.08→11.09) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md (+ topical-map-consultant-ia.md) | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Polish global & design system** — Phase 5 (Lecureux) faite : source unique `src/data/proof-lecureux.ts` + harmonisation, **recalée sur la vraie data GSC** (accès ouvert en session). Découverte : « Top 1 Google » était inexact (pos. moy. réelle 15,3) → couple honnête gravé « **#1 sur sa niche · 19 000 imp & 367 clics en 5 mois** ». Aussi : fix erreur factuelle (« avocat divorce » → juriste restauration) + retrait preuve SEO de la page IA `consultant-ia` (→ preuve Barber Concept). Build vert (211 pages). **Reste 1 item : reframe éditorial de l'article blog `visibilite-site-internet-2026` (le « 1 article = 20 400 imp » est inflaté — décision de voix Jonathan).** Ensuite **Phase 6 (tags)** — bloquée vérif GSC `/blog/tag/*`. Détails : `docs/features/polish-design-system.md`.
Commit : [e4d47e6] fix(content): recale la preuve Lécureux sur la vraie data GSC

## Actions manuelles en attente (GSC — côté Jonathan)
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate (« Mettre l'IA en place » 12.08→11.09, SEO IA Phase 2, hub/géo Phase 1) + le nouveau hub `/guides`.
- **Vérif indexation `/blog/tag/*` dans GSC** — prérequis avant Phase 6 (tags noindex → savoir lesquels enrichir).
- **Reframe éditorial article blog Lécureux** — `visibilite-site-internet-2026.md` titre « 1 article = 20 400 impressions » : inflaté (data GSC = site-level 19 105 imp / 367 clics / pos. 15,3 sur 5 mois, aucune page unique à 20k). Décision de voix Jonathan : garder le récit « 1 article » avec chiffres réels, ou recadrer « stratégie de contenu » ? Non touché tant qu'il n'a pas tranché.
- Known issue bénin : loader `blog` scanne `.briefs/` → warning `Duplicate id` au build (déterministe, l'article gagne). Fix optionnel : `loader: glob({ pattern: '*.md', base: './src/content/blog' })` dans `src/content/config.ts`.
