# Rebrand v2 — nouvelle DA « freelance systèmes IA »

> Branche `rebrand-v2`. Spike de la future home sur `/v2` (noindex), puis redesign de toutes les pages.
> Système de design figé dans `docs/design-v2.md`. Le fond (copy, offre) attend le repositionnement en cours.

## Etat session 2026-11-17

**Fait :**
- `/v2/styleguide` : 18 éléments × 3 essais, choix de Jonathan (grille B, boutons B, liens A, nav B, dock B, hero B, fond A, titres A, tags A, cas B, bento A, process A, FAQ A, chiffres A, contact A, formulaire C, articles C, footer C). Essais écartés archivés dans `c16aaa5`.
- 12 composants dans `src/components/v2/`, comportements par attribut dans `src/scripts/v2-ui.ts` (Anime.js 4.5), `/v2` reconstruit dessus (+ rangée de compteurs après les cas) ; le styleguide est devenu la référence vivante des composants validés.
- Retouches Jonathan : hero en pleine largeur (seule section hors container), cellule de titre « Ce que je construis » en teal dans le container, descendantes (g) plus coupées par le masque des mots.
- Zag et le réseau iso du hero retirés (ne servaient qu'aux essais écartés). `docs/design-v2.md` § 2, 4, 5, 6 à jour.

**Prochain :** session neuve. Dans l'ordre : (1) méga-menu v2 — partir du méga-menu existant de `src/components/Header.astro` (`mainNav`, sections `type: 'mega'`) et l'intégrer à `src/components/v2/Nav.astro` ; (2) page article de blog v2 (`src/pages/blog/[slug].astro` → colonne de lecture dans le container, § 8 de `design-v2.md`) ; (3) pricing cards (à confirmer avec Jonathan, la page Tarifs doit sortir) ; (4) composant témoignages, à créer (aucune donnée de témoignage dans les collections : demander de vrais témoignages, ne rien inventer). Pour chaque nouveau composant : 3 essais sur `/v2/styleguide` (skill `design-variants`), choix, intégration.

**Pieges :**
- `::before` / `::after` d'un `.w` sont pris par les repères en croix (`.r > .w`) : tout effet décoratif passe par un élément enfant (cas `.v2-dots-glow`).
- Variables locales d'un composant (`--dot` sur `.v2-dots`) écrasent celles héritées d'un parent : redéfinir sur le sélecteur composé (`.v2-teal.v2-dots`).
- `splitText` avec `wrap: 'clip'` coupe les descendantes sous un interligne < 1 : `roomForDescenders` dans `v2-ui.ts` ajoute `.14em` en bas.
- `.v2 .v2-steps` (0,2,0) écrasait la règle mobile `.v2-steps` : les cercles ne passaient jamais à 3 colonnes ; corrigé, garder le préfixe `.v2` dans les media queries.
- `ProjectForm` n'a aucun backend : passer `action` avant tout usage en production.
- Captures Playwright : pleine page Chrome tronquée au-delà de ~16 000 px, capturer par section ; `networkidle` n'arrive jamais en dev (HMR + shader), attendre `load` + délai.

**Commit :** [dc6afe4] style(v2): hero pleine largeur, titre « Ce que je construis » sur teal, descendantes non coupées

---

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
- URLs existantes conservées (`/services`, `/portfolio`, `/blog`, `/about`) ; pages SEO hors menu, lien « Sites & SEO » en footer ; page `/tarifs` **gardée** (Jonathan, 2026-11-17 : bonne page SEO potentielle), refaite en v2 avec `<Pricing />`.

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
- [x] Méga-menu v2 (direction C · Carte flottante, Systèmes IA + Blog)
- [x] Page article de blog v2 (direction B · Magazine centré)
- [x] Cartes tarifs `<Pricing />` (direction C · Bento mis en avant)
- [ ] Page `/tarifs` en v2 (avec `<Pricing />`)
- [x] Composant témoignages `<Testimonials />` (direction A · Grande citation)
- [ ] Vrais témoignages à la place du lorem (`testimonials`, `data/v2.ts`)
- [ ] Redesign `/portfolio`, `/portfolio/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `/services`
- [ ] Bascule `/v2` → `/`
