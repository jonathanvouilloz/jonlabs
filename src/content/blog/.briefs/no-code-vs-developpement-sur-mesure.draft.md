# No-code ou développement sur-mesure : le framework en 3 phases pour ta PME

On me pose cette question plusieurs fois par mois : "Pourquoi payer un développeur si Bubble peut faire la même app pour un tiers du prix ?" La vraie réponse n'est ni oui ni non, elle dépend d'où tu en es dans ton projet. J'ai repris des projets Bubble qui ont explosé en vol à mi-parcours, et j'ai livré des apps sur-mesure dès le départ quand la logique métier était trop complexe pour une plateforme visuelle. Les deux approches ont leur place. Le problème, c'est que personne ne te dit *à quel moment* l'une devient meilleure que l'autre.

Cet article ne va pas te sortir un tableau pros/cons générique. Ce que tu trouveras ici, c'est un **framework en 3 phases** qui colle à la trajectoire réelle d'un projet PME : du prototype à l'outil de production. Et deux risques que les articles FR oublient systématiquement : la **LPD** (protection des données suisse) et le **vendor lock-in** (la dépendance à une plateforme que tu ne contrôles pas). Si tu gères des données clients ou RH, ces deux points changent le calcul.

> **L'essentiel en bref**
>
> - Le **no-code ou développement sur-mesure** n'est pas un choix permanent : c'est un choix par phase de projet.
> - Le no-code (Bubble, Webflow, Glide) est excellent pour valider vite : **2 000–10 000 CHF** de budget initial, prototype en 2–3 semaines.
> - Il montre ses limites dès que la logique métier se complexifie, que le volume monte, ou que les intégrations deviennent critiques.
> - Deux risques sous-estimés en Suisse : hébergement des données hors CH (LPD) et dépendance à une plateforme étrangère (vendor lock-in).
> - Règle simple : no-code pour tester, sur-mesure pour durer.

<!-- TODO:image infographic — Comparatif no-code vs développement sur-mesure pour PME avec framework en 3 phases — brief: src/content/blog/.briefs/no-code-vs-developpement-sur-mesure.md#image-1 -->

## No-code et sur-mesure : deux façons de construire, pas deux ennemis

Le **no-code** et le développement sur-mesure ne s'opposent pas : ils répondent à des phases différentes d'un même projet. Clarifier ça d'emblée évite beaucoup de mauvaises décisions.

Avec le **no-code** (Bubble, Webflow, Glide, Airtable + Make), tu assembles ton app dans une interface visuelle sans écrire de code. En échange, tu payes un abonnement mensuel, entre **50 et 500 CHF/mois** selon la plateforme et l'usage. Tu joues selon les règles de la plateforme. Tes fonctionnalités sont celles que la plateforme te donne, pas plus.

Avec le **développement sur-mesure**, un développeur écrit le code de ton application. Tu en es propriétaire. Aucune limite imposée par une plateforme tierce, aucun abonnement qui double du jour au lendemain. Le coût initial est plus élevé : **15 000 à 40 000 CHF** pour une app métier simple, contre 2 000 à 10 000 CHF pour la version no-code.

C'est un arbitrage entre **vitesse et coût initial** (no-code gagne) et **contrôle et durabilité** (sur-mesure gagne). Le no-code est un outil professionnel sérieux. Mal employé, il devient simplement cher. Et si ce que tu compares, c'est un SaaS existant versus du sur-mesure (louer un outil versus le construire), c'est un autre arbitrage, couvert dans l'article sur [logiciel sur mesure ou abonnement SaaS](/blog/logiciel-sur-mesure-vs-saas).

## Le framework en 3 phases

Le choix entre no-code et sur-mesure n'est pas statique : il évolue avec ton projet. Voici les 3 phases que j'observe sur les projets PME, avec les déclencheurs concrets de chaque bascule.

<!-- TODO:image schema/diagram — Framework en 3 phases pour choisir entre no-code et développement sur-mesure — brief: src/content/blog/.briefs/no-code-vs-developpement-sur-mesure.md#image-2 -->

### Phase 1. Le no-code suffit (et c'est le bon choix)

