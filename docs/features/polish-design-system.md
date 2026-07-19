# Feature — Polish global & design system

> Chantier de fond : uniformiser le style graphique du site (thème, titres, couleurs), casser l'effet « très AI » (mur de texte, peu d'images, peu d'aération), rationaliser l'architecture/navigation, et transformer les pages tags thin en vraies pages — pour un rendu **plus professionnel**.
> **Source ADN visuel marque perso** : skill `visual` (`~/.claude/skills/visual/`) — mono-accent teal `#00D9A3`, fond warm, connecteurs fins, formes arrondies, illustration « collage éditorial ».
> **Statut** : 🔄 EN COURS — Phases 1a + 1b + 2 + 3 + 4 faites ✅. **Phase 5 (Lecureux) faite ✅** (source unique + harmonisation + fix erreur factuelle divorce, build vert 211 pages). Reste : 1 sous-tâche Phase 5 **reportée** (reframe éditorial de l'article blog — choix de voix, appartient à Jonathan) + **Phase 6 (tags) DÉBLOQUÉE** le 15.07 (vérif indexation GSC faite, baseline `.seo-data/index-jonlabs-ch-2026-07-15.json`).
> **19.07** : passe polish supplémentaire — CTA clarifiés, recherche blog remontée, **variables d'espacement de section** introduites (`blueprint.css`), et **48 covers illustrées** (DA semi-concrète).
> **19.07 (suite)** : **migration spacing site-wide BOUCLÉE** ✅ — tout l'espacement en dur des pages/composants `.co-root` branché sur les variables `blueprint.css` (+5 tokens `--pad-*`), 6 commits, 0 résidu migrable. Restes epic : revue covers, reframe Lécureux (reporté), portrait détouré.

## Etat session 2026-07-19 (suite) — Migration spacing site-wide ✅ (chantier bouclé)

**Fait :** migration complète de l'espacement en dur → variables `blueprint.css`, sur **toutes** les pages/composants `.co-root`. **6 commits sur `main`**, build vert (243 pages) + zéro corruption à chaque lot.
- **Échelle étendue** : 5 nouveaux tokens de padding composant ajoutés à `blueprint.css` (`--pad-card:24px`, `--pad-panel:36px`, `--pad-encart:30px 32px`, `--pad-chip:12px 14px`, `--pad-pill:8px 12px`) — valeurs = ancien hardcodé, migration neutre.
- **~780 remplacements** : rythme de section (`56px 40px`→`--sec-pad-y/x`, heros, `margin-top:8px/10px/32px`→vars), sections 3-valeurs (top+sides tokenisés, bas littéral gardé), paddings composant récurrents. Périmètre : 13 services + metiers/villes/freelance + devis-client + 21 pages restantes + 6 composants (Footer, Hero, AboutHome, CV, BlogHero) + Header.
- **Seul changement visuel (approuvé Jonathan)** : sous-titres H3 `margin-top:44px → var(--space-subsection)` (44→64px), aération alignée sur consultant-ia. Vérifié live (referencement-local).
- **Vérifs live** faites : referencement-local, freelance-geneve, tarifs, devis Grange-Canal (contenu intact), home (Hero/Footer — vars résolvent bien dans les composants).
- **Audit final** : **0 pattern migrable résiduel** dans les fichiers `.co-root`.

**Prochain :** chantier spacing terminé. Restes de l'epic Polish : (1) revue live des 48 covers (`npm run dev` → `/blog`) ; (2) reframe éditorial article Lécureux (reporté, choix de voix) ; (3) portrait hero détouré (piste Jonathan). **Passe optionnelle** : consolider les quasi-doublons de padding (34/26/28px → arrondis sur l'échelle) = vrai changement visuel, non fait.

**Pièges :**
- Les tokens spacing ne résolvent que **sous `.co-root`/`.co-chrome`**. Laissés en dur volontairement : templates PDF-print (`outils/*-pdf.astro`) et `styleguide-lab.astro` (hors co-root), paddings asymétriques structurels (inputs 4-valeurs `12px 14px 12px 40px`, `24px 20px`…), bas de section littéraux (72/64px), composant **mort** `CoutDormantCalculateur` (importé nulle part → candidat suppression).
- Moteur de migration réutilisable : `scratchpad/migrate_spacing.py` — règles ancrées sur `padding:`/`margin-top:` + terminateur non-whitespace `(?=[;"}]|$)` = ne corrompt jamais une déclaration multi-valeurs. Ordre : hero 3-val → 2-val → composants → marges.
- Le devis Grange-Canal n'a reçu **que** des changements CSS d'espacement — les 3 vérifs bloquantes côté Jonathan restent intactes.

**Commits :** [619a61b] tokens+services · [1a3cd90] landings · [b233c16] devis-client · [34fdc39] 21 pages · [22e91a4] composants · [9e0d476] sweep final 3-valeurs — tous sur `main`.

---

## Etat session 2026-07-19 — CTA + blog UX + variables spacing + covers illustrées (48) ✅

**Fait :** grosse passe polish, **9 commits sur `main`**, build vert à chaque commit (hook pre-commit).
- **CTA clarifiés** : header `Contact` → « Démarrer mon projet » (`navigation.ts`) ; packs tarifs → CTA propre par pack via champ `cta` (« Lancer mon site » / « Devenir visible sur Google » / « Construire mon autorité », `tarifs.astro`) ; génériques « Me contacter » reformulés (`services.astro`, `about.astro`, `ConversationModal.astro`). Heros déjà contextuels **conservés**.
- **Blog** : barre de recherche remontée **sous le hero** (`blog/index.astro` + `BlogFilters.astro`) ; chips catégories restées au-dessus de la grille ; article à la une **masqué auto** quand une recherche/filtre est actif.
- **Variables d'espacement de section** : échelle `--sec-pad-y/x`, `--space-eyebrow`, `--space-title-lead`, `--space-block`, `--space-subsection` dans `blueprint.css` (`.co-root`). Bug consultant-ia réglé (sous-titres H3 `.cii-sub-title`/`.cii-mini-title` 44→64px via `--space-subsection`). Page `consultant-ia/index.astro` **entièrement migrée** en variables = cas de référence, rendu pixel-identique ailleurs.
- **Covers illustrées (48 articles publiés)** : toutes les covers texte remplacées par des **illustrations semi-concrètes sans texte** (DA `visual` : statue N&B en signature + une ancre concrète qui nomme le sujet + accent teal), format **16:9**, `alt` réécrits. 5 vagues : automatisation(9) · mobile(8) · geo(7) · web(8) · seo-local(13) + essai initial 3.
- **Skill `visual` enrichi** (hors repo, `~/.claude/skills/visual/`) : axe **abstrait ↔ semi-concret** + table de routage par placement (X/tweets → abstrait, cover article → semi-concret) + **garde-fou faux-texte**, gravé dans `prompt-master.md` / `moodboard.md` / `SKILL.md`.

