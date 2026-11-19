---
title: "Créer un agent IA ou le faire faire : comment choisir"
h1: "Créer un agent IA soi-même ou le faire faire : ce qui se chiffre, et comment choisir"
description: "Créer un agent IA toi-même ou le faire faire ? Ce qui se chiffre sur 12 mois, ce qui ne se chiffre pas, un arbre de décision. Parle-moi de ton cas."
pubDate: 2026-12-18
author: "Jon"
image:
  url: "/images/blog/creer-agent-ia-ou-faire-faire.webp"
  alt: "Illustration éditoriale : deux statues antiques autour d'un établi, reliées par un fil vert"
category: "automatisation"
tags:
  - "agent-ia"
  - "creer-agent-ia"
  - "freelance"
  - "agence-ia"
  - "automatisation"
  - "pme"
featured: false
draft: false
readingTime: 12
slug: "creer-agent-ia-ou-faire-faire"
faqs:
  - question: "Peut-on créer un agent IA gratuitement ?"
    answer: "Le logiciel, oui : Hermes est sous licence MIT et n8n publie une Community Edition (non testé par moi). L'exploitation, non : il faut un serveur ou un abonnement, et un modèle. Pour essayer, n8n propose un essai gratuit et Infomaniak offre 1 million de crédits sur ses API de modèles (relevés du 19.11.2026)."
  - question: "Combien coûte un agent IA fait par un freelance ?"
    answer: "Chez moi, dès CHF 1'500 sur devis, puis un fonctionnement dès CHF 15 par mois que tu paies directement. Le prix du suivi mensuel n'est pas publié sur /tarifs. Les autres prix publiés couvrent des périmètres différents ; je n'en fais pas la moyenne."
  - question: "Faut-il savoir programmer pour créer un agent IA ?"
    answer: "Pour Hermes, l'installation passe par une commande dans un terminal, sur un serveur Linux ; la partie difficile vient après. Je suis développeur et je n'ai aucun cas d'un non-développeur qui l'a fait seul. Pour n8n, non testé par moi, je n'en sais pas plus que sa page de prix."
---

Pour **créer un agent IA** toi-même, le logiciel peut être gratuit, son exploitation ne l'est pas. Sur 12 mois, mes calculs sur des prix publiés donnent environ CHF 107 à 700 selon le chemin et le modèle, hors ton temps. Chez moi, la même année part de CHF 1'680, hors suivi mensuel. Le bon choix dépend de ton profil.

Je suis le freelance de la deuxième option, donc juge et partie : je vends la mise en place d'agents comme [consultant IA à Genève](/consultant-ia), et j'ai intérêt à ce que tu me paies. Je ne donne donc aucun verdict général : il sort d'un arbre de cinq questions, avec des cas où je te dis de le faire toi-même, sans me payer. La méthode d'un projet est dans les [étapes d'un déploiement d'agent IA](/blog/implementer-agent-ia-etapes) ; ici, je tranche seulement entre faire et faire faire.

Les prix de tiers ont été relevés le 19.11.2026. Les conversions utilisent le taux de référence de la BCE du 18.11.2026 (1 EUR = CHF 0,9243 ; 1 USD = CHF 0,8427) et restent indicatives.

> **L'essentiel en bref**
>
> - Le logiciel peut être gratuit (Hermes sous licence MIT, n8n en Community Edition, non testé par moi) ; le serveur ou l'abonnement, et le modèle, ne le sont pas.
> - Sur 12 mois, en le faisant toi-même : environ CHF 240 à 330 avec n8n Cloud Starter, environ CHF 200 à 700 avec Hermes sur un serveur (cas bas : environ CHF 107). Calculs sur hypothèses, hors ton temps.
> - Chez moi : dès CHF 1'680 sur 12 mois, hors suivi mensuel dont le prix n'est pas publié sur /tarifs.
> - Ton temps est la ligne qui pèse le plus, et je ne peux pas la chiffrer à ta place.
> - Sur les cinq verdicts de l'arbre, trois gardent la construction chez toi.

## Créer un agent IA soi-même : les trois chemins, ce qu'ils coûtent et les tâches à prévoir

