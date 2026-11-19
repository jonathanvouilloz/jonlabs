---
title: "Serveur MCP en PME : à quoi il sert, ses risques, son coût"
h1: "Serveur MCP en entreprise : c'est quoi, ce que publient les éditeurs, risques et coût"
description: "Le serveur MCP expliqué à un dirigeant : ce que publient Google, Microsoft, HubSpot, les risques, le coût. Relevé du 19.11.2026. Demande un devis."
pubDate: 2026-12-24
author: "Jon"
image:
  url: "/images/blog/serveur-mcp-entreprise.webp"
  alt: "Illustration éditoriale : statue antique tenant un câble à plusieurs fiches, une ligne verte relie des objets du quotidien"
category: "automatisation"
tags:
  - "mcp"
  - "agent-ia"
  - "integration"
  - "securite"
  - "outils-ia"
featured: false
draft: false
readingTime: 11
slug: "serveur-mcp-entreprise"
faqs:
  - question: "C'est quoi un serveur MCP, en une phrase ?"
    answer: "Un programme qui expose les données et les actions d'un logiciel dans le format du Model Context Protocol, pour qu'un assistant ou un agent IA compatible puisse s'en servir."
  - question: "Un serveur MCP est-il sûr pour les données de mon entreprise ?"
    answer: "Rien ne le garantit par défaut : la spécification reconnaît qu'elle ne peut pas imposer ses principes de sécurité. Tout dépend de qui publie le serveur et des droits que tu lui donnes : lecture seule d'abord, validation humaine avant chaque action."
  - question: "Faut-il un serveur MCP pour utiliser un assistant IA avec mes outils ?"
    answer: "Pas forcément. Regarde d'abord si l'éditeur de ton logiciel en publie un, ou si un outil sans code couvre ton besoin. Un serveur sur mesure se justifie quand plusieurs agents doivent accéder au même outil."
---

Un **serveur MCP** est un adaptateur qui laisse un assistant ou un agent IA lire les données d'un logiciel et y déclencher des actions, selon une règle commune à tous les outils compatibles. Cet article explique, pour un dirigeant, ce que dit la définition officielle, ce que Google, Microsoft et HubSpot publient eux-mêmes, ce que la spécification dit des risques et ce qui fait le prix d'un connecteur.

