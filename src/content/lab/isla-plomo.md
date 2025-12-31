---
title: "Isla Plomo"
description: "Un jeu de rôles cachés jouable sur un seul téléphone, inspiré d'Avalon. PWA hors ligne, style Mutafukaz/Gorillaz."
date: 2025-01-15
status: "live"
category: "app"
tags: ["pwa", "jeu", "svelte", "side-project", "ia"]
url: "https://islaplomo.jonlabs.ch"
thumbnail: "/images/lab/isla-plomo/thumbnail.webp"
featured: true
---

> Un jeu de bluff et de trahison. Un téléphone. Zéro connexion requise.

![Isla Plomo - Écran d'accueil](/images/lab/isla-plomo/gallery/homescreen.webp)

---

## Le contexte

Je suis en Thaïlande. Semi-vacances, semi-travail. Je pose mes valises dans une auberge de jeunesse à Chiang Mai — [Whoopers Hostel](https://www.whoopers.in/whoopers-hostel-chiang-mai), un spot avec une ambiance de dingue.

Le soir, le proprio organise des soirées jeux. Loup-garou, Undercover, des classiques. Moi, je voulais leur montrer [The Resistance: Avalon](https://en.wikipedia.org/wiki/The_Resistance_(game)) — un jeu de rôles cachés que je trouve bien meilleur que le loup-garou. Pas d'élimination, tout le monde joue jusqu'au bout.

Problème : personne n'a le jeu.

Pour Undercover, on avait trouvé une app qui faisait le taf. Du coup le proprio pouvait jouer avec nous au lieu de faire le maître du jeu. Je me suis dit : pourquoi pas faire pareil pour Avalon ?

J'ai cherché. Rien de bien. Le thème "Avalon" et "Resistance" est déposé. Les apps existantes sont soit moches, soit payantes, soit pas pratiques.

Alors j'ai ouvert mon ordi de pacotille.

---

## Le problème

**Avalon n'existe pas en app utilisable.**

- Le thème est sous licence → impossible de faire une copie directe
- Les apps existantes demandent plusieurs téléphones connectés → galère
- Certaines nécessitent internet → pas toujours dispo en auberge
- Le proprio devait faire le maître du jeu → il pouvait pas jouer

Ce que je voulais :

- **Un seul téléphone** qui passe de main en main
- **Zéro internet** une fois installé
- **Les mécaniques d'Avalon** avec un thème original
- **Simple à expliquer** à des gens qui connaissent pas

---

## La solution

**Isla Plomo** — une PWA (Progressive Web App) qui reprend les mécaniques d'Avalon avec un thème cartel.

### Comment ça marche

1. **Setup** — On entre les noms des joueurs
2. **Distribution des rôles** — Le téléphone passe, chacun voit son rôle en secret
3. **Phase de nuit** — Les infiltrés (flics sous couverture) se reconnaissent
4. **Missions** — Le cartel vote pour envoyer des équipes en mission
5. **Votes secrets** — Chaque membre de mission vote succès ou échec
6. **Victoire** — 3 missions réussies = le cartel gagne. 3 échecs = les flics gagnent.

![Sélection de l'équipe pour une mission](/images/lab/isla-plomo/gallery/screenCrew.webp)

### Les rôles

Deux camps s'affrontent sans le savoir :

<div class="img-grid-2">

![Rôle Cartel - Les loyaux](/images/lab/isla-plomo/gallery/roleCartel.webp)
![Rôle Undercover - Les infiltrés](/images/lab/isla-plomo/gallery/roleUndercover.webp)

</div>

### Les choix clés

- **Un seul téléphone** : pas de serveur, pas de sync, pas de galère réseau
- **PWA** : installable comme une app, fonctionne hors ligne
- **Thème cartel** : le cartel = les gentils, les flics = les infiltrés (inversé volontairement)
- **Style Mutafukaz/Gorillaz** : visuel BD urbain, pas le énième thème médiéval

### Features

- Bilingue français/anglais
- Rôles spéciaux optionnels (La Taupe, L'Informateur)
- Narration vocale pour la phase de nuit (Eleven Labs)
- Aide de jeu intégrée
- 100% hors ligne après installation

---

## Comment j'ai buildé ça

### Phase 1 — Brainstorm (2h)

J'ai commencé par récupérer les règles officielles d'Avalon. Toutes les variantes, les rôles spéciaux, les edge cases.

Ensuite, brainstorm avec Claude pour identifier les points techniques :
- Comment gérer le vote secret avec un seul device ?
- Comment faire la phase de nuit sans maître du jeu ?
- Quels rôles inclure pour quelle taille de groupe ?

Résultat : quasiment rien de bloquant. Le plus "complexe" c'est le passage de téléphone pour les votes — mais ça reproduit exactement ce qu'on fait avec les cartes physiques.

### Phase 2 — MVP (6h)

Développement full speed avec Claude Code.

J'ai choisi Svelte parce que j'aime bien ce framework (+ fonctionne bien avec PWA). CSS full custom plutôt que Tailwind — sur un petit projet comme ça, autant avoir la flexibilité totale.

À la fin de cette session : app fonctionnelle, thème "mafia" basique, jouable.

### Phase 3 — Rethème + Polish (1-2 jours)

Le thème mafia me plaisait pas. Trop générique.

Je suis reparti sur un univers cartel latino, style visuel inspiré de Mutafukaz et Gorillaz. J'ai tout regénéré :
- Assets visuels avec Gemini + nano banana
- Illustrations des rôles
- Écrans, backgrounds, UI complète

J'ai aussi ajouté la narration vocale avec Eleven Labs pour la phase de nuit. Premier test de cet outil — l'occasion parfaite.

### Phase 4 — Test terrain

Soirée jeux à l'auberge. Premier vrai test avec des joueurs.

**Ce qui a marché :**
- L'app tourne nickel
- Le passage de téléphone est fluide
- Les gens ont kiffé le style visuel

**Ce qui a merdé :**
- Le thème "inversé" (cartel = gentils) a semé la confusion
- J'ai dû expliquer plusieurs fois qui était qui

Leçon : ce qui te semble clever peut juste être confus pour les autres. La prochaine itération clarifiera ça.

![Mission réussie](/images/lab/isla-plomo/gallery/successMission.webp)

---

## Stack & Outils

| Outil | Usage |
|-------|-------|
| **Svelte** | Framework frontend |
| **Claude Code** | 99% du développement — structure, logique, debug |
| **Gemini** | Génération d'idées visuelles, itération sur le style |
| **nano banana** | Génération des assets graphiques (personnages, UI) |
| **Eleven Labs** | Voix de narration pour la phase de nuit |
| **CSS Custom** | Styling complet sans framework |
| **PWA** | Manifest + Service Worker pour le mode hors ligne |

**Temps total :** ~2-3 jours (8h MVP + 1-2 jours polish/rethème)

**Temps estimé sans IA :** Minimum une semaine, probablement plus.

---

## Ce que j'ai appris

### 1. L'IA enlève les barrières, pas le travail

Claude Code a écrit 99% du code. Mais j'ai quand même passé des heures à :
- Définir ce que je voulais
- Tester, itérer, ajuster
- Prendre des décisions de design
- Débugger les edge cases

L'IA m'a permis de **faire** ce projet. Sans elle, j'aurais probablement abandonné l'idée avant de commencer. Trop de friction technique pour un side-project "juste pour le fun".

### 2. Ship fast, test with humans

Ma première version était jouable en 8h. Imparfaite, mais jouable.

Le vrai feedback est venu du terrain — pas de ma tête. Le thème "inversé" me semblait malin. En pratique, ça a juste embrouillé les joueurs.

Si j'avais passé 2 semaines à peaufiner avant de tester, j'aurais peaufiné les mauvais trucs.

### 3. Les side-projects sont des labos

Ce projet m'a rien rapporté. Zéro CHF. Zéro téléchargement monétisable.

Mais j'ai :
- Testé Svelte en conditions réelles
- Découvert Eleven Labs
- Validé que je peux aller de l'idée au déploiement en quelques heures
- Créé quelque chose que des gens utilisent vraiment

Parfois, faut juste builder pour le plaisir. C'est pas du temps perdu — c'est de l'investissement dans ses skills et sa créativité.

### 4. Fancy ≠ Efficace

J'ai voulu faire un truc "original" avec le thème inversé. Résultat : confusion.

La prochaine fois, je choisis la clarté d'abord. L'originalité, c'est un bonus — pas une priorité quand l'UX de base doit être limpide.

---

## En action

![Écran de victoire](/images/lab/isla-plomo/gallery/victoryScreen.webp)

---

## Essayer

L'app est live et gratuite. Un téléphone, 5-10 joueurs, c'est parti.

[Jouer à Isla Plomo →](https://islaplomo.jonlabs.ch)

Tu trouves un bug ? Une suggestion ? [Contacte-moi →](/contact)
