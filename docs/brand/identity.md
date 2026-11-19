---
project: jonlabs
status: provisional
sources:
  - ../brand/identity.md (canon, lecture seule, état daté du 23.07.2026)
  - docs/DECISIONS.md (09.11.2026, 17.11.2026, 07.08.2026)
  - docs/project-context.md
  - src/pages/index.astro (copy validée le 17.11.2026)
  - docs/seo/topical-map-systemes-agents-ia.md
validated_by: "[?]"
validated_on: "[?]"
review_due: "2026-12-31"
---

# Identité : Jon Labs sur jonlabs.ch

> Ce document décrit l'identité **telle que le site la porte depuis le 09.11.2026**. La personne (histoire, moteurs, traits humains) vit dans le canon `noyau/brand/identity.md` et n'est pas recopiée ici. Quand le canon et le site divergent, la divergence est listée au § Écarts, pas lissée.

## Origine

Jonathan Vouilloz, informaticien de gestion (HEG Genève), lance Jon Labs fin 2024 / début 2025 après une startup et trois ans dans la crypto. Détail et formulations : canon, § L'histoire.

## Raison d'être et mission

Aider des gens à résoudre leurs problèmes, avec l'outil du moment. Sur le site, cela se traduit par : concevoir et mettre en production des systèmes IA qui prennent le travail répétitif d'une petite équipe. Source : canon § Le pourquoi ; home du 17.11.2026.

## Positionnement

Freelance à Genève qui conçoit, installe et maintient des systèmes et agents IA pour les PME romandes, avec des prix publics en CHF.

- Trois familles d'offres : IA en entreprise (mise en avant), application sur mesure et mobile, site web (maintenu, devenir non tranché). Détail : `docs/business/profile.md`.
- Plus vendus depuis le 09.11.2026 : SEO local, fiches Google, GEO.
- Mot « agence » : Jon Labs se présente comme l'alternative à l'agence, jamais comme une agence (décision du 07.08.2026).

## Audience primaire

Dirigeant ou responsable d'une TPE/PME de Suisse romande, 1 à 15 personnes, non technique. Il cherche le nom d'un outil qu'il a vu passer (Hermes Agent, OpenClaw, Claude, Euria) et veut savoir quoi installer, à quel prix, et qui le met en place. Persona opérationnel : `docs/seo/context.md`.

L'audience « maker » du canon (X, YouTube) n'est pas la cible du site.

## Valeurs observables

| Valeur | Comportement vérifiable sur le site |
|---|---|
| Transparence | Prix affichés en CHF, une seule source (`src/data/pricing.ts`). Lien affilié déclaré dans l'article qui en contient un. |
| Honnêteté sur les limites | « Non testé » écrit quand c'est le cas (OpenClaw). Un prix non vérifié n'est pas donné. |
| Preuve avant promesse | Chaque chiffre client est daté et attribué ; les chiffres déclarés sont dits déclarés (`proofs.md`). |
| Humain dans la boucle | L'agent prépare, une personne valide avant chaque envoi. |
| Pas de survente | Aucune garantie de résultat, aucun contrat de durée. |

## Posture

Praticien qui exploite des agents en production chez des clients et chez lui, qui montre le montage et dit ce qui a cassé. Action pour le client, pas de théorie. Ne se prend pas au sérieux. Détail : canon § Posture, § Ce qui le rend humain.

## Preuves qui autorisent cette posture

Agents en production chez Barber Concept (depuis le 24.09.2026) et Wildcat Muay Thai (depuis le 22.10.2026), système interne Jon Labs. Liste, statuts et formulations : `proofs.md`.

## Ce que la marque n'est pas

Pas une agence, pas un gourou, pas un consultant en costume, pas un expert infaillible. Pas un revendeur d'outil : aucun éditeur n'est partenaire.

## Tensions à préserver

- Il automatise le travail des autres et défend en même temps l'idée qu'on apprend en faisant (canon § Le take). Ne pas résoudre la tension, la nommer.
- Il travaille seul et dit que le réseau fait tout.
- Site en « vous », blog en « tu » (décision du 17.11.2026).

## Trajectoire

Le canon annonçait : SEO d'abord, puis apps, automatisation et IA appliquée « une fois l'offre produit prête ». Le site a fait ce passage le 09.11.2026. Suite prévue côté contenu : `themes.md` § Thèmes futurs.

## Écarts entre le canon et le site

Le canon `noyau/brand/` n'a pas été mis à jour depuis le recentrage. Tant qu'il ne l'est pas, **pour jonlabs.ch ce document et les décisions du repo font foi** ; pour les autres canaux, le canon fait foi.

| Sujet | Canon (`noyau/brand/`) | Site (depuis le 09.11.2026) |
|---|---|---|
| Positionnement | « Visibilité Google + IA (SEO/GEO) pour PME et TPE de Suisse romande » | Systèmes et agents IA, applications sur mesure, automatisation |
| Tagline | « gagner en visibilité sans perdre ce qui vous rend unique » | Non utilisée ; home : « Systèmes et agents IA pour vous et vos équipes » |
| Offre | Fondations CHF 990, suivi CHF 490/mois (`message.md`) | Agent IA dès CHF 1'500, site dès CHF 850, reste sur devis (`pricing.ts`) |
| Douleur de l'audience | « Site vieilli ou invisible sur Google » | Tâches répétitives, choix d'un outil IA, données et coût |
| Rôle de l'auteur | « Développeur web & SEO, créateur de concepts » | À définir : la home dit « Freelance à Genève » |
| Signature des liens | « Jon Labs, visibilité Google + IA pour PME/TPE » (`links.md`) | Obsolète pour le site |
| Lieu | Départ en Thaïlande fin 2026 annoncé (état du 23.07.2026) | « Freelance à Genève » |
| Projections `docs/identity.md` et `docs/voice.md` | Générées par `brand/sync.py`, portent l'ancien positionnement | Fallback legacy ; les skills v3 lisent `docs/brand/` |

Décision attendue de Jonathan : voir `docs/project/readiness.md`, BRAND-INPUT-001 et BRAND-INPUT-003.