C'est une explication sur documentation : chaque fait sur le protocole et sur les éditeurs vient de pages relevées le 19.11.2026, et le protocole change vite. Je n'ai testé aucun serveur d'éditeur. Mon seul élément de première main : j'ai construit un serveur MCP pour mon propre système interne et pour Inkmesh, mon projet open source. Cet article ne remplace pas la documentation technique, qui est sur le [site du protocole](https://modelcontextprotocol.io). Si ton outil n'a pas de serveur et que tu envisages un [connecteur sur mesure](/services/application-sur-mesure), la dernière partie dit ce qui en fait le coût.

> **L'essentiel en bref**
>
> - Le MCP est un standard ouvert pour relier une application d'IA à des logiciels externes ; version courante au 19.11.2026 : celle du 28.07.2026.
> - Anthropic l'a lancé puis donné en décembre 2025 ; il est aujourd'hui gouverné dans le cadre de la Linux Foundation.
> - Google publie un serveur MCP pour Gmail en préversion, HubSpot un serveur ouvert à tous ses comptes ; je n'en ai pas trouvé sur les pages de Bexio lues.
> - La spécification demande un humain capable de refuser les actions d'un outil, et reconnaît que le protocole ne peut pas l'imposer.
> - Je n'affiche aucun prix de connecteur : le coût dépend surtout du nombre d'outils exposés, de l'écriture et de la maintenance.

## Serveur MCP : la définition officielle et les cinq mots qu'un dirigeant doit connaître

**Le MCP**, pour Model Context Protocol, se définit sur son site officiel comme « an open-source standard for connecting AI applications to external systems » (page « What is the Model Context Protocol (MCP)? », relevée le 19.11.2026). Traduction libre : un standard ouvert pour relier des applications d'IA à des systèmes externes. Retiens de cette **définition du MCP** l'idée de règle commune, au lieu d'un branchement par assistant.

Au 19.11.2026, la version courante de la spécification est celle du 28 juillet 2026. Selon la page de versionnement du projet, cette date marque le dernier changement incompatible, et une fonction dépréciée reste disponible au moins douze mois. L'article qui annonce la version mentionne entre autres une autorisation durcie. Rien à faire de ton côté, sauf retenir qu'un connecteur doit suivre ces versions.

Anthropic, l'éditeur de Claude, a lancé **le protocole MCP** puis l'a donné en décembre 2025 à l'Agentic AI Foundation, que le billet du projet daté du 09.12.2025 décrit comme « a directed fund under the Linux Foundation ». La page de gouvernance, relevée le 19.11.2026, présente le projet comme « a Series of LF Projects, LLC », avec le code et les spécifications sous licence Apache 2.0. Anthropic est à l'origine du protocole, mais ne le gouverne plus.

Cinq mots suffisent pour suivre une discussion avec un prestataire. Tous viennent de la spécification relevée le 19.11.2026 :

1. **Serveur** : le programme qui expose les capacités d'un logiciel (ta messagerie, ton CRM) dans le format du protocole.
2. **Hôte et client** : l'hôte est l'application d'IA que tu utilises et qui ouvre la connexion ; le client est le connecteur, à l'intérieur de l'hôte, qui parle à un serveur.
3. **Outils** : les actions que l'IA peut déclencher, comme créer un brouillon ou mettre à jour une fiche.
4. **Ressources et prompts** : les ressources sont les données que l'IA peut lire ; les prompts, des consignes types que le serveur met à disposition.
5. **Autorisation** : la façon dont le serveur sait qui demande l'accès. La spécification écrit « Authorization is OPTIONAL ». Pour un serveur distant, elle s'appuie sur OAuth, la méthode qui te fait cliquer sur « autoriser » pour ouvrir à une application un accès limité à ton compte, sans lui confier ton mot de passe. Pour un serveur lancé sur le poste, les identifiants viennent de la machine.

Selon la page Transports de la spécification, un serveur tourne soit sur le poste de l'utilisateur, lancé par l'application d'IA, soit à distance, atteint par Internet. Un serveur distant est un service à exploiter, et ça se retrouve dans le coût.

## Serveur MCP ou API : ce que le MCP change pour relier un agent à tes outils

Une API est la porte d'entrée d'un logiciel, pensée pour d'autres programmes, et chaque éditeur a la sienne. Un serveur MCP se pose devant et décrit dans un format commun les actions et les données disponibles, pour que n'importe quel assistant compatible les trouve. Mon analyse, que la spécification ne formule pas ainsi : un serveur MCP pour un logiciel de gestion a besoin d'un accès à ce logiciel, qui passe souvent par son API. Les deux se complètent.

Le MCP vaut la peine quand plusieurs agents doivent accéder au même outil, ou quand l'éditeur publie déjà un serveur. Pour un seul scénario simple, un outil sans code ou l'API suffisent souvent. Le choix entre ces voies est l'objet de mon guide pour [brancher un agent IA sur tes outils existants](/blog/integrer-agent-ia-outils-existants), je ne le refais pas ici.

J'ai construit un serveur MCP pour mon propre système interne et pour Inkmesh, mon projet open source. La fiche de mon [système interne](/portfolio/systeme-ia-jonlabs), qui gère ma facturation et mon CRM, l'écrit ainsi : « Une API et un serveur MCP permettent à l'agent d'y travailler, avec des accès limités par périmètre ». Sur la fiche d'[Inkmesh](/portfolio/inkmesh), chaque agent a son propre jeton, révocable. Je n'ai rien mesuré sur ces serveurs, et ce sont mes outils, pas ceux d'un client.

## Serveur MCP pour Bexio, ta messagerie ou un CRM : ce que les éditeurs publient eux-mêmes

Avant de payer un connecteur, regarde si l'éditeur de ton logiciel publie déjà un serveur MCP. Voici ce que j'ai relevé le 19.11.2026 sur leurs pages. Formules, licences et prix de ces serveurs : non relevés.

| Outil | Serveur publié par l'éditeur | Statut relevé le 19.11.2026 | Ce que la page dit |
|---|---|---|---|
| Bexio | Je n'en ai pas trouvé sur les pages de Bexio lues | Non applicable | API documentée ; aucune mention du MCP sur les pages lues |
| Gmail | Oui, serveur distant de Google | Préversion pour développeurs | Brouillons, lecture, recherche, étiquettes ; aucun outil d'envoi dans la liste lue |
| Outlook, Microsoft 365 | Serveurs Mail, Calendar, Teams et d'autres | Présentés comme anciens, conservés pour test et compatibilité | Microsoft oriente vers Work IQ |
| HubSpot | Oui, serveur distant de l'éditeur | Disponible pour tous les comptes depuis le 13.04.2026 | Lecture et écriture sur le CRM, permissions HubSpot respectées |

**Bexio.** J'ai cherché « MCP » dans la documentation de l'API, la page API, la page sur l'IA de Bexio, l'accueil et le blog en français, et les plans du site, sans résultat. Je n'ai pas parcouru la Marketplace ni l'aide. Ce que l'IA de Bexio fait déjà et ce que son API permet sont dans mon article sur un [agent IA branché sur Bexio](/blog/agent-ia-bexio).

**Gmail.** Google écrit « Gmail offers a remote Model Context Protocol (MCP) server », dans son programme Developer Preview, une préversion pour développeurs. La liste d'outils lue permet de préparer des brouillons, pas d'envoyer. Google exige un client OAuth marqué comme agentique et indique que ses serveurs MCP Workspace refusent les autres clients depuis le 11.11.2026.

**Outlook et Microsoft 365.** Microsoft range ses serveurs Copilot, Calendar, Mail, SharePoint, OneDrive, Teams, User et Word dans une expérience « legacy », « retained for testing and backward compatibility ». Sa documentation demande de leur préférer Work IQ, un point d'accès unique de dix outils génériques, disponible selon l'espace Microsoft de l'entreprise. Licences requises : non vérifiées.

**HubSpot.** Dans son journal des changements, HubSpot annonce le 13.04.2026 un serveur distant « generally available to all HubSpot accounts ». Selon ses pages, il lit et écrit dans le CRM, passe par OAuth et respecte les permissions HubSpot existantes.

Pour le **MCP dans Claude**, une précision tirée de la documentation de Claude Code : Anthropic examine les connecteurs de son annuaire selon ses critères, mais « does not security-audit or manage any MCP server ». Un serveur publié par un tiers ou par la communauté reste donc non vérifié, et je n'en recommande aucun. Ce tableau date du 19.11.2026 : les statuts bougent.

## Sécurité d'un serveur MCP : ce que la spécification dit, et la règle lecture / action

Un serveur MCP donne à l'agent le pouvoir d'agir dans ton logiciel, et la spécification le dit sans détour : « Tools represent arbitrary code execution and must be treated with appropriate caution. » (section Security and Trust & Safety, relevée le 19.11.2026). Traduction libre : les outils équivalent à exécuter du code arbitraire, à traiter avec prudence.

La page Tools de la spécification ajoute : « there SHOULD always be a human in the loop with the ability to deny tool invocations ». C'est une recommandation, et la même spécification admet « While MCP itself cannot enforce these security principles at the protocol level ». Autrement dit, le protocole ne fait pas respecter ces règles, ton installation doit le faire. La spécification demande aussi de tenir pour non fiables les descriptions d'outils d'un serveur qui n'est pas de confiance.

Pour **la sécurité du MCP**, deux phrases d'Anthropic complètent le tableau, chacune dans sa documentation. Celle de Claude Code, page MCP : « Verify you trust each server before connecting it. Servers that fetch external content can expose you to prompt injection risk. » Une injection de contenu, c'est un texte piégé dans un mail ou une page web que l'agent lit et qui tente de lui donner des ordres. Le centre d'aide des connecteurs de Claude, lui, écrit : « Custom connectors that use a shared credential reach whatever that credential can access. » Il conseille « Only connect services you trust and need for your workflows. », et précise qu'un propriétaire peut régler chaque outil sur toujours autoriser, demander une validation ou bloquer, par exemple pour lire sans envoyer.

Dans mes installations, l'IA qui lit n'a aucun outil ; seul le clic envoie. Je n'ai pas éprouvé cette règle sur un serveur MCP d'éditeur, mais elle se transpose : un serveur en lecture seule d'abord, l'écriture derrière une validation humaine, un identifiant par agent qu'on peut retirer. Le serveur Gmail va dans ce sens : sa liste d'outils lue ne contient aucun outil d'envoi. Le détail est dans mon article sur les [garde-fous d'un agent IA](/blog/garde-fous-ia-validations-audit). Aucun de ces réglages ne vaut avis juridique.

