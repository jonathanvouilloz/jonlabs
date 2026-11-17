---
title: "Wildcat Muay Thai : Jerry, l'agent qui prépare les réponses"
description: "Un camp de Muay Thai à Chiang Mai, une gérante seule face aux demandes. Un agent prépare chaque réponse, l'équipe valide d'un clic dans Telegram."
# Livraison : agent les 22-23.10.2026, mini app les 14-16.11.2026 (scratchpad/cas-ia-faits.md:43)
date: 2026-11-16
draft: false
featured: true

entryType: "case-study"
status: "live"

client:
  name: "Wildcat Muay Thai"
  sector: "Sport · Camp d'entraînement"
  website: "https://wildcatmuaythai.com"

project:
  duration: "Agent puis mini app, par itérations"
  period: "Octobre – novembre 2026"
  platform: "Hermes Agent · Python · SQLite · Telegram"
  category: "automatisation"

# Placeholder à remplacer par une vraie capture (carte Telegram ou mini app, sur données synthétiques)
heroImage:
  url: "/images/portfolio/wildcat-agent-mails/hero.webp"
  alt: "Wildcat Muay Thai : un agent qui prépare les réponses aux demandes, l'équipe valide"

tags:
  - "Agent IA"
  - "Hermes"
  - "Telegram"
  - "Validation humaine"
  - "Mails clients"

results:
  # Déclaré par Jonathan le 17.11.2026
  - label: "demandes de réservation de séances traitées"
    value: "100+"
    icon: "ri-mail-check-line"

context:
  clientDescription: "Wildcat est un camp de Muay Thai familial à Chiang Mai, en Thaïlande. Meaw le gère seule. Les élèves écrivent du monde entier, à toute heure, pour un cours, un séjour Stay & Train, un visa DTV ou un scooter."
  challenge: "Les demandes arrivaient par mail et par formulaire. Meaw y répondait à la main, souvent en retard, parfois sur WhatsApp, avec les mêmes réponses à réécrire. Avec le décalage horaire, certaines passaient à la trappe. Et rien ne reliait le formulaire, le clic WhatsApp et la réservation : aucune base de clients, aucune statistique."
  whyThisProject: "J'avais construit le site du camp. Les demandes arrivaient enfin, il fallait que quelqu'un y réponde vite sans que Meaw passe ses soirées dans sa boîte mail. Le bon partage était clair : l'agent écrit le premier jet, Meaw garde la décision."

approach:
  - phase: 1
    title: "Relever la boîte et trier sans IA"
    description: "Un petit service relève la boîte mail du camp chaque minute et écarte les robots et les newsletters. Cette partie n'a pas besoin d'intelligence : des règles fixes suffisent, et elles ne se trompent pas."
    tasks:
      - "Relève de la boîte toutes les 60 secondes"
      - "Tri des messages automatiques par règles"
      - "Rangement de la boîte sans rien supprimer"
  - phase: 2
    title: "Faire rédiger le brouillon par une IA sans aucun outil"
    description: "L'IA lit le mail du client et rédige une réponse à partir d'une base de connaissances : le site, l'historique du groupe Telegram, les vraies réponses de Meaw et ses tarifs. Comme un mail vient d'un inconnu, la partie qui le lit n'a accès à aucun outil. Un message piégé ne peut rien déclencher."
    tasks:
      - "Base de connaissances mise à jour toutes les heures"
      - "Réponse rendue dans un format vérifié par le service"
      - "Accusé de réception filtré : ni prix, ni lien, ni chiffre"
  - phase: 3
    title: "Garder la décision dans Telegram"
    description: "Chaque demande arrive dans le groupe de l'équipe sous forme de carte : un résumé, le brouillon, et trois boutons. Envoyer, Répondu ailleurs, Corriger. Le mail ne part qu'après le clic, et un double clic n'envoie qu'une fois."
    tasks:
      - "Carte Telegram avec résumé et brouillon"
      - "Envoi dans le fil du client seulement après validation"
      - "Rappel des cartes restées sans réponse plus de 24 h"
  - phase: 4
    title: "Un collègue dans le groupe, puis une mini app"
    description: "Jerry est l'agent qui vit dans le groupe. Il lit tout, ne répond que si on l'appelle, retient ce qu'on lui apprend et n'a pas d'outil d'envoi. Une mini app sur téléphone complète le tout : la liste des demandes, les fiches clients, un code client qui relie formulaire et WhatsApp, les réservations et les disponibilités du logement."
    tasks:
      - "Jerry en continu, avec sa mémoire"
      - "Mini app installable sur téléphone"
      - "Code client sur les formulaires et WhatsApp"

