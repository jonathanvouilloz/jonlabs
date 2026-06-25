# Diagnostic GSC — Pages mortes + Cannibalisation

> Source : Google Search Console `sc-domain:jonlabs.ch` — période 2026-03-25 → 2026-06-23 (91 j)
> Totaux site : 12 776 impressions · 65 clics · CTR 0,51 % · position moy. 12,3
> Généré le 2026-06-25. Contexte : refonte des pages piliers (web/SEO + applications).

## TL;DR

- **CTR catastrophique (0,51 %)** : le site est vu (12 k impressions) mais quasi jamais cliqué. Position moyenne 12,3 = page 2. Problème de positions + titles/metas.
- **La homepage cannibalise tout le local** : `/` ranke (souvent mieux) sur les requêtes géo/métier à la place des pages dédiées → elle dilue les pages piliers.
- **2 vrais doublons d'articles** à fusionner : `geo-seo-ia` et `apparaitre-grok`.
- **Cluster SEO local éclaté sur 3 pages faibles** qui se battent entre elles.
- **Pages piliers métier = mortes** : `developpeur-webflow`, `developpeur-wordpress`, `developpeur-web-freelance-geneve` (la landing perso !) = 0 impression sur 3 mois.
- **Problème de canonical www / non-www** non résolu (homepage indexée en double).

---

## 1. Pages MORTES (0 ou quasi-0 impression sur 3 mois)

Pages qui existent dans le site mais que Google ne fait jamais ressortir.

### Pages piliers/services à fort potentiel — actuellement mortes
| Page | Impressions | Note |
|------|-------------|------|
| `/developpeur-web-freelance-geneve` | **0** | ⚠️ La landing perso « dev freelance Genève » — invisible |
| `/services/developpeur-webflow` | **0** | Pilier métier voulu — invisible |
| `/services/developpeur-wordpress` | **0** | Pilier métier voulu — invisible |
| `/services/automatisation` | **0** | Pilier automatisation — invisible |
| `/services/integration-outils` | **0** | invisible |
| `/services/gestion-fiche-google` | **0** | invisible |
| `/services/validation-idee` | **0** | invisible |
| `/services/outils-sur-mesure` | **0** | invisible |
| `/services/refonte-site-web` | 6 | quasi-mort |
| `/services/creation-site-web` | 12 | quasi-mort |
| `/services/developpement-mvp` | 38 | faible (pilier « applications ») |

➡️ **À investiguer** : 0 impression = soit non indexé, soit aucun signal sémantique. Lancer `/seo-index-diagnose` pour trancher indexation vs contenu.

### Articles blog morts (<10 imp) — candidats fusion/suppression/refonte
`automatisation-club-sportif` (2) · `audit-50-sites-indeps-romands` (3) · `freelance-ou-agence-web` (3) · `no-show-rendez-vous-2026` (4) · `automatisation-pme-suisse-guide-complet` (5) · `temps-perdu-pme-automatisation` (6) · `ia-pragmatique-pme-suisse` (7)

---

## 2. CANNIBALISATION (1 requête → plusieurs URLs)

### A. ~~Doublons d'articles à fusionner~~ → FAUX POSITIF (déjà géré)
**Correction après lecture du code** : `geo-seo-ia-2026` et `apparaitre-grok-2026` ne sont PAS des pages live — ce sont d'anciennes URLs déjà **301-redirigées** vers les versions sans année (voir `astro.config.mjs`, revert du 2026-05-20). Les impressions encore visibles sur les `-2026` = Google n'a pas fini de transférer le jus. **Aucune action de fusion requise** ; juste s'assurer que tous les liens internes pointent vers la version sans année et laisser Google consolider.

### B. Cluster SEO local éclaté (3 pages se battent)
Requêtes « référencement/seo local genève · suisse · fribourg » réparties entre :
- `/services/referencement-local` (pos 15-46 — faible)
- `/blog/referencement-local-geneve` (pos 4-78 — instable)
- `/blog/tarif-package-seo-local-suisse` (pos 34)

➡️ Aucune page ne fait autorité. **Candidat n°1 pour un pilier « Consultant SEO local Suisse romande »** qui consolide ces 3 URLs.

### C. La HOMEPAGE cannibalise les pages géo/métier
`/` ranke sur les requêtes locales à la place des pages dédiées (souvent mieux placée) :
| Requête | Homepage `/` | Page dédiée |
|---------|-------------|-------------|
| entreprise dev web saint-julien | pos 2,5 | `/developpement-web/saint-julien` pos 11,7 |
| dev web sur mesure ville-la-grand | pos 4,4 (page) | `/` pos 15,5 |
| agence dev web ville-la-grand | `/` pos 1,7 | page pos 5,0 |
| entreprise dev web gaillard | `/` pos 2,3 | page pos 12,3 |
| spécialiste développement web suisse | `/` pos 63 | `/blog/specialiste-developpement-web-suisse` pos 5,7 |

