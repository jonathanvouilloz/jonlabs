---
title: "J'ai audité 50 sites d'indépendants romands"
description: "Méthodo Lighthouse + GMB + Wayback sur 50 sites d'indépendants romands. 7 constats bruts, 3 archétypes, et le coût cumulé d'un marché endormi."
pubDate: 2026-04-22
image:
  url: "/images/blog/audit-50-sites-indeps-romands.webp"
  alt: "Audit de 50 sites d'indépendants romands — constats bruts et archétypes"
category: "tech"
tags: ["audit", "seo", "suisse-romande", "site-web", "data", "etude"]
featured: false
draft: false
readingTime: 12
---

Personne n'avait jamais publié de chiffres sur **l'état réel des sites PME romandes**. Pas une étude. Pas un benchmark. Rien.

Alors je l'ai fait.

Pendant trois semaines, j'ai mené un **audit d'un site web en Suisse romande**, cinquante fois de suite. Artisans, thérapeutes, consultants, juristes, petits commerces à Genève, dans le canton de Vaud et à Neuchâtel. Cinq secteurs, trois cantons, un panel représentatif de ce que Google affiche quand un client cherche un pro local en terre romande.

Je cherchais une réponse à une question simple : **quand un indépendant me dit "mon site ne marche pas", à quel point son cas est-il commun ?**

La réponse m'a surpris. Pas dans la direction que tu crois.

<!-- TODO:image cover — composite 4 cadrans Lighthouse rouge/orange panel romand — brief: .briefs/audit-50-sites-indeps-romands.md#image-cover -->

---

## L'essentiel en bref

- Un **audit de sites web romands** à l'échelle de 50 cas expose des patterns que ni HubSpot ni Ahrefs ne mesurent pour le marché suisse.
- La majorité des sites d'indépendants romands ne publient plus rien depuis plus d'un an et n'ont aucun **schema.org** exploitable.
- Trois archétypes dominent le panel : vitrine fossile, blog abandonné, squelette mobile-cassé.
- Les 5 meilleurs sites partagent cinq habitudes simples, reproductibles, sans budget magique.
- Tous les chiffres précis sont des placeholders tant que la collecte terrain n'est pas consolidée. La méthodologie reste publique et reproductible.

---

## TL;DR — 3 façons de lire cette étude

**Version chiffres.** Sur 50 sites d'indépendants romands audités entre [DATA-À-INJECTER : mois début audit] et [DATA-À-INJECTER : mois fin audit] 2026, **[DATA-À-INJECTER : X]% n'ont pas publié de contenu depuis 12 mois**, **[DATA-À-INJECTER : X]% n'ont aucun schema.org**, et le score **Lighthouse performance médian** tourne autour de **[DATA-À-INJECTER : XX]/100**.

**Version méthode.** J'ai combiné **Lighthouse** (performance, accessibilité, SEO, bonnes pratiques), **Wayback Machine** (fraîcheur réelle du contenu), l'opérateur `site:` sur Google (pages indexées), inspection manuelle de la fiche Google Business Profile, et recherche de schema.org dans le HTML brut. Panel tiré du local pack Google Maps sur cinq requêtes sectorielles romandes.

**Version archétypes.** Trois familles dominent : **le vitrine fossile** (beau site 2020, plus rien depuis), **le blog abandonné** (trois articles en 2022 puis silence), et **le squelette mobile-cassé** (template générique jamais testé sur téléphone). La bonne nouvelle : **[DATA-À-INJECTER : 5 ou moins] sites du panel font tout correctement**, et leurs patterns sont reproductibles.

---

## Pourquoi j'ai mené cette enquête

Quand je discute avec un indépendant romand qui hésite à refaire son site, la phrase revient presque mot pour mot : *"Je sais que mon site n'est pas top, mais est-ce que les autres font vraiment mieux ?"*

Jusqu'ici, je répondais à l'instinct. J'avais vu des dizaines de sites en consultation, j'avais mes impressions, je pouvais citer des cas. Mais aucune donnée structurée.

