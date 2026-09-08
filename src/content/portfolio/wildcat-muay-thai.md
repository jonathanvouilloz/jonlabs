---
title: "Wildcat Muay Thai"
description: "Un camp de Muay Thai à Chiang Mai qui vivait sur WhatsApp. Un site bilingue Astro + Sanity, un silo visa DTV, 26 articles."
date: 2026-09-08
draft: false
featured: false

entryType: "case-study"
status: "en-cours"

client:
  name: "Wildcat Muay Thai"
  sector: "Sport / Camp d'entraînement"
  website: "https://wildcatmuaythai.com"

project:
  duration: "≈ 3 mois (V1) · itératif depuis"
  period: "Juin – Août 2026"
  platform: "Astro 5 + Sanity CMS"
  category: "seo"

heroImage:
  url: "/images/portfolio/wildcat/hero.webp"
  alt: "Page d'accueil de Wildcat Muay Thai — Come for the fight, stay for the family"

tags:
  - "Astro"
  - "Sanity"
  - "SEO"
  - "Multilingue"
  - "Thaïlande"
  - "Site vitrine"

liveUrl: "https://wildcatmuaythai.com"

results:
  - label: "Site en ligne"
    value: "≈ 50 pages"
    detail: "18 gabarits déclinés en anglais et en français."
    icon: "ri-pages-line"
  - label: "Articles publiés"
    value: "26"
    detail: "Trois clusters thématiques, dont sept articles sur le seul coût du visa."
    icon: "ri-article-line"
  - label: "Silo visa DTV"
    value: "6 pages"
    detail: "Une page pilier, cinq satellites, 30 questions traitées."
    icon: "ri-passport-line"
  - label: "Demandes de séjour"
    value: "Formulaire"
    detail: "Elles ne partent plus d'une conversation WhatsApp vide."
    icon: "ri-arrow-right-up-line"

context:
  clientDescription: "Wildcat est un camp de Muay Thai familial à Chiang Mai, en Thaïlande. On s'y entraîne en plein air dans un jardin, les cours sont ouverts à tous les niveaux, et la moitié des gens qui poussent le portail pour une semaine finissent par rester la saison."
  challenge: "Le camp avait déjà des élèves étrangers, une réputation locale et zéro présence web. Tout se traitait sur WhatsApp : les questions sur les horaires, les demandes de logement, et surtout les dossiers de visa longue durée. Ça fonctionnait tant que le volume restait faible, mais rien n'était trouvable sur Google — et un étranger qui prépare un an en Thaïlande veut lire avant d'écrire."
  whyThisProject: "Le sujet visa change tout. Un camp de Muay Thai est un commerce local classique ; un camp qui délivre les documents d'un visa de cinq ans s'adresse à des gens qui cherchent depuis l'autre bout du monde, dans leur langue, avec de la méfiance. C'est un cas où le contenu ne sert pas à décorer le site : il est le produit."

approach:
  - phase: 1
    title: "Comprendre ce qui se joue vraiment sur le visa"
    description: "Le Destination Thailand Visa permet de vivre cinq ans en Thaïlande en s'inscrivant à une activité reconnue — l'entraînement au Muay Thai en fait partie. Avant d'écrire une ligne, il a fallu établir ce qui était vrai, ce que le camp fournit exactement, et ce qui relève de la rumeur de forum. Les règles ont d'ailleurs changé en cours de route."
    tasks:
      - "Séparer ce que le camp fournit de ce que le candidat doit faire lui-même"
      - "Vérifier chaque affirmation sur des sources officielles, et dater la vérification"
      - "Tenir un fichier de faits contrôlés, relu à chaque nouvel article"
      - "Écarter les sujets sur lesquels on ne peut pas être formel"
  - phase: 2
    title: "Construire le site en deux langues dès le départ"
    description: "Anglais et français, avec des URLs distinctes par langue, les balises qui disent à Google quelle version montrer à qui, et un plan de site qui les couvre toutes les deux. Le bilinguisme rajouté après coup coûte toujours plus cher que le bilinguisme prévu au départ."
    tasks:
      - "Poser l'architecture multilingue et les URLs traduites"
      - "Brancher un CMS pour que le camp gère ses coachs, ses tarifs et ses témoignages"
      - "Écrire les gabarits : accueil, cours, séjours, coachs, combattants, guide de la ville"
      - "Publier sur un hébergement statique, avec une reconstruction quotidienne pour les articles programmés"
  - phase: 3
    title: "Traiter le visa comme un silo, pas comme une page"
    description: "Une page pilier qui explique le DTV, cinq pages autour d'elle — éligibilité, procédure, questions fréquentes, séjour longue durée, lien avec le Muay Thai — et un ensemble d'articles qui répondent aux questions d'argent que personne ne pose à voix haute. Chaque page a son intention, une seule, et renvoie aux autres."
    tasks:
      - "Cartographier le sujet avant d'écrire, page par page"
      - "Écrire la page pilier et ses cinq satellites"
      - "Produire un ensemble de sept articles sur le coût réel du visa"
      - "Relier les pages entre elles dans les deux sens"
  - phase: 4
    title: "Vérifier que les pages ne se marchent pas dessus"
    description: "Sur un site à silo, le risque n'est pas le manque de contenu, c'est que deux pages visent la même chose. Un audit a comparé ce que Google déclenchait réellement page par page. Un seul vrai conflit est ressorti : l'article sur le coût de l'entraînement et la page séjour longue durée se battaient sur la même requête. La page a été recadrée sur le budget d'un séjour sous visa, l'article a gardé le coût générique, et les deux se citent."
    tasks:
      - "Comparer les requêtes qui déclenchent plusieurs pages du site"
      - "Distinguer les vrais conflits des cas légitimes"
      - "Recadrer la page en conflit plutôt que la supprimer"
      - "Reposer les liens croisés et vérifier le résultat au build"

