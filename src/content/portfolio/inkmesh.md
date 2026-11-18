---
title: "Inkmesh : l'espace partagé entre vos équipes et vos agents IA"
description: "Les agents IA écrivent du Markdown, Inkmesh en fait des pages web propres que clients et équipes lisent et modifient. Open source, sur votre serveur."
# Dépôt public le 21.10.2026 (github.com/jonathanvouilloz/inkmesh)
date: 2026-10-21
draft: false
featured: false

entryType: "side-project"
status: "live"

project:
  duration: "En continu"
  period: "Depuis octobre 2026"
  platform: "SvelteKit · git · MCP"
  category: "side-project"

heroImage:
  url: "/images/portfolio/inkmesh/doc-fr.webp"
  width: 1600
  height: 1000
  alt: "Un rapport hebdomadaire écrit par un agent, ouvert dans l'éditeur Inkmesh"

tags:
  - "Open source"
  - "Agents IA"
  - "MCP"
  - "Markdown"
  - "Self-hosted"

liveUrl: "https://inkmesh.ch"

context:
  challenge: "Mes agents IA produisent des rapports, des comptes rendus et des notes de projet en Markdown. Un client ne lit pas un fichier Markdown. Il fallait exporter un PDF, coller le texte dans un document partagé ou joindre un fichier à un mail, et recommencer à chaque mise à jour."
  whyThisProject: "Je voulais que l'agent écrive directement là où le client lit. L'agent dépose sa page dans un espace, le client ouvre un lien et lit une page propre, l'équipe la corrige dans le navigateur. Un Notion plus simple, pensé pour le Markdown et les agents, qui tourne sur mon serveur."

approach:
  - phase: 1
    title: "De vrais fichiers, dans git"
    description: "Chaque page est un fichier Markdown dans un dépôt git, sur le serveur de l'entreprise. Chaque modification est un commit signé par son auteur, y compris quand un agent a agi au nom de quelqu'un. On peut restaurer une version, ou un document supprimé."
    tasks:
      - "Un espace de travail = un dossier et un dépôt git"
      - "Historique complet et restauration"
      - "Auteur de chaque modification, humain ou agent"
  - phase: 2
    title: "Un éditeur pour les humains"
    description: "Titres, listes, tableaux, images et code dans une page qui ressemble à un traitement de texte. Le contenu qu'on ne touche pas reste identique à l'octet près, pour que l'agent retrouve son fichier intact. Un bouton affiche le Markdown brut."
    tasks:
      - "Édition dans le navigateur"
      - "Vue par dossiers, tri et filtres"
      - "Recherche dans tout l'espace"
    image:
      url: "/images/portfolio/inkmesh/raw-fr.webp"
      alt: "Le même document Inkmesh affiché en Markdown brut"
      width: 1600
      height: 1000
  - phase: 3
    title: "Une porte pour les agents"
    description: "Les agents se branchent par un serveur MCP ou une API HTTP. Chacun a son propre jeton, révocable, et agit avec les droits de la personne qui l'a connecté. Claude, ChatGPT, Cursor ou un script se connectent en quelques minutes."
    tasks:
      - "Serveur MCP distant et API HTTP"
      - "Un jeton révocable par agent"
      - "Mêmes droits que la personne qui connecte l'agent"
    image:
      url: "/images/portfolio/inkmesh/connect-fr.webp"
      alt: "Écran Inkmesh pour connecter un agent IA à un espace de travail"
      width: 1600
      height: 727
  - phase: 4
    title: "Ouvrir aux clients sans leur créer de compte"
    description: "Un lien public en lecture seule donne accès à un document ou à tout un espace, et se révoque. Les commentaires sont stockés dans l'espace : à son prochain passage, l'agent les lit avec les mêmes outils."
    tasks:
      - "Rôles : propriétaire, éditeur, lecteur"
      - "Liens publics révocables"
      - "Commentaires lisibles par les agents"

successFactors:
  - title: "Votre serveur, vos données"
    description: "Inkmesh tourne sous votre propre sous-domaine. Seules les personnes invitées, ou celles qui ont un lien, peuvent lire."
    icon: "ri-server-line"
  - title: "Humains et agents, mêmes règles"
    description: "Un agent n'a pas de passe-droit : il écrit avec les droits de la personne qui l'a branché, et chaque modification porte son nom."
    icon: "ri-team-line"
  - title: "Rien d'enfermé"
    description: "Tout est du Markdown dans git. Si on arrête Inkmesh demain, les fichiers restent lisibles par n'importe quel outil."
    icon: "ri-git-branch-line"

learnings:
  limitations:
    - "Il faut un serveur et un sous-domaine : Inkmesh n'existe pas en version hébergée"
  insights:
    - "Le problème n'était pas de faire écrire les agents. C'était de faire arriver ce qu'ils écrivent devant la bonne personne, dans un format qu'elle lit."
    - "Stocker les commentaires comme des fichiers évite de construire une seconde interface pour les agents."

resultImages:
  - url: "/images/portfolio/inkmesh/doc-fr.webp"
    alt: "Rapport écrit par un agent dans l'éditeur Inkmesh"
    caption: "Le document, tel que le client le lit"
    width: 1600
    height: 1000
  - url: "/images/portfolio/inkmesh/raw-fr.webp"
    alt: "Le document en Markdown brut"
    caption: "Le même fichier, en Markdown"
    width: 1600
    height: 1000
  - url: "/images/portfolio/inkmesh/connect-fr.webp"
    alt: "Connexion d'un agent à l'espace de travail"
    caption: "Brancher un agent"
    width: 1600
    height: 727
---

> L'agent écrit dans votre espace. Le client ouvre un lien et lit une page propre.

## Ce que c'est

**Inkmesh** est un espace de travail partagé entre des personnes et des agents IA. Les agents y publient des pages, les équipes les relisent et les corrigent dans le navigateur, les clients les lisent par un lien.

Il est open source (licence MIT) et s'installe sur votre propre serveur. Le code est sur [GitHub](https://github.com/jonathanvouilloz/inkmesh), la présentation sur [inkmesh.ch](https://inkmesh.ch).

## Comment je m'en sers

Je l'utilise pour transmettre à mes clients les rapports que produisent leurs agents. Chaque client a son espace : l'agent y dépose son rapport, le client le lit, et ses remarques reviennent à l'agent au passage suivant.

C'est la même idée que dans mes systèmes sur mesure : des équipes et des agents IA qui travaillent sur les mêmes documents, avec les mêmes règles.
