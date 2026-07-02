---
title: "Logiciel sur mesure ou SaaS : comment trancher en 2026"
h1: "Logiciel sur mesure ou SaaS : le comparatif TCO pour PME romandes"
description: "Tu paies plusieurs SaaS sans que ça communique ? Calcule ton TCO sur 3 ans et découvre à quel moment le sur-mesure devient moins cher. Exemples en CHF."
pubDate: 2026-07-22
author: "Jon"
image:
  url: "/images/blog/logiciel-sur-mesure-vs-saas.webp"
  alt: "Comparatif TCO logiciel sur mesure versus SaaS pour PME romandes — point de croisement à 3 ans"
category: "web"
tags: ["logiciel sur mesure", "SaaS", "TCO", "PME", "suisse romande", "développement sur mesure", "comparatif"]
featured: false
draft: false
readingTime: 9
slug: logiciel-sur-mesure-vs-saas
faqs:
  - question: "Quelle est la différence entre un logiciel SaaS et un logiciel sur mesure ?"
    answer: "Un SaaS est un abonnement à un logiciel hébergé chez un tiers, avec des fonctionnalités standardisées que tu ne peux pas modifier. Un logiciel sur mesure est développé spécifiquement pour tes process : tu es propriétaire du code, et l'outil évolue selon tes besoins. La différence est économique : le SaaS est une charge récurrente, le sur-mesure est un actif."
  - question: "Quand choisir un logiciel sur mesure plutôt qu'un SaaS ?"
    answer: "Le sur-mesure devient pertinent quand tes abonnements SaaS cumulés dépassent 800 CHF/mois, que tes process métier sont spécifiques et non couverts par le marché, et que tu as besoin de contrôle sur tes données. En dessous de ces seuils, le SaaS reste le choix pragmatique."
  - question: "Combien coûte un logiciel sur mesure par rapport à un SaaS sur 3 ans ?"
    answer: "Ça dépend du profil. Pour une PME de 15 personnes payant 600 CHF/mois de SaaS non intégrés, le TCO SaaS sur 3 ans (avec la double saisie) atteint 37 200 CHF. Un outil sur mesure intégré revient à 35 000-38 000 CHF, avec un avantage croissant dès l'année 4. Pour une équipe de 5 personnes avec un seul SaaS à 300 CHF/mois, le sur-mesure ne sera pas rentable à 3 ans."
  - question: "Quels sont les inconvénients du SaaS pour une PME suisse ?"
    answer: "Les principaux inconvénients : dépendance à un tiers étranger (risque de fermeture, hausse tarifaire), hébergement des données hors Suisse (enjeu LPD), impossibilité de personnaliser les fonctionnalités, et coût caché de la double saisie quand plusieurs outils ne s'intègrent pas."
  - question: "Est-ce qu'on peut migrer d'un SaaS vers du sur-mesure sans perdre ses données ?"
    answer: "Oui, dans la grande majorité des cas. Les SaaS sérieux proposent un export des données (CSV, API, JSON). Un bon développeur planifie la migration dès la conception du sur-mesure : import des données existantes, période de cohabitation des deux systèmes, bascule progressive. La migration est un coût à intégrer dans le TCO initial."
---

La plupart des PME que je rencontre à Genève paient 3 à 5 SaaS différents qui ne se parlent pas, pour un total de 600 à 1 200 CHF par mois. Parfois c'est le bon choix. Parfois ça ne l'est clairement pas.

Le débat **logiciel sur mesure ou SaaS** tourne généralement autour de listes d'avantages et d'inconvénients sans chiffre concret. Dans cet article, je te propose autre chose : un framework de décision avec le coût total calculé en CHF sur 3 ans, depuis la perspective d'un développeur freelance suisse qui a livré ces projets.

