---
title: "Agent IA Bexio : IA native, API et limites pour une PME"
h1: "Agent IA Bexio : ce que l'IA de Bexio fait déjà, ce que l'API permet et quand faire faire"
description: "Ce que l'IA de Bexio fait déjà, ce que l'API documente, trois scénarios d'agent et leurs limites. Relevé du 19.11.2026. Cadre ton projet."
pubDate: 2026-12-12
author: "Jon"
image:
  url: "/images/blog/agent-ia-bexio.webp"
  alt: "Illustration éditoriale : statue antique tenant un grand livre de comptes, une ligne verte en sort"
category: "automatisation"
tags:
  - "agent-ia"
  - "bexio"
  - "fiduciaire"
  - "api"
  - "outils-ia"
featured: false
draft: false
readingTime: 11
slug: "agent-ia-bexio"
faqs:
  - question: "Faut-il une formule Bexio particulière pour utiliser l'API ?"
    answer: "Je ne sais pas : la documentation et l'aide lues le 19.11.2026 ne le disent pas. L'aide mentionne un accès gratuit à l'API avec OAuth, sans préciser la formule. Pose la question à Bexio avant tout devis."
  - question: "Un agent IA peut-il saisir les factures dans Bexio tout seul ?"
    answer: "La documentation liste une ressource pour les factures fournisseurs, et Bexio annonce sa propre saisie automatique des factures standard pour 2027. Je garderais une validation humaine avant chaque écriture. Je n'ai réalisé aucune intégration de ce type."
  - question: "Un prestataire peut-il utiliser mon jeton personnel Bexio ?"
    answer: "Non. Selon la documentation, le jeton personnel est « strictly intended for personal use ». Un prestataire passe par OAuth, avec les droits que tu lui accordes."
---

Avant de payer un **agent IA Bexio**, regarde ce que Bexio fait déjà : selon sa page relevée le 19.11.2026, son IA lit les justificatifs scannés et propose le compte d'écriture dès la formule Advanced. Son API, documentée, couvre entre autres les factures, les rappels, les achats et les écritures manuelles, avec des droits de lecture et d'écriture séparés. Un agent sur mesure ne se justifie que là où l'IA de Bexio s'arrête.

Je n'ai réalisé aucune intégration Bexio, et Jon Labs n'en a aucune documentée. Tout ce qui suit vient des pages de Bexio et de sa documentation, lues le 19.11.2026. Les trois scénarios plus bas sont écrits au conditionnel, à partir de ce que la documentation décrit, sans test et sans chiffre de gain. Si tu tiens une fiduciaire, ma page sur l'[IA pour fiduciaires](/metiers/ia-fiduciaire) décrit mon offre ; cet article sert à décider avant d'en arriver là.

> **L'essentiel en bref**
>
> - Selon Bexio, son IA lit les justificatifs scannés et propose le compte dès la formule Advanced ; la saisie automatique des factures standard est « prévue pour 2027 ».
> - L'API de Bexio passe par OAuth 2.0 et sépare les droits de lecture et d'écriture ; le jeton personnel est réservé à un usage personnel.
> - Au 19.11.2026, les formules Bexio vont de 35 à 119 CHF par mois hors TVA, d'après la page de prix en allemand.
> - Non vérifié : la formule qui ouvre l'API, la valeur de la limite de débit, les webhooks.

## L'IA de Bexio : ce que Bexio fait déjà avant de payer un agent IA Bexio

Bexio a déjà sa propre IA, incluse dès la formule Advanced, et c'est la première chose que je vérifierais avant de parler d'agent. Le tableau reprend la page « IA de bexio » au 19.11.2026, donc le discours de l'éditeur : je n'ai testé aucune de ces fonctions.

| Fonction | Formule | Statut selon Bexio |
|---|---|---|
| Assistant par chat ou par la voix : « Pilote ton compte bexio par commande vocale ou par chat » | Dès Advanced | Disponible |
| Saisie à partir d'un justificatif scanné | Dès Advanced | Disponible |
| Suggestion du compte d'écriture | Dès Advanced | Disponible |
| Saisie automatique des factures standard | Non précisé | « Prévue pour 2027 » |

