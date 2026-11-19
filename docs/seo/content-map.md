---
project: jonlabs
extends: identity
status: needs_review
updated_at: 2026-11-19
sources:
  - docs/seo/research-2026-11-19/inventaire-existant.md (49 articles, pages indexables, liens entrants, relevé du 19.11.2026)
  - docs/seo/topical-map-systemes-agents-ia.md (blueprint de maillage)
---

# Carte de contenu : jonlabs.ch

> Où lier, et avec quelle ancre. L'inventaire complet (49 articles, mots-clés, liens entrants et sortants) est dans `inventaire-existant.md` ; le maillage des 20 articles planifiés est dans la topical map § Blueprint. Ce document garde les cibles de lien et les règles.

## Pages commerciales et de conversion

| URL | Rôle | Quand lier | Ancres naturelles | Statut |
|---|---|---|---|---|
| `/hermes` | Offre agent IA installé | Tout article sur Hermes Agent, l'installation d'un agent, le coût d'un agent | installation de Hermes Agent, agent IA sur mesure | En ligne |
| `/openclaw` | Offre OpenClaw | Articles OpenClaw | intégration d'OpenClaw | À créer |
| `/consultant-ia` | Offre conseil et mise en place | Comparatifs, choix d'outil, choix de prestataire | consultant IA à Genève, mise en place de l'IA | En ligne |
| `/consultant-ia/lausanne`, `/annemasse`, `/gaillard` | Pages ville | Quand l'article parle de la ville ou de son tissu économique | consultant IA à Lausanne | En ligne, 0 lien depuis le blog |
| `/tarifs` | Grille de prix | Tout article prix | tarifs, grille de prix | En ligne, aucun article prix IA ne la lie |
| `/services/formation-ia-equipe` | Offre formation | Charte, adoption, offres Claude par poste | formation IA en entreprise | En ligne, 2 liens depuis le blog |
| `/services/application-sur-mesure` | Offre application métier | Assistant interne, MCP, logiciel sur mesure | application sur mesure, logiciel métier | En ligne |
| `/services/developpement-application-mobile` | Offre mobile | Articles mobile | développement d'application mobile | En ligne |
| `/metiers/ia-fiduciaire` | Page métier | Bexio, facturation, fiduciaires | IA pour fiduciaires | En ligne |
| `/metiers/ia-agence-immobiliere` | Page métier | Prospection, régies | IA pour agences immobilières | En ligne |
| `/portfolio` (cas IA : Barber, Wildcat, Jon Labs, camps) | Preuve | Quand un chiffre client est cité | le nom du cas | En ligne, 0 lien depuis le blog |
| `/contact`, Cal.com | Conversion | CTA final uniquement | voir `docs/brand/message.md` | En ligne |

## Contenus piliers et ressources

| URL (`/blog/…`) | Sujet, intention | Quand lier | Ancres naturelles | Statut |
|---|---|---|---|---|
| `hermes-agent-ia-pme` | Hermes Agent : définition, avis | Première mention de Hermes Agent | Hermes Agent, ce que c'est | En ligne |
| `openclaw-pme-suisse` | OpenClaw pour une PME suisse | Première mention d'OpenClaw | OpenClaw pour PME | En ligne |
| `meilleurs-vps-hermes-agent-suisse` | Choix du serveur | Quand on parle d'hébergement | choisir un VPS pour Hermes | En ligne |
| `agent-ia-repondre-mails-clients` | Cas phare, architecture et coût | Preuve de coût, de validation humaine | l'agent qui répond aux mails | En ligne, sous-maillé (1 lien entrant) |
| `openbot-souverainete-self-hosted` | Test d'OpenBot | Agents auto-hébergés, Grok Bot | test d'OpenBot | En ligne le 20.11 |
| `comparatif-browser-agents-ia` | Navigateurs pour agents | Outils d'un agent | comparatif des navigateurs pour agents | En ligne |
| `workflows-vs-agents-ia-pme` | Workflow ou agent | n8n, Make, automatisation simple | workflow ou agent IA | En ligne |
| `prix-agent-ia-automatisation-suisse` | Prix d'un agent, cible unique de l'intention | Tout besoin de fourchette de marché | prix d'un agent IA en Suisse | En ligne |
| `ia-nlpd-conformite-suisse` | Hub souveraineté | Données, nLPD | IA et nLPD | En ligne |
| `garde-fous-ia-validations-audit` | Validation humaine, audit | Sécurité, contrôle | garde-fous d'un agent IA | En ligne |
| `implementer-agent-ia-etapes` | Étapes de déploiement | « Faire ou faire faire » | étapes pour déployer un agent | En ligne |
| `integrer-agent-ia-outils-existants` | Intégration CRM, ERP, MCP | Bexio, MCP | relier un agent à vos outils | En ligne |
| `automatiser-support-client-ia` | Support client | Chatbot, agent vocal | automatiser le support client | En ligne |
| `/guides/mettre-en-place-ia-entreprise-guide` | Pilier mise en place | Vue d'ensemble | guide de mise en place de l'IA | En ligne ; fusion des 13 satellites en attente du bilan |
| `installer-hermes-agent` | Procédure d'installation | Ne pas lier avant le 22.11 | installer Hermes Agent | Brouillon |
| `claude-duet-suisse` | Claude Duet | Ne pas lier avant le 24.11 | Claude Duet en Suisse | Brouillon |

## Règles de maillage

1. Chaque article lie son hub et une page d'offre dans les 300 premiers mots, avec une ancre descriptive.
2. Un lien vers un article non publié ne se pose pas. Il est ajouté dans les anciens articles le jour de la sortie (topical map, colonne « à poser au retour »).
3. Pertinence avant quantité : 3 à 6 liens contextuels pour environ 1 000 mots, jamais une obligation.
4. À chaque nouvel article, poser 2 à 4 liens entrants depuis des articles existants pertinents.
5. Une page ville ou métier est liée quand le contexte s'y prête.
6. Ne pas lier vers les satellites promis à la fusion ni vers les pages hors territoire (`prix-site-web-suisse-2026`, `specialiste-developpement-web-suisse`, `geo-seo-ia`, `apparaitre-claude`).
7. Ancre : ce que la page cible apporte, jamais « cliquez ici ».

## Opportunités de contenu ou de liens

- Pages sans aucun lien depuis le blog : les trois pages ville IA, la home, les cas IA du portfolio, mobile Lausanne.
- `/consultant-ia` absent de cinq articles récents ; `/tarifs` absent des articles prix IA.
- Articles orphelins ou presque : `inventaire-existant.md` § 5.3.
- Redirections 301 décidées, non exécutées : `ia-pragmatique-pme-suisse`, `temps-perdu-pme-automatisation`.
- Pages à créer : `/openclaw`, puis au backlog `/services/audit-ia`, `/metiers/ia-cabinet`.
- Onze optimisations de pages classées par impact : topical map § Optimisations.
