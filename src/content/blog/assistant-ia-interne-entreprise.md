---
title: "Chatbot interne d'entreprise : RAG, options, prix en Suisse"
h1: "Chatbot interne d'entreprise : un assistant sur tes documents, trois options, leurs prix"
description: "Chatbot interne sur tes documents : RAG, Swisscom, Claude, Copilot ou sur mesure. Prix relevés le 19.11.2026. Demande un devis."
pubDate: 2026-12-08
author: "Jon"
image:
  url: "/images/blog/assistant-ia-interne-entreprise.webp"
  alt: "Illustration éditoriale : statue antique devant une étagère de dossiers, une ligne verte relie un livre ouvert à la statue"
category: "automatisation"
tags:
  - "chatbot-interne"
  - "assistant-ia"
  - "rag"
  - "application-sur-mesure"
  - "outils-ia"
featured: false
draft: false
readingTime: 12
slug: "assistant-ia-interne-entreprise"
faqs:
  - question: "Un chatbot interne peut-il traiter mes documents en Suisse ?"
    answer: "Oui, si l'éditeur le propose. Swisscom le déclare, Infomaniak aussi pour ses services IA ; pour Claude et Copilot, le lieu n'est pas précisé sur les pages lues. Sur mesure, c'est une option à cadrer. Je n'ai vérifié aucune de ces déclarations."
  - question: "Un chatbot interne peut-il inventer des réponses ?"
    answer: "Oui. Le RAG réduit le risque sans le supprimer : si le bon passage n'est pas retrouvé, la réponse peut être fausse. Affiche la source et fais valider les réponses importantes par une personne. Je n'ai mesuré aucun taux d'erreur."
  - question: "Combien coûte la mise en place d'un chatbot interne ?"
    answer: "Aucune source que j'ai lue ne la chiffre. Je n'affiche aucun prix d'assistant interne : une application sur mesure est sur devis, avec un prix ferme en CHF après un premier appel gratuit. L'agent IA dès CHF 1'500 de ma page tarifs ne vaut pas prix d'un assistant sur documents."
---

Un **chatbot interne d'entreprise** est un assistant qui cherche d'abord dans tes documents (contrats, procédures, offres) puis rédige sa réponse avec la source. Pour l'avoir, trois voies : un assistant prêt à l'emploi comme celui de Swisscom, une suite que tu paies déjà par poste (Claude, Copilot), ou une **application sur mesure**. Pour une équipe de 15 personnes, l'abonnement va d'environ CHF 219 à CHF 399 par mois selon la voie, d'après les pages de prix relevées le 19.11.2026.

Je n'ai construit aucun assistant sur documents, et je n'ai testé ni Swisscom, ni Claude Projects, ni Copilot. Cet article explique le principe et analyse la documentation et les pages de prix des éditeurs. Il ne juge pas la qualité des réponses. Si tu veux cadrer ton propre cas, c'est le travail d'une [application sur mesure](/services/application-sur-mesure) : on part de tes documents et de qui a le droit de les lire.

> **L'essentiel en bref**
>
> - Un chatbot interne cherche dans tes documents avant de répondre : c'est le principe du RAG.
> - Pour 15 personnes : Swisscom Professional CHF 399 HT par mois, Copilot Business CHF 218.55 HT en promotion annuelle, Claude Team 300 $ en annuel (relevés du 19.11.2026).
> - Dans un exemple imaginé de 1 000 questions par mois, les tokens d'un assistant sur mesure coûtent entre CHF 1 et 11 par mois.
> - Le coût de mise en place d'un assistant sur mesure n'est chiffré par aucune source que j'ai lue.

## Chatbot interne d'entreprise : un ChatGPT privé sur tes documents, et comment le RAG fonctionne

Un chatbot interne, c'est **un ChatGPT privé sur tes documents** : il ne répond pas de mémoire, il va d'abord chercher les passages utiles dans tes fichiers, puis il rédige en citant d'où vient l'information. Ce mécanisme porte un nom, le **RAG** (retrieval-augmented generation), autrement dit la recherche dans tes documents avant de répondre.

Le principe tient en quatre étapes :

1. **Découper** : chaque document est coupé en passages de quelques paragraphes.
2. **Indexer** : chaque passage est transformé en une suite de nombres (un « embedding ») qui représente son sens, puis rangé dans une base de recherche.
3. **Retrouver** : quand quelqu'un pose une question, l'outil cherche les passages dont le sens est le plus proche.
4. **Rédiger** : le modèle de langage reçoit la question et ces passages, et écrit la réponse en indiquant la source.

