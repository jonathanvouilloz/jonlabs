---
type: seo
rigor: standard
framework: astro
date: 2026-11-19
author: Jonathan Vouilloz
version: 1.0
status: needs_review
sources:
  - CLAUDE.md
  - docs/project-context.md
  - docs/DECISIONS.md
  - docs/design-v2.md
  - docs/styleguide.md
  - docs/seo/topical-map-systemes-agents-ia.md
  - docs/seo/research-2026-11-19/
  - src/pages/index.astro
  - src/data/pricing.ts
  - src/content/config.ts
---

# PRD — Jon Labs (jonlabs.ch)

> Écrit le 19.11.2026 par `init-all` en mode migration, depuis les documents existants, sans interview.
> Rien n'est inventé : ce qui n'est écrit nulle part est marqué **à confirmer**.
> Ce document ne remplace pas les sources : il pointe. Décisions → `docs/DECISIONS.md`. Plan éditorial → `docs/seo/topical-map-systemes-agents-ia.md`.

## 1. Vision éditoriale et business

### Promesse
Home (copy validée par Jonathan le 17.11.2026) : « Systèmes et agents IA pour vous et vos équipes. Je conçois et je mets en production les systèmes IA qui prennent le répétitif, pour que vos équipes gardent l'essentiel. »

### Positionnement
Freelance genevois qui conçoit, installe et maintient des systèmes et agents IA pour les PME romandes, avec des prix publics en CHF. Pivot « focus IA » du 09.11.2026 : IA en entreprise, application sur mesure, automatisation. SEO local, fiches Google et GEO ne sont plus vendus.

Écart connu : le canon de marque `noyau/brand/` décrit encore l'offre « visibilité Google + IA (SEO/GEO) ». Voir `docs/brand/identity.md` § Écarts.

### Audience principale
Dirigeant ou responsable d'une TPE/PME de Suisse romande, non technique, qui veut savoir quel agent ou assistant IA installer, à quel prix, et qui le met en place. Détail : `docs/seo/context.md`.

### Objectif business
- [x] Leads (appel découverte, `/contact`, `/consultant-ia`, `/hermes`)
- [x] Trafic organique qualifié sur les requêtes produit (Hermes Agent, OpenClaw, Claude, Euria…)
- [x] Autorité et confiance (preuves chiffrées, prix publics)
- [ ] Newsletter : hors périmètre
- [ ] Affiliation : un lien affilié déclaré existe dans le comparatif VPS ; pas un objectif

### Définition du succès
**À confirmer** : aucune cible chiffrée n'est écrite. Repères mesurés (Search Console, 20.08 → 17.11.2026) : 168 clics, 33 181 impressions, position moyenne 22,0 ; jonlabs.ch absent des 76 top 10 mesurés sur google.ch. Jalons écrits : 20 articles publiés du 22.11 au 30.12.2026 ; bilan du tri « focus IA » entre le 23.11 et le 09.12.

## 2. Ligne éditoriale et E-E-A-T

- Ton, registre, mots bannis : `docs/brand/voice.md`, `docs/brand/anti-patterns.md`. Le blog tutoie, le site vouvoie (décision du 17.11.2026).
- Point de vue : praticien qui exploite des agents en production, prix en CHF, limites dites.
- Preuves de première main et leurs statuts de publication : `docs/brand/proofs.md`.
- Sources externes : documentation officielle des éditeurs, relue et datée le jour de la rédaction ; études suisses (AXA/Sotomo, PME Digital Pulse, EY, UBS) listées dans `docs/seo/research-2026-11-19/research-icp-douleurs.md`.
- Transparence : lien affilié déclaré dans l'article concerné ; « non testé » écrit quand c'est le cas (OpenClaw).

Garde-fou : un article ne sort pas s'il promet un test qui n'a pas eu lieu, s'il cible l'intention d'une page existante (table de cannibalisation de la topical map) ou s'il ne contient ni preuve, ni source, ni prix daté.

## 3. Architecture de contenu

Quatre clusters (topical map du 19.11.2026) : A. agents installés chez soi (hubs `/hermes`, `/openclaw` à créer) · B. assistants du marché (hub `assistant-ia-suisse-comparatif` à créer) · C. systèmes sur mesure, prix et choix du prestataire (hubs `/consultant-ia`, `/tarifs`) · D. souveraineté et règles internes (hub `ia-nlpd-conformite-suisse`).