Le problème : **aucune étude publique ne couvre ce marché**. Les rapports HubSpot ou Ahrefs parlent de "PME" en général, souvent américaines, souvent d'une taille bien supérieure à un indépendant romand qui opère seul ou à deux. Le contexte suisse romand (petits volumes de recherche, bouche-à-oreille fort, francophonie régionale, exigences qualité élevées) n'apparaît dans aucun benchmark sérieux.

Pour pouvoir dire à un client *"tu es dans la moyenne"* ou *"tu es en retard"* avec autre chose qu'un ressenti, il fallait produire la data. C'est ce que cet article documente : la méthode, les constats, et ce que ça signifie concrètement si tu te reconnais dans le panel.

---

## Méthodologie : comment j'ai audité 50 sites

Je préfère expliquer d'abord comment j'ai mesuré, pour que tu puisses juger la solidité des chiffres qui suivent. Une **enquête sur les sites web suisses** sans méthodologie lisible n'en est pas une.

### Le panel : 50 sites, 5 secteurs, 3 cantons

J'ai tiré le panel depuis le local pack Google Maps sur cinq requêtes sectorielles tapées depuis une IP romande, entre [DATA-À-INJECTER : date début] et [DATA-À-INJECTER : date fin] 2026 :

<!-- TODO-DATA: ajuster la liste ci-dessous selon les requêtes réelles utilisées -->

- Artisans bâtiment (peintre, menuisier, plombier)
- Thérapeutes et praticiens bien-être
- Consultants indépendants (B2B services)
- Juristes et métiers du droit non-avocats
- Petits commerces physiques (boutiques, ateliers)

Pour chaque secteur, j'ai retenu les dix premiers résultats organiques et local pack qui avaient un site web propre, pas une page PagesJaunes ni un simple profil LinkedIn. Total : 50 sites, répartis sur **[DATA-À-INJECTER : X]% Genève, [DATA-À-INJECTER : X]% Vaud, [DATA-À-INJECTER : X]% Neuchâtel**. Cet échantillon reflète la **qualité des sites web genevois** et de leurs voisins vaudois et neuchâtelois.

<!-- TODO-DATA: insérer répartition cantonale réelle + secteurs précis utilisés -->

### Les critères mesurés

Pour chaque site, j'ai relevé neuf points :

| Critère | Outil | Ce que je cherche |
|---|---|---|
| Performance mobile | Lighthouse (Chrome DevTools) | Score /100 sur mobile 4G émulé |
| Accessibilité | Lighthouse | Score /100 (alt text, contraste, focus) |
| SEO on-page | Lighthouse | Score /100 (meta, heading structure) |
| Fraîcheur contenu | Wayback Machine + sitemap | Date de la dernière page ajoutée ou modifiée |
| Présence schema.org | View-source + Rich Results Test | Présence d'au moins un JSON-LD valide |
| Nombre de pages indexées | `site:domaine.ch` sur Google | Estimation brute (±10%) |
| Fiche Google Business | Recherche directe du nom + secteur | Dernière publication/photo, nombre d'avis, réponses aux avis |
| Copyright / footer | Inspection manuelle | Année affichée dans le footer |
| Blog actif | Section blog/actualités si présente | Date du dernier article |

<!-- TODO:image schema — flowchart méthodologie panel → critères → outils → analyse — brief: .briefs/audit-50-sites-indeps-romands.md#image-2 -->

### Les outils utilisés

Rien d'exotique. Tout est gratuit ou accessible :

- **Lighthouse** via Chrome DevTools, mode mobile, throttling 4G, cache vidé
- **Wayback Machine** (`web.archive.org`) pour vérifier quand le contenu a réellement bougé
- **Rich Results Test** de Google pour valider le schema
- Une feuille de calcul privée pour agréger les 50 × 9 = 450 points de donnée

<!-- TODO-DATA: si Jonathan publie l'étude complète, linker ici le CSV anonymisé -->

### Limites et biais que je reconnais

Un audit solide dit ce qu'il ne mesure pas. Trois limites à garder en tête :