**Comment créer un agent IA** sans prestataire ? Il te faut un outil qui fait tourner l'agent, un endroit où il tourne et un modèle de langage qui lit et rédige. **Créer un agent IA gratuitement** n'est possible que pour l'outil.

**Chemin 1, une plateforme hébergée : un agent IA avec n8n** (non testé par moi). Je n'ai jamais installé ni utilisé n8n ; je reprends seulement sa page de prix, relevée le 19.11.2026. La formule Starter de n8n Cloud coûte 20 € par mois facturés à l'année, soit 240 € (environ CHF 222) pour 12 mois, avec 2 500 exécutions de workflow par mois. La formule Pro coûte 50 € par mois pour 10 000 exécutions. La page cite « Agents, MCP and AI nodes » dès Starter, et une version auto-hébergeable, la Community Edition, sur GitHub.

Le piège est dans la FAQ de la même page : un déclencheur qui tourne toutes les 5 minutes compte « about 8,600–8,900 executions monthly ». J'ai refait le calcul pour un agent qui relève une boîte mail chaque minute, comme celui que j'ai installé chez Wildcat : 60 × 24 × 30 = 43 200 exécutions par mois, au-delà de Starter et de Pro. C'est mon calcul, avec cette hypothèse d'un relevé par minute ; la fréquence se règle, et le chiffre baisse d'autant. Un déclencheur par webhook (un appel reçu quand un événement arrive) ne compte qu'une exécution par événement.

**Chemin 2, un agent open source sur ton serveur.** **Hermes Agent** est sous licence MIT d'après son dépôt GitHub : le logiciel ne coûte rien, le serveur et le modèle restent à ta charge. Exemple de serveur : l'Infomaniak VPS Lite (2 vCPU, 4 Go) à CHF 7.20 par mois hors TVA (relevé le 19.11.2026), avec un engagement de 12 mois payé d'avance (CHF 86.40), sans snapshots ni disponibilité garantie. La procédure est dans mon guide pour [installer Hermes Agent](/blog/installer-hermes-agent).

