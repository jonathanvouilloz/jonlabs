# Direction générative — blocs verrouillés et squelettes de prompt

Un prompt de visuel Jon Labs = **bloc verrouillé** (invariant de marque) + **squelette de typologie**
(rempli au cas par cas), avec la ou les références d'ancrage jointes à l'appel.

Le bloc verrouillé se copie **tel quel**, sans reformulation : c'est lui qui tient la palette et
bannit les anti-patterns. Deux variantes s'excluent — la standard pour tout ce qui porte du texte, la
variante ILLUSTRATION pour les visuels sans texte.

Routage typologie → ancrage / format / finition : `typologies.md`.

---

## Bloc VERROUILLÉ — standard (visuels avec texte)

```text
SYSTÈME VISUEL VERROUILLÉ (identique sur tous les visuels de la marque jonlabs) :
- PALETTE STRICTE : un seul accent couleur = vert #00D9A3 (teal). AUCUN autre vert, AUCUNE autre couleur vive (pas de lime, bleu, orange, violet). Tout le reste est NEUTRE : encre #14161A, blanc #FFFFFF, gris très clair #F4F4F2, gris #F4F4F2 / #686C70 / #E3E4E1. En cas de doute, rester neutre. Le vert est un SIGNAL (un mot-clé, un trait, un nœud, un soulignement), jamais une grande surface.
- TYPO : sans serif moderne uniquement (esprit Inter / Geist), jamais de serif, titres nets PAS en graisse lourde, tracking légèrement resserré. AUCUN tiret cadratin.
- Beaucoup d'espace négatif, alignements propres, peu d'éléments. Calme, premium, haut de goût.
- Fond blanc #FFFFFF ou gris très clair #F4F4F2 (couleurs du site jonlabs.ch).
- NE DESSINE AUCUN logo, AUCUN wordmark, AUCUN mot « jonlabs » : laisse une marge basse propre et VIDE (un vrai logo sera composé par-dessus ensuite).
- Texte en FRANÇAIS, orthographe stricte et lisible.
- À éviter : surcharge, AI-slop, fautes, badges inutiles au-dessus du titre, gradients gratuits, look corporate, et TOUTE couleur autre que neutre + #00D9A3.
```

---

## Bloc VERROUILLÉ — variante ILLUSTRATION (sans texte)

