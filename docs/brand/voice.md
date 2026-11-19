---
project: jonlabs
extends: identity
status: provisional
sources:
  - ../brand/voice.md (canon)
  - ../brand/principes-ecriture.md (canon)
  - docs/DECISIONS.md (17.11.2026 : le site vouvoie, le blog tutoie)
  - src/content/blog/agent-ia-repondre-mails-clients.md
  - src/content/blog/meilleurs-vps-hermes-agent-suisse.md
  - src/content/blog/openbot-souverainete-self-hosted.md
  - src/pages/index.astro
corpus_status: partiel (3 articles et la home relus sur 49 articles)
validated_on: "[?]"
review_due: "2026-12-31"
---

# Voix : Jon Labs sur jonlabs.ch

> La voix de Jon est définie une fois dans le canon `noyau/brand/voice.md`. Ce document ne garde que ce qu'il faut pour écrire **le blog et les pages du site**. Les canaux sociaux (X, LinkedIn, YouTube) restent dans le canon et dans `atelier/`.

## Qui parle

Jonathan Vouilloz, signature « Jon ». Il écrit à la première personne du singulier. Il a installé ce dont il parle, ou il dit qu'il ne l'a pas fait.

## Voix stable

Comme s'il expliquait un sujet à un ami intelligent autour d'un café : direct, concret, sans esbroufe. Il part d'une observation et arrive à une conclusion devant le lecteur. Il parle de sa façon de faire, pas de la bonne façon.

## Dimensions opérationnelles

| Dimension | Réglage | Geste de relecture |
|---|---|---|
| Direct | Réponse dans la première phrase | Si le premier paragraphe ne répond pas à la requête, on le réécrit |
| Concret | Un chiffre, un cas ou un prix par section | Une section sans rien de vérifiable est coupée ou nourrie |
| Calibré | Dit ce qui n'est pas testé, pas mesuré | Chercher les affirmations sans source, les étiqueter ou les retirer |
| Simple | Le mot courant gagne | Un terme technique est traduit dans la même phrase |
| Léger | Une touche d'humour possible, jamais la posture grave | Sur une page d'offre : aucune vanne |

Plancher de clarté (mot court, mot inutile coupé, vrai verbe, zéro cliché) : `noyau/brand/principes-ecriture.md`, curseur « coupe agressive » pour le SEO.

## Registre

| Surface | Registre |
|---|---|
| Blog (`src/content/blog`) | Tutoiement |
| Home, pages d'offre, contact, tarifs | Vouvoiement |
| FAQ d'un article | Tutoiement, comme l'article |

## Matrice de tons

| État du lecteur | Ton | À faire | À éviter |
|---|---|---|---|
| Découvre un outil | Pédagogue, sans jargon | Définir en une phrase, donner un exemple réel | Historique du produit |
| Compare deux options | Tranché | Tableau, verdict par profil de PME | « Ça dépend » sans critère |
| Cherche un prix | Factuel | Fourchette en CHF, datée, ce qui est inclus | Prix « sur demande » sans ordre de grandeur |
| Inquiet pour ses données | Posé, précis | Dire où tournent le serveur et le modèle | Rassurer sans fait, « hébergé en Suisse » par réflexe |
| Prêt à déléguer | Sobre | Un CTA, le périmètre, le délai annoncé | Urgence, rareté fabriquée |
| Veut le faire lui-même | Encourageant, lucide | Donner la procédure, montrer le temps et la maintenance | Décourager, ou cacher l'effort |

## Variations par canal

- **Article de blog** : « je » et « tu », réponse directe, bloc « L'essentiel en bref », tableaux, FAQ, un CTA en fin.
- **Page d'offre** : « je » et « vous », bénéfice avant fonctionnement, prix affiché, preuves chiffrées.
- **Autres canaux** : canon.

## Ça sonne juste

Extraits réels, à ne pas paraphraser en générique :

- « L'IA écrit le brouillon de réponse, un humain clique sur Envoyer, et le mail part. » (article agent mail)
- « Compte environ 2 $ par mois d'IA pour 100 demandes de clients, sur un serveur que tu as déjà. » (article agent mail)
- « Je n'ai pas de prix vérifié, donc je n'en donne pas. » (article OpenBot, version du 16.11.2026)
- « Pour OpenClaw, je n'ai pas refait le test ici. » (article OpenBot)
- « C'est pour ça que je suis monté à 8 Go plutôt que 4. » (article VPS)
- « Il est hors de Suisse, ce que je dis aussi là-bas. » (brouillon installer-hermes-agent)
- « Je conçois et je mets en production les systèmes IA qui prennent le répétitif, pour que vos équipes gardent l'essentiel. » (home)
- « Je vais être 100% transparent sur les tarifs dans le web en Suisse. Les vrais chiffres. » (canon, `sounds_like`)

## Ça sonne faux

- « Dans un contexte numérique en constante évolution, il est crucial de... » (canon)
- « Notre approche innovante permet de synergiser vos assets digitaux. » (canon)
- « En tant qu'expert reconnu... » (canon)
- « Nous » pour parler de Jon Labs : il est seul.
- « Une solution clé en main, hébergée en Suisse, qui révolutionne votre quotidien. »

Test : si la phrase peut être signée par n'importe quelle agence dans n'importe quel pays, elle est mauvaise.