## Coût d'un connecteur MCP sur mesure : ce qui fait le prix, sans montant inventé

Je n'affiche aucun prix pour **un connecteur MCP**. Sur ma page [tarifs](/tarifs), la ligne la plus proche est l'agent IA : dès CHF 1'500, sur devis, avec un fonctionnement dès CHF 15 par mois payé par le client, 20 % à la commande et 80 % à la livraison, sans contrat de durée. Elle ne vaut pas prix d'un connecteur. Une [application sur mesure](/services/application-sur-mesure) se chiffre sur devis : après un premier appel gratuit, tu reçois un prix ferme en CHF.

Ce qui fait le prix d'un connecteur, dans l'ordre où je le regarderais :

1. Le nombre d'outils exposés : lire un dossier client demande moins de travail que dix actions différentes.
2. Lecture seule ou écriture : l'écriture exige une validation humaine, un journal et des tests sur chaque action.
3. L'authentification : un identifiant par agent, des accès limités par périmètre, une révocation possible sans tout couper.
4. L'hébergement et l'exploitation : un serveur distant tourne quelque part, se surveille et se met à jour. Demande qui s'en charge, et où.
5. La maintenance : quand l'API de ton logiciel ou la spécification change, le connecteur suit. La dépréciation d'au moins douze mois aide à planifier.

