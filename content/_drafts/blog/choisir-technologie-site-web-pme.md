# Brief SEO : Quelle technologie choisir pour le site web de sa PME en 2026

> Seed brief déposé par `video-spread` (épisode 5 Wildcat — stack technique).
> Angle **business/PME** (dirigeant qui décide quel site faire faire), volontairement **distinct**
> de l'essai Substack (angle maker/technique). Même sujet, même keyword central, titre différent
> pour ne pas cannibaliser. Consommer avec `@article-producer choisir-technologie-site-web-pme`.

## Metadata
- Slug: choisir-technologie-site-web-pme
- Slug rationale: requête business "quelle technologie / quel site pour son entreprise", pas "Astro" (terme maker) qui reste au Substack
- Page type: article
- Module: A (guide/explicatif décisionnel)
- Target word count: 1600-1900
- Primary keyword: quelle technologie pour son site web (entreprise/PME)
- Date: [prochain créneau lundi/vendredi libre — cf. /calendar, règle cadence seo-context.md]
- Persona: Indépendant romand / dirigeant TPE-PME (persona principal seo-context.md) — a un site, connaît WordPress de nom, veut savoir combien ça coûte, si ça vaut le coup, comment les concurrents font. **Non technique.**
- Tonalite: depuis docs/identity.md
- Registre: depuis docs/identity.md
- Categorie: [tech ou web selon taxonomie jonlabs — sujet "site web / performance"]
- Contexte charge depuis: jonlabs/docs/seo-context.md ✓

## Vidéo associée (directive pipeline)
- youtubeId: {{VIDEO_ID}}   ← à poser dans le frontmatter de l'article final (rempli post-upload par /episode-fill)
- Note à seo-enrich : ajouter `youtubeId: "<id>"` au frontmatter → embed vidéo en tête d'article (VideoEmbed, câblé dans src/pages/blog/[slug].astro).
- youtubeTitle (optionnel): Wildcat Ép5 — la stack technique (Astro vs le reste)

## Snippet recommande
> Titre/meta PROPRES à l'article jonlabs (angle PME), DISTINCTS du titre Substack
> ("Quel outil pour un site de contenu en 2026 : Astro"). Même keyword central, formulation business.
- Title: Quelle technologie pour le site de votre PME en 2026 ? (54 car.)
- H1: Quel type de site web choisir pour votre entreprise en 2026 (58 car.)
- Meta description: En 2026, un site lent vous coûte des clients en silence. Comparatif honnête des solutions et la seule question à poser à votre prestataire. (142 car.)

## Snippet variantes
- V2 — Title: Site web d'entreprise : quelle solution choisir en 2026 (53) / Meta: WordPress, Webflow, Framer ou site statique ? Le vrai critère qui décide de votre visibilité Google, expliqué sans jargon. (135)
- V3 — Title: Le bon site web pour votre PME (et pourquoi ça vend) (49) / Meta: Choisir la techno de son site n'est plus une question technique mais business. Ce qui change vos ventes en 2026, prouvé sur un cas réel. (139)

## Keyword Cluster
| Role | Keyword (query brut) | Volume | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| Principal | quelle technologie pour son site web | n/c | Title, H1, meta | "quelle technologie choisir pour votre site" |
| Secondaire | site web rapide entreprise | n/c | H2, body | "un site rapide sur mobile" |
| Secondaire | wordpress vs site statique | n/c | H2, body | "WordPress face au site statique" |
| Secondaire | coût site web PME | n/c | H2, FAQ | "combien coûte vraiment un site" |
| Long-tail | vitesse site web et référencement Google | n/c | Body | "la vitesse pèse désormais sur votre classement" |
| Long-tail | choisir prestataire site web | n/c | Conclusion, FAQ | "la question à poser à votre prestataire" |

## Structure
### Encart « L'essentiel en bref »
Keywords: quelle technologie site web, site rapide entreprise
Contenu: 4-5 bullets qui donnent la réponse tout de suite — (1) coder ne coûte plus rien avec l'IA, le vrai enjeu = quel moteur produit la page la plus rapide ; (2) Google note désormais la réactivité mobile (INP) à l'échelle de tout le domaine ; (3) un site lent perd des positions donc des clients, en silence ; (4) pour un site de contenu/vitrine, le **site statique** gagne par défaut (rapide, sûr, hébergement quasi gratuit, vous possédez vos données) ; (5) vous n'avez pas à comprendre la technique — une seule question à poser à votre prestataire (donnée en fin d'article).