Les scans IA sont comptés par mois, d'après la page de prix : 50 en Advanced, 100 en Optima, illimités en Ultimate (la page précise un usage raisonnable d'environ 1 000), aucun en Basic.

Deux précisions de Bexio comptent pour la suite. La première : « aucune écriture n'est comptabilisée sans ton accord ». La seconde : des « interfaces d'IA externes », que la page ne nomme pas, peuvent aider à lire les justificatifs ; Bexio écrit que les données y sont alors « temporairement cryptées pendant le traitement » et qu'elles ne servent pas à entraîner des modèles d'IA publics.

La saisie automatique, elle, reste un projet annoncé pour 2027. Si ton besoin se résume à saisir des factures standard, regarde ce que Bexio livrera avant de payer quelqu'un pour le faire.

Une bonne partie de ce qu'on imagine confier à un agent, Bexio le fait donc déjà ou l'a annoncé. Un agent n'a d'intérêt que pour le reste. La question de savoir si un agent externe peut piloter l'IA de Bexio par l'API reste ouverte : les pages lues n'en disent rien, je ne l'ai pas vérifié.

## API Bexio : ce qui se lit, ce qui s'écrit, avec quelle authentification et sous quelles conditions

Oui, Bexio se branche. L'API de Bexio, en version 3.0.0 dans la documentation lue le 19.11.2026, permet à un logiciel tiers de lire et d'écrire dans ton compte, avec ton autorisation. Cet article ne remplace pas cette documentation : si tu développes, tout est sur [docs.bexio.com](https://docs.bexio.com).

L'accès passe par OAuth 2.0. Concrètement, tu te connectes à Bexio, tu accordes des droits à l'application, et elle reçoit un jeton d'accès sans jamais voir ton mot de passe. La documentation sépare les portées de lecture et d'écriture : on peut donner à un outil un droit de lecture sans lui donner de droit d'écriture.

Il existe aussi un jeton personnel (Personal Access Token), valide 60 jours, qui donne un accès complet aux données de l'entreprise. La documentation est nette : « PAT are strictly intended for personal use and should never be shared with anyone else. » Un prestataire passe donc par OAuth.

| Point | Ce que dit la documentation au 19.11.2026 | Statut |
|---|---|---|
| Ressources | Contacts, offres, commandes, factures et paiements, rappels, achats, écritures manuelles, banque, fichiers, projets, salaires | Documenté (titres des opérations ; champs non lus) |
| Rappels | Liste, création, envoi, PDF | Documenté |
| Authentification | OAuth 2.0, portées de lecture et d'écriture séparées | Documenté |
| Jeton personnel | 60 jours, accès complet, usage personnel uniquement | Documenté |
| Limite de débit | Par entreprise et par minute, requêtes refusées au-delà | Principe documenté, valeur non vérifiée |
| Formule Bexio requise | Rien dans les pages lues | Non vérifié |
| Webhooks | Non mentionnés dans le texte lu | Non vérifié |

Sur les conditions d'accès, l'aide de Bexio mentionne, d'après mon relevé, un accès gratuit à l'API avec OAuth, sans dire quelle formule l'ouvre. Les conditions pour développeurs renvoient à une section 4.4 sur l'usage commercial, dont je n'ai pas lu le texte. Selon la même aide, Bexio n'assure ni l'implémentation ni le support des intégrations faites par des partenaires. Cette page d'aide se charge dans le navigateur : je la rapporte sans la citer mot pour mot.

Si tu hésites encore entre un connecteur, un outil sans code et du code sur mesure, j'ai expliqué comment [brancher un agent IA sur tes outils](/blog/integrer-agent-ia-outils-existants) de façon générale.

## Trois scénarios d'agent IA branché sur Bexio, décrits d'après la documentation

Ce sont trois hypothèses, construites à partir des ressources que la documentation liste. Je ne les ai pas réalisées, et je ne leur attache ni gain en heures, ni durée de projet, ni prix.

| Scénario | Ressources documentées | Ce qui reste humain | Non vérifié |
|---|---|---|---|
| Relances | Factures, rappels | Relire chaque rappel avant envoi | Réglage des niveaux de rappel par l'API |
| Factures fournisseurs | Fichiers, achats | Contrôler la pièce et le compte | Rattacher la pièce à la facture fournisseur |
| Écritures manuelles | Écritures manuelles | Plan comptable, validation par la fiduciaire | Écriture en attente de validation |

### Scénario 1 : préparer les relances des factures ouvertes

Un agent pourrait lire les factures ouvertes, rédiger un texte de rappel adapté au client, puis créer le rappel dans Bexio. La documentation liste pour les rappels la création, l'envoi et le PDF. Une personne relirait chaque rappel avant qu'il parte.

Ce que je n'ai pas vérifié : combien de niveaux de rappel l'API laisse régler pour une même facture. Les paliers, le ton et l'ordre des relances sont dans mon article pour [automatiser la facturation et les relances](/blog/automatiser-facturation-relances-ia) ; je ne les refais pas ici.

### Scénario 2 : déposer les pièces et préparer les factures fournisseurs

Un agent pourrait recevoir les factures fournisseurs par e-mail, les déposer dans les fichiers de Bexio et préparer la facture fournisseur dans la ressource des achats.

Ce scénario recoupe en partie l'IA de Bexio. Selon l'éditeur, son IA lit déjà les justificatifs scannés dès la formule Advanced, dans la limite des scans du mois. Ce scénario ne vaudrait que pour ce qu'elle ne couvre pas, et je ne sais pas dire quoi sans l'avoir testée.

Deux points restent ouverts. Je n'ai pas vérifié qu'on puisse rattacher la pièce à une facture fournisseur par l'API. Et la lecture des pièces suisses, QR-factures comprises, n'est pas testée.

### Scénario 3 : préparer des écritures manuelles pour la fiduciaire

Ici, l'agent préparerait des écritures manuelles, une ressource que la documentation liste, et une personne de la fiduciaire les validerait. Je ne sais pas si l'API permet une écriture en attente de validation.

Bexio annonce sa propre saisie automatique pour 2027 : ce scénario pourrait être absorbé par Bexio lui-même. Le plan comptable, l'imputation et la validation restent l'affaire de la fiduciaire. Cet article ne donne aucun avis comptable.

Dans les trois cas, je garderais la règle que j'applique sur mes agents : l'IA qui lit n'a aucun outil d'écriture, seul un clic humain envoie. C'est le sujet de mes [garde-fous d'un agent IA](/blog/garde-fous-ia-validations-audit).

