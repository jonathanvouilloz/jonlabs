---
title: "Système IA sur mesure : celui qui fait tourner Jon Labs"
description: "Mon outil de travail : un agent IA sur serveur, un logiciel de facturation et CRM avec API, chaque envoi sous ma validation."
# VPS jonlabs en service le 14.11.2026 (cerveau/10-Projets/vps/vps-human.md:36)
date: 2026-11-14
draft: false
featured: false

entryType: "case-study"
status: "en-cours"

client:
  name: "Jon Labs (usage interne)"
  sector: "Freelance · Systèmes IA sur mesure"

project:
  duration: "En continu, brique par brique"
  period: "2026"
  platform: "Hermes Agent · SvelteKit · Neon · VPS"
  category: "automatisation"

# Placeholder : aucune capture du CRM ni de Hermes n'existe (scratchpad/cas-ia-faits.md:143)
heroImage:
  url: "/images/portfolio/systeme-ia-jonlabs/hero.webp"
  width: 1536
  height: 1024
  alt: "Le système Jon Labs : agents, CRM et serveur"

tags:
  - "Hermes"
  - "Agents IA"
  - "CRM"
  - "API"
  - "MCP"
  - "VPS"

# Déclaré par Jonathan le 19.11.2026
results:
  - label: "gagnées par semaine grâce à mon assistant IA"
    value: "10 h"
    icon: "ri-time-line"

context:
  clientDescription: "Jon Labs, c'est moi : un développeur freelance qui construit des systèmes où des équipes et des agents IA travaillent ensemble. Avant de le proposer à des clients, je le fais tourner sur ma propre activité."
  challenge: "Mon travail tournait sur mon ordinateur : poste éteint, plus rien ne se passait. La facturation, le suivi commercial, les notes de projet et les agents vivaient dans des endroits séparés, sans règle claire sur qui a le droit d'écrire quoi."
  whyThisProject: "Je ne vends pas un système que je n'utilise pas moi-même. Chaque règle que je propose à un client, l'agent qui prépare et l'humain qui valide, je l'ai d'abord appliquée à mes propres factures et à mes propres prospects."

approach:
  - phase: 1
    title: "Un logiciel de facturation et de CRM avec une vraie API"
    description: "Synkro gère les factures suisses avec QR-facture, la TVA, les dépenses et les paiements. Le CRM s'y est ajouté : contacts, affaires, une vue du jour et des relances à intervalles fixes. Une API et un serveur MCP permettent à l'agent d'y travailler, avec des accès limités par périmètre."
    tasks:
      - "Factures QR, TVA, dépenses, paiements"
      - "Contacts, affaires et relances planifiées"
      - "API et serveur MCP, accès machine par périmètre"
      - "Réponses et relances préparées par l'agent, envoyées après approbation"
  - phase: 2
    title: "Un agent sur un serveur, pas sur mon ordinateur"
    description: "Depuis mi-novembre 2026, Hermes tourne sur mon propre serveur : le système travaille même quand mon ordinateur est éteint. Le serveur héberge aussi des systèmes clients, comme l'agent et la mini app de Wildcat Muay Thai."
    tasks:
      - "Serveur dédié en service depuis le 14 novembre 2026"
      - "Synchronisation horaire des notes par git"
  - phase: 3
    title: "Des outils pour la prospection, sans envoi automatique"
    description: "À partir de l'adresse d'un site, un outil collecte et vérifie les points techniques, rédige un audit en PDF et un brouillon de mail, puis crée l'affaire dans le CRM. Il n'envoie jamais rien : le mail part si je le décide."
    tasks:
      - "Collecte du site et vérifications automatiques"
      - "Audit PDF et brouillon de mail"
      - "Affaire et note créées dans le CRM"
  - phase: 4
    title: "Des notes qui se rangent"
    description: "Tout ce que je dépose dans une boîte d'entrée est trié selon sa nature : idée, compte rendu d'appel, connaissance, document de projet. Les tâches qui n'attendent que moi sont regroupées dans une seule liste."
    tasks:
      - "Une boîte d'entrée unique, triée"
      - "Les tâches à faire regroupées automatiquement"

successFactors:
  - title: "L'agent n'a jamais d'accès direct à la base"
    description: "Hermes passe par l'API du logiciel, comme n'importe quelle application. Chaque écriture est contrôlée et tracée."
    icon: "ri-lock-line"
  - title: "Préparer seul, envoyer jamais seul"
    description: "Analyse et préparation sont autonomes. Tout envoi ou toute publication demande une confirmation explicite."
    icon: "ri-shield-check-line"
  - title: "Le même patron partout"
    description: "L'IA rédige et trie, du code fixe exécute, un humain valide. C'est le patron appliqué chez Wildcat et chez Barber Concept."
    icon: "ri-git-branch-line"

learnings:
  insights:
    - "Construire son propre système oblige à trancher des questions qu'un client posera tôt ou tard : qui a le droit d'écrire quoi, et qui valide."
    - "Une API bien bornée vaut mieux qu'un agent à qui l'on donne les clés de la base."
  limitations:
    - "Je n'ai pas encore mesuré le temps gagné sur l'administratif, la facturation ou la prospection."
    - "Le serveur vient d'être mis en service. Certaines briques, comme la distribution automatique du suivi SEO hebdomadaire, sont prêtes mais pas encore déployées."
---

> Avant de proposer à une entreprise de faire travailler des agents IA avec son équipe, je l'ai fait chez moi. Ce dossier décrit ce qui tourne aujourd'hui, et ce qui ne tourne pas encore.

## Ce qui tourne

| Bloc | Ce que ça fait |
|---|---|
| **Synkro** | Factures QR, TVA, dépenses, paiements, CRM et relances, avec API et serveur MCP |
| **Hermes** | L'agent, sur mon serveur plutôt que sur mon ordinateur |
| **Audit de prospect** | Audit PDF et brouillon de mail à partir d'une adresse, sans aucun envoi |
| **Notes** | Une boîte d'entrée triée, une liste unique de mes tâches |
| **Hébergement** | Les systèmes de clients comme Wildcat Muay Thai tournent sur le même serveur |

## Le partage du travail

L'agent prépare : relances, réponses, audits, tri des notes. Je garde ce qui engage Jon Labs : ce qui part chez un client ou un prospect, ce qui crée une facture ou une affaire. Ce sont les mêmes règles que je propose ensuite aux entreprises qui me confient un [agent IA sur mesure](/hermes) ou un [accompagnement IA](/consultant-ia).

---

Vous voulez le même type de système pour votre entreprise ? [Parlons-en →](/contact)