successFactors:
  - title: "L'IA propose, Meaw décide"
    description: "Aucun mail ne part sans un clic humain, sauf l'accusé de réception, filtré pour ne contenir aucune promesse."
    icon: "ri-shield-check-line"
  - title: "L'IA seulement là où elle sert"
    description: "Le brouillon, l'accusé et la base de connaissances passent par l'IA. La relève, le tri, l'envoi et les rappels restent des règles fixes."
    icon: "ri-git-branch-line"
  - title: "Écrire comme Meaw"
    description: "Les premiers brouillons sonnaient robot. La base de connaissances s'appuie maintenant sur ses vraies réponses, et ce qu'elle apprend à Jerry améliore les brouillons suivants."
    icon: "ri-quill-pen-line"
  - title: "Un coût qui ne pèse rien"
    description: "Environ 2 dollars par mois pour une centaine de demandes et quelques centaines de messages à Jerry."
    icon: "ri-coin-line"

learnings:
  insights:
    - "Un agent qui ne se souvient de rien n'est qu'une IA qu'on interroge. La première version relançait l'IA à chaque message ; la seconde tourne en continu, avec sa mémoire."
    - "La séparation entre ce qui lit le texte d'un inconnu et ce qui parle à l'équipe est la décision qui protège tout le reste."
    - "Le ton compte autant que l'exactitude. Une réponse juste mais froide, Meaw la réécrivait."
  limitations:
    - "Le temps gagné par Meaw n'a pas encore été mesuré. Un bilan chaque lundi suit la part de brouillons envoyés sans correction, l'objectif est fixé à 70 %."
    - "La mini app vient d'être livrée : son usage au quotidien sur téléphone est en cours de mise en place."

resultImages:
  - url: "/images/blog/agent-ia-repondre-mails-clients-trajet.svg"
    alt: "Schéma du trajet d'un mail : relève, brouillon par une IA sans outils, validation d'un clic dans Telegram"
    caption: "Le trajet d'une demande : la partie qui lit le mail n'a aucun outil, l'équipe décide dans Telegram."
galleryTitle: "Schéma"
---

> Une gérante seule, des élèves qui écrivent de partout, à toute heure. L'agent ne remplace pas Meaw : il lui prépare le travail, et c'est elle qui appuie sur Envoyer.

## Le point de départ

Le [site de Wildcat](/portfolio/wildcat-muay-thai) a fait son travail : les demandes arrivent par formulaire au lieu d'une conversation WhatsApp vide. Restait à y répondre. Meaw tient le camp seule, et une bonne partie des questions se ressemblent : horaires, séjour, visa, scooter. Chacune demandait pourtant une réponse écrite à la main.

## Ce qui a été construit

| Bloc | Ce que ça fait |
|---|---|
| **Relève** | Lit la boîte du camp chaque minute, écarte robots et newsletters |
| **Brouillon** | L'IA rédige la réponse à partir de la base de connaissances du camp |
| **Accusé de réception** | Part tout de suite, sans prix ni promesse |
| **Carte Telegram** | Résumé, brouillon, trois boutons ; rien ne part sans clic |
| **Jerry** | L'agent du groupe : on lui pose une question, on lui apprend une règle |
| **Mini app** | Demandes, fiches clients, réservations, disponibilités |

## Le partage du travail

L'agent prend ce qui se répète : lire, résumer, écrire le premier jet, relancer quand une carte attend depuis trop longtemps. Meaw garde ce qui compte : le ton, les cas particuliers, et la décision d'envoyer. Quand elle corrige, Jerry retient.

Le fonctionnement détaillé est raconté dans l'article [un agent IA qui répond aux mails clients](/blog/agent-ia-repondre-mails-clients). Pour un agent du même type dans votre entreprise, voyez [l'agent IA sur mesure](/hermes).

---

Des demandes qui s'accumulent et des réponses qui se ressemblent ? [Parlons-en →](/contact)
