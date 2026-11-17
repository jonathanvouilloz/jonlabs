# Rebrand v2 — nouvelle DA « freelance systèmes IA »

> Branche `rebrand-v2`. Spike de la future home sur `/v2` (noindex), puis redesign de toutes les pages.
> Système de design figé dans `docs/design-v2.md`. Le fond (copy, offre) attend le repositionnement en cours.

## Etat session 2026-11-17

**Fait :** page `/v2/styleguide` (noindex) : 18 éléments × 3 essais (A/B/C) + fondations. Jonathan coche un essai par élément,
le récap se copie (choix gardés en localStorage). Styles et données de `/v2` extraits (`src/styles/v2.css`, `src/data/v2.ts`).
Libs testées : Anime.js 4.5 (texte découpé, décodage, compteurs), Zag 1.48 vanilla (onglets, accordéon, sans React),
shader Paper `Dithering` (îlot React, hero B).

**Prochain :** checkpoint des choix → intégrer les gagnants en composants (`src/components/v2/`), purger les essais,
reporter dans `docs/design-v2.md`.

**Pieges :**
- Zag `spreadProps` réécrit `data-part` (`trigger` → `item-trigger`) : cibler ses propres attributs (`data-tab`, `data-acc`).
- `.sg button` (reset) écrasait `.v2-btn` sur les `<button>` : reset en `:where(.sg button)`.
- Capture pleine page Chrome tronquée au-delà de ~16 000 px : capturer section par section.

## Etat session 2026-11-16

**Fait :**
- Analyse des refs (sakib.design, luzia, nuance, atraen) en captures via `agent-browser` ; squelette validé par Jonathan.
- Home v2 complète sur `/v2` : nav haute → dock bas au scroll, hero plein écran avec fond isométrique animé (canvas), bande défilante, études de cas bord à bord, « Comment je travaille » (cercles + 3 colonnes), bento avec figures Hairline, hub sombre, à-propos avec texte révélé, section « pas tout est public », FAQ pilules animée, contact bento, Cal.com inline 3 colonnes.
- DA : Funnel Display (titres, interlettrage -0.055em) + Inter Tight (texte) + Fragment Mono (métadonnées), fond blanc, rayon max 5px, boutons pilule, grille « à la Sakib » (filets pleine largeur + container bordé rempli).
- `docs/design-v2.md` rédigé pour appliquer le système aux autres pages.

**Prochain :** quand le repositionnement est figé, écrire la copy de `/v2` (hero, sections, FAQ, outils) et remplacer les placeholders du hub (`src/data/hub.ts`) ; puis extraire nav/dock/footer en composants et attaquer `/portfolio` selon `docs/design-v2.md` § 8.

**Pieges :**
- `box-sizing: border-box` est indispensable sur le hero (sinon le padding s'ajoute à `100svh` et le contenu descend).
- `.v2 p/ul/ol { margin: 0 }` a une spécificité (0,1,1) qui écrase les classes simples : préfixer `.v2 .classe` pour redonner une marge (cas `.v2-lead`, `.v2-steps`).
- Le flux RSS YouTube de la chaîne répond 404 : vidéos listées à la main dans `src/data/hub.ts`.
- Barre d'outils dev d'Astro désactivée dans `astro.config.mjs` (elle masquait l'indicateur de scroll et le dock).
- Cal.com : l'embed n'affiche les 3 colonnes qu'en pleine largeur (~1000px) ; dans une demi-colonne il passe à 2.

**Commit :** feat(rebrand): home v2 en spike + design system v2 (ce commit)

---

## Carte du code
> Mise a jour : 2026-11-17

| Fichier | Role |
|---------|------|
| `src/pages/v2.astro` | Home v2 complète (markup, scripts nav/dock, reveal, Hairline, Cal.com) — référence vivante du design |
| `src/scripts/iso-network.ts` | Fond animé du hero : grille iso en canvas, impulsions + cubes, lueur pointeur, pause hors écran |
| `src/data/hub.ts` | Contenu du hub (vidéos YouTube, tweets et post LinkedIn en placeholder) |
| `src/layouts/Layout.astro` | Ajout d'un slot `head` pour charger une police par page |
| `src/pages/v2/styleguide.astro` | Styleguide v2 : 3 essais par élément + récap des choix (exploration, jetable) |
| `src/styles/v2.css` · `src/data/v2.ts` | Styles et données partagés par `/v2` et le styleguide |
| `src/styles/v2-styleguide.css` · `src/scripts/v2-styleguide.ts` | Cadre du styleguide (`.sg-*`) et essais (`.x*-`), interactions |
| `src/components/v2/DitherBg.tsx` | Fond tramé (shader Paper) de l'essai hero B |
| `docs/design-v2.md` | Système de design v2 : tokens, typo, grille, composants, motion, règles pour les autres pages |

### Decisions cles
- Grille « à la Sakib » : chaque section remplit le container, cellules séparées par filets 1px, pas de `gap` (sauf photos).
- Rayon max 5px ; 0 quand l'élément touche le cadre ; seuls les boutons sont en pilule.
- Figures isométriques via `@lucasmarkes/hairline` (API vanilla, pas d'îlot React).
- URLs existantes conservées (`/services`, `/portfolio`, `/blog`, `/about`) ; pages SEO hors menu, lien « Sites & SEO » en footer ; page Tarifs à retirer.

## Taches

- [x] Analyse des références et squelette de home
- [x] Spike `/v2` (forme)
- [x] `docs/design-v2.md`
- [x] Styleguide v2 : 3 essais par élément
- [ ] Choix des essais (Jonathan) puis intégration en composants
- [ ] Copy de la home (après repositionnement)
- [ ] Études de cas IA (2-3) pour remplacer les cas web/SEO
- [ ] Contenu réel du hub (tweets, post LinkedIn) + 2 photos
- [ ] Extraire nav / dock / footer en composants, tokens dans `global.css`
- [ ] Redesign `/portfolio`, `/portfolio/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `/services`
- [ ] Bascule `/v2` → `/` + retrait de `/tarifs` (redirection)
