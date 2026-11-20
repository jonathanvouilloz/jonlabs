# Routage typologie → ancrage, format, finition, moteur

Chaque type de contenu route vers une référence d'ancrage, un traitement, un format et une finition.
Palette mono-teal partout. Les squelettes de prompt correspondants sont dans `direction.md`.

## La table

| Typologie | Contenu typique | Ancrage | Traitement | Natif | Format défaut | Finition | Logo | Moteur |
|---|---|---|---|---|---|---|---|---|
| **Punchline** | une phrase forte | `ref4` | ultra-minimal, sans texture | `1024x1024` | 1:1 | — | wordmark | gpt-image-2 |
| **Citation** | quote + attribution | `ref2` | texture papier, filet | `1536x1024` | 4:3 | pad | wordmark | gpt-image-2 |
| **Tips / framework** | 3-4 étapes | `ref5` | connecteurs + nœuds | `1024x1536` | 4:5 | pad | wordmark | gpt-image-2 |
| **Abstrait / concept** | métaphore, héros | `ref2` | halo neutre + 1 point teal | `1024x1536` | 4:5 | pad | wordmark | gpt-image-2 |
| **Mythe / opinion** | affirmation tranchée | `ref4` | minimal + étiquette | `1024x1024` | 1:1 | — | wordmark | gpt-image-2 |
| **Problem / Solution** | opposition d'approches | `ref1` + `ref4` | 2 cartes + connecteur coudé | `1024x1536` | 4:5 | pad | wordmark | gpt-image-2 |
| **Data chiffrée** | %, dot-grid, chiffres | `ref3` | dot-grid teal + gris | — | portrait | — | wordmark | **rendu par code** |
| **Illustration — abstrait** | tête de chapitre, réseaux, illustrer une phrase | `illu1` + `illu9` (clair) · `illu7` (sombre) | collage éditorial, métaphore pure | `1024x1536` | 4:5 · 2:3 | `pad` explicite — **jamais sur fond sombre** | **none** | gpt-image-2 |
| **Illustration — semi-concret** | **cover d'article de blog** | `illu2` + `illu4` (ou `illu6`) | 1 objet concret + statue en signature | `1536x1024` | **16:9** | **crop** | **none** | gpt-image-2 |

## Formats et finitions

Les tailles natives de `gpt-image-2` sont **`1024x1024`** (1:1), **`1024x1536`** (2:3 portrait) et
**`1536x1024`** (3:2 paysage). Tout autre ratio s'obtient en post-traitement, par l'une des deux
finitions :

- **`crop`** — recadrage centré. C'est le **défaut** : il livre le ratio demandé sans rien insérer
  dans l'image. `1536x1024` (3:2) → `1536x864` (16:9), soit 160px retirés verticalement.
- **`pad`** — étendre le canvas en `#F4F4F2` jusqu'au ratio cible. Aucune perte de composition, mais
  des bandes claires apparaissent. À **demander explicitement**, quand aucun bord ne doit tomber.

Le runtime accepte une taille non native : il rend au natif le plus proche puis convertit. C'est du
rattrapage, pas une pratique — un preset qui vise juste pose une taille native.

> **Décision (2026-07-22).** La documentation d'origine se contredisait — la table de routage disait
> « 16:9 center-crop » et la section formats disait « padding, jamais de crop ». Les covers livrées
> le 19/07 font `1536x864`, donc **crop**. Tranché ici : `crop` est le défaut, `pad` se demande.
> La colonne « Finition » de la table ci-dessus dit lequel s'applique par typologie.

**Fond sombre** : ne jamais padder en clair une illustration atmosphérique — le `#F4F4F2` jure sur un
fond encre. Générer au natif le plus proche du ratio voulu et ne pas finir, ou padder dans le ton du
visuel.

## Les deux niveaux de la direction illustration

La typologie `illustration` a deux niveaux, à router selon le **placement**, pas selon le goût :

| Niveau | Principe | Placement | Anchors |
|---|---|---|---|
| **Abstrait** | métaphore pure : statue + esprit/fils, aucun objet du quotidien | réseaux sociaux, tête de chapitre, illustrer une phrase | `illu1-mind-threads` + `illu9-statue-tree` (clair) · `illu7-cosmos-astronaut` (sombre) |
| **Semi-concret** | UN objet concret reconnaissable qui **nomme le sujet** + statue en **signature** discrète | **cover d'article de blog / Substack** — l'image doit annoncer le thème | `illu2-statue-laptop` + `illu4-plugged-in` (ou `illu6-phone-collage`) |

- **Règle semi-concret** : toujours une ancre concrète (laptop + UI, navigateur/maquette de site,
  chaîne de workflow, pile de documents, engrenages…) ; la statue **interagit** avec l'objet — elle le
  pilote, elle n'est plus le sujet unique.
- **Garde-fou faux-texte** : écrans, UI, papiers et maquettes ne portent aucun faux texte ni fausse
  ligne de code lisibles. Blocs et glyphes non lisibles seulement.
- Le curseur est ajustable vers le **concret** (objet ou scène produit dominant, statue optionnelle)
  quand le sujet l'exige — même palette, mêmes garde-fous.

## Les trois interdits

**Le logo n'est jamais généré.** Le modèle laisse une marge basse vide et le vrai fichier
(`../logo/jonlabs-wordmark.png` ou `-icon.png`) est composé par-dessus. En direction illustration, il
n'y a **pas de logo du tout** — décision du 2026-06-30, la signature se fait ailleurs.

**La data chiffrée ne passe jamais par le génératif.** Le modèle écrit les bons chiffres mais ment sur
les proportions : une barre à 41 % ressort à moitié pleine. Tout visuel portant un chiffre réel ou une
proportion se fait en **rendu par code** (template HTML dot-grid). `ref3` sert de modèle de
composition à ce template, pas de prompt.

**Une référence manquante n'est pas une instruction implicite.** Si le fichier d'ancrage n'existe pas,
on échoue explicitement — on ne génère pas « à peu près ».

## Le pipeline, en une ligne

Choisir la typologie → prompt = bloc verrouillé + squelette rempli → générer avec la ou les refs
jointes (qualité `medium` pour itérer, `high` pour le rendu final) → finir au format (`pad` ou
`crop`) → composer le logo si la typologie en porte un → contrôler à l'œil (cf. `direction.md`).
