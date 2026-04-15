# Brief SEO : J'ai audité 50 sites d'indépendants romands

## Metadata
- Slug: audit-50-sites-indeps-romands
- Slug rationale: descriptif, préserve l'entité "sites indépendants romands", évergeen (pas de date suffixe car la valeur de l'enquête n'est pas tied à une année précise — la méthodologie reste valable). L'article A2 du cluster "Site actif".
- Module: C adapté (étude data/enquête terrain, credibility-driven, proche YMYL sur le critère E-E-A-T)
- Target word count: 2 200-2 800
- Primary keyword: audit site web suisse romande
- Date: 2026-04-22
- Persona: Problem-aware — indépendant/PME romand qui doute de son propre site et cherche un benchmark chiffré avant de décider
- Tonalité: Jon Labs — 1ère personne, franco-suisse, direct, crédible, méthodologique, sans jargon vide

## Contrainte data critique
Jonathan n'a PAS encore collecté les vraies données des 50 sites. Tous les chiffres doivent rester des placeholders :
- `[DATA-À-INJECTER: description précise]` dans le corps visible
- `<!-- TODO-DATA: description -->` en commentaire HTML pour grep rapide

Le draft v1 (src/content/blog/audit-50-sites-indeps-romands.md) contient déjà 24 `[DATA-À-INJECTER]` + 15 `<!-- TODO-DATA -->`. **Ils doivent être préservés ou remplacés par des équivalents dans la version finale.** Ne JAMAIS inventer de chiffres. Tolérance score /seo-review = 80 (pas 85).

## Snippet recommandé (angle Expertise/Enquête)
- Title: Audit 50 sites indépendants romands : état des lieux (56 car.)
- H1: J'ai audité 50 sites d'indépendants romands : voici ce que j'ai trouvé (71 car.)
- Meta description: J'ai audité 50 sites d'indépendants romands (Genève, Vaud, Neuchâtel). Méthode Lighthouse + GMB + Wayback. Les constats bruts, les 3 archétypes, le coût. (154 car.)

## Snippet variantes

### Variante B — Angle Solution/Douleur
- Title: Sites indépendants romands : l'audit qui dit la vérité (54 car.)
- H1: J'ai audité 50 sites d'indépendants romands : voici ce que j'ai trouvé (71 car.)
- Meta description: Ton site ne performe pas ? J'ai audité 50 sites de pros romands pour te donner un benchmark honnête. Méthode, constats bruts, 3 archétypes et plan d'action. (154 car.)

### Variante C — Angle Local/GEO
- Title: Audit site web Suisse romande : étude 50 sites (49 car.)
- H1: J'ai audité 50 sites d'indépendants romands : voici ce que j'ai trouvé (71 car.)
- Meta description: Enquête data sur 50 sites d'indépendants à Genève, Vaud et Neuchâtel. Scores Lighthouse, GMB, schema.org. Le premier benchmark réel du marché romand. (151 car.)

**Recommandation** : Variante A (Expertise/Enquête). L'intention dominante est informationnelle + validation, le persona cherche un benchmark crédible, et l'angle "enquête" signale la rigueur méthodologique qui distingue l'article de ses concurrents SEO.

## Keyword Cluster

| Role | Keyword (query brut) | Volume | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| **Principal** | audit site web suisse romande | moyen | Title, H1, meta, intro, H2 méthodologie | audit d'un site web en Suisse romande / audit de sites web romands |
| Secondaire | audit site indépendant | moyen | H2 pourquoi, H3 panel | audit d'un site d'indépendant / auditer le site d'un indépendant |
| Secondaire | état des sites PME romandes | faible-moyen | H2 constats, intro | l'état réel des sites des PME romandes / l'état des sites d'indépendants romands |
| Secondaire | étude site web Suisse | faible | H2 méthodologie, CTA final | cette étude sur les sites web en Suisse / enquête sur les sites web suisses |
| Secondaire | qualité sites web Genève | faible | H3 panel, coût cumulé | la qualité des sites web à Genève / la qualité des sites web genevois |
| Secondaire | score Lighthouse moyen PME | faible | H3 constat #4 | le score Lighthouse médian des PME romandes / le score Lighthouse moyen d'une PME |
| Long-tail | sites web dormants Suisse | faible | H2 archétypes, coût cumulé | les sites web dormants en Suisse / un site dormant en Suisse romande |
| Long-tail | benchmark site web indépendant romand | niche | TL;DR, FAQ | un benchmark pour un site d'indépendant romand |
| Long-tail | comment auditer son site en Suisse | niche | H2 "où vous situer", FAQ | comment auditer son propre site en Suisse / comment mener un audit de site en Suisse |

