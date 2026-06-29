# Brief SEO : URL canoniques avec Astro — duplicate content et fix

> ⚠️ **Brief généré par le pipeline `video-spread` (bip-jon) — épisode BIP3.** Seed prêt-à-cuire.
> Stage 2 : en session jonlabs, lancer `@article-producer url-canonical-astro`.
>
> ⚠️ **DIVERGENCE PERSONA À TRANCHER AVANT DE CUIRE.** Le contexte jonlabs (`docs/seo-context.md`,
> `docs/identity.md`) cible **strictement le dirigeant PME romand**, et le blog est 100% contenu
> SEO-local / visibilité. Cet article en angle **maker/dev** (choix de Jon) est off-persona et aura
> un maillage interne faible. Deux options dans la section « Angle unique » ci-dessous : (A) maker
> assumé, (B) reframe PME (recommandé pour ce money site). **Choisir A ou B avant `seo-write`.**

## Metadata
- Slug: url-canonical-astro
- Slug rationale: descriptif, entité "url canonical astro", evergreen (pas de date)
- Page type: article
- Module: A (guide explicatif / how-to technique)
- Target word count: 1500-1900
- Primary keyword: url canonical astro
- Date: 2026-06-26
- Persona: ⚠️ maker/dev qui construit un site statique et cherche pourquoi sa page apparaît en double (DIVERGE du persona PME par défaut de jonlabs — voir avertissement en tête)
- Tonalite: direct, pragmatique, sans bullshit (depuis identity.md)
- Registre: tutoiement (default identity.md)
- Categorie: tech
- pubDate cible: prochain créneau mardi/vendredi libre (cf. `/calendar`)
- Contexte charge depuis: jonlabs/docs/seo-context.md ✓ + identity.md ✓
- Banned words (identity.md): crucial, innovant, solutions, digitalisation, écosystème, game-changer, disruptif, etc.

## Vidéo associée (directive pipeline)
- youtubeId: {{VIDEO_ID}}   ← à poser dans le frontmatter de l'article final (rempli post-upload YouTube)
- youtubeTitle: "Redirigez vos pages (canonical) et Design System [BIP3]"
- Note à seo-enrich : ajouter `youtubeId: "<id>"` au frontmatter. La vidéo s'affiche en tête d'article
  via le composant `VideoEmbed` (déjà câblé dans `src/pages/blog/[slug].astro`).

## Snippet recommande
- Title: URL canonical avec Astro : régler le duplicate content (57 car.)
- H1: Pourquoi ta page Astro apparaît en double sur Google (et comment la rendre canonique) (84 car.)
- Meta description: Slash final, http/https, /index.html : pourquoi Astro sert ta page sous plusieurs URL, et le fix en une ligne pour consolider tes signaux SEO. (143 car.)

## Snippet variantes
- (Problème) Title: Ta page Astro existe sous plusieurs URL : le fix (51 car.) / Meta: Une page servie en /page et /page/ divise tes signaux SEO. Voici pourquoi et comment trancher avec trailingSlash.
- (Solution) Title: Trailing slash et canonical Astro : le guide (47 car.) / Meta: Le défaut trailingSlash 'ignore' crée du duplicate content. Comment le régler en une ligne et qui pose vraiment la redirection en SSG.

## Keyword Cluster
| Role | Keyword (query brut) | Volume | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| Principal | url canonical astro | n/c (lancer /seo-keywords si besoin) | Title, H1, intro, meta | les URL canoniques avec Astro |
| Secondaire | trailing slash astro | n/c | H2, body | le trailing slash dans Astro |
| Secondaire | duplicate content astro | n/c | H2, body | le duplicate content sur un site Astro |
| Secondaire | astro trailingslash config | n/c | H2 fix, body | l'option trailingSlash dans astro.config |
| Secondaire | canonical url seo | n/c | intro, body | l'URL canonique |
| Long-tail | page apparait plusieurs fois google | n/c | intro, FAQ | une page qui apparaît sous plusieurs adresses |
| Long-tail | redirection 301 308 site statique | n/c | H2 SSG, FAQ | la redirection 301/308 sur un site statique |
| Long-tail | qui fait la redirection site statique | n/c | H2 SSG | qui applique la redirection en statique |

## Structure
### Encart "L'essentiel en bref" (TLDR, après le H1)
4-5 bullets : le problème (1 page, N URL), canonical = signal pas ordre, fix = redirection 301/308,
en SSG c'est l'hébergeur qui redirige, fix Astro = trailingSlash. Reprendre l'encart de l'essai substack.

### H2: C'est quoi le problème (une page, plusieurs URL)
Keywords: duplicate content astro, canonical url seo
Contenu: réponse directe dans les 3 premières phrases. 4 causes (slash, http/https, www, params/.html). Analogie photocopies.

### H2: La balise canonical est un signal, pas un ordre
Keywords: canonical url seo
Contenu: ce que fait `<link rel="canonical">`, pourquoi Google peut l'ignorer, 301 vs 308.

### H2: En statique, c'est l'hébergeur qui redirige (pas le framework)
Keywords: qui fait la redirection site statique, redirection 301 308 site statique
Contenu: le concept clé. Astro génère le HTML une fois, l'hébergeur (Vercel/Netlify) pose la redirection. Vérifier l'artefact de build.

