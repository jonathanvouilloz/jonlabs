# CLAUDE.md - Jon Labs Project

## Project Overview

Site web personnel/freelance pour **Jon Labs** (Jonathan Vouilloz), à l'origine basé sur le template Astro "Angie", depuis largement réécrit.

- **Stack**: Astro 5 (sortie statique) + MDX + Tailwind CSS 4 + React 19 (îlots) + GSAP/Motion
- **Style**: système « blueprint » (voir `docs/styleguide.md`) — migration depuis l'ancien brutaliste en cours (feature `polish-design-system`)
- **Domaine**: jonlabs.ch (`https://www.jonlabs.ch`)
- **Langue**: Contenu en francais (FR-CH)

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Production build
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── assets/          # Images/SVGs optimisés par Astro (illustrations, services…)
├── components/      # Composants Astro/React
├── content/         # Collections markdown — SEULE source de vérité (config.ts)
├── data/            # schema.ts, navigation.ts, données géo/métiers, scénarios
├── layouts/         # Layout.astro (template de base)
├── pages/           # Routes (voir README.md pour la carte complète)
├── plugins/         # remark-tldr.mjs (bloc TL;DR auto)
├── styles/          # global.css (import Tailwind + design tokens)
└── sample.ts        # Données/config (author, links)

public/              # Servi tel quel : images/, favicon/, fonts/, og-image, robots, llm(s).txt
docs/                # Documentation projet — voir docs/README.md pour l'index
```

> Convention images : `src/assets/**` = tout visuel optimisé par Astro (`<Image>`/import) ·
> `public/images/{collection}/{slug}` = miroir des collections markdown + assets cités en
> JSON-LD/OG. Les sorties de pipeline (GMB, carousels, generated_imgs…) sont gitignorées, hors build.

## Design System

Source de vérité = **`src/styles/global.css`** (tokens réels) + **`docs/styleguide.md`** (guide).

> ⚠️ Dérive connue : `docs/styleguide.md` décrit encore l'ancien système brutaliste
> (Space Grotesk, `--main-bg`/`--blue`, bordures noires épaisses) alors que `global.css`
> a migré vers « blueprint ». À rafraîchir sous la feature `polish-design-system`.
> En attendant, se fier à `global.css`.

### État réel (blueprint, `:root` de global.css)

```css
--color-bg: #F5F4F0;      /* off-white warm (fond)     */
--color-ink: #14161A;     /* texte principal (charbon) */
--color-accent: #00D9A3;  /* teal — accent/CTA/signal  */
--color-hairline: #D8DCD8;/* filets doux (bordures)    */
```

- **Typo** : `Plus Jakarta Sans` (sans) + `Inter Tight` × `Instrument Serif` italique (`.co-ser`)
- **Traits** : filets fins (hairline), pas de bordures noires 2px ni d'ombres offset brutalistes
- **Icônes** : Remix Icon via CDN (`<i class="ri-code-line"></i>`), monochromes — jamais d'emoji dans l'UI

## Coding Conventions

- **Components**: PascalCase (`Hero.astro`, `ServiceCard.astro`)
- **Files**: kebab-case for pages, camelCase for TS
- **CSS**: Tailwind utilities first, CSS variables for colors
- **Commits**: `feat(scope): description` format

## Routes

Toutes les pages principales sont **en production**. La carte complète des routes et des
collections de contenu est maintenue dans **`README.md`** (section « Routes principales »).
Ne pas dupliquer la liste ici (un miroir finit par diverger).

## Important Notes

- Se fier à `src/styles/global.css` pour le design (design system blueprint) — cf. note de dérive ci-dessus
- Mobile-first responsive design (base = mobile, `md:` = desktop)
- Content is in French (FR-CH) ; zéro emoji dans l'UI (icônes Remix monochromes)
- Prefer editing existing components over creating new ones
- Respecter la convention images (cf. Project Structure) ; artefacts de pipeline hors repo
- Before committing, run through `.claude/checklist.md`

## Documentation

Voir `docs/README.md` pour l'index complet (4 zones : sources de vérité, standards, clusters de contenu, recherche).

| File | Purpose |
|------|---------|
| `docs/README.md` | Index documentaire (à lire en premier) |
| `docs/HANDOFF.md` | Index des features actives (état de reprise, mis à jour à chaque session) |
| `docs/project-context.md` | Identity, positioning, stack, architecture |
| `docs/roadmap.md` | Development phases and tasks |
| `docs/guidelines.md` | Coding standards, conventions, best practices |
| `docs/styleguide.md` | Design system (⚠️ en cours de resync sur le blueprint) |
| `docs/schema-guide.md` | Schema.org implementation guide |
| `docs/identity.md` · `voice.md` | Brand/tone/banned_words · auteur/phrasé (consommés par les skills) |
| `docs/seo-context.md` · `gmb-context.md` | Contexte SEO · locations GBP (pipeline contenu) |
| `.claude/checklist.md` | Pre-commit checklist and starter prompts |

## Workflow

1. **Before coding**: Read relevant docs (project-context.md, styleguide.md)
2. **During coding**: Follow guidelines.md conventions
3. **Before committing**: Run checklist.md
4. **Track progress**: Update roadmap.md tasks