Tu valides une idée. Tu as besoin d'un prototype en 2–3 semaines. Le besoin est simple : un formulaire, une base de données, quelques écrans, une dizaine d'utilisateurs max. À ce stade, le **no-code pour un prototype** est clairement le bon choix.

Exemple concret : une PME romande dans les services veut tester un portail de réservation interne pour ses techniciens. Besoin réel, mais pas encore validé. Un prototype Glide connecté à Airtable peut être en ligne en une semaine pour **moins de 3 000 CHF** en délégant à un freelance no-code. Payer un développeur pour construire ça sur-mesure serait du gaspillage pur, tu payes 15 000 CHF pour valider quelque chose qui n'existe peut-être pas dans 6 mois.

**En phase 1, le no-code est rationnel.** Il réduit le risque projet, teste la valeur avant l'investissement lourd, et permet d'affiner les besoins réels avant de construire quoi que ce soit de durable.

### Phase 2. Le no-code commence à coincer

Les signaux arrivent progressivement, puis tous en même temps. La plateforme te freine quand ta **logique métier** ne rentre plus dans les fonctions standard et que tu dois bricoler des contournements qui cassent à chaque mise à jour. Quand la **performance se dégrade** : au-delà de quelques centaines d'entrées sur Bubble, les temps de chargement peuvent exploser sans plan d'optimisation payant. Quand les **intégrations** avec tes autres outils (ERP, comptabilité, API tierces) deviennent fragiles, souvent passées par Make ou Zapier, elles accumulent des points de défaillance.

Et surtout : quand les **coûts d'abonnement grimpent par paliers** et que tu commences à payer des plans Enterprise pour des fonctionnalités que tu croyais incluses, et que tu dépends d'un **"expert Bubble"** rare et cher pour toucher à quoi que ce soit. Exactement comme la dépendance au prestataire que tu voulais éviter.

J'ai repris un projet pour un distributeur vaudois qui avait construit son outil de gestion de tournées sur Bubble. Après 18 mois, l'app tenait avec trois layers de Make imbriqués et un plugin tiers obsolète. Migrer vers du sur-mesure a coûté **22 000 CHF**. Mais ce chiffre aurait été de **12 000 CHF** s'ils avaient décidé plus tôt. Le coût de l'hésitation.

### Phase 3. Le sur-mesure devient incontournable

À ce stade, rester en no-code coûte plus cher que de reconstruire proprement. Le **développement d'applications métier sur mesure** s'impose quand les process métier sont suffisamment spécifiques pour qu'aucune plateforme ne les couvre sans contournement permanent. Quand tu as besoin de **fiabilité et de scalabilité** réelles, pas de bricolages. Quand les **intégrations sont profondes** : ERP, logiciel de comptabilité, API tierces critiques. Et quand tu veux **posséder ton code** et maîtriser où vivent tes données.

Les apps métier que j'ai livrées pour PME romandes en phase 3 se situent entre **15 000 et 40 000 CHF** pour une app simple à périmètre défini, investissement qui s'amortit en 12 à 24 mois si l'outil remplace des heures manuelles.

C'est en phase 3 que le [développement d'applications métier sur mesure](/services/developpement-mvp) est la décision économiquement rationnelle.

## Tableau comparatif : no-code vs sur-mesure sur 6 critères

Résumé rapide pour les lecteurs qui veulent la réponse directe. Les **limites du no-code pour une PME** apparaissent clairement dans les 4 derniers critères.

| Critère | No-code (Bubble, Webflow…) | Développement sur-mesure |
|---|---|---|
| Coût initial | Faible (**2 000–10 000 CHF**) | Élevé (**15 000–40 000 CHF** et +) |
| Coût récurrent | Abonnement plateforme (**50–500 CHF/mois**) | Hébergement + maintenance (faible) |
| Délai pour un prototype | Très rapide (jours/semaines) | Plus long (semaines/mois) |
| Logique métier complexe | Limitée (contournements nécessaires) | Aucune limite |
| Propriété & portabilité | Tu loues, tu ne possèdes pas | Tu possèdes le code |
| Maîtrise des données (LPD) | Dépend de la plateforme (souvent hors CH) | Tu choisis l'hébergement |

## Les deux risques que personne ne te dit : LPD et vendor lock-in