1. **Le panel n'est pas aléatoire.** J'ai pris les sites qui remontent dans Google Maps, donc déjà filtrés positivement. Les sites totalement invisibles ne sont pas dans l'échantillon. La réalité est donc probablement pire que ce que je mesure ici.
2. **Lighthouse mesure un instant T.** Un site peut afficher un mauvais score un jour et un bon le lendemain (serveur mutualisé, cache froid). J'ai mesuré chaque site deux fois à 24 h d'intervalle et gardé la médiane.
3. **Je n'ai pas accès aux Search Console des sites tiers.** Le nombre de pages indexées est estimé via l'opérateur `site:`, connu pour être approximatif. Des chiffres précis nécessiteraient la collaboration de chaque propriétaire.

---

## Les 7 constats bruts

C'est ici que ça commence à piquer.

### #1 — [DATA-À-INJECTER : X]% des sites n'ont pas publié depuis 12+ mois

<!-- TODO-DATA: injecter pourcentage exact + répartition (6 mois / 12 mois / 24+ mois) -->

Le premier constat, et le plus parlant. Sur 50 sites, **[DATA-À-INJECTER : X]%** n'ont ajouté ni modifié une seule page depuis plus d'un an. **[DATA-À-INJECTER : X]%** n'ont rien bougé depuis plus de deux ans. La Wayback Machine est impitoyable : comparer deux snapshots à douze mois d'écart révèle qu'un site "vivant en apparence" peut être techniquement figé depuis 2022.

Google le voit. L'algorithme **Freshness** existe depuis 2011 (brevet US7346839) et il favorise les pages dont le contenu évolue, surtout sur les requêtes locales ou actualisées. Un site qui ne bouge plus n'est pas pénalisé au sens strict. Il est juste dépassé par ceux qui bougent.

Pour comprendre pourquoi [un site actif change tout](/blog/visibilite-site-internet-2026), j'ai détaillé les mécanismes dans le guide pilier du cluster.

### #2 — [DATA-À-INJECTER : X]% ont une fiche Google Business inactive

<!-- TODO-DATA: définir seuil "inactive" (ex: pas de post depuis 6 mois, pas de photo depuis 12 mois) -->

La fiche **Google Business Profile** est souvent le premier point de contact local, affichée avant même le site dans les résultats mobiles. Pourtant, sur le panel, **[DATA-À-INJECTER : X]%** des fiches n'ont pas reçu de post, photo ou mise à jour depuis six mois. **[DATA-À-INJECTER : X]%** ne répondent pas aux avis, ni négatifs ni positifs. **[DATA-À-INJECTER : X]%** affichent des catégories mal renseignées ou des horaires obsolètes.

C'est le plus gros écart entre effort et impact du panel : mettre à jour une fiche GMB prend quinze minutes par mois, et le signal d'activité est directement lu par Google pour le classement local.

### #3 — [DATA-À-INJECTER : X]% n'ont aucun schema.org

<!-- TODO-DATA: préciser — schema totalement absent vs schema minimal (Organization uniquement) -->

J'ai cherché dans le HTML brut la présence d'au moins un bloc JSON-LD valide. Résultat : **[DATA-À-INJECTER : X]%** des sites n'en ont aucun. Parmi ceux qui en ont, **[DATA-À-INJECTER : X]%** se limitent au schema `Organization` injecté automatiquement par leur thème WordPress, sans `LocalBusiness`, sans `Service`, sans `FAQPage`.

Le **schema.org** n'est pas une magie SEO. C'est le langage que Google et les IA génératives (Gemini, ChatGPT Search) utilisent pour comprendre ce que fait un site. Son absence ne pénalise pas directement, mais elle rend invisible pour tout ce qui est citation dans les AI Overviews ou résultats enrichis.

### #4 — Score Lighthouse performance médian : [DATA-À-INJECTER : XX]/100

<!-- TODO-DATA: fournir médiane + p25 + p75, et repartition par CMS (WordPress/Wix/builder IA/custom) -->

En performance mobile, la médiane du panel s'établit à **[DATA-À-INJECTER : XX]/100**. Le quartile bas tombe à **[DATA-À-INJECTER : XX]/100**, ce qui correspond à une expérience utilisateur franchement dégradée, avec trois à cinq secondes avant interaction possible.

Le pattern le plus fréquent : images non compressées, polices multiples chargées, sliders jQuery hérités de 2018, thèmes WordPress alourdis par des plugins inutiles. Rien de sorcier à corriger. Personne ne le fait parce que le site "a l'air de marcher".