Pour le coût de l'IA, la seule mesure que j'ai vient d'un autre type d'agent. Sur l'agent mail de **Wildcat Muay Thai**, c'est environ 2 $ d'IA par mois pour 100 demandes, avec une validation humaine avant chaque envoi (détail dans l'article sur [l'agent qui répond aux mails](/blog/agent-ia-repondre-mails-clients)). C'est un agent mail : ce chiffre ne se transpose pas à Bexio.

## Combien coûte un agent IA Bexio : formules Bexio et grille Jon Labs

Un agent branché sur Bexio coûte deux choses : la formule Bexio, que tu paies déjà, et l'agent. Je n'affiche aucun prix d'intégration Bexio, puisque je n'en ai réalisé aucune.

Pour **le prix des formules Bexio**, voici mon relevé du 19.11.2026 :

| Formule | Montant relevé (CHF par mois, hors TVA) | Scans IA par mois |
|---|---|---|
| Basic | 35 | Non inclus |
| Advanced | 42 | 50 |
| Optima | 69 | 100 |
| Ultimate | 119 | Illimités (usage raisonnable d'environ 1 000) |

Ces montants viennent de la page de prix de Bexio en allemand : la page en français était introuvable le 19.11.2026. D'après ma lecture, le paiement mensuel ajoute 10 CHF par mois à ces montants. Les colonnes de la page ne sont pas légendées : l'association entre chaque montant et la facturation annuelle ou mensuelle est à relire sur la page avant de décider.

Bexio a aussi renommé ses formules en mars 2026 : Starter devient Advanced, Pro devient Optima, Pro+ devient Ultimate, à la prolongation. Si ton contrat porte encore un ancien nom, c'est la correspondance. Quelle formule ouvre l'API : non vérifié.

Côté Jon Labs, la ligne agent IA de ma page [tarifs](/tarifs) dit ceci : dès CHF 1'500, sur devis ; fonctionnement dès CHF 15 / mois ; 20 % à la commande, 80 % à la livraison ; aucun contrat de durée. Pour un projet Bexio, c'est le périmètre qui fixe le devis : quelles ressources, en lecture ou en écriture, et qui valide quoi. Je ne donne pas de fourchette. La grille générale est dans mon article sur le [prix d'un agent IA](/blog/prix-agent-ia-automatisation-suisse).

## Limites de l'API Bexio et d'un agent : ce que la documentation ne permet pas d'affirmer

Sept points restent ouverts après ma lecture. Pose-les à Bexio, ou à ton prestataire, avant tout devis :

- La valeur de la limite de débit. La documentation dit qu'elle s'applique par entreprise et par minute, et qu'au-delà les requêtes sont refusées (code 429), sans chiffre dans le texte lu.
- La formule Bexio qui donne accès à l'API.
- Les webhooks, ces notifications envoyées automatiquement quand un document change. Ils ne sont pas mentionnés dans le texte que j'ai lu, ce qui ne prouve pas qu'ils n'existent pas.
- L'accès à l'IA de Bexio par l'API.
- Le texte de la section 4.4 des conditions pour développeurs, sur l'usage commercial.
- Les champs exacts de chaque ressource : j'ai lu les titres des opérations, pas leur détail.
- La lecture des pièces suisses par un agent, QR-factures comprises : non testée.

Sur le support, d'après l'aide de Bexio, l'éditeur n'assure pas l'implémentation. Un agent branché sur ton compte a donc besoin de quelqu'un qui en répond quand il se trompe.

Sur les données, la page IA de Bexio indique que des interfaces d'IA externes, qu'elle ne nomme pas, peuvent intervenir dans la lecture des justificatifs. Un agent sur mesure ajoute son propre modèle d'IA et son propre serveur. Je ne qualifie la conformité ni de l'un ni de l'autre : le cadre est dans mon article [IA et nLPD en Suisse](/blog/ia-nlpd-conformite-suisse), et la qualification revient à un juriste.

## Automatisation Bexio : faire faire un agent IA, utiliser la Marketplace ou rester sur l'IA de Bexio

Pour **automatiser Bexio**, tu as trois voies : l'IA de Bexio, une app de **la Marketplace de Bexio**, ou un agent sur mesure. Quatre questions suffisent pour choisir.

1. L'IA de Bexio couvre-t-elle déjà le besoin ? Vérifie ta formule et ton nombre de scans par mois.
2. Une app de la Marketplace le fait-elle ? Bexio y propose des apps certifiées, et c'est l'éditeur de chaque app qui en assure le support. Un connecteur Zapier y apparaît dans un résultat de recherche ; je n'ai pas ouvert sa page.
3. Le besoin sort-il de ces deux cas ? Pièces que le scan ne traite pas, rappels rédigés au cas par cas, écritures préparées pour la fiduciaire : c'est là qu'**une intégration Bexio** sur mesure se discute.
4. Qui valide, et qui répond en cas d'erreur ? Sans réponse claire à cette question, ne branche rien.

Mon verdict, par profil. Une PME en Basic ou en Advanced commence par l'IA de Bexio, en sachant que Basic n'inclut aucun scan IA. Une fiduciaire avec beaucoup de dossiers peut discuter d'un agent, avec une validation humaine à chaque écriture, une fois que Bexio lui a confirmé la formule requise et la limite de débit. Et si une app couvre déjà le besoin, ne paie pas un agent pour refaire la même chose.

## FAQ agent IA Bexio : accès, saisie automatique, jeton personnel

### Faut-il une formule Bexio particulière pour utiliser l'API ?

Je ne sais pas : la documentation et l'aide lues le 19.11.2026 ne le disent pas. L'aide mentionne un accès gratuit à l'API avec OAuth, sans préciser la formule. Pose la question à Bexio avant tout devis.

### Un agent IA peut-il saisir les factures dans Bexio tout seul ?

La documentation liste une ressource pour les factures fournisseurs, et Bexio annonce sa propre saisie automatique des factures standard pour 2027. Je garderais une validation humaine avant chaque écriture. Je n'ai réalisé aucune intégration de ce type.

### Un prestataire peut-il utiliser mon jeton personnel Bexio ?

Non. Selon la documentation, le jeton personnel est « strictly intended for personal use ». Un prestataire passe par OAuth, avec les droits que tu lui accordes.

En bref, pour les autres questions :

- Bexio a-t-il déjà une IA ? Oui, dès la formule Advanced selon Bexio (voir la première partie).
- Jon Labs a-t-il déjà branché un agent sur Bexio ? Non, aucune intégration Bexio documentée.
- Cet article aide-t-il à coder une intégration ? Non, la documentation est sur docs.bexio.com.

---

## Conclusion : agent IA Bexio, que décider selon ta formule et ton volume de pièces

En Basic ou en Advanced avec peu de pièces, l'IA de Bexio passe avant tout agent. Si tu tiens une fiduciaire avec beaucoup de dossiers et des tâches que cette IA ne fait pas, un agent peut se discuter, à condition de savoir d'abord quelle formule ouvre l'API et qui valide chaque écriture. Si une app de la Marketplace fait déjà le travail, garde ton argent.

Ce que je propose aux fiduciaires est décrit sur ma page [IA pour fiduciaires](/metiers/ia-fiduciaire). Si tu veux qu'on regarde ton cas, écris-moi : on part de ce que Bexio fait déjà chez toi, avant de parler d'agent.

[**Cadrer un agent IA pour ta fiduciaire →**](/contact?utm_source=blog&utm_medium=article&utm_campaign=agent-ia-bexio)

---

## Sources et Références

Pages lues le 19.11.2026.

- [Documentation de l'API Bexio](https://docs.bexio.com) : version 3.0.0, OAuth 2.0, portées, ressources, limite de débit, jeton personnel.
- [Bexio, IA de bexio](https://www.bexio.com/fr-CH/ia-de-bexio) : fonctions annoncées, accord avant comptabilisation, interfaces d'IA externes, saisie automatique prévue pour 2027.
- [Bexio, Pakete & Preise](https://www.bexio.com/de-CH/pakete-preise-2026) : montants des formules et scans IA (page en allemand, colonnes non légendées).
- [Bexio, modifications du package](https://www.bexio.com/fr-CH/modifications-du-package) : renommage des formules de mars 2026.
- [Bexio, page API](https://www.bexio.com/en-CH/api) : présentation de l'API par l'éditeur.
- [Aide Bexio, API Access and Connections to bexio](https://help.bexio.com/s/article/000001665) : accès avec OAuth, pas de support d'implémentation.
- [Bexio, Marketplace Partner Agreement](https://www.bexio.com/en-CH/marketplace/marketplace-partner-agreement) : support des apps par leur éditeur.
- [Jon Labs, page tarifs](/tarifs) : ligne agent IA.
- Coût de l'agent mail de Wildcat Muay Thai : [article sur l'agent IA qui répond aux mails](/blog/agent-ia-repondre-mails-clients).
