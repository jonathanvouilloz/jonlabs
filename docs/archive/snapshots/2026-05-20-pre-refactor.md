# Snapshot pré-refactor — 2026-05-20

> Session 1 du [chantier SEO refactor](../chantier-seo-refactor.md).
> État du site avant modifications. Sources : GSC (91 jours), URL Inspection API, DataForSEO.

---

## 📊 Vue d'ensemble GSC (jonlabs.ch, 2026-02-17 → 2026-05-18)

- **7'922 impressions** | 54 clics | CTR 0.68% | position moy 9.7
- 91 jours analysés
- Quick wins identifiés : 2 queries (`meilleures plateformes suivi performances seo aeo moteurs ia 2025 2026` pos 9.3, `seo local suisse romande` pos 14.9)

---

## 🔍 État d'indexation (75 URLs sitemap, 100% inspectées)

| Bucket | Nombre | % |
|--------|--------|---|
| ✅ Indexées | 46 | 61% |
| 🔵 Crawled not indexed | 5 | 7% |
| 🔵 Discovered not indexed | 13 | 17% |
| ❓ URL unknown (cache GSC vide) | 9 | 12% |
| 🚫 Blocked noindex (intentionnel) | 2 | 3% |

**61% d'indexation, c'est moyen. À améliorer en Session 5.**

---

## 🚨 DÉCOUVERTE MAJEURE — Astro config redirects existants

`astro.config.mjs` contient **7 redirects 301** déjà en place :

```js
'/blog/apparaitre-copilot'         → '/blog/apparaitre-copilot-2026'
'/blog/apparaitre-perplexity'      → '/blog/apparaitre-perplexity-2026'
'/blog/apparaitre-gemini'          → '/blog/apparaitre-gemini-2026'
'/blog/apparaitre-claude'          → '/blog/apparaitre-claude-2026'
'/blog/apparaitre-chatgpt-geneve'  → '/blog/apparaitre-chatgpt-geneve-2026'
'/blog/apparaitre-grok'            → '/blog/apparaitre-grok-2026'
'/blog/geo-seo-ia'                 → '/blog/geo-seo-ia-2026'
```

**Implication** : ces 7 articles ont déjà été renommés une fois (sans année → avec `-2026`).
Google voit ENCORE des impressions sur les anciens slugs car le jus est resté.

**Conséquence pour Session 2** : on peut juste **inverser ces redirects** et renommer les fichiers vers les slugs sans année — le jus est déjà sur ces URLs.

---

## 📈 Articles avec année — classification par data réelles

