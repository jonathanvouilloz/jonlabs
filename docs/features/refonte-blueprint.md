# Feature — Refonte blueprint (design & typographie)

> Sortir du look brutaliste (bordures noires 2px + ombres offset, Plus Jakarta Sans) jugé « banal » vers un style **blueprint** : filets très fins qui cadrent les sections, aération, nouveau font pairing éditorial. Exploration en pages lab AVANT toute migration du vrai site.
> **Réfs visuelles** : pengon.dev, sakib.design. **Statut** : 🔄 EN COURS — exploration lab validée, migration à cadrer.

## Etat session 2026-07-04 — Exploration blueprint + bibliothèque de composants ✅

**Fait :**
- **2 pages lab créées** : `/styleguide-lab` (comparateur de 4 font pairings + 3 layouts hero + toggle JS) et `/styleguide-compo` (maquette homepage réaliste blueprint). `/styleguide` actuel **non touché** (reste la source de vérité brutaliste en vigueur).
- **Pairing retenu : 04 — Inter Tight** (titres/UI) **× Instrument Serif italique** (accent, réservé aux gros titres display) **× Inter Tight** (corps). Fonts limitées à ces 2 familles (décision Jonathan). Accent **teal** (`#00A87D` texte / `#00D9A3` vif) conservé comme signal unique.
- **Système blueprint** : tokens filets `--line` (.09) / `--line-2` (.16), crosshairs `.co-x` aux intersections, colonne capée 1180px bordée, `.co-sec` (sections cadrées), marquee trust (défilé linéaire CSS), drawer mobile JS (mécanisme mirroré de `Header.astro`), transitions `ease-out`.
- **Kit partagé extrait** : `src/components/lab/BlueprintKit.astro` (link fonts + `<style is:global>` complet des primitives `.co-*`). Compo refactorée pour l'importer (régression vérifiée). = **base du futur design system**, une seule source CSS.
- **`/styleguide-components`** (bibliothèque) : cartes blog, **tarifs réels** (Présence 1'490 · Visibilité 2'490 reco · Autorité sur devis), **FAQ** (accordéon `<details>` natif zéro-JS, 4 vraies Q&A de `ContactFAQ`), **formulaire** (maquette visuelle, focus teal), atomes UI. Contenu 100 % réel (extrait du repo).
- **Vérif** : `/styleguide-compo` + `/styleguide-components` répondent 200, **0 erreur console** ; drawer mobile (open/close/aria/scroll-lock), focus champ teal, FAQ toggle testés fonctionnellement.
- **Fraunces** variable extrait & self-hosté (`public/fonts/fraunces/`) comme alternative Gelica (pairing 03, testé puis écarté au profit du 04).

**Prochain :**
1. Jonathan vérifie le **mobile** sur device réel (page components surtout) — l'outil navigateur capture à 1568px fixe, breakpoint non vérifiable en screenshot.
2. Aligner **`/styleguide-lab`** sur les 2 fonts (il reste du JetBrains Mono/Menlo dans ses eyebrows).
3. **Cadrer la migration** du système blueprint vers le vrai site (homepage d'abord) — gros chantier : remplace Plus Jakarta + structure brutaliste. À planifier avec Jonathan quand il valide la direction.

**Pièges :**
- **Capture navigateur = 1568px fixe** → impossible de déclencher le breakpoint mobile (<720px) en screenshot ; valider sur téléphone/DevTools.
- **Helvetica Neue** rend en Arial hors Apple → écarté.
- **Formulaire = maquette** (`onsubmit="return false"`) → câbler le Web3Forms existant (`ContactForm.astro`) à la migration.
- **Contenu placeholder** dans la compo : le témoignage « invisibles → #1 » + « #1 sur sa niche » est du **mock** — à remplacer par la vraie data GSC Lécureux (cf. epic `polish-design-system`, règle honnêteté chiffres).
- Le CSS blueprint vit dans `BlueprintKit` (pas encore dans `global.css`) — la migration devra le consolider et réconcilier avec les tokens brutalistes existants.

**Commit :** [à committer] feat(design): exploration blueprint — pairing 04, BlueprintKit partagé, pages lab

## Carte du code
> Mise à jour : 2026-07-04

| Fichier | Rôle |
|---------|------|
| `src/components/lab/BlueprintKit.astro` | **Kit blueprint partagé** — `<link>` fonts (Inter Tight + Instrument Serif) + `<style is:global>` : reset scopé, tokens `.co-root`, typo pairing 04, primitives (`.co-eyebrow/.co-x/.co-btn/.co-sec/.co-guides/.co-dots`), marquee, burger/drawer, grilles + media queries. **Base du futur design system.** |
| `src/pages/styleguide-compo.astro` | Maquette homepage blueprint (pairing 04) — importe `<BlueprintKit />` + `<script>` du drawer mobile. Nav, hero, trust marquee, services, cas client, CTA sombre, footer |
| `src/pages/styleguide-components.astro` | Bibliothèque de composants blueprint (noindex) — cartes blog, tarifs, FAQ (`<details>` natif), formulaire (maquette), atomes. `<style is:global>` page-local `.cc-*` par-dessus les tokens du kit |
| `src/pages/styleguide-lab.astro` | Comparateur d'exploration — 4 font pairings + 3 layouts hero + toggle JS. **À aligner sur les 2 fonts (Menlo restant)** |
| `public/fonts/fraunces/Fraunces-VF.ttf` (+ Italic) | Fraunces variable self-hosté (alt Gelica) — testé pairing 03, écarté |

### Décisions clés
- **Pairing final = Inter Tight × Instrument Serif uniquement.** L'Instrument Serif italique est réservé aux **gros titres display** ; en inline/quote, l'accent se fait par **couleur teal** (pas d'italique) — sinon mismatch d'épaisseur sans/serif à taille moyenne.
- **Blueprint = filets fins qui cadrent** (`--line`/`--line-2` + crosshairs), colonne capée. On abandonne bordures noires 2px + ombres offset brutalistes.
- **CSS centralisé dans `BlueprintKit`** (pas encore `global.css`) — consolidation reportée à la migration.
- **Accessibilité/UX** : drawer mobile JS (aria-expanded, scroll-lock, Escape, fermeture sur clic lien) ; FAQ en `<details>` natif (zéro JS) ; transitions `ease-out` ; `prefers-reduced-motion` géré (marquee + drawer).
- Pages lab en **`robots="noindex, nofollow"`** ; `/styleguide` brutaliste **non touché** (comparaison avant/après).