> **L'essentiel en bref**
>
> - Un **logiciel sur mesure** devient rentable face à un SaaS quand tes abonnements cumulés dépassent 800 CHF/mois et que tes process sont spécifiques.
> - Le SaaS gagne sur la rapidité de mise en place et le coût initial quasi nul.
> - Le point de bascule TCO sur 3 ans se situe entre 24 et 30 mois pour la plupart des PME romandes.
> - Si tu paies plusieurs abonnements qui ne communiquent pas entre eux, la double saisie est un coût caché qui fausse ton calcul.
> - Ce comparatif couvre les logiciels et systèmes en général. Pour les cas concrets d'applications métier, consulte l'article dédié aux [5 cas concrets d'applications métier pour PME romandes](/blog/application-metier-pme-sur-mesure).

Mise à jour : juin 2026. Les fourchettes de prix reflètent les taux du marché freelance suisse (130-180 CHF/h).

---

## SaaS ou sur-mesure : deux logiques, deux modèles économiques

Le **développement sur mesure versus logiciel du marché**, c'est d'abord une différence de modèle économique, pas juste une question de features.

Le **SaaS** (Software as a Service) fonctionne à l'abonnement : tu loues un accès à un logiciel hébergé chez un tiers, déployé en quelques heures, avec des fonctionnalités standardisées. Tu n'es pas propriétaire du code. Si le prestataire ferme ou augmente ses tarifs, tu n'as pas de levier.

Le **logiciel sur mesure** est un investissement initial : tu commandes un outil développé exactement pour tes process, tu es propriétaire du code source, et les coûts récurrents se limitent à une maintenance optionnelle. C'est un actif au bilan, pas une charge opérationnelle mensuelle.

Comparer le prix d'un SaaS à un devis sur mesure, c'est comparer un loyer à un achat immobilier. Les deux peuvent être le bon choix. Ça dépend du calcul.

---

## Tableau comparatif rapide : les 5 critères clés

| Critère | SaaS | Logiciel sur mesure |
|---|---|---|
| Coût initial | Faible (0-500 CHF) | Élevé (15 000-120 000 CHF) |
| Coût récurrent | Abonnement mensuel (50-2 000 CHF/mois) | Maintenance optionnelle (500-2 000 CHF/an) |
| Mise en place | Immédiate (heures à jours) | 2 à 6 mois |
| Adaptation aux process | Partielle (tu adaptes tes process au logiciel) | Totale (le logiciel suit tes process) |
| Propriété du code | Non (accès loué) | Oui (tu possèdes le code) |

Ce tableau seul ne suffit pas à trancher. La vraie décision se joue sur le coût total sur 3 ans, ce qu'on appelle le TCO (Total Cost of Ownership).

---

## Le calcul TCO : à partir de quand le sur-mesure devient rentable

Le **coût total d'un SaaS sur 5 ans** dépasse presque toujours ce qu'on anticipe. Voici trois profils PME avec des chiffres concrets en CHF, tous issus de situations réelles rencontrées dans mes projets.

Pour les détails de coûts par type d'application, tu peux aussi consulter l'article sur le [prix d'un logiciel sur mesure pour PME](/blog/prix-logiciel-sur-mesure-pme), qui entre dans le détail des fourchettes et des facteurs qui font varier l'investissement.

### Profil A : 5 personnes, 1 SaaS spécialisé

- SaaS : 300 CHF/mois x 36 mois = **10 800 CHF TCO 3 ans**
- Logiciel sur mesure simple : **18 000 CHF** (investissement unique + 1 500 CHF/an maintenance)
- TCO sur mesure 3 ans : 22 500 CHF

**Verdict : SaaS gagne.** Pour une petite équipe avec un besoin couvert par le marché, le SaaS reste économiquement défendable jusqu'à 3 ans minimum.

### Profil B : 15 personnes, 3 SaaS non intégrés

C'est le profil le plus fréquent, et le plus trompeur.

- 3 SaaS à 200 CHF/mois chacun = 600 CHF/mois x 36 mois = **21 600 CHF**
- Double saisie estimée : 2h/semaine à 50 CHF/h x 52 semaines x 3 ans = **15 600 CHF** (coût caché souvent ignoré)
- **TCO SaaS réel sur 3 ans : 37 200 CHF**
- Logiciel sur mesure intégré (les 3 fonctions) : **35 000 CHF** (investissement initial)
- TCO sur mesure 3 ans : 38 000 CHF (maintenance incluse)

**Verdict : le sur-mesure gagne dès l'année 3.** Dès l'année 4, l'écart se creuse. Dans cet exemple, le point de bascule se situe à environ 28 mois.

### Profil C : 30 personnes, ERP SaaS

- ERP SaaS : 2 000 CHF/mois x 36 mois = **72 000 CHF**
- ERP sur mesure : investissement de 80 000 CHF + maintenance 3 000 CHF/an
- TCO sur mesure 3 ans : **89 000 CHF**

**Verdict : SaaS gagne légèrement à 3 ans.** Si les fonctionnalités standards couvrent les besoins, un ERP SaaS reste pertinent à cette taille. La donne change à partir de l'année 4-5.

### Le point de bascule

Le seuil indicatif : **abonnements SaaS cumulés supérieurs à 800-1 000 CHF/mois** ET **process spécifiques non couverts** = étude sur-mesure recommandée.

<!-- TODO:image schema/diagram — Graphique TCO SaaS vs sur-mesure sur 36 mois avec point de bascule — brief: src/content/blog/.briefs/logiciel-sur-mesure-vs-saas.md#image-2 -->

---

## Les 5 signaux qui indiquent que le SaaS ne suffit plus

**Quand un SaaS ne suffit plus à ta PME**, voici les signaux dans l'ordre d'urgence.

**1. Tu paies pour des fonctionnalités que tu n'utilises pas**

Un SaaS conçu pour 10 000 clients couvre les cas génériques, pas les tiens. Si tu utilises 20 % du logiciel, tu subventionnes le développement des 80 % restants sans en profiter. Exemple typique : un outil de gestion de projet payé 150 CHF/mois dont ton équipe n'utilise que le tableau Kanban basique.

**2. Tu fais de la double saisie entre 2 ou 3 outils**

Une donnée saisie deux fois, c'est un risque d'erreur et un coût caché. Comme dans le Profil B : 2h/semaine de saisie manuelle représentent 15 600 CHF sur 3 ans à 50 CHF/h. Ce coût ne figure dans aucune facture SaaS.

Pour les cas concrets d'entreprises qui ont franchi le pas, je détaille [5 cas concrets d'applications métier pour PME romandes](/blog/application-metier-pme-sur-mesure) avec les chiffres réels de chaque projet (entre 7 500 et 22 000 CHF).

**3. Tu adaptes tes process au logiciel plutôt que l'inverse**

Ton avantage compétitif réside dans tes méthodes. Quand un SaaS t'oblige à les contourner ou à les abandonner, tu perds de la valeur métier réelle. C'est l'inversion qu'on voit le plus souvent dans les PME qui finissent par passer au sur-mesure.

**4. Tes données critiques sont hébergées chez un tiers étranger**

En Suisse, la [LPD (Loi fédérale sur la protection des données)](https://www.admin.ch/opc/fr/classified-compilation/19920153/index.html), entrée en vigueur en septembre 2023, impose des exigences strictes sur le traitement des données personnelles. Des données clients hébergées chez un provider US ou hors EEE peuvent créer une exposition légale réelle. Un logiciel sur mesure peut être hébergé en Suisse ou dans l'UE selon tes contraintes.

**5. Le SaaS ne peut pas évoluer avec un besoin métier spécifique**

Ton activité change. Un SaaS évolue selon la roadmap de son éditeur, pas selon la tienne. Si tu as besoin d'une fonctionnalité précise et que la réponse est "ce n'est pas prévu", tu es bloqué.

<!-- TODO:image illustration — Dirigeant PME devant plusieurs outils SaaS non intégrés avec double saisie — brief: src/content/blog/.briefs/logiciel-sur-mesure-vs-saas.md#image-3 -->

---

## Les 5 cas où le SaaS reste le meilleur choix

**Les avantages d'un logiciel SaaS** sont réels dans plusieurs situations. Je serais malhonnête de ne pas les nommer clairement.

**1. Ton besoin est générique et couvert par le marché**

Comptabilité standard, agenda partagé, gestion des emails, signature électronique : ces usages sont couverts par des SaaS matures (Bexio, Google Workspace, DocuSign). Développer du sur-mesure ici serait une erreur économique.

**2. Ton équipe est inférieure à 5 personnes**

En dessous de ce seuil, les coûts fixes d'un développement sur mesure ne s'amortissent pas. Le SaaS à 100-300 CHF/mois reste le choix pragmatique.

**3. Tu as besoin d'un déploiement immédiat**

Un SaaS est opérationnel en heures. Un développement sur mesure prend 2 à 6 mois. Si ton besoin est urgent, le SaaS est la seule option réaliste à court terme.

**4. Ton budget initial est inférieur à 15 000 CHF**

En dessous de ce seuil, il n'est pas possible de produire un logiciel sur mesure de qualité au taux horaire suisse (130-180 CHF/h). Mieux vaut un bon SaaS qu'un développement bâclé.

**5. Ton besoin est susceptible de changer dans les 12 prochains mois**

Si tu n'as pas de vision claire de ce que l'outil doit faire dans un an, développer du sur-mesure maintenant est risqué. Le SaaS permet d'explorer et de pivoter sans immobiliser un capital.

**Note sur le no-code :** il existe une troisième voie entre le SaaS et le développement sur mesure. Pour savoir quand cette option est pertinente, l'article [no-code ou développement sur mesure](/blog/no-code-vs-developpement-sur-mesure) détaille les cas d'usage et les limites.

---

## Framework décisionnel en 4 questions

**Quand passer du SaaS à un développement sur mesure ?** Voici l'arbre de décision que j'utilise avec mes clients avant de chiffrer quoi que ce soit.

**Q1 : Ton besoin est couvert à 80 % ou plus par un SaaS existant ?**
OUI : teste-le pendant 3 mois, mesure la friction réelle avant d'aller plus loin.
NON : continue à Q2.

**Q2 : Tes abonnements SaaS cumulés dépassent 800 CHF/mois ?**
NON : reste en SaaS, le TCO ne justifie pas l'investissement initial.
OUI : continue à Q3.

**Q3 : As-tu des process métier spécifiques qui ne sont pas couverts ?**
NON : un SaaS standard suffit probablement, optimise les intégrations existantes.
OUI : continue à Q4.

**Q4 : Tes données critiques peuvent-elles rester hébergées chez un tiers étranger ?**
OUI sans risque légal : reste sur le SaaS si le reste est OK.
NON ou INCERTAIN : le risque LPD s'ajoute à l'argument sur-mesure.

**Si Q2 et Q3 sont tous les deux OUI** : une étude sur-mesure est recommandée. C'est exactement ce que je propose via le [développement d'applications métier sur mesure](/services/developpement-mvp), une analyse de faisabilité avant tout engagement.

<!-- TODO:image schema/diagram — Arbre de décision SaaS vs logiciel sur mesure en 4 questions — brief: src/content/blog/.briefs/logiciel-sur-mesure-vs-saas.md#image-4 -->

---

## FAQ sur le choix entre logiciel sur mesure et SaaS

### Quelle est la différence entre un logiciel SaaS et un logiciel sur mesure ?

Un SaaS est un abonnement à un logiciel hébergé chez un tiers, avec des fonctionnalités standardisées que tu ne peux pas modifier. Un logiciel sur mesure est développé spécifiquement pour tes process : tu es propriétaire du code, et l'outil évolue selon tes besoins. La différence est économique : le SaaS est une charge récurrente, le sur-mesure est un actif.

### Quand choisir un logiciel sur mesure plutôt qu'un SaaS ?

Le sur-mesure devient pertinent quand tes abonnements SaaS cumulés dépassent 800 CHF/mois, que tes process métier sont spécifiques et non couverts par le marché, et que tu as besoin de contrôle sur tes données. En dessous de ces seuils, le SaaS reste le choix pragmatique.

### Combien coûte un logiciel sur mesure par rapport à un SaaS sur 3 ans ?

Ça dépend du profil. Pour une PME de 15 personnes payant 600 CHF/mois de SaaS non intégrés, le TCO SaaS sur 3 ans (avec la double saisie) atteint 37 200 CHF. Un outil sur mesure intégré revient à 35 000-38 000 CHF, avec un avantage croissant dès l'année 4. Pour une équipe de 5 personnes avec un seul SaaS à 300 CHF/mois, le sur-mesure ne sera pas rentable à 3 ans.

### Quels sont les inconvénients du SaaS pour une PME suisse ?

Les principaux inconvénients : dépendance à un tiers étranger (risque de fermeture, hausse tarifaire), hébergement des données hors Suisse (enjeu LPD), impossibilité de personnaliser les fonctionnalités, et coût caché de la double saisie quand plusieurs outils ne s'intègrent pas.

### Est-ce qu'on peut migrer d'un SaaS vers du sur-mesure sans perdre ses données ?

Oui, dans la grande majorité des cas. Les SaaS sérieux proposent un export des données (CSV, API, JSON). Un bon développeur planifie la migration dès la conception du sur-mesure : import des données existantes, période de cohabitation des deux systèmes, bascule progressive. La migration est un coût à intégrer dans le TCO initial.

---

## Conclusion

Le TCO à 3 ans est le seul vrai arbitre. Pas la liste de features du commercial SaaS, ni la promesse "tout personnalisé" d'un développeur.

Si tes abonnements SaaS dépassent 800 CHF/mois et que tes process ne rentrent pas dans les cases standards, c'est le bon moment pour faire le calcul sérieusement. Je peux t'y aider.

[**Discuter de ton projet d'outil sur mesure →**](/contact?utm_source=blog&utm_medium=article&utm_campaign=logiciel-sur-mesure-vs-saas)

---

## Sources et Références

- Données terrain issues des projets Jon Labs (applications métier livrées à des PME romandes entre 2021 et 2026, fourchettes 7 500-22 000 CHF)
- Taux horaires freelance développeur Suisse : 130-180 CHF/h (marché CH 2024-2026)
- LPD suisse (Loi fédérale sur la protection des données), entrée en vigueur septembre 2023, admin.ch
- Fourchettes de coûts SaaS PME : 50-2 000 CHF/mois selon taille et usage (marché observé)
- Aggarwal, Murahari et al., *GEO: Generative Engine Optimization*, Princeton / arXiv:2311.09735 (SIGKDD 2024)