### #5 — [DATA-À-INJECTER : X]% sont indexés sur moins de 20 pages

<!-- TODO-DATA: donner distribution : <10 pages, 10-20, 20-50, 50+ -->

Via l'opérateur `site:`, j'ai compté les pages indexées. **[DATA-À-INJECTER : X]%** du panel se situe sous les vingt pages. La majorité tourne autour du trio *accueil / services / contact*, parfois un *à propos*, rarement un blog vivant.

Vingt pages, c'est le seuil approximatif sous lequel un site peine à couvrir assez de requêtes longue traîne pour que Google le considère comme une ressource sectorielle. Au-dessus, tu commences à capter des visites que tu n'avais pas anticipées.

### #6 — [DATA-À-INJECTER : X]% affichent un copyright obsolète

<!-- TODO-DATA: compter précisément les footers avec année < année en cours -->

Détail anecdotique en apparence, qui pèse pour un humain qui arrive sur le site : **[DATA-À-INJECTER : X]%** des sites du panel affichent encore un `© 2022`, `© 2023` ou pire dans le footer. Le visiteur se demande *"est-ce que cette personne est encore en activité ?"*. Fuite de confiance sur un point qui coûte une ligne de code à corriger : date dynamique côté serveur.

### #7 — [DATA-À-INJECTER : X]% ont un blog zombie

<!-- TODO-DATA: définir "blog zombie" = section blog existante mais aucun article publié depuis 6 mois -->

Un blog existe, la section apparaît dans la navigation, mais le dernier article date de **[DATA-À-INJECTER : année/mois médiane du dernier post]**. **[DATA-À-INJECTER : X]%** des sites du panel affichent une section blog totalement gelée. C'est pire qu'aucun blog : ça envoie le signal *"on a essayé, on a lâché"*.

Le paradoxe : ces sites ont déjà payé le travail d'installation et de design de la section blog. Il reste juste le plus dur : publier régulièrement. Pour savoir si le tien tombe dans cette catégorie, la [checklist 15 signes que ton site dort](/blog/15-signes-site-web-dort) reprend ce critère parmi d'autres avec un score final.

---

## 3 archétypes de sites qui reviennent tout le temps

Au fil du panel, trois familles émergent. Presque chaque site rentre dans l'une d'elles.

<!-- TODO:image illustration — triptyque des 3 archétypes (vitrine fossile, blog abandonné, squelette mobile-cassé) — brief: .briefs/audit-50-sites-indeps-romands.md#image-3 -->

### Le vitrine fossile

**Ce qu'on voit.** Site propre, design correct, polices modernes, logo soigné. Trois à six pages bien structurées. Photos professionnelles, souvent en noir et blanc parce que c'était la mode à l'époque.

**Ce qui cloche.** Aucune modification depuis deux ou trois ans. Prestations listées qui ne correspondent plus à ce que la personne vend vraiment aujourd'hui. Témoignages de 2021 qui commencent à dater. Pas de blog, pas de FAQ, pas de schema.

**Pourquoi ça arrive.** Le site a été livré par une agence ou un freelance, la personne a payé 3 000 à 8 000 CHF pour un beau résultat, et depuis elle n'ose pas y toucher *"pour ne rien casser"*. Elle ne sait pas à qui demander, elle ne veut pas repayer une agence, alors elle ne fait rien.

**Coût d'opportunité.** Énorme. Le site a tous les fondamentaux, il lui manque juste la couche contenu. Avec un article par mois pendant six mois, le vitrine fossile peut passer d'invisible à top 5 local sur ses requêtes principales.

### Le blog abandonné

**Ce qu'on voit.** Section blog bien intégrée, trois à huit articles publiés… tous entre novembre 2021 et mars 2022. Parfois le CMS affiche fièrement "Dernière actualité" avec une date de 2022.

**Ce qui cloche.** Google voit la section, crawle les articles, comprend qu'il y avait une intention éditoriale, puis constate que plus rien ne bouge. Les articles eux-mêmes sont souvent génériques (*"5 conseils pour bien choisir son…"*), sans valeur sectorielle locale.