Ces deux points sont absents de presque tous les articles FR sur le sujet. Pour une PME romande, ils peuvent être décisifs.

<!-- TODO:image illustration — Risques du no-code pour PME suisse : protection des données LPD et dépendance à la plateforme — brief: src/content/blog/.briefs/no-code-vs-developpement-sur-mesure.md#image-3 -->

### La LPD et l'hébergement des données

La plupart des plateformes no-code (Bubble, Webflow, Glide, Airtable) hébergent leurs données sur des serveurs américains. Pour une PME romande qui gère des données clients, des données RH ou des dossiers sensibles, ça soulève une vraie question de conformité avec la **nLPD** (nouvelle Loi sur la protection des données, entrée en vigueur en septembre 2023 en Suisse).

Ce n'est pas un conseil juridique : chaque situation dépend de tes données et de ton secteur. Mais le point à vérifier est simple. Est-ce que tu sais où vivent les données de ton outil no-code ? Est-ce que les conditions de la plateforme prévoient un Data Processing Agreement conforme ? Dans la plupart des projets que je vois, la réponse est non, ou "je sais pas trop". Avec du sur-mesure, tu choisis ton hébergeur, un fournisseur suisse ou UE avec RGPD/LPD explicite.

### Le vendor lock-in

Ton app no-code n'existe que tant que tu payes l'abonnement ET que la plateforme existe ET qu'elle ne change pas ses règles. En 2023, Bubble a modifié sa grille tarifaire : des projets PME ont vu leur facture mensuelle multipliée par 2 à 3 sans préavis. Certains utilisateurs ont eu 30 jours pour migrer ou payer. Quand ta plateforme change les règles, tu subis.

La **dépendance à la plateforme** est structurelle en no-code. Migrer une app Bubble vers un autre environnement revient à reconstruire l'app. Il n'y a pas d'export de code. Tu as une configuration dans leur base de données, qui n'existe que dans leur système. Le sur-mesure t'appartient. Tu peux changer d'hébergeur, de prestataire, de stack sans tout reconstruire.

## Quand le no-code reste clairement le meilleur choix

Le no-code n'est pas un piège. C'est souvent **la meilleure première étape**. Je le recommande sans hésiter quand :

- Tu **valides une idée** ou un process avant d'investir dans du permanent.
- Le besoin est **simple et stable** : un formulaire avancé, un portail de suivi, une base de données avec quelques vues.
- Le **budget est serré** et l'usage limité (moins de 50 utilisateurs actifs, données non critiques).
- Tes données ne sont **pas sensibles** : pas de données clients personnelles, pas de données RH, pas de données de santé.
- Il n'y a **pas d'intégration critique** à faire avec tes outils existants.

Si le no-code couvre 90 % de ton besoin et que tes données ne sont pas sensibles, commence là. Tu basculeras si et quand ça coince. Le problème arrive quand le no-code devient "permanent par défaut" sans qu'on ait posé la question de la bascule.

## Comment décider en 4 questions

<!-- TODO:image schema/diagram — Arbre de décision en 4 questions pour choisir entre no-code et développement sur-mesure — brief: src/content/blog/.briefs/no-code-vs-developpement-sur-mesure.md#image-4 -->

Quatre questions que j'utilise avec mes clients avant de recommander une approche :

**Q1. Tu cherches à valider une idée ou prototyper vite ?**
OUI : commence en no-code. Tu réduis le risque projet.

**Q2. Ta logique métier tient dans les fonctions standard d'une plateforme no-code ?**
NON : pars sur du sur-mesure dès le départ. Le bricolage de contournements coûte plus cher à long terme qu'un développement propre.

**Q3. Tes données sont-elles sensibles (données clients, RH, santé, financières) ?**
OUI : évalue l'hébergement et la conformité LPD avant de choisir une plateforme no-code. Ce n'est pas automatiquement éliminatoire, mais c'est un point à vérifier explicitement avec un Data Processing Agreement en main.

**Q4. Cet outil doit durer 3 ans ou plus et s'intégrer à tes autres systèmes ?**
OUI : le sur-mesure est le choix durable. Le coût initial plus élevé est compensé en 12 à 24 mois si l'outil remplace des heures manuelles ou des licences logicielles.