### H2: Le fix Astro en une ligne (trailingSlash)
Keywords: astro trailingslash config, trailing slash astro
Contenu: bloc code `trailingSlash: 'never'`, le piège du défaut 'ignore', never vs always (s'aligner sur ce que le code génère déjà).

### H2: Diagnostiquer ton site (extensions, GSC, curl)
Keywords: page apparait plusieurs fois google
Contenu: 3 angles (Detailed SEO + Redirect Path / GSC Indexation>Pages / curl ou Claude).

### FAQ (3-4 questions → schema FAQPage)
- C'est quoi la différence entre canonical et redirection ?
- 301 ou 308, lequel choisir ?
- Pourquoi Google montre encore les vieilles URL après mon fix ?
- trailingSlash 'never' ou 'always' ?

### Conclusion + CTA unique

## Maillage interne (liens sortants)
> ⚠️ Maillage faible : aucun article tech/canonical sur jonlabs. Candidats les plus proches (angle visibilité) :
| Ancre | Cible | Section |
|---|---|---|
| visibilité de ton site en 2026 | /blog/visibilite-site-internet-2026 | intro ou conclusion |
| être visible sur Google quand on part de zéro | /blog/0a30joursgooglevisible | intro |
| SEO à l'ère de l'IA (GEO) | /blog/geo-seo-ia | conclusion (si reframe PME) |
> Si l'article reste maker, envisager de créer 1-2 autres articles tech pour bâtir un vrai cluster (sinon orphelin).

## Image Briefs
### Cover
- placement: cover
- type: illustration
- subject: le perso blob jonlabs face à une page web dupliquée en plusieurs fantômes d'URL
- description: blob perplexe (lunettes) devant 5 cartes "page" identiques empilées et décalées, une seule surlignée en turquoise #00D4AA. Fond clair #FEFFF0, style doodle cohérent moodboard.
- alt_text: Une page web servie sous plusieurs URL, illustrant le duplicate content à corriger avec le canonical
- aspect_ratio: 16:9

### Image 2 (in-body, after-h2 "Le fix Astro")
- placement: after-h2:Le fix Astro en une ligne
- type: schema
- subject: chaîne de redirection 308 vers l'URL canonique
- description: schéma simple http/https/slash → 308 → une seule URL canonique. Couleurs marque.
- alt_text: Schéma des redirections 308 convergeant vers une URL canonique unique
- aspect_ratio: 4:3

## Matière source (à exploiter) — exploiter en priorité, ne pas réinventer

**Résumé autosuffisant (faits clés réels, build-in-public Jon) :**
- Cas réel : la home d'un site Astro multilingue apparaissait sous **5 adresses** dans la GSC (http/https, /en, /en/, /fr/).
- Fix posé le 2026-06-13 : `trailingSlash: 'never'` dans `astro.config.mjs` → Vercel pose des **308**.
- Impressions GSC : 78 → 172 → 287 (build-in-public). Fusion progressive observée ~1 semaine après.
- Concept clé : en SSG, le framework ne tourne pas à l'exécution → c'est l'hébergeur qui redirige (artefact `.vercel/output/config.json`).
- "Le curl prouve l'instant T, la GSC confirme dans le temps."
- 301 ≈ 308 pour le SEO (308 préserve la méthode HTTP) ; éviter 302/307.

**Sources à lire en intégralité (chemins absolus) :**
- Essai Substack (deep dive, MÊME sujet, structure/angle de référence) :
  `C:/Users/jojo-/Desktop/apps/bip-jon/projects/wildcat/content/substack/03-wildcat-ep3-substack.md`
- Transcript vidéo final :
  `C:/Users/jojo-/Desktop/apps/bip-jon/_resources/transcripts/2026-06-26_bip3-canonical-design-system.md`
- Doc technique détaillée (diagnostic + fix + checklist) :
  `C:/Users/jojo-/Desktop/apps/bip-jon/projects/wildcat/content/videos/04-wildcat-ep3/trailing-slash-canonical.md`

> Différenciation vs Substack : l'article jonlabs est le **money site canonique**, plus complet (FAQ + Schema.org FAQPage + maillage). Le Substack est un essai POV qui **linke vers cet article** ({{ARTICLE_URL}}).

## Sources
- Cas réel Wildcat (GSC + curl), build-in-public. Pas de source externe citable obligatoire.

## Objectif business
Capter la requête technique maker + asseoir l'autorité E-E-A-T (Jon code vraiment, preuve à l'appui).
⚠️ Off-cluster pour jonlabs (PME). Si reframe PME : nurturing vers les articles visibilité + CTA audit.

## Angle unique / POV
**Option A — maker assumé (choix actuel de Jon) :** le concept caché que les vibe-codeurs ratent —
en site statique, ce n'est pas ton framework qui redirige, c'est ton hébergeur. Tu peux avoir un
canonical parfait et quand même servir 5 URL.

**Option B — reframe PME (recommandé pour ce money site) :** « Ton site multilingue se sabote sur
Google sans que tu le voies. » Même substance technique, mais le H1/intro/conclusion répondent au
dirigeant : pourquoi ça dilue ta visibilité, comment vérifier en 2 min, et que c'est exactement le
genre de détail qu'un prestataire sérieux règle (→ CTA audit). Colle au persona + maille avec les
articles visibilité.

## CTA cible
- Lead chaud: /services/refonte-site-web — "Obtenir un audit gratuit" (surtout si Option B)
- Lead tiede: /contact — "Discuter de votre projet"
- Nurturing: /blog/visibilite-site-internet-2026

## Citations exploitables (GEO)
Aucune source externe — contenu basé sur le cas vécu Jon (build-in-public). Ne pas inventer de citation.