Répartition visée du plan : 13 articles transactionnels ou commerciaux sur 20, 4 mixtes, 3 informationnels. Maillage : `docs/seo/content-map.md`.

## 4. Périmètre

Toutes les pages principales sont en production ; carte des routes dans `README.md`. Dans le périmètre du pipeline de contenu : articles de blog (`src/content/blog`). Hors périmètre : GMB, newsletter, LinkedIn (vit dans la partition `atelier/`), page de vente.

## 5. Types de pages

- Article : réponse directe en tête, « L'essentiel en bref » (3 à 5 puces), tableau comparatif ou grille de prix en CHF, section « pour une PME suisse », FAQ en H3, conclusion, sources datées, un CTA final.
- Pilier (`src/content/pages`, route `/guides/{slug}`), pages d'offre, pages ville et métier : hors pipeline article.

## 6. Stack technique

| Couche | Choix |
|---|---|
| Framework | Astro 5, sortie statique, MDX |
| Styling | Tailwind CSS 4 (`@theme` dans `src/styles/global.css`), `blueprint.css`, `v2.css` |
| Îlots | React 19, GSAP / Motion |
| Icônes | Remix Icon, monochromes, jamais d'emoji |
| Hébergement | Vercel ; rebuild quotidien à 05:00 UTC (`.github/workflows/scheduled-publish.yml`) |
| Analytics | **à confirmer** (aucun script d'analytics trouvé dans les layouts) |
| Mesure SEO | Search Console, propriété `sc-domain:jonlabs.ch` ; IndexNow actif |

## 7. Conventions de contenu

Frontmatter imposé par `src/content/config.ts` : `title` (60 max), `h1`, `description` (160 max côté site, 155 côté pipeline), `pubDate`, `image` (objet `url` + `alt`), `category` (`mobile`, `automatisation`, `web`, `geo`), `tags`, `draft`, `faqs` (liste `question` / `answer`). Publication pilotée par `pubDate` et `draft`. Chemins : `project.yaml` § `content`.

## 8. SEO technique et GEO

Sitemap `https://www.jonlabs.ch/sitemap-index.xml`, `robots.txt`, `llm(s).txt`, schémas dans `src/data/schema.ts` (guide : `docs/schema-guide.md`). AI Overview présent sur 57 des 60 premières SERP mesurées : chaque article ouvre par une réponse directe, un tableau et des chiffres datés.

## 9. Intention de design

Système en place, dans le code. Pointeurs : `docs/design/system.md`. Covers : `docs/design/moodboard.md`.

## 10. Pipeline éditorial

Production orchestrée par `content-creator` puis `article-producer`. Cadence du 22.11 au 31.12.2026 : un article tous les deux jours. Publication manuelle (commit, puis rebuild). Gouvernance : Jonathan valide et publie ; **à confirmer** qui relit les faits avant publication quand le pipeline tourne seul.

## 11. Mesure

Search Console (`seo-gsc`, `seo-weekly`, `seo-actions`, `seo-index-diagnose`), données dans `.seo-data/` (gitignoré). KPI cibles : **à confirmer**.

## 12. Intégrations

Search Console : oui. IndexNow : oui. Hub de contenu, Obsidian : non branchés à ce manifeste. DataForSEO : pas de nouvel appel, les exports du 19.11.2026 suffisent pour le plan de fin d'année.

## 13. Langues et localisation

**Mode : monolingue.** Langue principale : français de Suisse (`fr-CH`). Aucun dossier de langue, aucun champ `locale`, aucun préfixe d'URL.

Critères d'acceptation :
- [x] `project.yaml` : `localization: monolingual`, `locales: []`
- [x] Articles à plat dans `src/content/blog/{slug}.md`
- [x] Aucune collision de brouillons (`content/_drafts/blog/{slug}.*`)

## 14. Questions ouvertes

- Le canon de marque doit-il suivre le pivot IA ? (`docs/brand/identity.md` § Écarts)
- Cibles chiffrées à 3 et 6 mois.
- Outil d'analytics.
- Devenir des pages web et mobile encore en ligne (non tranché depuis le 09.11.2026).

## Changelog

| Date | Version | Changements |
|---|---|---|
| 2026-11-19 | 1.0 | Création par migration, sans interview |
