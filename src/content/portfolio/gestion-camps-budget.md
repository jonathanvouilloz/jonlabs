---
title: "Application budget de camp de vacances sur mobile"
description: "Camps de vacances en Suisse romande : dépenses et justificatifs saisis sur place, rapport comptable prêt en fin de camp."
# Pas de date de livraison formelle trouvée : dernier commit le 13.10.2026 (git log cpvBudget) ; app en production (scratchpad/cas-ia-faits.md:180)
date: 2026-10-13
draft: false
featured: true

entryType: "case-study"
status: "live"

client:
  name: "Un organisateur de camps de vacances"
  sector: "Association · Camps de vacances en Suisse romande"

project:
  duration: "≈ 7 mois de développement"
  period: "Mars – octobre 2026"
  platform: "SvelteKit · Vercel"
  category: "application"

# Placeholder volontaire : les captures du guide (données de démo) affichent le nom du client, non publiables
heroImage:
  url: "/images/portfolio/gestion-camps-budget/hero.webp"
  width: 1536
  height: 1024
  alt: "Application de budget pour camps de vacances : dépenses, justificatifs et rapport comptable"

tags:
  - "Application web mobile"
  - "Comptabilité"
  - "Intégration API"
  - "SvelteKit"

results:
  # Estimation de Jonathan, non mesurée (interview-marque-pivot-ia.md:748-753 ; confirmée le 17.11.2026)
  - label: "gagnées par camp, selon notre estimation"
    value: "2 h"
    detail: "Sur la gestion du camp et la comptabilité, côté équipe et côté administration. Estimation, pas encore mesurée."
    icon: "ri-time-line"

context:
  clientDescription: "Une association qui organise chaque année des dizaines de camps de vacances pour enfants et adolescents en Suisse romande. Chaque camp a son budget, son équipe de moniteurs, son planning et ses tickets de caisse."
  challenge: "Les dépenses étaient ressaisies à la main dans le système de l'association après chaque camp. Les tickets papier se perdaient ou devenaient illisibles. Le planning et les tâches vivaient sur papier ou dans WhatsApp. Et à la fin, la comptabilité devait vérifier chaque ticket, camp après camp."
  whyThisProject: "J'ai été moniteur dans ces camps. J'ai d'abord construit un outil de mon côté, puis je l'ai proposé à l'association. Il fallait passer d'un prototype isolé à une application reliée à leur base centrale."

approach:
  - phase: 1
    title: "Partir du terrain"
    description: "Un responsable de camp n'a pas le temps de faire de la comptabilité entre deux activités. L'application devait se tenir d'une main, sur un téléphone, en quelques secondes par dépense."
    tasks:
      - "Rôles distincts : responsable, moniteur, staff, lecture seule"
      - "Saisie d'une dépense en trois étapes"
      - "Photo du justificatif prise dans l'application"
  - phase: 2
    title: "Relier l'application à la base centrale"
    description: "Les données restent chez l'association. L'application lit et écrit dans leur système central existant par son API, au lieu de créer une base de plus à tenir à jour."
    tasks:
      - "Synchronisation avec la base centrale par API"
      - "Budget dans la devise du camp, francs ou euros"
      - "Liste des séjours ramenée de 3,1 s à 0,3 s"
  - phase: 3
    title: "Donner une vue d'ensemble à l'administration"
    description: "Un tableau de bord réunit tous les camps : budget consommé, dépenses, statut. Pour chaque camp, un rapport comptable se génère en PDF, justificatifs compris, et les données s'exportent dans Excel."
    tasks:
      - "Tableau de bord multi-camps"
      - "Rapport comptable PDF avec justificatifs"
      - "Export Excel"
  - phase: 4
    title: "Le reste de la vie du camp"
    description: "Le budget n'est qu'une partie du travail. Le planning de la semaine et la répartition de l'équipe passent aussi par l'application."
    tasks:
      - "Planning du camp"
      - "Gestion de l'équipe"
      - "Budget prévisionnel"

successFactors:
  - title: "Le justificatif au moment de la dépense"
    description: "La photo du ticket est prise quand on paie, pas retrouvée au fond d'un sac une semaine plus tard."
    icon: "ri-camera-line"
  - title: "Pas de ressaisie"
    description: "Ce qui est saisi au camp arrive dans le système de l'association. Personne ne recopie."
    icon: "ri-refresh-line"
  - title: "Construit par quelqu'un qui a fait les camps"
    description: "Les choix d'interface viennent du terrain : une main libre, peu de réseau, peu de temps."
    icon: "ri-user-heart-line"

learnings:
  insights:
    - "Tout ne demande pas de l'IA. Ici, le temps se gagne en supprimant la ressaisie et la chasse aux tickets, pas en ajoutant un agent."
    - "Se brancher sur le système existant du client coûte plus cher au départ, mais évite une base de données de plus à réconcilier."
  limitations:
    - "L'application est en production, mais pas encore utilisée sur tous les camps."
    - "Le gain de 2 h par camp est une estimation. La mesure réelle viendra de la comptabilité, sur les camps de la saison."
---

> Un ticket de caisse photographié au moment de payer, une dépense saisie en trois gestes, un rapport comptable prêt à la fin du camp. Pas d'IA ici : juste moins de ressaisie et moins de tickets perdus.

## Ce qui a été construit

| Bloc | Ce que ça fait |
|---|---|
| **Dépenses** | Saisie sur téléphone, photo du justificatif, francs ou euros |
| **Budget** | Budget initial, dépensé, restant, visible par l'équipe du camp |
| **Planning et équipe** | Le programme de la semaine et la répartition des moniteurs |
| **Administration** | Tableau de bord de tous les camps, export Excel |
| **Rapport comptable** | PDF généré par camp, justificatifs compris |
| **Synchronisation** | Les données restent dans le système central de l'association |

## Le partage du travail

L'équipe du camp saisit au moment où elle dépense. L'application range, calcule et prépare le rapport. La comptabilité garde la vérification et la décision, mais elle part d'un dossier complet au lieu d'une enveloppe de tickets.

---

Une tâche qui se ressaisit à la main chaque semaine ou chaque saison ? [Parlons-en →](/contact)
