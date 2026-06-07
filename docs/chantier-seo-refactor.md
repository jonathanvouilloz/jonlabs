# Chantier SEO Refactor — 2026-05

> **Suivi maître du gros chantier de refonte SEO multi-sessions.**
> Démarré le 2026-05-20. À mettre à jour à chaque session.
>
> **⏸️ État au 2026-06-07** : Sessions 1-4b + 5 terminées et commitées. Session 8 (cluster plateformes Webflow/WordPress) ouverte — phases data + briefs faites, voir `docs/chantier-cluster-plateformes.md`. Reportés : Session 4c (sweep vocab sitewide), Session 6 (refresh `prix-site-web`), Session 7 (vérif finale).

---

## 🎯 Objectifs

1. **Slugs propres** : retirer les années des slugs des futurs articles (règle universelle dans seo-brief). Renommer uniquement les slugs sans trafic ; garder les autres (jus SEO).
2. **Concentration des services** : 4 piliers au lieu de 9 (création site, référencement local, gestion fiche Google, applications sur mesure). Archiver le reste.
3. **Vocabulaire** : remplacer "SEO" par "référencement" sur le site (FR-CH, mot plus recherché). Garder "SEO" uniquement pour le terme technique.
4. **Articles "apparaître sur X"** : reformuler avec "référencer" (slugs sans trafic donc peu de risque).
5. **Maillage interne + indexation** : auditer les pages non indexées, consolider, lier.
6. **Données réelles** : piloter par DataForSEO + GSC, pas à l'intuition.

---

## 🧭 Principes recadrés (à respecter à chaque session)

- **Slug = URL permanente** → ne pas modifier sauf si trafic = 0
- **Title/H1/contenu = mutables** → c'est là qu'on reflète l'année courante
- **Skill seo-brief reste universel** → pas de règles spécifiques à Jon Labs (vocabulaire = sur-mesure projet)
- **Strategy "bombarder un sujet"** → focus actuel = SEO local + GMB + référencement local

---

## 📊 État du chantier

| Session | Statut | Date |
|---------|--------|------|
| 1 — Snapshot + données réelles | ✅ Terminée | 2026-05-20 |
| 2 — Skill + slugs apparaître | ✅ Terminée | 2026-05-20 |
| 3 — Refonte page Services | ✅ Terminée | 2026-05-20 |
| 4a — Pivot keyword `/services/referencement-local` | ✅ Terminée | 2026-05-20 |
| 4b — Refonte page Tarifs (scope page only) | ✅ Terminée | 2026-05-21 |
| 4c — Sweep vocabulaire sitewide | ⬜ À faire | — |
| 5 — Maillage interne (cluster local) | ✅ Terminée | 2026-06-01 |
| 6 — Refresh articles à fort potentiel | ⬜ À faire | — |
| 7 — Vérif + commit final | ⬜ À faire | — |

---

## 📋 Détail des sessions

### Session 1 — Snapshot + données réelles ✅

**Statut** : terminée
**Date** : 2026-05-20
**Risque** : 🟢 zéro (lecture pure)
**Livrable** : [`docs/snapshots/2026-05-20-pre-refactor.md`](./snapshots/2026-05-20-pre-refactor.md)

#### Checklist
- [x] `/seo-gsc` : positions actuelles → 7'922 imp / 91j / pos moy 9.7
- [x] `/seo-index-diagnose` : 46/75 indexées (61%), 9 services non indexés sur 9
- [x] `/seo-keywords` clusters services (10 topics) :
  - Volumes FR-CH réels obtenus via DataForSEO
- [x] Consolidation dans `docs/snapshots/2026-05-20-pre-refactor.md`

#### Découvertes majeures
1. **Astro config contient déjà 7 redirects** pour les articles "apparaitre" → on peut les **inverser** au lieu de redo
2. **`geo-seo-ia-2026`** a 652 impressions pos 5.5 — c'est la meilleure page blog
3. **`apparaitre-claude` (sans année) a 375 imp** via redirect → le jus est sur l'ancien slug
4. **0/9 pages /services/ correctement indexées** — problème structurel
5. **`agence référencement Genève` = 110/mois** ⭐ — keyword principal à privilégier
6. **`référencement local Genève` = 0/mois** sur DataForSEO — pivot keyword nécessaire
7. **`création site web Genève` = 90/mois** — bon ciblage actuel

#### Classification finale des articles
- **7 REVERT** vers slug sans année : `apparaitre-claude`, `apparaitre-copilot`, `apparaitre-perplexity`, `apparaitre-gemini`, `apparaitre-grok`, `apparaitre-chatgpt-geneve`, `geo-seo-ia` (à valider)
- **6 KEEP** : `prix-site-web-suisse-2026`, `visibilite-site-internet-2026`, `no-show-rendez-vous-2026`, `notebooklm-guide-complet-2026`, `fiche-google-my-business-guide-complet-2026`, `optimiser-fiche-google-my-business-checklist-2026`
- **1 wait** : `repondre-avis-google-modeles-2026` (pas encore publié)

