# Feature — Refonte blueprint (design & typographie)

> Sortir du look brutaliste (bordures noires 2px + ombres offset, Plus Jakarta Sans) jugé « banal » vers un style **blueprint** : filets très fins qui cadrent les sections, aération, nouveau font pairing éditorial. Exploration en pages lab AVANT toute migration du vrai site.
> **Réfs visuelles** : pengon.dev, sakib.design. **Statut** : 🔄 EN COURS — migration lancée : **homepage + chrome migrés en blueprint**, reste les autres pages.

## Etat session 2026-07-07 — Retouches design post-migration (2 lots) ✅

**Fait :**
- **Lot socials & héros :** YouTube ajouté aux réseaux (hero, contact, CV hero/footer, `sameAs` Schema.org) ; home = punchline « L'idée que tu repoussais… » retirée + citation « Pourquoi Jon Labs » remplacée (résultats mesurables) ; **fix taille des H2 de section** (échelle de titres par défaut `:not([class])` dans `blueprint.css` — les `<h2>` nus collapsaient à 16px sous Preflight Tailwind) ; **retrait de l'eyebrow au-dessus du H1 sur 21 pages indexées** (home comprise ; eyebrows de section 01—/02— conservés).
- **Lot logo / article / tarifs :** nouveau logo (mark + wordmark) via composant `Logo.astro` (navbar desktop + drawer + footer, fond clair partout donc logo sombre OK) ; eyebrows de section 12→11px ; **fix sommaire sticky article** (double cause : `.co-root{overflow:hidden}` tuait `position:sticky` → `overflow:clip` scopé `:has(.ar-wrap)` ; ET colonne `.ar-side` trop courte → `align-self:stretch`) ; en-tête article = badge de type retiré + date/temps de lecture après le H1 + tags gardés ; bloc **« L'essentiel en bref » → callout Inter visuel** via plugin `remark-tldr.mjs` (3 formes gérées, témoignages laissés en citation serif) ; tarifs = label « Article blog » retiré des cartes « Aller plus loin ».
- **Vérifié :** build vert **221 pages**, sticky prouvé live (épinglé + scroll-spy), plugin précis (test `apparaitre-gemini` : TLDR `## H2` → callout Inter, 2 témoignages blockquote restent serif), 0 erreur console.

**Prochain :** Migration blueprint toujours bouclée. Restes optionnels : cleanup orphelins (`Halo`/`CTASection`/`FAQ`/`IconChip`/`nav/*`/`MarkdownPost`), validation mobile device, **migrer le calculateur brutaliste** encore présent dans `/blog/cout-site-web-dormant-calculateur`, et le CSS mort `.nav-logo`. Sinon `/epic-recap`.

**Pièges :**
- **`position:sticky` dans `.co-root`** : nécessite `overflow:clip` (pas `hidden`) sur le `.co-root` de l'article ET une colonne sticky étirée (`.ar-side { align-self:stretch }`) — **les deux**, sinon ça ne colle pas. Fix scopé `:has(.ar-wrap)` → n'affecte que blog/guides.
- **TLDR = plugin `remark-tldr.mjs`** (enregistré dans `astro.config.mjs`) : détecte le bloc « L'essentiel en bref » (blockquote / `## H2` / paragraphe gras) et le transforme en `aside.co-tldr`. **NE PAS restyler `.co-prose blockquote` globalement** (sert aux témoignages serif). Nouveaux articles : n'importe laquelle des 3 formes marche.
- Bruit esbuild au boot dev (« Failed to scan… `<script>` ») = mot `<script>` littéral dans un commentaire de frontmatter (ContactForm/checklist-15), inoffensif, pages en 200.

**Commit :** [04910a8] feat(design): logo, callout TLDR, sommaire sticky, YouTube socials + épuration héros/en-tête

---

## Etat session 2026-07-06 (soir) — CV migré ✅ → toutes les pages indexées en blueprint

**Fait :**
- **CV blueprint (`9fa5643`)** : `cv.astro` (page indexée) en `.co-root` + **9 composants `cv/*`** restylés homogènes via 1 agent dédié (cohérence document). Formations→`.co-spec`, timeline→filets+`.co-index`, projets→`.co-frame--reveal`, skills→grille filet (système couleur-par-catégorie **supprimé**, règle accent unique), langues/intérêts→`.co-frame`. `IconChip` retiré. Accent teal, coins nets.
- **HARD-PRESERVE tenus** : Schema ProfilePage (`getProfilePageSchema`/`personData`), tous bindings `personData`, JS **pixel-explosion** CVFooter + GSAP (`.cv-hero-animate`/`.cv-section`/`.timeline-*`/`.skill-badge`), `Modal` (non touché), lien export `/cv-pdf`, socials.
- **Vérifié** : build vert 221 pages, guardrails (0 brutaliste + 0 emoji sur 10 fichiers), hard-preserve confirmé.
- **Bilan migration** : **45/51 pages en `.co-root`**. Les 6 restantes = **toutes noindex hors périmètre** (`styleguide{,-lab}` réf brutaliste ; `cv-pdf`+`devis-client/[slug]`+2 `outils/*-pdf` docs standalone). → **toute page publique indexée est blueprint**.

**Prochain :** Epic de fait **bouclé** → **`/epic-recap`**. Sinon restes optionnels : cleanup orphelins (`Halo`/`CTASection`/`FAQ`/`IconChip`), 3 décisions ouvertes (sticky-score `checklist-15` neutralisé par `overflow:hidden`, couleurs sévérité teal ?, pixel-explosion CV possiblement clippé par `.co-root{overflow:hidden}`), validation mobile device.

**Pièges :**
- **`.co-root{overflow:hidden}` peut clipper le pixel-explosion du CV** (pixels dépassant la colonne 1180) — à valider device. Même famille que le piège sticky-score.
- `cv-pdf.astro` = doc print standalone **volontairement laissé brutaliste** (pas de chrome site).
- Pièges antérieurs inchangés.

