# Références annotées — ce qu'on prend, ce qu'on laisse

15 références d'ancrage pour `gpt-image-2` (endpoint `images/edits`, 1 à 2 refs par appel).
Une référence **ancre** un rendu, elle ne se recopie pas : pour chacune, ce qu'on retient et ce
qu'on écarte explicitement.

**Règle de palette valable partout** : tout est neutre (encre / gris / papier warm) + **un seul
accent = teal `#00D9A3`**. Le rouge, l'orange, le bleu, le violet, le lime des références sont
**systématiquement remappés en teal**. C'est la règle la plus violée en pratique — si un rendu sort
une seconde teinte, on relance.

---

# Famille 1 — Ancrages « avec texte » (ref1 → ref5)

Ces cinq références ancrent les typologies qui portent un titre (punchline, citation, tips, abstrait,
mythe, problem/solution). Elles viennent de decks produit et de rapports éditoriaux : on y prend une
**grammaire de mise en page**, jamais un style de marque.

## ref1-ultime.jpg — cartes reliées par un connecteur coudé
Slide « Problem and Solution » : deux cartes gris clair à grand rayon, reliées par un **connecteur
coudé fin** à nœuds ronds, titre en sans-serif léger, énorme respiration en haut.
- **On prend** : le **connecteur coudé à nœuds** (notre marqueur le plus distinctif), les deux cartes
  en opposition dont la seconde est plus désirable, le titre non-gras, la générosité du blanc.
- **On laisse** : le dégradé bleu du bandeau « Solution », la pastille jaune, le badge vert lime, le
  chip de section. Tous les accents → **teal unique**. Pas de gradient.

## ref2-texture.png — rapport éditorial sur papier texturé
Planche « Ideas Report » : fond crème **texturé grain**, gros titre éditorial sans-serif, un chiffre
dominant + trois chiffres secondaires, cercles pleins alignés, filets verticaux fins, cercle en
pointillés pour l'élément « vide ».
- **On prend** : le **papier crème texturé** (jamais blanc clinique), la hiérarchie éditoriale du
  titre, les **filets fins** de séparation, le cercle en pointillés comme état « manquant », le pied
  de page discret.
- **On laisse** : les sphères orange dégradées → **cercles teal plats** ; le tiret cadratin du titre
  (banni) ; le logo tiers. Et surtout : **les chiffres de cette ref ne sont pas un modèle** — la data
  chiffrée ne passe pas par le génératif (cf. `typologies.md`).

## ref3.png — dot-grid de proportions
Trois **grilles de points** remplies à 95 / 72 / 41 %, chiffre géant dessous, légende en trois lignes.
- **On prend** : le **dot-grid** comme langage de proportion, le chiffre géant en sans-serif fin, la
  légende courte sous le chiffre, l'alignement en trois colonnes égales.
- **On laisse** : les trois teintes (violet / bleu / orange) → **teal pour la part remplie, gris
  `#D8DCD8` pour le reste**. **Ref de composition uniquement** : elle décrit ce que le rendu par code
  doit produire, elle n'autorise pas à générer une data visualisation.

## ref4-minmalist.png — parcours serpentin à nœuds
Process en **serpentin** : une ligne fine continue qui zigzague, des nœuds ronds à chaque étape,
libellés courts de part et d'autre, fin en pointillés, fond crème.
- **On prend** : la **ligne fine continue à nœuds** (nos connecteurs, version parcours), les libellés
  ultra-courts, la fin en pointillés qui signifie « ça continue », l'immense respiration.
- **On laisse** : le bleu franc → **teal** ; la typo condensée en capitales grasses du titre → notre
  sans-serif non-gras. Malgré son nom, ce n'est pas une ref « minimaliste » : ce qu'on lui emprunte,
  c'est **l'épure du trait**, pas sa composition chargée.

## ref5-shapes-form.png — demi-cercles et opposition
Page « Design Challenge » : très gros titre sur deux lignes, **demi-cercle gris** à gauche et
**demi-cercle lime** en bas à droite en opposition, texte courant avec mots en gras, pastille
d'auteur.
- **On prend** : les **demi-cercles pleins** comme blocs de composition (notre halo poussé en héros),
  l'opposition problème / solution par la forme plutôt que par la carte, la mise en gras sélective
  dans le texte courant, le fil d'ariane discret en tête.
- **On laisse** : le lime `#C3F53C` → **teal** ; la photo d'avatar (pas de personne réelle générée) ;
  le blanc pur du fond → papier warm.

---

# Famille 2 — Ancrages « illustration » (illu1 → illu10)

Fournis le 2026-06-30 pour la typologie **illustration** : visuel **sans aucun texte**, purement
illustratif (covers d'articles, têtes de chapitre, illustration d'une phrase). Palette : neutre +
teal **et ses nuances** (teal plus foncé / plus clair) pour la variance de valeur.

## illu1-mind-threads.png — figure + fils de pensée
Silhouette sombre, tête d'où s'échappent des **centaines de fils d'encre fins** emmêlés, fond papier
crème, mains marbrées.
- **On prend** : les fils fins emmêlés = métaphore de la pensée / connexion / surcharge mentale (très
  raccord avec nos connecteurs signature) ; le monochrome encre sur papier warm ; l'énorme
  respiration. **Anchor par défaut (abstrait warm).**
- **On laisse** : rien à retirer — déjà quasi à notre palette. Les fils → teal.