#### Questions ouvertes pour Session 2
1. `geo-seo-ia-2026` (652 imp) — revert ou keep ?
2. `/services/referencement-local` — pivoter vers `agence référencement Genève` comme keyword principal ?
3. Pages services 9/9 non indexées — revoir le template avant Session 3 ?
4. `no-show-rendez-vous-2026` crawled_not_indexed — content thinness ?

---

### Session 2 — Skill seo-brief + renommage articles "apparaître" ✅

**Statut** : terminée
**Date** : 2026-05-20
**Risque** : 🟠 modéré (redirections + réindexation à demander)

#### Checklist
- [x] Skill `seo-brief/SKILL.md` : section "Année suffixée -[YEAR]" remplacée par règle bloquante "JAMAIS d'année dans un slug" + exemples ❌/✅ inversés
- [x] 7 fichiers articles renommés (git mv) : `apparaitre-{claude,copilot,perplexity,gemini,grok,chatgpt-geneve}-2026.md` + `geo-seo-ia-2026.md` → versions sans année
- [x] Suppression de l'override `slug: "apparaitre-grok-2026"` dans le frontmatter de `apparaitre-grok.md`
- [x] 7 redirects inversés dans `astro.config.mjs` (`/blog/X-2026` → `/blog/X`)
- [x] Liens internes mis à jour : 81 remplacements dans 16 fichiers (paths images `/images/blog/X-2026.webp` préservés)
- [x] Build local OK : 182 pages, 7 redirects HTML avec meta refresh + canonical générés
- [x] Sitemap contient les 7 nouvelles URLs ; anciennes (`-2026`) absentes (Astro exclut les redirects)