**Chemin 3, le modèle seul, par son API.** Il sert aussi aux deux premiers. Chercher à **créer un agent IA avec Claude**, c'est surtout choisir le modèle derrière l'agent, payé au volume de jetons (les fragments de texte qu'il lit et écrit). Chez Anthropic, Sonnet 5.5 coûte 2 $ par million de jetons en entrée et 10 $ en sortie. Chez Infomaniak, Mistral Small 4 coûte CHF 0.20 en entrée et 0.75 en sortie par million, hors TVA, avec 1 million de crédits offerts (prix relevés le 19.11.2026). Sur l'agent mail de Wildcat, un modèle bon marché passé par un agrégateur coûte environ 2 $ par mois pour 100 demandes.

| Chemin | Ce que tu paies | Ce que tu fais toi-même |
|---|---|---|
| n8n Cloud (non testé par moi) | abonnement annuel + modèle | configurer, surveiller les exécutions |
| Hermes sur un serveur | serveur + modèle | installer, sécuriser, mettre à jour, sauvegarder |
| Modèle par API | jetons consommés | créer la clé, fixer une limite de dépense |

Quel que soit le chemin, ces tâches restent à ta charge. Je ne leur mets pas de durée : je n'en ai chronométré aucune.

1. Décrire le cas d'usage : ce que l'agent fait, ce qu'il ne fait pas, quand il passe la main.
2. Ouvrir et sécuriser le serveur ou le compte.
3. Installer ou configurer l'outil.
4. Créer les clés d'API et fixer une limite de dépense.
5. Relier la boîte mail ou l'outil métier.
6. Tester sur de vrais cas.
7. Câbler la validation humaine avant tout envoi.
8. Mettre à jour (Hermes sort une version par semaine).
9. Surveiller les échecs.
10. Sauvegarder, puis tester une restauration.

## Créer son agent IA : ce que mes installations ont demandé (mémoire, ton, accès, échecs, validation)

Pour **créer son agent IA**, l'installation n'a pas été le plus dur chez moi. Le travail est venu de la mémoire, du ton, des accès, des échecs du fournisseur du modèle et de la validation humaine.

**Chez Wildcat Muay Thai**, j'ai livré un agent mail les 22 et 23.10.2026, décrit dans l'article sur [l'agent qui répond aux mails](/blog/agent-ia-repondre-mails-clients).

- **La mémoire.** La première version relançait le modèle à chaque message, donc sans aucun souvenir. Je l'ai refaite en profil continu.
- **Le ton.** Les consignes de style ne l'ont pas corrigé. Les vraies réponses envoyées, si.
- **Les accès.** L'IA qui lit le mail d'un inconnu n'a aucun outil. Seul le clic d'une personne envoie la réponse.
- **Le coût.** Environ 2 $ d'IA par mois pour 100 demandes ; un demi-centime par brouillon, mesuré sur 49 mails.

**Chez Barber Concept**, des agents tournent sur un serveur à 2 vCPU et 8 Go depuis le 24.09.2026. Au relevé du 19.11.2026 : 11 profils d'agent, 21 tâches planifiées, plus de 2 600 exécutions journalisées, dont 1,5 % en échec. Causes relevées : limite de débit du modèle, configuration, authentification. Les réponses aux avis 4 et 5 étoiles sont publiées seules ; celles aux avis de 1 à 3 étoiles passent par une validation humaine. Un CRM du marché y a été remplacé par un outil maison.

**Dans mon propre système** (CRM, facturation, agent), l'agent passe par une API métier, jamais par un accès direct à la base.

Les limites de ces preuves :

- Je suis développeur. Ce que ces installations m'ont demandé ne se transpose pas à quelqu'un qui n'a jamais administré un serveur, et je n'ai aucun cas d'un non-développeur qui a monté son agent seul.
- Je n'ai chronométré aucune installation, je n'ai pas testé n8n, et je n'ai pas relevé la part des brouillons envoyés sans correction.

Pour aller plus loin, il me faudrait un temps chronométré, un taux de validation sur quatre semaines et un coût mensuel réel en CHF.

## Faire créer un agent IA : la grille d'un freelance et ce que les prestataires romands publient

Pour **faire créer un agent IA**, trois familles existent, que je ne classe pas : le freelance, l'intégrateur ou l'agence, l'assistant en abonnement.

| Qui | Ce qui est publié | Ce qui ne l'est pas |
|---|---|---|
| Freelance (moi, page tarifs) | agent IA dès CHF 1'500 sur devis ; fonctionnement dès CHF 15 par mois, payé directement par toi ; 20 % à la commande, 80 % à la livraison ; aucun contrat de durée ; prix en CHF hors TVA (exonéré) | le prix du suivi mensuel (cité dans les conditions, sans montant) ; les abonnements d'outils tiers (non inclus) |
| Intégrateur ou agence | un prix chez certains, sur des périmètres différents | chez de nombreux prestataires, aucun prix |
| Assistant en abonnement | un prix mensuel chez certains | un prix comparable à un agent sur mesure : le périmètre est un assistant prêt à l'emploi |

Pour **la création d'un agent IA par un prestataire**, des prestataires romands publient des prix qui vont d'un abonnement mensuel à un projet à cinq chiffres, sur des périmètres qui ne se comparent pas. Je n'en fais ni moyenne ni classement, et je ne place aucun de ces montants à côté du mien.

Une agence convient mieux pour plusieurs chantiers en parallèle, une équipe qui remplace une personne absente ou des exigences d'achat formelles. Ma grille et mes conditions sont sur la page [tarifs](/tarifs).

## Créer un agent IA : ce qui se chiffre sur 12 mois et ce qui ne se chiffre pas

Hypothèses sous le tableau. Aucun total n'est une mesure ni un devis, et aucun ne compte ton temps.

| Voie | Calcul | Total sur 12 mois |
|---|---|---|
| Fait maison, n8n Cloud Starter (non testé par moi) | 20 € × 12 = 240 € (environ CHF 222) + modèle de CHF 20 à 111 par an | environ CHF 240 à 330, hors ton temps, tant que tu restes sous 2 500 exécutions par mois |
| Fait maison, Hermes sur un serveur | serveur CHF 7.20 × 12 = CHF 86.40 HT + modèle | référence publiée dans mon guide Hermes : environ CHF 200 à 700 la première année (modèle entre CHF 10 et 50 par mois). Cas bas : environ CHF 107, si le modèle coûte 2 $ par mois comme chez Wildcat |
| Freelance, grille /tarifs | CHF 1'500 + CHF 15 × 12 | dès CHF 1'680, hors suivi mensuel dont le prix n'est pas publié sur /tarifs |
| Agence ou intégrateur | aucun calcul | non chiffrable ici : périmètres différents, et de nombreux prestataires ne publient aucun prix |

Les hypothèses :

- **Modèle, cas bas** : 2 $ par mois, mesuré sur l'agent mail de Wildcat (100 demandes), avec un autre modèle que Sonnet 5.5. Soit 24 $ par an, environ CHF 20.
- **Modèle, cas haut** : 1 000 conversations par mois, 3 000 jetons en entrée et 500 en sortie chacune, avec Sonnet 5.5. Soit 3 millions × 2 $ + 0,5 million × 10 $ = 11 $ par mois, 132 $ par an, environ CHF 111. Volume imaginé.
- **n8n** : prix annuel de la page ; le prix mensuel sans engagement n'a pas été lu. La page cite des crédits d'assistant et des modèles « without API keys » dès Starter ; je n'ai pas relevé ce qu'un crédit couvre, donc je compte le modèle à part. Le plafond de 2 500 exécutions tient si chaque conversation déclenche une seule exécution par webhook, pas avec un relevé par minute.
- **Hermes, cas bas** : CHF 86.40 de serveur + environ CHF 20 de modèle = environ CHF 107.
- **Freelance** : CHF 1'500 + CHF 180 = CHF 1'680, un plancher, sans le suivi mensuel dont le prix n'est pas publié.

| Ce qui se chiffre | Ce qui ne se chiffre pas |
|---|---|
| l'abonnement à l'outil | ton temps (la liste de tâches plus haut, sans heures) |
| le serveur | le temps de ton référent interne |
| le modèle, avec une hypothèse de volume | le suivi mensuel du freelance (prix non affiché) |
| la grille d'un freelance qui publie ses prix | le coût d'un incident (clé expirée, limite de débit) |
| | la voie agence (périmètres qui ne se comparent pas) |
| | le gain, que je ne promets pas |

Sur le gain : les 4 h par semaine chez Barber Concept sont une estimation, les 10 h par semaine chez Jon Labs sont déclarées, non mesurées. L'écart en francs entre les voies est large ; la ligne qui décide, ton temps, toi seul peux la remplir.

## Créer un agent IA ou le faire faire : l'arbre de décision en cinq questions

Avant tout : si tu ne peux pas décrire le cas d'usage en quelques lignes, aucune option ne marche. Cadre d'abord, avec les étapes citées en introduction, puis réponds dans l'ordre.

1. Cet agent ne travaille-t-il que pour toi (résumer, classer, préparer), sans écrire à un client ni modifier une donnée de l'entreprise ? Oui : verdict A. Non : question 2.
2. Quelqu'un chez toi sait-il administrer un serveur ou un outil d'automatisation, avec du temps réservé chaque semaine après la mise en service ? Oui : question 3. Non : question 4.
3. L'agent peut-il envoyer un message à un client, publier ou toucher une facture ? Non : verdict B. Oui : verdict C.
4. Le besoin est-il un seul cas d'usage cadré (une boîte mail, un CRM, un flux d'avis) ? Oui : question 5. Non, plusieurs chantiers ou plusieurs services : verdict E.
5. Acceptes-tu qu'une seule personne connaisse le système, à condition d'avoir tous les accès et la documentation ? Oui : verdict D. Non : verdict E.

Les verdicts :

- **A, fais-le toi-même** avec un outil ou un abonnement, et ne me paie pas pour ça. À surveiller : le jour où l'agent envoie quelque chose, tu changes de branche.
- **B, développer un agent IA en interne**, avec la liste de tâches du premier chapitre. À surveiller : le temps de la personne dédiée.
- **C, construction en interne possible**, avec une validation humaine avant tout envoi (voir les [garde-fous d'un agent IA](/blog/garde-fous-ia-validations-audit)) et une relecture de l'architecture par un tiers. À surveiller : la validation humaine.
- **D, un freelance.** C'est mon offre : dès CHF 1'500, sans contrat de durée. À surveiller : la continuité si le freelance disparaît, d'où les accès et la documentation à ton nom.
- **E, une agence ou un intégrateur à plusieurs personnes.** À surveiller : ce que chaque montant couvre.

Deux variantes hybrides : ton prototype mis en production par un prestataire, ou une mise en place par un prestataire exploitée par ton équipe. Hors de l'arbre : pour un besoin standard (mails, agenda, CRM), un assistant en abonnement peut suffire, voir mon comparatif des [assistants IA du marché](/blog/assistant-ia-suisse-comparatif).

## FAQ : créer un agent IA gratuitement, prix, compétences

### Peut-on créer un agent IA gratuitement ?

Le logiciel, oui (Hermes sous licence MIT, n8n Community Edition) ; l'exploitation, non. Pour essayer, n8n propose un essai gratuit et Infomaniak offre 1 million de crédits sur ses API de modèles (relevés du 19.11.2026).

### Combien coûte un agent IA fait par un freelance ?

Chez moi, dès CHF 1'500 sur devis, puis un fonctionnement dès CHF 15 par mois que tu paies directement. Les autres prix publiés couvrent des périmètres différents ; je n'en fais pas la moyenne. Le détail des postes est dans le [prix d'un agent IA en Suisse](/blog/prix-agent-ia-automatisation-suisse).

### Faut-il savoir programmer pour créer un agent IA ?

Pour Hermes, l'installation passe par une commande dans un terminal, sur un serveur Linux ; la partie difficile vient après. Je suis développeur et je n'ai aucun cas d'un non-développeur qui l'a fait seul. Pour n8n, non testé par moi, je n'en sais pas plus que sa page de prix.

Trois autres questions, en bref :

- Combien de temps faut-il ? Je ne l'ai pas chronométré : pars de la liste des tâches et mets-y ton propre temps.
- Peut-on commencer soi-même puis faire reprendre ? Oui, c'est une des variantes hybrides de l'arbre.
- Mes données partent-elles à l'étranger ? Demande à tout prestataire, moi compris, où tournent le serveur et le modèle. Le cadre légal est résumé dans [IA et nLPD en Suisse](/blog/ia-nlpd-conformite-suisse).

---

## Conclusion : créer un agent IA ou le faire faire, quoi décider selon ton profil

Un agent qui ne travaille que pour toi, fais-le toi-même. Si quelqu'un chez toi administre un serveur et a du temps chaque semaine, construis en interne, avec une validation humaine dès que l'agent écrit à un client. Sans ce temps, pour un seul cas d'usage, un freelance est une option si tu acceptes qu'une seule personne connaisse le système, accès et documentation à ton nom. Sinon, une équipe.

Si tu arrives au verdict D ou hésites entre deux branches, ma page [consultant IA](/consultant-ia) décrit comment je travaille.

[**Discuter de ton cas →**](/contact?utm_source=blog&utm_medium=article&utm_campaign=creer-agent-ia-ou-faire-faire)

---

## Sources et Références

Pages lues le 19.11.2026 ; taux de la BCE du 18.11.2026.

- [n8n, page de prix](https://n8n.io/pricing/) : formules, exécutions, Community Edition.
- [Hermes Agent, dépôt GitHub](https://github.com/NousResearch/hermes-agent) : licence MIT.
- [Anthropic, prix de l'API](https://platform.claude.com/docs/en/about-claude/pricing) : Sonnet 5.5.
- [Infomaniak, VPS Lite](https://www.infomaniak.com/en/hosting/vps-lite) et [Infomaniak, AI Tools](https://www.infomaniak.com/en/hosting/ai-tools/prices).
- Pages de prix de prestataires romands : [Djtal](https://djtal.ch/agence-ia-suisse-romande), [AAA-ai](https://aaa-ai.ch/ia-sur-mesure), [Swiss Agent Network](https://swissagentnetwork.ch), [Börja Swiss Solutions](https://borja-swiss-solutions.ch/outils-ia).
- [BCE, taux de référence](https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml) : EUR/CHF 0,9243, EUR/USD 1,0968.
- [Jon Labs, page tarifs](/tarifs).
- Mesures Wildcat : [article sur l'agent qui répond aux mails](/blog/agent-ia-repondre-mails-clients). Relevé Barber Concept : [guide pour installer Hermes Agent](/blog/installer-hermes-agent).