| Slug actuel | GSC ancien slug | GSC nouveau slug | Décision |
|------------|------------------|------------------|----------|
| `geo-seo-ia-2026` | — | **652 imp, pos 5.5** | ⚠️ **GROSSE PERF — KEEP slug actuel OU revert avec redirect inversé propre** |
| `apparaitre-grok-2026` | — | **387 imp, pos 6.7** | 🔄 **REVERT vers `apparaitre-grok`** (cohérence cluster) |
| `apparaitre-claude-2026` | **375 imp, pos 6.6** | url_unknown | 🔄 **REVERT vers `apparaitre-claude`** (le jus est déjà là) |
| `apparaitre-perplexity-2026` | **357 imp, pos 7.6** | url_unknown | 🔄 **REVERT vers `apparaitre-perplexity`** |
| `prix-site-web-suisse-2026` | — | **260 imp, pos 14.8** | ✅ **KEEP** (pas d'ancien slug, jus accumulé) |
| `apparaitre-copilot-2026` | 140 imp, pos 7.2 | url_unknown | 🔄 **REVERT vers `apparaitre-copilot`** |
| `apparaitre-chatgpt-geneve-2026` | 92 imp, pos 26.2 | discovered_not_indexed | 🔄 **REVERT vers `apparaitre-chatgpt-geneve`** |
| `fiche-google-my-business-guide-complet-2026` | — | 51 imp, pos 6.7 | ✅ **KEEP** |
| `no-show-rendez-vous-2026` | — | 37 imp + 5 imp (trailing /), crawled_not_indexed | ✅ **KEEP** + investiguer non-indexation |
| `visibilite-site-internet-2026` | — | 22 imp, pos 8.6 | ✅ **KEEP** |
| `notebooklm-guide-complet-2026` | — | discovered_not_indexed | ✅ **KEEP** + maillage interne |
| `optimiser-fiche-google-my-business-checklist-2026` | — | 0 imp | ⚠️ Récent (S20), à observer |
| `repondre-avis-google-modeles-2026` | — | scheduled 2026-05-26 | n/a (pas encore publié) |
| `apparaitre-gemini-2026` | (probable trafic ancien) | url_unknown | 🔄 **REVERT vers `apparaitre-gemini`** |

**Bilan** :
- **7 REVERT** (apparaitre-X-2026 → apparaitre-X + cleanup redirect)
- **6 KEEP** (slug gardé, le jus est dessus)
- `repondre-avis-google-modeles-2026` : récent, attendre

---

## 🏪 Pages /services/* — état catastrophique

| Service | Imp 91j | Indexation | Décision préliminaire |
|---------|---------|------------|------------------------|
| `/services/refonte-site-web/` | **10** | ⛔ crawled_not_indexed | 🔀 Fusion vers `creation-site-web` |
| `/services/creation-site-web` | 0 | ⛔ crawled_not_indexed | ✅ KEEP (pilier) |
| `/services/automatisation` | 0 | ⛔ crawled_not_indexed | ⏸️ DRAFT (hors focus) |
| `/services/gestion-fiche-google` | 0 | ⛔ discovered_not_indexed | ✅ KEEP (pilier) |
| `/services/integration-outils` | 0 | ⛔ discovered_not_indexed | ⏸️ DRAFT |
| `/services/outils-sur-mesure` | 0 | ⛔ discovered_not_indexed | 🔀 Fusion → `applications-sur-mesure` |
| `/services/validation-idee` | 0 | ⛔ discovered_not_indexed | ⏸️ DRAFT |
| `/services/developpement-mvp` | 0 | ❓ url_unknown | 🔀 Fusion → `applications-sur-mesure` |
| `/services/referencement-local` | 0 | ❓ url_unknown | ✅ KEEP (pilier) |

**Constat** : aucune page /services/ n'est correctement indexée. Le hub /services lui aussi sous-performe. C'est un problème structurel — probablement contenu trop fin + maillage interne faible + duplication entre pages.

---

## 🎯 DataForSEO — Volumes réels FR-CH

| Topic | Volume FR-CH | Intent | Observation |
|-------|--------------|--------|-------------|
| **agence référencement Genève** | **110/mois** ⭐ | commercial | Le plus gros volume — keyword à viser |
| **création site web Genève** | **90/mois** | navigational | Confirmé, déjà ciblé |
| **fiche Google My Business** | **50/mois** | navigational | Confirmé pour page GMB |
| développeur web Genève | 20/mois | commercial | Volume modéré mais ciblé |
| gestion fiche Google | 10/mois | navigational | Faible mais qualifié |
| référencer site Google | 10/mois | navigational | Variante intéressante |
| développeur web freelance | 10/mois | commercial | — |
| référencement local Genève | **0/mois** | commercial | ⚠️ Volume DataForSEO = 0 sur CH |
| référencement local Suisse romande | 0/mois | commercial | Idem |
| applications web sur mesure | 0/mois | commercial | Reformulation à tester |

**Implications stratégiques** :
1. ⚠️ **"référencement local Genève"** : la page actuelle vise un keyword avec 0 volume DataForSEO. Pourtant la page est ciblée. À investiguer : peut-être tester `"référencement Genève"` ou `"agence référencement Genève"` (110/mois) comme keyword principal.
2. ⭐ **Pivot recommandé** : utiliser **"agence référencement Genève"** comme keyword principal sur la page services référencement (volume 110/mois, intent commercial).
3. ✅ **"création site web Genève"** : 90/mois confirme le bon ciblage. Garder.
4. ✅ **"fiche Google My Business"** : 50/mois — bon volume pour page services GMB.

---

## 📝 Pages avec impressions mais sans page dédiée propre (opportunités)

Queries GSC avec impressions notables mais position > 10 :

| Query | Imp | Pos | Page actuelle | Action |
|-------|-----|-----|---------------|--------|
| `seo local suisse romande` | 101 | 14.9 | tarif-package-seo-local-suisse | À booster (Quick win) |
| `meilleures plateformes suivi performances seo aeo moteurs ia 2025 2026` | 109 | 9.3 | (long-tail) | À monitorer |
| `développeur web` | 37 | 4.9 | (home?) | Top 5 — bien |
| `agence de développement web ville-la-grand` | 10 | 1.7 | /developpement-web/ville-la-grand | ⭐ pos 1.7 |

---

## 🚫 Pages noindex légitimes (à confirmer)

- `/mentions-legales` ✅ OK
- `/outils/checklist-15-signes-site-dort-pdf` ✅ OK (PDF download)

---

## 🎯 Décisions consolidées pour Session 2

### Articles à RENOMMER (revert vers slug sans année)
1. `apparaitre-claude-2026` → `apparaitre-claude`
2. `apparaitre-copilot-2026` → `apparaitre-copilot`
3. `apparaitre-perplexity-2026` → `apparaitre-perplexity`
4. `apparaitre-gemini-2026` → `apparaitre-gemini`
5. `apparaitre-grok-2026` → `apparaitre-grok`
6. `apparaitre-chatgpt-geneve-2026` → `apparaitre-chatgpt-geneve`
7. `geo-seo-ia-2026` → `geo-seo-ia` *(à valider : 652 imp, risque mineur car redirect existe déjà)*

Mécanique :
- Renommer le fichier `.md`
- Mettre à jour le frontmatter `slug:` si présent
- **Inverser les redirects dans `astro.config.mjs`** (de `non-année → année` vers `année → non-année`)
- Sweep des liens internes (Grep)
- Demander réindexation GSC manuelle

### Articles à GARDER avec slug actuel
- `prix-site-web-suisse-2026` (260 imp)
- `visibilite-site-internet-2026` (22 imp)
- `no-show-rendez-vous-2026` (37 imp, à investiguer crawled_not_indexed)
- `notebooklm-guide-complet-2026` (à booster maillage)
- `fiche-google-my-business-guide-complet-2026` (51 imp)
- `optimiser-fiche-google-my-business-checklist-2026` (récent)
- `repondre-avis-google-modeles-2026` (scheduled)

### Pivot keyword principal pour Services
- **Page référencement local** : pivoter vers `agence référencement Genève` (110/mois) ?
- **Page création site** : garder `création site web Genève` (90/mois)
- **Page GMB** : viser `fiche Google My Business` (50/mois) + `gestion fiche Google` (10/mois)

---

## ❓ Questions ouvertes (à trancher avec Jonathan)

1. **`geo-seo-ia-2026`** (652 imp pos 5.5) — c'est la page la plus performante du site. Risque/bénéfice du revert ?
2. **`/services/referencement-local`** — pivoter vers `agence référencement Genève` comme keyword principal ? Ou faire 2 pages distinctes (services local vs agence référencement) ?
3. **Pages services non indexées (9/9)** — c'est un signal structurel fort. Faut-il revoir TOUT le template /services/* (content thinness ?) avant de Session 3 ?
4. **`no-show-rendez-vous-2026` crawled_not_indexed** — pourquoi cette page est crawlée mais pas indexée ? Content thinness ?

---

## 📂 Fichiers source

- `.seo-data/gsc-jonlabs-ch-2026-05-20.json` (GSC raw)
- `.seo-data/index-jonlabs-ch-2026-05-20.json` (URL Inspection raw)
- `.seo-data/keywords-*.json` (10 clusters DataForSEO)
- `.seo-data/_topics-services-refacto.txt` (topics analysés)
