# Comment choisir quoi automatiser en premier dans ta PME suisse : méthode des 3 critères et ROI réel en CHF

J'ai vu un dirigeant passer trois semaines à configurer un workflow Make pour automatiser une tâche qu'il faisait deux fois par mois. Résultat : six minutes économisées. Le setup lui avait coûté plus de quatre heures. **ROI négatif.**

Ce n'est pas une exception. C'est le scénario le plus fréquent que j'observe chez les TPE/PME romandes qui se lancent dans l'automatisation sans méthode. Le problème n'est pas l'outil. C'est le choix de ce qu'on automatise.

La vraie question n'est pas "est-ce que je devrais automatiser ?" La réponse est oui, presque à coup sûr. La vraie question : **quoi, dans quel ordre, et est-ce que ça vaut le coup en CHF ?**

Dans cet article, tu trouveras une méthode concrète pour décider. Pas une liste générique de "tâches automatisables". Une grille de scoring que tu peux appliquer en 30 minutes à ta propre PME. Et pour aller plus loin sur le cadre global, consulte le [guide complet sur l'automatisation dans ta PME suisse](/blog/automatisation-pme-suisse-guide-complet) qui couvre l'ensemble du sujet.

---

## L'essentiel en bref

- Pour choisir ce qu'il faut automatiser en premier dans une PME, applique la méthode des 3 critères : fréquence, durée, stabilité.
- Une tâche ne vaut l'investissement que si elle répond OUI aux trois critères. Deux sur trois : c'est secondaire.
- Le calcul du **retour sur investissement de l'automatisation** doit se faire en CHF avant de toucher un outil.
- Les cinq processus les plus rentables pour une PME romande : facturation, réponses entrantes, reporting, prise de RDV, mise à jour CRM.
- Il existe quatre situations où il ne faut surtout pas automatiser. Les ignorer coûte cher.

---

## La méthode des 3 critères pour prioriser

**Prioriser ce qu'on automatise**, c'est l'étape que la majorité des dirigeants sautent. Voici une méthode simple et reproductible, basée sur trois questions.

### Critère 1 : Fréquence

Tu fais ça plus de dix fois par mois ?

Si la réponse est non, ce n'est pas prioritaire. Le temps de configuration d'un workflow se rentabilise sur le volume. Une tâche rare, même coûteuse à la main, génère rarement un ROI positif dans les six premiers mois.

### Critère 2 : Durée

Chaque occurrence prend plus de 20-30 minutes à la main ?

Moins de 20 minutes par occurrence : le gain mensuel brut reste faible, même avec dix occurrences. Tu passes 200 minutes par mois sur cette tâche, soit 3h20. À CHF 70/h chargé, ça fait CHF 230. Un outil à CHF 20/mois et 4h de config (CHF 280 amorti sur 12 mois, soit CHF 23/mois) te laisse environ CHF 187/mois. Correct, mais pas prioritaire si d'autres tâches sont plus lourdes.

### Critère 3 : Stabilité

Le processus est-il toujours le même, étape par étape ?

Si les règles métier changent souvent (politique de relance qui évolue, format de devis qui change tous les trimestres, exceptions fréquentes), le temps de maintenance du workflow finira par dépasser le gain. Un processus instable se reconfigure en permanence. Ce n'est pas de l'automatisation, c'est de l'entretien forcé.

### La règle seuil

| Score (sur 3 critères) | Statut |
|---|---|
| 3/3 | Candidat prioritaire : automatise en premier |
| 2/3 | Candidat secondaire : file d'attente |
| 1/3 ou 0/3 | Passe ton tour |

Trois exemples concrets pour une PME romande :

- **Facturation manuelle** : fréquence 3/3 (hebdomadaire), durée 3/3 (4h/semaine), stabilité 3/3 (format fixe). Score : 9. Candidat prioritaire.
- **Rappels clients de paiement** : fréquence 3/3, durée 2/3 (30 min/relance), stabilité 3/3 (règle simple à J+30). Score : 8. Candidat prioritaire.
- **Rapport hebdomadaire** : fréquence 3/3, durée 2/3, stabilité 3/3. Score : 8. Candidat prioritaire.

<!-- TODO:image infographic — grille de scoring 3 critères (fréquence/durée/stabilité) avec exemples facturation et publication LinkedIn — brief: src/content/blog/.briefs/comment-choisir-quoi-automatiser-pme.md#image-2 -->

---

## Calculer le ROI avant de se lancer : en CHF, pas en théorie

Avant de toucher Make, n8n ou Zapier, fais ce calcul. Cinq minutes. Résultat en CHF.

### La formule

```
Gain mensuel brut = Temps économisé par mois (h) × coût horaire chargé (CHF 60-90/h)
Coût mensuel     = Coût de l'outil (CHF/mois) + temps de configuration ÷ 12
ROI net/mois     = Gain mensuel brut - Coût mensuel
```

**Le coût horaire chargé en Suisse romande** se situe entre CHF 60 et CHF 90/h selon le secteur. Pour les PME de service (conseil, communication, IT, architecture), CHF 70/h est une base prudente.

### Exemple concret : PME de conseil, 8 personnes

La facturation est faite à la main : 4h/semaine, soit **16h/mois**.

- Gain mensuel brut : 16h × CHF 70 = **CHF 1'120**
- Outil : n8n self-hosted = **CHF 0/mois**
- Configuration : 8h × CHF 70 = CHF 560, amorti sur 12 mois = **CHF 47/mois**
- **ROI net mensuel : CHF 1'073**
- Délai de retour sur investissement : moins d'un mois

Ce calcul tient parce que le processus est bien défini et stable. Si ta facturation change de format tous les trimestres ou comporte beaucoup d'exceptions, ajoute 2-3h/mois de maintenance et recompose le calcul.

### Ce que ce calcul ne remplace pas

Il s'applique à une tâche bien délimitée. Si tu n'arrives pas à estimer précisément le temps que tu passes sur une tâche, commence par une semaine de suivi : note chaque occurrence et sa durée. Sans cette mesure de base, le ROI reste théorique.

<!-- TODO:image infographic — formule ROI automatisation PME suisse avec exemple facturation CHF 1073/mois — brief: src/content/blog/.briefs/comment-choisir-quoi-automatiser-pme.md#image-3 -->

---

## Les 5 processus les plus rentables dans une PME romande

Voici les **processus à automatiser dans une PME** qui reviennent systématiquement en tête lors des audits terrain. Classés par ROI moyen constaté.

### 1. Facturation et relances clients

C'est le champion toutes catégories. Dans 80% des PME de service, la facturation mobilise entre 3h et 6h par semaine, relances comprises.

Outil recommandé : **Make** ou **n8n**. Gain estimé : **CHF 700 à CHF 1'500/mois** selon la taille de l'équipe. Complexité de setup modérée (connecter CRM ou logiciel compta + générateur de PDF + email).

### 2. Réponses aux demandes entrantes standard

Emails de devis, formulaires de contact, questions récurrentes. Une PME active reçoit souvent 10 à 30 demandes standard par semaine, et chaque réponse manuelle prend 5 à 15 minutes.

Outil recommandé : **n8n + LLM** (pour une réponse contextuelle, pas un template rigide). Gain estimé : **1h à 3h par jour** selon le volume entrant. Garde la main sur les demandes complexes ou inhabituelles.

### 3. Reporting hebdomadaire

Extraction de données depuis le CRM ou la comptabilité, mise en forme, envoi automatique à l'équipe ou aux partenaires. C'est typiquement 2h à 4h par semaine perdues le vendredi après-midi.

Outil recommandé : **Make** ou **n8n**. Gain estimé : **CHF 500 à CHF 1'000/mois**. Facilité de mise en oeuvre élevée si les données sont déjà structurées dans un seul outil.

### 4. Prise de rendez-vous

L'aller-retour email pour fixer un appel ou une réunion est l'une des tâches les plus faciles à éliminer, et souvent négligée. Calendly + une notification automatique dans Slack ou par SMS.

Outil recommandé : **Calendly** (intégré à n8n ou Make pour les notifications). Gain estimé : **30 à 60 minutes par jour**. Le ROI en CHF est modeste sur la prise de RDV seule, mais le gain en réactivité commerciale est réel.

### 5. Suivi et mise à jour du CRM

Saisie automatique depuis les formulaires, les emails acceptés ou les devis signés. Évite la double saisie et les erreurs humaines.

Outil recommandé : **Zapier** ou **Make** pour les CRM standards (HubSpot, Pipedrive, Notion). Gain estimé : **1h à 2h par jour** pour une PME qui gère un pipeline actif. Condition : les données d'entrée doivent être dans un format cohérent.

---

## Quand ne PAS automatiser : les 4 signaux d'alerte

C'est la section que personne ne publie clairement. Quatre situations où il vaut mieux s'abstenir.

### Signal 1 : Processus mal défini

Si tu ne peux pas décrire le processus en cinq étapes précises, un workflow ne le fera pas mieux que toi. L'automatisation amplifie ce qui est bien conçu. Elle rend les processus flous encore plus flous, juste plus vite.

Exemple : une PME romande de communication voulait automatiser sa "gestion des briefs clients". Problème : chaque brief était traité différemment selon le type de client. Aucun processus standard à automatiser. Le projet a été abandonné après 3 semaines de configuration, soit CHF 1'800 de temps perdu.

### Signal 2 : Tâche trop rare

Moins de quatre occurrences par mois, le ROI tient rarement. Sauf si chaque occurrence représente une valeur très élevée, auquel cas repasse par le calcul ROI avec les vrais chiffres.

### Signal 3 : Processus qui change souvent

Si les règles métier évoluent plus de deux fois par an, le temps de maintenance du workflow dépassera le gain. Chaque modification implique une reconfiguration, des tests, des corrections d'erreurs.

Les **agents IA** s'adaptent mieux aux processus semi-variables, mais leur coût de setup est nettement plus élevé. Avant d'y aller, lis [la différence entre un workflow et un agent IA](/blog/workflows-vs-agents-ia-pme) pour décider quel outil correspond à ton cas.

### Signal 4 : Tâche humaine par nature

La négociation commerciale, la gestion d'un client en crise, la décision stratégique sur un partenariat. Ni un workflow ni un agent IA ne remplacent le jugement humain dans ces situations. Un dirigeant qui automatise sa relation client active perd ce qui le différencie sur un marché où tout le monde a accès aux mêmes outils.

<!-- TODO:image illustration — 4 signaux d'alerte visuels (processus flou, tâche trop rare, règles instables, relation humaine) en blocs style brutaliste — brief: src/content/blog/.briefs/comment-choisir-quoi-automatiser-pme.md#image-4 -->

---

## Les 3 erreurs classiques des PME qui se lancent sans méthode

Trois patterns d'échec que je revois systématiquement. À chaque fois, un coût mesurable.

### Erreur 1 : Automatiser le visible plutôt que le coûteux

Une PME de retail romande a commencé par automatiser ses publications Instagram (deux fois par semaine, 20 minutes par post). Gain mensuel : environ CHF 200. Pendant ce temps, sa facturation manuelle leur coûtait CHF 900/mois. La tâche "cool" et visible avait été traitée en priorité. La tâche coûteuse avait été ignorée.

L'automatisation la plus visible n'est presque jamais la plus rentable. Applique la méthode des 3 critères avant de choisir.

### Erreur 2 : Trop grand dès le début

Un cabinet fiduciaire neuchâtelois voulait automatiser d'un coup : facturation, suivi client, reporting, onboarding et rappels. Le projet a duré quatre mois, les workflows s'entrecroisaient, les erreurs en cascade ont bloqué la production pendant une semaine entière. Résultat : abandon partiel et retour au manuel pour la moitié des processus.

La règle est simple : un processus à la fois, on mesure, puis on passe au suivant. Chaque automatisation bien rodée crée de la confiance dans la méthode.

### Erreur 3 : Oublier la maintenance

Une automatisation n'est pas "configure et oublie". Quand l'API de ton outil change, quand le format de tes factures évolue, quand tu changes de CRM, les workflows cassent. Prévoir **au moins 1h par mois** pour vérifier que les flux tournent correctement et gérer les erreurs.

Les dirigeants qui ne comptent pas ce temps dans leur ROI initial sont souvent déçus six mois plus tard.

---

## Par où commencer concrètement : les 3 premières étapes

Un premier workflow opérationnel en moins de deux semaines est réaliste si le processus est bien choisi.

### Étape 1 : L'audit de tes tâches (2h, une fois)

Liste toutes les tâches répétitives de la semaine passée. Une feuille, Notion, peu importe. Pour chacune :

- Fréquence mensuelle (occurrences/mois)
- Durée unitaire (minutes par occurrence)
- Niveau de stabilité (1 = change souvent, 3 = toujours pareil)

Calcule un score brut = fréquence × durée × stabilité. Les trois scores les plus élevés sont tes **candidats à l'automatisation prioritaire**.

### Étape 2 : Choisir le premier processus (1h)

Prends le score le plus haut. Applique la méthode des 3 critères (fréquence, durée, stabilité, chacun OUI ou NON). Si les trois sont OUI : tu tiens ton premier projet. Sinon, passe au score suivant.

À cette étape, fais aussi le calcul ROI avec les vrais chiffres de ta PME. Si le gain mensuel net est inférieur à CHF 200, repose-toi la question de la priorité.

### Étape 3 : Automatiser et mesurer (1 à 2 semaines)

Configure le workflow avec **Make** ou **n8n** selon ton niveau. Mesure le temps économisé les deux premières semaines. Ajuste si nécessaire. Note le ROI réel vs estimé.

Puis passe au processus suivant sur ta liste.

Si tu veux être accompagné pour choisir et configurer ton premier workflow, [réserve un appel découverte](https://cal.com/jonathan-vouilloz/appel-de-bienvenue) : on fait l'audit ensemble en 30 minutes.

---

## FAQ sur l'automatisation dans une PME

### Comment automatiser une PME en Suisse ?

Le point de départ : identifier un processus qui se répète plus de dix fois par mois, prend plus de 30 minutes à chaque occurrence, et suit toujours les mêmes étapes. Puis calculer le ROI en CHF avant de configurer quoi que ce soit. Pour le cadre complet, le [guide complet sur l'automatisation dans ta PME suisse](/blog/automatisation-pme-suisse-guide-complet) couvre les outils, les étapes et les pièges à éviter.

### Quel est le ROI de l'automatisation pour une PME ?

La fourchette observée terrain : entre CHF 300 et CHF 1'500 par mois net, pour un premier processus bien choisi. La formule : (temps économisé en heures × CHF 60-90/h) moins (coût de l'outil + configuration amortie sur 12 mois). Une facturation manuelle de 4h/semaine automatisée avec n8n self-hosted génère environ CHF 1'073/mois net. Tout dépend du processus choisi et de sa stabilité.

### Quoi automatiser en premier dans une petite entreprise ?

La méthode des 3 critères s'applique à toute TPE : fréquence (plus de 10 fois/mois), durée (plus de 20-30 min/occurrence), stabilité (processus fixe). Les cinq processus les plus rentables dans une PME romande : facturation et relances, réponses aux demandes entrantes standard, reporting hebdomadaire, prise de rendez-vous, mise à jour du CRM. Commence par celui qui score le plus haut sur tes trois critères.

### Est-ce que tout peut être automatisé dans une PME ?

Non. Quatre situations où il vaut mieux s'abstenir : processus mal défini (pas décrit en 5 étapes), tâche trop rare (moins de 4 fois/mois), processus instable (règles qui changent souvent), et toute tâche humaine par nature (relation client active, négociation, décision stratégique). L'automatisation amplifie ce qui est bien conçu. Elle n'arrange pas ce qui est flou.

---

## Conclusion

Quatre points à retenir : les 3 critères (fréquence, durée, stabilité) pour identifier les candidats, le calcul ROI en CHF avant de toucher un outil, un seul processus à la fois, et les quatre cas où il vaut mieux s'abstenir.

L'automatisation n'est pas magique. Elle rend les bons processus excellents. Et les mauvais processus, elle les rend visibles, ce qui n'est pas forcément plus confortable.

Si tu veux aller plus loin sur ce qui se passe concrètement après avoir choisi quoi automatiser, l'article suivant du cluster couvre les [avantages et limites réels de l'automatisation pour une PME](/blog/avantages-limites-automatisation-pme), sans la communication marketing habituelle.

[**Réserver un appel découverte →**](/contact?utm_source=blog&utm_medium=article&utm_campaign=comment-choisir-quoi-automatiser-pme)

---

## Sources et Références

- McKinsey Global Institute : A future that works: Automation, employment, and productivity
- n8n pricing : https://n8n.io/pricing (CHF 0 self-hosted, ~CHF 20/mois cloud)
- Make pricing : https://www.make.com/en/pricing (dès CHF 10/mois)
- Zapier pricing : https://zapier.com/pricing (dès CHF 20/mois)
- Observations terrain : audits de PME romandes réalisés par Jonathan Vouilloz (2025-2026)
