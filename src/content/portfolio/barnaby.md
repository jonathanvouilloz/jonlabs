---
title: "Barnaby : dictée vocale et notes de réunion, en local"
description: "Une app de bureau gratuite et open source : tu parles, Barnaby écrit. Il transcrit aussi les réunions, et ta voix reste sur ta machine."
# Premier commit le 23.10.2026, version v0.4.5 (dépôt github.com/jonathanvouilloz/barnaby)
date: 2026-10-23
draft: false
featured: false

entryType: "side-project"
status: "live"

project:
  duration: "En continu, version après version"
  period: "Depuis octobre 2026"
  platform: "Tauri 2 · Rust · Svelte 5"
  category: "side-project"

heroImage:
  url: "/images/portfolio/barnaby/review-light.webp"
  width: 1360
  height: 730
  alt: "Barnaby : relecture des passages incertains d'une réunion transcrite"

tags:
  - "Open source"
  - "Dictée vocale"
  - "Réunions"
  - "Local-first"
  - "App de bureau"

liveUrl: "https://mybarnaby.app"

context:
  challenge: "Je passe mes journées à écrire : des messages, des mails, des consignes pour mes agents IA. Et après chaque appel client, il faut retrouver ce qui a été décidé. Les outils de dictée et de notes de réunion envoient presque tous la voix sur un serveur, et la plupart ajoutent un robot dans l'appel."
  whyThisProject: "Je voulais un outil que j'utilise moi-même tous les jours, et que je puisse donner sans réserve : gratuit, sans compte, avec une voix qui ne quitte pas l'ordinateur. Je m'en sers pour dicter et pour enregistrer mes réunions avec mes clients."

approach:
  - phase: 1
    title: "La dictée, partout"
    description: "Un raccourci clavier, tu parles, tu appuies encore. Le texte apparaît là où se trouvait le curseur : un mail, un message, un document. L'app reste cachée le reste du temps."
    tasks:
      - "Raccourci global sur Windows, macOS et Linux"
      - "Texte collé dans l'application en cours"
      - "Modèles de voix téléchargés au premier lancement"
  - phase: 2
    title: "Les réunions, sans robot dans l'appel"
    description: "Barnaby capte le micro et le son de l'ordinateur. Il fonctionne donc avec n'importe quel outil de visio, ou autour d'une table. À la fin, tout le texte est là, une ligne par personne, avec un résumé des décisions et des choses à faire si on le demande."
    tasks:
      - "Capture du micro et du son de l'ordinateur"
      - "Séparation des voix, une ligne par personne"
      - "Résumé optionnel : décisions et actions"
    image:
      url: "/images/portfolio/barnaby/transcript-light.webp"
      alt: "Transcription d'une réunion dans Barnaby, une ligne par locuteur"
      width: 1140
      height: 690
  - phase: 3
    title: "Montrer ce dont l'app n'est pas sûre"
    description: "Chaque passage incertain porte une marque. On relit ces quelques minutes au lieu de tout réécouter, puis on range la réunion dans un dossier ou on l'envoie à un autre outil."
    tasks:
      - "Passages douteux signalés dans le texte"
      - "Relecture ciblée des passages marqués"
      - "Envoi vers un dossier ou un outil (webhook)"
  - phase: 4
    title: "Local par défaut, en ligne par choix"
    description: "Par défaut, rien ne sort de la machine, et le son d'une réunion est effacé une fois relue. Deux options en ligne existent, avec sa propre clé, pour les ordinateurs modestes. L'app annonce alors le fournisseur, les données envoyées et le prix."
    tasks:
      - "Aucun compte, aucun abonnement"
      - "Transcription en ligne optionnelle"
      - "Texte de consentement proposé avant chaque réunion"

successFactors:
  - title: "La voix reste sur la machine"
    description: "Aucun serveur à moi dans la boucle. Ce qui part en ligne est un choix explicite, annoncé avant."
    icon: "ri-shield-check-line"
  - title: "Indépendant de l'outil de visio"
    description: "Barnaby écoute le son de l'ordinateur. Il n'y a rien à installer côté réunion, et personne ne voit un robot rejoindre l'appel."
    icon: "ri-mic-line"
  - title: "L'humain tranche"
    description: "L'app montre ses doutes au lieu de les cacher. On vérifie les passages marqués, pas toute la réunion."
    icon: "ri-eye-line"

learnings:
  limitations:
    - "L'app n'est pas signée : Windows et macOS affichent un avertissement à l'installation"
    - "Sur un ordinateur modeste, écrire une longue réunion en local prend du temps"
    - "Pas de version mobile"
  insights:
    - "Un outil qu'on utilise soi-même tous les jours se corrige vite : chaque défaut me gêne avant de gêner quelqu'un d'autre."
    - "Dire ce qui sort de la machine avant que ça sorte coûte une phrase dans l'interface, et change la confiance."

resultImages:
  - url: "/images/portfolio/barnaby/record-light.webp"
    alt: "Barnaby enregistre une réunion"
    caption: "Barnaby écoute"
    width: 1360
    height: 550
  - url: "/images/portfolio/barnaby/transcript-light.webp"
    alt: "Transcription avec les locuteurs"
    caption: "Barnaby écrit tout"
    width: 1140
    height: 690
  - url: "/images/portfolio/barnaby/review-light.webp"
    alt: "Relecture des passages incertains"
    caption: "Tu vérifies, puis tu envoies"
    width: 1360
    height: 730
---

> Arrête de taper. Parle.

## Ce que c'est

**Barnaby** est une app de bureau pour Windows, macOS et Linux. Elle fait deux choses : écrire ce que tu dictes, dans n'importe quelle application, et écrire tes réunions.

Elle est gratuite, open source (licence MIT), sans compte et sans abonnement. Le code est sur [GitHub](https://github.com/jonathanvouilloz/barnaby), l'installateur sur [mybarnaby.app](https://mybarnaby.app).

## Pourquoi ça compte pour mes clients

Barnaby est un produit personnel, mais il applique les mêmes règles que les systèmes que je construis pour des entreprises : les données restent chez leur propriétaire, l'outil dit ce qu'il fait, et une personne valide ce qui compte.