**Prochain :** (1) revue live des covers (`npm run dev` → `/blog` ; `automatisation-pme` = featured actuel). (2) **Migration spacing site-wide** — ~176 `padding:56px 40px` + ~212 `margin-top:8px` (eyebrow→titre) encore **en dur** ailleurs (`services/*`, `metiers/[metier]`, `developpement-web/[ville]`, `developpeur-web-freelance-geneve`, `devis-client/[slug]`) à brancher sur les variables `blueprint.css` — consultant-ia = patron. Chantier mécanique par lots, **volontairement pas fait en masse** (risque de régression d'un coup).

**Pièges :**
- **Génération cover** = pipeline gpt-image-2 (skill `visual`) : générer en `1536x1024` (3:2) puis **center-crop 16:9** (box `(0,80,1536,944)`) — `render.py` ne fait que du **padding warm**, jamais de crop. Refs objet = `illustration/illu2-statue-laptop.png` + `illu6-phone-collage.png` (ou `illu4-plugged-in.png`). Qualité **`medium`** (choix Jonathan, pas de HD). Moteur réutilisable : `scratchpad/gen_covers.py` + specs JSON `{slug:{sujet,ancre}}` + `place_wave.py`.
- Le **nom de fichier cover ne change pas** (`{slug}.webp` dans `public/images/blog/`) → l'`image.url` du frontmatter reste valide, on écrase juste le fichier.
- Les covers `apparaitre-chatgpt`/`gemini` incluent un cue de marque (swirl ChatGPT, spark Gemini) rendu par l'IA — assumé, aide la lisibilité.
- La cover ne s'affiche **jamais dans le corps de l'article** (`blog/[slug].astro`) — uniquement en liste `/blog` + `og:image`. Featured = article publié le plus récent (dynamique, `blog/index.astro:24`), pas le champ `featured` du frontmatter.

**Commits :** [c835ba4] cta · [7f64b63] blog recherche · [5cf5a57] variables spacing · [8964d8b] essai covers · [a42a550] vague automatisation · [614cec3] mobile · [915e04b] geo · [117a1fc] web · [7126a2a] seo-local — tous sur `main`.

---

## Etat session 2026-07-15 (soir) — Portrait hero + bandeau de confiance ✅

**Fait :** deux retouches home, build vert (237 pages), poussées sur `main` (`8641d42..f3e8fab`).

- **Portrait remplacé** (`f3e8fab`) : nouvelle source (illustration lofi, salon) **recadrée 4:5** sur le buste — boîte `(256, 112, 984, 1022)` sur un original 1254×1254 carré, sortie **768×960 WebP q88** (563 ko → 68 ko). ~80 % du décor hors champ. **Couleurs d'origine, aucun étalonnage.**
- **Bandeau de confiance** (`a5df376`) : `ClientsBanner.astro` — liste `clients` **en dur**, passée de 4 à 6 avec **Physio Pommier** et **Ugo Mighali** (vraies études de cas). Libellés repris des `client.name` des `.md` portfolio. Marquee (`translateX -50%`, liste ×3) boucle sans couture à 6 noms, vérifié en navigateur.

**⚠️ Le regrade a été tenté puis rejeté — ne pas le re-proposer.** J'avais désaturé le portrait vers la palette du site (bleus 175-275° tirés vers le teal `#00A87D`, chauds atténués, voile crème). **Jonathan n'en a pas voulu** → version brute remise. Le diagnostic reste valable pour la suite : l'écart avec le langage visuel du site n'est **pas la teinte mais la valeur et l'air** (illustrations `visual` = sujet qui flotte sur crème ; la photo = bloc dense edge-to-edge). Un fondu vers le crème a aussi été testé → halo flou, abandonné. C'est le `co-frame` (repères de coupe) qui fait tenir le rectangle net.

**Piste retenue pour plus tard (Jonathan) :** repartir d'un **portrait américain**, **détourer le fond**, puis intégrer sur crème — c'est ce qui donnerait l'air manquant. Ni `rembg` ni `opencv` dispo dans l'env (≈200 Mo de modèle à installer si on y va).

**Prochain :** inchangé côté design — Phase 6 (tags) débloquée. Aucun reste sur le portrait/bandeau.

**Pièges :**
- `jonathan-vouilloz.webp` a **4 consommateurs** (`Hero`, `AboutHome` avatar 42px, `blog/AuthorBio`, + `schema.ts` → `Person.image`). Il vit en **2 exemplaires** : `src/assets/` (composants) et `public/images/` (schema.org) → **les deux doivent bouger ensemble**, sinon deux portraits différents cohabitent sur `/`.
- **Non tranché :** le bandeau affiche « Lécureux Conseil » alors que `content/portfolio/leo-lecureux-seo.md` porte `client.name: "Léo Lécureux"`. Les 5 autres correspondent exactement. Nom de boîte vs nom de personne — arbitrage Jonathan.
- Le hook pre-commit lance un build complet → chaque commit prend ~10 s, normal.

**Commits :** [a5df376] bandeau · [f3e8fab] portrait — poussés.

---

## Etat session 2026-07-15 — Note SEO : le footer a été rebranché puis reverté ✅

> Session principale = indexation GSC, voir `docs/features/refonte-seo-clusters.md`. Ce bloc n'est là que parce qu'il touche à **ta décision footer du 10.07**.

**Ce qui s'est passé :** j'ai **rebranché la colonne « Zones & régions »** au footer (0650361), en croyant que `footerZonesWeb`/`footerRegionsIA` étaient des exports oubliés. **C'était ta décision** (d247cc7, « sans plus-value »), pas un oubli — le commentaire périmé de `navigation.ts:178` (« exposés dans le fat footer ») m'a induit en erreur. **Reverté** (ffe993e) : `Footer.astro` est **strictement identique à l'état du 10.07**, grille 5 colonnes intacte.

**Ta décision était la bonne, la mesure le prouve :** villes web = **6 à 9 liens éditoriaux** chacune (GeoZonesStrip/home, `/services`, creation-site-web, cross-links) → le footer n'était pas ce qui les maillait. Et ton argument « un lien nav a peu de poids » est exact : le boilerplate répété sur 223 pages est escompté par Google.

**Garde-fou posé :** commentaire `navigation.ts:178` réécrit — il documente la décision du 10.07 et interdit le rebranchement sans arbitrage.

**Phase 6 (tags) : le blocage GSC est levé.** La vérif d'indexation attendue est faite (baseline `.seo-data/index-jonlabs-ch-2026-07-15.json`, 50/88 indexées). Élément utile pour Phase 6 : les pages `/blog/tag/*` sont `noindex, follow` (`blog/tag/[tag].astro:33`) alors que `navigation.ts:142-146` y envoie **5 liens sitewide**. Ce n'est pas un bug (`follow` fait circuler le jus vers les articles), mais si tu veux des vraies pages catégorie indexables, c'est le chantier à ouvrir.

**Prochain :** inchangé côté design — Phase 6 (tags) **désormais débloquée**, reframe éditorial Lécureux (`visibilite-site-internet-2026.md`) toujours reporté.

**Commit :** ffe993e revert(footer) — poussé.

---

## Etat session 2026-07-10 — Label catégorie « slash slug » + nettoyage footer ✅

**Fait :** deux retouches de design system, buildées vertes (232 pages) et poussées sur `main`.

- **Nouveau langage de label catégorie sur les cartes** : la pill `.co-badge` (arrondie, uppercase, point teal) est remplacée par un **slash slug** minimaliste — `/ applications-mobiles`, `/ site-vitrine` — en **Inter Tight light italic** (poids 300), gris `--muted`, le slash en teal `--accent`. Nouvelle primitive **`.co-cat`** dans `blueprint.css` (d'abord introduite `.bl-cat` puis **généralisée en `.co-cat`** neutre, partagée blog + portfolio). Chargement font mis à jour dans `Layout.astro` (axe `ital` + poids `300..700` ajoutés à Inter Tight).
- **Appliqué partout où une carte affiche sa catégorie** :
  - Blog : `PostCard` (grille + page tag + articles similaires) — label **déplacé de l'image vers le corps** au-dessus du titre (lisibilité) ; carte à la une `blog/index.astro`. Slug via nouveau `getCategorySlug()` + champ `slug` ajouté à `categories` dans `src/lib/blog.ts`.
  - Portfolio : `PortfolioCardEditorial` (grille /portfolio), `PortfolioHighlight` (home — affiche le **type** en kebab `/ etude-de-cas` `/ side-project`, CTA « Voir l'étude de cas » vs « Voir le projet » recâblé), en-tête + cartes similaires des fiches `[slug].astro`, et **cas vedette Lécureux** (`portfolio.astro`) : tag retiré de l'image → `/ seo-local` dans le corps, styles morts `.po-feature-tag` / `.po-dot` supprimés.
  - Non touché (voulu) : chips de filtre (`.bl-chip` / `.po-chip`, gardent l'affordance bouton), tags d'article, `.co-badge` global (pricing/étapes/guides), pages `styleguide-*` lab (noindex).
- **Footer allégé** : suppression de la colonne **« Zones & régions »** (revient sur l'ajout Phase 4) — jugée sans plus-value. Grille rééquilibrée 6→5 colonnes. **Aucune page orphelinisée** : villes web toujours liées via `GeoZonesStrip`/`services`/pilier C3a, régions IA via leur hub `/consultant-ia`. Les exports `footerZonesWeb`/`footerRegionsIA` de `navigation.ts` sont conservés (encore lus par `styleguide-nav`).

**Piège utile :** un warning build « duplicate id » sur un `.md` blog = artefact de cache Astro (fichier passé par plusieurs états) → disparaît avec `rm -rf dist .astro node_modules/.astro`. Pas un vrai doublon.

**Prochain :** inchangé — **Phase 6 (tags)** toujours bloquée par vérif indexation GSC ; reframe éditorial article Lécureux (`visibilite-site-internet-2026.md`) toujours reporté.

**Commits :** [d247cc7] footer sans Zones & régions · [2687009] slash slug blog · [7827ad8] slash slug cartes réalisations (+.bl-cat→.co-cat) · [8ba0165] slash slug home/fiches/vedette — tous poussés (`4b4d7a7..8ba0165`).

---

## Etat session 2026-07-03 (suite) — Phase 5 : Rationalisation Lecureux ✅

**Fait :** harmonisation complète de la preuve Léo Lécureux, **recalée sur la vraie data GSC** (accès `sc-domain:lecureux-conseil.ch` ouvert par Jonathan en cours de session). Build **vert (211 pages)**. Approche = source unique + fix ciblé, devis non touchés.

**⚠️ Découverte majeure — les chiffres affichés étaient inexacts.** La vérif GSC (fenêtre 5 mois sept. 2025→janv. 2026) donne **19 105 impressions · 367 clics · CTR 1,92 % · position moyenne 15,3** (all-time 16 mois : 829 clics / 52 923 impressions). Donc :
- « **Top 1 Google** » / « position #1 » **n'est PAS défendable** (pos. moy. réelle 15,3). Le vrai #1 est sur la **longue traîne restauration** (patente restaurant, créer restaurant, ouvrir son restaurant… pos. 1-3 mais 1-3 impressions chacune) → formulation retenue : « **#1 sur sa niche (droit de la restauration)** ».
- « 485 clics » (portfolio) et « 340 clics » (blog) étaient tous deux faux → réel **367**. « 20.4k impressions » → réel **19.1k**. CTR 2.4 % → **1,9 %**.
- Les requêtes « avocat restauration geneve » que Jonathan voit en #1 en live = **personnalisation/géoloc** (0 impression dans GSC). Métier « juriste restauration » **conservé** (choix Jonathan, cohérent avec la longue traîne où il domine).
- **Couple canonique honnête gravé** (décision Jonathan) : « **#1 sur sa niche · 19 000 impressions & 367 clics en 5 mois** » + « 10+ leads qualifiés » (offline, non vérifiable via GSC). Toutes les mentions « Top 1 / position #1 » du site recadrées en « #1 sur sa niche ».

- **Source unique créée** : `src/data/proof-lecureux.ts` (accroche court/long, `name`/`company`/`metier`, `duration`, `businessResult`, `platform`/`year`, `stats[]` 6 tuiles, `portfolioUrl`). Tout ce qui est `.astro`/`.ts` en dérive → plus de dérive future possible.
- **Erreur factuelle corrigée** (`services/referencement-local.astro`) : Léo était décrit comme **« avocat spécialisé divorce »** (mockup Google `q=avocat+divorce+genève`, titre, description, header étude de cas) → **juriste restauration** partout. `caseStudyStats` branché sur le module (tuile « 1 client » → « 10+ leads »).
- **Reprises alignées** : `developpeur-web-freelance-geneve` (carte dérivée du module + résultat), `about.astro` (« des clients en moins de 4 mois » → « 10+ leads en 5 mois, aujourd'hui #1 » + lien portfolio, interpolé), `CVProjects.astro` (3-4 mois → 5 mois, Webflow → Framer, 2024 → 2025, « Cabinet Juridique » → juriste restauration, nom → « Lécureux »), portfolio md (tuile « Client signé 1 » → « Leads qualifiés 10+ / dont 1 client signé »). `schema.ts` l.433 déjà cohérent (#1/5 mois) → laissé tel quel.
- **Règle IA respectée** (`consultant-ia/index.astro`) : la preuve **SEO** Lécureux violait la règle « Lecureux = SEO/dev seulement ». Retirée des 2 endroits (bullet « preuves chiffrées » + tuile stat). Remplacée (choix Jonathan) par une **preuve IA Barber Concept** : tuile « 24/7 · avis Google en autonomie » (réponse auto fidèle au tone of voice + rapport mensuel) ; bullet → « système de réponse aux avis Google en autonomie (cas barbershop) ».

**Résiduels vérifiés OK (non touchés, voulu) :** « avocat divorce Genève/Lausanne » dans FAQ/blog = exemples génériques de requêtes locales (pas la fiche Lécureux) ; « avocat » dans le portfolio md = contexte réel (formation en cours) ; Webflow dans `ugo-mighali-coutelier.md` = autre client réel.

**⚠️ Reste à traiter — article blog (décision éditoriale Jonathan) :** `src/content/blog/visibilite-site-internet-2026.md` (l.173-200) titre « **1 article = 20 400 impressions en 5 mois** ». Or la data GSC montre que c'est **site-level** (19 105 imp sur plusieurs pages, aucune page unique à 20k — la plus grosse = /avocat-abordable-geneve ~11k sur 16 mois) : le récit « un seul article a fait 20 400 impressions » est **inflaté**. Correction = reframe éditorial (garder le récit « 1 article » avec chiffres réels ? ou recadrer en « stratégie de contenu » site-level ?) → **choix de voix qui appartient à Jonathan. REPORTÉ explicitement (03.07 : « plus tard on fera »).** Reco = option 2 (recadrer « stratégie de contenu »). Numbers réels à utiliser : 19 105 imp / 367 clics / pos. moy. 15,3 sur 5 mois.

**Prochain :** **Phase 6 (tags)** — toujours bloquée : Jonathan vérifie d'abord l'indexation `/blog/tag/*` dans GSC, puis normaliser les tags fragmentés, puis enrichir 2-3 candidats sûrs (`google-my-business`, `geo`, `application mobile`).

**Commit :** [à committer] feat(content): Phase 5 — source unique preuve Lécureux + harmonisation + fix divorce→restauration

---

## Etat session 2026-07-03 — Phase 4 : Nav & archi (refonte complète, décisions nav tranchées) ✅

**Fait :** refonte de l'architecture de navigation. Build **vert (211 pages)**, committé + poussé (`09af5f7`).

- **`navigation.ts` — 2 pôles** : `Solutions` → **« Création Web »** (URL `/services` conservée ; colonnes Sites web / Apps & sur-mesure / SEO local ; **Refonte de site** + **Validation d'idée** enfin surfacées → P3). `Consultant IA` → **« IA & Automatisation »** (colonnes Conseil & agents / Automatiser / Par métier / **Guides IA** ; les 3 services `automatisation/integration-outils/formation-ia-equipe` rapatriés dans leur vrai foyer → P1). Ordre header : Création Web · IA & Automatisation · Réalisations · Tarifs · Ressources · À propos (P2, P4). Zones géo **sorties du méga-menu** → nouveaux exports `footerZonesWeb` / `footerRegionsIA`.
- **Hub `/guides` créé** (`src/pages/guides/index.astro`) : répare le **breadcrumb 404** de `guides/[slug].astro` (P5). **Auto-alimenté** : grille de piliers masquée tant qu'aucun n'est publié + section « À lire aussi » tirée **dynamiquement** des articles `blog` `category==='automatisation'` filtrés `isPublished` (self-healing, zéro 404).
- **`Footer.astro` enrichi** : colonnes **Création Web**, **IA & Automatisation** (+ métiers + Guides IA), **Zones & régions** (géo web + régions IA fusionnées), grille passée `lg:grid-cols-6` → `7`. Toujours dérivé de `mainNav` + les 2 exports géo.
- **Home re-routée** (`sample.ts`) : les 3 cartes services pointaient toutes vers `/services` → `/services/creation-site-web`, `/consultant-ia`, `/services/developpement-mvp` (P7).

**Piège majeur résolu :** le pilier `mettre-en-place-ia-entreprise-guide` (collection `pages`) et plusieurs articles IA sont **future-dated** (release programmée 03→12.08, cron rebuild) → `isPublished` les filtre → **non buildés**. Le hub aurait affiché grille vide + liens 404. Corrigé : hub 100% self-healing sur `isPublished` ; « À lire » sélectionne les 3 articles automatisation publiés les + récents (aujourd'hui : openclaw-pme-suisse, hermes-agent-ia-pme, avantages-limites-automatisation-pme).

**Décision laissée volontairement :** 1 forward-ref dans le méga-menu — item flagship « Mettre en place l'IA en entreprise » → `/guides/{slug}`, **404 jusqu'au 12.08** (sa `pubDate`). Gardé car guide phare + convention de contenu programmé du projet. Le lien « Tous les guides » → `/guides` (featured) est lui toujours live.

**Non touché (volontaire) :** title SEO de `/services` (« Services de développement web à Genève ») laissé riche en mots-clés — pas de régression SEO pour une cohérence cosmétique ; la cohérence nom est obtenue via menu + footer = « Création Web ».

**Prochain :** **Phase 5 (Lecureux)** — Jonathan doit figer 1 couple métrique/durée canonique (aujourd'hui 4 métriques + 2 durées incohérentes) avant que j'harmonise les reprises. **Phase 6 (tags)** — bloquée : Jonathan vérifie d'abord l'indexation `/blog/tag/*` dans GSC, puis normaliser les tags fragmentés, puis enrichir 2-3 candidats sûrs (`google-my-business`, `geo`, `application mobile`).

**Commit :** [09af5f7] feat(nav): refonte architecture — 2 pôles, hub /guides, footer enrichi (Phase 4)

---

## Etat session 2026-07-02 (suite 5) — Phase 3 : ROLLOUT complet (landings + services/* + CV) ✅

**Fait :** rollout de la Phase 3 sur tout le périmètre restant. Build **vert (209 pages)**.

- **2 illustrations générées** (skill `visual`, typologie `illustration`, teal carré 1:1 natif, `--logo none`) : `metiers-ia.webp` (34 kB, collage registres/dossiers/clé → flux admin) et `developpement-web.webp` (31 kB, fenêtres navigateur + mockup mobile + pin localisation). Masters PNG dans `_masters/`. Prompts figés dans le scratchpad de session.
- **Landings (bloc illustration+aside, gabarit pilote `max-w-6xl` + grille `lg:grid-cols-[minmax(0,340px)_1fr]` + `Halo` + `Image` carré, en aside de la FAQ)** : `consultant-ia/index` (illu `consultant-ia.webp`), `metiers/[metier]` (×2 pages, `metiers-ia.webp`), `developpement-web/[ville]` (×5 pages, `developpement-web.webp`) + normalisation chips/highlights de ces 3 pages.
- **Services/\* (13 pages)** : chips → `IconChip` ; **problème → `variant="muted"` (gris neutre)**, **solution/résultat → teal** (y compris icônes de comparaison avant/après + colonnes « Pas pour vous ») ; encadrés/surlignages rouges neutralisés (`bg-panel`/`text-ink`/`text-muted`) ; badges/blobs alias → tokens. Fan-out de 3 agents (spec mécanique `phase3-normalize-spec.md`).
- **CV (9 composants + `cv.astro`)** : `bg-emerald-*`/`bg-purple-*`/badges alias → tokens teal ; 7 section-chips → `IconChip` ; `cv.astro` (pixels JS déjà teal) intact.
- **Fix visuel** : les surlignages inline qui se retrouvaient `bg-panel` **dans** un encadré `bg-panel` (invisibles) repassés en `bg-accent-soft` (auto/integration/formation).
- **Cohérence dots** : dots « Disponible » des pages pilotes `consultant-ia/[ville]` + `freelance-geneve` passés `bg-green-500` → `bg-accent` (alignés sur les nouvelles pages).

**Exceptions conservées (voulu) :** astérisques `*` de formulaire (`text-red-500` = obligatoire, fonctionnel), trios de dots « chrome fenêtre » (`bg-red-400`/`yellow-400`/`green-400` = mockup navigateur), emojis meta SEO, bloc code `bg-[#1e1e2e]`, displays `font-mono font-black`.

**Reste (hors périmètre, à noter) :**
- Les **2 pages pilotes** `consultant-ia/[ville]` + `developpeur-web-freelance-geneve` gardent des chips **faits-main** `bg-[var(--blue)]` (rendent teal, mais pas via `IconChip`) → migration optionnelle pour cohérence de code.
- Verts « disponible/succès » sur pages **hors scope** : `outils/*`, `hermes`, `tarifs`, composants `Contact*`, `AboutHome`, `ChatAnimation`.
- Alias legacy `bg-[var(--yellow/violet)]` (corners, callouts `/30`, hovers de boutons) : **rendent teal** via `Layout.astro`, hygiène de tokens différée (comme prévu).

**Prochain :** validation visuelle Jonathan, puis **Phase 4 (Nav & archi)** / **Phase 6 (tags)** — nécessitent d'abord de trancher les **décisions nav (3)** et **tags (4)** (voir §Décisions à trancher).

**Commit :** [à committer] feat(design): Phase 3 rollout — illustrations + IconChip + neutre/teal (landings, services, CV)

---

## Etat session 2026-07-02 (suite 4) — Phase 3 : pilote v2 (aération, images carré, cohérence) ✅

**Fait :** pilote Phase 3 sur `about`, `developpeur-web-freelance-geneve`, `consultant-ia/[ville]` + corrections de cohérence site-wide. Build **vert (209 pages)**. Committé/pushé.

- **Formes signature réutilisables** : `src/components/shapes/{DotGrid,Halo,Connector,HalfCircle}.astro` extraites du `/styleguide` (token `--color-accent`, `aria-hidden` + `pointer-events-none`).
- **Illustrations « tech-contexte »** (skill `visual`, typologie `illustration`, sans texte/logo, teal + nuances, **carré 1:1 natif** → zéro bande blanche) : `about` (buste→architecture), `freelance-geneve` (blocs web modulaires), `consultant-ia` (buste→réseau neuronal, partagée par toutes les villes). Webp ~800px (27–68 kB) dans `src/assets/illustrations/` ; masters PNG dans `_masters/`. Rendu `medium` (pas de re-render `high`, choix Jonathan). Intégrées en aside des FAQ (freelance, consultant/[ville]) + grille prose (about), avec `Halo` derrière.
- **⚠️ Service image = no-op** (`astro/assets/services/noop` dans `astro.config.mjs`) : `<Image>` ne redimensionne/convertit PAS → **toujours fournir des webp pré-optimisés** (jamais de gros PNG source importé).
- **Highlights unifiés → wash teal clair** : cause = alias `--yellow`/`--violet` → `--color-accent-strong` (#00A87D foncé). Corrigé les swipes H1 (`bg-[var(--yellow)]`→`bg-[var(--accent)]`, 5 pages dont « Genève ») + highlights inline (`bg-accent-soft` : tarifs, AboutHome, portfolio). Swipes sur sections sombres = teal @50% **conservés** (wash clair invisible sur sombre).
- **Icônes unifiées → `src/components/IconChip.astro`** (carré, `bg-accent` + icône noire ; variantes `accent`/`muted`/`dark`, tailles `md`/`lg`). Emoji-chips tués (différenciants 🇨🇭💰📊🧩 → `ri-*`). Chips jaunes/violets-sans-`text-white`/cyan normalisés en teal sur pages IA/pilote. Styleguide resync (exemple `rounded-full` → `IconChip`). ⚠️ `ri-money-franc-circle-line` **n'existe pas** dans la version Remix chargée → utiliser `ri-price-tag-3-line`.

**Prochain (Phase 3 rollout) :** `consultant-ia/index` (image+aside), `metiers/[metier]`, `developpement-web/[ville]` (images carré) ; puis `services/*` + composants CV → `IconChip` (retirer violet-sans-white, `bg-green-500`, cyan restants) + parité highlights. `scenarios.ts` emoji (constellation home) optionnel.

**Commit :** [643f592] feat(design): Phase 3 pilote — aération, illustrations carré & cohérence (highlights + icônes)

---

## Etat session 2026-07-02 (suite 3) — Phase 2 : titres + highlights unifiés + fix H1 invisible ✅

**Fait :** échelle de titres unique appliquée partout + H1 invisible des `/services/*` corrigé. Build **vert (209 pages)**. Exécuté en autonomie (fan-out agents, spec mécanique dans scratchpad `phase2-spec*.md`).

- **Fix H1 invisible `/services/*` (13 pages)** : la règle CSS `.seo-h1` (mono `0.75rem`, `rgba(15,15,15,.5)` = illisible) → **eyebrow lisible** : `font-size:0.8rem`, `font-weight:600`, `color:var(--color-accent-strong)`, `letter-spacing:0.18em` + `text-transform:uppercase`. Le mot-clé reste dans le `<h1>` → **aucune régression SEO**, hero et markup intacts. (Le composant `HeroScenarios.astro` garde son propre `.seo-h1` blanc sur fond sombre — hors périmètre, non touché.)
- **Échelle H1 unifiée → `text-4xl md:text-6xl font-normal tracking-tight`** : familles `font-black lg:7xl` (hermes, consultant-ia index+[ville], developpement-web/[ville], metiers/[metier], developpeur-web-freelance-geneve) et `font-normal` (about, tarifs, Hero home, ContactHero) alignées. Content tier gardé un cran plus petit (`md:5xl`) : BlogHero, MarkdownPost (titre article), CVHero.
- **Échelle H2 de section unifiée → `text-3xl md:text-4xl font-normal tracking-tight`** : `font-normal` (13 services) + `font-black md:5xl` (6 landings) + CTA sombres `font-black md:6xl` → normalisés. H1 de contenu (blog/[slug], guides/[slug], blog/tag) `font-black` → `font-normal tracking-tight`.
- **⚠️ Poids = `font-normal` (400), PAS font-bold.** 1er jet en `font-bold` rejeté par Jonathan (validation visuelle) : « beaucoup trop gras, pas propre, plus fin ». Correctif : tous les titres touchés (200 occ. `font-bold tracking-tight` → `font-normal tracking-tight`, 31 fichiers) repassés en 400. **Hiérarchie = taille + eyebrows mono, pas le gras.** H3/titres de carte gardent leur poids (petits). Styleguide resync.
- **Chiffres/badges/prix `font-mono font-black` + stats `text-4xl font-black` : PRÉSERVÉS** (display volontaire, on-brand — pas des titres).
- **Bonus défaut corrigé** : `CallToAction.astro` (rendu en bas de CHAQUE article via `MarkdownPost`) contenait un `<h1>` **en anglais** (« Let's start designing your project ») → double-H1 + langue KO. Passé en `<h2 font-bold>` FR on-brand + sous-titre FR.
- **Highlights** : la majorité rendaient déjà en teal via alias Phase 1a (`var(--accent)`=wash, `var(--yellow)`=teal foncé). Corrigés les solides à faible contraste : tarifs `<span>Tarifs</span>` et tag `#{tag}` `bg-[var(--yellow)]`/`bg-[var(--accent)]` → `bg-accent-soft ... rounded-sm`.

**Piège résolu :** le H1 réel des `/services/*` n'est plus invisible (eyebrow teal visible) sans casser le SEO ni la structure brutaliste.

**Validation visuelle : FAITE** (Jonathan, 2026-07-02) — titres repassés en `font-normal` à sa demande. **Reste (mineur, non urgent) :** neutres gris hardcodés d'articles/PDF (`#0f172a`, `#1a1a1a`…) à migrer vers `--color-ink`/`--color-muted`. Alias legacy de `Layout.astro` encore en place (retrait quand `var(--blue/--yellow/--violet)` migrés).

**Prochain :** **Phase 3 — aération & images** (formes signature teal du styleguide + illustrations sur les landings « mur de texte »). Confirmer décisions nav (3) + tags (4) avant Phases 4 & 6.

**Commit Phase 2 :** [à committer] feat(design): échelle titres unifiée + fix H1 invisible /services (Phase 2)

---

## Etat session 2026-07-02 (suite 2) — Phase 1b : purge des couleurs rogue ✅

**Fait :** remplacement de tous les hex/rgba hors-charte par les tokens, sur le runtime (composants, pages, SVG, data). Build **vert (209 pages)**.

- **SVG décoratifs recolorés** → teal `#00D9A3` : `pink-star` (#F3ABCB), `red-star` (#FF6258), `hero-content` (#F3ABCB), `blue-star-card` (#BAE6FF), `idea` (#FFDC58), `services/research` (#FFDC58), `services/ui` (#FF6258), `arrow-hero`/`arrow-2`/`arrow-3` (stroke #dca3ef).
- **CoutDormantCalculateur** : header/total #FFDC58 → `bg-accent`, panels #FEFFF0 → `bg-panel`, CTA #BAE6FF → `bg-accent-soft`, focus #7C3AED → accent.
- **GeoZonesStrip** + **services.astro** (styles inline) : fonds crème → `--color-bg`, highlights jaune → `--color-accent-soft`, chips/CTA bleu/jaune → `--color-accent` / hover `--color-accent-strong`, `rgba(186,230,255,.4)` → accent-soft.
- **Nœuds/dégradés interactifs** (HeroScenarios, ScenarioNode, scenarios.ts, Character, ScenarioBubble, ServicesCTA, ReadingProgress, ConversationModal, checklist-commerce) : bleu `#0096FF`/`rgba(0,150,255)` → teal `#00D9A3`/`rgba(0,217,163)` ; magenta `#A300D9`/`rgba(163,0,217)` → teal-strong `#00A87D`/`rgba(0,168,125)`. Échelle de nœuds : web `#00D9A3`, auto `#00B88A`, validation `#00A87D` (3 teals distincts). Doublon `#7EECD3` → `var(--color-accent)`.
- **Fonds décoratifs** : `BackgroundGlitchGrid` rouge `rgba(239,68,68)` → teal ; `BackgroundCircuitBoard` cyan `rgba(34,211,238)` → teal.
- **NotesAnimation** : #FFFEF5 → `bg-surface`, corner boxes → `bg-accent`, #F5F0DC → `bg-panel`.
- **cv.astro** confettis : magenta/noir retirés (teals + ink). **PostCard** #FBFBFB → `bg-surface`. **about.astro** highlight #80f0d0 → `bg-accent-soft`. **devis-client** `--violet` magenta → teal.
- **Composants morts supprimés** : `Works.astro`, `Reviews.astro`, `Service.astro` (boilerplate template EN, 0 import confirmé). ⚠️ `CallToAction.astro` **conservé** (importé par `MarkdownPost.astro` — l'audit initial le disait mort à tort).

**Rouges sémantiques CONSERVÉS** (fonctionnels, pas décoratifs) : box « reporté » du devis client (`#EF4444`), barre de score checklist (`#ef4444`).

**Reste (Phase 2+) :** quelques `color: #0f172a` / gris d'article (`#1a1a1a`, `#141413`, `#e5e5e5`) encore hardcodés dans les templates d'article/PDF — neutres, à migrer vers `--color-ink`/`--color-muted` en Phase 2 (non urgents). Retirer ensuite les alias legacy de `Layout.astro` une fois les `var(--blue/--yellow/--violet)` migrés vers `bg-accent`/etc.

**Prochain :** validation visuelle Jonathan (`/styleguide` + pages) → **Phase 2 (titres + surlignage unifiés** + fix H1 invisible `/services/*`). Confirmer nav (3) + tags (4).

**Commit Phase 1a+1b :** [à committer] feat(design): fondation tokens mono-teal + purge couleurs rogue

---

## Etat session 2026-07-02 (suite) — Phase 1a : fondation design ✅

**Décidé :** Palette = **teal mono-accent `#00D9A3` + neutres warm** (magenta + roses retirés).

**Fait :**
- **Tokens canoniques** dans `src/styles/global.css` (bloc `@theme` Tailwind v4) : neutres warm (`--color-bg #F5F4F0`, `--color-surface`, `--color-panel`, `--color-ink #14161A`, `--color-muted`, `--color-hairline`, `--color-dark`), accent unique (`--color-accent`, `--color-accent-strong`, `--color-accent-soft`), `--font-sans` (Plus Jakarta Sans). Génère les utilitaires `bg-accent`, `text-ink`, `bg-panel`, etc.
- **Alias legacy** dans `Layout.astro :root` : `--blue`→accent, `--yellow`/`--violet`→accent-strong (magenta retiré), `--accent`→wash teal, `--orange`/`--cyan`→accent (dépréciés). ⇒ **magenta disparu du site** via alias, 0 composant touché. `theme-color` meta → `#F5F4F0`. Body font → `var(--font-sans)`.
- **Page `/styleguide` live créée** (`src/pages/styleguide.astro`, noindex) : palette, alias, couleurs retirées, échelle typo cible, surlignage unique, boutons, cartes, formes signature (dot-grid/halo/connecteur/demi-cercle), section sombre.
- Build **vert (209 pages)**.

**Prochain :**
1. Validation visuelle de `/styleguide` par Jonathan (npm run dev → /styleguide).
2. **Phase 1b — purge** : remplacer les hex rogue hardcodés par les tokens (`CoutDormantCalculateur` #FFDC58/#BAE6FF/#FEFFF0, `GeoZonesStrip`, `services.astro`, `BackgroundGlitchGrid` #EF4444, doublons `#80f0d0`/`#7EECD3`), recolorer les SVG roses (pink-star, arrow-*), supprimer composants morts EN.
3. **Phase 2 — titres + highlights** : appliquer l'échelle typo unique + surlignage wash teal partout (résout les 5 familles de H1 + fix le H1 invisible des `/services/*`).
4. Confirmer décisions **nav (3)** et **tags (4)** avant Phases 4 & 6.

**Pièges Phase 1b/2 :** le H1 réel des `/services/*` est un `seo-h1` invisible (mono gris 12px) + titre visuel dans un `<p>` → à corriger sans casser le SEO (garder un vrai H1 visible). Ne pas toucher la structure brutaliste (bordures/ombres) : seule la couleur s'unifie.

---

## Preuves / réalisations — map preuve → page (fournies par Jonathan 2026-07-02)

**Règle : chaque preuve va sur la page dont le sujet correspond. Pas de preuve SEO sur une page IA, etc.**

| Preuve | Contenu | Page(s) cible(s) |
|--------|---------|------------------|
| **Léo Lecureux** (SEO local) | De zéro au Top 1 Google — juriste restauration Genève. Récit détaillé UNIQUEMENT sur le portfolio ; ailleurs accroche + lien. Chiffre canonique à figer (⚠️ aujourd'hui 4 métriques / 2 durées incohérentes). | **SEO/dev seulement** : `/services/referencement-local`, `/developpeur-web-freelance-geneve`, `about`, portfolio. **JAMAIS** sur automatisation/IA. |
| **Barber Concept** (automatisation) | Système auto de réponse aux avis Google respectant tone of voice + branding Barber Concept ; répond automatiquement ; **rapport mensuel** pour les dirigeants (avis classés par note + par emplacement, détection des employés cités). Tourne en autonomie. | `/services/automatisation` (+ éventuellement page IA/consultant-ia, `gestion-fiche-google`). |
| **App CVP** (mobile) | Appli de **compta interne** pour un camp de vacances (« grandes vacances ») : photo d'un ticket de caisse → ajout → compta quasi-auto accessible sur mobile, reliée aux infos du camp. Remplace une gestion papier. *Bientôt fini — affichable.* | `/services/developpement-application-mobile`, portfolio, home. |
| **App ludothèques Ville de Genève** (gestion interne) | Logiciel de centralisation : infos avant éparpillées (Excel, autre Excel, drive, Google) → un seul outil. Gain de temps sur la gestion interne. | `/services/outils-sur-mesure`, `/services/developpement-mvp`, portfolio, home. |

> Note : ces preuves peuvent devenir de vraies entrées portfolio (`src/content/portfolio/`). À arbitrer avec Jonathan lors de la phase contenu.

---

## Etat session 2026-07-02 — Audit complet (4 agents //) + plan phasé

**Fait :**
- Méga-exploration READ-ONLY en 4 agents parallèles : thème/branding, cohérence par page, UX/navigation, pages tags + preuve Lecureux. Aucun fichier modifié.
- **Découverte centrale : rebrand inachevé.** Le site est passé de néo-brutaliste (crème/bleu ciel/jaune) → « Lab scientifique » (vert/magenta), mais à moitié : variables CSS mensongères + couleurs legacy en dur partout.
- Diagnostic présenté à Jonathan. 4 décisions posées (AskUserQuestion) — **pas encore répondues** (parti clavier).

**Prochain (reprise) :**
1. Récupérer les réponses aux 4 décisions (voir §Décisions à trancher). Défauts recommandés notés ci-dessous — à confirmer.
2. Démarrer **Phase 1 (Fondation design)** une fois la direction palette validée.
3. Avant Phase « pages tags » : Jonathan vérifie le statut d'indexation réel des URLs `/blog/tag/*` dans GSC (elles sont `noindex` → enrichir sans réindexer = inutile).
4. Data à fournir par Jonathan : **chiffre-preuve canonique Lecureux** (métrique + durée uniques à graver partout).

**Pièges :**
- Les variables `--blue` = vert `#00D9A3` et `--yellow` = vert foncé `#00A87D` (noms mensongers, vestige brutaliste). Le renommage touche des **centaines** d'usages `bg-[var(--blue)]` → chantier mécanique à faire proprement (grep exhaustif, pas de raté).
- Tailwind v4 **sans bloc `@theme`** → aucune couleur en classe utilitaire native, tout en `bg-[var(--x)]` ou hex arbitraires → source permanente de couleurs rogue.
- Pages tags = **`noindex, follow` + exclues du sitemap** (`astro.config.mjs`). NE PAS enrichir avant de trancher l'indexation dans GSC.
- Tags **fragmentés** (`suisse-romande`/`suisse romande`/`suisse`, `PME`/`pme`, `visibilité`/`visibilite`) → normaliser AVANT enrichissement.
- Cannibalisation : `automatisation` / `suisse-romande` / `seo` (les 3 tags cités par Jonathan) doublonnent les hubs/piliers → **garder noindex**. Candidats sûrs : `google-my-business`, `geo`, `application mobile`.
- Argument Lecureux : pas sur-utilisé en nombre mais **incohérent** — 4 métriques (Top 1 / 20 400 impressions / ~10 leads / « des clients ») et 2 durées (4 vs 5 mois).

**Commit :** [à committer] docs(design): audit + plan polish/design-system

---

## Constats d'audit (détail)

### Thème / palette
- **Palette RÉELLE** : `--main-bg #FAFAFA` (+ doublon crème `#FEFFF0`), `--text #0F172A`, `--blue #00D9A3` (teal, canonique), `--yellow #00A87D` (vert foncé = le « turquoise mystère », état hover), `--violet #A300D9` (magenta), `--accent rgba(163,0,217,.35)`, `--orange`/`--cyan` déclarés quasi-morts.
- **Roses hors palette figés dans SVG** : `#F3ABCB` (pink-star, hero-content), `#dca3ef` (flèches arrow-*). Résidus brutalistes.
- **Couleurs rogue à purger** : `#FFDC58` (10×), `#BAE6FF` (6×), `#FEFFF0` (7×) dans `CoutDormantCalculateur`, `GeoZonesStrip`, `services.astro`, star/arrow SVG ; rouge `#EF4444` dans `BackgroundGlitchGrid` ; doublons teal `#80f0d0` (about), `#7EECD3` (ConversationModal).
- **Typo incohérente** : styleguide.md + CLAUDE.md disent **Space Grotesk** ; le code charge **Plus Jakarta Sans** (+ Komigo3D pour « Le Lab »). Space Grotesk chargée nulle part.
- **Pas de page `/styleguide` live** (seulement `docs/styleguide.md` désynchronisé).
- Bon point : structure brutaliste (bordures noires, ombres stamp, corner boxes) **cohérente**. C'est la couleur le problème, pas la structure.

### Cohérence par page
- **5 familles de H1 concurrentes** : `font-normal` fin (home/about/tarifs) → `font-black 7xl` (consultant-ia/hermes/villes/métiers) → cas où le H1 réel des `/services/*` est **invisible** (mono gris 12px, titre visuel dans un `<p>`).
- **Anarchie des highlights** : flèche SVG / `var(--yellow)` / `var(--accent)` magenta / `#80f0d0` hardcodé.
- **2 régimes d'illustration** : `/services/*` surchargés de backgrounds animés ; landings à fort trafic (freelance-genève, consultant-ia, villes, métiers) + tarifs + contact = **0 image**.
- Pages « mur de texte » à prioriser : `about`, `developpeur-web-freelance-geneve`, `consultant-ia`, `metiers/[metier]`, `developpement-web/[ville]`, `hermes`.
- Composants morts EN à supprimer : `Works.astro`, `Reviews.astro`, `Service.astro`, `CallToAction.astro`.

### Navigation / UX (data-driven `src/data/navigation.ts`)
- **P1 critique** — « Solutions » vs « Consultant IA » se chevauchent (Automatisation/Intégration/Formation sont des `/services/*` mais rangés sous Consultant IA).
- **P2 critique** — 4 mots pour une chose : menu « Solutions » / URL `/services` / title « Services » / home « Mes expertises » / footer « Services ».
- **P3 majeur** — Refonte de site + Validation d'idée = services commerciaux **invisibles** dans la nav.
- **P4 majeur** — menu Solutions mélange offres + cibles techno + pages géo frontalières.
- **P5 majeur** — silo IA mal desservi : pillar `/guides/…` orphelin, hub `/guides` **404 depuis son propre breadcrumb**, footer sans silo IA.
- **P7 moyen** — 3 cartes services de la home pointent toutes vers `/services` générique.
- **P8 moyen** — hub `/outils` (lead-magnets) jamais mis en avant.
- IA cible proposée : 2 pôles « Sites & Apps » + « IA & Automatisation » + Réalisations/Tarifs/Ressources ; géo + Régions IA → footer crawlable enrichi.

### Pages tags
- `src/pages/blog/tag/[tag].astro` : `getStaticPaths` sans normalisation, contenu = title « Articles sur {tag} » + H1 idem + listing PostCard (thin), **noindex + hors sitemap**.
- Candidats enrichissables (cluster net, pas de hub concurrent) : `google-my-business`, `geo`, `application mobile`. À garder noindex : `automatisation`, `suisse-romande`, `seo`, `pme`, `agent-ia`.

### Preuve Lecureux
- Canonique = `content/portfolio/leo-lecureux-seo.md`. Reprises incohérentes : `about.astro` (« moins de 4 mois »), `developpeur-web-freelance-geneve` (« Top 1 / 5 mois »), `visibilite-site-internet-2026` (« 20 400 impressions »), briefs archivés (« ~10 leads / 4-5 mois »).
- Reco : figer 1 couple métrique/durée, récit détaillé sur le portfolio uniquement, ailleurs accroche + lien.

---

## Plan de chantier (phasé — fondation d'abord)

- **Phase 1 — Fondation design** : renommer les variables en noms sémantiques, créer bloc `@theme` Tailwind v4 (couleurs → classes utilitaires), page `/styleguide` live noindex, resync `docs/styleguide.md` + `CLAUDE.md` (typo), purge couleurs rogue + composants morts.
- **Phase 2 — Système titres + highlights** : 1 échelle typo, 1 méthode de highlight, appliquées partout.
- **Phase 3 — Aération & images** : système de formes/illustrations on-brand (connecteurs, dot-grids, halos teal) + illustrations sur les landings « mur de texte ».
- **Phase 4 — Nav & archi** : renommages, remontée Refonte/Validation, hub `/guides`, footer enrichi, cartes home re-routées.
- **Phase 5 — Rationalisation Lecureux** : chiffre canonique.
- **Phase 6 — Pages tags** : normalisation + (selon GSC) enrichir 2-3 candidats sûrs.

---

## Décisions à trancher (4) — défauts recommandés

1. **Palette** — *recommandé : teal mono-accent `#00D9A3` + neutres warm* (aligné marque perso jonlabs, le plus pro ; retire magenta + roses). Alt : teal+magenta duo / teal + 1 accent chaud.
2. **Illustrations** — *recommandé : formes CSS/SVG on-brand comme base* (0 API, cohérent, performant), + option illos générées ciblées sur 4-5 pages clés ensuite.
3. **Nav** — *recommandé : refonte complète* (renommage 2 pôles + remontée Refonte/Validation + hub /guides + footer enrichi + cartes home re-routées ; résout P1→P8).
4. **Pages tags** — *recommandé : vérifier GSC d'abord* (elles sont noindex), puis normaliser, puis enrichir uniquement les candidats sûrs.

## Carte du code
> Mise à jour : 2026-07-19 (suite — migration spacing site-wide bouclée)

| Fichier | Rôle |
|---------|------|
| `src/styles/blueprint.css` (`.co-root, .co-chrome`) | **Source de vérité espacement (migration bouclée 19.07)** — échelle section (`--sec-pad-y/x`, `--space-eyebrow`, `--space-title-lead`, `--space-block`, `--space-subsection`=64px) **+ 5 tokens padding composant** (`--pad-card/panel/encart/chip/pill`). **Tout l'espacement des pages/composants `.co-root` en dérive — 0 valeur de section en dur. Ne résout que sous `.co-root`/`.co-chrome`.** |
| `public/images/blog/{slug}.webp` (×48) | **Covers illustrées semi-concrètes (19.07)** — statue N&B + ancre concrète + accent teal, sans texte, 16:9. Générées via skill `visual` (gpt-image-2, 1536×1024 → center-crop 16:9). Nom = slug, écrase l'ancienne cover texte, `image.url` frontmatter inchangé. |
| `src/data/navigation.ts` (`ctaContact`) | **CTA header (19.07)** — `label: 'Démarrer mon projet'` (ex-« Contact »), la flèche `→` ajoutée par `Header.astro`. (+ IA du menu Phase 4, exports géo.) |
| `src/pages/tarifs.astro` (tableau `packages`) | **CTA packs (19.07)** — champ `cta` par pack (« Lancer mon site » / « Devenir visible sur Google » / « Construire mon autorité »), remplace le ternaire générique. |
| `src/pages/blog/index.astro` + `src/components/blog/BlogFilters.astro` | **Recherche remontée (19.07)** — input `#blog-search` sous le hero (nouvelle `.bl-searchsec`), chips catégories seules dans BlogFilters au-dessus de la grille, featured `#bl-feature-section` masqué via JS quand recherche/filtre actif. |
| `src/assets/jonathan-vouilloz.webp` **+** `public/images/jonathan-vouilloz.webp` | **Portrait (15.07)** — recadrage 4:5, 768×960 WebP q88, couleurs brutes (regrade rejeté). **Même image en 2 exemplaires** : `src/assets` sert `Hero` / `AboutHome` (avatar 42px) / `blog/AuthorBio` ; `public/images` sert `schema.ts` → `Person.image`. **Toujours remplacer les deux ensemble.** |
| `src/components/ClientsBanner.astro` | **Bandeau de confiance home (15.07)** — marquee `translateX -50%`, liste `clients` **en dur** (6 noms). Libellés = `client.name` des `.md` portfolio. Écart connu : « Lécureux Conseil » vs `client.name: "Léo Lécureux"`. |
| `src/data/proof-lecureux.ts` | **Source unique preuve Lécureux (Phase 5 ✅, NOUVEAU)** — chiffres **GSC réels** (19.1k imp · 367 clics · 1,9 % · 5 mois), accroche « #1 sur sa niche, 19 000 impressions en 5 mois », `rankClaim`, métier (juriste restauration), « 10+ leads », `stats[]`, `portfolioUrl`. Consommé par referencement-local / dev-freelance / about / CVProjects. **Ne jamais réécrire « Top 1 Google » (pos. moy. réelle 15,3).** |
| `src/styles/global.css` | **Source de vérité tokens** : bloc `@theme` (neutres warm + accent teal), `--font-sans` |
| `src/layouts/Layout.astro` | Alias legacy `:root` (`--blue/--yellow/--violet/--accent` → tokens), charge les fonts |
| `src/pages/styleguide.astro` | **Styleguide LIVE (noindex)** — palette, échelle typo (titres `font-normal`), highlight, formes, chips |
| `src/components/shapes/*.astro` | **Formes signature (Phase 3)** — DotGrid, Halo, Connector, HalfCircle (token-based, décor d'aération) |
| `src/components/IconChip.astro` | **Chip d'icône canonique (Phase 3)** — carré, `accent` (teal, positif/défaut) · `muted` (gris, problème/négatif) · `dark`. Remplace tous les chips faits-main |
| `src/assets/illustrations/*.webp` | Illustrations `visual` carré (about/freelance-geneve/consultant-ia/**metiers-ia/developpement-web**) ; masters PNG dans `_masters/` |
| `src/pages/consultant-ia/index.astro` | Landing pilier IA — illu `consultant-ia.webp` en aside FAQ + IconChip généralisé (rollout) |
| `src/pages/metiers/[metier].astro` (+ `src/data/metiers-ia.ts`) | ×2 pages — illu `metiers-ia.webp`, IconChip, « Pas pour vous » en muted (rollout) |
| `src/pages/developpement-web/[ville].astro` (+ `src/data/villes-frontalieres.ts`) | ×5 pages — illu `developpement-web.webp`, IconChip (rollout) |
| `src/components/cv/*.astro` | CV — section-chips → IconChip, emerald/purple → tokens teal (rollout) |
| `src/pages/services/*.astro` (×13) | Chaque page : hero H1 = eyebrow `.seo-h1` (règle CSS inline), H2 `font-normal` |
| `src/components/services/HeroScenarios.astro` | Hero constellation home ; garde son propre `.seo-h1` blanc sur fond sombre (hors périmètre) |
| `src/components/{Hero,ContactHero,blog/BlogHero,cv/CVHero,MarkdownPost}.astro` | Titres hero/contenu (tous `font-normal tracking-tight`) |
| `src/components/CallToAction.astro` | CTA bas d'article (rendu via MarkdownPost) — H2 FR corrigé |
| `src/data/navigation.ts` | **IA du menu (Phase 4 ✅)** — 2 pôles « Création Web » (/services) + « IA & Automatisation » (/consultant-ia) ; exports `footerZonesWeb`/`footerRegionsIA` (géo sortie du méga-menu) |
| `src/components/Footer.astro` | **Fat footer crawlable (Phase 4 ✅)** — colonnes Création Web + IA & Automatisation + Zones & régions, `lg:grid-cols-7`, dérivé de `mainNav` + exports géo |
| `src/pages/guides/index.astro` | **Hub /guides (Phase 4 ✅, NOUVEAU)** — répare breadcrumb 404 ; grille piliers conditionnelle + « À lire » auto-alimentée (`blog` `category==='automatisation'` + `isPublished`) |
| `src/pages/guides/[slug].astro` | Rendu des piliers (collection `pages`) ; breadcrumb remonte à `/guides` (désormais existant) |
| `src/sample.ts` | `services[]` — 3 cartes home re-routées vers destinations distinctes (Phase 4 ✅, P7) |
| `src/pages/blog/tag/[tag].astro` | Générateur pages tags (thin, noindex) — **Phase 6** |
| `src/content/portfolio/leo-lecureux-seo.md` | Source canonique preuve Lecureux — **Phase 5** |

### Décisions clés
- **Nav = 2 pôles produit** : « Création Web » (/services) + « IA & Automatisation » (/consultant-ia). Menu label ≠ title SEO de page (voulu : le title `/services` reste keyword-rich, pas de régression SEO).
- **Contenu future-dated** : le hub /guides et toute liste dérivée d'articles DOIVENT filtrer `isPublished` — sinon grille vide + liens 404 (release programmée via `pubDate` + cron rebuild). Pattern self-healing à réutiliser partout.
- **Forward-ref menu assumé** : l'item flagship « Mettre en place l'IA en entreprise » → `/guides/{slug}` 404 jusqu'à sa pubDate (12.08), gardé par convention de contenu programmé. « Tous les guides » → `/guides` reste le point d'entrée toujours live.
- **Poids des titres = `font-normal` (400)**, jamais font-bold. Choix Jonathan (validation visuelle Phase 2) : le gras faisait « pas propre ». Hiérarchie = taille + eyebrows mono uppercase. H3/titres de carte gardent leur poids (petits).
- **Échelle typo canonique** : H1 `text-4xl md:text-6xl font-normal tracking-tight` (content tier `md:5xl`), H2 `text-3xl md:text-4xl font-normal tracking-tight`, H3 `text-xl md:text-2xl font-semibold`.
- **Fix H1 invisible `/services/*`** via la règle CSS `.seo-h1` (eyebrow teal), pas via le markup — mot-clé conservé dans le `<h1>`, zéro régression SEO.
- Highlight unique = wash teal (`bg-accent-soft` ou `var(--accent)`). Éviter les fonds solides `var(--yellow)` (contraste).
- Ne PAS toucher la structure brutaliste (bordures/ombres/corner boxes) ni les chiffres/badges `font-mono font-black` (display volontaire).
- **Covers d'article = niveau semi-concret** (ancre concrète + statue en signature), PAS abstrait pur — l'image doit annoncer le sujet au premier coup d'œil (retour Jonathan 19.07). Le niveau **abstrait** reste pour les réseaux/tweets. Les deux vivent dans le skill `visual` (axe de concrétude + routage), on route selon le placement.
- **Espacement = variables `blueprint.css`**, plus de valeurs en dur pour les patterns généraux répétés (padding section, eyebrow→titre, sous-titres). `--space-subsection` porté à 64px pour aérer les sous-titres H3.