**Commit :** [9fa5643] feat(design): CV blueprint — cv.astro + 9 composants cv/*

---

## Etat session 2026-07-06 — Phases services + géo + divers + fix pilules-eyebrow ✅ (services/géo/divers)

**Fait :** (3 vagues de sous-agents parallèles file-disjoints + vérif centralisée coordinateur, protocole `blueprint.css`/`Layout`/chrome/`global.css` réservés)
- **Phase services (`7ed8ada`)** : 13 sous-pages `/services/*` migrées blueprint (déjà produites en working tree la session d'avant — vérifiées + commitées). 0 résidu brutaliste, build vert.
- **Phase géo (`3282bf2`)** : 5 pages via 5 sous-agents — `consultant-ia/{index,[ville]}`, `developpement-web/[ville]`, `developpeur-web-freelance-geneve`, `metiers/[metier]`. `Halo` retiré (illustrations réencadrées `.co-frame`), `IconChip`→Remix mono inline, FAQ→`<details>` natif. Namespaces `.cii/.civ/.dwv/.dfg/.met-*`. HARD-PRESERVE : Schema (WebPage/Breadcrumb/FAQ/ServiceItem), `getStaticPaths` + data villes/métiers, preuve `proof-lecureux` (0 chiffre en dur), villes voisines.
- **Phase divers (`dd3be04`)** : 7 pages via 7 sous-agents — `outils/index`, `checklist-15-signes-site-dort`, `checklist-commerce-google`, `reddit-dashboard`, `merci-checklist(-15-signes)`, `portfolio/[slug]`. `CTASection`→`.co-cta` inline, `FAQ`→`<details>`, corps étude de cas→`.co-prose`. HARD-PRESERVE : **2 formulaires Web3Forms intacts** (access_key `3f64c7a1…` + tous `name=` + redirects merci), `softwareSchema`, `caseStudySchema`, `getStaticPaths`+`getCollection('portfolio')`+`<Content>`, `noindex` des merci.
- **Fix pilules-eyebrow (`db619ce`)** : 9 héros nettoyés — pilule `.co-badge` en kicker au-dessus du H1 retirée (« Outil gratuit »/reddit sur 3 outils, « Disponible »+lieu/tag sur 4 géo+hermes+metiers). **Règle gravée** : mémoire `feedback_pas_pilule_eyebrow_titre` + note `blueprint.css` près de `.co-badge` + Décisions clés.
- **Vérifié** : build vert **221 pages** à chaque phase, guardrails auto (co-root présent, 0 brutaliste, 0 Halo/IconChip hors commentaires, Web3Forms intacts, noindex conservés), 0 console.log.

**Prochain :** CV migré depuis (voir bloc soir). Reste optionnel : (1) **cleanup coordinateur** — `Halo`, `CTASection`, `FAQ` désormais **orphelins** (0 import) → suppressibles ; (2) **validation mobile <720/<900px sur device** (non capturable par l'outil) ; (3) décisions ouvertes : sticky-score de `checklist-15` neutralisé par `.co-root{overflow:hidden}` (refixer ?) + couleurs sévérité vert/ambre/rouge sur ce diagnostic (unifier teal ?). Sinon → **`/epic-recap`** (epic de fait terminé).

**Pièges :**
- **`.co-root { overflow:hidden }` tue `position:sticky`** dans le corps de page → tout comportement sticky d'une page migrée est neutralisé (incident score `checklist-15`). Prévoir une exception scopée si sticky requis.
- Cas `.co-badge` **gardés délibérément** (pas des pilules-eyebrow) : `about` figcaption photo, `AboutHome` badges compétences, `portfolio/[slug]` ligne méta (catégorie·secteur·date). Ne pas les confondre avec la règle anti-pilule.
- **Hors scope migration** (standalone, pas de chrome) : `outils/*-pdf` (2 layouts print), `devis-client/[slug]` (doc devis client) · CV repoussé · `styleguide` brutaliste (source de vérité noindex) intacts.
- Pièges antérieurs inchangés (artefact motion screenshot, scoping `.co-*`, mobile non capturable).

**Commit :** [db619ce] fix(design): retire les pilules-eyebrow au-dessus des titres + grave la règle

---

## Etat session 2026-07-05 (nuit 2) — Phase blog complète (4 pages + 5 composants + 2 primitives) ✅

**Fait :** (coordinateur direct — pages non file-disjointes car couche de composants partagée → parallélisation écartée au profit d'un poste unique séquentiel)
- **2 primitives promues dans `blueprint.css`** : `.co-prose` (**A14** — corps rédactionnel : h2/h3/p/ul-puces-teal/ol-compteur/blockquote Instrument Serif/code/pre/img/hr/table sobres, **liens inline soulignés teal** en (0,1,1) qui battent le reset `.co-root :where(a)`) + `.ar-*` (**A15** — shell article/guide : colonne lecture + sidebar sticky 300px, barres retour/partage, méta, titre, tags, TOC mobile). Remplacent le `.prose` global brutaliste **dupliqué** dans les 2 templates d'article.
- **5 composants blog migrés** : `CategoryBadge`→`.co-badge` (**drop `getCategoryColor`** — 1 seule teinte), `VideoEmbed`→cadre filet `.co-frame` (iframe fonctionnel gardé), `AuthorBio`→carte blueprint (photo réelle + CTA + socials, teal), `RelatedPosts`→grille blueprint (wrappe PostCard), `ReadingProgress`→sidebar blueprint (barre verticale teal + TOC accordéon ; **JS `.prose`→`.co-prose`**, `--blue`/`--violet`→`--accent`, classes injectées dé-Tailwindisées pour les couleurs).
- **4 pages migrées** : `blog/[slug]` (`.co-root`, meta/CategoryBadge/tags-chips, `.co-prose`, sidebar ReadingProgress + TOC mobile, RelatedPosts+AuthorBio dans le `.co-root`), `guides/[slug]` (même shell, badge `Guide` `.co-badge--solid`, AuthorBio), `blog/tag/[tag]` (`.co-root`, back+titre serif+count, grille PostCard), `guides/index` (hero serif, grille piliers `.co-frame`, à lire aussi, **CTA `.co-cta`**, **drop IconChip**).
- **Hack retiré** : `PostCard.astro` ne redéclare **plus** les tokens localement (les 2 pages consommatrices `/blog` + `/blog/tag/*` sont désormais `.co-root` → tokens hérités). Vérifié live : `--accent` = `#00A87D` hérité.
- **Hard-preserve tenus** : Schema.org (BlogPosting/WebPage/Breadcrumb/FAQ), `getCollection` blog+pages, tous liens SEO (deep-links, tags, geo), câblage share/clipboard, `isPublished` gating (pubDate).
- **Vérifié** : build vert **218 pages**, `astro check` **0 nouvelle erreur** (37 pré-existantes inchangées, dont 2 `isPublished(pages)` héritées). Browser (poste unique, :4324) : `blog/[slug]` audit DOM complet (co-prose 87 enfants, 9 H2→9 TOC, badge teal, related 3, bio, **scroll-spy OK** : scrollY 1000→10% + TOC actif), `guides/index` (piliers 0 attendu, à lire 3, CTA sombre #0b0d10, 0 IconChip), `blog/tag/seo` (13 cartes, tokens hérités). **0 erreur console** sur les 3 pages live. `guides/[slug]` = **404 live attendu** (guide pillar pubDate 2026-08-12 future) → validé par build-vert + parité de template avec `blog/[slug]`.
- **`blueprint.css` touché UNIQUEMENT par le coordinateur** (ajout `.co-prose`/`.ar-*`). `Layout`/`Header`/`Footer`/`global.css` intacts. `global.css` **gardé** sur les pages article (comme la home) : Preflight + utilitaires Tailwind du TOC injecté + vars legacy.

**Prochain :** **Phase services** (13 sous-pages `/services/*`, réf `styleguide-services`, très patternable — vraiment file-disjointes → sous-agents parallèles possibles) OU **Phase géo/programmatique** (`developpement-web/[ville]`, `consultant-ia/{index,[ville]}`, `metiers/[metier]`, `developpeur-web-freelance-geneve` — partagent Halo/IconChip). Plan des phases : `C:\Users\jojo-\.claude\plans\ok-continue-sur-les-cheeky-pinwheel.md` (section « Phases suivantes »).

**Pièges :**
- **`.co-prose`/`.ar-*` = coordinateur-owned** (dans `blueprint.css`). Toute page article/guide future réutilise ces classes — ne pas re-dupliquer un `.prose` local.
- **`ReadingProgress` JS cible `.co-prose`** : toute page qui monte ce composant DOIT wrapper son corps dans un élément `.co-prose` (sinon TOC/progress vides — `if(!articleContent)return`).
- **`guides/[slug]` non visible en prod** tant que le 1er pilier n'a pas une pubDate passée (12.08.2026). Le tester = avancer une pubDate en dev, ou se fier à la parité `blog/[slug]`.
- Restent des **fallbacks locaux à consolider** (non urgent, cf. bloc précédent) : `.co-link`, `.co-highlight`, `.co-field/-input`, `.co-table`/`.co-tier`, `.co-callout`.
- Pièges antérieurs inchangés (artefact motion screenshot, scoping `.co-*`, scroll physique, mobile <720/<900 non capturable).

**Commit :** (à venir) feat(design): Phase blog blueprint — blog/[slug], tag, guides (index+[slug]) + 5 composants + primitives .co-prose/.ar-*

---

## Etat session 2026-07-05 (nuit) — services.astro + Vague 1 (7 pages principales, sous-agents parallèles) ✅

**Fait :**
- **`services.astro` migré** (couture n°1 résolue) : `<main class="co-root">`, hero SEO, constellation scenarios (lignes SVG calculées au load/resize), sections offre (**7 deep-links `/services/*` préservés**), zone locale (**5 geo-links**), ressources, CTA `.co-cta`, **modale conversation** (rejoue `scenarios.ts`). Header blueprint solide (fin du hero sombre transparent). Vérifié browser : filtres/modale/console OK.
- **Vague 1 — 7 pages principales migrées via 7 sous-agents `general-purpose` en PARALLÈLE** (1 par page + composants exclusifs, fichiers disjoints → zéro conflit) : `about`, `portfolio`, `contact`, `tarifs`, `blog/index`, `hermes`, `mentions-legales`. Coordinateur = vérif centralisée séquentielle (poste unique dev+browser).
- **Hard-preserve tenus** : câblage **Web3Forms** de ContactForm intact (access_key, tous les `name=`, honeypot) · **prix tarifs exacts** (1'490/2'490/sur devis) · `getCollection` blog/portfolio · preuve `proof-lecureux.ts` (zéro chiffre en dur) · Schema.org + liens SEO. **Halo supprimé** (about), FAQ→`<details>` blueprint, CTASection→`.co-cta`, IconChip→Remix mono.
- **Vérifié** : build vert **218 pages** ×3, `astro check` 0 erreur sur les 17 fichiers touchés (37 erreurs restantes = pré-existantes, hors périmètre), **0 erreur console** sur chaque page, interactions testées (filtres portfolio 9→6, recherche/filtre/pagination blog 9→2 / 1-7-9 / 5 pages, FAQ toggle, modale succès contact, prix tarifs). Motion via état DOM (révèle au scroll ; blank-au-load = artefact automation systémique, cf. home).
- **`blueprint.css`/`Layout`/`global.css`/`Header`/`Footer` JAMAIS touchés** (réservés coordinateur).

**Prochain :** Attaquer la **Phase blog complète** (`blog/[slug]`, `blog/tag/[tag]`, `guides/index`, `guides/[slug]` — réutilisent les composants blog déjà migrés) OU la **Phase services** (13 sous-pages `/services/*`, réf `styleguide-services`, très patternable). Même protocole : sous-agents parallèles file-disjoints + vérif centralisée. Plan complet des phases : `C:\Users\jojo-\.claude\plans\ok-continue-sur-les-cheeky-pinwheel.md`.

**Pièges :**
- **Primitives candidates en fallback local** (à consolider dans `blueprint.css` en passe dédiée, pas urgent) : `.co-link` (lien inline souligné accent — demandé par portfolio/mentions), `.co-highlight` (surlignage chiffre — about), `.co-field/-input/...` (champs form — contact, dupliqué avec lab), `.co-table`/`.co-tier` (tarifs), `.co-callout` (hermes), `.co-badge--onimg` (blog).
- **`PostCard.astro` redéclare les tokens blueprint localement** sur `.bl-card` pour rendre correctement sur `blog/tag/[tag]` (page pas encore wrappée `.co-root`) — à retirer quand la page tag sera migrée. Signature props `{ post }` inchangée (tag non cassé).
- Pièges antérieurs inchangés (artefact motion automation, scoping `.co-*`, scroll physique).

**Commit :** [6a09a34] feat(design): Vague 1 blueprint — 7 pages principales · [aa3c17d] feat(design): services.astro blueprint

---

## Etat session 2026-07-05 (soir) — Migration homepage blueprint (chrome global + corps) ✅

**Fait :** (direction validée par Jonathan : chrome global · hero avec photo · parité complète + preuve)
- **Lot A — Fondation** (`fa0889d`) : CSS blueprint promu du lab vers `src/styles/blueprint.css` (global via Layout). Tokens + font généralisés `.co-root, .co-chrome` (le chrome marche hors `.co-root`). 2 pièges de coexistence neutralisés : règle `html,body{background}` retirée · `--accent` NON promu en `:root` (garde le wash legacy brutaliste intact). Fonts Inter Tight + Instrument Serif ajoutées à `Layout.astro`. `BlueprintKit.astro` vidé → no-op (gardé pour les imports lab). **Lab + brutaliste vérifiés intacts.**
- **Lot B — Chrome global** (`16c8d31`) : `Header.astro` + `Footer.astro` réécrits blueprint (portés du Lot 1 `styleguide-nav`), self-scopés `.co-chrome` → rendus sur les **35 pages**. Header sticky (sur `.co-chrome`, pas `.nav-wrap`), méga-menu + drawer + spotlight fonctionnels. Footer = fat footer Lot 1 **fusionné** avec tout le contenu SEO historique (coordonnées, 5 colonnes de liens profonds, socials, mentions). Props `variant`/`scrollTransition` conservées (no-op) → aucun des 35 call sites ne casse.
- **Lot C — Corps homepage** (`bfb7fa3`) : `index.astro` en `<main class="co-root">`, 8 sections réécrites blueprint (Hero 2-col **photo + socials**, ClientsBanner marquee vrais clients, ServicesHome grille millimétrée, AboutHome citation cadrée + badges, PortfolioHighlight **getCollection inchangé**, TechStack **bande marquee sombre** = rupture de rythme, GeoZonesStrip chips villes) + **nouvelle section `ProofLecureux.astro`** (témoignage réel + tuiles GSC #1/19k/367). Schema.org + maillage SEO préservés.
- **Vérifié** : build vert **218 pages** ×3, **0 erreur console** (load + interaction), motion confirmé via **état DOM** (opacity 1 + `data-animated`, jamais screenshot), audit DOM data réelle (tuiles #1/19k/367, 5 chips slugs OK, 3 cartes portfolio, 3 services, 4 badges). `/` intégralement blueprint (chrome + corps).

**Prochain :** **Migrer `services.astro` en priorité** (couture n°1 : header blueprint solide sur son hero sombre transparent). Puis les autres pages une par une (about, portfolio, contact, tarifs, blog…). Pattern établi : wrapper `<main class="co-root">`, sections en `.co-*` + `<style>` scopé `.xx-*`, garder la data/schema. **Décision ouverte** : garder ou non un CTA sombre `.co-cta` dédié sur la home (le footer porte déjà « Travaillons ensemble ? »).

**Pièges :**
- **Screenshots navigateur = artefact de timing** : les `data-animate` apparaissent « fantômes » (opacity 0 mid-reveal) juste après nav/scroll. TOUJOURS vérifier via JS (`getComputedStyle().opacity` + `data-animated`), jamais conclure d'un screenshot vide.
- **`html,body` scroll** : `window.scrollTo`/`scrollIntoView` via l'outil JS restaient à scrollY 0 (bloqué par l'outil) ; scroller via l'action `computer scroll` physique.
- **Règle chrome** : jamais de `.co-*` sans ancêtre `.co-root` OU `.co-chrome` (sinon `--accent` hérite le wash legacy → accent quasi-transparent). Sticky = sur `.co-chrome` (bloc conteneur haut), pas sur un enfant court.
- **`global.css` gardé sur la home** : nécessaire pour que Preflight reset les marges UA des `<blockquote>` (About/Proof), non couvertes par le reset blueprint scopé.
- **Couture assumée** : 34 pages ont le chrome blueprint sur corps brutaliste jusqu'à leur migration. Mobile <720/<900px **non capturable** via l'outil → Jonathan valide sur device.

**Commit :** [bfb7fa3] feat(design): Lot C homepage blueprint (sections + preuve Lécureux)

---

## Etat session 2026-07-05 (aprem) — Lot motion compo + preuve Lécureux réelle + template proof-<client>

**Fait :**
- **Lot motion (compo)** : scénographie `data-animate*` sur `styleguide-compo` — hero en cascade (eyebrow→h1→lead→boutons, mirroir `Hero.astro`), trust wrapper (**marquee ambiant préservé**), 3 cartes services en **stagger** (`data-animate-stagger`/`-item`), reveals preuve (fade-up + boîte fade-left)/CTA (`scale`)/footer. **Attributs seuls, zéro JS/CSS** (moteur Motion One déjà chargé via Layout, anti-flash déjà dans BlueprintKit).
- **Réconciliation mock preuve** : le bloc « invisibles → #1 » + « +40h » (violation honnêteté GSC) remplacé par le **vrai témoignage Lécureux** (3 paragraphes, intégré tel quel) + attribution honnête + **3 vraies tuiles GSC** (#1 / 19k / 367) + note GSC. Plus aucun chiffre inventé.
- **Template preuve** : nouveau `src/data/proof.types.ts` (interfaces partagées `ClientProof`/`ProofStat`/`ClientTestimonial` + convention documentée « 1 client = 1 `proof-<slug>.ts` » + squelette copiable, fichier autonome). `proof-lecureux.ts` conforme via `: ClientProof` (champ manquant = erreur `astro check`) ; **nouveau champ `testimonial` nullable** → compo gère le null (garde `{testimonial && …}`).
- **Vérifié** : motion confirmé au load (hero `opacity:1`+`data-animated` à `scrollY=0`) et au scroll (cartes/CTA/preuve), 0 erreur console, `astro check` 0 erreur sur fichiers touchés, build vert **218 pages**.

**Prochain :** Reste du lot — **réconciliation "hub"** (dernier item) puis **cadrer la migration** du système blueprint vers le vrai site (homepage d'abord). Décider aussi si on **unifie le pattern `proof-<client>.ts`** vers les autres repos sites (barberMedia = composant `SocialProof`, physiopommier = pages avis) — data à fournir par Jonathan, repo par repo, hors branche jonlabs.

**Pièges :** `proof.types.ts` = autonome (aucune dépendance) → se copie tel quel dans un futur projet. `testimonial` **nullable** : tout consommateur DOIT garder (`{testimonial && …}`) sinon `astro check` casse. Le pattern data-file preuve n'existe QUE dans jonlabs. **Screenshots navigateur peuvent montrer les `data-animate` « fantômes » = artefact de timing de capture, PAS un bug** (vérifier l'état DOM via JS : `getComputedStyle().opacity` + `data-animated`). Pièges antérieurs inchangés.

**Commit :** [e4e482d] feat(design): Lot motion compo + preuve Lécureux réelle + template proof-<client>.ts

---

## Etat session 2026-07-05 — Fix pièges margin + Lot 5 décoratifs ✅ + règle motion ease-out

**Fait :**
- **Fix des 5 vrais bugs du piège margin** (`fdcc4de`) : reset `.co-root h/p{margin:0}` (0,1,1) écrasait 5 règles 1-classe → sélecteurs repréfixés `.co-root` (0,2,0). Rétablit notamment `.po-card-result{margin-top:auto}` (push-to-bottom carte portfolio). Audit : les 4 autres règles gravées (emoji, couleur/catégorie, bordure partielle arrondi, ink-sur-ink) déjà propres.
- **Lot 5 décoratifs complet** (`694dbfa`) : **13 primitives** ajoutées/consolidées dans `BlueprintKit` — `.co-badge`(+`--solid`), `.co-frame`(+`--reveal`, 4 crosshairs **sans markup** via 2 pseudos × 4 backgrounds), `.co-grid-cells`, `.co-spec`, `.co-list`(+`--check`), extraction `.co-glow`/`.co-grain` (rendu `.co-cta` inchangé), `.co-crop` (repères L), `.co-dim` (cotes), `.co-anno`, `.co-index`, `.co-hatch`, `.co-guide-dashed`+token `--dash`, `.co-sec--boxed`.
- **6 pages refactorées** : badge dot-pill **4× → 1** `.co-badge` (dérive `--accent-bright`→`--accent` corrigée) · puces 4 styles → `.co-list` · specs → `.co-spec` · grille millimétrée → `.co-grid-cells` · ~30 `<span co-x>` → `.co-frame` · CTA sombre compo hand-rolled → `.co-cta` (bug **ink-sur-ink** supprimé). **Vitrine `06 · Décoratifs`** ajoutée à `/styleguide-components` (catalogue vivant).
- **FAQ smooth** : animation native `::details-content` (ease-out, zéro-JS, `interpolate-size:allow-keywords` sur `.co-root`), dégrade en instantané si non supporté.
- **Règle motion gravée** : toute transition/anim en **ease-out**, jamais ease-in/ease-in-out (kit + Décisions clés + mémoire `feedback_animations_ease_out`). Les 7 `ease-in-out` du repo sont tous des boucles ambiantes du vrai site — laissés OK.
- Vérifié en dev à chaque étape (9 builds verts), **218 pages**, warning `bg-[var(--yellow/violet)]` pré-existant inchangé.

**Prochain :** **Lot motion + réconciliation mocks + hub** — animer la scénographie des pages lab (système `data-animate`) **et** remplacer le bloc preuve mock de `styleguide-compo` (fausse citation Lécureux + `+40h`, l.140-167) par la vraie data / une décision de voix. Puis **cadrer la migration** vers le vrai site (homepage d'abord).

**Pièges :** bloc preuve mock compo **délibérément laissé** (hors scope Lot 5) ; `.co-frame` hérite `--line-2` → **jamais sur fond ink** (les CTA sombres gardent leurs `<span class="co-x">` blancs) ; `.po-stats` laissé en page-specific (risque de double bordure avec `.co-grid-cells`). Pièges antérieurs inchangés (voir blocs ci-dessous).

**Commit :** [694dbfa] feat(design): Lot 5 décoratifs — 13 primitives blueprint + vitrine, FAQ smooth, règle motion ease-out

---

## Etat session 2026-07-04 (nuit) — Primitive CTA `.co-cta` + fond black/teal noisy ✅

**Fait :**
- **Primitive `.co-cta` extraite dans `BlueprintKit`** (design system) : section sombre `#0b0d10` + **double glow teal flouté** (`::before` radial-gradients + `filter:blur(70px)`, modèle `ServicesCTA.astro`) + **grain** (`::after` `feTurbulence` en data URI, modèle `CVInterests.astro`, id `cocta-n`). Layout `.co-cta-inner` en **flex column + gap** (centrage `align-items:center`, espacement `gap`). Sous-classes `.co-cta-eyebrow/-title/-lead/-btns/-btn/-btn--ghost/-trust`. Boutons clairs sur sombre.
- **Bug de spécificité corrigé** : le reset `.co-root h1..h4, p, figure { margin:0 }` (spéc. 0,1,1) **écrasait** les règles `.po-cta-lead { margin:auto }` / `margin-top` (0,1,0) → lead décalé à gauche + aération du cas vedette neutralisée. Fix = flex+gap (ne dépend d'aucune margin). Le lead est maintenant **centré**, le CTA aéré (padding 72→104px).
- **Portfolio + Services** basculés sur la primitive (markup `.co-cta`, CSS `.po-cta*`/`.svc-cta*` supprimés). Les 2 CTA jumeaux convergent = une seule source. Rangée trust services conservée via `.co-cta-trust`.
- **Cas vedette** : `.po-feature-body` passé en flex+gap → l'aération eyebrow/titre/sous-titre/fiche technique s'applique vraiment.
- Vérifié en dev (glow+grain visibles, lead recentré, aération OK sur les 2 pages, **0 erreur console**), build OK **218 pages**. Warning CSS `bg-[var(--yellow/violet)]` **pré-existant** (autre fichier, sans rapport).

**Prochain :** Lot 5 — décoratifs, puis Lot motion + réconciliation mocks + hub, puis migration vers le vrai site.

**Piège gravé :** sur les pages lab, le reset `.co-root h/p { margin:0 }` (0,1,1) bat toute règle 1-classe `.xxx { margin }` → pour espacer/centrer un titre/paragraphe, **utiliser flex+gap** (ou préfixer `.co-root`), jamais un `margin` seul.

**Commit :** (à venir) feat(design): primitive CTA .co-cta (glow teal + grain) + fix alignement/aération

---

## Etat session 2026-07-04 (nuit) — Lot 4 Portfolio ✅ (CV repoussé)

**Fait :**
- **Lot 4 (portfolio)** : `styleguide-portfolio.astro` créé. **Cas vedette Lécureux** branché sur la vraie preuve `src/data/proof-lecureux.ts` (accroche canonique + **6 tuiles stats data GSC** #1/19k/367/1.9%/10+/100-100, note « Data GSC · fenêtre 5 mois »), image cadrée filets + méta client/métier/plateforme/fenêtre/année. **Grille filtrable** des 5 autres réalisations (vraie data `getCollection('portfolio')`, Lécureux exclu car sorti en vedette) — cartes blueprint coins nets, crosshairs au survol, flèche coin, **badge catégorie unique** (pastille filet + point teal, **pas de couleur par catégorie**), client masqué si absent (évite doublon « Projet perso · Projet perso »). Chips filtres pill (Tous/SEO/Projet perso/Site vitrine). **CTA sombre** (bouton blanc sur ink, jamais ink-sur-ink).
- Vérifié en dev (screenshots intro→cas vedette→stats→grille→CTA, filtre SEO testé OK, **0 erreur console**), build OK **218 pages**.
- **Décision CV** : **repoussé hors lab** (choix Jonathan) — les 9 composants `cv/*` + export PDF resteront tels quels, pas de blueprint pour l'instant.

**Prochain :** Lot 5 — décoratifs (revoir SVG/assets `src/assets/` en langage blueprint si besoin) **puis** Lot motion + réconciliation mocks + hub. Ensuite : **cadrer la migration** du système blueprint vers le vrai site (homepage d'abord). Toujours en pages lab `noindex`, `/styleguide` brutaliste non touché.

**Pièges :** (inchangés — voir bloc ci-dessous) + le cas vedette portfolio tire ses chiffres **uniquement** de `proof-lecureux.ts` (source unique GSC), ne jamais réécrire les valeurs en dur dans la page.

**Commit :** (à venir) feat(design): Lot 4 portfolio blueprint — cas vedette Lécureux + grille filtrable

---

## Etat session 2026-07-04 (soir) — Complétion design system : Lots 0-3 ✅

**Fait :**
- **Lot 0 (fixes)** : reset underline scopé `.co-root :where(a){text-decoration:none;color:inherit}` dans `BlueprintKit` (cause racine : lab ne charge pas `global.css` → `<a>` souligné par défaut ; `:where()` neutralise la spécificité pour que `.co-btn` garde `color:#fff`). Anti-flash motion `[data-animate]{opacity:0}` posé dans le kit. `styleguide-lab` : eyebrows/toggle Menlo → Inter Tight, `.bp-btn` blindé `text-decoration:none`.
- **Lot 1 (nav)** : `styleguide-nav.astro` — barre nav, **méga-menu** cadré filets (colonnes filets verticaux, crosshairs, spotlight teal, badges), interaction hover-intention + click + Escape + click-outside, **drawer mobile à accordéons** (scroll-lock, reset au close), **fat footer** zones géo. Data réelle `navigation.ts`.
- **Lot 2 (blog)** : `styleguide-blog.astro` — cartes article (vraie data `getCollection`), filtres + recherche + toggle grille/liste, pagination, composants article (progress, façade vidéo, corps avec liens **soulignés teal**, bio auteur, articles liés). Badges catégorie **1 seul style harmonisé** (pastille filet + point teal, pas de couleur par catégorie).
- **Lot 3 (services)** : `styleguide-services.astro` — **constellation blueprint** (option A : hub + 6 nodes figés + lignes SVG hub-bord→node-bord calculées au load/resize, sans canvas/néon) + **modale chat** qui rejoue les vrais `scenarios.ts` messages en typing + cartes services + CTA sombre. **0 emoji** (icônes Remix mono).
- Toutes vérifiées en dev (screenshots + 0 erreur console), build OK **217 pages**.

**Prochain :** Lot 4 — Portfolio + CV. Créer `styleguide-portfolio.astro` (cartes PortfolioCard/Editorial, image cadrée filets, méta client/année, stats, brancher la vraie preuve `src/data/proof-lecureux.ts`). **Décision en attente** : blueprinter le CV maintenant (9 composants `cv/*` + export PDF, gros effort/ROI différé) ou le repousser hors lab.

**Pièges :**
- **Bordure/trait partiel sur coin arrondi = interdit** (effet U « IA slop »). Souligné actif = barre droite via `::after`. Mémoire `feedback_pas_bordure_partielle_arrondi`.
- **0 emoji** (mémoire `feedback_zero_emoji`) : icônes Remix mono même si la data a un champ emoji.
- **Badges/catégories : pas de couleur par catégorie** — 1 seul style, accent teal unique (le multi-teinte a été jugé « AI slop »).
- **Bouton sur fond sombre** : jamais `.co-btn` (bg `--ink`) sur section `--ink` → invisible. Passer en fond blanc/accent (fix appliqué au CTA services).
- **Capture navigateur = 1568px fixe** même après resize → mobile <720/<900px non vérifiable en screenshot, valider sur device.
- Reset lab `.co-root :where(a)` : specificité neutralisée exprès ; `.co-btn`/`.blog-prose a` (underline volontaire) l'emportent.

**Commit :** [1ebff16] feat(design): complétion design system blueprint — nav, blog, services (Lots 0-3)

---

## Etat session 2026-07-04 — Exploration blueprint + bibliothèque de composants ✅

**Fait :**
- **2 pages lab créées** : `/styleguide-lab` (comparateur de 4 font pairings + 3 layouts hero + toggle JS) et `/styleguide-compo` (maquette homepage réaliste blueprint). `/styleguide` actuel **non touché** (reste la source de vérité brutaliste en vigueur).
- **Pairing retenu : 04 — Inter Tight** (titres/UI) **× Instrument Serif italique** (accent, réservé aux gros titres display) **× Inter Tight** (corps). Fonts limitées à ces 2 familles (décision Jonathan). Accent **teal** (`#00A87D` texte / `#00D9A3` vif) conservé comme signal unique.
- **Système blueprint** : tokens filets `--line` (.09) / `--line-2` (.16), crosshairs `.co-x` aux intersections, colonne capée 1180px bordée, `.co-sec` (sections cadrées), marquee trust (défilé linéaire CSS), drawer mobile JS (mécanisme mirroré de `Header.astro`), transitions `ease-out`.
- **Kit partagé extrait** : `src/components/lab/BlueprintKit.astro` (link fonts + `<style is:global>` complet des primitives `.co-*`). Compo refactorée pour l'importer (régression vérifiée). = **base du futur design system**, une seule source CSS.
- **`/styleguide-components`** (bibliothèque) : cartes blog, **tarifs réels** (Présence 1'490 · Visibilité 2'490 reco · Autorité sur devis), **FAQ** (accordéon `<details>` natif zéro-JS, 4 vraies Q&A de `ContactFAQ`), **formulaire** (maquette visuelle, focus teal), atomes UI. Contenu 100 % réel (extrait du repo).
- **Vérif** : `/styleguide-compo` + `/styleguide-components` répondent 200, **0 erreur console** ; drawer mobile (open/close/aria/scroll-lock), focus champ teal, FAQ toggle testés fonctionnellement.
- **Fraunces** variable extrait & self-hosté (`public/fonts/fraunces/`) comme alternative Gelica (pairing 03, testé puis écarté au profit du 04).

**Prochain :**
1. Jonathan vérifie le **mobile** sur device réel (page components surtout) — l'outil navigateur capture à 1568px fixe, breakpoint non vérifiable en screenshot.
2. Aligner **`/styleguide-lab`** sur les 2 fonts (il reste du JetBrains Mono/Menlo dans ses eyebrows).
3. **Cadrer la migration** du système blueprint vers le vrai site (homepage d'abord) — gros chantier : remplace Plus Jakarta + structure brutaliste. À planifier avec Jonathan quand il valide la direction.

**Pièges :**
- **Capture navigateur = 1568px fixe** → impossible de déclencher le breakpoint mobile (<720px) en screenshot ; valider sur téléphone/DevTools.
- **Helvetica Neue** rend en Arial hors Apple → écarté.
- **Formulaire = maquette** (`onsubmit="return false"`) → câbler le Web3Forms existant (`ContactForm.astro`) à la migration.
- **Contenu placeholder** dans la compo : le témoignage « invisibles → #1 » + « #1 sur sa niche » est du **mock** — à remplacer par la vraie data GSC Lécureux (cf. epic `polish-design-system`, règle honnêteté chiffres).
- Le CSS blueprint vit dans `BlueprintKit` (pas encore dans `global.css`) — la migration devra le consolider et réconcilier avec les tokens brutalistes existants.

**Commit :** [e92b8f2] feat(design): exploration blueprint — pairing 04, BlueprintKit partagé, pages lab (branche `design/blueprint-lab`)

## Carte du code
> Mise à jour : 2026-07-07 — retouches design post-migration (voir sous-section ci-dessous). Base : **45/51 pages en `.co-root` · toutes les pages indexées migrées.**

### Retouches 2026-07-07 (nouveaux / modifiés)
| Fichier | Rôle |
|---------|------|
| `src/components/Logo.astro` | **Nouveau** — logo de marque (mark + wordmark, `src/assets/logo-jonlabs.png`). Source unique : Header (nav + drawer) + Footer. Remplace le wordmark texte `jonlabs.` (CSS `.nav-logo` désormais mort) |
| `src/plugins/remark-tldr.mjs` | **Nouveau** — plugin remark (enregistré dans `astro.config.mjs`). Transforme le bloc « L'essentiel en bref » (blockquote / H2 / paragraphe gras) en `aside.co-tldr` Inter. Laisse les blockquotes de témoignage intacts (serif) |
| `src/styles/blueprint.css` | `.co-eyebrow` 12→11px · échelle de titres par défaut `:not([class])` (fix H2 nus à 16px) · **`.co-root:has(.ar-wrap){overflow:clip}`** + **`.ar-side{align-self:stretch}`** (fix sommaire sticky) · styles `.co-tldr`/`.co-tldr-head`/`.co-tldr-list` |
| `src/pages/blog/[slug].astro`, `guides/[slug].astro` | En-tête réordonné : H1 → méta (date+RT) → tags. Badge de type retiré (CategoryBadge / « Guide ») |
| `src/components/{Hero,AboutHome,ContactInfo,cv/CVHero,cv/CVFooter}.astro` · `src/data/schema.ts` | YouTube dans les socials + `sameAs` · home : punchline retirée, citation remplacée |
| `src/pages/tarifs.astro` | Label « Article blog » retiré des cartes « Aller plus loin » |
| 21 pages indexées (13 services + services/portfolio/tarifs/about/mentions/outils/guides/tag + home) | Eyebrow au-dessus du H1 retiré |

 ~32 corps de page migrés (home+chrome, Vague 1 (7), Phase blog (4), services hub + 13 sous-services, 5 géo, 7 divers, **CV + 9 composants `cv/*`**). Design system + chrome global en place. **6 restantes = toutes noindex hors périmètre** : `styleguide{,-lab}` (réf brutaliste), `cv-pdf` + `devis-client/[slug]` + 2 `outils/*-pdf` (docs standalone sans chrome).

### Pages migrées cette session (2026-07-06)
| Page | Namespace | Note |
|------|-----------|------|
| `src/pages/services/*.astro` (×13) | `.rl/.cr/.wf/.wp/.fo/.gm/.ou…-*` | sous-pages service, gabarit-or `referencement-local` |
| `src/pages/consultant-ia/index.astro` | `.cii-*` | ServiceItem schema, maillage géo/métiers |
| `src/pages/consultant-ia/[ville].astro` | `.civ-*` | getStaticPaths villesSuisseIA + voisines |
| `src/pages/developpement-web/[ville].astro` | `.dwv-*` | getStaticPaths villesFrontalieres, tarifs CHF/EUR |
| `src/pages/developpeur-web-freelance-geneve.astro` | `.dfg-*` | preuve `proof-lecureux` (0 chiffre en dur) |
| `src/pages/metiers/[metier].astro` | `.met-*` | getStaticPaths metiersIA, 15 bindings dyn |
| `src/pages/outils/index.astro` | `.ou-*` | hub outils, `getCollectionPageSchema` |
| `src/pages/outils/checklist-15-signes-site-dort.astro` | `.c15-*` | **Web3Forms** + checklist score (sticky neutralisé) |
| `src/pages/outils/checklist-commerce-google.astro` | `.ccg-*` | **Web3Forms** + checklist CSS |
| `src/pages/outils/reddit-dashboard.astro` | `.rd-*` | `softwareSchema` + FAQ `<details>` |
| `src/pages/merci-checklist{,-15-signes}.astro` | `.mc/.mc15-*` | pages remerciement noindex (redirect Web3Forms) |
| `src/pages/portfolio/[slug].astro` | `.psl-*` | getStaticPaths + getCollection portfolio + corps `.co-prose` |
| `src/pages/cv.astro` + `src/components/cv/*.astro` (×9) | `.cv-*` | CV : ProfilePage schema, JS pixel-explosion + GSAP, Modal, lien `/cv-pdf` (doc print laissé brutaliste) |

### Composants désormais orphelins (0 import — suppressibles au cleanup)
`src/components/shapes/Halo.astro` · `src/components/CTASection.astro` · `src/components/FAQ.astro` · `src/components/IconChip.astro` (ne reste que dans `styleguide.astro` brutaliste). `src/components/lab/BlueprintKit.astro` (no-op déprécié).



### Pages migrées blueprint (corps en `.co-root`)
| Page | Composants réécrits | Note |
|------|---------------------|------|
| `src/pages/index.astro` | Hero, ServicesHome, AboutHome, PortfolioHighlight, ProofLecureux, TechStack, GeoZonesStrip, ClientsBanner | homepage |
| `src/pages/blog/[slug].astro` | CategoryBadge, VideoEmbed, ReadingProgress, RelatedPosts, AuthorBio | article : shell `.ar-*` + corps `.co-prose` + sidebar TOC/progress + TOC mobile. Schema BlogPosting/FAQ |
| `src/pages/blog/tag/[tag].astro` | PostCard | back+titre serif+count, grille PostCard (tokens hérités `.co-root`) |
| `src/pages/guides/index.astro` | (inline) | hub piliers `.co-frame` (masqué si aucun publié), à lire aussi, CTA `.co-cta`. IconChip retiré |
| `src/pages/guides/[slug].astro` | ReadingProgress, AuthorBio | même shell `.ar-*`/`.co-prose` que blog article, badge `Guide`. Schema WebPage. **Non visible tant que pubDate future** |
| `src/pages/services.astro` | (inline) + `services/*` orphelins non importés | constellation `scenarios.ts` + modale + zone locale + ressources |
| `src/pages/about.astro` | (inline) | narratif intégral, timeline filets, preuve dyn `proof-lecureux.ts`, Halo retiré |
| `src/pages/portfolio.astro` | `portfolio/PortfolioCardEditorial.astro` | cas vedette Lécureux `.co-spec` + tuiles GSC, grille filtrable |
| `src/pages/contact.astro` | `Contact{Hero,Form,Info,FAQ,CTA}.astro` | **Web3Forms intact**, FAQ `<details>`, modale succès inline (Modal.astro non touché) |
| `src/pages/tarifs.astro` | (inline ; FAQ/CTASection remplacés par primitives) | prix exacts, tableau comparatif `.tr-table`, 8 FAQ |
| `src/pages/blog/index.astro` | `blog/{BlogHero,BlogFilters,PostCard}.astro` | recherche/filtre/pagination/toggle ; PostCard tokens locaux (page tag) |
| `src/pages/hermes.astro` | (inline) | ex-hero sombre supprimé, grille millimétrée, CTA `.co-cta` |
| `src/pages/mentions-legales.astro` | (inline) | prose légale cadrée, coordonnées `.co-spec` |

### Chrome & design system (global — réservé coordinateur, NE PAS toucher en migration de page)
| Fichier | Rôle |
|---------|------|
| `src/styles/blueprint.css` | **Design system global** (importé par `Layout.astro`). Tokens + font `.co-root, .co-chrome` (généralisés → chrome utilisable hors `.co-root`), layout colonne 1180 sur `.co-root` seul, + toutes les primitives `.co-*` (promues du kit lab). ⚠️ jamais de `.co-*` sans ancêtre `.co-root`/`.co-chrome` (sinon `--accent` = wash legacy) · `--accent` PAS en `:root` · pas de `html,body{background}` |
| `src/layouts/Layout.astro` | Importe `blueprint.css` (global) + `<link>` fonts Inter Tight/Instrument Serif (à côté de Plus Jakarta, gardé pour les pages brutalistes). Charge le moteur `data-animate` (inchangé) |
| `src/components/Header.astro` | **Chrome blueprint** (35 pages) — nav + méga-menu + drawer, wrapper `.co-chrome`, **sticky sur `.co-chrome`**. Data `navigation.ts`. Props `variant`/`scrollTransition` no-op. Styles `.nav-*` + JS |
| `src/components/Footer.astro` | **Chrome blueprint** (35 pages) — fat footer (Lot 1) FUSIONNÉ avec contenu SEO historique (coordonnées, 5 colonnes liens, socials, mentions). Wrapper `.co-chrome`. Styles `.co-foot-*` |
| `src/pages/index.astro` | Homepage — `<main class="co-root">`, 8 sections + preuve, schema.org inchangé. `global.css` gardé (Preflight reset les `<blockquote>`) |
| `src/components/Hero.astro` | Hero blueprint 2-col — texte (`.co-ser` accent) + 2 CTA (`sample.ts`) + socials · **photo Jonathan cadrée `.co-frame`**. Cascade `data-animate`. Styles `.hp-hero-*` |
| `src/components/{ServicesHome,AboutHome,PortfolioHighlight,TechStack,GeoZonesStrip,ClientsBanner}.astro` | Sections home blueprint (homepage-only) — grille millimétrée services · citation+badges About · `getCollection` portfolio inchangé · **TechStack = marquee sombre** · chips villes géo (maillage SEO préservé) · marquee vrais clients. Styles `.hp-*` |
| `src/components/ProofLecureux.astro` | **Nouveau** — section preuve home : témoignage réel + 3 tuiles GSC (`proof-lecureux.ts`), garde `{testimonial && …}`. Styles `.hp-proof-*` |
| `src/styles/blueprint.css` (A14 `.co-prose`) | **Coordinateur-owned** — corps rédactionnel (blog/guides). Liens inline soulignés teal (bat le reset `:where(a)`), blockquote Instrument Serif, listes puce/compteur teal, tableaux/code sobres. Remplace le `.prose` global |
| `src/styles/blueprint.css` (A15 `.ar-*`) | **Coordinateur-owned** — shell article/guide partagé : colonne lecture + sidebar sticky 300px, barres retour/partage, méta, titre, tags, TOC mobile. `<1280px` : sidebar masquée |

### Composants blog (migrés blueprint — dans `.co-root`)
| Fichier | Rôle |
|---------|------|
| `src/components/blog/PostCard.astro` | Carte article `.bl-card` (blog index + tag). **Tokens locaux retirés** (hérités de `.co-root`). Badge `.co-badge` sur image, mode liste via `#posts-list[data-view=list]` |
| `src/components/blog/CategoryBadge.astro` | `.co-badge` (point teal). **`getCategoryColor` abandonné** (1 seule teinte). Prop `size` sm/md |
| `src/components/blog/VideoEmbed.astro` | Iframe YouTube nocookie 16:9 dans cadre filet `.co-frame` (crosshairs) |
| `src/components/blog/AuthorBio.astro` | Carte bio blueprint `.bl-author` : photo réelle `.co-frame` + CTA `.co-btn` /about + socials teal. Dans le `.co-root` de fin de page |
| `src/components/blog/RelatedPosts.astro` | Grille blueprint `.bl-related-*` wrappant PostCard + lien « Tous les articles » |
| `src/components/blog/ReadingProgress.astro` | Sidebar blueprint `.bl-rp-*` : barre verticale teal + TOC accordéon (JS cible **`.co-prose`**). Classes injectées `toc-h2/h3-link` stylées teal (desktop + `#mobile-toc-list`). Barre haute mobile fixed |

### Lab (référence, noindex — inchangé)
| Fichier | Rôle |
|---------|------|
| `src/components/lab/BlueprintKit.astro` | ⚠️ **DÉPRÉCIÉ / no-op** — CSS+fonts promus vers `blueprint.css` + `Layout`. Gardé vide pour ne pas casser les imports des 6 pages lab. À supprimer une fois les imports retirés |
| `src/pages/styleguide-nav.astro` | **[Lot 1]** Nav blueprint lab (noindex) — **source du chrome migré** (Header/Footer en dérivent). Barre + méga-menu + drawer + fat footer. Data `navigation.ts` |
| `src/pages/styleguide-blog.astro` | **[Lot 2]** Blog blueprint (noindex) — article à la une (`.co-frame`), cartes (`getCollection`), filtres/recherche/toggle, pagination, composants article (progress, vidéo `.co-frame`, prose, bio, related). Badges `.co-badge`(+`--onimg`). Styles `.blog-*` |
| `src/pages/styleguide-services.astro` | **[Lot 3]** Services blueprint (noindex) — constellation (hub/nodes/modale en `.co-frame`, lignes SVG au load/resize) + modale chat (`scenarios.ts`), cartes services (features `.co-list--check`), CTA sombre. **0 emoji**. Styles `.svc-*` |
| `src/pages/styleguide-portfolio.astro` | **[Lot 4]** Portfolio blueprint (noindex) — cas vedette Lécureux (`.co-frame` + fiche `.co-spec` + **6 tuiles depuis `proof-lecureux.ts`**), grille filtrable (`.co-frame--reveal`, badge `.co-badge`, placeholder `.co-hatch`). `.po-stats` gardé page-specific. Styles `.po-*` + JS filtres |
| `src/data/proof.types.ts` | **[Template preuve]** Interfaces partagées `ClientProof`/`ProofStat`/`ClientTestimonial` + convention documentée (1 client = 1 `proof-<slug>.ts`, chiffres réels, `testimonial` nullable, anti-dérive) + squelette copiable. **Fichier autonome** (aucune dépendance) → se copie tel quel dans un futur projet de site |
| `src/data/proof-lecureux.ts` | Source unique preuve GSC Lécureux — conforme `: ClientProof` (accroche canonique + 6 stats + **champ `testimonial` = vrai témoignage**). Consommé par portfolio/compo/about/services — ne jamais réécrire chiffres ni citation en dur |
| `src/pages/styleguide-compo.astro` | Maquette homepage blueprint (référence) — nav, hero, trust marquee, services, cas client, CTA sombre (`.co-cta`), footer. **[Lot motion]** scénographie `data-animate*` (hero cascade, services stagger, reveals preuve/CTA). **Preuve = vrai témoignage Lécureux** (dérivé `proof-lecureux.ts`, garde `{testimonial && …}`) + 3 tuiles GSC. Mock supprimé |
| `src/pages/styleguide-components.astro` | Bibliothèque atomes/primitives (noindex) — cartes, tarifs (`.co-list`), FAQ **smooth** (`::details-content` ease-out), formulaire (`.co-index`), atomes + **vitrine `06 · Décoratifs`** (catalogue vivant des primitives). Styles `.cc-*` |
| `src/pages/styleguide-lab.astro` | Comparateur pairings (échantillons multi-fonts = le sujet, conservés). Chrome UI aligné Inter Tight, `.bp-btn` blindé |
| `src/data/{navigation,scenarios}.ts` · `src/lib/blog.ts` · `src/sample.ts` | Sources de vérité consommées par les pages lab (nav, scénarios+sections, helpers/catégories blog, author) |

### Décisions clés
- **[Migration] Ordre : chrome global d'abord, puis corps page par page.** Le blueprint est promu en `blueprint.css` global ; le chrome (`Header`/`Footer` en `.co-chrome`) est basculé sur les 35 pages d'un coup, les corps migrent un par un. Coexistence brutaliste ↔ blueprint garantie par des namespaces de tokens disjoints + scoping strict `.co-root`/`.co-chrome`. Couture assumée : chrome blueprint sur corps brutaliste jusqu'à migration. `services.astro` = prochaine (perd son header transparent).
- **Pairing = Inter Tight × Instrument Serif uniquement** ; Instrument Serif italique réservé aux gros titres display, accent inline = **teal** (pas d'italique).
- **Blueprint = filets fins + crosshairs**, colonne capée, **coins nets** (pas d'ombre offset brutaliste). **Une seule couleur d'accent (teal)** — pas de couleur par catégorie/pilier.
- **Règles design gravées en mémoire** : `feedback_zero_emoji` (0 emoji → icônes Remix mono) · `feedback_pas_bordure_partielle_arrondi` (jamais de trait partiel sur coin arrondi → barre droite `::after`) · `feedback_animations_ease_out` (toute transition/anim en **ease-out**, jamais ease-in/ease-in-out ; boucles ambiantes exclues) · `feedback_pas_pilule_eyebrow_titre` (**jamais de pilule `.co-badge` en eyebrow au-dessus d'un titre** = AI slop → eyebrow texte `.co-eyebrow` ou rien ; `.co-badge` = usage fonctionnel inline seulement. Sweep 06.07.2026 : 9 héros nettoyés — 3 outils, 4 géo, hermes, metiers). Bouton sur fond sombre = fond clair, jamais ink-sur-ink.
- **CSS à 2 niveaux** : primitives réutilisées dans `BlueprintKit`, spécifiques par page en `.nav-*`/`.blog-*`/`.svc-*` (promotion quand 2+ pages). Motion = système `data-animate` existant (déjà chargé via Layout).
- **[Lot 5] Décoratifs consolidés** : une déco dupliquée 2+ fois = promue en primitive `.co-*` (badge, puce, crosshair 4-coins, grille millimétrée, spec-sheet, glow/grain). `.co-frame` = 4 crosshairs sans markup (2 pseudos × 4 backgrounds) mais **hérite `--line-2`** → sur fond ink garder `<span class="co-x">`. Nouveau vocabulaire technique dispo : `.co-crop`/`.co-dim`/`.co-anno`/`.co-index`/`.co-hatch`. SVG brutalistes `src/assets/` **non traités** (uniquement dans le vrai site → travail de migration).
- Pages lab en **`robots="noindex, nofollow"`** ; `/styleguide` brutaliste non touché.
- **[Motion] Attributs seuls, jamais de nouveau moteur** : le système `data-animate` (Motion One) est chargé une fois via `Layout.astro` ; l'anti-flash `opacity:0` scopé `.co-root` est dans `BlueprintKit`. Animer une page lab = poser des `data-animate`/`data-animate-stagger`+`-item`/`data-delay`/`data-animate="scale|fade-left"`. Piège : un `data-animate-item` **doit** vivre dans un conteneur `data-animate-stagger` (l'anti-flash du kit ne masque que ce cas).
- **[Template preuve] 1 client = 1 `proof-<slug>.ts` conforme `ClientProof`** (`proof.types.ts`). Chiffres réels only (jamais « Top 1 » si non défendable), `testimonial` intégré tel quel ou `null`. Pattern jonlabs-only ; unification vers autres repos (barberMedia/physiopommier) = décision ouverte, data client à fournir.