## illu2-statue-laptop.png — buste antique + objet moderne
Statue de philosophe grec qui réfléchit devant un **laptop**, collage de journaux, fond papier.
- **On prend** : le **télescopage antique × moderne** (sagesse intemporelle vs tech actuelle), la
  statue plâtre N&B, le collage de coupures de presse. **Anchor par défaut (semi-concret / cover).**
- **On laisse** : le liseré vert vif autour de la statue → accent teal maîtrisé.

## illu3-vr-exec.png — portrait N&B + barre de lumière
Homme en costume N&B, **barre de lumière** sur les yeux, fond gris uni.
- **On prend** : le geste minimal, la barre lumineuse comme signal (→ teal), l'épure photo.
- **On laisse** : trop « stock photo » seul → à enrichir d'une texture/collage pour ne pas faire
  corporate.

## illu4-plugged-in.png — vintage + surréalisme
Cadre vintage N&B à un vieil ordinateur, **tête ouverte** avec une mini-scène dedans, nuages,
**cercle plein** en haut.
- **On prend** : la **tête ouverte / l'esprit habité**, le mid-century N&B, les nuages découpés, le
  cercle plein comme accent (→ teal).
- **On laisse** : le jaune → teal. (Le micro-texte de la ref : on ne garde AUCUN texte.)

## illu5-circle-sun-girl.png — figure + grand cercle + lignes
Fillette vintage N&B sur une colline sombre, **grand cercle « soleil »** derrière, **lignes fines**
emmêlées au-dessus.
- **On prend** : le **grand cercle** dominant comme point focal (notre demi-cercle/halo poussé en
  héros), les lignes fines, la figure découpée sur la colline, le papier crème.
- **On laisse** : le **rouge** du cercle et des lignes → **teal** (et nuances). Compo idéale pour une
  cover portrait.

## illu6-phone-collage.png — collage punk halftone
Main N&B tenant un téléphone, **formes halftone déchirées**, accent vif, grunge.
- **On prend** : l'énergie collage déchiré / **halftone riso**, la main découpée, l'objet tech au
  centre.
- **On laisse** : le rouge → teal ; doser le grunge (rester premium, pas brouillon).

## illu7-cosmos-astronaut.png — illustration atmosphérique sombre
Astronaute, **cartes de constellation** en lignes fines, fond bleu nuit texturé, halftone, une main
en bas.
- **On prend** : la **variante atmosphérique sombre** (fond encre profond), les **diagrammes/lignes
  de constellation** fines (notre langage de connecteurs en version cosmique), le grain.
- **On laisse** : le bleu → **teal foncé/clair** (nuances). Réf clé pour la sous-famille
  « atmosphérique ».

## illu8-head-explosion.png — collage tête qui explose
Homme en costume N&B, **tête qui explose** en nuages / bandes noires géométriques / pissenlits,
**yeux bandés** (scotch), papier froissé crème.
- **On prend** : la **tête qui explose en idées** (surcharge, créativité, censure), le mélange nuages
  + **bandes géométriques** + papier déchiré, le N&B sur papier warm. Collage le plus abouti.
- **On laisse** : rien de couleur à retirer (déjà N&B) → on **injecte** un seul accent teal (une
  bande, un élément) pour signer.

## illu9-statue-tree.png — buste antique + nature + géométrie
Tête de statue grecque **ouverte avec un arbre** qui pousse + bâtiment béton, **cercle** plein, dots
géométriques, nuages.
- **On prend** : la **tête-paysage** (esprit qui pousse / croissance), le mix statue + nature +
  architecture, les **dots-grid** et **traits géométriques** discrets, le papier crème. **Anchor par
  défaut (abstrait warm).**
- **On laisse** : l'**orange** du cercle + le point doré → **teal** + nuances de teal.

## illu10-light-corridor.png — silhouette atmosphérique
Silhouette marchant vers un **couloir de lumière** trapézoïdal, fond sombre étoilé, gros grain.
- **On prend** : la **variante atmosphérique** minimale, le contraste silhouette/lumière, le grain
  dense, la tension narrative (seuil, passage).
- **On laisse** : la dominante vert-noir → recentrer sur **teal** (la lumière en teal clair) pour
  signer.

---

## Synthèse — l'ADN de la direction illustration

1. **Sujet** : statue antique / figure vintage N&B / silhouette — souvent **la tête & l'esprit** (tête
   ouverte, pensées qui s'échappent, cerveau branché), parfois mains, objet tech.
2. **Vocabulaire** : collage découpé, **fils/lignes fines** emmêlés, cartes de constellation /
   diagrammes, halftone/riso, papier déchiré/froissé, **grand cercle** focal, dots & traits
   géométriques.
3. **Fond** : papier crème warm texturé (**warm**, défaut) OU encre profonde (**atmosphérique**,
   sombre).
4. **Couleur** : neutre monochrome + **un seul accent teal `#00D9A3` et ses nuances**. Tout
   rouge/orange/bleu des refs est remappé teal.
5. **Zéro texte, zéro logo.** Pur illustratif. Énorme respiration, premium, jamais AI-slop ni grunge
   brouillon.
6. **Anchors** : abstrait warm = `illu1-mind-threads` + `illu9-statue-tree` · abstrait sombre =
   `illu7-cosmos-astronaut` (ou `illu10-light-corridor`) · semi-concret / cover =
   `illu2-statue-laptop` + `illu4-plugged-in` (ou `illu6-phone-collage`).
