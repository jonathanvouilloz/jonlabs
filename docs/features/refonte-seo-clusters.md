# Feature — Refonte SEO / restructuration par clusters

> Chantier de fond : re-simplifier le site autour de **3 clusters** (app custom, app mobile, création web+référencement), garder ce qui ranke, virer l'invisible hors-périmètre.
> **Plan maître** : `docs/restructuration-clusters.md` (archi cible, verdict par page, liste KILL, feuille de route 5 phases).
> **Diagnostic data** : `.seo-data/diagnostic-gsc-pages-cannibalisation.md`.

## Etat session 2026-06-25 — Phase 1 / C1 + C3 : topical maps (Phase 1 bouclée)

**Fait :**
- **Topical map C1 livrée** (`docs/topical-map-c1-sur-mesure-automatisation.md`) — verdict structurant : **2 silos frères** (Build `/services/developpement-mvp` faible + Automate `/services/automatisation` fort, Hermès 1610 imp). 4 articles à créer côté Build (logiciel-vs-saas, prix-logiciel-sur-mesure, no-code-vs-sur-mesure, cahier-des-charges), fan-out couvert, anti-cannibalisation passé.
- **Décisions C1 tranchées** : `valide-idee-business-suisse` KEEP (Outer) ; `/services/validation-idee` → **MERGE confirmé** dans developpement-mvp ; `ia-pragmatique` + `temps-perdu` → **301** vers le guide auto ; `automatisation-club-sportif` + `no-show` → **KEEP-demote** (re-éval J+90). Rationalisation service : 5 pages → 2 piliers.
- **Topical map C3 livrée** (`docs/topical-map-c3-web-referencement.md`) — verdict : **4 silos frères** (création web / SEO local / GEO / GMB), cluster **mature** → chantier de **consolidation/activation/CTR**, pas de création (1 seule : `refonte-site-web-pme`). Pilier GMB élu (`fiche-google-my-business-guide-complet-2026`), dé-cannibalisation SEO local cadrée, désambiguïsation home documentée.
- **Plan maître à jour** : Phase 1 `[x]` sur les 3 clusters (C1, C2, C3 cartographiés).

