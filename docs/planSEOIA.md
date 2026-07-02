# Plan SEO IA — Chantier "Consultant IA / Agents IA" Jon Labs

> Créé le 2026-06-30. Plan de chantier maître du silo IA (conversion).
> Source de vérité contenu : `docs/topical-map-consultant-ia.md`. Concurrent analysé : `docs/seo-context.md` (section hgnn.io).
> Statut : **Phase 1 ✅ + Phase 2 ✅ faites (2026-07-01) — Phase 3 à lancer**.

---

## État session 2026-07-01 (Phase 2)

**Fait :** Phase 2 complète. **Pages métiers** en route data-driven (`src/data/metiers-ia.ts` + `src/pages/metiers/[metier].astro`, gabarit 12 sections) → `/metiers/ia-fiduciaire` (Bexio/Crésus, angle nLPD) + `/metiers/ia-agence-immobiliere` (Garaio REM/ImmoTop, terrain hgnn). **Landing `/hermes`** transactionnelle (8 sections, prix CHF affichés). **Service `/services/formation-ia-equipe`** (dès CHF 1'200, `index,follow`). Schemas Service ajoutés (métiers + hermes + formation) + ItemList à 8. **Maillage** : méga-menu Consultant IA (colonne Métiers + Hermès + Formation), hub → métiers/hermes/formation, pages géo → métiers, boucle article↔métier fermée. **2 articles** : `ia-nlpd-conformite-suisse` ⚡ (pubDate 24.08, ~2460 mots, review 16/18) + `consultant-ia-c-est-quoi` (pubDate 28.08, ~1870 mots, review 17/18), covers template, 0 image inline (règle anti-404). Build vert **208 pages**. **Fix pré-flight** : 2 images cassées de `agent-ia-entreprise-cas-usage` régénérées via `/visual`.
**Prochain :** Phase 3 (§4) — `/metiers/ia-commerce-retail` + `/metiers/ia-cabinet`, landing `/openclaw`, `services/audit-ia` + `/consultant-ia/nyon`. (Articles `rag-documents-pme` + `chatbot-vs-agent-ia-support` → migrés au cluster « Mettre l'IA en place ».) Avant : Request Indexing GSC sur les 4 nouvelles pages Phase 2 (hub/géo déjà à faire depuis Phase 1).
**Pièges :** Cadence blog remplie jusqu'au 28.08 (dernier = `consultant-ia-c-est-quoi`). Les articles restent date-gatés (`isPublished` dans `src/lib/blog.ts`) — ils apparaîtront au rebuild cron du 24 et 28.08. Anti-cannibalisation hub↔géo↔métiers OK (titles distincts). Pages métiers data-driven : garder du contenu réel par verticale (garde-fou `/programmatic-seo`) quand on ajoutera commerce/cabinet.
**Commit :** commits par lot (pages / maillage / articles / fix-images / docs).

---

## Carte du code — silo IA (Phase 1 + 2)
> Mise à jour : 2026-07-01

| Fichier | Rôle |
|---------|------|
| `src/data/metiers-ia.ts` | Données des pages métiers (interface `MetierIAData` + 2 verticales fiduciaire/immobilier) |
| `src/pages/metiers/[metier].astro` | Gabarit route dynamique des métiers (12 sections, méthode = constante partagée) |
| `src/pages/hermes.astro` | Landing produit Hermès (transactionnelle, prix CHF affichés) |
| `src/pages/services/formation-ia-equipe.astro` | Page service Formation IA (gabarit integration-outils) |
| `src/pages/consultant-ia/index.astro` | Hub conversion — grille services + bloc métiers + liens hermes/formation |
| `src/pages/consultant-ia/[ville].astro` | Pages géo (Genève/Lausanne) — reco descendante vers métiers |
| `src/data/villes-suisse-ia.ts` | Données des pages géo |
| `src/data/schema.ts` | `serviceSchemas` (métiers/hermes/formation) + `servicesListData` ItemList (8) |
| `src/data/navigation.ts` | Méga-menu « Consultant IA » (colonnes Agents/Métiers/Régions/À lire) |
| `src/content/blog/ia-nlpd-conformite-suisse.md` | Article nLPD (pubDate 24.08) |
| `src/content/blog/consultant-ia-c-est-quoi.md` | Article consultant IA (pubDate 28.08) |

### Décisions clés
- **Métiers en data-driven** (1 route `[metier].astro` + N entrées) : scalable pour commerce/cabinet en Phase 3, garde-fou anti-template = contenu réel par verticale.
- **Section Méthode** = constante partagée dans le template, jamais dupliquée en data.
- **Articles sans image inline** (règle anti-404, leçon Phase 1) : seule la cover en frontmatter ; diagrammes SVG ajoutés post-hoc si besoin.
- **`.briefs/` scanné par le loader blog** → warning `Duplicate id` bénin/déterministe (détail + fix dans HANDOFF).

---

## État session 2026-07-01 (Phase 1)

**Fait :** Phase 1 complète, orchestrée via sous-agents. Hub `/consultant-ia` (repositionné « PME romandes »), pages géo `/consultant-ia/{geneve,lausanne}` (route dynamique + `src/data/villes-suisse-ia.ts`, contenu local), section nav + schema. Maillage montant (13 articles → hub) + boucle cluster fermée. 2 articles ⚡ (`agent-ia-entreprise-cas-usage` 17.08, `prix-agent-ia-automatisation-suisse` 21.08) avec covers + **5 diagrammes inline** (SVG→WebP). Build vert, 9 commits poussés sur `main`.
**Prochain :** Lancer Phase 2 (§4) — pages métiers `/metiers/ia-fiduciaire` ⚡ + `/metiers/ia-agence-immobiliere`, landing `/hermes`. Avant : Request Indexing GSC sur hub + 2 pages géo.
**Pièges :** Cannibalisation hub↔géo Genève résolue (hub = « PME romandes », géo = exact-match). Meta uniques par ville via champ `metaDescription`. Cadence blog pleine jusqu'au 14.08 → les 2 ⚡ datés 17/21.08 (avançables si on décale). Diagrammes inline régénérables via le générateur SVG (approche sharp, pas d'API — le skill `visual` sert aux visuels sociaux, pas aux schémas).
**Commit :** [6a5ad49] docs(seo): diagrammes inline faits — 2 articles IA marqués prêts à publier

---

## 1. Pourquoi ce chantier

**Constat** : on a déjà une **base éditoriale IA mûre** (13 articles publiés : hub automatisation, Hermès, OpenClaw, workflows vs agents, GEO 6 moteurs, etc.) mais **aucune couche de conversion IA** : pas de hub "Consultant IA", pas de page géo IA, pas de page métier, pas de landing produit. Le blog attire mais ne convertit pas faute de destination transactionnelle.

**Déclencheur** : analyse de **hgnn.io** (Gauthier Huguenin), freelance IA français qui cible Genève en transfrontalier et **occupe déjà "consultant IA Genève"**, avec une architecture de conversion complète (hub `/consultant-ia`, pages métiers, pages géo, landings Hermès/OpenClaw). Il pousse les **mêmes produits** que nous (Hermès, OpenClaw).

**Objectif** : construire le silo de conversion IA qui nous manque, en réutilisant le contenu existant, pour :
1. **Défendre** "consultant IA Genève" sur notre propre terrain (ancrage suisse réel vs frontalier).
2. **Convertir** le trafic blog IA existant (lien montant vers le hub).
3. **Capter** les requêtes "agent IA entreprise / automatisation IA entreprise / intégration agent IA Genève".

**Différenciants à marteler partout** (ce que hgnn n'a pas) :
- 🇨🇭 **Vraiment basé à Genève / en Suisse** — pas de "je passe la frontière". Adresse suisse, contexte nLPD maîtrisé.
- 💰 **Prix CHF transparents** — hgnn cache tous ses tarifs ; nous affichons.
- 📊 **Preuves chiffrées** — audit 50 sites, position #1 en 5 mois, cas clients.
- 🧩 **Full-stack** — IA + site + SEO/GEO + mobile = prestataire unique.

---

## 2. Ce qu'on reprend de hgnn (et ce qu'on rejette)

| On reprend | On adapte / rejette |
|---|---|
| Template **page Métier** (pains → 8 cas d'usage → parcours métier → outils nommés → méthode → pour qui → FAQ) | Verticales **romandes** (fiduciaire, immo, commerce, cabinet) au lieu des siennes |
| **Hub `/consultant-ia`** + pages géo `consultant-ia-[ville]` | Villes **suisses** (Genève, Lausanne, Nyon…) au lieu de Grenoble/Lyon |
| **Landings produit** Hermès/OpenClaw avec offre tangible (délai, format cadrage) | On ajoute **prix CHF** (lui ne les met pas) |
| Section **Méthode** + insistance "validation humaine" | — |
| Section **"Pour qui / Pas pour qui"** (qualifie les leads) | — |
| Copy **bénéfice-first sans jargon** ("du travail en moins") | Adapté à notre voix (voir `docs/voice.md`) |
| **Outils métier nommés** (capte les recherches par logiciel) | Outils du marché **suisse** (Bexio, Crésus, etc.) |
| Services **Formation IA** + **Conseil/Audit IA** | — |
| **Bilingue FR/EN** | **Reporté** (vague 3) — marché expat genevois, mais après le FR |

---

## 3. Architecture cible

```
LA MARQUE — Jon Labs (Genève)
│
├── /consultant-ia ............................ HUB CONVERSION IA (pillar) [P1]
│   ├── /consultant-ia-geneve .................. géo — défensif vs hgnn [P1]
│   ├── /consultant-ia-lausanne ............... géo [P2]
│   ├── /consultant-ia-nyon ................... géo [P3]
│   └── /consultant-ia-{fribourg,neuchatel,sion,riviera} [P4 backlog]
│
├── /metiers/
│   ├── ia-fiduciaire ......................... métier [P2]
│   ├── ia-agence-immobiliere ................. métier [P2]
│   ├── ia-commerce-retail ................... métier [P3]
│   ├── ia-cabinet ........................... métier [P3]
│   └── ia-agence-web-marketing .............. métier [P4]
│
├── /hermes .................................. landing produit [P2]
├── /openclaw ................................ landing produit [P3]
│
├── /services/
│   ├── automatisation ....................... EXISTANT (retitré "Automatisation & agents IA")
│   ├── integration-outils ................... EXISTANT
│   ├── outils-sur-mesure .................... EXISTANT
│   ├── agent-ia-sur-mesure .................. service [P1] (ou section du hub — à trancher)
│   ├── formation-ia-equipe .................. service [P2]
│   └── audit-ia ............................. service [P3]
│
└── /blog/ (EXISTANT — 13 articles IA, Outer Section)
    ├── automatisation-pme-suisse-guide-complet  [hub info]
    ├── hermes-agent-ia-pme · openclaw-pme-suisse · workflows-vs-agents-ia-pme
    ├── comment-choisir-quoi-automatiser-pme · avantages-limites-automatisation-pme
    ├── ia-pragmatique-pme-suisse · temps-perdu-pme-automatisation · notebooklm-…
    ├── application-mobile-automatisation-pme · automatisation-club-sportif
    └── + 6 nouveaux articles (cluster G du topical map)
```

---

## 4. Le chantier en phases

> Cadence : respecter la règle 2 articles blog/semaine (lundi/vendredi). Les **pages** (hub/géo/métiers/landings) ne sont pas soumises à la cadence blog — elles se shippent en continu. Vérifier `/calendar` avant d'ajouter des articles.

### Phase 1 — Fondation conversion (défensif + capter "agent IA entreprise") — ✅ FAITE (2026-07-01)
**But : exister sur "consultant IA Genève" et brancher le blog au tunnel.**
1. ✅ **`/consultant-ia`** — hub IA (offre, 6 services, section agents sur-mesure, différenciants suisses, preuves, FAQ, CTA `/contact`). Pillar. Title repositionné sur "PME romandes" pour éviter la cannibalisation avec la géo Genève.
2. ✅ **`/consultant-ia/geneve`** + **`/consultant-ia/lausanne`** — pages géo via route dynamique `[ville].astro` + `src/data/villes-suisse-ia.ts` (contenu local réel, FAQ, schema LocalBusiness). Décision : sous-dossier `/consultant-ia/[ville]` (pas slug plat). Nyon écarté (trop petit). Genève garde l'exact-match "consultant IA Genève".
3. ✅ **agent-ia-sur-mesure** = **section du hub** (`#agents-sur-mesure`), pas de page dédiée (anti-cannibalisation).
4. ✅ **Maillage montant** : 1 lien contextuel (ancres variées) sur chacun des 13 articles IA → `/consultant-ia`, + réciproque hub-info ↔ hub-conversion. Boucle cluster fermée (lien retour vers l'article prix depuis hermes + avantages-limites).
5. ✅ **Articles** : `agent-ia-entreprise-cas-usage` ⚡ (pubDate 2026-08-17) + `prix-agent-ia-automatisation-suisse` ⚡ (pubDate 2026-08-21). Covers template OK, review SEO 17/18, **5 diagrammes inline** produits (SVG brutaliste → WebP via sharp, sans API). Articles complets, prêts à publier.

> Build vert (204 pages). Commits : `feat(seo): hub + géo`, `feat(seo): maillage`, `feat(blog): 2 articles`. La file éditoriale étant pleine jusqu'au 14.08, les 2 articles sont datés aux prochains créneaux libres (17 + 21.08) — avançables si on décale un article moins prioritaire.

### Phase 2 — Verticalisation + produit — ✅ FAITE (2026-07-01)
**But : profondeur thématique + offres tangibles.**
6. ✅ **`/metiers/ia-fiduciaire`** ⚡ + **`/metiers/ia-agence-immobiliere`** — route data-driven `[metier].astro` + `src/data/metiers-ia.ts` (gabarit 12 sections, contenu réel par verticale, outils suisses nommés, schema Service + FAQPage).
7. ✅ **`/hermes`** — landing produit transactionnelle (offre + délai + prix CHF affichés, distincte de l'article blog).
8. ✅ **`services/formation-ia-equipe`** — dès CHF 1'200, `index,follow`, ajoutée à l'ItemList (8 services).
9. ✅ **`/consultant-ia/lausanne`** — déjà livrée en Phase 1 (géo P2), sans objet ici.
10. ✅ **Articles** : `ia-nlpd-conformite-suisse` ⚡ (24.08, 16/18) + `consultant-ia-c-est-quoi` (28.08, 17/18).

> Build vert (208 pages). Maillage : méga-menu + hub + géo → métiers/hermes/formation. Fix pré-flight : 2 images cassées de `agent-ia-entreprise-cas-usage` régénérées via `/visual`.

### Phase 3 — Élargissement
11. **`/metiers/ia-commerce-retail`** + **`/metiers/ia-cabinet`**.
12. **`/openclaw`** — landing produit.
13. **`services/audit-ia`** + **`/consultant-ia-nyon`**.
14. ~~**Articles** : `rag-documents-pme` + `chatbot-vs-agent-ia-support`~~ → **migrés** vers le cluster « Mettre l'IA en place » (`docs/topical-map-mise-en-place-ia.md` / `docs/plan-mise-en-place-ia.md`).

### Phase 4 — Backlog / scale
15. Géo vague 2 (Fribourg, Neuchâtel, Sion, Riviera) — seulement si Phase 1-3 rankent (data-driven via `/seo-gsc`).
16. `/metiers/ia-agence-web-marketing`.
17. **Bilingue EN** sur le hub + Genève + métiers phares (marché expat).
18. `deepen` (Layer 2) sur les spokes qui prennent de la traction.

---

## 5. Templates réutilisables

### Template page Métier (`/metiers/ia-[vertical]`)
Repris de hgnn, adapté Suisse romande. Sections dans l'ordre :
1. **H1 sectoriel** + accroche (pain métier) + 2 CTA (cal.com + "décrire mon besoin").
2. **"Ce qui devrait remonter tout seul"** — 4 flux clés du métier.
3. **Pains opérationnels** — 5-6 douleurs concrètes.
4. **8 cas d'usage IA spécifiques** au métier (le cœur).
5. **Parcours [métier]** — le cycle de vie en 4-5 étapes.
6. **Outils métier compatibles** — logiciels suisses nommés (Bexio, Crésus, + logiciels verticaux).
7. **Méthode** — audit → prototype → garde-fous (validation humaine) → prise en main.
8. **"Pour qui / Pas pour qui"** — critères + anti-critères.
9. **FAQ** 6-7 questions + FAQPage schema.
10. **Preuves** — cas/chiffres (notre avantage vs hgnn qui n'en a pas sur ses pages métier).
11. **Maillage** : → hub, → services, → 3-4 articles blog connexes.
12. **CTA final** + schema Service/LocalBusiness.

### Template page géo (`/consultant-ia-[ville]`)
S'appuyer sur le pattern existant `src/pages/developpement-web/[ville].astro` + `src/data/villes-frontalieres.ts`, MAIS :
- Nouveau jeu de données **villes suisses** (`src/data/villes-suisse-ia.ts` : nom, canton, secteurs dominants, repères locaux).
- Contenu **réellement local** par ville (pas un template au nom remplacé — cf. garde-fous `/programmatic-seo`).
- Angle Genève : "vraiment basé ici / pas frontalier" comme contre-pied direct à hgnn.
- FAQ locale + schema LocalBusiness.

### Template hub `/consultant-ia`
- Hero bénéfice-first + CTA cal.com ("Cadrer mon projet IA").
- 6 services en cartes (Agents IA sur-mesure, Automatisation, Intégration, Formation, Audit/Conseil, + produits Hermès/OpenClaw).
- Bloc "Où l'IA peut vous enlever du travail" (cas d'usage transversaux).
- Différenciants suisses (nLPD, CHF, full-stack, preuves).
- Liens vers métiers + géo + blog (distribution).
- Témoignages + FAQ + schema.

---

## 6. Décisions à trancher avant de coder

1. **URL du hub** : `/consultant-ia` (match keyword exact, comme hgnn) **vs** `/services/intelligence-artificielle` (cohérence avec le dossier /services). → Reco : **`/consultant-ia`** à la racine (slug = keyword, plus fort en SEO + symétrie avec les pages géo `consultant-ia-[ville]`).
2. **`agent-ia-sur-mesure`** : page service dédiée **vs** section du hub. → Reco : démarrer en **section du hub** (évite la cannibalisation avec `/services/automatisation`), extraire en page seulement si la demande le justifie.
3. **Dossier métiers** : `/metiers/ia-[x]` **vs** `/services/ia-[secteur]`. → Reco : **`/metiers/`** (lisible, scalable, calque hgnn).
4. **Ordre des verticales métier** : fiduciaire + immobilier d'abord (densité Genève + terrain hgnn). À confirmer selon ta clientèle réelle.
5. **Villes géo vague 1** : Genève (P1), Lausanne (P2), Nyon (P3). OK ?
6. **Réutilisation Hermès/OpenClaw** : la landing produit reprend l'article blog ou contenu neuf ? → Reco : **landing neuve transactionnelle** (offre + prix), l'article reste l'informationnel, maillage croisé.

---

## 7. Réutilisation du contenu existant (map)

| Nouvelle page | Contenu source à recycler |
|---|---|
| `/consultant-ia` (hub) | `services/automatisation` (structure), blog hub automatisation (cas d'usage), tous les articles agents |
| `/hermes` (landing) | `blog/hermes-agent-ia-pme` (guide, prix CHF, cas d'usage) |
| `/openclaw` (landing) | `blog/openclaw-pme-suisse` |
| `metiers/ia-*` | `agent-ia-entreprise-cas-usage` (cas), `ia-pragmatique-pme-suisse`, `comment-choisir-quoi-automatiser-pme` |
| `prix-agent-ia-automatisation-suisse` | `avantages-limites-automatisation-pme` (coûts cachés), prix CHF des articles Hermès/OpenClaw |
| `ia-nlpd-conformite-suisse` | (neuf) — angle souveraineté/hébergement déjà esquissé dans articles agents |
| Pages géo | `src/pages/developpement-web/[ville].astro` (pattern), `src/data/villes-frontalieres.ts` (modèle données) |

---

## 8. Maillage (règle d'or)

- **Tout le silo IA pointe vers `/consultant-ia`** (hub conversion).
- **Les 13 articles blog IA existants** reçoivent un lien montant vers le hub (action Phase 1 #4) → c'est le levier qui monétise l'existant.
- Hub info (`blog/automatisation-pme-suisse-guide-complet`) ↔ hub conversion (`/consultant-ia`) : lien réciproque.
- Liens latéraux **uniquement sur intention partagée** (ex : `metiers/ia-fiduciaire` ↔ `ia-nlpd-conformite-suisse`).
- Détail complet : blueprint dans `docs/topical-map-consultant-ia.md`.

---

## 9. Mesure

- **Indexation** : Request Indexing GSC sur chaque nouvelle page (hub + géo + métiers en priorité).
- **Suivi** : `/seo-gsc` à J+30/60 sur les requêtes "consultant IA", "agent IA entreprise", "automatisation IA + [ville]".
- **Signal de réussite Phase 1** : apparaître sur "consultant IA Genève" (vs hgnn) + clics depuis le blog vers le hub.
- **Décision d'expansion** (Phase 4) : `deepen` uniquement les spokes qui rankent (pas de paris à l'aveugle).

---

## 10. Prochaine action

Lancer la **Phase 1**. Point de départ recommandé : **`/consultant-ia` (hub)** — c'est la pièce qui débloque tout le reste (destination du maillage + des pages géo/métiers).

Ordre concret Phase 1 :
1. Trancher les décisions §6 (surtout URL hub + statut agent-ia-sur-mesure).
2. Construire `/consultant-ia` (hub).
3. Construire `/consultant-ia-geneve`.
4. Brancher le maillage montant depuis le blog.
5. `/seo-brief agent-ia-entreprise-cas-usage` puis `/seo-brief prix-agent-ia-automatisation-suisse`.