successFactors:
  - title: "Le contenu vérifié avant d'être écrit"
    description: "Sur un sujet visa, une erreur ne coûte pas un mauvais classement : elle coûte un dossier refusé à quelqu'un. Chaque affirmation a sa source et sa date de contrôle."
    icon: "ri-shield-check-line"
  - title: "Deux langues prévues dès la première ligne"
    description: "URLs traduites, balises de langue et plan de site multilingue posés avant le premier contenu. Rien à rattraper ensuite."
    icon: "ri-translate-2"
  - title: "Un silo, pas une pile d'articles"
    description: "Une page pilier, des satellites qui ne se recouvrent pas, et un maillage dans les deux sens. Le plan a été écrit avant la rédaction."
    icon: "ri-node-tree"
  - title: "Le camp reprend la main sur son contenu"
    description: "Coachs, tarifs, horaires et témoignages passent par un CMS. Le site n'a pas besoin de moi pour vivre au quotidien."
    icon: "ri-edit-box-line"

learnings:
  insights:
    - "Un site qui remplace WhatsApp ne se juge pas à son trafic le premier mois. Il se juge au fait que les questions arrivent déjà triées."
    - "Sur un sujet réglementaire, la moitié du travail est de la vérification. Une règle citée partout sur les forums s'est révélée obsolète en pleine rédaction — il a fallu réécrire l'article autour."
    - "Le bilinguisme se paie à la construction ou se paie au double ensuite. Ici il a été payé au début."
    - "Deux pages qui traitent le même sujet sous deux angles proches finissent par s'annuler. Il vaut mieux le mesurer que le supposer."
  limitations:
    - "Le domaine est neuf. À ce stade le site est visible surtout sur son propre nom : le classement sur les requêtes concurrentielles se joue sur les mois qui viennent, pas sur les semaines."
    - "La version française du blog est très en retard sur l'anglaise — trois articles contre vingt-trois. C'est un choix de priorité, pas un oubli."
    - "Les visuels d'article sortent aujourd'hui d'un gabarit commun. Des images propres à chaque sujet restent à produire."
    - "Le forfait séjour est publié avec une présentation volontairement courte : plusieurs détails pratiques attendent encore d'être confirmés par le camp."

resultImages:
  - url: "/images/portfolio/wildcat/classes.webp"
    alt: "Section horaires des cours et présentation du forfait Stay & Train sur le site Wildcat"
    caption: "Les horaires du jour et l'offre de séjour, côte à côte sur l'accueil."
  - url: "/images/portfolio/wildcat/dtv.webp"
    alt: "Section Three steps to your long stay — les trois étapes de la demande de visa DTV"
    caption: "La page pilier du visa : trois étapes, puis le guide complet."
  - url: "/images/portfolio/wildcat/stay-train.webp"
    alt: "Page Stay & Train — forfait mensuel unique à 28 000 THB avec le détail de ce qui est inclus"
    caption: "Un prix unique publié en clair, avec ce qui est dedans et ce qui ne l'est pas."
  - url: "/images/portfolio/wildcat/blog.webp"
    alt: "Index du blog Wildcat — recherche, filtres par thème et grille de 23 articles"
    caption: "Le blog anglais : recherche, filtres par thème, 23 articles au moment de la capture."
  - url: "/images/portfolio/wildcat/multilingue.webp"
    alt: "Version française de la page d'accueil de Wildcat Muay Thai"
    caption: "La même page en français : URLs traduites, pas une simple traduction posée par-dessus."
---

> Un camp connu de ses élèves, invisible pour tous les autres. Le travail n'a pas été de le rendre joli : il a été de le rendre trouvable, dans deux langues, sur un sujet où se tromper coûte cher.

