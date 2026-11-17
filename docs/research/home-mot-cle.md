# Mot-clé principal de la page d'accueil — rebrand v2

> 2026-11-17, branche `rebrand-v2`. Recherche seulement : rien n'est appliqué.
> Question : sur quel mot-clé positionner `/` (title + meta) une fois « développeur web freelance Genève »
> rendu à `/developpeur-web-freelance-geneve`, sans cannibaliser `/consultant-ia`, `/hermes`,
> `/services/developpement-application-mobile`, `/services/creation-site-web`.

## Sources et limites

| Donnée | Source | Limite |
|---|---|---|
| Requêtes de la home | API Search Console, `sc-domain:jonlabs.ch`, filtre page = `/` (www, non-www, http), `dataState: final` ; **12 m** = 15.11.2025 → 14.11.2026, **3 m** = 15.08 → 14.11.2026 (même méthode que `architecture-pages-v2.md`) | Les requêtes anonymisées ne sont pas listées : la somme par requête (12 m : 7 660 imp / 19 clics) est inférieure au total page |
| SERP des candidats | Outil de recherche web de l'agent (index US, pas google.ch géolocalisé) | Classement indicatif, pas la SERP réelle google.ch FR. Chrome (google.ch) n'a pas répondu |
| Volume / difficulté | — | **Non obtenus** : `DATAFORSEO_LOGIN`/`PASSWORD` absents de l'environnement. Seul proxy : impressions GSC du site |

À refaire avant décision finale : SERP google.ch réelle (navigation privée, `gl=ch&hl=fr`) et volumes
DataForSEO (`location_code` Suisse, langue fr) sur les 3 meilleurs candidats.

---

## 1. Ce que la home reçoit aujourd'hui (GSC)

