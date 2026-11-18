# Home orientée confiance et résultat client

> **Statut** : DONE (code) · **Livré** : 2026-11-19 · **Commits** : `1a32983` (base `02f0875`)

## Ce que ça fait
La home met un visage et un chiffre avant la technique : pastille « Salut, c'est Jon. Freelance à Genève. », H1 court, « 20+ projets livrés », puis des études de cas où le résultat client est affiché en grand. Elle s'adresse à un décideur PME qui veut savoir si ça marche chez les autres, pas quelle stack est utilisée.

## Comment ça marche
1. `Hero.astro` : pastille (`.v2-hi`, `/images/jonathan-vouilloz-72.webp`), H1 « Des systèmes IA pour vos équipes. », lead, CTA, ligne `.v2-trust`. Hauteur `calc(90svh - 65px)` (règle `.v2-hero` de `v2.css`, plus la variante mobile) : la bande qui suit dépasse sous le hero.
2. `index.astro`, bande : pour chaque vidéo de `videos`, une miniature YouTube (`hqdefault`, 480x360) puis une capture de site client, en alternance. Les captures viennent des slugs fixés dans `stripCases` (`barber-concept`, `wildcat-muay-thai`, `wisp`, `nooria`) ; leurs dimensions sont lues avec `sharp` au build.
3. Réalisations : titre « Ce que ça a changé chez mes clients. », puis `CaseSpec` par cas.
4. `CaseSpec.astro` : si `data.results.length`, `rows` est vide et les 3 premiers résultats s'affichent (valeur en `dt`, libellé en `dd`, classe `.v2-kv-roi`, chiffre en grand). Sinon : Secteur et Durée seulement. La stack n'est plus jamais affichée.
5. `Faq.astro` : plus de `<details>`, chaque question est un `<h3>` en pilule suivi de sa réponse, tout est visible.
6. « Comment je travaille » + `Steps` ont quitté la home pour `/about` (avant le CTA final). Le bloc Bento s'intitule « Ce que vous obtenez. ».
7. Contenu : `systeme-ia-jonlabs` (10 h gagnées/semaine) et `wildcat-agent-mails` (20'000+ visites en 4 mois), chiffres déclarés par Jonathan le 19.11.2026 ; `barber-hub-automatisation.heroImage` = `/images/portfolio/barber-concept/hero.webp`.

## Carte du code
> Mise à jour : 2026-11-19

| Fichier | Rôle |
|---|---|
| `src/components/v2/Hero.astro` | Pastille photo, H1 raccourci, ligne « 20+ projets livrés » |
| `src/components/v2/CaseSpec.astro` | Fiche de cas : résultats en grand, secteur/durée en repli, plus de stack (partagé) |
| `src/components/v2/Faq.astro` | FAQ sans accordéon, questions en `<h3>` (partagé) |
| `src/pages/index.astro` | Bande alternée (`stripCases`), titres de sections, retrait de `Steps` |
| `src/pages/about.astro` | Accueille « Comment je travaille » + `Steps` |
| `src/styles/v2.css` | `.v2-hi`, `.v2-trust`, `.v2-kv-roi`, hauteur hero, styles FAQ |
| `src/content/portfolio/{systeme-ia-jonlabs,wildcat-agent-mails,barber-hub-automatisation}.md` | Résultats déclarés, nouvelle heroImage |

### Décisions clés
- Résultats d'abord, stack supprimée de la carte — le visiteur cible juge sur l'effet, pas la techno.
- FAQ entièrement ouverte — « personne ne clique » (commentaire du composant). Détail daté → DECISIONS.md.
- Méthode déplacée sur `/about` — la home garde l'essentiel avant le CTA.

## Comment débuguer
- **Par où entrer** : `src/components/v2/CaseSpec.astro` (affichage des résultats), `stripCases` dans `src/pages/index.astro` (bande).
- **Ce qu'on observe** : `npm run build` (122 pages) ; rendu de `/` et `/about` en desktop et mobile.
- **Pannes connues** : carte sans chiffre → `results: []` dans le frontmatter du cas (secteur/durée s'affichent à la place) ; bande sans captures → slug de `stripCases` absent de la collection, ou plus de vidéos que de captures (`shots[i]` indéfini, pas d'alternance) ; build en échec sur la bande → fichier `public{heroImage.url}` introuvable (lu par `sharp`).
- **Pièges** : `CaseSpec` et `Faq` sont partagés (`/portfolio`, `/tarifs`, `ServicePage`, `/contact`, `consultant-ia/[ville]`, `metiers/[metier]`, `developpement-application-mobile/[ville]`) : toute retouche touche ces pages. `getCollection` renvoie dans l'ordre de la collection, pas celui de `stripCases` : l'ordre des captures dans la bande n'est donc pas garanti.

## Configuration
Aucune.

## Tests et vérifications
| Vérif | Commande | Résultat réel |
|---|---|---|
| Build | `npm run build` | passe, 122 pages (rapporté, non relancé) |
| Captures home et `/about`, desktop et mobile | manuel | faites (rapporté) |
| Rendu `/portfolio`, `/tarifs`, pages service, `/contact`, pages ville/métier | — | **non vérifié** |

## Limites et dettes
- Meta description de la home (`pageDescription` dans `index.astro`) : reprend encore l'ancien H1 (« Applications où vos équipes et vos agents IA collaborent… »). À aligner.
- Rendu des pages utilisant `CaseSpec` et `Faq` non vérifié après le changement (grille `.v2-kv-roi`, FAQ ouverte).
- CSS mort : `.v2-faq-list summary:hover span` (plus de `summary`) ; `.v2 .v2-tags` n'est plus utilisé par le Hero.
- Recherche NLWeb : hors feature, tâche dans `cerveau/10-Projets/jonlabs/jonlabs-human.md` (backend à trancher).
