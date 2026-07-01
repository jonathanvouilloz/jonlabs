# HANDOFF — 2026-07-01

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Chantier SEO IA (consultant IA) | docs/planSEOIA.md + docs/topical-map-consultant-ia.md | **EN COURS** (Phase 1 ✅ + Phase 2 ✅, Phase 3 à venir) |
| Refonte SEO / restructuration clusters | docs/features/refonte-seo-clusters.md | **EN COURS** |
| Cluster plateformes Webflow + WordPress | docs/chantier-cluster-plateformes.md | EN ATTENTE |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Chantier SEO IA — Phase 2 ✅ FAITE** (2 pages métiers data-driven `/metiers/{ia-fiduciaire,ia-agence-immobiliere}` + landing `/hermes` + service `/services/formation-ia-equipe` + maillage méga-menu/hub/géo + 2 articles `ia-nlpd-conformite-suisse` 24.08 et `consultant-ia-c-est-quoi` 28.08). Build vert **208 pages**. Commits par lot sur `main` (non poussés — voir plus bas).

**Prochaine étape — Phase 3** (`docs/planSEOIA.md` §4) : `/metiers/ia-commerce-retail` + `/metiers/ia-cabinet`, landing `/openclaw`, `services/audit-ia` + `/consultant-ia/nyon`, articles `rag-documents-pme` + `chatbot-vs-agent-ia-support`.

**Actions manuelles en attente :** (1) `git push` des commits Phase 2 (déclenche le rebuild/deploy). (2) Request Indexing GSC sur les 4 pages Phase 2 (+ hub/géo Phase 1 encore à faire). La cadence blog est pleine jusqu'au 28.08.

**Known issue (pré-existant, non bloquant) :** le loader de la collection `blog` scanne aussi `src/content/blog/.briefs/` → warning `Duplicate id` au build pour chaque brief homonyme d'un article. Bénin et déterministe (`.briefs/…` charge avant la racine → l'article gagne). Fix propre si un jour ça gêne : migrer `blog` vers `loader: glob({ pattern: '*.md', base: './src/content/blog' })` dans `src/content/config.ts` (top-level only) — hors scope Phase 2 car touche l'API de rendu.
