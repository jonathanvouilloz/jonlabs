# Chantier — Cluster plateformes (Webflow + WordPress)

> **Session 8 du chantier SEO** (cf. `docs/archive/chantier-seo-refactor.md`).
> Suivi par checklist au fil des sessions : cocher au fur et à mesure, noter date + commit en fin de phase.
>
> **État au 2026-06-07 (2e session)** : Phases 0-5 terminées — les 2 pages services sont buildées et commitées. Restent : actions GSC post-deploy (Jonathan), phase 6 (satellites blog) et phase 7 (suivi).

## Contexte

Un lead réel a trouvé Jon Labs en cherchant un **développeur Webflow pour site e-commerce**, alors que le site ne ranke sur **aucune** query Webflow (GSC 91 jours : 0 impression — confirmé aussi par le diagnostic du 2026-06-01 : 0 requête webflow sur 434).

- **GSC** : `freelance wordpress geneve` → 47 imp, position 40, homepage (pas de page dédiée) = quick win mesurable.
- **DataForSEO CH** : volumes faibles (10-70/mois) mais CPC élevés (6-63 CHF) = intent d'achat fort. Top volumes : `webflow ecommerce` 70/mois, `migration wordpress` 50/mois, `webflow vs wordpress` 50/mois.
- **DataForSEO FR** (proxy demande) : `agence webflow` 1600 LOW, `freelance wordpress` 880, `développeur webflow` 140 LOW.
- **Concurrence** : SERP Webflow = marketplaces + freelances FR sans pricing/e-commerce/social proof, zéro acteur CH romand. SERP WordPress CH si faible qu'une agence de Bourges ranke sur Genève en programmatic.

## Décisions verrouillées (2026-06-07)

- Page Webflow = **100% offre Webflow** ; les comparatifs vont au blog (satellites).
- Page WordPress = **1 seule page** couvrant création + refonte + migration (3 H2 = 3 intents). Split seulement si un intent décolle en GSC.
- Routes : **`/services/*`**. Slugs sans année (règle S2).
- `webflow-vs-prestashop` droppé (0 volume mesurable).

## Architecture cible (hub-and-spoke)

```
/services/developpeur-webflow        ← pilier transactionnel Webflow
/services/developpeur-wordpress      ← pilier transactionnel WordPress
        ▲                ▲
        │  maillage contextuel
/blog/webflow-vs-wordpress           ← satellites comparatifs (phase 6)
/blog/webflow-ou-site-sur-mesure
/blog/webflow-vs-framer
/blog/webflow-vs-shopify
```

---

## Phase 0 — Data (SERP + volumes) ✅ 2026-06-07

- [x] SERP scan "développeur webflow" → `.seo-data/serp-developpeur-webflow.json`
- [x] SERP scan "freelance wordpress" → `.seo-data/serp-freelance-wordpress.json`
- [x] Batch volumes CH+FR variantes WordPress + comparatifs webflow
- [x] Clusters keywords → `.seo-data/keywords-developpeur-webflow.json` + `keywords-freelance-wordpress.json`
- [x] **Décision** : 1 page WordPress unique confirmée (seule `migration wordpress` atteint 50/mois CH → H2 dédié) ; satellites priorisés vs-wordpress > vs-framer > vs-shopify ; prestashop droppé

## Phase 1 — Briefs ✅ 2026-06-07

- [x] Brief page Webflow → `content/_drafts/services/developpeur-webflow.md`
- [x] Brief page WordPress → `content/_drafts/services/developpeur-wordpress.md`
- [ ] **Validation des 2 briefs par Jonathan** (notamment fourchettes tarifs CHF à afficher)

## Phase 2 — Page `/services/developpeur-webflow` ✅ 2026-06-07

Template : copié depuis `src/pages/services/creation-site-web.astro`.

- [x] Créé `src/pages/services/developpeur-webflow.astro` (Title 58c, H1 distinct, H2 e-commerce avec grille suffit/coince, tarifs 1'490/2'490/devis, FAQ 10q, form Webflow)
- [x] `serviceSchemas["developpeur-webflow"]` (Service + BreadcrumbList + FAQPage — 3 JSON-LD vérifiés dans dist/)
- [x] `servicesListData` numberOfItems 5→7 + hub `/services` (2 cards dans scenarios.ts web-outils)
- [x] Mega-menu navigation.ts (colonne "Web & apps", 2 items)

## Phase 3 — Page `/services/developpeur-wordpress` ✅ 2026-06-07

- [x] Créé `src/pages/services/developpeur-wordpress.astro` (Title "Freelance WordPress à Genève — création, refonte | Jon Labs" 60c, 3 blocs intents création/refonte/migration, méthode audit-first 4 étapes, tarifs 1'490/2'490/devis, FAQ 10q, form audit gratuit avec champ URL)
- [x] Schema + `servicesListData` + navigation (idem Phase 2)
- [x] **Anti-contradiction** : creation-site-web.astro L85 → "Pas de template générique qui rame, pas d'usine à gaz" + FAQ "Pourquoi pas WordPress" nuancée ("je le propose aussi quand c'est le bon choix")

## Phase 4 — Anti-cannibalisation + maillage interne ✅ 2026-06-07