#### Décisions exécutées
- **Revert vers slugs sans année** : 7 articles (le jus SEO est resté sur les anciennes URLs via les redirects existants)
- **Images conservées** : les filenames `/images/blog/X-2026.webp` ne sont pas touchés (pas d'impact SEO direct, scope réduit)

#### Actions utilisateur post-déploiement (Jonathan)
- [ ] Push + déployer (Vercel auto)
- [ ] Resoumettre sitemap dans GSC : `https://www.jonlabs.ch/sitemap-index.xml`
- [ ] Demander indexation des 7 nouvelles URLs via URL Inspection :
  - `https://www.jonlabs.ch/blog/apparaitre-claude`
  - `https://www.jonlabs.ch/blog/apparaitre-copilot`
  - `https://www.jonlabs.ch/blog/apparaitre-perplexity`
  - `https://www.jonlabs.ch/blog/apparaitre-gemini`
  - `https://www.jonlabs.ch/blog/apparaitre-grok`
  - `https://www.jonlabs.ch/blog/apparaitre-chatgpt-geneve`
  - `https://www.jonlabs.ch/blog/geo-seo-ia`
- [ ] Monitorer positions S+2, S+4 (cf. Session 7)

---

### Session 3 — Concentration des Services (draft soft) ✅

**Statut** : terminée
**Date** : 2026-05-20
**Risque** : 🟢 faible (approche soft, aucune redirection 301)

#### Décisions actées (révisées en Session 3)
- ✅ **Piliers gardés publics** : creation-site-web, referencement-local, gestion-fiche-google
- ✅ **Branche dev gardée publique** (en attente fusion Session 4) : developpement-mvp, outils-sur-mesure
- ⏸️ **Draft soft (noindex + hors sitemap + hors nav/hub)** : automatisation, integration-outils, validation-idee, refonte-site-web
- 🔜 **Fusion mvp + outils-sur-mesure → applications-sur-mesure** : reportée Session 4 (avec brief SEO propre)
- 🔜 **Pivot keyword `referencement-local`** : reporté à session dédiée (brief SEO heavy sur `agence référencement Genève` 110/mois)

#### Checklist
- [x] 4 pages services en `robots="noindex, follow"` (automatisation, integration-outils, validation-idee, refonte-site-web)
- [x] 4 exclusions ajoutées au filter() du sitemap dans `astro.config.mjs`
- [x] navigation.ts : structure simplifiée en 2 colonnes (Web & apps : 3 items / SEO local : 2 items), 4 entries draft retirées
- [x] scenarios.ts : `serviceSections[]` restructuré en 2 sections (`web-outils` 3 items + `seo-local` 2 items) ; sections `automatisation` et `validation` supprimées ; `gestion-fiche-google` ajoutée
- [x] scenarios.ts : 4 `scrollTo` (tools-sync, time-lack, idea-validation, mvp-urgent) repointés vers `web-outils` (sections cibles supprimées)
- [x] `services.astro` hub : 2 `<ServiceSection>` au lieu de 3 (web-outils + seo-local)
- [x] `servicesListData` schema.ts : 5 items au lieu de 9, `numberOfItems` corrigé
- [x] Build OK : 182 pages, noindex présent dans dist/, sitemap propre (4 draft absents, 5 publics présents)

#### Hors scope Session 3 (futures)
- Fusion `developpement-mvp` + `outils-sur-mesure` → applications-sur-mesure (Session 4)
- Refonte heavy `/services/referencement-local` avec brief SEO sur `agence référencement Genève`
- Refonte conversations des scenarios `tools-sync` / `time-lack` / `idea-validation` (parlent encore d'automatisation/validation, contenu inadapté à la nouvelle stratégie SEO)
- Mise à jour des liens internes blog/outils qui pointent vers les 4 pages draft (acceptable car `follow` est gardé, le crawl Google passera quand même)

#### Actions utilisateur post-déploiement (Jonathan)
- [ ] Push + déployer (Vercel auto)
- [ ] Resoumettre sitemap dans GSC : `https://www.jonlabs.ch/sitemap-index.xml`
- [ ] Monitorer dans 2-4 semaines : les 4 pages draft devraient sortir de l'index Google ; les 5 publics devraient gagner en autorité

---

### Session 4a — Pivot keyword `/services/referencement-local` ✅

**Statut** : terminée
**Date** : 2026-05-20
**Risque** : 🟡 modéré (changement Title/H1 sur page établie)
**Livrable** : [`docs/snapshots/2026-05-20-brief-pivot-referencement-local.md`](./snapshots/2026-05-20-brief-pivot-referencement-local.md)

#### Décisions
- **Pivot keyword** : ancienne page rankait sur `référencement local Genève` (0/mois sur DataForSEO). Pivot vers `référencement Genève` (estimé 10-30/mois) + capture du money keyword `agence référencement Genève` (110/mois) via FAQ et sections "freelance vs agence" — sans mettre "agence" dans Title/H1
- **Positionnement** : freelance/indé assumé (vs. agence)
- **Slug gardé** : `/services/referencement-local` — règle universelle du chantier
- **Sweep vocab limité à cette page** (pas sitewide cette fois)

#### Checklist
- [x] Brief SEO complet (`docs/snapshots/2026-05-20-brief-pivot-referencement-local.md`) — cluster KW, structure H2/H3, snippets x3, maillage, gap concurrent, banned words
- [x] `seoData.title` : "Référencement local SEO à Genève | Jon Labs" → "Référencement à Genève — Freelance SEO local PME romandes" (58 car. ✓)
- [x] `seoData.description` : sweep + mention freelance + 155 car. ✓
- [x] Breadcrumb label : "Référencement local SEO" → "Référencement local"
- [x] H1 : "Référencement local SEO à Genève" → "Référencement à Genève pour PME : passez d'invisible à visible sur Google"
- [x] Pain points card #3 : "Le SEO fait peur" → "Le référencement vous semble opaque"
- [x] Hero subtitle : mention "Freelance référencement à Genève" ajoutée
- [x] 3 approches names : "Audit SEO" / "SEO + Site web" / "Accompagnement SEO" → "Audit de référencement" / "Référencement + Site web" / "Accompagnement référencement"
- [x] FAQ #8 musclée : "Pourquoi pas une agence SEO classique ?" → "Pourquoi un freelance plutôt qu'une agence de référencement à Genève ?" — réponse enrichie avec chiffres (1'500-5'000 CHF/mois) et différenciateurs (SEMrush vs outils Google gratuits)
- [x] Section Local H2 : "Un expert SEO à Genève" → "Un freelance référencement à Genève"
- [x] Form subject Web3Forms : "Demande référencement local SEO" → "Demande référencement local"
- [x] Form labels : "Audit SEO" / "SEO + nouveau site" / "Besoin SEO" → versions "référencement"
- [x] Form h3 : "Demandez votre audit SEO gratuit" → "Demandez votre audit de référencement gratuit"
- [x] Pricing bullets : "Audit SEO complet" / "Accompagnement SEO mensuel" → versions "référencement"
- [x] Pricing note : "Combo SEO + site web" → "Combo référencement + site web"
- [x] Results card : "Pas un coup de peinture SEO" → "Pas un coup de peinture rapide. Une stratégie de référencement..."
- [x] Hero footer badge : "SEO Suisse romande" → "Référencement Suisse romande"
- [x] Good news callout : "expert en SEO" → "expert en référencement"
- [x] Case study context : "pas de budget SEO" → "pas de budget logiciels SEO"
- [x] `serviceSchemas["referencement-local"]` (schema.ts) : `name` + `description` alignés
- [x] **Conservé intentionnellement** : `id="seo-form"` (JS), `serviceSchemas["referencement-local"]` (clé export), FAQ "Quelle différence entre SEO et Google Ads" / "C'est quoi le SEO local exactement ?" (matchent queries utilisateur), "Score SEO" (terme technique), commentaires HTML/JS
- [x] Build OK : 182 pages, schema JSON-LD vérifié dans dist/, liens internes (7) intacts

#### Actions utilisateur post-déploiement (Jonathan)
- [ ] Push + déployer (Vercel auto)
- [ ] Resoumettre sitemap dans GSC : `https://www.jonlabs.ch/sitemap-index.xml`
- [ ] Demander indexation de la page via URL Inspection :
  - `https://www.jonlabs.ch/services/referencement-local`
- [ ] Monitoring S+2, S+4 : positions sur primary KW `référencement Genève` + secondaires `agence référencement Genève`, `freelance SEO Genève`, `référencement local Genève`

---

### Session 4b — Refonte page Tarifs (scope page only) ✅

**Statut** : terminée
**Date** : 2026-05-21
**Risque** : 🟢 faible (page transactionnelle, slug gardé, scope réduit à 1 fichier)
**Livrable** : [`docs/snapshots/2026-05-21-brief-tarifs.md`](./snapshots/2026-05-21-brief-tarifs.md)

#### Décisions
- **Scope réduit** : refonte `/tarifs.astro` uniquement. Le sweep vocabulaire sitewide (navigation, schema central, pages services, composants CV, villes-frontalieres, etc.) est reporté en Session 4c — pour un commit propre par session
- **Stratégie KW hybride** : Phase 0 DataForSEO préalable sur 5 topics tarifs ; conclusion = marché FR-CH petit (10-20/mois max sur les variations directes), KW primary composite (`tarif site web` + `création site web Genève` 90/mois + différenciateur "freelance") + capture `agence référencement Genève` (110/mois) en FAQ #7 long-tail
- **Positionnement freelance assumé** : pas de "agence" dans Title/H1, "agence" autorisée dans FAQ et hero (sweep S4a)
- **Pas de cannibalisation `/blog/prix-site-web-suisse-2026`** : intent transactional (tarifs) vs educational (article)
- **Schema restructuré** : WebPage + Breadcrumb + Service+AggregateOffer + FAQPage (4 blocs JSON-LD propres, vs 3 mal typés avant)

#### Checklist
- [x] Phase 0 — DataForSEO research sur 5 topics tarifs (output : `.seo-data/keywords-tarif-*.json` + `keywords-prix-*.json`)
- [x] Title (58 car) : `Tarifs site web & référencement freelance Genève | Jon Labs`
- [x] Meta description (155 car) : `Tarifs transparents pour la création de site web et le référencement local à Genève. Packages freelance dès 1'490 CHF, sans contrat 12 mois. Devis gratuit.`
- [x] H1 : `<span>Tarifs</span> freelance — site web & référencement à Genève`
- [x] Hero subtitle : "Tarif fixe, pas de contrat 12 mois, pas de marge cachée d'agence" ajouté
- [x] Subtitle "Choisissez votre package" : "Site web + référencement local" (sweep)
- [x] Packages — sweep features : `Optimisation référencement technique` (Présence), `5 articles optimisés référencement` + `Formation référencement autonomie` (Visibilité), `Stratégie de référencement long terme` (Autorité)
- [x] Inclusions grid — sweep : "Référencement technique" / "Articles rédigés"
- [x] FAQ passe de 6 à 8 entries (sync `faqs[]` display + `faqSchema.mainEntity[]`) :
  - [x] FAQ #2 reformulée : "Est-ce que le référencement est inclus dans tous les packs ?" (mention schema + Search Console)
  - [x] FAQ #5 sweep léger : "optimisés référencement"
  - [x] FAQ #7 (NEW) : "Pourquoi vos tarifs sont moins chers qu'une agence à Genève ?" — capture `agence référencement Genève` 110/mois
  - [x] FAQ #8 (NEW) : "Y a-t-il un contrat d'engagement de 12 mois ?" — différenciateur freelance/indé
- [x] Schema restructuré (4 blocs) :
  - [x] WebPage (helper existant)
  - [x] BreadcrumbList via `getBreadcrumbSchema()`
  - [x] Service + AggregateOffer (low=1490 high=2490 count=3) inline (pas dans serviceSchemas central — page-specific)
  - [x] FAQPage (8 questions)
- [x] Section "Bon à savoir" : 5e bullet "Pas de contrat 12 mois — engagement projet par projet" + 6e bullet lien sortant vers `/services/referencement-local`
- [x] Commentaire ligne 3 sweep : "Packages combinés création de site web + référencement local"
- [x] Sweep interne tarifs.astro : 13 → 0 occurrence "SEO" éditoriale (vérifié via Grep sur le source + grep sur `dist/tarifs/index.html` : 3 résidus restants viennent du mega-menu chrome, reportés Session 4c)
- [x] Build OK : 186 pages, 4 blocs JSON-LD propres parsés par script Python (`Block 3: @type=Service | offers.@type=AggregateOffer | low=1490 high=2490 count=3` / `Block 4: @type=FAQPage | questions=8`)

#### Hors scope Session 4b (Session 4c — sweep sitewide)
- `src/data/navigation.ts` (label "SEO local")
- `src/data/schema.ts` (knowsAbout, descriptions)
- `src/data/villes-frontalieres.ts` (FAQs villes)
- `src/pages/about.astro`, `cv-pdf.astro`, `portfolio.astro`, `developpeur-web-freelance-geneve.astro`
- `src/pages/services/creation-site-web.astro`, `gestion-fiche-google.astro`
- `src/pages/developpement-web/[ville].astro`
- Composants : `AboutHome.astro`, `blog/AuthorBio.astro`, `portfolio/PortfolioCard.astro`, `services/ServiceAccordion.astro`, `cv/*.astro`

#### Actions utilisateur post-déploiement (Jonathan)
- [ ] Push + déployer (Vercel auto)
- [ ] Resoumettre sitemap dans GSC : `https://www.jonlabs.ch/sitemap-index.xml`
- [ ] Demander indexation : `https://www.jonlabs.ch/tarifs` via URL Inspection API
- [ ] Validateur Rich Results : tester `/tarifs` sur https://search.google.com/test/rich-results → confirmer AggregateOffer + FAQPage eligibles
- [ ] Monitoring S+2 et S+4 : positions sur `tarif site web`, `tarif création site web`, `agence référencement Genève` (capture FAQ), `freelance dev web Genève`

---

### Session 4c — Sweep vocabulaire sitewide ⬜

**Risque** : 🟢 faible (modifications éditoriales sur passages non-techniques uniquement)

#### Cibles identifiées (inventaire S4b)

~25-30 occurrences "SEO" éditoriales à remplacer par "référencement", réparties sur :

**Pages racine** (~7 occurrences)
- [ ] `src/pages/about.astro` ligne ~242 : "copywriting, au SEO, à l'automatisation"
- [ ] `src/pages/portfolio.astro` ligne ~14 : meta description "Sites web, SEO local"
- [ ] `src/pages/developpeur-web-freelance-geneve.astro` lignes ~120, ~194, ~196, ~223, ~231 (2-3 à sweep, garder commentaires techniques)
- [ ] `src/pages/cv-pdf.astro` lignes ~440, ~459, ~482 (skills + achievement + learning ; hybride "Référencement (SEO)" sur le CV)

**Pages services publiques** (~10 occurrences)
- [ ] `src/pages/services/creation-site-web.astro` lignes ~201, ~254 (sweep éditorial, garder commentaires)
- [ ] `src/pages/services/gestion-fiche-google.astro` lignes ~173, ~206, ~207, ~514, ~735 (FAQ + body éditorial)

**Pages programmatic** (~5 occurrences)
- [ ] `src/pages/developpement-web/[ville].astro` lignes ~101, ~116, ~124 (descriptions + features)
- [ ] `src/data/villes-frontalieres.ts` (FAQs 5 villes ; garder champ structurel `motCleSEO`)

**Composants** (~5 occurrences)
- [ ] `src/components/AboutHome.astro` ligne ~128 : "Référencement SEO" tautologique
- [ ] `src/components/blog/AuthorBio.astro` ligne ~43 : "SEO local"
- [ ] `src/components/portfolio/PortfolioCard.astro` ligne ~21 : label tag `'seo': 'SEO'`
- [ ] `src/components/services/ServiceAccordion.astro` ligne ~87 : "SEO optimisé"
- [ ] `src/components/cv/*` (CVSkills, CVProjects, CVTimeline, CVFormation)

**Data / Schema central** (~2 occurrences)
- [ ] `src/data/navigation.ts` ligne ~48 : title colonne mega-menu "SEO local" → "Référencement local"
- [ ] `src/data/schema.ts` ligne ~121 : `knowsAbout` "SEO local"

#### À NE PAS toucher (garder explicitement)
- `src/lib/seo.ts` (lib technique, nom de fichier)
- `src/components/SEO.astro` (composant technique)
- `src/data/navigation.ts` label tag `/blog/tag/seo` (URL établie, jus SEO)
- Commentaires HTML/JS `<!-- LOCAL SEO -->`, `// SEO Data`, `// SEO META`
- IDs JS `#seo-form`, classes CSS
- Champ TS `motCleSEO` dans `villes-frontalieres.ts` (clé de schéma, pas du contenu)
- Stack labels `["SEO", "Webflow"]` dans CVProjects (labels techniques)
- 4 services en draft soft (`automatisation`, `integration-outils`, `validation-idee`, `refonte-site-web`) — noindex donc pas de signal SEO
- `src/pages/services/referencement-local.astro` (déjà refondu S4a)
- `src/pages/tarifs.astro` (déjà refondu S4b)

#### Vérification finale
- [ ] Build OK : 186 pages, 0 erreur
- [ ] `grep "SEO" dist/` : occurrences restantes uniquement techniques (id, classe, URL `/blog/tag/seo`, etc.)
- [ ] Commit unique : `feat(seo): sweep vocab SEO→référencement sitewide (S4c)`

#### Notes / Décisions

*À remplir*

---

### Session 5 — Maillage interne (cluster local) ✅

**Statut** : terminée
**Date** : 2026-06-01
**Risque** : 🟢 faible (édition `.md` uniquement, aucun `.astro`/schema/config)
**Commit** : `526f689`

#### Décisions
- **Scope réduit au maillage** : le volet "indexation / tri des pages non indexées / orphelins" (prévu initialement) est **reporté**. Session pilotée par les données GSC réelles (91 j), focalisée sur 2 pages page-2 à fort potentiel.
- **Pivot data-driven** : `prix-site-web-suisse-2026` **exclu** du maillage (déjà ~10 liens entrants → levier = contenu, Session 6). Cibles retenues : `referencement-local-geneve` (pos 20) et `tarif-package-seo-local-suisse` (pos 33).
- **Cannibalisation résolue** : `/blog/referencement-local-geneve` = pilier ÉDUCATIF (hub des liens inter-articles) ; `/services/referencement-local` = CTA TRANSACTIONNEL (déjà bien maillé, non touché). Mirror du pattern cluster GMB.
- **Système réutilisé** : maillage auto `getRelatedPosts()` (`src/lib/blog.ts:41`, score catégorie+tags) laissé intact ; on a agi sur les **liens contextuels** dans le corps (signal le plus fort).

#### Checklist
- [x] Up-links contextuels cluster GMB/Maps → `/blog/referencement-local-geneve` : **3 → 12 liens entrants** (9 ajoutés, ancres variées anti-sur-optimisation)
  - entrer-top-3, comment-apparaitre, optimiser-fiche, choisir-categorie, obtenir-plus-avis, qr-code-avis, repondre-avis, google-post, creer-fiche
  - `fiche-suspendue` **volontairement skippé** (sujet "récupérer une fiche suspendue" hors-thème du pilier)
- [x] Boost `/blog/tarif-package-seo-local-suisse` : **2 → 5 liens entrants** (optimiser-fiche, entrer-top-3, + pilier `referencement-local-geneve` qui ne liait pas sa sous-page tarifs)
- [x] Fix lien interne cassé : `/blog/verifier-fiche-google-my-business-methodes` (article inexistant) dans `creer-fiche` → phrase réécrite sans lien mort
- [x] Build OK : 191 pages, 0 erreur
- [x] Commit + push (`526f689`) — inclut aussi 3 nouveaux articles du cluster (entrer-top-3, choisir-categorie, obtenir-plus-avis) + referencement-local-lausanne, non commités jusque-là

#### Hors scope (reporté)
- Tri indexation / pages non indexées (Session 1) → à traiter dans une session dédiée ou en S7
- Audit orphelins exhaustif + hygiène tags sitewide → option "Complet" non retenue (scope ciblé local)

#### Actions utilisateur post-déploiement (Jonathan)
- [ ] Re-soumettre le sitemap GSC
- [ ] Mesurer positions `referencement-local-geneve` + `tarif-package-seo-local-suisse` à S+3 / S+4 (validation de l'impact maillage)

#### Notes / Décisions
- Contexte : session précédée le même jour d'un volet ad hoc hors-chantier (réécriture CTR titles geo-seo-ia + homepage, commit `d0b91e7` ; fix DNS apex → www en 308). Diagnostic GSC : problème principal = CTR (0,58 %), pas le ranking (pos moy 10,5).

---

### Session 6 — Refresh articles à fort potentiel ⬜

**Risque** : 🟢 zéro (slugs gardés, seul le contenu bouge)

#### Cibles identifiées (selon brief utilisateur)
- `visibilite-site-internet-2026` (prend un peu de trafic)
- `prix-site-web-suisse-2026` (prend un peu de trafic)
- + autres identifiés en Session 1

#### Checklist
- [ ] Contenu rafraîchi 2026
- [ ] Title/H1/meta mis à jour
- [ ] Demande de re-crawl GSC

#### Notes / Décisions

*À remplir*

---

### Session 7 — Vérification + commit final ⬜

#### Checklist
- [ ] Build complet
- [ ] `/seo-review` sur pages services modifiées
- [ ] `/seo-index-diagnose` après 1-2 semaines (mesure impact)
- [ ] Commit + push
- [ ] Plan de monitoring positions (semaine S+2, S+4)

---

### Session 8 — Cluster plateformes Webflow + WordPress 🔄

> Chantier dédié avec checklist complète : **`docs/chantier-cluster-plateformes.md`**

Déclencheur : lead réel "développeur webflow pour site e-commerce" + 0 visibilité GSC sur le segment + quick win `freelance wordpress geneve` (47 imp pos 40 sans page dédiée).

- 2 nouvelles pages services : `/services/developpeur-webflow` + `/services/developpeur-wordpress` (création/refonte/migration)
- Satellites comparatifs blog ensuite (webflow-vs-wordpress, etc.)
- État au 2026-06-07 : Phases 0-1 (data + briefs) ✅ — briefs en attente de validation, implémentation à suivre

---

## 📚 Snapshots & livrables

| Document | Session | Statut |
|----------|---------|--------|
| `docs/snapshots/2026-05-20-pre-refactor.md` | 1 | ✅ |
| `docs/snapshots/2026-05-20-brief-pivot-referencement-local.md` | 4a | ✅ |
| `docs/snapshots/2026-05-21-brief-tarifs.md` | 4b | ✅ |
| Commit `526f689` (pas de snapshot MD — maillage direct) | 5 | ✅ |

---

## 🧠 Articles avec année dans le slug (référence)

**Total : 14 articles à analyser en Session 1**

| Slug | Statut trafic à confirmer | Décision préliminaire |
|------|---------------------------|------------------------|
| ~~apparaitre-claude-2026~~ → `apparaitre-claude` | 375 imp / pos 6.6 (ancien slug) | ✅ RENAMED Session 2 |
| ~~apparaitre-chatgpt-geneve-2026~~ → `apparaitre-chatgpt-geneve` | 92 imp / pos 26.2 | ✅ RENAMED Session 2 |
| ~~apparaitre-copilot-2026~~ → `apparaitre-copilot` | 140 imp / pos 7.2 | ✅ RENAMED Session 2 |
| ~~apparaitre-gemini-2026~~ → `apparaitre-gemini` | url_unknown | ✅ RENAMED Session 2 |
| ~~apparaitre-grok-2026~~ → `apparaitre-grok` | 387 imp / pos 6.7 | ✅ RENAMED Session 2 |
| ~~apparaitre-perplexity-2026~~ → `apparaitre-perplexity` | 357 imp / pos 7.6 | ✅ RENAMED Session 2 |
| ~~geo-seo-ia-2026~~ → `geo-seo-ia` | 652 imp / pos 5.5 | ✅ RENAMED Session 2 |
| visibilite-site-internet-2026 | Un peu de trafic (user) | KEEP |
| prix-site-web-suisse-2026 | Un peu de trafic (user) | KEEP |
| notebooklm-guide-complet-2026 | À vérifier | À décider |
| no-show-rendez-vous-2026 | À vérifier | À décider |
| optimiser-fiche-google-my-business-checklist-2026 | À vérifier | À décider |
| fiche-google-my-business-guide-complet-2026 | À vérifier | À décider |
| repondre-avis-google-modeles-2026 | Récent (publication 26 mai) | À décider |

---

## 🔗 Liens utiles

- Plan détaillé : ce fichier
- Skill SEO concerné : `~/.claude/skills/seo-brief/SKILL.md`
- CLAUDE.md projet : `C:\Users\jojo-\Desktop\jonlabs\CLAUDE.md`
- Identity / Voice / SEO context : `docs/identity.md`, `docs/voice.md`, `docs/seo-context.md`

---

## 📝 Journal des décisions

### 2026-05-20
- Création du chantier
- Validation des 4 piliers services (création / référencement local / GMB / applications sur mesure)
- Validation principe : slugs permanents sauf exception trafic-nul
- Validation : skill seo-brief modifié seulement sur la règle slug-année (universel), pas sur le vocabulaire "référencement vs SEO" (spécifique projet)
- ✅ Session 1 terminée → snapshot `docs/snapshots/2026-05-20-pre-refactor.md`
- ✅ Session 2 terminée :
  - Skill `seo-brief/SKILL.md` : règle "JAMAIS d'année dans un slug" maintenant universelle
  - 7 articles renommés via revert (le jus SEO était resté sur les anciennes URLs grâce aux redirects existants)
  - Redirects inversés dans `astro.config.mjs` (anciens slugs `-2026` redirigent maintenant vers les versions sans année)
  - Build OK : 182 pages, sitemap propre, redirects HTML statiques en place
  - **Action utilisateur en attente** : push + resoumettre sitemap GSC + demander indexation des 7 URLs
- ✅ Session 3 terminée :
  - 4 pages services mises en draft soft (noindex + hors sitemap + hors nav/hub) : automatisation, integration-outils, validation-idee, refonte-site-web
  - Hub `/services` restructuré en 2 sections claires : Web & apps (3 items) + SEO local (2 items, dont `gestion-fiche-google` désormais visible)
  - Navigation simplifiée : 2 colonnes au lieu de 3
  - `servicesListData` (schema.ts) : 5 items au lieu de 9, aligné avec le hub
  - Build OK : 182 pages, noindex confirmé dans dist/, sitemap propre
  - Reportés : fusion mvp+outils-sur-mesure → Session 4 ; pivot keyword referencement-local → session dédiée
- ✅ Session 4a terminée — Pivot keyword `/services/referencement-local` :
  - Décision validée : pas de mot "agence" dans Title/H1 (positionnement freelance/indé assumé)
  - Décision révisée : pas de fusion mvp + outils-sur-mesure — pages gardées séparées
  - Keyword research DataForSEO 10 topics services CH (`.seo-data/keywords-*.json` 2026-05-20)
  - Brief SEO complet (`docs/snapshots/2026-05-20-brief-pivot-referencement-local.md`) — cluster, structure, snippets x3, gap concurrent
  - Page refondue : Title (58 car), Meta (155 car), H1, breadcrumb, FAQ "agence", sections éditoriales, schema serviceSchemas["referencement-local"]
  - **Conservé** : slug, @id schema, id="seo-form", FAQ techniques (SEO/Ads, SEO local, etc.)
  - Build OK : 182 pages, 3 JSON-LD blocks (Service + Breadcrumb + FAQPage), 7 liens internes intacts

### 2026-05-21
- ✅ Session 4b terminée — Refonte page Tarifs (scope page only) :
  - Décision méthodo : scope réduit à `tarifs.astro` uniquement ; sweep vocab sitewide → Session 4c (commit propre par session)
  - Phase 0 DataForSEO sur 5 topics tarifs : marché FR-CH petit, seul `tarif création site web` mesurable (20/mois). Output : `.seo-data/keywords-tarif-*.json` + `keywords-prix-*.json`
  - Stratégie KW composite : capture `tarif site web` (10/mois) + variations (10-20/mois cumulées) + `agence référencement Genève` (110/mois) en FAQ #7 + différenciateur "freelance / sans contrat 12 mois"
  - Brief SEO complet (`docs/snapshots/2026-05-21-brief-tarifs.md`) — cluster KW, FAQ verbatim, gap concurrent
  - Page refondue : Title (58 car), Meta (155 car), H1, hero subtitle, packages features sweep, FAQ 6→8 (NEW : freelance vs agence + engagement 12 mois), inclusions grid, bullet "Bon à savoir" +2, lien sortant vers `/services/referencement-local`
  - Schema restructuré (4 blocs propres vs 3 mal typés avant) : WebPage + BreadcrumbList + Service+AggregateOffer (low=1490 high=2490 count=3) + FAQPage (8 Q)
  - Sweep interne tarifs.astro : 13 → 0 occurrence "SEO" éditoriale. 3 résidus dist (mega-menu chrome) reportés S4c
  - Build OK : 186 pages, 4 JSON-LD parsés et validés par script Python
  - **Action utilisateur en attente** : push + resoumettre sitemap GSC + URL Inspection sur `/tarifs` + Rich Results Test pour valider AggregateOffer

### 2026-06-01
- **Volet ad hoc (hors numérotation chantier)** — diagnostic GSC réel 91 j + optimisations rapides :
  - Diagnostic : 9'618 imp / 56 clics / CTR 0,58 % / pos moy 10,5 → problème = **clic**, pas ranking. Cluster frontalier FR (Haute-Savoie) = ~40 % des imp pour 0 clic (décision : garder, ne plus investir). Lead Webflow = pas d'origine SEO organique (0 requête webflow sur 434).
  - CTR : réécriture title/meta `geo-seo-ia` (intention "meilleurs outils/plateformes moteurs IA") + homepage en mot-clé-first. Commit `d0b91e7`.
  - Doublon www/non-www : DNS apex `jonlabs.ch` migré vers IP Vercel `216.150.1.1` + redirect **308 permanent** vers `www.jonlabs.ch` (vérifié). Consolide ~1'800 imp homepage éparpillées sur 2 URLs.
- ✅ **Session 5 terminée — Maillage interne (cluster local)** :
  - Piloté par GSC : cibles `referencement-local-geneve` (pos 20, ~3 liens entrants) et `tarif-package-seo-local-suisse` (pos 33, ~2). `prix-site-web` exclu (déjà ~10 liens → Session 6).
  - Cluster GMB/Maps routé vers le pilier local : **referencement-local-geneve 3 → 12 liens entrants** (ancres variées), **tarif-package 2 → 5**.
  - Cannibalisation cadrée : pilier `referencement-local-geneve` éducatif vs service `referencement-local` transactionnel.
  - Fix lien interne cassé `verifier-fiche-google-my-business-methodes` (article inexistant).
  - `fiche-suspendue` skippé (discipline anti-forçage). Build OK 191 pages. Commit + push `526f689`.
  - **Action utilisateur en attente** : resoumettre sitemap GSC + mesurer positions à S+3/S+4.