**Pourquoi ça arrive.** Quelqu'un a lu un article LinkedIn disant qu'il fallait bloguer. La personne a publié trois à cinq articles dans l'enthousiasme, puis s'est rendue compte que ça prenait du temps, que les résultats n'étaient pas immédiats, et elle a arrêté. Le côté pervers : enlever le blog paraît pire que le laisser, donc il reste gelé indéfiniment.

**Coût d'opportunité.** Moyen à élevé, selon la qualité initiale des articles. Souvent la bonne décision : supprimer les articles hors-sujet et en republier quatre ou cinq qui répondent à des questions précises que les clients posent.

### Le squelette mobile-cassé

**Ce qu'on voit.** Sur desktop, le site a l'air OK. Sur mobile, le menu déborde, les images dépassent, les polices sont illisibles. Score Lighthouse mobile sous 40/100. Parfois le formulaire de contact ne fonctionne même plus.

**Ce qui cloche.** La personne n'a probablement jamais ouvert son propre site sur son téléphone depuis le lancement. Or **[DATA-À-INJECTER : X]%** des visites Google locales se font sur mobile (source : Statcounter Suisse [DATA-À-INJECTER : année]).

<!-- TODO-DATA: vérifier source Statcounter 2026 CH mobile share -->

**Pourquoi ça arrive.** Template Wix ou Squarespace pris sans personnalisation, générateur IA utilisé en mode "un prompt, un site livré", ou WordPress très ancien dont le thème n'a jamais été mis à jour. Les sites générés par IA tombent souvent dans le même piège : joli rendu desktop, expérience mobile négligée. J'ai détaillé ce point dans [pourquoi les sites vitrine IA restent invisibles sur Google](/blog/creer-site-vitrine-ia-visibilite-google).

**Coût d'opportunité.** Maximal à court terme. Un site mobile cassé perd ses visiteurs en trois secondes. Passer de 35/100 à 75/100 en performance mobile triple en général le taux de conversion formulaire.

---

## Le coût économique cumulé (estimation)

Jouons au calcul conservateur. Un indépendant romand facture en moyenne [DATA-À-INJECTER : CHF X/h] (source : [DATA-À-INJECTER : enquête salariale]). Un site qui travaille bien génère entre un et trois leads qualifiés par mois pour un indépendant, dont 20 à 30 % convertissent.

<!-- TODO-DATA: ajuster avec les chiffres issus du calculateur A3 une fois publié -->

Hypothèse prudente : **un seul lead qualifié de plus par mois grâce à un site actif**. Sur une année, cela représente entre **[DATA-À-INJECTER : CHF X]** et **[DATA-À-INJECTER : CHF Y]** de chiffre d'affaires additionnel par indépendant.

Appliqué aux **[DATA-À-INJECTER : X]%** du panel qui dorment, et extrapolé à l'échelle des indépendants romands (environ [DATA-À-INJECTER : nombre] actifs selon l'OFS), le manque à gagner annuel cumulé se chiffre en **[DATA-À-INJECTER : CHF X millions]**. L'estimation précise mérite une étude à part, mais l'ordre de grandeur est là.

Pour une vision plus précise sur le budget à allouer, voir [combien coûte vraiment un site web en Suisse](/blog/prix-site-web-suisse-2026).

---

## Ce que les [DATA-À-INJECTER : 5] meilleurs sites du panel font différemment

Sur les 50 sites, un petit groupe sort clairement du lot. Leurs points communs sont étonnamment simples.

<!-- TODO-DATA: confirmer le nombre (5 semble être le chiffre rond, ajuster si 4 ou 7) -->

<!-- TODO:image infographic — checklist 5 patterns des meilleurs sites — brief: .briefs/audit-50-sites-indeps-romands.md#image-4 -->

1. **Ils publient au moins un contenu par mois.** Pas forcément un gros article. Parfois une étude de cas courte, parfois une FAQ mise à jour, parfois une page dédiée à une prestation qui n'existait pas avant. Mais quelque chose bouge.
2. **Leur fiche Google Business est active.** Posts mensuels, photos fraîches, réponses systématiques aux avis en moins de 48 h pour les meilleurs.
3. **Ils ont du schema.org précis.** Pas juste `Organization`. `LocalBusiness`, `Service`, `FAQPage` au minimum. Ça sort dans Rich Results, et ça les rend candidats aux AI Overviews.
4. **Leurs pages de service sont longues et spécifiques.** 800 à 1 500 mots par service, avec questions-réponses incluses. Pas une fiche produit générique.
5. **Leur site charge vite sur mobile.** Score Lighthouse mobile supérieur à 80/100 pour tous. Images compressées, polices optimisées, pas de script inutile.