**Partition des intents (règle à respecter sur tout le cluster) :**

| Intent | Page propriétaire |
|---|---|
| `développeur/freelance/expert webflow` (transactionnel) | `/services/developpeur-webflow` |
| `freelance/développeur wordpress`, refonte/migration WP | `/services/developpeur-wordpress` |
| `webflow vs X` (informationnel) | articles blog satellites |
| `développeur web freelance genève` (générique) | `/developpeur-web-freelance-geneve` (NE PAS toucher) |
| `création site web genève` | `/services/creation-site-web` (inchangé) |

Liens entrants (ancres variées, contextuels dans le corps — pattern Session 5) :
- [x] `/developpeur-web-freelance-geneve` : encart "Pourquoi pas WordPress" → liens vers les 2 pages
- [x] `/blog/prix-site-web-suisse-2026` : après tableau des fourchettes → liens vers les 2 pages
- [x] `/blog/specialiste-developpement-web-suisse` : section généraliste vs spécialiste → liens vers les 2 pages
- [x] `/blog/freelance-ou-agence-web` : après tableau tarifs freelance → lien page WordPress
- [x] `/developpement-web/[ville].astro` : card "Refonte" → href /services/developpeur-wordpress (≈10 pages, remplace l'ancien lien vers refonte-site-web noindex)
- [x] Liens sortants depuis les nouvelles pages : /tarifs, /portfolio, /contact, blog prix + freelance-ou-agence, lien croisé Webflow↔WordPress
- [x] Grep titles : zéro collision (seules les 2 nouvelles pages ciblent les keywords)

## Phase 5 — Vérification & déploiement ✅ 2026-06-07 (deploy + GSC = action Jonathan)

- [x] `npm run build` OK — 194 pages
- [x] Review SEO : titles 58/60c, H1 ≠ title, meta <155c, 3 JSON-LD valides par page (Service+Breadcrumb+FAQPage), 39-40 liens internes par page
- [x] Sitemap : les 2 URLs présentes, `index, follow` confirmé dans dist/
- [x] Commit + push
- [ ] **Action Jonathan** : Rich Results Test (post-deploy)
- [ ] **Action Jonathan** : GSC URL Inspection → Request indexing sur les 2 URLs

## Phase 6 — Satellites comparatifs blog (sessions suivantes) ⬜

Pipeline par article : `/seo-keywords` → `/seo-serp` → `/seo-brief` → validation → production. Chaque satellite : 2+ liens contextuels vers `/services/developpeur-webflow`, slug sans année.

- [ ] `webflow-vs-wordpress` (P1 — 50 CH / 320 FR)
- [ ] `webflow-ou-site-sur-mesure` (P2 — convertit vers les DEUX offres)
- [ ] `webflow-vs-framer` (P3 — 20 CH / 90 FR, terrain vierge)
- [ ] `webflow-vs-shopify` (P4 — 10 CH)

## Phase 7 — Suivi ⬜

- [ ] `/seo-weekly` : surveiller `développeur webflow`, `freelance wordpress geneve`, `webflow ecommerce`, `migration wordpress` à S+2 et S+4
- [ ] Si un intent WordPress (refonte/migration) décolle en GSC → envisager split en page dédiée
- [ ] Clore la Session 8 dans `docs/archive/chantier-seo-refactor.md`

---

## Fichiers clés

| Fichier | Action |
|---|---|
| `src/pages/services/creation-site-web.astro` | Template à copier + adoucir ligne anti-WordPress |
| `src/pages/services/developpeur-webflow.astro` | **Créer** |
| `src/pages/services/developpeur-wordpress.astro` | **Créer** |
| `src/data/schema.ts` | 2 `serviceSchemas` + `numberOfItems` |
| `src/data/navigation.ts` | Mega-menu |
| `src/pages/developpeur-web-freelance-geneve.astro` | Maillage sortant |
| `src/pages/developpement-web/[ville].astro` | Lien template vers page WordPress |
| `src/content/blog/{prix-site-web-suisse-2026, specialiste-developpement-web-suisse, freelance-ou-agence-web}.md` | Liens contextuels |
| `content/_drafts/services/developpeur-{webflow,wordpress}.md` | Briefs (sources de vérité contenu) |
| `.seo-data/{keywords,serp}-*.json` + `gsc-jonlabs-ch-last_3_months.json` | Data |

## Journal

### 2026-06-07 (session 2 — implémentation)
- Phases 2-5 : 2 pages services créées + schema/nav/hub + maillage (5 sources entrantes dont template [ville] ≈10 pages) + anti-contradiction creation-site-web + build 194 pages vérifié (JSON-LD, sitemap, robots).
- Bonus : card "Refonte" des pages [ville] repointée de /services/refonte-site-web (noindex) vers la page WordPress publique.

### 2026-06-07 (session 1 — data + briefs)
- Phases 0-1 : GSC 91j (0 query webflow ; freelance wordpress geneve 47 imp pos 40), volumes CH+FR (3 batchs DataForSEO), 2 SERP scans, 2 clusters keywords, 2 briefs complets.
- Décisions : 1 page WP unique, focus 100% plateforme par page, satellites au blog, prestashop droppé, routes /services/*.
