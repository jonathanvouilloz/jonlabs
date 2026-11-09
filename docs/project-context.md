# Jon Labs — Contexte projet (surface jonlabs.ch)

> **Identité, voix, positionnement, histoire, valeurs, preuves → canon `noyau/brand/`.** jonlabs.ch, c'est Jon lui-même : on ne redéfinit pas son identité ici.
> Ce fichier = la fiche **surface** du site (offre, stack, infra, archi). Mis à jour 2026-11-09.

## Positionnement

Défini dans le canon → `docs/identity.md` (frontmatter **généré** depuis `noyau/brand/`, ne pas éditer) et le canon `noyau/brand/identity.md`. Ne pas le redéfinir ici pour éviter la dérive.

## Offre réelle (pivot « focus IA » du 09.11.2026)

Positionnement : **IA en entreprise, développement d'applications sur mesure, automatisation des processus métiers**. Le SEO local, les fiches Google et le GEO ne sont plus poussés (décision → `DECISIONS.md`, 2026-11-09).

`/tarifs` : **3 offres** (source unique `src/data/pricing.ts`) : site web, **IA en entreprise (mise en avant)**, application mobile.

- **IA & automatisation (cœur)** : `/consultant-ia` (+ `consultant-ia/[ville]`), `/metiers/[metier]`, `/hermes`, `/services/formation-ia-equipe`.
- **Application mobile / sur mesure** : `/services/developpement-application-mobile`.
- **Site web (maintenu, devenir non tranché)** : `/services/creation-site-web`, `/services/refonte-site-web`, `/services/developpeur-webflow`, `/developpement-web` + `[ville]` (2 villes : `annemasse`, `gaillard`), `/developpeur-web-freelance-geneve`.
- **Fermé le 09.11.2026** : `/services/referencement-local`, `/services/gestion-fiche-google`, checklists `/outils` (reste `reddit-dashboard`), `merci-checklist*`.

Public cible, audience et registre : voir `identity.md` (frontmatter généré) + le canon `noyau/brand/`.

## Stack technique

- **Framework** : Astro (`astro build`).
- **Styling** : Tailwind CSS v4 (`@theme` dans `src/styles/global.css`, token `--color-accent: #00D9A3`).
- **Hébergement** : Vercel.
- **Contenu** : collections `src/content/` (`blog/`, `portfolio/`, guides…). Briefs SEO dans `src/content/blog/.briefs/`.

## Architecture

La source de vérité de l'architecture, c'est **`src/pages/`** (ne pas maintenir de copie manuelle ici — elle dériverait). Sections principales : home, `/services` (+ pages service), `/blog`, `/guides`, `/portfolio`, `/tarifs`, `/contact`, `/about`, `/cv`, pages SEO programmatiques par ville/métier. Conventions de dev, SEO technique et schema : voir `guidelines.md`.

## Palette & visuel

Vert de marque `#00D9A3` (mono-accent, aligné `_brand` + thème live). Volet visuel canonique : `bip-jon/docs/moodboard.md`. Config images surface : `moodboard.md` de ce dossier. Tokens live : `src/styles/global.css` + `styleguide.md`.
