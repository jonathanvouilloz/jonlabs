# Chantier — Cluster plateformes (Webflow + WordPress)

> **Session 8 du chantier SEO** (cf. `docs/chantier-seo-refactor.md`).
> Suivi par checklist au fil des sessions : cocher au fur et à mesure, noter date + commit en fin de phase.
>
> **État au 2026-06-07** : Phases 0-1 terminées (data + briefs). Briefs en attente de validation. Phases 2-7 à faire.

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

## Phase 2 — Page `/services/developpeur-webflow` ⬜

Template : copier `src/pages/services/creation-site-web.astro` (structure 7 sections).

- [ ] Créer `src/pages/services/developpeur-webflow.astro`
  - Title : `Développeur Webflow freelance en Suisse romande | Jon Labs` (57 car.)
  - H1 : `Un développeur Webflow basé à Genève, pour des sites qui tournent`
  - Sections : hero → offres (création/refonte/intégrations) → **H2 e-commerce Webflow** (70/mois, intent du lead réel) → freelance vs agence → méthode → tarifs CHF affichés → FAQ 10 questions → CTA final avec pont sur-mesure
- [ ] `serviceSchemas["developpeur-webflow"]` dans `src/data/schema.ts` (Service + BreadcrumbList + FAQPage)
- [ ] `servicesListData` : incrémenter `numberOfItems` + ajouter au hub `/services`
- [ ] Mega-menu `src/data/navigation.ts` (colonne "Web & apps")

## Phase 3 — Page `/services/developpeur-wordpress` ⬜

- [ ] Créer `src/pages/services/developpeur-wordpress.astro`
  - Title : `Freelance WordPress à Genève — création & refonte | Jon Labs` (60 car.)
  - H1 : `Freelance WordPress à Genève : création, refonte et migration`
  - 3 H2 = 3 intents : **Création** (30/mois) / **Refonte** (site lent — pain point n°1 persona) / **Migration vers stack moderne** (50/mois — angle inoccupé, pont sur-mesure) + méthode/maintenance + tarifs + FAQ 10 questions
- [ ] Schema + `servicesListData` + navigation (idem Phase 2)
- [ ] **Anti-contradiction** : reformuler *"Pas de WordPress qui rame, pas de template générique"* dans `creation-site-web.astro` (~l.58) → sans dénigrer WP (ex. "pas de template générique qui rame")

## Phase 4 — Anti-cannibalisation + maillage interne ⬜

**Partition des intents (règle à respecter sur tout le cluster) :**

| Intent | Page propriétaire |
|---|---|
| `développeur/freelance/expert webflow` (transactionnel) | `/services/developpeur-webflow` |
| `freelance/développeur wordpress`, refonte/migration WP | `/services/developpeur-wordpress` |
| `webflow vs X` (informationnel) | articles blog satellites |
| `développeur web freelance genève` (générique) | `/developpeur-web-freelance-geneve` (NE PAS toucher) |
| `création site web genève` | `/services/creation-site-web` (inchangé) |

Liens entrants (ancres variées, contextuels dans le corps — pattern Session 5) :
- [ ] `/developpeur-web-freelance-geneve` : mention stack → liens vers les 2 pages
- [ ] `/blog/prix-site-web-suisse-2026` : FAQ #4 WordPress → lien page WordPress
- [ ] `/blog/specialiste-developpement-web-suisse` : FAQ #6 → liens vers les 2 pages
- [ ] `/blog/freelance-ou-agence-web` : lien contextuel page WordPress
- [ ] `/developpement-web/[ville].astro` : "Refonte depuis WordPress, Wix..." → lien page WordPress (**1 lien template = ~10 pages**)
- [ ] Liens sortants depuis les nouvelles pages : `/tarifs`, `/portfolio`, `/contact`, article freelance-ou-agence
- [ ] Grep final `webflow|wordpress` dans les `<title>` existants (zéro collision)

## Phase 5 — Vérification & déploiement ⬜

- [ ] `npm run build` OK
- [ ] `/seo-review` sur les 2 pages
- [ ] Sitemap : les 2 URLs présentes, pas de noindex (pages publiques, contrairement aux 4 draft soft)
- [ ] Commit `feat(seo): pages services developpeur-webflow + developpeur-wordpress (cluster plateformes)` + push/deploy
- [ ] Rich Results Test (post-deploy)
- [ ] GSC : URL Inspection → Request indexing sur les 2 URLs

## Phase 6 — Satellites comparatifs blog (sessions suivantes) ⬜

Pipeline par article : `/seo-keywords` → `/seo-serp` → `/seo-brief` → validation → production. Chaque satellite : 2+ liens contextuels vers `/services/developpeur-webflow`, slug sans année.

- [ ] `webflow-vs-wordpress` (P1 — 50 CH / 320 FR)
- [ ] `webflow-ou-site-sur-mesure` (P2 — convertit vers les DEUX offres)
- [ ] `webflow-vs-framer` (P3 — 20 CH / 90 FR, terrain vierge)
- [ ] `webflow-vs-shopify` (P4 — 10 CH)

## Phase 7 — Suivi ⬜

- [ ] `/seo-weekly` : surveiller `développeur webflow`, `freelance wordpress geneve`, `webflow ecommerce`, `migration wordpress` à S+2 et S+4
- [ ] Si un intent WordPress (refonte/migration) décolle en GSC → envisager split en page dédiée
- [ ] Clore la Session 8 dans `docs/chantier-seo-refactor.md`

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

### 2026-06-07
- Phases 0-1 : GSC 91j (0 query webflow ; freelance wordpress geneve 47 imp pos 40), volumes CH+FR (3 batchs DataForSEO), 2 SERP scans, 2 clusters keywords, 2 briefs complets.
- Décisions : 1 page WP unique, focus 100% plateforme par page, satellites au blog, prestashop droppé, routes /services/*.
