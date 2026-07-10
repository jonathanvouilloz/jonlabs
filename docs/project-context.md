# Jon Labs — Contexte projet (surface jonlabs.ch)

> **Identité, voix, positionnement, histoire, valeurs, preuves → base canonique `bip-jon/_brand/`.** jonlabs.ch, c'est Jon lui-même : on ne redéfinit pas son identité ici.
> Ce fichier = la fiche **surface** du site (offre, stack, infra, archi). Mis à jour 2026-07-08.

## Positionnement (rappel — détail dans `_brand/`)

**Spécialiste en façade, transversal en profondeur.** Porte d'entrée = **visibilité Google + IA (SEO/GEO) pour PME-TPE de Suisse romande**. Destination = **apps, automatisation, IA appliquée** pour la productivité/organisation. Tagline : « gagner en visibilité sans perdre ce qui vous rend unique. »

## Offre réelle (taxonomie des pages services live)

- **Visibilité / SEO (la porte)** : `referencement-local`, `refonte-site-web`, `gestion-fiche-google`.
- **Dev web & produits** : `creation-site-web`, `developpement-mvp`, `developpement-application-mobile`, `outils-sur-mesure`, `developpeur-webflow`, `developpeur-wordpress`.
- **Automatisation & IA** : `automatisation`, `integration-outils`, `formation-ia-equipe`, `validation-idee`.
- **SEO programmatique** (acquisition) : `developpement-web/[ville]`, `consultant-ia/[ville]`, `metiers/[metier]`.
- **Aimants à leads / liste email** : `outils/*` (checklists « 15 signes », « commerce Google », reddit-dashboard), `guides/*`, `merci-checklist*`.

Public cible, audience et registre : voir `identity.md` (frontmatter) + `_brand/`.

## Stack technique

- **Framework** : Astro (`astro build`).
- **Styling** : Tailwind CSS v4 (`@theme` dans `src/styles/global.css`, token `--color-accent: #00D9A3`).
- **Hébergement** : Vercel.
- **Contenu** : collections `src/content/` (`blog/`, `portfolio/`, guides…). Briefs SEO dans `src/content/blog/.briefs/`.

## Architecture

La source de vérité de l'architecture, c'est **`src/pages/`** (ne pas maintenir de copie manuelle ici — elle dériverait). Sections principales : home, `/services` (+ ~13 pages service), `/blog`, `/guides`, `/portfolio`, `/outils`, `/tarifs`, `/contact`, `/about`, `/cv`, pages SEO programmatiques par ville/métier. Conventions de dev, SEO technique et schema : voir `guidelines.md`.

## Palette & visuel

Vert de marque `#00D9A3` (mono-accent, aligné `_brand` + thème live). Volet visuel canonique : `bip-jon/docs/moodboard.md`. Config images surface : `moodboard.md` de ce dossier. Tokens live : `src/styles/global.css` + `styleguide.md`.