Le principe permet de retrouver une clause, résumer une procédure, citer le bon document. Il ne garantit pas la justesse : si le bon passage n'est pas retrouvé, la réponse peut être fausse, et des documents périmés donnent des réponses périmées. Une **IA interne** doit aussi respecter les droits d'accès : l'atelier n'a pas à lire les salaires parce que le fichier est dans la même base.

Anthropic nomme lui-même le mécanisme : quand la base d'un projet approche la limite de contexte, Claude « seamlessly enables RAG mode to expand capacity by up to 10x » (centre d'aide Claude, lu le 19.11.2026).

Le chatbot interne sert ton équipe ; celui de ton site répond à tes clients, avec une autre grille, détaillée dans le [prix d'un chatbot d'entreprise](/blog/chatbot-ia-entreprise-prix). Pour limiter les réponses inventées, voir comment [interroger ses documents avec le RAG](/blog/automatiser-emails-documents-ia).

## Chatbot interne prêt à l'emploi : ce que couvre Swisscom Swiss AI Assistant pour tes documents

Le **Swiss AI Assistant** de Swisscom est un **assistant IA interne** prêt à l'emploi : tu y téléverses tes documents et tu poses tes questions, sans rien développer. Il se vend par palier, en francs, hors TVA. Voici ce qui concerne un chatbot interne, relevé le 19.11.2026 :

| Palier | Prix HT par mois | Utilisateurs | Stockage | Assistants par utilisateur |
|---|---|---|---|---|
| Essential | CHF 149 | jusqu'à 10 | 5 Go | 3 |
| Professional | CHF 399 | jusqu'à 40 | 40 Go | 5 |
| Premium | CHF 799 | jusqu'à 100 | 150 Go | 7 |
| Custom | sur devis | | | |

Pour une équipe de 15 personnes, Essential ne suffit pas : il faut Professional, à CHF 399 HT par mois, soit CHF 26.60 par personne. C'est mon calcul, Swisscom n'affiche pas ce prix. Un essai d'un mois existe.

La page décrit le téléversement de tes fichiers, des « sources de données individuelles », les sources affichées dans les réponses et un historique conservé. Swisscom écrit : « Le traitement et la sauvegarde des données ont lieu exclusivement en Suisse ». Selon Swisscom, tes documents ne servent pas à entraîner l'IA. Ce sont des déclarations de l'éditeur : je n'ai lu aucun audit.

Les limites lues : la connexion passe par Swisscom Login, le SSO et la recherche web sont proposés avec l'édition Custom, et la page ne décrit aucun connecteur vers un logiciel métier. C'est donc une **IA interne à l'entreprise** qui travaille sur les fichiers que tu lui donnes ; rien sur la page n'indique qu'elle se branche sur ton ERP.

Pour les quotas de tokens, la résiliation, les modèles utilisés et les autres assistants du marché, tout est dans mon [comparatif des assistants IA en Suisse](/blog/assistant-ia-suisse-comparatif).

## Claude avec Projects et Microsoft 365 Copilot : un assistant sur tes documents sans rien construire

Si ton équipe paie déjà Claude, ou Microsoft 365 auquel tu peux ajouter Copilot, tu as à portée de main **un assistant IA d'entreprise** capable de lire tes documents, sans rien construire. La différence avec Swisscom : le prix se compte par poste, et les pages lues ne nomment aucun pays de traitement.

| Offre | Prix par utilisateur et par mois | Minimum | Documents | Lieu de traitement |
|---|---|---|---|---|
| Claude Team (siège standard) | 20 $ en annuel, 25 $ au mois | 2 sièges, jusqu'à 150 | Projects avec base de connaissances, partagés | Non précisé sur les pages lues |
| Claude Enterprise | 20 $ en annuel, plus l'usage aux tarifs de l'API | 20 sièges | Projects et connecteurs | Non précisé sur les pages lues |
| Copilot Business | CHF 14.57 HT en annuel (promotion, première année), CHF 20.40 HT au mois | Abonnement Microsoft 365 Business éligible | Dans le service Microsoft 365 | Non précisé sur la page lue |