Pour la seule typologie `illustration` (covers d'articles, têtes de chapitre, illustrer une phrase).
**Remplace** le bloc standard, ne s'y ajoute pas. Différences clés : aucun texte, nuances de teal
autorisées, fond clair **ou** sombre.

```text
SYSTÈME VISUEL VERROUILLÉ — DIRECTION ILLUSTRATION jonlabs (collage éditorial conceptuel, SANS texte) :
- AUCUN TEXTE : pas un seul mot, pas une lettre, pas un chiffre. Image purement illustrative.
- PALETTE : tout est NEUTRE et monochrome (encre #14161A, gris, papier gris très clair #F4F4F2). UN SEUL accent coloré = le TEAL #00D9A3 et ses NUANCES uniquement (un teal plus foncé, un teal plus clair, pour la variance de valeur). AUCUNE autre teinte : pas de rouge, orange, jaune, bleu, violet. Si une couleur vive est suggérée (grand cercle, lumière, fils), elle est TEAL.
- STYLE : illustration éditoriale haut de gamme / collage conceptuel surréaliste. Calme, premium, beaucoup d'espace négatif. JAMAIS d'AI-slop, jamais de grunge brouillon, jamais de look stock-photo corporate.
- TEXTURE : grain fin / halftone-riso / papier déchiré subtils. Fond papier clair texturé #F4F4F2 OU, pour l'ambiance sombre, fond encre profond texturé.
- NE DESSINE AUCUN logo, AUCUN wordmark, AUCUN texte « jonlabs ». Laisse les marges propres et vides.
- ÉCRANS & DOCUMENTS : si l'image montre un écran, une interface, un papier ou une maquette, ils ne portent AUCUN faux texte ni fausse ligne de code lisibles — uniquement des blocs, des formes et des glyphes réduits au strict minimum, non lisibles.
- À éviter : texte de toute sorte, faux texte / fausses lignes de code / UI avec texte lisible, watermark, légende, surcharge, secondes couleurs vives, rendu sale.
```

---

# Squelettes par typologie

Joindre la ou les références indiquées. Remplacer ce qui est entre `[ ]`. Garder le texte minimal —
un visuel n'est jamais la recopie d'un post.

## Punchline (ref4 · 1:1)
```text
TYPOLOGIE punchline, une phrase SEULE, ultra-minimaliste : aucune texture, aucune forme, juste la typo dans le vide.
TEXTE EXACT :
- petit label haut gauche : [thème court]
- grand titre : [la phrase].
- le mot « [mot-clé] » en vert #00D9A3
- petite ligne bas, gris : [sous-texte].
```

## Citation (ref2 · 4:3)
```text
TYPOLOGIE citation éditoriale, paysage. Texture papier subtile visible.
TEXTE EXACT :
- petit label : opinion
- grande citation (sans serif, pas grasse) : « [la citation] »
- le mot « [mot-clé] » en vert #00D9A3
- attribution discrète sous la citation : Jon Labs
- un filet fin horizontal entre citation et attribution.
```

## Tips / framework (ref5 · portrait)
```text
TYPOLOGIE tips/méthode en étapes. Langage de CONNECTEURS : un chemin fin vertical relie des nœuds numérotés (cercles). Trait et nœud actif en vert #00D9A3, autres nœuds gris contour.
TEXTE EXACT :
- titre : [titre] (mot-clé « [x] » en vert)
- étape 1 : [...]
- étape 2 : [...]
- étape 3 : [...]
- conclusion bas, un peu plus forte : [punchline].
```

## Abstrait / concept (ref2 · portrait)
```text
TYPOLOGIE abstrait/concept héros, TRÈS peu de texte. Métaphore : une grande forme circulaire / halo NEUTRE gris (dégradé radial doux), un seul point focal vert #00D9A3. Texture papier subtile, espace négatif dominant.
TEXTE EXACT :
- titre court : [la phrase] (mot-clé « [x] » en vert)
- petite ligne gris : [sous-texte].
```

## Mythe / opinion (ref4 · 1:1)
```text
TYPOLOGIE mythe/opinion tranchée, minimaliste.
TEXTE EXACT :
- petite étiquette : [mythe / hot take / etc.]
- grand titre : [l'affirmation]. (mot-clé « [x] » en vert #00D9A3)
- sous-texte gris : [la nuance / preuve].
```

## Problem / Solution (ref1 + ref4 · portrait)
```text
TYPOLOGIE problem/solution. Deux cartes arrondies reliées par un connecteur fin coudé ; nœud creux côté problème, nœud plein teal côté solution. Carte problème gris clair neutre ; carte solution un peu plus forte (légère teinte teal), plus désirable.
TEXTE EXACT :
- titre : [titre] (mot-clé « [x] » en vert)
- carte problème, label « [Le réflexe] » : [texte court]
- carte solution, label « [La méthode] » : [texte court]
- ligne bas plus forte : [punchline] (mot-clé en vert).
```

## Illustration — niveau ABSTRAIT (métaphore pure)

Préfixer la **variante ILLUSTRATION** du bloc verrouillé. Anchors clairs `illu1-mind-threads` +
`illu9-statue-tree`, ou sombre `illu7-cosmos-astronaut`. Natif `1024x1536`, finition `pad` à demander
explicitement si aucun bord ne doit tomber. `logo: none`.

```text
TYPOLOGIE illustration éditoriale conceptuelle, AUCUN texte. Collage / illustration surréaliste premium.
CONCEPT à incarner (sans l'écrire) : [l'idée centrale en 1 phrase, ex. « la surcharge d'informations » / « la sagesse ancienne face à l'IA » / « l'esprit qui se déploie »].
SUJET (en choisir 1) : [buste / statue antique plâtre N&B] OU [figure vintage N&B mid-century] OU [silhouette à l'encre]. Souvent centré sur LA TÊTE / L'ESPRIT (tête ouverte, pensées qui s'échappent, cerveau connecté).
MÉTAPHORE VISUELLE : [ex. des centaines de fils d'encre fins emmêlés s'échappant de la tête · un grand cercle teal en point focal derrière le sujet · une tête ouverte d'où pousse [un arbre / une architecture / une carte d'étoiles] · des bandes et dots géométriques · un collage de papier déchiré].
AMBIANCE : [clair — fond papier clair texturé, défaut] OU [atmosphérique — fond encre profond texturé, grain dense].
ACCENT : un seul, TEAL #00D9A3 et ses nuances (le grand cercle / les fils / la lumière / le point focal). Tout le reste neutre N&B.
COMPOSITION : un seul sujet fort, énorme espace négatif, marges propres et vides (aucun logo, aucun texte).
```

## Illustration — niveau SEMI-CONCRET (cover d'article)

Préfixer la **variante ILLUSTRATION**. Anchors `illu2-statue-laptop` + `illu4-plugged-in` (ou
`illu6-phone-collage`). Natif `1536x1024`, **finition `crop` vers 16:9**. `logo: none`.

```text
TYPOLOGIE illustration éditoriale SEMI-CONCRÈTE, AUCUN texte. Format PAYSAGE horizontal, composition lisible d'un coup d'œil.
NIVEAU D'ABSTRACTION : semi-concret — on doit DEVINER le sujet de l'article au premier coup d'œil. Pas d'abstraction pure.
SUJET DE L'ARTICLE (à faire comprendre visuellement) : [le thème de l'article en 1 phrase].
OBJET CONCRET ANCRE (l'élément le plus lisible) : [UN objet reconnaissable qui nomme le sujet — ex. ordinateur portable ouvert + UI, fenêtre de navigateur / maquette de site, chaîne de boîtes de workflow reliées, pile de documents / factures, engrenages]. Les écrans et papiers ne portent AUCUN texte lisible (blocs et glyphes non lisibles seulement).
SIGNATURE DE MARQUE : un buste OU une main de statue antique N&B, DISCRET, qui interagit avec l'objet (le pilote, le manipule) — signature de marque, PAS le sujet unique.
ACCENT : un seul, TEAL #00D9A3 et ses nuances (l'écran actif / la ligne de flux / un bouton / un nœud). Tout le reste neutre N&B.
COMPOSITION : scène décentrée, grand espace négatif, cadrage horizontal paysage, marges propres et vides.
```

---

## Contrôle après génération

Le génératif n'est pas déterministe : ces quatre points se vérifient à l'œil sur chaque rendu, et
une relance coûte moins cher qu'une correction.

1. **Une seule teinte.** Une seconde couleur vive → relancer.
2. **Aucun texte** en direction illustration — y compris le faux texte dans les écrans et les papiers.
3. **Aucun logo dessiné.** La marge basse doit être vide ; le vrai logo se compose ensuite.
4. **Orthographe et accents** pour les typologies avec texte. Un accent mangé → relancer, puis
   basculer en overlay déterministe si ça se répète.