**Totaux page** (somme des 3 variantes d'URL) :

| Fenêtre | Impressions | Clics | Position (www / non-www) |
|---|---|---|---|
| 12 m | 9 577 | 109 | 47.0 / 9.0 |
| 3 m | 3 932 | 44 | 58.4 / 7.4 |

Pays 12 m : France 3 670 imp / 6 clics, Suisse 3 663 / 13 (requêtes attribuées). 3 m : Suisse 2 139, France 1 051.

**Requêtes attribuées qui ont cliqué (12 m)** : « john labs » 6, « développeur web » 3 (219 imp, p4.7),
« développeur web freelance » 2 (258 imp, p11.2), « développeur web genève » 1 (97 imp, p19.3),
« développeur freelance » 1, « jon lab » 1, + 5 requêtes à 1 clic. **19 clics attribués sur 109** :
le reste est anonymisé, très probablement de la marque et de la longue traîne.

**Top impressions 12 m** : « spécialiste développement web suisse » 507 (p68.6), « web development » 322 (p6.4,
hors CH probable), « développeur web freelance » 258 (p11.2), « développement application mobile genève » 220
(p69), « développeur web » 219 (p4.7), « société développement web suisse » 200 (p66), puis une longue traîne
« agence / entreprise développement web {ville de Haute-Savoie} » en positions 1-15, sans clic.

**Requêtes IA sur la home** : quasi nulles (« expert ia freelance suisse romande » 3 imp p84). Le site
capte l'IA ailleurs : `/blog/hermes-agent-ia-pme` (« hermes agent » 717 imp p8.6), `/consultant-ia`
(« expert ia freelance suisse romande » 106 imp p12.4, « consultant ia » 30 imp p30.4), `/hermes`.

### Ce qu'on risque de perdre en retirant « développeur web »

- **Environ 7 clics/an attribués** (« développeur web », « développeur web freelance », « développeur web genève »,
  « développeur freelance ») et ~600 impressions en positions 4-20. Faible en volume, mais ce sont les seules
  requêtes non-marque où la home est en première page.
- **Les clics de marque ne dépendent pas du title** (« john labs », « jon lab », non-www p9) : pas de risque.
- La longue traîne Haute-Savoie (« entreprise développement web ville-la-grand » p1-8) est déjà portée par
  `/developpement-web/annemasse` et `/gaillard` ; elle n'a jamais cliqué sur la home.
- **Mitigation** : garder un lien depuis la home vers `/developpeur-web-freelance-geneve` avec l'ancre
  « développeur web freelance à Genève », et laisser « développeur » dans le corps de la home (bio, pas le title).
  Google basculera ces requêtes sur la page dédiée ; à vérifier dans GSC 6-8 semaines après.

---

## 2. Candidats — SERP

Source : recherche web de l'agent (voir limites). « Home possible » = des homes d'agences / de freelances
apparaissent ou l'intention est « trouver un prestataire ».

| Candidat | Qui ranke (indicatif) | Type de pages | Intention | Home possible ? |
|---|---|---|---|---|
| agence ia genève | Annuaires (Sortlist, La Fabrique du Net), profils Malt, quelques agences (Qubitech, NexaLab), actu (AI Summit) | Fiches annuaire, homes d'agences | Commerciale, prestataire local | **Oui** — SERP faible, peu d'acteurs locaux réels |
| développeur ia genève | Offres d'emploi (jobup, jobs.ch, SpeciTec), Malt, formations | Annonces, profils | **Mixte, surtout recrutement** | Moyen — intention polluée par l'emploi |
| freelance ia genève | Missions freelance, profils Malt, Twine | Profils / plateformes | Recrutement freelance | Faible — plateformes dominent |
| agent ia entreprise (suisse) | Kleap, PwC, Swisscom, Enterprise Bot, annuaires AI Superior, blogs | Pages service, livres blancs | Informationnelle + commerciale | Non pour la home ; **territoire de `/hermes`** |
| agence automatisation ia suisse | Kleap, Agence 25, annuaires (Semrush, AI Superior, Hellodarwin), Malt | Homes/pages service d'agences, annuaires | Commerciale | Oui, mais « Suisse » entier, concurrence alémanique |
| intégration ia pme suisse | Confédération (kmu.admin.ch), usam, BDO, Raiffeisen, Le Temps | Contenu institutionnel / études | **Informationnelle** | Non — cible pour un article |
| solutions ia sur mesure suisse | Annuaires AI Superior, Swisscom AI Platform, IA Swiss, Edana | Annuaires, pages produit | Commerciale | Moyen — annuaires dominent |
| application ia sur mesure | Comeup, Fiverr, agences FR (Scroll, LeverX), guides | Gigs, pages service | Commerciale, faible ancrage local | Moyen — pas de localisation, SERP FR |
| développement agent ia | Kleap, EY, SAP, ITTA (formations), annuaires | Pages service, formations | Mixte | Non — recouvre `/hermes` |
| expert ia genève | Malt, offres d'emploi, HEG/HUG/Jedha, annuaire Sortlist | Profils, formations | Mixte (emploi / formation / prestataire) | Faible ; recouvre `/consultant-ia` (« expert ia freelance suisse romande ») |
| développement ia sur mesure genève | 2 freelances genevois (Malt), cabinets (Sia Partners), studios hors Suisse (SmartDev, Context Studios) | Profils, pages service | **Commerciale, prestataire de dev** | **Oui** — aucun acteur local établi |
| automatisation ia pme genève | Canton (formation IA PME gratuite), kmu.admin, Malt, NexaLab | Institutionnel + profils | Mixte | Moyen |
| agence ia suisse romande pme | NexaLab, Velane, IA Swiss, FynUp, ITTA | Homes d'agences / petits studios | Commerciale | **Oui** — les homes de petits acteurs romands rankent |

Volumes : non obtenus (pas de DataForSEO). Ordre de grandeur probable : bas (dizaines/mois en CH) pour les
requêtes « + genève » ; le site n'a aucune impression sur ces formulations aujourd'hui.

---

## 3. Recommandation

### Partage des territoires (anti-cannibalisation)

| Page | Mot-clé | Ne pas utiliser ailleurs |
|---|---|---|
| `/` | **développement IA sur mesure (Genève / PME romandes)** + applications IA | — |
| `/consultant-ia` | consultant IA (+ villes) | « consultant », « expert IA » |
| `/hermes` | agent IA (sur mesure) pour PME | « agent IA sur mesure » en tête de title |
| `/developpeur-web-freelance-geneve` | développeur web freelance Genève | « développeur web » |
| `/services/developpement-application-mobile` | développement application mobile | « application mobile » |

### Mot-clé principal : « développement IA sur mesure » (ancré Genève / PME romandes)

- **Intention commerciale de prestataire de dev** : c'est ce que fait Jon (il construit), là où « consultant IA »
  (conseil) et « agent IA » (un produit, Hermes) ont déjà leur page.
- **SERP sans acteur local établi** : freelances Malt, cabinets et studios étrangers ; une home de freelance genevois
  avec preuves (cas, prix CHF, délais) peut y entrer.
- **Recouvre le message** « applications où équipes et agents IA collaborent » : le title nomme la catégorie
  (développement IA), la meta porte la promesse.
- Pas d'emploi dans la SERP (contrairement à « développeur IA » / « expert IA »).

### Secondaires

1. **« agence IA Genève / Suisse romande »** — SERP où des homes de petits studios rankent (NexaLab, Velane).
   À placer dans le H1/sous-titre ou la meta, pas forcément dans le title. Jon n'est pas une agence : formuler
   « l'alternative à une agence IA » dans le corps.
2. **« applications IA sur mesure »** — porte le message produit ; à utiliser dans le H1 ou le title n° 2.

### Point de vigilance à corriger

**`/consultant-ia` a « systèmes IA sur mesure » dans son title** (« Consultant IA pour PME romandes — systèmes IA
sur mesure ») et « Consultant IA à Genève : je conçois des systèmes IA sur mesure » dans sa meta. Si la home prend
« IA sur mesure », il faut retirer cette queue du title de `/consultant-ia` (par ex. « Consultant IA pour PME
romandes : stratégie et mise en place », à valider) pour que chaque page ait un seul sujet. Idem `/hermes`
(« Agent IA sur mesure pour PME romandes ») : acceptable car « agent » le différencie, mais la home ne doit pas
dire « agents IA sur mesure » dans son title.

### 3 titles

Règle du Layout (`src/layouts/Layout.astro`) : si le titre source fait **≤ 50 caractères**, le Layout ajoute
« | Jonlabs » (10 car.) ; au-delà, pas de marque. Les 3 propositions tiennent sous 50 → marque affichée.

| # | Title source | Car. | Rendu |
|---|---|---|---|
| 1 (recommandé) | Développement IA sur mesure à Genève | 36 | … \| Jonlabs (46) |
| 2 | Applications IA sur mesure pour PME romandes | 44 | … \| Jonlabs (54) |
| 3 | Développement IA sur mesure pour PME à Genève | 45 | … \| Jonlabs (55) |

### 2 meta descriptions

1. (148 car.) Des applications où vos équipes et vos agents IA collaborent. Développement IA sur mesure pour PME
   romandes, livré en 2 à 4 semaines, dès CHF 1'500.
2. (146 car.) Développement IA sur mesure à Genève : des applications où vos équipes et vos agents IA collaborent.
   Agents, automatisations, apps. Dès CHF 1'500.

### Suivi

- GSC 6-8 semaines après mise en ligne : requêtes « développeur web* » doivent migrer vers
  `/developpeur-web-freelance-geneve` ; la home doit commencer à apparaître sur « ia sur mesure » / « agence ia ».
- Avant de figer : SERP google.ch réelle + volumes DataForSEO sur « développement ia sur mesure »,
  « agence ia genève », « application ia sur mesure ».
