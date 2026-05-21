# Brief SEO : Refonte page /tarifs

> **Type** : refonte page transactionnelle existante (pas un article blog)
> **Slug** : `/tarifs` (gardé tel quel — règle universelle du chantier)
> **Date** : 2026-05-21
> **Chantier parent** : `docs/chantier-seo-refactor.md` — Session 4b

## Metadata

- Slug: tarifs (URL `/tarifs`)
- Module: page transactionnelle (support de conversion dans le funnel)
- Page existante : ~475 lignes Astro, 3 packages, FAQ 6 → 8 entries, schema mal typé restructuré
- Primary keyword: tarif site web Genève (composé long-tail)
- Date: 2026-05-21
- Persona: Indépendant romand / dirigeant TPE-PME (30-55 ans, Genève/Vaud) cherchant clarté prix + alternative aux agences opaques
- Tonalité: direct, pragmatique, sans bullshit marketing
- Registre: **vouvoiement** (page transactionnelle, register `formal` selon identity.md)
- Auteur : Jon (Jonathan Vouilloz, dev web freelance)

## Décisions cadrées (Phase 0)

- **Pas de mot "agence"** dans Title / H1 / Meta principale → positionnement freelance/indé assumé (cohérence S4a)
- **"Agence" autorisé dans le contenu** : FAQ "Pourquoi vos tarifs sont moins chers qu'une agence à Genève ?", hero subtitle "pas de marge cachée d'agence" — pour capter `agence référencement Genève` (110/mois) via long-tail commercial
- **Garder "SEO" hors page** : sweep complet à l'intérieur de tarifs.astro, mais sweep sitewide (navigation, schema central, pages services, composants CV, villes-frontalieres) reporté en Session 4c
- **Pas de cannibalisation `/blog/prix-site-web-suisse-2026`** : `/tarifs` cible l'intent transactional (acheter un pack), l'article cible l'intent educational (se renseigner sur les prix). Séparateur d'intent fort.

## DataForSEO — données Phase 0

| Topic seed | Vol/mois (CH, FR) | Intent | Compet. |
|---|---|---|---|
| tarif site web | 10 | commercial (0.91) | LOW |
| tarif création site web | **20** ⭐ | commercial | — |
| tarif refonte site web | 10 | commercial | — |
| tarif maintenance site web | 10 | commercial | — |
| création site web tarif | 10 | commercial | LOW |
| tarif site web Genève | 0 | commercial (0.68) | — |
| prix site web Genève | 0 | commercial | — |
| prix création site internet PME | 0 | commercial (0.99) | — |
| combien coute referencement PME Genève | 0 | commercial | — |
| tarif freelance développeur web | 0 | commercial | — |

**Rappel data Session 1** :
- `agence référencement Genève` : 110/mois ⭐ — capturé en FAQ #7
- `création site web Genève` : 90/mois — recoupé via H1 et meta
- `freelance dev web` : ~10/mois — recoupé via Title et hero

**Conclusion** : Le marché FR-CH est petit sur les composés "+ Genève" + "+ PME". Le seul KW à signal mesurable est `tarif création site web` (20/mois). La stratégie devient un composite : capter les variations "tarif/prix site web" (10-20/mois cumulés) + capter `agence référencement Genève` (110/mois) en éditorial FAQ + capter `création site web Genève` (90/mois) déjà géré par `/services/creation-site-web`.

## Snippet retenu

- **Title** (58 car) : `Tarifs site web & référencement freelance Genève | Jon Labs`
- **H1** : `Tarifs freelance — site web & référencement à Genève`
- **Meta description** (155 car) : `Tarifs transparents pour la création de site web et le référencement local à Genève. Packages freelance dès 1'490 CHF, sans contrat 12 mois. Devis gratuit.`

## Keyword Cluster

| Rôle | Keyword | Volume CH | Placement | Formulation naturelle |
|---|---|---|---|---|
| **Principal** | tarif site web | 10 | Title, H1, meta | tarifs site web / tarifs création site web |
| Secondaire | tarif création site web | 20 ⭐ | hero subtitle, sous-titre packages | tarifs création de site web |
| Secondaire | création site web Genève | 90 (cf. S1) | Title, H1, meta, FAQ | création de site web à Genève |
| Secondaire | référencement Genève | 10-30 (estimé S4a) | Title, H1, meta, FAQ | référencement à Genève / référencement local |
| Secondaire | agence référencement Genève | **110 ⭐** | FAQ #7 "Pourquoi moins chers qu'une agence à Genève ?", hero ("marge cachée d'agence") | une agence à Genève facture 8'000-15'000 CHF |
| Secondaire | freelance dev web | ~10 | Title, H1, hero, bullet "Bon à savoir" | tarifs freelance / packages freelance / engagement projet par projet |
| Long-tail | tarif refonte site web | 10 | implicit dans pack Visibilité | — |
| Related | contrat 12 mois | (n/a) | FAQ #8 + hero + bullet "Bon à savoir" | pas de contrat 12 mois |

