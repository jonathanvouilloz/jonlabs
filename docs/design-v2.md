# Design v2 — système du rebrand « systèmes IA »

> Source de vérité visuelle pour refaire toutes les pages du site après la home.
> Référence vivante : `src/pages/v2.astro` (noindex, branche `rebrand-v2`).
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
| `--accent` | `#00D9A3` | Signal (point du logo, impulsions, focus) — jamais en fond |
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
- Exception assumée : les photos de l'à-propos ont `gap: 12px` + `padding: 12px`.
- Une cellule qui touche le cadre a `border-radius: 0`. Le rayon 5px ne s'applique qu'aux éléments posés dedans.
- En-tête de section : `.v2-head` (padding `clamp(48px, 7vw, 88px) var(--pad)`), variante `.v2-head-2` (titre | phrase).

## 5. Composants

| Composant | Classe | Règle |
|---|---|---|
| Bouton primaire | `.v2-btn` | Pilule noire (seule forme pilule du site), hover -1px, active scale .97 |
| Variantes | `-sm` / `-lg` / `-ghost` / `-wa` | ghost = contour `--line` ; wa = vert WhatsApp |
| Bouton rond WhatsApp | `.v2-wa` | 50px, à côté du CTA principal |
| Nav haute | `.v2-top` | Sticky, logo / 4 liens / CTA. Disparaît après 240px de scroll |
| Dock bas | `.v2-dock` | Flottant centré : avatar + 4 liens + bouton agenda. Apparaît quand la nav haute part |
| Tags hero | `.v2-tags` | 3 mots séparés par une étoile 4 branches teal (clip-path) |
| Carte étude de cas | `.v2-case` | Image 16/8 bord à bord → titre, description, ligne mono (secteur · durée · résultat teal), bouton à droite |
| Bento | `.v2-bento` | 3 colonnes, case principale sur 2 rangées en `--soft`, figure Hairline en haut de chaque case |
| Étapes | `.v2-steps` | Cercles pointillés qui se chevauchent (`scale: 1.12`), hover = trait teal plein |
| Hub | `.v2-hub` (dans `.v2-dark`) | Vidéo 2×2 + cartes (tweet, article, LinkedIn) séparées par filets sombres |
| Section contrastée | `.v2-private` | Fond `--soft`, titre à gauche, 2 gros boutons empilés à droite |
| FAQ | `.v2-faq` | Questions en pilules noires + rond « + » à gauche, titre aligné à droite |
| Contact | `.v2-contact` | Grande carte (nom, phrase, email en display, 2 boutons) + 4 cartes réseaux |
| Agenda | `.v2-agenda` | Cal.com inline pleine largeur, 3 colonnes, chargé à l'approche (IntersectionObserver) |

Icônes : Remix Icon, monochromes. Jamais d'emoji dans l'UI.

## 6. Illustration et motion

- **Fond du hero** : `src/scripts/iso-network.ts` — grille isométrique en canvas, impulsions teal
  qui circulent de nœud en nœud et allument des cubes, lueur sous le pointeur. Masque radial pour
  garder le centre lisible. Pause hors écran, statique si `prefers-reduced-motion`.
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

1. Reprendre le chrome : nav haute + dock + footer de `v2.astro` (à extraire en composants au moment du chantier).
2. Construire chaque page en rangées `.r > .w`, en-tête `.v2-head`, puis des cellules qui remplissent.
3. Pages de liste (réalisations, blog) : une rangée par élément, image bord à bord, ligne de métadonnées mono.
4. Pages de détail (étude de cas, article) : colonne de lecture dans le container, filets entre blocs,
   pas de cartes arrondies ; les images touchent le cadre.
5. Garder les URL existantes (`/services`, `/portfolio`, `/blog`, `/about`) ; les pages SEO sortent du menu
   (lien discret « Sites & SEO » dans le footer).
6. Avant d'intégrer : vérifier à 1536×808 (laptop 14–15") et 390px (mobile), pas de scroll horizontal.

## 9. Ouvert (dépend du repositionnement)

- Copy : titre du hero, textes des sections, réponses FAQ (« Dès CHF X »), liste d'outils.
- Études de cas IA (les 3 actuelles sont web/SEO) ; tweets et post LinkedIn du hub (placeholders) ; 2 photos.
- Extraction en composants Astro + passage des tokens dans `global.css` au moment de la mise en production.