**Claude Projects** donne à chaque projet son historique et sa base de connaissances, partageable entre collègues sur Team et Enterprise ; la page ne donne pas de limite de fichiers. Pour l'API, la documentation propose un routage « global » par défaut ou limité aux États-Unis, à 1,1 fois le prix. Je n'ai pas trouvé de traitement en Suisse proposé sur les pages lues, ce qui ne prouve pas qu'il n'existe pas. Le détail de la grille est dans mon article sur [Claude pour l'entreprise](/blog/claude-entreprise-prix).

**Copilot Business** est un module de Microsoft 365, dont le prix annuel de CHF 14.57 est promotionnel jusqu'au 31.12.2026. Microsoft indique que les requêtes et les réponses restent dans les limites du service Microsoft 365 et qu'elles ne servent pas à entraîner les modèles, sans nommer de pays sur la page que j'ai lue (en partie).

Pour ChatGPT, je n'ai pas relevé les offres Business et Enterprise le 19.11.2026 : je ne les chiffre pas ici.

Aucune de ces pages ne décrit un assistant branché sur tes logiciels métier avec tes droits d'accès personne par personne : à vérifier éditeur par éditeur.

## Construire un chatbot interne sur mesure : les briques, l'hébergement en Suisse à cadrer, ce que chaque brique coûte

Un chatbot interne sur mesure s'assemble en quatre briques, et une partie seulement a un prix public :

1. **Les documents et leurs droits d'accès** : quels dossiers entrent, qui peut lire quoi.
2. **L'indexation** : un modèle d'embeddings et une base de recherche.
3. **Le modèle de langage** qui rédige la réponse.
4. **L'interface et les journaux** : où l'équipe pose ses questions, et la trace de ce qui a été répondu.

Les embeddings et le modèle de langage se paient au token (un token est un fragment de mot) ; la base de recherche, non chiffrée dans mes sources, se paie à part. Ce sont des prix de briques pour développeur, auxquels un chatbot complet ajoute d'autres coûts. Sur la page de prix d'**Infomaniak** lue le 19.11.2026, en CHF par million de tokens, hors TVA :

| Brique | Modèle | Entrée | Sortie |
|---|---|---|---|
| Embeddings | Bge Multilingual Gemma2 | 0.065 | |
| Embeddings | Qwen3-Embedding-8B | 0.07 | |
| Embeddings | All MiniLM L12 v2 | gratuit | |
| Modèle de langage | Gemma 4 31B | 0.20 | 0.40 |
| Modèle de langage | Mistral Small 4 119B | 0.20 | 0.75 |
| Modèle de langage | Apertus 1.5 70B | 0.70 | 2.50 |
| Modèle de langage | Qwen3.5 397B | 0.80 | 3.60 |

Infomaniak facture à l'usage, sans engagement, et indique sur sa page AI Tools faire tourner ces services dans ses centres de données en Suisse (déclaration que je n'ai pas vérifiée). Chez Anthropic, l'API affiche Sonnet 5.5 à 2 $ en entrée et 10 $ en sortie par million de tokens, et Haiku 5.5 à 0,10 $ et 0,50 $ (documentation lue le 19.11.2026).

L'**hébergement en Suisse** reste une option à cadrer : il dépend du fournisseur du modèle, de la base de recherche et de l'endroit où tourne l'application. Ma page application sur mesure le dit ainsi : « On choisit ensemble l'hébergement ».

Ce qu'aucune source lue ne chiffre : le temps de mise en place, l'import et le nettoyage des documents, la gestion des droits d'accès et la maintenance. C'est là que se trouve l'essentiel du coût d'un **ChatGPT privé** construit pour toi.

Je n'affiche aucun prix d'assistant interne. Une [application sur mesure](/services/application-sur-mesure) est « sur devis » : tu reçois un prix ferme en CHF après un premier appel gratuit. Sur la page des [tarifs](/tarifs), un agent IA démarre à CHF 1'500, sur devis, avec un fonctionnement dès CHF 15 par mois payé par le client, 20 % à la commande, 80 % à la livraison, sans contrat de durée. Cette ligne ne vaut pas prix d'un assistant sur tes documents.