### H2: En 2026, le problème n'est plus « avoir un site » mais « avoir le bon »
Keywords: quelle technologie site web
Contenu: L'IA a fait tomber la barrière technique — n'importe qui sort un site en une après-midi. Le piège pour le dirigeant : la question a changé. Google se fiche de comment le site est construit, il juge ce que voit le visiteur. Réponse directe dans les 3 premières phrases.

### H2: Pourquoi la vitesse mobile décide (une partie de) vos ventes
Keywords: site web rapide entreprise, vitesse site web référencement
Contenu: Core Web Vitals + INP expliqués SANS jargon (le temps que met la page à réagir au clic). 80% des visiteurs sur mobile. Deux faits qui rendent ça sérieux : l'INP est la métrique la plus souvent ratée ; Google agrège à l'échelle du domaine entier → quelques pages lourdes plombent tout le site. Traduction business : positions perdues = trafic perdu = clients perdus.

### H2: Les quatre familles d'outils, vues du côté dirigeant
Keywords: wordpress vs site statique, coût site web
Contenu: Reprendre le comparatif du Substack mais reformulé bénéfice/risque BUSINESS (pas archi technique). Pour chacun : pour qui c'est le bon choix, le coût réel, le risque de dépendance (lock-in).
- **WordPress** : rassurant, universel, imbattable pour publier seul tous les jours ; mais lourd, Core Web Vitals fragiles sans config sérieuse, maintenance.
- **Webflow** : design pro clé en main, SEO de base natif ; mais lock-in et abonnement qui grimpe.
- **Framer** : la plus belle landing, très vite ; mais JavaScript imposé (mauvais pour l'INP), faible pour une vraie stratégie de contenu.
- **Site statique** : rapide par construction, sûr, hébergement quasi gratuit, vous possédez vos données ; la contrepartie "il faut un dev" est levée par l'IA.

### H2: Le choix par défaut pour une PME de contenu — le site statique
Keywords: site web rapide entreprise, site statique PME
Contenu: Pourquoi c'est le meilleur rapport résultat/coût pour une PME : performance native (donc SEO), sécurité (pas de base de données exposée), coût d'hébergement proche de zéro, indépendance (pas de plateforme qui vous tient). Le CMS headless permet au client de publier lui-même sans toucher au code (mentionner que c'est faisable simplement, sans nommer d'outil dev de façon jargonneuse). **Preuve terrain** : cas Wildcat (site réel), déploiement ~1min20.

### H2: Quand un autre choix reste meilleur (tableau de décision)
Keywords: choisir technologie site web
Contenu: Honnêteté (pas de solutionnisme) — tableau simple : publier seul tous les jours sans voir de code → WordPress ; la plus belle landing, peu d'articles → Framer ; no-code propre et tranquille, lock-in accepté → Webflow ; performance + contrôle + coût minimal → statique ; vraie web app / annuaire massif → framework dynamique.

### H2: La seule question à poser à votre prestataire
Keywords: choisir prestataire site web
Contenu: Le geste actionnable pour le dirigeant non technique : "Est-ce qu'il sera rapide sur mobile, et combien il me coûte à faire tourner chaque année ?" Si la réponse hésite → signal d'alarme. Transition naturelle vers le CTA (audit).

### FAQ (4-6 questions, pour Schema + AI Overviews)
- Quel est le meilleur type de site pour une PME en 2026 ?
- WordPress est-il encore un bon choix ?
- Un site rapide améliore-t-il vraiment le référencement Google ?
- Combien coûte l'hébergement d'un site statique ?
- Puis-je gérer mon site moi-même sans développeur ?
- Comment savoir si mon site actuel est trop lent ?

### Conclusion + CTA unique
Récap : coder ne coûte plus rien, choisir le bon moteur oui. Le statique gagne le terrain qui compte (la vitesse mobile). CTA hot.

## Maillage interne (liens sortants)
| Ancre | Cible | Section |
|---|---|---|
| les 15 signes qu'un site web dort | /blog/15-signes-site-web-dort | H2 vitesse/ventes |
| no-code ou développement sur mesure | /blog/no-code-vs-developpement-sur-mesure | H2 les 4 familles |
| créer un site vitrine visible sur Google | /blog/creer-site-vitrine-ia-visibilite-google | H2 choix statique / conclusion |
| notre audit de 50 sites d'indépendants romands | /blog/audit-50-sites-indeps-romands | preuve E-E-A-T (H2 vitesse) |

## Image Briefs
### Cover
- placement: cover
- type: illustration
- subject: le choix d'un moteur de site vu comme un tableau de bord de performance
- description: illustration éditoriale cohérente moodboard jonlabs — vitesse/légèreté d'un site, sans capture d'écran technique. Registre PME, pas "dev".
- alt_text: Choisir la technologie du site web de sa PME en 2026
- aspect_ratio: 16:9

### Image 2 (in-body)
- Tableau de décision "quel outil pour quel besoin" (schéma simple, lisible par un non-technique).

## Matière source (à exploiter) — pipeline video-spread
> Le writer DOIT puiser ici pour la profondeur et l'angle. Ne pas réinventer. Reformuler en registre BUSINESS (le Substack est le registre maker).

**Résumé autosuffisant** (faits clés) :
- L'IA a fait tomber la barrière du code → le critère de choix bascule de "je sais coder ?" à "quel moteur produit la page rendue la plus rapide pour Google ?".
- En 2026 l'INP (réactivité au clic) est passé à poids égal dans les Core Web Vitals ; bon seuil < 200 ms ; c'est une métrique JavaScript.
- Google agrège les Core Web Vitals à l'échelle du **domaine entier** → quelques pages lourdes plombent tout le site.
- Comparatif : WordPress (~40% du web, lourd), Webflow (design pro, lock-in), Framer (JS imposé, mauvais INP), statique/Astro (rapide par construction, ~zéro JS, hébergement quasi gratuit, on possède sa data, CMS headless pour publier).
- Limite du statique : très gros volume (build long) → sinon non pertinent. Cas Wildcat : déploiement ~1min20.
- Périmètre : sites vitrine / contenu / affiliation. Hors e-commerce.

**Sources à lire en intégralité (chemins absolus)** :
- Essai Substack (deep dive, même sujet, angle maker — structure/arguments de référence) : `C:/Users/jojo-/Desktop/apps/bip-jon/ideas/027-wildcat-ep5-stack-technique/productions/substack.md`
- Transcript vidéo final : `C:/Users/jojo-/Desktop/apps/bip-jon/_resources/transcripts/2026-07-10_wildcat-ep5-seo-technique-astro.md`
- Dossier de prépa complet : `C:/Users/jojo-/Desktop/apps/bip-jon/ideas/027-wildcat-ep5-stack-technique/dossier-prep-stack.md`

> Différenciation vs Substack : l'article jonlabs est le **money site canonique**, plus complet (FAQ + Schema.org + maillage interne), et **angle dirigeant PME** (le Substack garde l'angle maker/dev). Le Substack linke vers cet article.

