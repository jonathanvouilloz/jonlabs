# Rebrand v2 — nouvelle DA « freelance systèmes IA »

> Branche `rebrand-v2`. Spike de la future home sur `/v2` (noindex), puis redesign de toutes les pages.
> Système de design figé dans `docs/design-v2.md`. Le fond (copy, offre) attend le repositionnement en cours.

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
> Mise a jour : 2026-11-16

| Fichier | Role |
|---------|------|
| `src/pages/v2.astro` | Home v2 complète (markup, styles scoped `.v2-*`, scripts nav/dock, reveal, Hairline, Cal.com) — référence vivante du design |
| `src/scripts/iso-network.ts` | Fond animé du hero : grille iso en canvas, impulsions + cubes, lueur pointeur, pause hors écran |
| `src/data/hub.ts` | Contenu du hub (vidéos YouTube, tweets et post LinkedIn en placeholder) |
| `src/layouts/Layout.astro` | Ajout d'un slot `head` pour charger une police par page |
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
- [ ] Copy de la home (après repositionnement)
- [ ] Études de cas IA (2-3) pour remplacer les cas web/SEO
- [ ] Contenu réel du hub (tweets, post LinkedIn) + 2 photos
- [ ] Extraire nav / dock / footer en composants, tokens dans `global.css`
- [ ] Redesign `/portfolio`, `/portfolio/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `/services`
- [ ] Bascule `/v2` → `/` + retrait de `/tarifs` (redirection)
