---
title: "Barber Concept : agents IA pour les avis et les mails"
description: "Six salons, des centaines d'avis Google, trois boîtes mail : des agents IA répondent et trient, les responsables valident."
# Dernière brique livrée le 16.11.2026 (gh:barbermedia/docs/project/handoff.md:11-12)
date: 2026-11-16
draft: false
featured: true

entryType: "case-study"
status: "live"

client:
  name: "Groupe Barber · Barber Concept et Barber Media"
  sector: "Barbiers · Régie publicitaire en salon"
  website: "https://barberconcept.ch"

project:
  duration: "Par briques, une à la fois"
  period: "Août – novembre 2026"
  platform: "Hermes Agent · Cloudflare Workers · Telegram"
  category: "automatisation"

# Placeholder à remplacer par une vraie capture (hub ou carte Telegram, sans nom de client ni d'employé)
heroImage:
  url: "/images/portfolio/barber-hub-automatisation/hero.webp"
  width: 1536
  height: 1024
  alt: "Barber Concept et Barber Media : avis Google, mails et prospection pris en charge par des agents"

tags:
  - "Agents IA"
  - "Hermes"
  - "Avis Google"
  - "Tri des mails"
  - "Prospection"
  - "Validation humaine"

resultsTitle: "Les chiffres"
results:
  # Les 4 chiffres : déclarés par Jonathan le 17.11.2026
  - label: "avis Google traités et répondus automatiquement"
    value: "1000+"
    icon: "ri-star-line"
  - label: "mails traités"
    value: "200+"
    detail: "Candidatures, demandes de stage et autres demandes reçues par les salons."
    icon: "ri-mail-check-line"
  - label: "gagnées par semaine sur la gestion admin"
    value: "4 h"
    icon: "ri-time-line"

context:
  clientDescription: "Le groupe Barber réunit Barber Concept, six salons de barbier à Genève, Lausanne et Sion, et Barber Media, une régie qui diffuse de la publicité sur les écrans des salons. Les mêmes responsables portent les deux activités."
  challenge: "Six fiches Google qui reçoivent des avis chaque jour, auxquels on répondait à la main. Des demandes dispersées entre plusieurs outils et trois boîtes mail. Pendant environ un mois, des formulaires du site sont restés sans réponse sans que personne ne s'en aperçoive. Et côté Barber Media, aucun outil pour suivre la prospection."
  whyThisProject: "Tout ce travail se répète et se décrit en règles. C'est exactement ce qu'un agent peut prendre, à condition que les responsables gardent la main sur ce qui demande un jugement : un avis négatif, une réclamation, un mail sensible."

approach:
  - phase: 1
    title: "Répondre aux avis Google"
    description: "Deux fois par jour, l'agent relève les avis des six salons et rédige une réponse pour chacun, au tutoiement, en parlant du sujet concret de l'avis. Les 4 et 5 étoiles non sensibles sont publiés automatiquement. Les 1 à 3 étoiles, et tout avis sensible quelle que soit la note, arrivent dans Telegram : rien ne part sans validation."
    tasks:
      - "Collecte des six fiches, matin et soir"
      - "Publication automatique des 4-5 étoiles non sensibles"
      - "Validation humaine des 1-3 étoiles et des cas sensibles"
      - "Chaque réponse publiée est relue sur Google"
  - phase: 2
    title: "Trier les formulaires et les mails"
    description: "Chaque formulaire du site arrive dans un circuit unique. Le tri se fait d'abord par type de formulaire, sans IA. L'IA n'intervient que pour les messages libres. Les candidatures sont classées et signalées, les questions simples reçoivent une réponse, et les réclamations, franchises et sujets sensibles restent en validation humaine."
    tasks:
      - "Tri par type de formulaire, par règles"
      - "IA réservée aux messages libres"
      - "Mails clients : brouillons seulement, validés avant envoi"
      - "Un doute devient une question posée à un humain"
  - phase: 3
    title: "Un hub au lieu de quatre outils"
    description: "Le hub remplace le CRM précédent : contacts, demandes, tableaux de suivi et messagerie des trois boîtes au même endroit. Les agents y accèdent par une interface dédiée, avec des droits limités."
    tasks:
      - "Contacts, demandes et suivi dans un seul outil"
      - "Les trois boîtes mail réunies"
      - "Accès des agents encadré, profil par profil"
  - phase: 4
    title: "Prospection automatique pour Barber Media"
    description: "Chaque jour, un agent trouve plusieurs prospects et le hub envoie les relances automatiquement. L'agent qui cherche n'a pas l'outil d'envoi : c'est le hub qui envoie, selon des règles fixes. Quand un prospect répond ou mérite un appel, un humain reprend."
    tasks:
      - "Plusieurs prospects trouvés chaque jour"
      - "Relances automatiques"
      - "Détection des répondeurs automatiques"
      - "Fiches d'appel préparées pour l'humain"