Un coût d'IA que j'ai mesuré, sur un autre type d'outil : l'agent mail de **Wildcat Muay Thai** consomme environ 2 $ d'IA par mois pour 100 demandes, avec une validation humaine avant chaque envoi. C'est [l'agent qui répond aux mails](/blog/agent-ia-repondre-mails-clients), un autre usage : je le donne comme simple repère de coût d'IA à l'usage.

## Prix d'un chatbot interne par mois : l'exemple de 15 personnes et 1 000 questions, en francs

Dans cet exemple, **le prix d'un chatbot interne** en tokens reste de quelques francs par mois ; l'abonnement d'une suite pour 15 personnes se compte en centaines de francs. Les volumes sont imaginés pour l'exemple : ce calcul n'est ni une mesure ni un devis.

L'hypothèse : 15 utilisateurs, 1 000 questions par mois. Chaque question envoie 4 000 tokens au modèle (la question et les passages retrouvés) et en reçoit 500 en réponse. Soit 4 millions de tokens en entrée et 0,5 million en sortie par mois. Les documents représentent 5 millions de tokens, indexés une fois.

| Voie | Calcul | Par mois |
|---|---|---|
| Mistral Small 4 (Infomaniak) | 4 × 0.20 + 0,5 × 0.75 | CHF 1.18 |
| Apertus 1.5 70B (Infomaniak) | 4 × 0.70 + 0,5 × 2.50 | CHF 4.05 |
| Qwen3.5 397B (Infomaniak) | 4 × 0.80 + 0,5 × 3.60 | CHF 5.00 |
| Claude Haiku 5.5 (API) | 4 × 0,10 $ + 0,5 × 0,50 $ = 0,65 $ | environ CHF 0.55 |
| Claude Sonnet 5.5 (API) | 4 × 2 $ + 0,5 × 10 $ = 13 $ | environ CHF 11 |
| Indexation, Bge Multilingual Gemma2 | 5 × 0.065, une seule fois | CHF 0.33 une fois |
| Swisscom Professional | palier jusqu'à 40 utilisateurs | CHF 399 HT |
| Claude Team, 15 sièges | 15 × 20 $ = 300 $ en annuel ; 15 × 25 $ = 375 $ au mois | environ CHF 253 ou CHF 316 |
| Copilot Business, 15 sièges | 15 × 14.57 en promotion annuelle ; 15 × 20.40 au mois | CHF 218.55 ou CHF 306.00 HT |

Les montants en dollars sont convertis au taux de référence de la BCE du 18.11.2026 (EUR/CHF 0,9243, EUR/USD 1,0968), soit 1 USD = 0,8427 CHF. Ils sont indicatifs : le montant facturé suivra le taux du jour. Copilot s'ajoute à un abonnement Microsoft 365 Business, non compté ici.

Ce que le tableau ne contient pas : l'hébergement de l'application, la base de recherche, l'interface et la mise en place. Aucune de ces lignes n'a de prix dans mes sources. Les lignes de tokens et les abonnements ne se comparent donc pas directement : le sur mesure n'est ni « moins cher » ni « plus cher » tant qu'il n'y a pas de devis. Ce que dit l'exemple, c'est que **le coût d'un assistant sur tes documents** ne se joue pas sur les tokens.

## Quelle option choisir pour un chatbot interne : cinq questions avant de décider

Le bon choix dépend moins de l'outil que de tes documents et de tes contraintes. Cinq questions à se poser avant de comparer des prix :

1. Tes documents sont-ils déjà dans Microsoft 365 ou chez Google ? Alors commence par l'assistant de cette suite.
2. Doivent-ils être traités en Suisse ? Si oui, regarde ce que chaque éditeur déclare, et fais-le confirmer par écrit.
3. Faut-il des droits d'accès différents selon les personnes ? Sur les pages lues, c'est le point le moins décrit.
4. L'assistant doit-il seulement répondre, ou aussi agir (créer une offre, modifier un dossier) ? S'il agit, c'est un agent, et il faut séparer la lecture de l'action, avec une validation humaine : je l'explique dans les [garde-fous d'un agent IA](/blog/garde-fous-ia-validations-audit).
5. Combien de personnes l'utiliseront ? Un prix par poste et un prix par palier ne se comparent pas de la même façon à 5 ou à 30 personnes.

Mon verdict par profil, sans classement. Pour tester vite sans développement, un assistant prêt à l'emploi. Si tes documents vivent déjà dans une suite, l'assistant de cette suite. Le sur mesure se justifie quand les droits d'accès, l'intégration à un logiciel métier ou le lieu de traitement imposent un cadrage. Et si un logiciel existant couvre ton besoin, prends-le : c'est aussi ce que dit ma page application sur mesure.

