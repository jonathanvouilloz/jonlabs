# Design v2 — système du rebrand « systèmes IA »

> Source de vérité visuelle pour refaire toutes les pages du site après la home.
> Référence vivante : `src/pages/v2.astro` et `/v2/styleguide` (noindex, branche `rebrand-v2`).
> Directions validées par Jonathan le 2026-11-17 sur le styleguide (3 essais par élément ; les essais écartés : commit `c16aaa5`).
> Remplace `docs/styleguide.md` (blueprint) une fois la v2 en production.
> Le **fond** (copy, offre, positionnement) attend le repositionnement en cours : ici, seulement la **forme**.

## 1. Intention

Site de freelance IA solo, clair en une seconde : ce que je fais, la preuve, comment me parler.
Peu de texte. Chaque section remplit le container, rien ne flotte dans le vide.

Références (ordre de préférence) : sakib.design (squelette, grille, nav, contact, agenda) ·
luzia.framer.website (simplicité, featured works) · nuance-portfolio (métadonnées projet) · atraen (bento).

**Anti-objectifs** : look template SaaS, cartes très arrondies, ombres décoratives, gradients,
pills partout, texte long en home, SEO mis en avant.

## 2. Tokens

| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `#FFFFFF` | Fond de page (blanc franc) |
| `--soft` | `#F4F4F2` | Section contrastée, case mise en avant, placeholders |
| `--ink` | `#14161A` | Texte, boutons primaires |
| `--mut` | `#686C70` | Texte secondaire |
| `--dim` | `#9A9D9F` | 2e ligne grisée des titres (`.v2-dim`) |
| `--line` | `#E3E4E1` | Tous les filets |
| `--accent` | `#00D9A3` | Signal (point du logo, focus) ; en fond seulement pour **une** cellule de titre par page (`.v2-teal`, texte `--ink`) |
| `--accent-strong` | `#00A87D` | Teal lisible sur blanc (métadonnées, puces, hover) |
| `--dark` / `--dark-line` | `#111214` / `#26282C` | Section sombre (hub) |
| WhatsApp | `#1FAF55` | Boutons WhatsApp uniquement |
| `--r` | `5px` | **Rayon max** pour cartes, images, tags |
| `--pad` | `clamp(20px, 4vw, 48px)` | Padding horizontal de cellule |

## 3. Typographie

| Rôle | Police | Réglages |
|---|---|---|
| Titres (h1, h2, h3, logo, gros paragraphes éditoriaux) | **Funnel Display** (Google Fonts) | poids 500, interlettrage serré : h1/h2 `-0.055em`, h3 `-0.035em` |
| Texte courant | **Inter Tight** (déjà chargée par `Layout.astro`) | 16px, line-height 1.55 |
| Métadonnées (secteur, durée, handle, outils) | **Fragment Mono** | 0.75rem, uppercase |

Tailles : h1 `clamp(2.6rem, 6.6vw, 5.4rem)` lh 0.96 · h2 `clamp(2rem, 4.4vw, 3.4rem)` lh 1 · h3 1.4rem.
Titre en deux temps : ligne 1 en `--ink`, ligne 2 en `--dim` (`<span class="v2-dim">`).

## 4. La grille (règle n°1)

Grille « à la Sakib » :

```
──────────────────────────────────────────────  ← .r : filet horizontal pleine largeur du viewport
        │                              │
        │   cellule(s) qui remplissent │        ← .w : container 1180px, filets verticaux gauche/droite
        │   tout le container          │
──────────────────────────────────────────────
```

- Chaque section = une ou plusieurs rangées `.r > .w`. Pas de marge entre sections : le filet suffit.
- Le contenu **remplit le container** : images bord à bord, bentos dont les cellules se touchent,
  séparées par des filets 1px (`border-left` / `border-bottom`), jamais par des `gap`.
- Exceptions assumées : les photos de l'à-propos ont `gap: 12px` + `padding: 12px` ; le hero est en pleine largeur.
- `::before` / `::after` d'un `.w` sont réservés aux repères en croix : un effet décoratif passe par un élément enfant.
- **Repères en croix** : chaque `.r > .w` porte une croix de 11px aux deux coins bas (intersection filet de rangée / filets verticaux),
  couleur `--cross` (`--ink`, gris en section sombre). Automatique, rien à ajouter au markup. Masquée sur la nav haute.
- Une cellule qui touche le cadre a `border-radius: 0`. Le rayon 5px ne s'applique qu'aux éléments posés dedans.
- En-tête de section : `.v2-head` (padding `clamp(48px, 7vw, 88px) var(--pad)`), variante `.v2-head-2` (titre | phrase).

## 5. Composants

Composants Astro dans `src/components/v2/`, comportements dans `src/scripts/v2-ui.ts` (branchés par attribut), styles dans `src/styles/v2.css`.

