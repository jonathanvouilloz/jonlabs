# Rebrand v2 — nouvelle DA « freelance systèmes IA »

> Branche `rebrand-v2`. Spike de la future home sur `/v2` (noindex), puis redesign de toutes les pages.
> Système de design figé dans `docs/design-v2.md`. Le fond (copy, offre) attend le repositionnement en cours.

## Etat session 2026-11-17

**Fait :** page `/v2/styleguide` (noindex) : 18 éléments × 3 essais (A/B/C) + fondations. Jonathan coche un essai par élément,
le récap se copie (choix gardés en localStorage). Styles et données de `/v2` extraits (`src/styles/v2.css`, `src/data/v2.ts`).
Libs testées : Anime.js 4.5 (texte découpé, décodage, compteurs), Zag 1.48 vanilla (onglets, accordéon, sans React),
shader Paper `Dithering` (îlot React, hero B).

**Choix de Jonathan (le même jour) :** grille B, boutons B, liens A, nav B, dock B, hero B, fond A, titres A, tags A,
cas B, bento A, process A, FAQ A, chiffres A, contact A, formulaire C, articles C, footer C.
**Intégré :** 12 composants dans `src/components/v2/`, comportements dans `src/scripts/v2-ui.ts`, `/v2` reconstruit
dessus (+ rangée de compteurs après les cas), styleguide devenu la référence des composants validés, essais purgés
(Zag retiré : il ne servait qu'aux essais écartés ; réseau iso du hero supprimé). `docs/design-v2.md` § 5 à jour.

**Prochain :** copy de `/v2` après le repositionnement ; `/portfolio`, `/blog`, `/about`, `/services` avec ces composants ;
brancher `ProjectForm` sur un vrai envoi avant de l'utiliser.

**Pieges :**
- Zag (si on y revient) : `spreadProps` réécrit `data-part` (`trigger` → `item-trigger`), cibler ses propres attributs.
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
| `src/pages/v2.astro` | Home v2 assemblée avec les composants ; garde le hub, l'à-propos, la section privée et Cal.com |
| `src/data/hub.ts` | Contenu du hub (vidéos YouTube, tweets et post LinkedIn en placeholder) |
| `src/layouts/Layout.astro` | Ajout d'un slot `head` pour charger une police par page |
| `src/pages/v2/styleguide.astro` | Styleguide v2 : un bloc par composant validé (référence vivante) |
| `src/components/v2/*.astro` | Nav, Dock, Hero, CaseSpec, Proofs, Steps, Bento, Faq, Contact, ProjectForm, PostFeature, Footer |
| `src/components/v2/DitherBg.tsx` | Fond tramé du hero (shader Paper, îlot React) |
| `src/scripts/v2-ui.ts` | Comportements par attribut : roulement, pastille, nav/dock, lettres/mots, gris→noir, projecteur, compteurs, heure, Hairline |
| `src/styles/v2.css` · `src/data/v2.ts` | Styles et données partagés |
| `src/styles/v2-styleguide.css` | Cadre de la page styleguide (`.sg-*`) |
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
- [x] Choix des essais (Jonathan) puis intégration en composants
- [ ] Copy de la home (après repositionnement)
- [ ] Études de cas IA (2-3) pour remplacer les cas web/SEO
- [ ] Contenu réel du hub (tweets, post LinkedIn) + 2 photos
- [x] Extraire nav / dock / footer en composants
- [ ] Brancher `ProjectForm` sur un envoi réel
- [ ] Redesign `/portfolio`, `/portfolio/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `/services`
- [ ] Bascule `/v2` → `/` + retrait de `/tarifs` (redirection)
