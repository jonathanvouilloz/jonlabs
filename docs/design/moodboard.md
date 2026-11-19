---
project: jonlabs
extends: identity
status: needs_review
base_style: editorial-collage
typography:
  display: Inter Tight
  body: Inter Tight
  rules: "Aucun texte dans les images du site. Sans serif uniquement si un overlay est demandé un jour."
image_generation:
  default_text_mode: none
  fallback_text_mode: none
  embedded_text_language: fr
  preserve_accents: true
  logo_policy: never-generated
  person_fidelity: none
  product_fidelity: none
  variation_policy: "un objet concret différent par article, même signature (statue N&B, accent teal)"
illustration:
  mood: "calme, premium, beaucoup d'espace négatif"
  composition: "scène décentrée, un seul sujet fort, marges propres et vides"
  texture: "grain fin, papier crème warm ou fond encre profond"
negatives:
  - "any text, letters, numbers, fake code, readable UI"
  - "any colour other than neutral tones and teal #00D9A3"
  - "logo, wordmark, the word jonlabs"
  - "AI slop, stock photo feel, corporate clichés"
  - "robots, glowing brains, humanoid AI"
references:
  default_blog_cover: ../../visual/refs/illustration/illu2-statue-laptop.png
  default_scene: ../../visual/refs/illustration/illu4-plugged-in.png
  approved_logos: []
  approved_people: []
  approved_products: []
forbidden_subjects:
  - logos et interfaces reconnaissables d'éditeurs tiers (Anthropic, OpenAI, Infomaniak, xAI…)
  - personnes réelles, clients, visages identifiables
  - captures d'écran présentées comme réelles
allowed_subjects:
  - un objet concret qui nomme le sujet de l'article (serveur, ordinateur, boîte mail, téléphone, documents)
  - buste ou main de statue antique noir et blanc, en signature
  - connecteurs, nœuds, lignes de flux en teal
sources:
  - ../brand/visual-refs/ (canon : direction.md, typologies.md, refs.md)
  - docs/moodboard.md (v2, remplacé par ce fichier)
  - moodboard/presets.yaml (v2)
---

# Moodboard : images générées de jonlabs.ch

> La direction artistique générative vit dans le canon `noyau/brand/visual-refs/`, projeté ici dans `visual/refs/` par `python brand/sync.py` (ne pas éditer `visual/refs/`). Ce document dit seulement ce que le site en utilise. Le design de l'interface est dans `system.md`. Palette : `docs/brand/identity.md` et canon.

## ADN visuel

Covers d'articles en **illustration éditoriale semi-concrète** : un objet reconnaissable qui fait deviner le sujet, un buste ou une main de statue antique en noir et blanc qui interagit avec lui, un seul accent teal `#00D9A3` et ses nuances. Aucun texte, aucun logo. Fond papier crème texturé, ou fond encre pour une ambiance sombre.

Une cover ne décrit pas l'article : elle en montre l'objet. Elle ne représente jamais l'IA par un robot ou un cerveau lumineux.

## Ce que le site utilise du canon

| Usage | Typologie du canon | Références | Format |
|---|---|---|---|
| Cover d'article, og:image | Illustration, niveau semi-concret | `illu2-statue-laptop`, `illu4-plugged-in` (ou `illu6-phone-collage`) | 1536×1024 natif, recadré en 16:9 (1536×864) |
| Image dans le corps d'un article | Illustration, niveau semi-concret | `illu4-plugged-in` | 1536×1024, sans conversion |

Rôle des références : `style` (on reprend le traitement et la composition, jamais le sujet). Les typologies avec texte (punchline, citation, tips) servent aux réseaux, dans `atelier/`, pas au site.

Dans un article technique, une capture d'écran réelle ou un tableau vaut mieux qu'une image générée : le preset `blog-inline` ne sert que lorsqu'une section n'a rien à montrer.

## Texte et logo

- `text_mode: none` partout. Les écrans et documents dessinés ne portent ni faux texte ni fausses lignes de code.
- Le logo n'est jamais généré ni composé sur une cover d'article.
- Un chiffre ne passe jamais par une image générée.

## Bloc de prompt

Le bloc verrouillé « variante ILLUSTRATION » de `visual/refs/direction.md` est recopié dans les `layout_directives` des presets, parce que le runtime ne lit pas `direction.md`. Si le canon change, mettre à jour `visual/presets.yaml`.

## Contrôle après génération

1. Une seule teinte colorée, le teal.
2. Aucun texte, y compris dans les écrans et les papiers.
3. Aucun logo dessiné, aucun produit tiers reconnaissable.
4. Le sujet de l'article se devine au premier coup d'œil.

Une image qui échoue à un point est relancée, pas retouchée.

## État

`needs_review` tant qu'une cover de test n'a pas été générée par le runtime `generate-images` avec ces presets et validée à l'œil. Les covers existantes ont été produites par le skill `visual` (copie figée des mêmes références). Journal : `visual/.generations/`.

Hérité, non migré : presets GMB et LinkedIn de `moodboard/presets.yaml` (modules désactivés) et `moodboard/carousel.config.yaml` (skill `open-carrusel`). Le dossier `moodboard/` reste en place pour eux.
