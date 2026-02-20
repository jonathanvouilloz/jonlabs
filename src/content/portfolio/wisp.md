---
title: "Wisp"
description: "Une webapp d'écriture quotidienne où le texte s'efface si tu t'arrêtes. 300 mots par jour, zéro excuses. Local-first, 100% privé, style zen."
date: 2026-01-20
draft: false
featured: false

entryType: "side-project"
status: "live"

project:
  duration: "~2-3 jours"
  period: "Janvier 2026"
  platform: "SvelteKit + Dexie.js"
  category: "side-project"

heroImage:
  url: "/images/portfolio/wisp/hero.webp"
  alt: "Wisp - App d'écriture quotidienne"

tags:
  - "SvelteKit"
  - "Dexie"
  - "Écriture"
  - "Side-project"
  - "IA"

liveUrl: "https://wisp.jonlabs.ch"

context:
  challenge: "Écrire régulièrement, c'est dur — psychologiquement, pas techniquement. Le syndrome de la page blanche paralyse avant de commencer. Tu te relis, tu corriges, tu doutes — le flow ne s'installe jamais. Les apps de journaling classiques n'ont aucun mécanisme pour forcer le mouvement. Le seul concurrent (The Most Dangerous Writing App) a la bonne mécanique mais la mauvaise énergie : stressant, punitif, agressif."
  whyThisProject: "Un soir, en faisant tourner Gemini pour générer des idées de side-projects, une idée 'débile' est sortie : une app où le texte s'efface si tu arrêtes d'écrire. J'écrivais beaucoup avant — journal, pensées en vrac, idées — et j'ai arrêté par friction. À l'ère de l'IA, on délègue de plus en plus l'écriture. Mais écrire soi-même, c'est un muscle qui s'atrophie si on ne l'utilise pas. L'idée de Gemini tapait pile dans ce problème."

approach:
  - phase: 1
    title: "L'idée et le PRD"
    description: "L'idée venait de Gemini, mais le PRD c'est du travail humain. Structuration complète du projet en une soirée : user stories, data model, mécaniques de jauge, UI guidelines. Première fois qu'un PRD aussi complet était rédigé pour un side-project — et ça a tout changé."
    tasks:
      - "Rédiger les user stories et le data model"
      - "Définir les mécaniques de jauge (start 50%, +3%/mot, -8%/sec)"
      - "Établir les UI guidelines et le style 'Zen Cosy'"
  - phase: 2
    title: "Test IA"
    description: "Test de deux approches en parallèle : Gemini 2.5 Pro (plus rapide pour une première version) vs Claude Opus 4.5 (code plus propre, meilleure architecture). Verdict : Gemini pour le sprint initial, Claude pour le polish long-terme."
    tasks:
      - "Prototyper avec Gemini 2.5 Pro"
      - "Comparer l'architecture avec Claude Opus 4.5"
      - "Choisir la meilleure approche par contexte"
  - phase: 3
    title: "MVP fonctionnel"
    description: "Développement avec Claude Code. Architecture local-first avec Dexie.js (wrapper IndexedDB) — zéro serveur, zéro auth, zéro BDD distante. Le PRD a fait le taf : les specs entraient, le code sortait. Peu de back-and-forth."
    tasks:
      - "Implémenter la jauge d'encre et la mécanique d'écriture"
      - "Créer le calendrier annuel avec taches d'encre"
      - "Setup Dexie.js pour le stockage local-first"
      - "Ajouter mood rating, historique et export"
  - phase: 4
    title: "Mascotte & Polish"
    description: "Mascotte Wisp générée avec nano banana — petit fantôme translucide, style éthéré. Polish général : animations fluides, transitions 'fumée', thème sombre, onboarding. L'ambiance 'Zen Cosy' — tons neutres chauds, espace blanc, typographie serif, animations lentes."
    tasks:
      - "Générer la mascotte Wisp avec nano banana"
      - "Créer les animations fluides et transitions fumée"
      - "Implémenter thème clair/sombre + bilingue FR/EN"
      - "Onboarding guidé par Wisp en 3 écrans"

successFactors:
  - title: "Mécanisme de jauge"
    description: "Une pression douce qui force le flow. À 50%, tu as ~6 secondes de répit. Assez pour reprendre ton souffle, pas assez pour décrocher."
    icon: "ri-speed-line"
  - title: "Mascotte émotionnelle"
    description: "Wisp crée un lien, pas du stress. Son opacité est liée à ta jauge — plus tu ralentis, plus il s'efface. C'est ton compagnon, pas ton surveillant."
    icon: "ri-ghost-line"
  - title: "Local-first"
    description: "Zéro config, privacy totale. Dexie.js + IndexedDB, tout vit dans le navigateur. Pas de compte, pas de serveur, pas de tracking."
    icon: "ri-shield-check-line"
  - title: "PRD rigoureux"
    description: "Zéro hésitation au dev. 2h de PRD ont économisé 8h de développement. Chaque décision était déjà prise avant d'écrire la première ligne de code."
    icon: "ri-file-list-3-line"