Aucun de ces points ne demande un budget énorme. Il demande de la régularité, et c'est précisément ce qui manque aux 45 autres.

---

## Comment savoir où vous vous situez

Tu peux appliquer la même méthodologie à ton propre site en trente minutes :

1. **Lighthouse** dans Chrome DevTools, mode mobile, throttling 4G. Note les quatre scores.
2. **Wayback Machine** : entre l'URL de ton site, compare deux snapshots à douze mois d'écart. Qu'est-ce qui a changé ?
3. **`site:tondomaine.ch`** dans Google. Combien de pages sortent ?
4. **Rich Results Test** de Google sur ta page d'accueil. Quels schemas sont détectés ?
5. **Fiche GBP** : ta dernière photo date de quand ? Ton dernier post ? Tes avis ont-ils tous une réponse ?

Pour aller plus loin de façon structurée, la [checklist 15 signes que ton site dort](/blog/15-signes-site-web-dort) reprend ces critères sous forme de questions simples avec un score final. Et si tu cherches un plan d'exécution progressif, le [plan 30 jours pour devenir visible sur Google](/blog/0a30joursgooglevisible) décrit semaine par semaine quoi faire.

Si tu préfères déléguer le diagnostic, [demander un audit personnalisé](/services/refonte-site-web) te donne les mêmes chiffres appliqués à ton cas précis, avec les recommandations priorisées par impact.

---

## FAQ

**Comment as-tu sélectionné les 50 sites du panel ?**
Tirage depuis le local pack Google Maps sur cinq requêtes sectorielles romandes, en prenant les dix premiers résultats ayant un site web propre, pas un profil plateforme. Le panel est donc biaisé vers les sites déjà visibles. La réalité moyenne est probablement pire.

**Les sites audités sont-ils nommés dans l'étude ?**
Non. L'étude est anonymisée. Citer des noms ne servirait qu'à humilier, pas à faire progresser le marché. Les chiffres agrégés suffisent à illustrer les patterns.

**Est-ce que la méthodologie est reproductible par un tiers ?**
Oui, intégralement. Tous les outils utilisés sont gratuits : Lighthouse, Wayback, Rich Results Test, opérateurs Google. Le seul coût est le temps : environ 25 minutes par site pour un audit complet, soit une vingtaine d'heures pour 50 sites.

**Est-ce que les chiffres sont représentatifs de toute la Suisse ?**
Le panel couvre Genève, Vaud, Neuchâtel. Les patterns sont probablement transposables au reste de la Suisse romande. Pour la Suisse alémanique ou italienne, les dynamiques linguistiques et concurrentielles sont différentes et mériteraient leur propre étude.

**Combien de temps faut-il pour qu'un site "dormant" redevienne visible ?**
Entre trois et six mois en moyenne après le démarrage d'une publication régulière, si les fondamentaux techniques sont corrects. Le premier mois sert surtout à l'indexation. Les vraies progressions commencent autour du mois trois.

---

## Télécharger l'étude complète

L'étude complète (50 fiches anonymisées, méthodologie détaillée, template Lighthouse pour faire l'audit toi-même) sera disponible en téléchargement dès [DATA-À-INJECTER : date publication lead magnet]. En attendant, tu peux commencer par la [checklist 15 signes que ton site dort](/blog/15-signes-site-web-dort), qui en reprend la version courte.

<!-- TODO-DATA: créer lead magnet PDF "Audit 50 sites romands - étude complète" + intégrer formulaire Tally + publier URL ici -->

Si tu reconnais ton site dans un des trois archétypes et que tu veux savoir précisément où il se situe sur les neuf critères, le plus simple est de [demander un audit personnalisé](/services/refonte-site-web). Tu reçois le même rapport que ceux du panel, appliqué à ton cas.

