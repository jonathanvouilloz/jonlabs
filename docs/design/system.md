---
project: jonlabs
status: needs_review
sources:
  - docs/design-v2.md (spec détaillée, directions validées le 17.11.2026)
  - src/styles/v2.css
  - src/styles/global.css
  - src/styles/blueprint.css
  - src/pages/v2/styleguide.astro
  - docs/DECISIONS.md (16.11.2026, 17.11.2026, 18.11.2026)
audited_on: "2026-11-19"
review_due: "2026-12-31"
---

# Système de design UI : jonlabs.ch

> Point d'entrée v3. Le système existe dans le code et dans `docs/design-v2.md` : ce document ne le recopie pas, il dit où regarder, ce qui fait foi et ce que l'audit du 19.11.2026 a relevé. Les images marketing (covers) sont dans `moodboard.md`.

## Ce qui fait foi, dans l'ordre

1. **Code** : `src/styles/v2.css` (tokens et classes `.v2-*`), composants `src/components/v2/`, comportements `src/scripts/v2-ui.ts`.
2. **Rendu** : `/v2/styleguide` (noindex, exclu du sitemap par le filtre `/styleguide` d'`astro.config`).
3. **Spec** : `docs/design-v2.md` (tokens, grille, tableau des composants, motion, règles d'application).
4. **Héritage** : `blueprint.css` et `docs/styleguide.md` décrivent le système précédent. Il ne reste en usage que pour le corps d'article (`.co-prose`, TL;DR, tableaux, widgets MDX), aliasé par `.v2-art`.

## Essence et anti-essence

Site de freelance IA seul, clair en une seconde : ce que je fais, la preuve, comment me parler. Peu de texte, chaque section remplit le container.

À éviter : look de template SaaS, cartes très arrondies, ombres décoratives, gradients, pilules partout, texte long sur la home, emoji.

## Voix et microcopy

Pages en « vous », blog en « tu » (`docs/brand/voice.md`). Libellés de CTA : `docs/brand/message.md` § CTA par intention. Prix : `src/data/pricing.ts`, jamais en dur dans un composant.

## Couleurs

Tokens dans `v2.css` (`:root` du scope v2) ; tableau commenté : `design-v2.md` § 2.

| Règle | Détail |
|---|---|
| Fond | Blanc `--bg`. Le fond warm `#F5F4F0` du canon de marque reste dans `global.css` pour l'héritage |
| Accent | Teal `--accent`, signal. En fond : une seule cellule de titre par page (`.v2-teal`, texte `--ink`) |
| Teal sur blanc | `--accent-strong` |
| Filets | `--line`, 1px, partout ; pas d'ombre |

## Typographie

Funnel Display (titres, poids 500), Inter Tight (texte, 16px / 1.55), Fragment Mono (métadonnées, citations d'article). Tailles : `design-v2.md` § 3.

## Espacement, rayon, grille

Grille en rangées `.r > .w` (container 1180px, filets verticaux), cellules bord à bord séparées par des filets, jamais par des `gap`. Rayon maximal `--r` 5px, 0 pour une cellule qui touche le cadre. Padding de cellule `--pad`. Burger sous 1024px et sur `(hover: none)`. Vérifier à 1536×808 et à 390px.

## Illustration et icônes

Figures isométriques `@lucasmarkes/hairline`, une figure par idée. Shader `DitherBg` dans le hero, figé sur `(pointer: coarse)`. Icônes Remix, monochromes.

## Motion

Anime.js pour le titre du hero, les titres de section et les compteurs ; survols en CSS ; easing `cubic-bezier(.2,.8,.2,1)`, 200 à 450 ms ; tout se coupe sous `prefers-reduced-motion`. Détail : `design-v2.md` § 6.

## Inventaire des composants

Tenu dans `design-v2.md` § 5 et rendu dans `/v2/styleguide`. Un composant nouveau s'ajoute aux deux en même temps.

## Audit du 19.11.2026

| Contrôle | Résultat |
|---|---|
| Styleguide en noindex, hors sitemap | OK (`robots="noindex, nofollow"`) |
| `prefers-reduced-motion` | OK (présent dans `v2.css`, `v2-ui.ts`, `global.css`, `blueprint.css`) |
| Contraste `--ink` sur `--bg` | 18,1 : OK |
| Contraste `--mut` sur `--bg` / `--soft` | 5,3 / 4,8 : OK |
| Contraste `--ink` sur `--accent` | 9,9 : OK |
| Contraste `--dim` (`#9A9D9F`) sur blanc | **2,7** : sous 3:1, même pour un grand titre. Deuxième ligne des titres en deux temps |
| Contraste `--accent-strong` (`#00A87D`) sur blanc | **3,0** : insuffisant pour du petit texte (4,5 requis). Métadonnées mono, puces |
| Focus visible | Défini composant par composant (méga-menu, tuiles, burger, témoignages, pied d'article). Pas de règle globale `:focus-visible` trouvée dans `v2.css` : liens et boutons `.v2-btn` à vérifier au clavier |
| Valeurs de marque en dur | Non contrôlé composant par composant |
| Rendu visuel | Non contrôlé dans un navigateur pendant cet audit |

## Écarts de documentation à résorber

- `CLAUDE.md` § Design System décrit encore le blueprint (fond `#F5F4F0`, Inter Tight + Instrument Serif) comme l'état réel.
- `design-v2.md` dit remplacer `docs/styleguide.md` « une fois la v2 en production » : la v2 est en production depuis le 17.11.2026.
- `docs/styleguide.md` liste des pages `/styleguide*` blueprint qui n'existent plus dans `src/pages`.
- Deux jeux de tokens coexistent (`@theme` de `global.css`, `:root` de `v2.css`) ; `design-v2.md` § 9 prévoit leur fusion, non faite.

Ces fichiers appartiennent à `doc-keeper` ; les écarts lui sont transmis, rien n'est corrigé ici.
