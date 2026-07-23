# Feature — Refonte piliers services : micro-intentions & AI Overviews

> **Origine** : diagnostic du 2026-07-23 (session /resume-project) contre la grille « page hub par intention » :
> secteurs d'expertise **prouvés** · tarifs **affichés** · ciblage **mono-ville** · réponses **extractibles par les AIO**.
> Google personnalise la SERP (secteur, budget, ville du chercheur) → il sert la page qui matche la micro-intention,
> pas la page généraliste. Le site est déjà conforme sur mono-ville et (partiellement) tarifs ; le chantier porte
> sur les **secteurs prouvés**, les **prix manquants sur les gros paniers**, et l'**extension des signaux locaux/preuves**.
>
> **Périmètre** : les 12 pages auditées — 9 piliers `/services/*` indexés ou non, hub `/consultant-ia`,
> template `/consultant-ia/[ville]`, landing `/developpeur-web-freelance-geneve`.
> **Hors périmètre** : blog, pages géo `/developpement-web/*`, /tarifs (touchée seulement pour cohérence).

## Etat session 2026-07-23 — Diagnostic + plan (epic créé)

**Fait :**
- **Audit des 12 pages** (9 piliers `/services/*`, hub + template `/consultant-ia`, landing GE) contre la grille micro-intentions/AIO — via agent Explore, points sensibles revérifiés à la main (noindex, git log).
- **Verdict** : mono-ville ✅ partout ; tarifs ✅ sur 8/12 mais absents des gros paniers (mvp, mobile, automatisation) ; **secteurs prouvés = le vrai trou** (1 seule preuve chiffrée sur tout le site : Lécureux) ; FAQPage partout mais `localBusinessData` sur 3 pages seulement.
- **Vérifié** : les noindex de refonte-site-web (l.312) et automatisation (l.318) sont des décisions documentées (Session 3 + lot 1 du 15.07) — PAS des régressions.
- **Plan complet écrit** (ce fichier) : 5 lots + 5 décisions D1-D5 + mesure + carte du code anticipée. HANDOFF indexé.

**Prochain :** Jonathan tranche les **décisions D1-D5** (section ci-dessous). Ensuite Lot 1 : créer `src/data/secteurs-preuves.ts` + `SecteursGrid.astro` et projeter sur les 4 piliers money.

**Pièges :** ne rien coder avant D1 (prix réels) et D2 (liste secteurs) — le contenu de `secteurs-preuves.ts` en dépend entièrement. Baseline `/seo-ai-visibility` à prendre AVANT le premier déploiement du chantier si on veut mesurer l'effet AIO.

**Commit :** [à committer] docs(seo): epic refonte piliers micro-intentions — diagnostic + plan

---

## Diagnostic de référence (état 2026-07-23)

| Page | Tarifs CHF | Secteurs prouvés | Géo | Schema local |
|---|---|---|---|---|
| creation-site-web | ✅ 950/1'650/devis | ⚠️ personas + 2 cas non mis en grille | Mono GE | ❌ |
| refonte-site-web *(noindex volontaire, lot 1 du 15.07)* | ✅ grilles 1'000–4'000 | ❌ | Mono GE | ❌ |
| referencement-local | ✅ 1'490/2'490 | ✅ cas Lécureux + liste | Mono GE | ⚠️ JSON-LD montré en contenu, pas injecté |
| gestion-fiche-google | ✅ 590 + 300/mois | ⚠️ liste sans preuve nominative | Mono GE | ❌ |
| developpement-application-mobile | ❌ fourchette enfouie FAQ (l.179) | ❌ | Mono GE | ❌ |
| developpement-mvp | ❌ aucun montant | ❌ | Mono GE | ❌ |
| automatisation *(noindex, décision Session 3)* | ❌ ROI sans prix | ✅ 5 secteurs listés, 0 preuve | Mono GE | ❌ |
| developpeur-webflow | ✅ 1'490/2'490 | ❌ | ⚠️ title « Suisse romande » (l.26) vs H1 « Genève » (l.294) | ❌ |
| developpeur-wordpress | ✅ 1'490/2'490 | ❌ | Mono GE | ❌ |
| consultant-ia/index | ✅ 2'500–4'000 / 6'000–15'000 | ✅ métiers + cas barbershop | Multi romand ancré GE | ✅ localBusinessData |
| consultant-ia/[ville] (GE, Lausanne) | ❌ (template) | ✅ dynamique/ville | Mono/ville | ✅ localBusinessData |
| developpeur-web-freelance-geneve | ✅ grille + horaire 90–150 | ⚠️ 3 cas nominatifs | Mono GE | ✅ localBusinessData |

