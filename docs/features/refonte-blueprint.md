# Feature — Refonte blueprint (design & typographie)

> Sortir du look brutaliste (bordures noires 2px + ombres offset, Plus Jakarta Sans) jugé « banal » vers un style **blueprint** : filets très fins qui cadrent les sections, aération, nouveau font pairing éditorial. Exploration en pages lab AVANT toute migration du vrai site.
> **Réfs visuelles** : pengon.dev, sakib.design. **Statut** : 🔄 EN COURS — exploration lab validée, migration à cadrer.

## Etat session 2026-07-04 (soir) — Complétion design system : Lots 0-3 ✅

**Fait :**
- **Lot 0 (fixes)** : reset underline scopé `.co-root :where(a){text-decoration:none;color:inherit}` dans `BlueprintKit` (cause racine : lab ne charge pas `global.css` → `<a>` souligné par défaut ; `:where()` neutralise la spécificité pour que `.co-btn` garde `color:#fff`). Anti-flash motion `[data-animate]{opacity:0}` posé dans le kit. `styleguide-lab` : eyebrows/toggle Menlo → Inter Tight, `.bp-btn` blindé `text-decoration:none`.
- **Lot 1 (nav)** : `styleguide-nav.astro` — barre nav, **méga-menu** cadré filets (colonnes filets verticaux, crosshairs, spotlight teal, badges), interaction hover-intention + click + Escape + click-outside, **drawer mobile à accordéons** (scroll-lock, reset au close), **fat footer** zones géo. Data réelle `navigation.ts`.
- **Lot 2 (blog)** : `styleguide-blog.astro` — cartes article (vraie data `getCollection`), filtres + recherche + toggle grille/liste, pagination, composants article (progress, façade vidéo, corps avec liens **soulignés teal**, bio auteur, articles liés). Badges catégorie **1 seul style harmonisé** (pastille filet + point teal, pas de couleur par catégorie).
- **Lot 3 (services)** : `styleguide-services.astro` — **constellation blueprint** (option A : hub + 6 nodes figés + lignes SVG hub-bord→node-bord calculées au load/resize, sans canvas/néon) + **modale chat** qui rejoue les vrais `scenarios.ts` messages en typing + cartes services + CTA sombre. **0 emoji** (icônes Remix mono).
- Toutes vérifiées en dev (screenshots + 0 erreur console), build OK **217 pages**.

**Prochain :** Lot 4 — Portfolio + CV. Créer `styleguide-portfolio.astro` (cartes PortfolioCard/Editorial, image cadrée filets, méta client/année, stats, brancher la vraie preuve `src/data/proof-lecureux.ts`). **Décision en attente** : blueprinter le CV maintenant (9 composants `cv/*` + export PDF, gros effort/ROI différé) ou le repousser hors lab.

**Pièges :**
- **Bordure/trait partiel sur coin arrondi = interdit** (effet U « IA slop »). Souligné actif = barre droite via `::after`. Mémoire `feedback_pas_bordure_partielle_arrondi`.
- **0 emoji** (mémoire `feedback_zero_emoji`) : icônes Remix mono même si la data a un champ emoji.
- **Badges/catégories : pas de couleur par catégorie** — 1 seul style, accent teal unique (le multi-teinte a été jugé « AI slop »).
- **Bouton sur fond sombre** : jamais `.co-btn` (bg `--ink`) sur section `--ink` → invisible. Passer en fond blanc/accent (fix appliqué au CTA services).
- **Capture navigateur = 1568px fixe** même après resize → mobile <720/<900px non vérifiable en screenshot, valider sur device.
- Reset lab `.co-root :where(a)` : specificité neutralisée exprès ; `.co-btn`/`.blog-prose a` (underline volontaire) l'emportent.

**Commit :** (à venir) feat(design): complétion design system blueprint — nav, blog, services (Lots 0-3)

---

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

**Commit :** [e92b8f2] feat(design): exploration blueprint — pairing 04, BlueprintKit partagé, pages lab (branche `design/blueprint-lab`)

## Carte du code
> Mise à jour : 2026-07-04 (soir)

| Fichier | Rôle |
|---------|------|
| `src/components/lab/BlueprintKit.astro` | **Kit blueprint partagé** — `<link>` fonts + `<style is:global>` : reset scopé (dont `.co-root :where(a)` anti-underline + anti-flash `[data-animate]`), tokens `.co-root`, typo pairing 04, primitives (`.co-eyebrow/.co-x/.co-btn/.co-sec/.co-guides/.co-dots`), marquee, burger/drawer, grilles + media queries. **Base du design system.** |
| `src/pages/styleguide-nav.astro` | **[Lot 1]** Nav blueprint (noindex) — barre + méga-menu cadré filets + drawer accordéons + fat footer. Data `navigation.ts`. Styles `.nav-*`, JS méga (hover/click/Escape) + drawer |
| `src/pages/styleguide-blog.astro` | **[Lot 2]** Blog blueprint (noindex) — article à la une, cartes (vraie data `getCollection`), filtres/recherche/toggle grille-liste, pagination, composants article (progress, vidéo, prose liens soulignés, bio, related). Badge catégorie unique harmonisé. Styles `.blog-*` |
| `src/pages/styleguide-services.astro` | **[Lot 3]** Services blueprint (noindex) — constellation (hub + nodes + lignes SVG au load/resize) + modale chat (rejoue `scenarios.ts`), cartes services (`serviceSections`), CTA sombre. **0 emoji** (icônes Remix). Styles `.svc-*` |
| `src/pages/styleguide-compo.astro` | Maquette homepage blueprint (référence) — nav, hero, trust marquee, services, cas client, CTA sombre, footer. ⚠️ contient encore le **mock preuve** « invisibles → #1 »/« +40h » à remplacer |
| `src/pages/styleguide-components.astro` | Bibliothèque atomes/primitives (noindex) — cartes, tarifs, FAQ, formulaire, atomes. Styles `.cc-*` |
| `src/pages/styleguide-lab.astro` | Comparateur pairings (échantillons multi-fonts = le sujet, conservés). Chrome UI aligné Inter Tight, `.bp-btn` blindé |
| `src/data/{navigation,scenarios}.ts` · `src/lib/blog.ts` · `src/sample.ts` | Sources de vérité consommées par les pages lab (nav, scénarios+sections, helpers/catégories blog, author) |

### Décisions clés
- **Pairing = Inter Tight × Instrument Serif uniquement** ; Instrument Serif italique réservé aux gros titres display, accent inline = **teal** (pas d'italique).
- **Blueprint = filets fins + crosshairs**, colonne capée, **coins nets** (pas d'ombre offset brutaliste). **Une seule couleur d'accent (teal)** — pas de couleur par catégorie/pilier.
- **Règles design gravées en mémoire** : `feedback_zero_emoji` (0 emoji → icônes Remix mono) · `feedback_pas_bordure_partielle_arrondi` (jamais de trait partiel sur coin arrondi → barre droite `::after`). Bouton sur fond sombre = fond clair, jamais ink-sur-ink.
- **CSS à 2 niveaux** : primitives réutilisées dans `BlueprintKit`, spécifiques par page en `.nav-*`/`.blog-*`/`.svc-*` (promotion quand 2+ pages). Motion = système `data-animate` existant (déjà chargé via Layout).
- Pages lab en **`robots="noindex, nofollow"`** ; `/styleguide` brutaliste non touché.