learnings:
  limitations:
    - "Pas encore de metrics d'usage réelles — difficile de mesurer l'impact sur l'habitude d'écriture"
    - "Pas de sync cloud — les données restent sur un seul navigateur, pas de backup automatique"
  insights:
    - "Un bon PRD change tout. Pour Isla Plomo, j'avais codé 'au feeling'. Pour Wisp, tout était structuré avant. Résultat : le dev était un long copier-coller de specs vers du code."
    - "Comparer les IA, c'est un vrai skill. Gemini est plus 'vite fait, ça tourne'. Claude est plus 'architecturé proprement'. Savoir quand utiliser l'un ou l'autre est devenu un skill à part entière."
    - "Local-first, c'est sous-estimé. Zéro auth, zéro backend, zéro config serveur. L'app tourne instantanément et les données sont privées par défaut."
    - "L'esthétique n'est pas décorative. Le concurrent a la même mécanique, mais l'énergie est à l'opposé. Le design définit la relation que l'utilisateur a avec l'outil."
---

> Écris ou tout disparaît. 300 mots. Chaque jour. Sans filtre.

![Wisp - Écran d'écriture](/images/lab/wisp/gallery/writing-screen.webp)

---

## La solution

**Wisp** — une webapp d'écriture quotidienne, style "Zen Cosy". Écris 300 mots sans t'arrêter, et regarde ta progression se construire jour après jour.

### La jauge d'encre

Le coeur du truc. Une jauge qui démarre à 50% quand tu tapes ta première lettre.

- Chaque mot écrit : **+3%**
- Chaque seconde de pause : **-8%**
- Si la jauge atteint 0% : tout s'évapore doucement. Session perdue.
- Si tu atteins 300 mots : session validée, la pression disparaît.

C'est pas le mode hardcore. À 50%, tu as environ 6 secondes de répit. À 100%, une douzaine. Assez pour reprendre ton souffle, pas assez pour décrocher.

### Wisp, la mascotte

Un petit fantôme d'encre qui flotte à côté de ta zone d'écriture. Il pulse doucement. Et surtout — son opacité est liée à ta jauge. Plus tu ralentis, plus Wisp s'efface. C'est ton compagnon, pas ton surveillant.

![La mascotte Wisp](/images/lab/wisp/gallery/wisp-mascot.webp)

### Le calendrier d'encre

Inspiré des apps de suivi d'habitudes — un calendrier annuel où chaque jour complété laisse une tache d'encre. Colorée selon ton mood post-session (de gris ardoise pour "j'ai galéré" à doré pour "état de flow").

![Calendrier annuel](/images/lab/wisp/gallery/calendar-view.webp)

### Features MVP

- **Session d'écriture** avec jauge et mascotte
- **Calendrier annuel** avec taches d'encre colorées
- **Mood rating** post-session (5 niveaux)
- **Historique** consultable jour par jour
- **Export** (JSON, Markdown, TXT, PDF)
- **Onboarding** guidé par Wisp en 3 écrans
- **Thème clair/sombre** + bilingue FR/EN
- **100% local** — zéro compte, zéro serveur, zéro tracking

---

## Stack & Outils

| Outil | Usage |
|-------|-------|
| **SvelteKit** | Framework frontend — interactivité native, léger |
| **Dexie.js** | Base de données locale (IndexedDB) — 100% privacy |
| **Claude Code** | Développement principal — structure, logique, debug |
| **Gemini 2.5 Pro** | Sprint initial, itération rapide |
| **nano banana** | Génération de la mascotte Wisp |
| **Vercel** | Hosting — gratuit, preview branches |

**Temps total :** ~2-3 jours (PRD inclus)

**Temps estimé sans IA :** Une bonne semaine, minimum.

---

## En action

<div class="img-grid-2">

![Session active](/images/lab/wisp/gallery/session-active.webp)
![Jauge d'encre](/images/lab/wisp/gallery/ink-gauge.webp)

</div>

<div class="img-grid-2">

![Mood rating post-session](/images/lab/wisp/gallery/mood-rating.webp)
![Onboarding avec Wisp](/images/lab/wisp/gallery/onboarding.webp)

</div>

---

## Essayer

L'app est live et gratuite. Ouvre, écris, ferme. Tes mots restent sur ton navigateur.

[Essayer Wisp →](https://wisp.jonlabs.ch)

Une idée ? Un bug ? [Contacte-moi →](/contact)