**Rappel au writer** : dans la prose, utiliser les formulations naturelles. Les formes brutes ne sont autorisées que dans title, meta, H1/H2, tags frontmatter, alt texts.

## Structure H2/H3

### Intro (3 paragraphes courts)
- Hook : "Personne n'a jamais publié de chiffres sur l'état réel des sites d'indépendants romands."
- Scope : 50 sites, 3 cantons, 5 secteurs, 3 semaines.
- Promesse : répondre à "à quel point mon cas est-il commun ?"

### TL;DR — 3 façons de lire l'étude
Keywords: audit site web suisse romande, étude site web Suisse
Contenu attendu: 3 paragraphes bold ("Version chiffres", "Version méthode", "Version archétypes"). Chaque paragraphe = 2-3 phrases. Tous les chiffres en placeholders. Le bold doit tomber sur le keyword principal ou une reformulation proche.

### H2: Pourquoi j'ai mené cette enquête
Keywords: audit site indépendant, état des sites PME romandes
Contenu attendu: Justifier pourquoi aucune étude publique ne couvre ce marché (HubSpot/Ahrefs = marché US, pas le tissu romand). Poser le besoin d'un benchmark local. 200-300 mots. Introduire le fait que c'est la 1ère personne qui parle.

### H2: Méthodologie — comment j'ai audité 50 sites
Keywords: audit site web suisse romande, étude site web Suisse
Contenu attendu: Présenter la méthodo AVANT les chiffres (règle E-E-A-T). Tableau des 9 critères mesurés. Outils (tous gratuits). Limites honnêtes.

#### H3: Le panel — 50 sites, 5 secteurs, 3 cantons
Contenu: Liste des 5 secteurs (artisans, thérapeutes, consultants, juristes, commerces). Répartition cantonale en placeholder. Processus de sélection (top 10 local pack, site web propre requis).

#### H3: Les critères mesurés
Contenu: Tableau à 9 lignes (Performance mobile, Accessibilité, SEO on-page, Fraîcheur contenu, schema.org, pages indexées, GMB, copyright footer, blog actif). Outil + ce qui est cherché.

#### H3: Les outils utilisés
Contenu: Lighthouse, Wayback Machine, Rich Results Test, opérateur `site:`, feuille de calcul. Tout gratuit. ~25 min par site, ~20h total.

