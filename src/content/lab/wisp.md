---
title: "Wisp"
description: "Une webapp d'écriture quotidienne où le texte s'efface si tu t'arrêtes. 300 mots par jour, zéro excuses."
date: 2026-01-20
status: "live"
category: "app"
tags: ["sveltekit", "dexie", "écriture", "habitude", "side-project", "ia"]
url: "https://wisp.jonlabs.ch"
thumbnail: "/images/lab/wisp/thumbnail.webp"
featured: false
---

> Écris ou tout disparaît. 300 mots. Chaque jour. Sans filtre.

![Wisp - Écran d'écriture](/images/lab/wisp/gallery/writing-screen.webp)

---

## Le contexte

Un soir, je faisais tourner Gemini pour générer des idées de side-projects. Le genre de session où tu laisses l'IA délirer, tu tries, tu jettes 95% des trucs.

Et dans le tas, une idée débile : "Une app où le texte s'efface si tu arrêtes d'écrire."

Ma première réaction : lol, non. Puis j'y ai repensé. Puis j'ai ouvert un doc. Puis j'ai commencé à écrire un PRD.

Le truc, c'est que j'écrivais beaucoup avant. Journal, pensées en vrac, idées. Et j'ai arrêté. Pas par choix conscient — par friction. La page blanche, l'over-thinking, la relecture obsessionnelle avant même d'avoir fini une phrase.

À l'ère de l'IA, on délègue de plus en plus l'écriture. Résumés, mails, posts LinkedIn — tout peut être généré. Mais écrire soi-même, avec ses propres mots, c'est un muscle. Et comme tout muscle, il s'atrophie si on ne l'utilise pas.

L'idée "débile" de Gemini tapait pile dans ce problème.

---

## Le problème

**Écrire régulièrement, c'est dur. Pas techniquement — psychologiquement.**

- Le syndrome de la page blanche te paralyse avant même de commencer
- Tu te relis, tu corriges, tu doutes — le flow ne s'installe jamais
- Les apps de journaling classiques n'ont aucun mécanisme pour forcer le mouvement
- Rien ne t'empêche de t'arrêter, de scroller Twitter, de procrastiner

Il existe une app connue avec le même concept : [The Most Dangerous Writing App](https://www.squibler.io/dangerous-writing-prompt-app). Même mécanique de base — tu t'arrêtes, tout disparaît.

Mais la philosophie est à l'opposé de ce que je voulais. Le nom, le design, l'ambiance : tout crie "STRESS". C'est punitif. Agressif. "Dangerous". Pas exactement l'énergie zen que tu veux pour une habitude quotidienne.

Ce que je cherchais :

- **Un outil zen**, pas un fouet
- **Une habitude quotidienne**, pas un défi ponctuel
- **Un suivi de progression**, comme les apps de streak (Duolingo, GitHub contributions)
- **Local et privé** — mes pensées restent sur mon device

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

L'idée : voir la grille se remplir, jour après jour. Le même effet addictif que le calendrier de contributions GitHub ou les streaks Duolingo.

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

## Comment j'ai buildé ça

### Phase 1 — L'idée et le PRD (1 soirée)

L'idée venait de Gemini, mais le PRD c'est du travail humain. J'ai structuré tout le projet : user stories, data model, mécaniques de jauge, UI guidelines.

C'est la première fois que je rédigeais un PRD aussi complet pour un side-project. Et ça a tout changé — au moment de coder, chaque décision était déjà prise. Zéro hésitation, juste de l'exécution.

### Phase 2 — Le test IA (quelques heures)

J'ai testé deux approches en parallèle :

- **Gemini 2.5 Pro** : plus rapide à sortir une première version fonctionnelle
- **Claude Opus 4.5** : code plus propre, meilleure architecture, moins de bugs

Verdict : Gemini pour le sprint initial, Claude pour le polish et la structure long-terme. Les deux ont leurs forces — le vrai skill c'est de savoir quand utiliser lequel.

### Phase 3 — MVP fonctionnel

Développement avec Claude Code. La jauge, l'écriture, la sauvegarde locale, le calendrier. Le PRD a fait le taf : je donnais les specs, Claude exécutait. Peu de back-and-forth.

Architecture local-first avec Dexie.js (wrapper IndexedDB). Pas de serveur, pas d'auth, pas de base de données distante. Tout vit dans le navigateur. Ça a rendu le développement **beaucoup** plus rapide — zéro config backend, zéro problème de déploiement de BDD.

### Phase 4 — Mascotte & Polish

La mascotte Wisp a été générée avec nano banana (un outil de génération d'images IA). Petit fantôme translucide, style éthéré. Ensuite, polish général : animations fluides, transitions "fumée", thème sombre, onboarding.

L'ambiance "Zen Cosy" — l'opposé exact du concurrent agressif. Tons neutres chauds, beaucoup d'espace blanc, typographie serif pour la zone d'écriture, animations lentes comme de la fumée.

<div class="img-grid-2">

![Session active](/images/lab/wisp/gallery/session-active.webp)
![Jauge d'encre](/images/lab/wisp/gallery/ink-gauge.webp)

</div>

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

## Ce que j'ai appris

### 1. Un bon PRD change tout

Pour Isla Plomo, j'avais codé "au feeling". Ça marche, mais tu perds du temps en décisions mid-session. Pour Wisp, j'ai tout structuré avant. Résultat : le développement était un long copier-coller de specs vers du code. Zéro hésitation.

Leçon : même pour un side-project, 2h de PRD en économisent 8 de dev.

### 2. Comparer les IA, c'est un vrai skill

Gemini et Claude ont des personnalités de code très différentes. Gemini est plus "vite fait, ça tourne". Claude est plus "architecturé proprement dès le départ". Savoir quand utiliser l'un ou l'autre — c'est devenu un skill à part entière.

### 3. Local-first, c'est sous-estimé

Zéro auth, zéro backend, zéro config serveur. Dexie.js + IndexedDB, c'est tout. L'app tourne instantanément, les données sont privées par défaut, et je n'ai jamais eu un seul problème de déploiement lié à la base de données.

Pour un side-project solo, c'est le setup rêvé.

### 4. L'esthétique n'est pas décorative

Le concurrent direct (The Most Dangerous Writing App) a la même mécanique. La différence ? L'énergie. Un est stressant, l'autre est zen. Le design n'est pas un bonus cosmétique — il définit la relation que l'utilisateur a avec l'outil.

Wisp veut que tu écrives parce que c'est agréable. Pas parce que t'as peur de perdre ton texte.

---

## En action

<div class="img-grid-2">

![Mood rating post-session](/images/lab/wisp/gallery/mood-rating.webp)
![Onboarding avec Wisp](/images/lab/wisp/gallery/onboarding.webp)

</div>

---

## Essayer

L'app est live et gratuite. Ouvre, écris, ferme. Tes mots restent sur ton navigateur.

[Essayer Wisp →](https://wisp.jonlabs.ch)

Une idée ? Un bug ? [Contacte-moi →](/contact)
