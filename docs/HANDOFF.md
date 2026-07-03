# HANDOFF — 2026-07-03

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Polish global & design system | docs/features/polish-design-system.md | **EN COURS** (Phases 1-4 ✅ build vert + poussé — reste Phase 5 Lecureux & Phase 6 tags) |
| Cluster « Mettre l'IA en place » | docs/plan-mise-en-place-ia.md (+ topical-map-mise-en-place-ia.md) | ✅ PRODUIT (14/14 — Request Indexing GSC restant, sortie au fil des pubDate 12.08→11.09) |
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md (+ topical-map-consultant-ia.md) | EN COURS (Phase 1-2 ✅, Phase 3 à venir) |
| Refonte SEO / clusters | docs/features/refonte-seo-clusters.md | EN COURS |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Polish global & design system** — Phase 4 (Nav & archi) faite : 2 pôles (« Création Web » + « IA & Automatisation »), hub `/guides` créé (auto-alimenté, répare breadcrumb 404), footer enrichi (silos IA + géo), 3 cartes home re-routées. Build vert (211 pages), poussé. **Prochain : Phase 5 (Lecureux)** — Jonathan doit figer 1 couple métrique/durée canonique, puis j'harmonise les reprises. **Phase 6 (tags)** bloquée : vérif indexation GSC `/blog/tag/*` d'abord. Détails : `docs/features/polish-design-system.md`.
Commit : [09af5f7] feat(nav): refonte architecture — 2 pôles, hub /guides, footer enrichi (Phase 4)

## Actions manuelles en attente (GSC — côté Jonathan)
- **Request Indexing GSC** — nouvelles URLs des clusters au fil des pubDate (« Mettre l'IA en place » 12.08→11.09, SEO IA Phase 2, hub/géo Phase 1) + le nouveau hub `/guides`.
- **Vérif indexation `/blog/tag/*` dans GSC** — prérequis avant Phase 6 (tags noindex → savoir lesquels enrichir).
- **Chiffre-preuve Lecureux** — figer 1 couple métrique/durée canonique (prérequis Phase 5).
- Known issue bénin : loader `blog` scanne `.briefs/` → warning `Duplicate id` au build (déterministe, l'article gagne). Fix optionnel : `loader: glob({ pattern: '*.md', base: './src/content/blog' })` dans `src/content/config.ts`.