#### H3: Limites et biais que je reconnais
Contenu: 3 limites (panel biaisé positivement car top local pack / Lighthouse mesure instant T / pas d'accès GSC tiers). Règle : un audit solide dit ce qu'il ne mesure pas.

### H2: Les 7 constats bruts
Keywords: score Lighthouse moyen PME, sites web dormants Suisse
Contenu attendu: 1 H3 par stat, chaque H3 commence par `#N — [DATA-À-INJECTER : X]%` dans le titre. Chaque constat fait 150-250 mots.

#### H3: #1 — [DATA-À-INJECTER]% des sites n'ont pas publié depuis 12+ mois
Contenu: Brevet Freshness Google US7346839. Wayback Machine comme preuve. Lien retour pilier.

#### H3: #2 — [DATA-À-INJECTER]% ont une fiche Google Business inactive
Contenu: Définition "inactive" (pas de post 6 mois, pas de photo 12 mois, absence de réponse aux avis). Ratio effort/impact le plus élevé.

#### H3: #3 — [DATA-À-INJECTER]% n'ont aucun schema.org
Contenu: Distinction "aucun schema" vs "Organization minimal thème WP". Impact sur AI Overviews et Rich Results.

#### H3: #4 — Score Lighthouse performance médian : [DATA-À-INJECTER]/100
Contenu: Médiane + p25 + p75 en placeholders. Patterns fréquents (images non compressées, polices multiples, sliders jQuery, plugins WP inutiles).

#### H3: #5 — [DATA-À-INJECTER]% indexés sur moins de 20 pages
Contenu: Distribution <10/10-20/20-50/50+ en placeholders. Seuil 20 pages = capacité longue traîne.

#### H3: #6 — [DATA-À-INJECTER]% affichent un copyright obsolète
Contenu: © 2022 ou antérieur. Fuite de confiance, correction = 1 ligne de code.

#### H3: #7 — [DATA-À-INJECTER]% ont un blog zombie
Contenu: Définition "blog zombie" (section existante, dernier article +6 mois). Lien vers checklist A1.

### H2: 3 archétypes de sites qui reviennent tout le temps
Keywords: sites web dormants Suisse, qualité sites web Genève
Contenu attendu: 3 familles. Chaque archétype suit le schéma : Ce qu'on voit / Ce qui cloche / Pourquoi ça arrive / Coût d'opportunité. ~250 mots par archétype.

#### H3: Le vitrine fossile
Design propre 2020, aucune modif depuis 2-3 ans. Coût opportunité énorme, fondamentaux déjà là.

#### H3: Le blog abandonné
3-8 articles tous entre nov 2021 et mars 2022. Google voit l'intention morte.

#### H3: Le squelette mobile-cassé
Desktop OK, mobile cassé. Lien vers article A3 "site IA invisible".

### H2: Le coût économique cumulé (estimation)
Keywords: qualité sites web Genève, état des sites PME romandes
Contenu attendu: Calcul conservateur : 1 lead additionnel/mois. Extrapolation à l'ensemble des indépendants romands (OFS). Ordre de grandeur en millions CHF, tout en placeholders. Lien vers article prix.

### H2: Ce que les 5 meilleurs sites du panel font différemment
Keywords: benchmark site web indépendant romand
Contenu attendu: Liste 1-5. Publication mensuelle, GMB actif, schema précis, pages services longues (800-1500 mots), Lighthouse mobile >80. Conclusion : pas de budget magique, juste de la régularité.

### H2: Comment savoir où vous vous situez
Keywords: comment auditer son site en Suisse
Contenu attendu: 5 étapes reproductibles (Lighthouse, Wayback, site:, Rich Results, GBP). 30 min. Liens vers A1 checklist, 0-30 jours, et service refonte.

### H2: FAQ
Keywords: audit site web suisse romande, benchmark site web indépendant romand
Contenu attendu: 5 Q/R pour schema FAQPage.
1. Comment as-tu sélectionné les 50 sites ?
2. Les sites audités sont-ils nommés ?
3. La méthodologie est-elle reproductible ?
4. Les chiffres sont-ils représentatifs de toute la Suisse ?
5. Combien de temps pour qu'un site dormant redevienne visible ?

### H2: Télécharger l'étude complète
Keywords: étude site web Suisse
Contenu attendu: CTA lead magnet (PDF étude complète) + fallback checklist A1 + fallback audit personnalisé. Tolérance : placeholders acceptés pour date publication lead magnet.

## Maillage interne (liens sortants obligatoires)

| Ancre textuelle | URL cible | Section de l'article |
|---|---|---|
| pourquoi un site actif change tout | /blog/visibilite-site-internet-2026 | H3 Constat #1 |
| checklist 15 signes que ton site dort | /blog/15-signes-site-web-dort | H3 Constat #7 + H2 "Où vous situer" + CTA final |
| plan 30 jours pour devenir visible sur Google | /blog/0a30joursgooglevisible | H2 "Où vous situer" |
| pourquoi les sites vitrine IA restent invisibles sur Google | /blog/creer-site-vitrine-ia-visibilite-google | H3 Squelette mobile-cassé |
| combien coûte vraiment un site web en Suisse | /blog/prix-site-web-suisse-2026 | H2 Coût économique cumulé |
| demander un audit personnalisé | /services/refonte-site-web | H2 "Où vous situer" + CTA final |

**Règle maillage** : 6 liens minimum répartis sur l'article (~2 liens/1000 mots respecté).

## Image Briefs

### Cover (16:9)
- placement: cover (hero frontmatter image)
- type: infographic / composite
- subject: Dashboard composite des 4 scores Lighthouse moyens du panel, en rouge/orange
- description: Capture composite de 4 cadrans Lighthouse (performance, accessibilité, SEO, best practices) affichant des scores dégradés (rouge <50, orange 50-89) pour illustrer visuellement l'état du panel. Fond cream (#FEFFF0) conforme charte Jon Labs, bordure 2px noire et ombre offset style brutaliste. Titre overlay "50 sites audités — panel romand 2026". Aucun chiffre précis sur les cadrans (placeholder visuel). Aspect sérieux, data-driven, pas de gimmick IA.
- alt_text: Audit de 50 sites d'indépendants romands — tableau composite des scores Lighthouse moyens
- aspect_ratio: 16:9

### Image 2 — après H2 "Méthodologie"
- placement: after-h2:Méthodologie
- type: schema / diagramme
- subject: Schéma flowchart de la méthodologie (panel → 9 critères → outils → analyse)
- description: Diagramme horizontal brutaliste, 4 colonnes ("Panel 50", "9 critères", "4 outils", "Analyse"), chaque colonne avec sa bordure 2px noire et fond coloré (cream, blue #BAE6FF, yellow #FFDC58, cream). Flèches noires entre colonnes. Police Plus Jakarta Sans. Design flat, sans illustration cartoon.
- alt_text: Schéma de la méthodologie d'audit — panel, critères, outils et analyse
- aspect_ratio: 4:3

### Image 3 — après H2 "3 archétypes"
- placement: after-h2:3 archétypes
- type: illustration / trio
- subject: Triptyque des 3 archétypes (vitrine fossile / blog abandonné / squelette mobile-cassé)
- description: 3 cartes alignées horizontalement, chacune avec un mini-mockup stylisé du site représenté + un label. Carte 1 : site moderne figé avec date "© 2021" bien visible. Carte 2 : blog avec 3 articles datés tous de 2022. Carte 3 : écran mobile avec menu qui déborde et polices cassées. Style flat, bordure 2px noire, ombre offset brutaliste. Accents yellow #FFDC58 pour les dates problématiques.
- alt_text: Les 3 archétypes de sites dormants identifiés dans l'audit — vitrine fossile, blog abandonné, squelette mobile cassé
- aspect_ratio: 16:9

### Image 4 — après H2 "5 meilleurs"
- placement: after-h2:5 meilleurs
- type: infographic checklist
- subject: Les 5 patterns des meilleurs sites sous forme de checklist visuelle
- description: Liste verticale de 5 items cochés (checkboxes noires remplies yellow #FFDC58). Chaque item = une phrase courte (publie 1x/mois, GMB actif, schema précis, pages services 800-1500 mots, Lighthouse mobile >80). Style brutaliste, bordure 2px noire, fond cream. Titre "Ce que font les 5 meilleurs".
- alt_text: Les 5 patterns communs aux meilleurs sites du panel audité
- aspect_ratio: 4:3

## Sources

Toutes les sources sont déjà présentes dans le draft v1 :
- Brevet Google Freshness US7346839 (algorithme de fraîcheur, public depuis 2011)
- Statcounter Suisse pour part mobile (placeholder année à confirmer)
- OFS pour nombre d'indépendants romands (placeholder chiffre à confirmer)
- Outils publics : Lighthouse (Google), Wayback Machine (Internet Archive), Rich Results Test (Google)

**Aucune autre source externe à inventer.** L'article s'appuie sur la méthodologie interne Jon Labs et les outils publics.

## Données brutes

Le draft v1 contient déjà toutes les données structurelles (méthodologie, archétypes, critères). Les seules données manquantes sont les CHIFFRES AGRÉGÉS du panel, qui sont tous marqués en placeholder.

**Liste exhaustive des placeholders à préserver (24 [DATA-À-INJECTER] + 15 <!-- TODO-DATA -->)** :

Placeholders chiffres dans le corps (`[DATA-À-INJECTER: ...]`) :
1. TL;DR — mois début audit
2. TL;DR — mois fin audit
3. TL;DR — % pas publié depuis 12 mois
4. TL;DR — % sans schema
5. TL;DR — Lighthouse perf médian
6. TL;DR — nombre meilleurs sites (5 ou moins)
7. Panel — date début
8. Panel — date fin
9. Panel — % Genève
10. Panel — % Vaud
11. Panel — % Neuchâtel
12. Constat #1 — % sites inactifs 12+ mois (x2 dans le §)
13. Constat #2 — % GMB inactifs (3 sous-stats)
14. Constat #3 — % sans schema + % Organization minimal
15. Constat #4 — score Lighthouse médian + p25 + p75
16. Constat #5 — % moins de 20 pages indexées
17. Constat #6 — % copyright obsolète
18. Constat #7 — % blog zombie + année médiane dernier post
19. Archétype squelette mobile — % visites mobile CH + année source Statcounter
20. Coût — CHF/h facturation moyenne
21. Coût — source enquête salariale
22. Coût — CA additionnel bas
23. Coût — CA additionnel haut
24. Coût — % panel dormant + nombre indépendants OFS + CHF millions cumulés
25. Nombre de "meilleurs sites" (5 confirmé ou ajusté)
26. CTA — date publication lead magnet

Commentaires HTML pour grep (`<!-- TODO-DATA: ... -->`) : 15 au minimum, à placer sur chaque zone nécessitant collecte de données réelles. Tous préservés du draft v1.

**Règle absolue writer** : ne JAMAIS remplacer un placeholder par un chiffre inventé. Si une nouvelle zone de chiffre apparaît en cours de rédaction, créer un nouveau placeholder.

## Schema JSON-LD attendu (pour /seo-enrich)
- `Article` (principal)
- `FAQPage` (5 Q/R)
- `Dataset` (méthodologie + variables mesurées ; les valeurs peuvent rester en placeholders car l'étude est documentée comme "en cours de publication")

## Après le brief
Brief sauvegardé dans `.briefs/audit-50-sites-indeps-romands.md`. Lancez `/seo-write` pour rédiger l'article.