---

## Le point de départ

Wildcat tourne à Chiang Mai depuis des années. Des coachs thaïlandais, un ring sous un toit ouvert, un jardin, et des gens qui viennent pour deux semaines et repartent six mois plus tard. Le camp ne manquait ni d'élèves ni de réputation locale.

Ce qui manquait, c'était tout le reste : aucun site, aucune page trouvable, aucune information publique sur les horaires, les tarifs ou les séjours. Tout se traitait dans une conversation WhatsApp, une par personne, en repartant de zéro à chaque fois.

Ça tient tant qu'on parle à des gens déjà sur place. Ça ne tient plus dès qu'on s'adresse à quelqu'un qui prépare une année entière à l'autre bout du monde.

---

## Ce qui rend ce projet particulier

Un camp de sport, c'est un commerce local. Un camp qui délivre les documents d'un visa de cinq ans, c'est autre chose.

Le **Destination Thailand Visa** permet de vivre en Thaïlande jusqu'à cinq ans en s'inscrivant à une activité reconnue par l'État, et l'entraînement au Muay Thai en fait partie. Concrètement, le camp fournit une lettre d'inscription et une confirmation d'entraînement ; le candidat monte son dossier avec.

Le public change complètement. Ce ne sont plus des touristes qui cherchent un cours d'essai, ce sont des gens qui déplacent leur vie et qui ont besoin d'être sûrs. Ils lisent longtemps avant d'écrire, ils comparent, et ils se méfient — le domaine est plein d'intermédiaires opaques.

Sur ce terrain, le contenu n'est pas un accessoire du site. C'est le produit.

---

## Ce qui a été construit

| Bloc | Ce que ça fait |
|---|---|
| **Site bilingue** | Anglais et français, URLs distinctes par langue, balises de langue et plan de site couvrant les deux |
| **Silo visa** | Une page pilier, cinq satellites, trente questions traitées |
| **Blog** | Vingt-six articles, organisés en clusters thématiques, avec recherche et filtres |
| **Pages séjour** | Un forfait mensuel unique, publié en clair, avec ce qui est inclus et ce qui ne l'est pas |
| **CMS** | Coachs, tarifs, horaires et témoignages gérés par le camp, sans passer par moi |
| **Formulaire de séjour** | Les demandes arrivent structurées, puis basculent sur WhatsApp pour la suite |

---

## Le travail de vérification

Sur un sujet visa, publier une information fausse ne se paie pas en positions perdues. Ça se paie par un dossier refusé chez quelqu'un qui a fait confiance à la page.

Chaque affirmation du silo a donc sa source et sa date de contrôle, tenues dans un fichier à part et relues à chaque nouvel article. Ce n'est pas du zèle : une règle reprise partout sur les forums — la possibilité de passer par une école de langue thaïe — s'est révélée retirée de la liste officielle. L'article qui reposait dessus a été réécrit pendant sa production.

C'est le genre de vérification qui ne se voit pas sur la page finale, et qui fait toute la différence entre un site de camp et un site d'intermédiaire.

---

## Ce que l'audit a corrigé

Sur un site construit en silo, le risque n'est pas de manquer de contenu. C'est que deux pages finissent par viser la même chose et se neutralisent.

Un audit a comparé, requête par requête, ce que Google déclenchait réellement sur le site. Un seul vrai conflit en est sorti : l'article sur le coût de l'entraînement en Thaïlande et la page consacrée au séjour longue durée se disputaient la même recherche, avec des titres presque jumeaux.

La correction n'a pas été de supprimer une page. L'article a gardé le coût générique, la page a été recadrée sur le budget d'un séjour *sous visa DTV*, et les deux se citent mutuellement. Trois autres cas relevés par l'audit ont été écartés après examen : c'étaient des situations normales, pas des conflits.

---

## Où ça en est

Le site est en ligne, en deux langues, et le camp l'alimente. Les demandes de séjour arrivent par formulaire au lieu d'arriver en vrac.

Côté visibilité, il faut être honnête sur le calendrier : les premières impressions Search Console datent de juin 2026. Un site neuf sur un marché anglophone international ne se classe pas en trois mois, et personne de sérieux ne promet le contraire.

Ce qu'on voit à ce stade, c'est un début de mouvement plutôt qu'un résultat : la position moyenne est passée de **25 en juillet à 12 sur les deux dernières semaines d'août**, à volume d'impressions comparable. C'est le signe que Google commence à comprendre de quoi parlent les pages — pas encore celui d'un trafic qui compte. La suite est du travail ordinaire : publier, mesurer, corriger.

---

Un projet qui doit exister dans plusieurs langues et tenir sur un sujet sensible ? [Parlons-en →](/contact)
