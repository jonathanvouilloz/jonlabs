# Feature — Refonte SEO / restructuration par clusters

> Chantier de fond : re-simplifier le site autour de **3 clusters** (app custom, app mobile, création web+référencement), garder ce qui ranke, virer l'invisible hors-périmètre.
> **Plan maître** : `docs/restructuration-clusters.md` (archi cible, verdict par page, liste KILL, feuille de route 5 phases).
> **Diagnostic data** : `.seo-data/diagnostic-gsc-pages-cannibalisation.md`.

## Etat session 2026-06-25 — Phase 0/2 : désambiguïsation home + maillage des pages géo

**Fait :**
- **Nouveau composant `src/components/GeoZonesStrip.astro`** : strip léger (chips brutalistes) liant les 5 pages ville + la landing geneve, alimenté par `villesFrontalieres` (DRY). Inséré en fin de `<main>` dans `index.astro` (après `<TechStack />`).
- **`/services.astro`** : bloc « Pages dédiées — zone frontalière française » dans `.local-section` — les 5 villes désormais **liées** vers `/developpement-web/{slug}` (les `city-tag` génériques restent en affichage). CTA landing conservé.
- **`/services/creation-site-web.astro`** (pilier C3a thin, qui ne linkait aucune géo) : bloc « Création de site web par ville » dans la section locale → 5 villes **+ la landing geneve** (conforme au blueprint de maillage). Style Tailwind brutaliste cohérent.
- **Désambiguïsation home = maillage léger uniquement** : title/H1 gardent « Genève » volontairement. La désoptimisation réelle est **reportée** jusqu'à l'indexation de la landing geneve.
- **Build OK (193 pages)** — aucune route ajoutée. Liens entrants vérifiés dans le HTML généré (home + /services + pilier C3a contiennent bien les 5 liens géo ; pilier + home contiennent la landing).

**Prochain :** activer les 3 piliers UNKNOWN (Request Indexing GSC côté Jonathan) ; quand la landing geneve est indexée → désoptimiser title/H1 de la home sur « développeur web {ville} ». Reste Phase 0 : mailler les 6 fiches portfolio orphelines. Phase 3 : étoffer le pilier thin `/services/creation-site-web`. Phase 4 : réécriture CTR GEO (`apparaitre-perplexity`).

**Pièges :**
- **Source de vérité unique des villes = `src/data/villes-frontalieres.ts`** (`villesFrontalieres`, slug+nom). Les 3 endroits de maillage géo l'importent — ne pas dupliquer la liste. Slugs exacts : `saint-julien-en-genevois`, `la-roche-sur-foron` (pas les formes courtes).
- **Décision assumée** : maillage géo léger sur la home (pas de désoptimisation title/H1) tant que la landing geneve est UNKNOWN to Google. Ne pas désoptimiser avant indexation, sinon perte de trafic « Genève » sans relais.
- Surveiller `/seo-gsc` J+30/60 sur le pilier SEO local C3b (pos 41 doit progresser après le 301).
- Action manuelle toujours en attente côté Jonathan : **Request Indexing** GSC sur les 3 piliers UNKNOWN.

**Commit :** 21a2d70 feat(seo): maillage des 5 pages géo + désambiguïsation légère home C3a

---

## Etat session 2026-06-25 — Phase 2 / C3d : organisation du pilier GMB