Avant tout ça, vérifie si l'éditeur publie déjà un serveur ou si un outil sans code suffit. Si tu hésites à le construire toi-même, mon article [créer un agent IA ou le faire faire](/blog/creer-agent-ia-ou-faire-faire) pose ce choix sur douze mois, et mon guide pour [installer Hermes Agent](/blog/installer-hermes-agent) montre ce que demande un agent qu'on fait tourner soi-même.

## FAQ serveur MCP : c'est quoi, est-ce gratuit, faut-il en avoir un

### C'est quoi un serveur MCP, en une phrase ?

Un programme qui expose les données et les actions d'un logiciel dans le format du Model Context Protocol, pour qu'un assistant ou un agent IA compatible puisse s'en servir.

### Un serveur MCP est-il sûr pour les données de mon entreprise ?

Rien ne le garantit par défaut : la spécification reconnaît qu'elle ne peut pas imposer ses principes de sécurité. Tout dépend de qui publie le serveur et des droits que tu lui donnes : lecture seule d'abord, validation humaine avant chaque action.

### Faut-il un serveur MCP pour utiliser un assistant IA avec mes outils ?

Pas forcément. Regarde d'abord si l'éditeur de ton logiciel en publie un, ou si un outil sans code couvre ton besoin. Un serveur sur mesure se justifie quand plusieurs agents doivent accéder au même outil.

Trois questions encore, en bref :

- C'est quoi le MCP, et est-il gratuit ? Un protocole ouvert, code et spécifications sous licence Apache 2.0 ; mettre en place et faire tourner un serveur a un coût.
- Existe-t-il un MCP pour Bexio ? Je n'en ai pas trouvé sur les pages de Bexio lues le 19.11.2026.
- Le MCP est-il compatible avec la nLPD ? Hors du périmètre de cet article : lis [IA et nLPD en Suisse](/blog/ia-nlpd-conformite-suisse), qui ne remplace pas un juriste.

---

## Conclusion : serveur MCP en PME, que décider selon tes outils

Mon avis, sur documentation et sans test d'un serveur d'éditeur :

- Sur HubSpot, le serveur de l'éditeur passe avant tout connecteur sur mesure.
- Sur Gmail, j'attendrais la fin de la préversion avant de bâtir un processus dessus.
- Sur Outlook, Microsoft oriente lui-même vers Work IQ.
- Sur Bexio ou un logiciel sans serveur trouvé, un connecteur se discute, en lecture seule d'abord.

Si ton outil n'a pas de serveur et que tu veux savoir ce que coûterait un connecteur, écris-moi. On part de ce que ton éditeur publie déjà, puis du nombre d'actions dont ton agent a besoin.

[**Discuter de ton connecteur sur mesure →**](/contact?utm_source=blog&utm_medium=article&utm_campaign=serveur-mcp-entreprise)

---

## Sources et Références

Pages lues en texte brut le 19.11.2026.

- [Model Context Protocol, What is the Model Context Protocol (MCP)?](https://modelcontextprotocol.io/docs/getting-started/intro) : définition.
- [Spécification MCP, version 2026-07-28](https://modelcontextprotocol.io/specification/latest) : hôtes, clients, serveurs, sécurité.
- [Spécification MCP, Tools](https://modelcontextprotocol.io/specification/latest/server/tools) : humain capable de refuser.
- [Spécification MCP, Authorization](https://modelcontextprotocol.io/specification/latest/basic/authorization) et [Transports](https://modelcontextprotocol.io/specification/latest/basic/transports).
- [Model Context Protocol, Versioning](https://modelcontextprotocol.io/docs/learn/versioning) et [Governance](https://modelcontextprotocol.io/community/governance).
- [Blog MCP, The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) et [MCP joins the Agentic AI Foundation](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/).
- [Centre d'aide Claude, connecteurs](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities).
- [Claude Code, MCP](https://code.claude.com/docs/en/mcp) et [sécurité](https://code.claude.com/docs/en/security).
- [Google, serveur MCP Gmail](https://developers.google.com/workspace/gmail/api/guides/configure-mcp-server) et [notes de version Gmail](https://developers.google.com/workspace/gmail/release-notes).
- [Microsoft, serveurs MCP d'Agent 365](https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview).
- [HubSpot, annonce du serveur MCP distant](https://developers.hubspot.com/changelog/remote-hubspot-mcp-server-is-now-generally-available) et [documentation](https://developers.hubspot.com/docs/build-with-ai/remote-mcp-server).
- [Bexio, documentation API](https://docs.bexio.com), [page API](https://www.bexio.com/fr-CH/api) et [IA de Bexio](https://www.bexio.com/fr-CH/ia-de-bexio) : aucune mention du MCP.
- Mes prix : page [tarifs](/tarifs) ; fiches [système interne](/portfolio/systeme-ia-jonlabs) et [Inkmesh](/portfolio/inkmesh).