➡️ La home est trop générique et trop forte : elle absorbe le jus local. Il faut **clarifier l'intention de chaque page géo** et désoptimiser la home sur ces requêtes (ou assumer la home comme hub et renvoyer vers les pages géo).

---

## 2bis. Diagnostic INDEXATION des pages mortes (URL Inspection API)

Inspection des 12 pages services/landing à 0 impression. **4 causes distinctes** — chacune appelle une action différente :

| Page | État Google | Cause | Action |
|------|-------------|-------|--------|
| `/developpeur-web-freelance-geneve` | **URL unknown** | Google n'a jamais vu l'URL | Sitemap + liens internes + Request Indexing |
| `/services/developpeur-webflow` | **URL unknown** | jamais vue | Sitemap + liens internes + Request Indexing |
| `/services/developpeur-wordpress` | **URL unknown** | jamais vue | Sitemap + liens internes + Request Indexing |
| `/services/gestion-fiche-google` | Discovered, not indexed | connue mais jamais crawlée (maillage faible) | Renforcer liens internes, soumettre |
| `/services/outils-sur-mesure` | Discovered, not indexed | maillage faible | Renforcer liens internes |
| `/services/automatisation` | Crawled, not indexed + **noindex** | **draft volontaire** (Session 3) | Finaliser contenu → retirer noindex |
| `/services/refonte-site-web` | Crawled, not indexed + **noindex** | **draft volontaire** | Finaliser → retirer noindex |
| `/services/creation-site-web` | Crawled, not indexed | contenu jugé trop faible (dernier crawl 02-03) | Enrichir contenu + maillage |
| `/services/integration-outils` | **noindex** (volontaire) | draft Session 3 | Finaliser ou laisser |
| `/services/validation-idee` | **noindex** (volontaire) | draft Session 3 | Finaliser ou laisser |
| `/services/developpement-mvp` | ✅ Indexée | OK (ranking faible = contenu/concurrence) | Travail SEO on-page |
| `/services/referencement-local` | ✅ Indexée | OK (ranking faible) | Travail SEO on-page |

**Lecture** :
- 3 pages piliers clés (webflow, wordpress, **landing perso freelance Genève**) sont littéralement **inconnues de Google** — elles ne sont dans aucun chemin que Google a suivi. Priorité absolue : les rendre découvrables.
- 4 pages services sont en **draft/noindex volontaire** (`astro.config.mjs` les exclut du sitemap + balise noindex). Leur invisibilité est normale — mais `automatisation` et `refonte-site-web` sont des piliers à finaliser.
- `creation-site-web` est crawlée mais jugée trop faible (thin content) → enrichissement.

## 3. Problèmes techniques de canonical

- **Homepage en double** : `https://jonlabs.ch/` (1759 imp) ET `https://www.jonlabs.ch/` (831 imp) apparaissaient séparément dans GSC. ✅ **RÉSOLU au niveau infra** : le 308 `jonlabs.ch → www.jonlabs.ch` est déjà actif (vérifié 2026-06-25, apex + pages profondes). Canonical = www, déclaré partout dans le code. Les impressions non-www restantes sont du **résiduel** que Google consolidera sur www au fil des recrawls (308 = permanent, traité comme 301). Aucune action requise, juste du temps.
- **Trailing slash** : `/blog/0a30joursgooglevisible` vs `/blog/0a30joursgooglevisible/` indexés en double. ✅ Déjà géré par `vercel.json` (`trailingSlash: false`) + `astro.config.mjs` (`trailingSlash: 'never'`). Résiduel à consolider.

---

## 4. Ce qui marche (à préserver / amplifier)

| Page | Imp | Pos | Lecture |
|------|-----|-----|---------|
| `/blog/hermes-agent-ia-pme` | 1625 | 10,2 | bon volume, pousser en top 5 |
| `/jonvolio/blog/claude-skills-tutorial` | 1703 | 9,7 | fort volume (section jonvolio) |
| `/blog/geo-seo-ia-2026` | 1172 | 7,3 | quick win — déjà proche top 5 |
| `/blog/specialiste-developpement-web-suisse` | 410 | 12,0 | requête métier clé, à renforcer |
| `/blog/apparaitre-perplexity` | 377 | 7,4 | 0 clic → réécrire title/meta |

---

## Actions prioritaires (ordre proposé)

1. **Quick wins canonical** (1 commit) : 301 www→non-www, trailing slash, fusion `geo-seo-ia` + `apparaitre-grok`.
2. **Diagnostic indexation** (`/seo-index-diagnose`) sur les pages services à 0 imp pour savoir si c'est indexation ou contenu.
3. **Topical map** des 2 piliers (web/SEO + applications) — `/seo-topical-map` — pour cadrer l'architecture cible avant de créer/refondre les landing pages.
4. **Pilier SEO local** : consolider les 3 pages SEO local en une page d'autorité.
5. **Désambiguïser home vs pages géo** pour récupérer le jus local.
</content>