**Fait :**
- **Hub GMB complété → 10 satellites** : section descendante `## Tous les guides du cluster fiche Google` ajoutée dans `fiche-google-my-business-guide-complet-2026.md` (groupée par cycle de vie : Créer & optimiser / Avis & animation / Incident). Le hub ne linkait que 5 satellites contextuels — les 10 sont désormais couverts (liens contextuels conservés).
- **Section Ressources sur le pilier service** : `gestion-fiche-google.astro` expose maintenant les 10 satellites (const `clusterGroups` + `<section id="ressources">` mirrorée sur le pilier mobile C2), insérée entre la section `local` et le CTA. Le pilier ne linkait aucun satellite avant.
- **4 CTA satellites repointés vers le pilier** : `entrer-top-3-google-maps` (×2 : un pointait vers `/services/refonte-site-web` = bug net, un vers `/contact`), `choisir-categorie-google-business-profile` (`/contact`), `obtenir-plus-avis-google` (`/contact`) → tous vers `/services/gestion-fiche-google` avec utm_campaign aligné.
- **Build OK (193 pages)** — aucune route ajoutée (enrichissement de l'existant ; 193 = 195 − 2 articles SEO local supprimés en C3b). Topical map C3 ligne 6 passée en ✅.

**Prochain :** suite Phase 2 — **désambiguïser la home** (décision actée : maillage géo léger uniquement, garder « Genève » ; la vraie désoptimisation attend l'indexation de la landing `/developpeur-web-freelance-geneve`, encore UNKNOWN). Puis activation Phase 0 : mailler les 5 pages géo `/developpement-web/{ville}` (0 lien) + la landing geneve depuis `/services`.

**Pièges :**
- **Décision assumée** : tous les CTA satellites GMB convergent vers le pilier `/services/gestion-fiche-google` (qui contient le formulaire de contact) plutôt que `/contact` — choix de cohérence de silo, réversible.
- Surveiller `/seo-gsc` J+30/60 sur le pilier SEO local C3b (pos 41 doit progresser après le 301).
- Action manuelle toujours en attente côté Jonathan : **Request Indexing** GSC sur les 3 piliers UNKNOWN (developpeur-web-freelance-geneve, services/developpeur-webflow, services/developpeur-wordpress).

**Commit :** 3b88c7e feat(seo): organisation pilier GMB C3d — hub→10 satellites + ressources pilier + fix CTA

---

## Etat session 2026-06-25 — Phase 2 / C3b : consolidation SEO local

**Fait :**
- **Dé-cannibalisation SEO local exécutée** : `referencement-local-geneve` + `tarif-package-seo-local-suisse` consolidés dans le pilier `/services/referencement-local`.
- **301 (×4)** ajoutés dans `vercel.json` (les 2 articles, variantes avec/sans trailing-slash) → pilier.
- **Absorption sélective** dans `referencement-local.astro` (sans toucher aux 3 pricing cards) : nouveau bloc **« Les 7 leviers du référencement local »** (grille + exemple **JSON-LD LocalBusiness** = preuve E-E-A-T + encart « ce que les concurrents oublient » → pont vers `geo-seo-ia`) ; bloc **transparence prix** (justification du prix, DIY vs pro/ROI, agence vs freelance, encart **« 5 questions avant de signer »**) ; **+4 FAQ** non redondantes (Maps invisible, seuil avis 30-50, minimum mensuel viable, IA/GEO).
- **Maillage repointé** : ~19 liens internes des satellites GMB + `geo-seo-ia` + `gestion-fiche-google.astro` + `referencement-local-lausanne` → pilier (ou `/tarifs` pour les ancres prix afin d'éviter les doublons de lien). Ancres caduques reformulées.
- **2 `.md` supprimés** via `git rm` (historique préservé ; le 301 Vercel gouverne l'URL). Briefs `.briefs/archived/` laissés tels quels (non indexés).

**Prochain :** suite de Phase 2 — **désambiguïser la home** des requêtes locales-ville + **pilier GMB** (élire la page d'autorité `fiche-google-my-business-guide-complet-2026` + organiser les 11 satellites). Alternative : création C1 Build `/seo-brief logiciel-sur-mesure-vs-saas`.

**Pièges :**
- **Intent mismatch assumé** : on a 301 deux pages informationnelles/commerciales vers une page transactionnelle — risque SEO connu, mitigé par l'absorption sélective (les mots-clés des articles vivent désormais sur le pilier). À surveiller via `/seo-gsc` à J+30/60 (la pos 41 du pilier doit progresser, pas régresser).
- Test réel des 301 = post-déploiement Vercel (`curl -I` sur l'URL preview).

**Commit :** 6dab520 feat(seo): consolidation SEO local C3b — 301 + merge pilier referencement-local

---

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

**Commit :** 5aa4998 docs(seo): topical maps C1 + C3 — Phase 1 clusters bouclée

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
| `docs/restructuration-clusters.md` | Plan maître du chantier : 3 clusters, verdict par page, liste KILL, feuille de route 5 phases (Phase 1 ✅, Phase 2 C3b ✅) |
| `docs/topical-map-c1-sur-mesure-automatisation.md` | **Topical map C1** : 2 silos (Build/Automate), 4 articles à créer, décisions C1 tranchées, blueprint maillage |
| `docs/topical-map-c3-web-referencement.md` | **Topical map C3** : 4 silos (web/local/GEO/GMB), cluster mature, plan consolidation/activation/CTR |
| `.seo-data/diagnostic-gsc-pages-cannibalisation.md` | Diagnostic data (GSC perf, indexation, cannibalisation) |
| `src/pages/services/referencement-local.astro` | **Pilier service C3b (SEO local)** : consolidé Phase 2 — bloc 7 leviers (+JSON-LD), transparence prix (5 questions), FAQ enrichie. Cible des 301 SEO local |
| `src/content/blog/fiche-google-my-business-guide-complet-2026.md` | **Hub blog C3d (GMB)** : section descendante `## Tous les guides du cluster` → 10 satellites groupés par cycle de vie + CTA vers le pilier service |
| `src/pages/services/gestion-fiche-google.astro` | **Pilier service C3d (GMB)** : page transactionnelle + section Ressources (const `clusterGroups`) reliant les 10 satellites GMB |
| `src/pages/services/developpement-application-mobile.astro` | **Pilier service C2 (mobile)** : page transactionnelle + section Ressources reliant les 10 articles du cluster |
| `src/pages/services/creation-site-web.astro` | **Pilier service C3a (création web)** : ajout du bloc « Création de site web par ville » (5 pages géo + landing geneve) dans la section locale |
| `src/components/GeoZonesStrip.astro` | **Strip géo home** : maillage léger (5 villes + landing) en fin de home pour désambiguïser les requêtes locales-ville. Lit `villes-frontalieres.ts` |
| `src/pages/index.astro` | Home : insertion de `<GeoZonesStrip />` en fin de `<main>` (désambiguïsation). Title/H1 « Genève » conservés (désoptimisation reportée) |
| `src/pages/services.astro` | Page /services : bloc villes liées (5 pages géo) ajouté dans `.local-section` |
| `src/data/villes-frontalieres.ts` | **Source de vérité unique des 5 villes frontalières** (`villesFrontalieres`, slug+nom) : alimente `/developpement-web/[ville]`, le strip home, /services et le pilier C3a |
| `vercel.json` | Redirects 301 du chantier (slug renames + consolidations blog→service). Pattern `source`/`destination`/`permanent` ±trailing-slash |
| `src/components/Footer.astro` | Fat footer : liens profonds sitewide (piliers/zones/services) depuis `mainNav.columns` |
| `src/data/navigation.ts` | Source de vérité du maillage (méga-menu + footer) — piliers & zones y sont déclarés |
| `.seo-data/gsc-jonlabs-last_3_months.json` | Snapshot GSC brut (régénérable via `/seo-gsc`) |

### Decisions cles
- Canonical = **www** (déjà enforced par 308 infra Vercel) ; tout le code déclare www (Astro.site, SITE_URL, robots, sitemap).
- Maillage profond = **footer plain-HTML** (le méga-menu JS est sous-pondéré au crawl) ; ne pas compter sur la nav seule pour la découvrabilité.
- Le fat footer lit `mainNav.columns` — pour ajouter une page au maillage sitewide, l'ajouter dans `navigation.ts`.
- **Consolidation = 301 dans `vercel.json` + suppression du `.md`** (pas `draft:true` : le filtre sitemap n'exclut pas les drafts). Repointer le maillage interne vers la cible (ou `/tarifs` pour les ancres prix, pour éviter les doublons de lien).
- **Maillage géo = importer `villesFrontalieres` depuis `villes-frontalieres.ts`** partout (strip home, /services, pilier C3a). Une seule liste de villes, jamais dupliquée en dur.
- **Home : désoptimisation title/H1 reportée** jusqu'à l'indexation de la landing geneve — d'ici là, seul le maillage léger désambiguïse (vote vers les pages dédiées), « Genève » reste sur la home.