## FAQ : 6 → 8 entries (verbatim)

### Conservées (4)
- FAQ #1 — Quels sont les délais de livraison ? (inchangée)
- FAQ #3 — Qu'est-ce qui n'est PAS inclus ? (inchangée)
- FAQ #4 — Et si j'ai besoin de modifications après la livraison ? (inchangée)
- FAQ #6 — Comment se passe le paiement ? (inchangée)

### Reformulées (2)
- **FAQ #2** : "Est-ce que le SEO est inclus dans tous les packs ?" → **"Est-ce que le référencement est inclus dans tous les packs ?"** — réponse enrichie (mention schema, mention Search Console)
- **FAQ #5** : answer touche "optimisés référencement" au lieu de "optimisés SEO" (sweep vocab seulement)

### Nouvelles (2)
- **FAQ #7 (NEW)** — "Pourquoi vos tarifs sont moins chers qu'une agence à Genève ?"
  - Capture `agence référencement Genève` (110/mois) en long-tail commercial
  - Différenciateur prix : 8'000-15'000 CHF agence vs 2'490 CHF pack Visibilité
  - Argumentaire : pas de locaux, pas de commerciaux, pas de chef de projet intermédiaire ; concession honnête en clôture (projets très volumineux = agence reste pertinente)

- **FAQ #8 (NEW)** — "Y a-t-il un contrat d'engagement de 12 mois ?"
  - Pattern repris de `/services/gestion-fiche-google` (FAQ équivalente) pour cohérence éditoriale
  - Positionne "résiliable 1 mois préavis pour Autorité, one-shot pour Présence/Visibilité"

## Schema.org — restructuration majeure

**Avant** (3 blocs) :
1. WebPage (via helper)
2. `WebPage` redondant + `ItemList` imbriqué d'Offer (mal typé)
3. FAQPage (6 questions)

**Après** (4 blocs) :
1. WebPage (via helper, inchangé)
2. **BreadcrumbList** (NEW — via `getBreadcrumbSchema()` lib/seo.ts)
3. **Service + AggregateOffer** (Service @id `/tarifs#service`, areaServed Genève/Vaud/Suisse Romande, serviceType "Création de site web et référencement", AggregateOffer lowPrice 1490 / highPrice 2490 / offerCount 3 / 3 Offer enfants)
4. **FAQPage** (8 questions, sync avec `faqs[]` display)

**Pourquoi AggregateOffer** : permet à Google d'afficher la fourchette de prix dans les Rich Results de la SERP. Validé via parsing manuel : 4 blocs JSON-LD générés correctement dans `dist/tarifs/index.html`.

## Gap concurrent (référence rapide)

Pages tarifs des agences web genevoises observées informellement :
- **Pas de schema AggregateOffer** chez la plupart (avantage différenciant pour Rich Results)
- **Pas de FAQ "freelance vs agence"** (angle inattaqué)
- **Pas de "sans contrat 12 mois"** mis en avant (différenciateur freelance assumé)
- Fourchettes opaques : "à partir de X CHF" sans détail. `/tarifs` propose comparatif détaillé 12 features dans le tableau.

## Maillage interne

**Liens sortants depuis /tarifs (gardés/ajoutés)** :
- 3 articles blog "Aller plus loin" (inchangés) : prix-site-web-suisse-2026, specialiste-developpement-web-suisse, freelance-ou-agence-web
- **NEW** : lien vers `/services/referencement-local` ajouté dans bullet "Bon à savoir" (renforce le maillage entrant vers la page money)

**Liens entrants vers /tarifs (inventaire)** :
- `src/data/navigation.ts` : entrée flat dans la nav principale
- `src/components/Footer.astro` : via mainNav
- `src/pages/developpeur-web-freelance-geneve.astro` : 2 CTA
- `src/pages/developpement-web/[ville].astro` : 2 CTA (5 villes frontalières)
- `src/pages/services/referencement-local.astro` : 1 lien contextuel FAQ

## Sweep interne tarifs.astro

Sweep "SEO" → "référencement" sur l'intérieur de la page :
- 13 occurrences avant
- 0 occurrence après (validation Grep + grep dist HTML)
- 3 occurrences "SEO" résiduelles dans dist/tarifs/index.html proviennent **uniquement** du chrome (mega-menu "SEO local" + tag `/blog/tag/seo`) → reporté en Session 4c

## Actions utilisateur post-déploiement

- Push + déployer (Vercel auto)
- Resoumettre `https://www.jonlabs.ch/sitemap-index.xml` dans GSC
- Demander indexation : `https://www.jonlabs.ch/tarifs` via URL Inspection API
- Valider AggregateOffer reconnu par Google : https://search.google.com/test/rich-results sur `/tarifs`
- Monitoring S+2, S+4 : positions sur `tarif site web`, `tarif création site web`, `agence référencement Genève` (capture en FAQ), `freelance dev web Genève`
