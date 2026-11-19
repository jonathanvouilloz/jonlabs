---
project: jonlabs
extends: identity
status: provisional
sources:
  - src/pages/index.astro (copy validée le 17.11.2026)
  - src/data/pricing.ts
  - docs/DECISIONS.md
  - docs/seo-context.md (cta_map)
  - docs/seo/topical-map-systemes-agents-ia.md
  - docs/seo/research-2026-11-19/research-icp-douleurs.md
  - ../brand/message.md (canon : convictions, garde-fous)
validated_on: "[?]"
review_due: "2026-12-31"
---

# Message : Jon Labs sur jonlabs.ch

> Le QUOI du site. L'offre du canon (Fondations, suivi SEO) n'est plus celle du site : voir `identity.md` § Écarts. Les prix ne sont jamais recopiés : `src/data/pricing.ts`.

## Promesse honnête

« Systèmes et agents IA pour vous et vos équipes. Je conçois et je mets en production les systèmes IA qui prennent le répétitif, pour que vos équipes gardent l'essentiel. » (home, 17.11.2026)

Limite à dire avec la promesse : l'agent prépare, une personne valide. Aucun résultat n'est garanti.

## Problèmes et situations

Tirés des études citées dans la recherche du 19.11.2026 (AXA/Sotomo, PME Digital Pulse, EY, UBS) :

| Situation du lecteur | Ce qu'il se demande |
|---|---|
| Il a vu passer un nom d'outil | Qu'est-ce que c'est, est-ce pour une PME suisse, combien ça coûte |
| Ses données sortent de Suisse | Où vont mes mails et mes documents, secret professionnel, nLPD |
| Son équipe utilise déjà l'IA sans règles | Que puis-je autoriser, quelle charte |
| Il n'a pas de cas d'usage clair | Par quelle tâche commencer |
| Personne ne lui chiffre le coût | Prix de mise en place, coût mensuel, qui s'en occupe |

## Offres et transformations

| Offre | Ce qui change pour le client | Page |
|---|---|---|
| Agent IA relié à ses outils | Les mails, avis ou demandes arrivent avec la réponse prête, il valide | `/hermes` |
| Conseil et mise en place IA | Il sait quoi installer et dans quel ordre | `/consultant-ia` |
| Formation IA | L'équipe utilise l'outil avec des règles | `/services/formation-ia-equipe` |
| Application sur mesure, mobile | Un outil qui colle au métier, un seul interlocuteur | `/services/application-sur-mesure`, `/services/developpement-application-mobile` |

Conditions communes : `terms` dans `pricing.ts` (paiement 20/80, aucun contrat de durée).

## Convictions à répéter

- L'IA écrit, un humain valide. (cas Wildcat, Barber)
- L'outil est gratuit, le coût réel ne l'est pas : serveur, modèle, installation, maintenance.
- Un agent se juge sur une tâche précise, pas sur une démo.
- L'IA génère des hypothèses, la data tranche. (canon)
- Bénéfices, pas features : le client veut du temps, pas un agent. (canon)
- Action plutôt que perfection, pour le client. (canon)

## Différenciation démontrable

| Affirmation | Preuve |
|---|---|
| Prix publics en CHF | `/tarifs`, `pricing.ts` |
| Agents en production, pas des démos | `proofs.md` § Installations |
| Les limites sont écrites | « non testé » sur OpenClaw, incidents racontés |
| Basé à Genève, facturation en CHF | home ; à revoir, cf. `identity.md` § Écarts (lieu) |
| Un seul interlocuteur | freelance, 1 personne |

Ne pas affirmer : « le seul », « le premier », « le meilleur ». La recherche concurrents du 19.11.2026 cite des acteurs romands construits (Mivelaz, Qubitech, NexaLab) et Kirako côté français.

## Objections et réponses

| Objection | Réponse autorisée | Source |
|---|---|---|
| « L'IA va envoyer n'importe quoi à mes clients » | Rien ne part sans un clic humain ; l'IA qui lit un mail inconnu n'a aucun outil | cas Wildcat |
| « Ça va coûter cher chaque mois » | Coût de fonctionnement affiché, payé directement par le client au fournisseur | `pricing.ts`, article agent mail |
| « Je vais être coincé avec vous » | Aucun contrat de durée, suivi résiliable d'un mois à l'autre | `pricing.ts` |
| « Où vont mes données ? » | Dire où le serveur et le modèle sont réellement, cas par cas. Ne jamais répondre « en Suisse » par défaut | `proofs.md` § Interdits |
| « Je peux le faire moi-même » | Oui, la procédure est publiée ; montrer le temps et la maintenance que ça demande | canon, garde-fou « recette gratuite » |

## Messages interdits

Garantie de résultat, chiffre inventé ou non daté, posture d'expert infaillible, survente, « hébergé en Suisse » non vérifié, test présenté comme fait alors qu'il ne l'est pas. Détail : `anti-patterns.md`.

## CTA par intention

Un seul CTA par article, en fin de texte, sans insistance.

| Intention du lecteur | CTA | Cible |
|---|---|---|
| Veut installer un agent | « Discuter de votre projet IA » | `/hermes` (ou `/openclaw` quand la page existera) |
| Compare, cherche un prestataire | « Discuter de votre projet IA » | `/consultant-ia` |
| Cherche un prix | Voir la grille | `/tarifs` |
| Veut former son équipe | Demander la formation | `/services/formation-ia-equipe` |
| Projet d'outil métier | Parler du projet | `/services/application-sur-mesure` |
| Pas prêt | Article suivant du cluster | lien interne |
| Prêt à parler | « Réserver un appel découverte » | https://cal.com/jonathan-vouilloz/appel-de-bienvenue |

Le CTA de chaque article planifié est fixé dans la topical map (colonne CTA).
