# Feature — Polish global & design system

> Chantier de fond : uniformiser le style graphique du site (thème, titres, couleurs), casser l'effet « très AI » (mur de texte, peu d'images, peu d'aération), rationaliser l'architecture/navigation, et transformer les pages tags thin en vraies pages — pour un rendu **plus professionnel**.
> **Source ADN visuel marque perso** : skill `visual` (`~/.claude/skills/visual/`) — mono-accent teal `#00D9A3`, fond warm, connecteurs fins, formes arrondies, illustration « collage éditorial ».
> **Statut** : 🔄 EN COURS — Phases 1a + 1b + 2 faites ✅. **Phase 3 : pilote v2 fait ✅** (formes signature + illustrations carré + cohérence highlights/icônes), build vert (209 pages). Reste **Phase 3 rollout** (pages restantes + services/CV). Décisions nav (3) + tags (4) à confirmer avant leurs phases.

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
> Mise à jour : 2026-07-02 (Phase 3 pilote v2)

| Fichier | Rôle |
|---------|------|
| `src/styles/global.css` | **Source de vérité tokens** : bloc `@theme` (neutres warm + accent teal), `--font-sans` |
| `src/layouts/Layout.astro` | Alias legacy `:root` (`--blue/--yellow/--violet/--accent` → tokens), charge les fonts |
| `src/pages/styleguide.astro` | **Styleguide LIVE (noindex)** — palette, échelle typo (titres `font-normal`), highlight, formes, chips |
| `src/components/shapes/*.astro` | **Formes signature (Phase 3)** — DotGrid, Halo, Connector, HalfCircle (token-based, décor d'aération) |
| `src/components/IconChip.astro` | **Chip d'icône canonique (Phase 3)** — carré teal, variantes accent/muted/dark. Une seule norme (remplace 8 variantes + emoji) |
| `src/assets/illustrations/*.webp` | Illustrations `visual` carré (about/freelance-geneve/consultant-ia) ; masters PNG dans `_masters/` |
| `src/pages/services/*.astro` (×13) | Chaque page : hero H1 = eyebrow `.seo-h1` (règle CSS inline), H2 `font-normal` |
| `src/components/services/HeroScenarios.astro` | Hero constellation home ; garde son propre `.seo-h1` blanc sur fond sombre (hors périmètre) |
| `src/components/{Hero,ContactHero,blog/BlogHero,cv/CVHero,MarkdownPost}.astro` | Titres hero/contenu (tous `font-normal tracking-tight`) |
| `src/components/CallToAction.astro` | CTA bas d'article (rendu via MarkdownPost) — H2 FR corrigé |
| `src/data/navigation.ts` | IA du menu (MegaMenu, MobileNavDrawer, Footer) — **à traiter Phase 4** |
| `src/components/Footer.astro` | Footer crawlable (silos IA manquants) — **Phase 4** |
| `src/pages/blog/tag/[tag].astro` | Générateur pages tags (thin, noindex) — **Phase 6** |
| `src/content/portfolio/leo-lecureux-seo.md` | Source canonique preuve Lecureux — **Phase 5** |

### Décisions clés
- **Poids des titres = `font-normal` (400)**, jamais font-bold. Choix Jonathan (validation visuelle Phase 2) : le gras faisait « pas propre ». Hiérarchie = taille + eyebrows mono uppercase. H3/titres de carte gardent leur poids (petits).
- **Échelle typo canonique** : H1 `text-4xl md:text-6xl font-normal tracking-tight` (content tier `md:5xl`), H2 `text-3xl md:text-4xl font-normal tracking-tight`, H3 `text-xl md:text-2xl font-semibold`.
- **Fix H1 invisible `/services/*`** via la règle CSS `.seo-h1` (eyebrow teal), pas via le markup — mot-clé conservé dans le `<h1>`, zéro régression SEO.
- Highlight unique = wash teal (`bg-accent-soft` ou `var(--accent)`). Éviter les fonds solides `var(--yellow)` (contraste).
- Ne PAS toucher la structure brutaliste (bordures/ombres/corner boxes) ni les chiffres/badges `font-mono font-black` (display volontaire).