**Constat clé** : une seule preuve « secteur × chiffres » sur tout le site (Lécureux, `proofLecureux`, présent
sur referencement-local + landing GE). Les preuves existent en portfolio (6 fiches : santé, coiffure, artisanat
d'art, juridique, app/PWA, MVP startup) mais ne remontent pas sur les piliers.

---

## Décisions à trancher AVANT le Lot 1 (Jonathan)

- [ ] **D1 — Fourchettes prix réelles** pour `developpement-mvp` et `developpement-application-mobile`
      (seule la landing GE affiche « MVP dès CHF 4'500 » et une FAQ mobile dit « 10'000–15'000 » — confirmer/corriger,
      ces montants deviendront la source des grilles). Option : prix sur `automatisation` aussi, ou assumer « sur mesure ».
- [ ] **D2 — Liste canonique des secteurs revendiqués** et leur niveau de preuve. Proposition de départ :
      santé/paramédical (Physio Pommier) · coiffure/beauté (Barber Concept) · artisanat d'art (Ugo Mighali) ·
      juridique (Lécureux) · sport/club (article club sportif, pas de fiche) · fiduciaire (revendiqué sur automatisation
      + consultant-ia, **aucune preuve** — garder ?) · immobilier (page métier IA — preuve ?).
- [ ] **D3 — Webflow : title ou H1 gagne ?** « Suisse romande » (marché freelances Webflow plus large) vs « Genève »
      (cohérence mono-ville du site). Recommandation : **Genève partout** (aligné stratégie + le title actuel dilue).
- [ ] **D4 — Section secteurs d'automatisation** (page noindex) : la laisser mourir avec la page (l'intent IA a déménagé
      sur `/consultant-ia`) ou rapatrier son contenu secteur dans la grille du Lot 1 côté consultant-ia.
      Recommandation : **rapatrier** (le contenu est bon, la page est invisible).
- [ ] **D5 — Preuves chiffrées supplémentaires** : quels chiffres réels es-tu prêt à publier pour 1-2 cas hors Lécureux
      (Physio Pommier ? Barber Concept ?) — trafic, positions, avis, itinéraires GBP. Sans données réelles, le Lot 5
      reste au frigo (interdit d'inventer, cf. règle sources).

---

## Lot 1 — Grille « Secteurs » DRY projetée sur les piliers money

Objectif : chaque pilier money montre les secteurs où l'expertise est **prouvée**, avec lien vers la preuve
(fiche portfolio) — la donnée qui matche la personnalisation SERP par secteur.

- [ ] 1.1 Créer `src/data/secteurs-preuves.ts` (pattern `portfolio-relations.ts` / `villes-frontalieres.ts`) :
      ```ts
      interface SecteurPreuve {
        slug: string;            // 'sante', 'coiffure-beaute', …
        label: string;           // 'Santé & paramédical'
        icone: string;           // classe Remix Icon (jamais d'emoji)
        portfolioSlug?: string;  // 'physio-pommier' → lien preuve
        preuve?: string;         // phrase courte factuelle, chiffrée si D5 fournit
        services: string[];      // slugs des piliers où la carte s'affiche
      }
      ```
      Contenu = sortie de D2. Un secteur sans preuve est **affiché différemment** (mention « secteur accompagné »
      sans lien) ou omis — pas de fausse preuve.
- [ ] 1.2 Créer `src/components/SecteursGrid.astro` : grille de cartes blueprint (`.co-*`, filets hairline,
      icônes Remix monochromes), filtre par prop `service`, lien vers `/portfolio/{slug}` quand preuve.
      S'inspirer du bloc « Automatisation par secteur » d'`automatisation.astro` l.214-240 pour le contenu D4.
- [ ] 1.3 Insérer la grille sur 4 pages : `referencement-local.astro` (près du cas Lécureux, l.530),
      `gestion-fiche-google.astro` (remplacer/enrichir le bloc « Pour qui » l.149-157),
      `creation-site-web.astro` (section résultats l.393-409), `consultant-ia/index.astro` (section preuves l.480-494).
- [ ] 1.4 Maillage : chaque carte avec preuve pointe vers sa fiche portfolio (liens contextuels en corps —
      PAS footer, cf. décision 15.07). Vérifier que les fiches portfolio ciblées ont bien leur lien retour pilier
      (déjà géré par `portfolio-relations.ts`).
- [ ] Vérif : `npm run build` vert, aucune route ajoutée ; grep de la grille dans `dist/` sur les 4 pages ;
      chaque `portfolioSlug` référencé existe dans `src/content/portfolio/`.

## Lot 2 — Tarifs affichés sur les gros paniers

Objectif : aligner les pages build/mobile sur le différenciant documenté vs hgnn.io (« prix CHF transparents »).
Modèle = cartes prix de `consultant-ia/index.astro` l.62-105 (« Dès CHF X » + périmètre).

- [ ] 2.1 `developpement-mvp.astro` : ajouter une grille 2-3 paliers dans la section Investissement (l.317-335),
      montants issus de D1. Garder le paragraphe « facteurs ».
- [ ] 2.2 `developpement-application-mobile.astro` : sortir la fourchette de la FAQ (l.179) vers une carte visible
      dans la section Investissement (l.378-392) ; la FAQ garde sa réponse (extractibilité AIO).
- [ ] 2.3 Cohérence transverse : les montants doivent matcher la landing GE (`developpeur-web-freelance-geneve.astro`
      l.104-140 et l.236-261 : « MVP dès CHF 4'500 », « Application web 8'000 CHF dès ») et `/tarifs`.
      Une seule vérité par offre — corriger l'endroit qui diverge, pas dupliquer.
- [ ] Vérif : build vert ; grep des montants dans `dist/` ; aucun montant contradictoire entre
      mvp/mobile/landing/tarifs (grep croisé sur les valeurs CHF).

## Lot 3 — Étendre le schema LocalBusiness aux piliers indexés

Objectif : les AIO/SERP locales lisent le signal entité locale partout, pas seulement sur 3 pages.

- [ ] 3.1 Lire comment `localBusinessData` est construit/injecté sur `consultant-ia/index.astro` (l.280-295)
      → identifier la source (probablement `src/data/schema.ts`).
- [ ] 3.2 L'injecter sur les 7 piliers services **indexés** : creation-site-web, referencement-local,
      gestion-fiche-google, developpement-application-mobile, developpement-mvp, developpeur-webflow,
      developpeur-wordpress. PAS sur les pages noindex (bruit inutile).
- [ ] 3.3 NAP strictement identique partout (même objet source, zéro copie locale). Sur `referencement-local`,
      vérifier que l'exemple JSON-LD pédagogique affiché dans le corps (l.190-209) ne crée pas de doublon
      d'entité avec le schema injecté (l'exemple est dans un bloc code → inoffensif, confirmer au build).
