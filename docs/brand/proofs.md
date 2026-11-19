---
project: jonlabs
extends: identity
status: provisional
sources:
  - docs/seo/research-2026-11-19/preuves-terrain-hermes.md (relevé complet, 19.11.2026)
  - src/pages/index.astro
  - src/content/portfolio/
  - docs/DECISIONS.md (17.11.2026, 19.11.2026)
  - docs/features/plan-editorial-fin-2026.md
validated_on: "[?]"
review_due: "2026-12-31"
---

# Preuves : ce que jonlabs.ch a le droit d'affirmer

> Le relevé complet, avec fichier et ligne pour chaque fait, est dans `docs/seo/research-2026-11-19/preuves-terrain-hermes.md`. Ce document garde les preuves utilisables telles quelles et les interdits. Les chiffres vivent dans leur source : avant publication, on relit la source, pas ce tableau.

Types : **mesuré** (relevé sur un système), **déclaré** (dit par Jonathan, sans compteur), **documenté** (source d'un éditeur), **observé** (constaté en production, non chiffré).

## Installations en production

| Preuve | Type | Date | Formulation autorisée |
|---|---|---|---|
| Agents de Barber Concept sur un VPS 2 vCPU / 8 Go | mesuré (relevé du 19.11.2026) | en service depuis le 24.09.2026 | 11 profils d'agent, 21 tâches planifiées, plus de 2 600 exécutions journalisées dont 1,5 % en échec, 400 Mo pour la passerelle |
| Agent mail de Wildcat Muay Thai | mesuré, publié | depuis le 22.10.2026 | environ 2 $ d'IA par mois pour 100 demandes ; ½ centime par brouillon, mesuré sur 49 mails ; brouillon en 10 à 45 s |
| Système interne Jon Labs (CRM, facturation, agent) | observé, publié | 14.11.2026 | l'agent passe par une API métier, jamais par un accès direct à la base |
| Test d'OpenBot sur un VPS vierge | observé, publié | novembre 2026 | scénario fictif assumé ; mail piégé non testé |

Accord de Jonathan donné le 19.11.2026 pour citer les chiffres du VPS Barber, sans nom de personne ni contenu.

## Résultats clients

| Preuve | Type | Source publique |
|---|---|---|
| 1000+ avis Google traités et répondus (Barber Concept) | déclaré le 17.11.2026 | home, fiche portfolio |
| 500+ mails traités (Barber Concept) | déclaré le 19.11.2026 | fiche portfolio |
| 100+ demandes de réservation traitées (Wildcat) | déclaré le 17.11.2026 | home, fiche portfolio |
| 4 h gagnées par semaine (Barber Concept) | estimation, pas une mesure | home |
| 10 h gagnées par semaine (Jon Labs) | déclaré le 19.11.2026, non mesuré | fiche portfolio |
| 20'000+ visites en 4 mois | déclaré | home (`DECISIONS.md`, 19.11.2026) |

Un chiffre déclaré s'écrit tel quel avec son attribution au client. Il ne devient jamais « mesuré ».

## Leçons de terrain publiables

- Première version de l'agent mail sans mémoire, refaite en profil continu.
- Les consignes de style n'ont pas corrigé le ton ; les vraies réponses envoyées, oui.
- Séparation lecture / action : l'IA qui lit n'a aucun outil, seul le clic envoie.
- Avis 4-5 étoiles publiés seuls, 1 à 3 étoiles en validation humaine.
- Un CRM du marché remplacé par un outil maison chez Barber (sans nommer le produit).

## Clients nommables

Barber Concept, Wildcat Muay Thai : oui. L'organisateur de camps de vacances : anonymisé (« un organisateur de camps de vacances », décision du 17.11.2026). Jamais de nom de personne tierce ni de contenu brut de client.

## Interdits

| Interdit | État réel |
|---|---|
| Écrire que les installations sont hébergées en Suisse ou chez Infomaniak | VPS Barber : Hostinger, hors Suisse. VPS perso : HostHatch, pays non documenté. Les mentions existantes sur `/tarifs`, `/hermes`, `service-sections.ts`, `pricing.ts` et en fin de `hermes-agent-ia-pme` attendent la décision de Jonathan |
| Écrire que n8n tourne sur le serveur | Aucun conteneur n8n actif au 19.11.2026 |
| Présenter OpenClaw comme installé ou testé | Aucune installation ; sources tierces uniquement. Articles OpenClaw repoussés aux 26, 28 et 30.12 |
| Chiffres de sécurité OpenClaw (ClawHavoc, audit) | Non sourcés |
| Taux de brouillons envoyés sans correction | Objectif 70 %, valeur réelle non relevée. Le « 75 % » est un exemple de format |
| Incident de restauration du 18.11, secrets passés en clair, accès root perdu | Interne. Publiable seulement anonymisé et avec accord |
| Fournisseur, nom d'hôte, adresses des serveurs | Surface d'attaque |
| Affirmer une expérience en santé | Aucun cas |
| Preuves SEO du canon (Barber Concept ×12, Léo Lecureux) pour vendre de l'IA | Preuves d'une offre fermée le 09.11.2026 ; utilisables dans le portfolio, pas comme preuve d'agent IA |

## Preuves à collecter

Liste dans le relevé, § 6 : version de Hermes par serveur, taux réel de validation sur 4 semaines, coût mensuel réel en CHF, temps d'installation chronométré, captures anonymisées, test OpenClaw et n8n (`protocole-tests-openclaw-n8n.md`).

## Règles de formulation

1. Chaque chiffre porte sa date et son client.
2. « Environ », « plus de » seulement si la source le dit ainsi.
3. Une preuve d'éditeur tiers (prix, version) est revérifiée le jour de la rédaction et datée dans le texte.
4. Ce qui n'est pas testé est écrit « non testé ».
