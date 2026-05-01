# docs/ — Index

Source de vérité documentaire du projet Jon Labs. Organisée en 4 zones : **contexte projet**, **standards code/design**, **clusters de contenu**, **bibliothèque de recherche**.

## Racine — Sources de vérité projet

Lues automatiquement par CLAUDE.md, `.claude/commands/*` et les skills d'init.

| Fichier | Rôle | Consommé par |
|---|---|---|
| `project-context.md` | Identité, positionnement, philosophie | CLAUDE.md, `.claude/checklist.md` |
| `roadmap.md` | Phases de dev (1→7) | CLAUDE.md |
| `identity.md` | Brand, audience, tone, banned_words | tous les skills d'init |
| `voice.md` | Auteur, phrasé, exemples | `/seo-write`, `/linkedin-weekly-posts`, `/gmb-post` |
| `seo-context.md` | Personas, CTA map, concurrents | `/seo-brief`, `/seo-write` |
| `gmb-context.md` | Locations GBP, art direction GMB | `/gmb-*` |
| `moodboard.md` | ADN visuel | `/generate-images`, `/generate-cover` |
| `guidelines.md` | Standards code, conventions, blog | CLAUDE.md, `/blog` |
| `styleguide.md` | Design system brutaliste | CLAUDE.md, `/new-page`, `gmb/config.json` |
| `schema-guide.md` | Mode d'emploi Schema.org pour nouvelles pages | `/new-page`, `/schema` |
| `generate-image-blog.md` | Workflow 3 phases covers blog | `/blog` |
| `seo-todo.md` | TODO SEO vivant (P2 restants) | référence audit |
| `checklist-commerce-google.md` | Asset éditorial article | `.briefs/15-signes-site-web-dort.md` |

## `clusters/` — Clusters de contenu actifs

Un sous-dossier par cluster. Chaque cluster contient sa source de vérité (`cluster.md` ou équivalent) + les briefs/sources spécifiques.

| Cluster | Statut | Description |
|---|---|---|
| `clusters/gmb/` | 🟡 En cours (M1.01 → 2026-05-04) | Cluster Fiche Google My Business : 24 articles sur 3 mois |
| `clusters/site-actif/` | 🟡 Sprint 1-2 publiés, S3+ à venir | Cluster "Site qui dort vs site qui travaille" |

Convention : `clusters/{slug}/cluster.md` ou `CALENDRIER-EDITORIAL.md` = source de vérité ; `clusters/{slug}/sources/` = matière éditoriale brute (PDFs, exports, articles externes).

## `research/` — Bibliothèque de recherche éditoriale

Notes thématiques (style Obsidian) consultées par les clusters comme matière première. Pas de skills attachés ; lecture humaine + référence depuis les briefs.

| Dossier | Sujet | Volume |
|---|---|---|
| `research/gmb-optimisation/` | Optimisation fiche GMB (catégorie, description, photos, attributs, horaires…) | 21 notes |
| `research/gmb-avis/` | Avis & réputation Google (collecte, réponses, modération) | 12 notes |
| `research/gmb-site-web/` | SEO local on-site (NAP, schema, page contact, CTA, mobile) | 11 notes |
| `research/geo-seo/` | GEO / IA search (apparaître sur ChatGPT, Perplexity, Gemini, Copilot, Grok, Claude) | 7 notes |

## `audits/` — Snapshots data brute

| Dossier | Contenu | Date |
|---|---|---|
| `audits/gsc-2026-04-25/` | Export Google Search Console (requêtes, pages, pays, appareils, apparence) | 2026-04-25 |

## `archive/` — Historique projet

| Dossier | Contenu |
|---|---|
| `archive/cv/` | Fichiers d'origine de la livraison page CV (template, content, intégration) |

---

## Pour aller au-delà

- **Knowledge transverse** (specs de projets parallèles, idées, devis client one-shot) → vault Obsidian (`~/Documents/Obsidian Vault/`) via `/inbox`
- **Snapshots SEO** (DataForSEO, SERP, GSC) → `.seo-data/` à la racine du repo, archivés vers Obsidian via `/seo-archive`
- **Briefs SEO en cours** → `src/content/blog/.briefs/` (workflow `/seo-brief` → `/seo-write`)