- [ ] Vérif : build vert ; dans `dist/`, chaque pilier indexé contient exactement 1 bloc LocalBusiness ;
      validation d'un échantillon au Rich Results Test (action manuelle post-déploiement).

## Lot 4 — Micro-fixes cohérence

- [ ] 4.1 `developpeur-webflow.astro` : appliquer D3 (title l.26 ↔ H1 l.294 alignés).
- [ ] 4.2 Appliquer D4 (sort de la section secteurs d'automatisation — si rapatriement, le faire via
      `secteurs-preuves.ts`, pas par copier-coller).
- [ ] Vérif : build vert ; title/H1 cohérents dans `dist/`.

## Lot 5 — Preuves chiffrées extractibles (conditionné à D5)

- [ ] 5.1 Généraliser le pattern `proofLecureux` : composant ou data `preuves-clients.ts`
      (client, secteur, métrique, valeur, période, lien fiche).
- [ ] 5.2 Poser 1-2 blocs preuve sur les piliers concernés (ex. Physio Pommier → creation-site-web,
      Barber Concept → developpeur-webflow) — uniquement des chiffres fournis/validés par Jonathan.
- [ ] Vérif : build vert ; chaque chiffre publié tracé à sa source (note dans ce fichier).

## Mesure (post-déploiement)

- [ ] Request Indexing GSC sur les pages modifiées indexées (action manuelle Jonathan).
- [ ] `/seo-gsc` à J+30 sur les piliers touchés (CTR + position).
- [ ] Optionnel : `/seo-ai-visibility` avant/après pour objectiver l'effet AIO (baseline à prendre AVANT déploiement).
- [ ] Rappel : re-run `/seo-index-diagnose` mi-sept. (J+60, epic refonte-seo-clusters) — les deux mesures se croisent.

## Pièges

- **Ne rien inventer** : secteurs sans preuve = affichage neutre ou omission ; chiffres = fournis par Jonathan
  uniquement (précédent : misattribution Whitespark corrigée le 17.07).
- **noindex volontaires** : refonte-site-web (l.312) et automatisation (l.318) sont des décisions documentées
  (Session 3 + lot 1 du 15.07, alignement sitemap) — ne pas les « réparer ».
- **Liens contextuels en corps, jamais footer** (décision 15.07, `navigation.ts:178`).
- **DRY absolu** : secteurs → `secteurs-preuves.ts`, villes → `villes-frontalieres.ts` / `villes-suisse-ia.ts`,
  portfolio → `portfolio-relations.ts`. Aucune liste en dur dans les pages.
- **Design blueprint** : `.co-*`, hairlines, Remix Icons monochromes, zéro emoji UI (CLAUDE.md).
- **Un commit par lot**, checklist `.claude/checklist.md` avant chaque commit.

## Carte du code anticipée

| Fichier | Rôle dans l'epic |
|---|---|
| `src/data/secteurs-preuves.ts` | **À créer** — source de vérité secteur → preuve → piliers |
| `src/components/SecteursGrid.astro` | **À créer** — grille blueprint filtrable par service |
| `src/data/schema.ts` | Source probable de `localBusinessData` (à confirmer en 3.1) |
| `src/data/portfolio-relations.ts` | Mapping fiche → pilier existant (liens retour déjà en place) |
| `src/pages/services/{referencement-local,gestion-fiche-google,creation-site-web}.astro` | Reçoivent la grille secteurs |
| `src/pages/consultant-ia/index.astro` | Reçoit la grille + modèle des cartes prix (l.62-105) |
| `src/pages/services/{developpement-mvp,developpement-application-mobile}.astro` | Reçoivent les grilles prix |
| `src/pages/services/developpeur-webflow.astro` | Fix title/H1 (D3) |
| `src/pages/developpeur-web-freelance-geneve.astro` | Référence de cohérence prix (l.104-140, l.236-261) |