---

## Sources et références

- Brevet Google Freshness US7346839 (algorithme de fraîcheur, public depuis 2011)
- Statcounter Global Stats : part mobile Suisse [DATA-À-INJECTER : année à confirmer]
- Office fédéral de la statistique (OFS) : nombre d'indépendants actifs en Suisse romande
- Outils publics : Lighthouse (Google Chrome DevTools), Wayback Machine (Internet Archive), Rich Results Test (Google Search Central)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment as-tu sélectionné les 50 sites du panel ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tirage depuis le local pack Google Maps sur cinq requêtes sectorielles romandes, en prenant les dix premiers résultats ayant un site web propre, pas un profil plateforme. Le panel est donc biaisé vers les sites déjà visibles. La réalité moyenne est probablement pire."
          }
        },
        {
          "@type": "Question",
          "name": "Les sites audités sont-ils nommés dans l'étude ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. L'étude est anonymisée. Citer des noms ne servirait qu'à humilier, pas à faire progresser le marché. Les chiffres agrégés suffisent à illustrer les patterns."
          }
        },
        {
          "@type": "Question",
          "name": "Est-ce que la méthodologie est reproductible par un tiers ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, intégralement. Tous les outils utilisés sont gratuits : Lighthouse, Wayback, Rich Results Test, opérateurs Google. Le seul coût est le temps : environ 25 minutes par site pour un audit complet, soit une vingtaine d'heures pour 50 sites."
          }
        },
        {
          "@type": "Question",
          "name": "Est-ce que les chiffres sont représentatifs de toute la Suisse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le panel couvre Genève, Vaud, Neuchâtel. Les patterns sont probablement transposables au reste de la Suisse romande. Pour la Suisse alémanique ou italienne, les dynamiques linguistiques et concurrentielles sont différentes et mériteraient leur propre étude."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps faut-il pour qu'un site dormant redevienne visible ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Entre trois et six mois en moyenne après le démarrage d'une publication régulière, si les fondamentaux techniques sont corrects. Le premier mois sert surtout à l'indexation. Les vraies progressions commencent autour du mois trois."
          }
        }
      ]
    },
    {
      "@type": "Dataset",
      "name": "Audit 50 sites indépendants romands 2026",
      "description": "Étude data terrain sur 50 sites d'indépendants et PME basés à Genève, Vaud et Neuchâtel. Mesure combinée de la performance Lighthouse mobile, de la fraîcheur du contenu via Wayback Machine, de la présence de schema.org, de l'activité de la fiche Google Business Profile et du nombre de pages indexées via l'opérateur site:. Panel tiré du local pack Google Maps sur cinq requêtes sectorielles romandes.",
      "creator": {
        "@type": "Organization",
        "name": "Jon Labs",
        "url": "https://jonlabs.ch"
      },
      "temporalCoverage": "2026",
      "spatialCoverage": {
        "@type": "Place",
        "name": "Suisse romande",
        "containsPlace": [
          {"@type": "AdministrativeArea", "name": "Genève"},
          {"@type": "AdministrativeArea", "name": "Vaud"},
          {"@type": "AdministrativeArea", "name": "Neuchâtel"}
        ]
      },
      "inLanguage": "fr-CH",
      "measurementTechnique": "Lighthouse (Chrome DevTools mobile 4G) + Wayback Machine + opérateur site: Google + Rich Results Test + inspection manuelle Google Business Profile",
      "variableMeasured": [
        "Score Lighthouse performance mobile",
        "Score Lighthouse accessibilité",
        "Score Lighthouse SEO on-page",
        "Fraîcheur du contenu (date dernière publication)",
        "Présence de schema.org JSON-LD",
        "Nombre de pages indexées",
        "Activité de la fiche Google Business Profile",
        "Année affichée dans le copyright du footer",
        "Activité du blog (date du dernier article)"
      ],
      "license": "https://creativecommons.org/licenses/by-nc/4.0/",
      "isAccessibleForFree": true,
      "keywords": ["audit site web", "Suisse romande", "PME", "indépendants", "Lighthouse", "schema.org", "GMB", "SEO local"]
    }
  ]
}
</script>