Si tu réponds "pas sûr" à plusieurs de ces questions, c'est souvent le bon moment pour en parler avec un développeur avant de prendre une décision.

---

## FAQ sur le no-code et le développement sur-mesure

### Le no-code est-il fiable pour une vraie application d'entreprise ?

Oui, dans certains cas précis. Le no-code est fiable pour des besoins simples et stables, avec peu d'utilisateurs et des données non sensibles. Des outils comme Bubble ou Glide gèrent des vrais process métier en production. Les limites arrivent quand la logique métier se complexifie, que le volume monte, ou que les intégrations deviennent critiques. Ce n'est pas une question de fiabilité de la plateforme : c'est une question d'adéquation entre la plateforme et ton besoin réel.

### Quand faut-il passer du no-code (Bubble, Webflow) au développement sur-mesure ?

Quatre signaux concrets : tu dois bricoler des contournements permanents pour faire fonctionner ta logique métier, les performances se dégradent avec le volume, les intégrations avec tes autres outils deviennent fragiles, ou les coûts d'abonnement grimpent à un niveau qui rapproche du coût d'un développement sur-mesure. Quand tu touches ces signaux ensemble, le basculement est souvent moins cher que de continuer à rafistoler.

### Le no-code pose-t-il un problème de protection des données en Suisse (LPD) ?

C'est un point à vérifier, pas une exclusion automatique. La plupart des plateformes no-code hébergent les données hors de Suisse, souvent aux États-Unis. Pour des données personnelles de clients ou des données RH, la conformité avec la nLPD suisse (et le RGPD si tu travailles avec des entreprises UE) dépend de l'existence d'un Data Processing Agreement conforme et du pays d'hébergement. Consulte un spécialiste pour ton contexte précis.

### Qu'est-ce que le vendor lock-in et pourquoi c'est un risque en no-code ?

Le vendor lock-in, c'est la dépendance à une plateforme que tu ne contrôles pas. En no-code, tu n'as pas de code : tu as une configuration dans le système d'une plateforme tierce. Si la plateforme change ses tarifs, ferme, ou supprime une fonctionnalité, tu subis sans recours. En 2023, Bubble a revu sa grille tarifaire et certains clients PME ont vu leur facture multipliée par 2 à 3 en 30 jours. Migrer hors d'une plateforme no-code revient dans la plupart des cas à reconstruire l'app from scratch, il n'y a pas d'export de code.

### Peut-on commencer en no-code puis migrer vers du sur-mesure plus tard ?

Oui, et c'est souvent la trajectoire la plus rationnelle. Le no-code sert à valider et à apprendre : tu découvres les vrais besoins de ton outil en production. Quand vient le moment du sur-mesure, tu arrives avec un cahier des charges affiné par des mois d'usage réel, ce qui réduit le risque de développement. La migration elle-même est une reconstruction, pas un portage. Mais le travail de validation fait en no-code n'est pas perdu.

---

## Conclusion

No-code pour tester, sur-mesure pour durer. Les vrais arbitrages ne sont pas la vitesse versus la qualité : c'est la complexité métier, l'hébergement des données (LPD), et le risque de te retrouver dépendant d'une plateforme qui change ses règles sans te demander ton avis. Si tu en es à la phase 3, ou si tu veux éviter d'y arriver par défaut après 18 mois de bricolage no-code, le bon moment pour en parler, c'est maintenant.

[Discuter de ton projet d'application sur mesure →](/services/developpement-mvp?utm_source=blog&utm_medium=article&utm_campaign=no-code-vs-developpement-sur-mesure)

---

## Sources et Références

- Expérience terrain Jon Labs : projets no-code et sur-mesure livrés pour PME romandes (fourchettes CHF issues des projets réels)
- Données de coût : article [5 cas concrets d'applications métier pour PME romandes](/blog/application-metier-pme-sur-mesure) (7 500 à 22 000 CHF)
- Tarification Bubble, Webflow, Glide, Airtable : grilles tarifaires officielles des plateformes (consultées juin 2026)
- nLPD : Loi fédérale sur la protection des données (révisée, entrée en vigueur septembre 2023), cadre légal suisse applicable aux données personnelles