Pour le cadre légal autour de tes données, lis mon article [IA et nLPD en Suisse](/blog/ia-nlpd-conformite-suisse). Il ne remplace pas l'avis d'un juriste.

## FAQ chatbot interne : hébergement en Suisse, réponses fausses, coût de mise en place

### Un chatbot interne peut-il traiter mes documents en Suisse ?

Oui, si l'éditeur le propose. Swisscom le déclare, Infomaniak aussi pour ses services IA ; pour Claude et Copilot, le lieu n'est pas précisé sur les pages lues. Sur mesure, c'est une option à cadrer. Je n'ai vérifié aucune de ces déclarations.

### Un chatbot interne peut-il inventer des réponses ?

Oui. Le RAG réduit le risque sans le supprimer : si le bon passage n'est pas retrouvé, la réponse peut être fausse. Affiche la source et fais valider les réponses importantes par une personne. Je n'ai mesuré aucun taux d'erreur.

### Combien coûte la mise en place d'un chatbot interne ?

Aucune source que j'ai lue ne la chiffre. Je n'affiche aucun prix d'assistant interne : une application sur mesure est sur devis, avec un prix ferme en CHF après un premier appel gratuit. L'agent IA dès CHF 1'500 de ma page tarifs ne vaut pas prix d'un assistant sur documents.

Trois questions encore, en bref :

- Quelle différence avec un chatbot de site web ? Il s'adresse à tes clients, pas à ton équipe, et suit une autre grille de prix (voir le lien plus haut).
- Peut-on utiliser ChatGPT en privé ? Je n'ai pas pu relire les offres entreprise d'OpenAI le 19.11.2026 ; le comparatif des assistants fait le point sur ce qui a été relevé.
- Jon Labs a-t-il déjà construit un assistant sur documents ? Non. Cet article analyse la documentation des éditeurs.

---

## Conclusion : chatbot interne, quelle voie selon tes documents, ton lieu de traitement et ton budget mensuel

Pour une équipe de 15 personnes, l'abonnement d'un assistant prêt à l'emploi ou d'une suite coûte de CHF 219 à CHF 399 par mois, et les tokens d'un assistant sur mesure quelques francs. Le vrai coût d'un assistant sur mesure est dans sa mise en place : commence par décider où tes documents doivent être traités et qui a le droit de lire quoi.

Si ton cas demande des droits d'accès précis ou un branchement sur ton logiciel métier, décris-le-moi. Je te dis quelle voie est la plus simple, même si ce n'est pas une [application sur mesure](/services/application-sur-mesure).

[**Discuter de ton projet d'assistant interne →**](/contact?utm_source=blog&utm_medium=article&utm_campaign=assistant-ia-interne-entreprise)

---

## Sources et Références

Pages lues le 19.11.2026.

- [Swisscom, Swiss AI Assistant](https://www.swisscom.ch/fr/business/pme/it-cloud/new-way-of-working/swiss-ai-assistant.html) : paliers, stockage, assistants par utilisateur, déclaration sur le lieu des données.
- [Anthropic, plans et tarifs de Claude](https://claude.com/pricing) : Team et Enterprise, en dollars.
- [Centre d'aide Claude, What are projects](https://support.claude.com/en/articles/9517075-what-are-projects) : Projects et mode RAG.
- [Anthropic, prix de l'API](https://platform.claude.com/docs/en/about-claude/pricing) : Sonnet 5.5, Haiku 5.5, options de routage.
- [Microsoft 365 Copilot Business (fr-CH)](https://www.microsoft.com/fr-ch/microsoft-365-copilot/business) : prix en CHF, données ; page lue en partie.
- [Infomaniak, prix AI Tools](https://www.infomaniak.com/en/hosting/ai-tools/prices) : modèles et embeddings, CHF hors TVA.
- [Infomaniak, AI Tools](https://www.infomaniak.com/en/hosting/ai-tools) : lieu de traitement déclaré.
- [BCE, taux de référence EUR/CHF](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-chf.en.html) : taux du 18.11.2026.
- Mes prix : [tarifs](/tarifs) et page application sur mesure ; coût de l'agent mail de Wildcat Muay Thai : article sur l'agent IA qui répond aux mails.
