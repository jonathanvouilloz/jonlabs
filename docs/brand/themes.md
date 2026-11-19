---
project: jonlabs
extends: identity
status: provisional
sources:
  - docs/seo/topical-map-systemes-agents-ia.md (19.11.2026)
  - docs/DECISIONS.md (09.11.2026, 19.11.2026)
  - docs/business/profile.md
  - ../brand/voice.md (canon : concepts propriétaires)
validated_on: "[?]"
review_due: "2026-12-31"
---

# Territoire éditorial : jonlabs.ch

> Le plan (mots-clés, volumes, dates, maillage) est dans `docs/seo/topical-map-systemes-agents-ia.md` et n'est pas recopié. Ce document dit de quoi le site a le droit de parler, et avec quelle preuve.

## Thèmes cœur

| Thème | Hub | Preuve disponible |
|---|---|---|
| A. Agents installés chez soi (Hermes Agent, OpenClaw, n8n) | `/hermes`, `/openclaw` (à créer) | Hermes : forte, mesurée. OpenClaw, n8n : aucune de première main |
| B. Assistants du marché (Claude, Euria, Grok Bot, Swisscom) | `assistant-ia-suisse-comparatif` (à créer) | Documentation des éditeurs, relue et datée. Aucun test de première main documenté |
| C. Systèmes sur mesure : prix et choix du prestataire | `/consultant-ia`, `/tarifs` | Prix publics, cas Barber et Wildcat |

## Thèmes adjacents

| Thème | Hub | Preuve disponible |
|---|---|---|
| D. Souveraineté des données et règles internes (nLPD, charte, IA locale) | `ia-nlpd-conformite-suisse` | Pratiques réelles (validation humaine, séparation lecture / action). Pas d'avis juridique |
| Application sur mesure et mobile | pages service | Portfolio |
| Formation IA en équipe | `/services/formation-ia-equipe` | À documenter |

## Thèmes futurs

Backlog de janvier 2027 de la topical map : Copilot Microsoft 365, alternatives à OpenClaw, agent sur WhatsApp, IA et secret professionnel, Apertus, AI Act, ChatGPT entreprise ; pages `/services/audit-ia` et `/metiers/ia-cabinet`.

## Hors territoire

- SEO local, fiches Google, GEO « apparaître dans une IA » (fermés le 09.11.2026).
- Site vitrine, WordPress, tarifs de sites web : pages maintenues, aucun nouvel article.
- Nouvel article « prix agent IA » (cinq URLs déjà sur l'intention) ou « installer OpenClaw » (rôle de la page `/openclaw`).
- Actualité IA sans conséquence pratique pour une PME suisse.
- Contenu pour makers et développeurs : canaux X et YouTube, pas le blog.

## Angles propriétaires

- **Produit d'abord** : partir du nom d'outil que le dirigeant a vu passer, et le ramener à sa situation de PME suisse.
- **Le coût complet sur 12 mois** : serveur, modèle, installation, maintenance, en CHF.
- **En production chez un client** : ce qui tourne, ce qui a cassé, ce qui a été abandonné.
- **L'humain valide** : chaque sujet d'agent montre où se place le clic humain.
- **« L'IA génère des hypothèses, la data tranche »** et **« le client parle moldu, le pro a la tête en tunnel »** (canon, à employer tels quels).

## Carte thèmes → audience → preuve → objectif

| Thème | Audience | Intention dominante | Preuve | Objectif |
|---|---|---|---|---|
| A. Agents installés | Dirigeant qui a entendu parler de Hermes ou OpenClaw | Commerciale, transactionnelle | Mesurée (Hermes) | Lead `/hermes`, `/openclaw` |
| B. Assistants du marché | Dirigeant qui hésite entre des produits grand public | Commerciale | Documentée | Lead `/consultant-ia`, formation |
| C. Sur mesure et prix | Dirigeant qui cherche un prestataire et un budget | Transactionnelle | Prix publics, cas clients | Lead `/consultant-ia`, `/tarifs` |
| D. Souveraineté | Dirigeant ou responsable inquiet pour ses données | Informationnelle | Pratiques réelles | Confiance, formation |

Un thème sans preuve de première main s'écrit avec les sources de l'éditeur et la mention « non testé », ou attend le test.
