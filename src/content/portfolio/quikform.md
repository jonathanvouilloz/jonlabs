---
title: "Quikform : des formulaires écrits par vos agents IA"
description: "Un petit serveur de formulaires : l'agent IA décrit le formulaire, Quikform le sert sur votre domaine et garde les réponses chez vous."
# Dépôt public le 23.10.2026 (github.com/jonathanvouilloz/quikform)
date: 2026-10-23
draft: false
featured: false

entryType: "side-project"
status: "live"

project:
  duration: "En continu"
  period: "Depuis octobre 2026"
  platform: "Bun · Hono · SQLite"
  category: "side-project"

heroImage:
  url: "/images/portfolio/quikform/hero.webp"
  width: 1600
  height: 1000
  alt: "Un formulaire d'accueil en deux étapes servi par Quikform, sur mobile"

tags:
  - "Open source"
  - "Agents IA"
  - "Formulaires"
  - "Self-hosted"
  - "Mobile-first"

liveUrl: "https://jonathanvouilloz.github.io/quikform/"

context:
  challenge: "Un formulaire d'accueil pour un nouveau client, un questionnaire avant un projet, une demande de contact : j'en ai besoin souvent, et chaque fois il fallait ouvrir un éditeur en ligne, cliquer, puis aller rechercher les réponses dans un service tiers. Mes agents IA, eux, ne savent pas cliquer dans un éditeur visuel."
  whyThisProject: "Je voulais dire à mon agent « il me faut un formulaire d'accueil pour les nouveaux membres » et recevoir un lien. Puis qu'il relise lui-même les réponses. Sans compte, sans service hébergé, avec les réponses sur mon serveur."

approach:
  - phase: 1
    title: "L'agent décrit, il ne code pas"
    description: "L'agent écrit un fichier par formulaire : les étapes, les champs, les textes. Il n'écrit jamais de HTML. Quikform vérifie le fichier et signale chaque erreur avec son emplacement, pour que l'agent la corrige seul."
    tasks:
      - "Un fichier de description par formulaire"
      - "Vérification avec des erreurs précises"
      - "Mise en ligne sans redémarrer le serveur"
  - phase: 2
    title: "Un formulaire fait pour le téléphone"
    description: "Tous les formulaires utilisent les mêmes composants, pensés pour un écran de téléphone : étapes avec barre de progression, champs conditionnels, vérification en direct, brouillon gardé dans le navigateur. La page fonctionne même sans JavaScript."
    tasks:
      - "Sept types de champs, étapes et conditions"
      - "Français, anglais, allemand et thaï"
      - "Couleur et logo par projet, aucune mention « propulsé par »"
  - phase: 3
    title: "Les réponses restent chez vous"
    description: "Chaque réponse est vérifiée une seconde fois par le serveur, puis rangée dans un fichier SQLite par projet. Une alerte Telegram peut prévenir à chaque envoi. Les réponses sont effacées automatiquement après douze mois par défaut."
    tasks:
      - "Stockage sur votre serveur, un fichier par projet"
      - "Alerte Telegram optionnelle"
      - "Protection contre les robots et les envois en rafale"
  - phase: 4
    title: "L'agent relit, vous aussi"
    description: "L'agent récupère les réponses dans un format qu'il sait lire. Une page d'administration en lecture seule, protégée par mot de passe, montre les projets, les formulaires, qui a répondu et chaque réponse. Les formulaires privés donnent un lien par personne, révocable."
    tasks:
      - "Lecture des réponses par l'agent"
      - "Administration en lecture seule"
      - "Formulaires publics ou liens individuels"

successFactors:
  - title: "Un seul programme"
    description: "Un exécutable, moins de 100 Mo de mémoire. Il tourne sur un petit serveur à côté du reste."
    icon: "ri-cpu-line"
  - title: "Aucun tiers dans la boucle"
    description: "Pas de compte, pas de traceur, pas de bandeau de cookies. Les formulaires vivent sur votre domaine et les réponses sur votre serveur."
    icon: "ri-shield-check-line"
  - title: "Une réponse est une donnée, pas une consigne"
    description: "Ce qu'un visiteur tape est stocké et affiché comme du texte, jamais exécuté. Reste à dire aux agents qui relisent les réponses de n'y suivre aucune instruction."
    icon: "ri-lock-line"

learnings:
  limitations:
    - "Pas d'envoi de fichiers, pas de paiement, pas d'envoi d'e-mails, pas de statistiques dans cette première version"
    - "Pas d'éditeur visuel : c'est voulu, mais il faut un agent ou accepter d'écrire le fichier à la main"
  insights:
    - "Sans éditeur visuel, il reste très peu de produit à construire. L'agent est l'éditeur."
    - "Le vrai risque d'un formulaire public n'est pas le serveur, c'est l'agent qui lit les réponses. Il faut le dire et le traiter."

resultImages:
  - url: "/images/portfolio/quikform/form-step1-fr.webp"
    alt: "Première étape d'un formulaire d'accueil Quikform"
    caption: "Étape 1"
    width: 780
    height: 1688
  - url: "/images/portfolio/quikform/form-step2-fr.webp"
    alt: "Deuxième étape d'un formulaire d'accueil Quikform"
    caption: "Étape 2"
    width: 780
    height: 1688
---

> Vous demandez un formulaire à votre agent. Vous recevez un lien.

## Ce que c'est

**Quikform** est un petit serveur de formulaires pour les formulaires écrits par des agents IA. Il n'a ni éditeur visuel, ni compte, ni service hébergé : un seul programme, installé une fois sur un serveur que vous contrôlez.

Il est open source (licence MIT). Le code est sur [GitHub](https://github.com/jonathanvouilloz/quikform).

## Comment je m'en sers

Il tourne sur mon serveur. Mes agents s'en servent pour créer les formulaires d'accueil et de contact dont j'ai besoin, puis pour relire les réponses.

C'est une brique que je réutilise dans les systèmes que je construis : quand un agent a besoin de poser des questions à quelqu'un, il n'attend pas qu'un humain fabrique le formulaire.
