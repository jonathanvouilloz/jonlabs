---
title: "Isla Plomo"
description: "Un jeu de rôles cachés jouable sur un seul téléphone, inspiré d'Avalon. PWA hors ligne, style Mutafukaz/Gorillaz."
date: 2025-01-15
draft: false
featured: true

entryType: "side-project"
status: "live"

project:
  duration: "~2-3 jours"
  period: "Janvier 2025"
  platform: "Svelte + PWA"
  category: "side-project"

heroImage:
  url: "/images/lab/isla-plomo/thumbnail.webp"
  alt: "Isla Plomo - Jeu de rôles cachés PWA"

tags:
  - "PWA"
  - "Jeu"
  - "Svelte"
  - "Side-project"
  - "IA"

liveUrl: "https://islaplomo.jonlabs.ch"

context:
  challenge: "Avalon n'existe pas en app utilisable. Le thème est sous licence, les apps existantes demandent plusieurs téléphones connectés, certaines nécessitent internet — pas toujours dispo en auberge — et le maître du jeu ne peut pas jouer. Il fallait un seul téléphone qui passe de main en main, zéro internet une fois installé, les mécaniques d'Avalon avec un thème original, et un jeu simple à expliquer."
  whyThisProject: "En Thaïlande, dans une auberge de jeunesse à Chiang Mai, le proprio organisait des soirées jeux. Je voulais faire découvrir Avalon — un jeu de rôles cachés bien meilleur que le loup-garou — mais personne n'avait le jeu. Pour Undercover, une app faisait le taf. J'ai cherché l'équivalent pour Avalon : rien de bien. Alors j'ai ouvert mon ordi."

approach:
  - phase: 1
    title: "Brainstorm"
    description: "Récupération des règles officielles d'Avalon (variantes, rôles spéciaux, edge cases). Brainstorm avec Claude pour identifier les points techniques : vote secret avec un seul device, phase de nuit sans maître du jeu, rôles par taille de groupe. Résultat : quasiment rien de bloquant."
    tasks:
      - "Récupérer les règles officielles et variantes d'Avalon"
      - "Brainstorm technique avec Claude (vote, nuit, rôles)"
      - "Identifier les contraintes et edge cases"
  - phase: 2
    title: "MVP"
    description: "Développement full speed avec Claude Code en ~6h. Svelte comme framework, CSS full custom pour la flexibilité totale. À la fin de cette session : app fonctionnelle, thème 'mafia' basique, jouable."
    tasks:
      - "Setup Svelte + PWA (Service Worker, Manifest)"
      - "Logique de jeu complète (rôles, votes, missions)"
      - "Interface jouable avec thème mafia basique"
  - phase: 3
    title: "Rethème + Polish"
    description: "Le thème mafia était trop générique. Reparti sur un univers cartel latino, style visuel Mutafukaz/Gorillaz. Assets visuels générés avec Gemini + nano banana. Ajout de la narration vocale Eleven Labs pour la phase de nuit."
    tasks:
      - "Créer l'univers visuel cartel (Mutafukaz/Gorillaz)"
      - "Générer les assets avec Gemini + nano banana"
      - "Ajouter la narration vocale Eleven Labs"
      - "Bilingue français/anglais"
  - phase: 4
    title: "Test terrain"
    description: "Soirée jeux à l'auberge, premier vrai test avec des joueurs. L'app tourne nickel, le passage de téléphone est fluide, les gens ont kiffé le style visuel. Le thème 'inversé' (cartel = gentils) a semé la confusion — leçon retenue."
    tasks:
      - "Test en conditions réelles avec des joueurs"
      - "Collecter le feedback terrain"
      - "Identifier les points de confusion UX"

successFactors:
  - title: "PWA hors-ligne"
    description: "Jouable partout sans internet. Une fois installée, l'app fonctionne en mode avion — parfait pour les auberges et les soirées."
    icon: "ri-wifi-off-line"
  - title: "Un seul device"
    description: "Zéro friction de setup. Pas de serveur, pas de sync, pas de galère réseau. Le téléphone passe de main en main."
    icon: "ri-smartphone-line"
  - title: "Style visuel unique"
    description: "Différenciation forte avec un univers cartel latino inspiré de Mutafukaz et Gorillaz. Pas le énième thème médiéval-fantastique."
    icon: "ri-palette-line"
  - title: "IA comme accélérateur"
    description: "De l'idée au déploiement en 2-3 jours. Claude Code pour le dev, Gemini + nano banana pour les assets, Eleven Labs pour la voix."
    icon: "ri-robot-2-line"

learnings:
  limitations:
    - "Le thème inversé (cartel = gentils, flics = méchants) a semé la confusion auprès des joueurs"
    - "Pas de monétisation — projet 100% gratuit, zéro revenu"
  insights:
    - "L'IA enlève les barrières, pas le travail. Claude a écrit 99% du code, mais les heures de définition, test, décisions de design et debug restent humaines."
    - "Ship fast, test with humans. La première version jouable en 8h a révélé des problèmes que 2 semaines de peaufinage n'auraient pas détectés."
    - "Les side-projects sont des labos. Zéro CHF de revenu, mais Svelte testé en réel, Eleven Labs découvert, et la preuve qu'on peut aller de l'idée au déploiement en quelques heures."
    - "Fancy ≠ Efficace. Ce qui semble clever (thème inversé) peut juste être confus. La clarté d'abord, l'originalité en bonus."
---

> Un jeu de bluff et de trahison. Un téléphone. Zéro connexion requise.

![Isla Plomo - Écran d'accueil](/images/lab/isla-plomo/gallery/homescreen.webp)

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

### Features

- Bilingue français/anglais
- Rôles spéciaux optionnels (La Taupe, L'Informateur)
- Narration vocale pour la phase de nuit (Eleven Labs)
- Aide de jeu intégrée
- 100% hors ligne après installation

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

## En action

![Écran de victoire](/images/lab/isla-plomo/gallery/victoryScreen.webp)

![Mission réussie](/images/lab/isla-plomo/gallery/successMission.webp)

---

## Essayer

L'app est live et gratuite. Un téléphone, 5-10 joueurs, c'est parti.

[Jouer à Isla Plomo →](https://islaplomo.jonlabs.ch)

Tu trouves un bug ? Une suggestion ? [Contacte-moi →](/contact)