**Prochain :** Phase 2 — démarrer la **consolidation SEO local C3b** : 301 de `referencement-local-geneve` + `tarif-package-seo-local-suisse` → `/services/referencement-local` (absorber le meilleur contenu). Alternative : lancer la création C1 Build via `/seo-brief logiciel-sur-mesure-vs-saas` (article #1, score 8/9).

**Pièges :**
- **C1 et C3 sont des multi-silos**, pas des clusters plats : raisonner par pilier (2 pour C1, 4 pour C3), pas par « cluster » global.
- GEMINI_API_KEY toujours expirée (génération images via OpenAI en dépannage).
- Action manuelle en attente côté Jonathan : **Request Indexing** GSC sur les 3 piliers UNKNOWN (developpeur-web-freelance-geneve, services/developpeur-webflow, services/developpeur-wordpress).

**Commit :** 6063ab3 docs(seo): topical maps C1 + C3 — Phase 1 clusters bouclée

---

## Etat session 2026-06-25 — Phase 1 / C2 : pilier service mobile

**Fait :**
- **Pilier service mobile créé** : `src/pages/services/developpement-application-mobile.astro` (modèle = developpement-mvp.astro) — hero, pain points, méthode, résultats, prix, section **Ressources** reliant les 10 articles du cluster, FAQ, about, local, CTA. Intent **transactionnel** (anti-cannibalisation avec le pillar blog informationnel).
- **4 visuels doodle** générés via OpenAI `gpt-image-1` (clé Gemini expirée) → `src/assets/services/mobile-{hero,problemes,methode,cta-final}.png`, style cohérent avec les visuels MVP.
- **Schema Service** ajouté (`serviceSchemas["developpement-application-mobile"]`) + breadcrumb + FAQPage.
- **Découvrabilité** : item « Application mobile » ajouté dans `navigation.ts` (colonne Web & apps) → méga-menu + fat footer sitewide.
- **CTA repointé** : les 2 CTA transactionnels du pillar blog `developper-application-mobile-suisse` pointent désormais vers le pilier service (le lien MVP contextuel de `freelance-ou-agence` préservé volontairement).
- Build OK (**195 pages**, +7), page dans le sitemap, dist généré.

**Prochain :** Phase 1 — topical maps **C1 (app custom/IA)** et **C3 (web + réf. local + GEO + GMB)**. Voir feuille de route `docs/restructuration-clusters.md`.

**Pièges :**
- Clé **GEMINI_API_KEY expirée** → la génération d'images est passée par OpenAI cette session. À renouveler côté Google pour réactiver le pipeline `/generate-images` natif.
- Visuels mobile = doodles OpenAI (corrects, captions lisibles) ; régénérables en Gemini plus tard si on veut l'aligner pixel-perfect sur les MVP.

**Commit :** d9031b5 feat(seo): pilier service application mobile + maillage cluster C2

---

## Etat session 2026-06-25

**Fait :**
- Diagnostic GSC 3 mois + indexation (URL Inspection API) + graphe de maillage interne → `docs/restructuration-clusters.md` (93 routes classées par cluster, verdict KEEP/IMPROVE/MERGE/ACTIVATE/KILL).
- Corrigé 2 faux positifs du diagnostic initial : pages géo/portfolio **pas orphelines** (liées via `navigation.ts`) ; doublons d'articles `geo-seo-ia`/`apparaitre-grok` = **301 déjà en place**, pas de la cannibalisation.
- **Phase 0 livrée** : fat footer (`Footer.astro`) avec liens profonds plain-HTML sitewide (3 piliers + 5 zones + services + articles) sur 188 pages. Build OK.
- Vérifié : canonical www **déjà actif** (308 `jonlabs.ch → www`), trailing-slash déjà géré → aucune action code nécessaire de ce côté.

**Prochain :** Phase 1 — lancer `/seo-topical-map` pour les 3 clusters (commencer par **C2 app mobile** : créer le pilier service manquant `/services/...application-mobile`, puis relier les 10 articles déjà produits). Voir feuille de route dans `docs/restructuration-clusters.md`.

**Pièges :**
- Décisions actées : GMB **gardé** (sous-pilier C3) ; pages géo **gardées + maillées** (principe 1 page = 1 intention, désambiguïser la home) ; KILL **au cas par cas** (liste annotée dans le plan maître, à valider page par page).
- Action manuelle en attente côté Jonathan : **Request Indexing** GSC sur les 3 piliers www (developpeur-web-freelance-geneve, services/developpeur-webflow, services/developpeur-wordpress).
- Re-checker `/seo-gsc` à J+3-10 pour confirmer indexation des piliers + fin du résiduel non-www.

**Commit :** ff2d641 feat(seo): fat footer + diagnostic restructuration clusters

---

## Carte du code
> Mise a jour : 2026-06-25

| Fichier | Role |
|---------|------|
| `docs/restructuration-clusters.md` | Plan maître du chantier : 3 clusters, verdict par page, liste KILL, feuille de route 5 phases (Phase 1 cochée sur les 3 clusters) |
| `docs/topical-map-c1-sur-mesure-automatisation.md` | **Topical map C1** : 2 silos (Build/Automate), 4 articles à créer, décisions C1 tranchées, blueprint maillage |
| `docs/topical-map-c3-web-referencement.md` | **Topical map C3** : 4 silos (web/local/GEO/GMB), cluster mature, plan consolidation/activation/CTR |
| `.seo-data/diagnostic-gsc-pages-cannibalisation.md` | Diagnostic data (GSC perf, indexation, cannibalisation) |
| `src/pages/services/developpement-application-mobile.astro` | **Pilier service C2 (mobile)** : page transactionnelle + section Ressources reliant les 10 articles du cluster |
| `src/components/Footer.astro` | Fat footer : liens profonds sitewide (piliers/zones/services) depuis `mainNav.columns` |
| `src/data/navigation.ts` | Source de vérité du maillage (méga-menu + footer) — piliers & zones y sont déclarés |
| `.seo-data/gsc-jonlabs-last_3_months.json` | Snapshot GSC brut (régénérable via `/seo-gsc`) |

### Decisions cles
- Canonical = **www** (déjà enforced par 308 infra Vercel) ; tout le code déclare www (Astro.site, SITE_URL, robots, sitemap).
- Maillage profond = **footer plain-HTML** (le méga-menu JS est sous-pondéré au crawl) ; ne pas compter sur la nav seule pour la découvrabilité.
- Le fat footer lit `mainNav.columns` — pour ajouter une page au maillage sitewide, l'ajouter dans `navigation.ts`.