## Sources
[URLs externes citables uniquement — Core Web Vitals / INP : web.dev (à confirmer par seo-sources en YMYL non requis ici, mais dater les faits INP/agrégation domaine).]

## Objectif business
Autorité sur le cluster "site web / performance / choix techno" pour PME romande + capter la requête décisionnelle du dirigeant. Différenciant terrain : cas réel (Wildcat) + prix/coût transparents (gap concurrents). CTA soft vers audit refonte.

## Angle unique / POV
Le choix technique d'un site n'est plus une question de développeur mais une **décision business** : depuis que l'IA écrit le code, le seul critère qui reste est la page rendue, et en 2026 c'est la vitesse mobile (INP) qui tranche — donc le nombre de clients qui vous trouvent.

## CTA cible
- Lead chaud: /services/refonte-site-web — "Obtenir un audit gratuit"
- Lead tiede: /contact — "Discuter de votre projet"
- Nurturing: article suivant du cluster web (ex. no-code-vs-developpement-sur-mesure ou 15-signes-site-web-dort)

## Citations exploitables (GEO)
Aucune citation externe obligatoire — contenu basé sur cas vécu Jon (Wildcat) + faits publics Core Web Vitals/INP à dater. Phrases attribuables si une source web.dev est citée pour l'INP.