successFactors:
  - title: "Le jugement reste humain"
    description: "Avis négatifs, réclamations, sujets sensibles : l'agent prépare, une personne décide. Le reste part seul."
    icon: "ri-shield-check-line"
  - title: "Un agent par métier"
    description: "Mails, avis, prospection : chaque profil d'agent a ses droits et ses interdits. Celui qui lit n'est pas forcément celui qui envoie."
    icon: "ri-team-line"
  - title: "Des règles avant l'IA"
    description: "Quand un formulaire dit déjà ce qu'il est, une règle le classe. L'IA ne sert que là où il faut lire et comprendre."
    icon: "ri-git-branch-line"
  - title: "Une seule réponse par avis"
    description: "Jamais de doublon, jamais de réponse remplacée, et chaque publication est vérifiée sur Google."
    icon: "ri-check-double-line"

learnings:
  insights:
    - "Une notification qui ne demande aucune décision est du bruit. Chaque alerte envoyée aux responsables dit ce qu'on attend d'eux et pourquoi l'agent ne peut pas trancher."
    - "Le tri par règles fait la plus grosse part du travail des formulaires. L'IA arrive après, sur ce qui reste."
    - "Un hub construit pour l'équipe et pour les agents vaut mieux qu'un CRM du marché où l'agent ne voit pas les réponses."
  limitations:
    - "La prospection automatique tourne depuis fin octobre 2026 : il est trop tôt pour en tirer un résultat commercial."
    - "Le temps gagné est une estimation sur la gestion admin, pas une mesure outil par outil."
---

> Des avis à répondre tous les jours, des mails à trier, des prospects à relancer. Le travail ne manquait pas d'intérêt, il manquait de temps. Les agents ont pris la partie qui se répète.

## Ce qui a été construit

| Bloc | Ce que ça fait |
|---|---|
| **Avis Google** | Réponse à chaque avis des six salons ; 4-5 étoiles publiés seuls, 1-3 étoiles validés par un humain |
| **Formulaires et mails** | Tri par règles, IA pour les messages libres, brouillons validés avant envoi |
| **Hub** | Contacts, demandes, suivi et messagerie des trois boîtes au même endroit |
| **Prospection** | Plusieurs prospects par jour, relances automatiques, appels préparés pour l'humain |
| **Organisation** | Un profil d'agent par métier, chacun avec ses droits et ses interdits |

## Le partage du travail

Les agents lisent, trient, rédigent et relancent. Les responsables décident de ce qui engage le groupe : la réponse à un client mécontent, une réclamation, un mail qui sort de l'ordinaire. Les validations passent par Telegram, en un message.

Le même groupe a confié à Jon Labs son [site et son référencement](/portfolio/barber-concept). Pour un dispositif du même type dans votre entreprise, voyez [l'agent IA sur mesure](/hermes).

---

Des avis, des mails ou des relances qui vous prennent des heures chaque semaine ? [Parlons-en →](/contact)
