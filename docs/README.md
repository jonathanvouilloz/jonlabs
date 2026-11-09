# docs/ — Index

Source de vérité documentaire du projet Jon Labs. Organisée en 4 zones : **contexte projet**, **standards code/design**, **clusters de contenu**, **bibliothèque de recherche**.

## Racine — Sources de vérité projet

Lues automatiquement par CLAUDE.md, `.claude/commands/*` et les skills d'init.

| Fichier | Rôle | Consommé par |
|---|---|---|
| `HANDOFF.md` | Index des features actives (état de reprise, MàJ chaque session) | `/resume-project`, `/wrap-session` |
| `project-context.md` | Identité, positionnement, philosophie | CLAUDE.md, `.claude/checklist.md` |
| `roadmap.md` | Phases de dev (1→7) | CLAUDE.md |
| `identity.md` | Brand, audience, tone, banned_words | tous les skills d'init |
| `voice.md` | Auteur, phrasé, exemples | `/seo-write`, `/linkedin-weekly-posts` |
| `seo-context.md` | Personas, CTA map, concurrents (focus IA / sur mesure / app) | `/seo-brief`, `/seo-write` |
| `moodboard.md` | ADN visuel | `/generate-images`, `/generate-cover` |
| `guidelines.md` | Standards code, conventions, blog | CLAUDE.md, `/blog` |
| `styleguide.md` | Design system (⚠️ en cours de resync sur le blueprint — cf. `src/styles/global.css`) | CLAUDE.md, `/new-page` |
| `schema-guide.md` | Mode d'emploi Schema.org pour nouvelles pages | `/new-page`, `/schema` |
| `generate-image-blog.md` | Workflow 3 phases covers blog | `/blog` |

## Racine — Planification SEO / clusters (sources de vérité contenu)

> **Pivot 09.11.2026** : focus IA en entreprise, sur mesure, automatisation. SEO local / GMB / GEO abandonnés ; leurs docs (clusters `gmb` et `site-actif`, recherches, topical map C3, plan maître `restructuration-clusters`) sont supprimés. Voir `DECISIONS.md`.

Docs vivantes de pilotage éditorial, consommées par les feature files (`docs/features/*`) et seedées dans les briefs (`src/content/blog/.briefs/*` : ligne « Contexte chargé depuis: … »).

| Fichier | Rôle |
|---|---|
| `planSEOIA.md` | Roadmap globale cluster « consultant IA » (cœur du pivot focus IA) |
| `topical-map-consultant-ia.md` | Topical map cluster IA (2 piliers, scoring, mini-briefs) |
| `topical-map-c1-sur-mesure-automatisation.md` | Topical map C1 (Build / Automate) — 3 articles supprimés le 09.11 |
| `chantier-cluster-plateformes.md` | Session 8 — cluster Webflow/WordPress (EN ATTENTE, non tranché depuis le pivot 09.11) |

> Clusters terminés archivés dans `archive/` : « Mettre l'IA en place » (`plan-mise-en-place-ia.md`, `archive/clusters/topical-map-mise-en-place-ia.md`) et « Application mobile » (`archive/cluster-application-mobile.md`, `archive/clusters/topical-map-application-mobile.md`).

## `features/` — Feature files (epics)

Un fichier par epic, index léger dans `HANDOFF.md`. Contient la « Carte du code » lue par `/resume-feature`.

## Outillage Reddit (hors site)

Le dashboard Reddit (`dashboard.py`, `reddit_scraper.py`, `dashboard.html` + guide) vit dans `public/tools/reddit-dashboard/` (servi au public). L'ancien doublon `docs/tools/` a été supprimé.

## `research/` — Recherche

| Dossier | Contenu |
|---|---|
| `research/vps-hermes/` | Comparatif VPS pour l'agent Hermès (12.10.2026) |

> Bibliothèques de recherche GMB / avis / SEO local / GEO supprimées le 09.11.2026 (pivot focus IA, cf. `DECISIONS.md`).

## `audits/` — Audits

| Fichier | Contenu |
|---|---|
| `audits/gsc-2026-09-16.md` | Audit GSC du 16.09.2026 |

> Export GSC du 25.04.2026 supprimé le 09.11.2026. Baseline courante : `.seo-data/gsc-pages-baseline-2026-11-09.json`.

## `archive/` — Historique projet

| Dossier / fichier | Contenu |
|---|---|
| `archive/cv/` | Fichiers d'origine de la livraison page CV (template, content, intégration) |
| `archive/snapshots/` | Snapshots pré-refactor + briefs figés (mai 2026) |
| `archive/maillage/` | Rapport one-shot de maillage interne (graphe, 11.06.2026) |
| `archive/chantier-seo-refactor.md` | Log du chantier SEO (Sessions 1-5 terminées) |
| `archive/cluster-application-mobile.md` | Epic cluster « Application mobile » (terminé le 2026-06-19) |
| `archive/plan-mise-en-place-ia.md` | Tracking du cluster « Mettre l'IA en place » (terminé) |
| `archive/clusters/` | Topical maps des clusters terminés (application-mobile, mise-en-place-ia) |

---

## Pour aller au-delà

- **Knowledge transverse** (specs de projets parallèles, idées, devis client one-shot) → vault Obsidian (`~/noyau/cerveau/`) via `/inbox`
- **Snapshots SEO** (DataForSEO, SERP, GSC) → `.seo-data/` à la racine du repo, archivés vers Obsidian via `/seo-archive`
- **Briefs SEO en cours** → `src/content/blog/.briefs/` (workflow `/seo-brief` → `/seo-write`)
