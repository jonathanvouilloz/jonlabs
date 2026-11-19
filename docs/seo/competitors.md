---
project: jonlabs
status: needs_review
sources:
  - docs/seo/research-2026-11-19/research-concurrents.md (lecture des sites et sitemaps, 19.11.2026)
  - docs/seo/research-2026-11-19/serp-ch.md (76 SERP google.ch)
  - docs/seo/topical-map-systemes-agents-ia.md
validated_on: "[?]"
review_due: "2026-12-31"
---

# Concurrents et gaps SEO : jonlabs.ch

> Synthèse. Le détail (architecture, titres, formats, liens sources) est dans `research-concurrents.md` et n'est pas recopié. Tout est vérifié le 19.11.2026, sauf mention. Limites de la recherche : positions google.ch non mesurées pour ces sites ; preuves = déclarations des sites, non vérifiées.

## Concurrents business

| Domaine | Marché | Pourquoi comparable |
|---|---|---|
| kirako.ai (ex-hgnn.io) | Grenoble, Paris, vise Genève | Vend Hermes et OpenClaw installés, page `/consultant-ia-geneve`. Aucun prix, pas de CHF, pas de nLPD, téléphone +33 |
| mivelaz-consulting.ch | Lonay (VD) | Automatisation et IA pour PME, prix en CHF publiés, environ 100 articles, 15 pages métier |
| qubitech.ch | Meyrin (GE) | Agence IA sur mesure, les cas chiffrés les plus solides du lot, aucun prix |
| nexa-lab.ch | Genève | Agents IA et n8n pour PME, page `/tarifs` en CHF, peu de preuves |
| iatelier.ch, romande-ia.ch | Le Bouveret (VS) | Assistant IA pour indépendants, prix en CHF, média satellite |
| iaswiss.com | Neuchâtel | Formation et assistants, clients nommés, aucun prix |
| edana.ch | Genève | Agence logicielle, pages IA « -suisse », volume d'articles massif |
| ewm.swiss | Genève | Agence digitale, pilier automatisation, aucun prix |

## Concurrents SEO

| Domaine | Sujets | Forces observées | Limites observées |
|---|---|---|---|
| tensoria.fr | Hermes Agent (prix, quatre « vs »), prix IA sur mesure, outils par métier | Environ 560 articles, calculateur, pages devis | France, aucun prix de prestation |
| agence-scroll.com | Page `/agent-ia-hermes`, pages « agence {techno} » | Cas chiffrés, 250 articles | France |
| the-intelligence-academy.com | « agence automatisation {ville} » dont Annecy, comparatifs | Environ 900 articles | Organisme de formation, France |
| hackceleration.com | Gabarits n8n et Make, pages agence | Volume programmatique | France |
| kirako.ai | n8n en production, coût mensuel d'un agent | 7 articles en novembre | Contenus calés sur la France |
| mivelaz-consulting.ch | n8n vs Make vs Zapier, Claude pour PME, OpenClaw PME suisse, fiduciaires | Seul romand avec une vraie machine de contenu | Ton d'agence |

## Comparateurs, médias et plateformes

- Annuaires qui tiennent « agence IA Genève / Lausanne » : Malt, Sortlist, lafabriquedunet, impli.
- Reddit et sites d'affiliation sur « openclaw avis » et « openclaw alternative ».
- Éditeurs : Swisscom (Swiss AI Assistant), Infomaniak (Euria).

## Gaps exploitables

| Gap | Audience, intention | Preuve disponible | Priorité | Hypothèse à valider |
|---|---|---|---|---|
| Installation de Hermes Agent pour une PME suisse, prix en CHF | Dirigeant, transactionnelle | Forte : installations mesurées | Haute (22.11) | La requête française se convertit en Suisse |
| Comparatif indépendant Euria, Swisscom, agent sur mesure | Dirigeant, commerciale | Documentation éditeurs | Haute | Aucun test de première main |
| Prestataire IA suisse ou français (TVA, CHF, nLPD) | Dirigeant, transactionnelle | Faits vérifiables | Moyenne | Volume non mesuré |
| Agences et consultants IA en Suisse romande | Dirigeant, commerciale | Recherche concurrents | Moyenne | L'auteur se classe dans sa propre liste : à écrire sans complaisance |
| Agent IA et Bexio | Fiduciaire, transactionnelle | Aucune intégration Bexio documentée chez Jon Labs | Moyenne | À écrire depuis la documentation de l'API |
| n8n vs Make vs Zapier, version suisse | Dirigeant, commerciale | Aucune de première main | Après test | Test n8n avant le 22.12 |
| Hermes vs OpenClaw, prix et sécurité d'OpenClaw | Dirigeant, commerciale | Hermes oui, OpenClaw non | Après test | Test OpenClaw avant le 26.12 |
| Prix publiés en CHF | Tous | `/tarifs`, `pricing.ts` | Transverse | La plupart des concurrents n'affichent rien |

Angle à ne pas prendre tel quel : la recherche cite « hébergement suisse » comme avantage possible. Les installations réelles ne sont pas hébergées en Suisse (`docs/brand/proofs.md` § Interdits). L'angle tenable est de dire où tournent le serveur et le modèle.

## Hors concurrence

- lyketil.com : agence vidéo et web, l'IA n'y est qu'une ligne.
- weacend.com : domaine qui ne répond plus au 19.11.2026.
- Références de l'ancien contexte SEO sur le web et le SEO (Justin Cappelle, Vixal, Louis Descamps, SEO sans migraine, Paul Vengeons, Florian Perrier, web-dev.fr) : hors territoire depuis le 09.11.2026.