| Élément | Direction | Composant / classe | Règle |
|---|---|---|---|
| Bouton | B · Roulement | `.v2-btn` + `<span data-roll>` | Pilule (seule forme pilule du site). Survol : les lettres roulent (14ms d'écart). Pression `scale(.97)` 160ms ease-out. Variantes `-sm` / `-lg` / `-ghost` / `-wa` |
| Bouton rond WhatsApp | — | `.v2-wa` | 50px, à côté du CTA principal |
| Lien texte | A · Trait qui se trace | `.v2-a` (nav, footer) · `.v2-prose a` (texte) | Trait 1px qui entre par la gauche, sort par la droite. Dans un texte, un filet `--line` reste visible |
| Nav haute | B · Pastille glissante | `<Nav current? sticky? />` | Logo / 4 liens / CTA. Une pastille `--soft` suit le lien survolé, revient sur la page courante (`aria-current`). Disparaît après 240px |
| Méga-menu | C · Carte flottante | dans `<Nav />` (`mega` + `iso` sur un lien de `nav`, `data/v2.ts`) | Sur Systèmes IA et Blog. Carte bordée 760px centrée sous le lien, ouverte au survol ou au focus clavier. Contenu = section de `mainNav` (`data/navigation.ts`) : colonnes en grille 2 col., dernière colonne en barre du bas, spotlight en encart avec figure Hairline. Desktop seulement (sur mobile, le dock) |
| Dock bas | B · Pastille glissante | `<Dock current? floating? />` | Avatar + 4 liens + agenda, même pastille. Apparaît quand la nav haute part |
| Hero | B · Trame | `<Hero />` | **Seule section pleine largeur** (hors `.w`). Shader Paper `Dithering` (warp, teal `#CDF3E7`) masqué au centre ; titre qui monte lettre à lettre |
| Fond de section | A · Points + projecteur | `.w.v2-head.v2-dots.v2-teal` + `data-spot` + `<i class="v2-dots-glow">` | Cellule de titre en teal, dans le container (pas pleine largeur). Trame de points 18px, le pointeur les allume en encre (rayon 180px). Une par page au plus |
| Titre de section | A · Mots qui montent | `data-words` sur le `h2` | Mots masqués qui montent à l'entrée dans l'écran (45ms d'écart, 800ms) |
| Tags / métadonnées | A · Étoiles | `.v2-tags` · `.v2-meta` · `.v2-tools` | 3 mots séparés par une étoile 4 branches teal ; ligne mono pour secteur, durée, résultat |
| Étude de cas | B · Fiche technique | `<CaseSpec entry />` | Image bord à bord (1.35fr) + titre, description, tableau `.v2-kv` (secteur, durée, stack, 2 résultats en teal) |
| Bento services | A · Figures iso | `<Bento />` | 3 colonnes, case principale sur 2 rangées en `--soft`, figure Hairline en haut de chaque case |
| Process | A · Cercles | `<Steps />` | Cercles pointillés qui se chevauchent, hover = trait teal plein |
| FAQ | A · Pilules | `<Faq />` | Questions en pilules noires + rond « + », titre aligné à droite ; une réponse ouverte à la fois |
| Repères chiffrés | A · Compteurs | `<Proofs />` | 1er résultat des 4 études de cas les plus récentes ; seule la partie numérique défile |
| Contact | A · Bento | `<Contact />` | Grande carte (nom, phrase, e-mail en display, 2 boutons) + 4 cartes réseaux |
| Formulaire | C · Tuiles | `<ProjectForm action? />` | Tuiles à cocher (agent, app, automatisation, je ne sais pas) puis champs bordés. **Pas de backend** : passer `action` avant usage |
| Liste d'articles | C · À la une | `<PostFeature count? />` | Le dernier en grand (image 16/9), les suivants en lignes à droite |
| Footer | C · Barre d'état | `<Footer />` | Colonnes + barre mono : heure de Genève en direct, date du dernier build, ©, haut de page |
| Cartes tarifs | C · Bento mis en avant | `<Pricing />` | Offre `highlighted` en grande cellule teal sur 2 rangées (c'est **la** cellule teal de la page), Site web et App en petites cellules, « Bon à savoir » dessous. Données : `offers` + `terms` de `data/pricing.ts`, seule source des prix |
| Témoignages | A · Grande citation | `<Testimonials />` | Citation en grand (Funnel, guillemet teal) à gauche, liste numérotée des clients + résultat à droite ; un bouton (`aria-pressed`) affiche sa citation (`[data-testi]`, v2-ui). **Contenu lorem** (`testimonials`, `data/v2.ts`) à remplacer par de vrais témoignages |
| Page article | B · Magazine centré | `src/pages/blog/[slug].astro` · `.v2-art*` | Tags + titre + auteur/date centrés, image 21/9 bord à bord, colonne 680px, sommaire repliable (> 2 parties), lettrine. Le corps garde `.co-prose` (TL;DR, tableaux, code, widgets MDX) ; `.v2-art` aliase `--muted` / `--surface` / `--line-2`. Fin : partage, auteur, « À lire ensuite » (3 cellules) |
| Gabarit page service | — | `<ServicePage />` (`components/v2/ServicePage.astro`) | Objet de données : head, repères, sections, bento, méthode, cas, liens, témoignages, FAQ. Utilisé par hermes, consultant IA, formation, app mobile, création de site, développeur Genève |
| Gabarit page déclinée | — | `declinee/DeclineePage.astro` + `DcPage` (`types.ts`) | Villes et métiers : sections `prose` (titre collant + texte) et `cells` (grille bord à bord) ; la route mappe sa source de données |
| Page simple | — | `layouts/V2Simple.astro` | En-tête centré + colonne 680px `.co-prose` (cv, mentions, reddit-dashboard) |
| Grille d'articles | — | `<PostCells />` | Partagée par `/blog` et `/blog/tag/[tag]` |
| Formulaire contact | — | `<ContactSteps />` | 3 étapes, envoi Web3Forms |
| Apparition au scroll | — | `data-rise` (v2-ui) · `.v2-gap` | Les enfants directs montent en décalé ; `.v2-gap` = respiration entre cellules |
| Hub | — | inline dans `v2.astro` | Vidéo 2×2 + cartes (tweet, article, LinkedIn), section sombre |
| Section contrastée | — | `.v2-private` | Fond `--soft`, titre à gauche, 2 gros boutons empilés à droite |
| Agenda | — | `.v2-agenda` | Cal.com inline pleine largeur, chargé à l'approche |

Icônes : Remix Icon, monochromes. Jamais d'emoji dans l'UI.

## 6. Illustration et motion

- **Fond du hero** : shader Paper `Dithering` (`src/components/v2/DitherBg.tsx`, îlot React `client:visible`),
  tramé 4×4 très pâle, masque radial pour garder le centre lisible, vitesse 0 sous `prefers-reduced-motion`.
  (L'ancien réseau iso en canvas a été écarté le 2026-11-17 ; il reste dans git.)
- **Texte** : Anime.js 4 (`splitText` + `animate`) pour le titre du hero (lettres), les titres de section (mots)
  et les compteurs. Rien d'autre : les survols restent en CSS. Le masque d'un mot reçoit `.14em` de marge basse,
  sinon l'interligne serré coupe les descendantes (g, p, q).
- **Figures isométriques** : `@lucasmarkes/hairline` (API vanilla, `theme: 'light'`, `play: true`).
  Une figure = une idée (terminal = agents, laptop = apps, slow = automatisations, plug = intégration,
  relay / patch / padlock pour les 3 colonnes). Pour une figure sur mesure : skill `ai-iso-skill`.
- **Texte révélé** : paragraphe éditorial qui passe du gris au noir mot par mot au scroll (`data-reveal`).
- **Bande** : captures en défilement continu (70s, linéaire).
- **FAQ** : ouverture animée via `::details-content` + `interpolate-size` (Chrome ; sans animation ailleurs).
- Easing par défaut `cubic-bezier(.2,.8,.2,1)`, durées 200–450ms. Toute animation se coupe sous `prefers-reduced-motion`.

## 7. Hero

- Hauteur exacte du viewport sous la nav : `height: calc(100svh - 65px)`, contenu centré en grid.
- **`box-sizing: border-box` obligatoire** (sinon le padding s'ajoute et le contenu descend).
- On ne voit que : tags, titre 2 lignes, une phrase, CTA + WhatsApp, indicateur de scroll.

## 8. Appliquer aux autres pages

1. Reprendre le chrome via `layouts/V2Page.astro` (Nav + Dock + Footer + comportements).
2. Construire chaque page en rangées `.r > .w`, en-tête `.v2-head`, puis des cellules qui remplissent.
3. Pages de liste (réalisations, blog) : une rangée par élément, image bord à bord, ligne de métadonnées mono.
4. Pages de détail (étude de cas, article) : colonne de lecture dans le container, filets entre blocs,
   pas de cartes arrondies ; les images touchent le cadre.
5. Garder les URL existantes (`/services`, `/portfolio`, `/blog`, `/about`, `/tarifs` : gardée le 2026-11-17, page SEO potentielle) ; les pages SEO sortent du menu
   (lien discret « Sites & SEO » dans le footer).
6. Avant d'intégrer : vérifier à 1536×808 (laptop 14–15") et 390px (mobile), pas de scroll horizontal.

## 9. Ouvert (dépend du repositionnement)

- Copy : titre du hero, textes des sections, réponses FAQ (« Dès CHF X »), liste d'outils.
- Études de cas IA (les 3 actuelles sont web/SEO) ; tweets et post LinkedIn du hub (placeholders) ; 2 photos.
- Extraction en composants Astro + passage des tokens dans `global.css` au moment de la mise en production.
