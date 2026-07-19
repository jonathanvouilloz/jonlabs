# Jon Labs — Design System (blueprint)

> **Sources de vérité (dans cet ordre) :**
> 1. **Code** — `src/styles/blueprint.css` (composants `.co-*` / `.ar-*`) + `src/styles/global.css` (tokens `@theme`)
> 2. **Visuel** — les pages live `/styleguide*` (voir plus bas), toujours à jour
> 3. **Rationale** — `docs/features/polish-design-system.md`
>
> Ce fichier est un **résumé d'orientation**, pas la spec exhaustive. En cas de doute, `blueprint.css` fait foi. Ne pas y recopier chaque composant (un miroir finit par diverger).

Le site a migré du template brutaliste d'origine (« Angie ») vers le système **blueprint** : plan technique épuré, filets fins, accent teal unique, crosshairs et repères de coupe. Migration pilotée par la feature `polish-design-system`.

## Palette

### Tokens globaux (`global.css` `@theme`)

```css
--color-bg: #F5F4F0;       /* fond warm off-white           */
--color-surface: #FBFBF9;  /* cartes / surfaces surélevées   */
--color-panel: #ECEDEA;    /* sections alternées            */
--color-ink: #14161A;      /* texte principal (charbon warm) */
--color-muted: #6F7471;    /* texte secondaire              */
--color-hairline: #D8DCD8; /* filets doux                   */
--color-dark: #0E1116;     /* sections sombres              */
--color-accent: #00D9A3;        /* teal — accent/signal      */
--color-accent-strong: #00A87D; /* teal foncé — hover         */
--font-sans: "Plus Jakarta Sans", …;
```

### Tokens blueprint scopés (`blueprint.css`, sous `.co-root` / `.co-chrome`)

```css
--ink: #14161A;  --muted: #6F7471;  --bg: #F4F3EE;  --surface: #FBFBF9;
--line: rgba(20,22,26,.09);    /* filet standard  */
--line-2: rgba(20,22,26,.16);  /* filet appuyé    */
--accent: #00A87D;             /* teal foncé lisible (fond clair)     */
--accent-bright: #00D9A3;      /* teal vif (fonds sombres uniquement) */
```

**Accent = teal, unique.** Sur fond clair : `--accent`. `--accent-bright` réservé aux fonds sombres (CTA, glow). Plus aucun bleu/jaune/magenta brutaliste.

## Typographie

- **Base site** : `Plus Jakarta Sans`
- **Blueprint** : `Inter Tight` (titres/UI) × `Instrument Serif` italique pour les accents (classe `.co-ser`)
- Titres blueprint : `font-weight: 700`, `letter-spacing: -0.025em`, `line-height: 1.05`
- Fonts chargées en non-bloquant dans `Layout.astro`

## Règle de scoping (gravée)

Tout composant `.co-*` doit avoir un ancêtre **`.co-root`** (corps de page, colonne cadrée 1180px) **ou `.co-chrome`** (nav/footer). Sans ça, il hérite du wash `--accent` legacy → accent quasi-transparent. Les deux systèmes coexistent par namespaces disjoints ; la font blueprint s'applique par scope, pas sur `body` (les pages non encore migrées gardent Plus Jakarta).

## Primitives (inventaire — détail dans `blueprint.css`)

| Classe | Rôle |
|---|---|
| `.co-btn` (`--sm`, `--ghost`) | boutons pilule (fond `--ink`, hover `translateY(-1px)`) |
| `.co-cta` / `.co-cta-*` | bloc CTA sombre (glow teal + grain) |
| `.co-eyebrow` | eyebrow texte uppercase (au-dessus d'un titre : eyebrow **texte** ou rien) |
| `.co-badge` (`--solid`) | pastille fonctionnelle inline (tag carte, étape, « Guide », légende) |
| `.co-cat` | label catégorie carte (slash + slug, Inter Tight light italic) |
| `.co-prose` | corps rédactionnel article/guide (remplace `.prose` brutaliste) |
| `.co-frame` · `.co-x` · `.co-crop` | crosshairs & repères de coupe (sans markup) |
| `.co-list` (`--check`) | listes à puce teal / coche Remix |
| `.co-spec` · `.co-dim` · `.co-anno` · `.co-hatch` · `.co-guides` · `.co-dots` | primitives « plan technique » |
| `.ar-*` | shell de page article/guide (colonne + sidebar sticky, TOC, partage) |

## Motion

Moteur léger `data-animate` (chargé par `Layout.astro`) + GSAP pour les cas complexes (marquee, scrub). Détail : skill `/motion`.

- `data-animate` (fade + slide up), `data-animate-stagger` / `data-animate-item` (cascade), `data-delay="0.2"`
- Respect de `prefers-reduced-motion` intégré

## Règles gravées (non négociables)

- **Animations en `ease-out`** — jamais `ease-in` / `ease-in-out` (boucles ambiantes exclues)
- **Zéro emoji dans l'UI** — icônes Remix Icon monochromes (`muted` → `accent` au hover)
- **Filets fins** (`--line` / `--line-2`), **coins nets** — pas de bordures noires 2px ni d'ombres offset brutalistes
- **Jamais de bordure partielle sur un coin arrondi** (effet « U » = IA slop)
- **Pas d'eyebrow-pilule au-dessus d'un H1 de hero** — H1 + sous-titre seuls
- Espacement via `gap` / tokens `--space-*` / `--pad-*`, jamais `margin` seul sur `h`/`p` (reset `.co-root`)

## Pages `/styleguide*` (référence visuelle live)

`/styleguide` (index) · `-components` · `-compo` · `-nav` · `-blog` · `-portfolio` · `-services` · `-lab`

Ce sont les échantillons rendus par le vrai CSS — la source visuelle la plus fiable.
