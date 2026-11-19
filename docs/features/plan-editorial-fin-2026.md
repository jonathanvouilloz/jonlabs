# Plan éditorial fin 2026 — systèmes et agents IA

## Etat session 2026-11-19 (2)

**Fait :**
- Les 7 commits de la veille poussés (corrections OpenBot, cron quotidien).
- Migration v3 terminée : `docs/brand/` (7 documents, provisoires), `docs/design/system.md` et `moodboard.md`, `visual/presets.yaml` + `visual/refs/` (projection du canon), `docs/seo/context.md`, `competitors.md`, `content-map.md`, `docs/project/readiness.md`, snapshot `.project-cache/content-context.json` compilé.
- `installer-hermes-agent` et `claude-duet-suisse` : sources corrigées, faits Claude Duet revérifiés sur les pages d'Anthropic, covers générées, lint à 0 erreur, `draft: false`, build OK, poussés.
- Outillage réparé hors repo : venv de `generate-images` recréé (Python 3.15), style de base `editorial-collage` ajouté à `init-moodboard`, `pipeline_core.parse_frontmatter` tolère le frontmatter imbriqué.

**Prochain :** mandat de Jonathan du 19.11 : produire en autonomie le maximum d'articles du calendrier, dans l'ordre, avec `content-creator` (mode CLUSTER sur la topical map, le repo est en v3), en commençant par `grok-bot-pme-suisse` (26.11) puis `euria-infomaniak-avis` (28.11). Exclus tant que les tests de première main manquent : `n8n-vs-make-vs-zapier` et les trois articles OpenClaw. Chaque article sort en `draft: false` à sa date du calendrier, faits d'éditeurs revérifiés et datés le jour de la rédaction, cover via le preset `blog-cover`. Avant ou en parallèle : lancer `doc-keeper` pour repointer `CLAUDE.md` et `docs/README.md` vers les chemins v3 (`docs/project/readiness.md`, DOC-001).

**Pieges :**
- `generate-images/cli.py --dry-run` est sans effet en mode single (`--preset`) : l'appel OpenAI part. Le dry-run ne marche qu'avec `--image-spec`.
- Un preset `openai` exige `reference_image` même quand `reference_images` est posé.
- `seo_lint.py` exige `--spec` : pour un article sans spec, passer un fichier `{}`.
- Marque, design et SEO sont `needs_review` : trois décisions de Jonathan ouvertes (BRAND-INPUT-001 à 003 dans `readiness.md`). Tant que le canon `noyau/brand/` n'est pas mis à jour, `docs/brand/` fait foi pour le site.
- Toujours valables : ne pas écrire « hébergé en Suisse / Infomaniak » pour les installations réelles ; aucun test OpenClaw ni n8n de première main (articles des 22, 26, 28, 30.12) ; `grok-bot-pme-suisse` doit nommer les deux produits « OpenBot » ; un article ne lie un article futur qu'à sa sortie.
- La doc Hermes (versions, commandes) de `installer-hermes-agent` date du 19.11 et n'a pas été revérifiée à la seconde passe.
- Modifications hors repo non commitées : skills `generate-images`, `init-moodboard`, `_seo-shared`, et `cerveau/10-Projets/jonlabs/jonlabs-human.md`.

**Commit :** [95eccee] feat(blog): installer-hermes-agent (22.11) et claude-duet-suisse (24.11) prêts, covers et sources corrigées

---

## Etat session 2026-11-19

**Fait :**
- Recherche complète (DataForSEO 3,50 $ sur 10, 76 SERP google.ch, GSC 90 j, concurrents, douleurs ICP, inventaire) et topical map : 20 articles du 22.11 au 30.12, un tous les 2 jours.
- Cadence : cron de rebuild quotidien, règle lundi/vendredi remplacée dans `docs/seo-context.md`.
- Articles `installer-hermes-agent` (22.11) et `claude-duet-suisse` (24.11) écrits, en `draft: true`, sans cover, sans humanizer ni seo-review.
- Corrections d'articles en ligne : OpenBot (homonyme CopilotKit, prix Starter), n8n retiré de l'article VPS, prix d'installation Hermes aligné sur `/tarifs`.
- Relevé du VPS Barber (lecture seule) et protocole de tests OpenClaw / n8n.

**Prochain :** relancer la migration v2 du repo (`/init-all`, mode migrate), interrompue en cours : seuls `project.yaml`, `docs/project/` et `docs/business/` existent, non relus et non commités. Il manque `docs/brand/`, `docs/design/`, moodboard + `visual/presets.yaml`, `docs/seo/context.md`, `competitors.md`, `content-map.md`. Puis passer humanizer, seo-lint et seo-review sur les deux brouillons, générer leurs covers, et les passer en `draft: false` avant le 22.11.

**Pieges :**
- Rien n'est poussé : sans `git push`, le cron reste lundi/vendredi et l'article OpenBot sort le 20.11 sans ses corrections.
- `content-creator` suppose le repo en v2 ; hier il a écrit les articles à la main faute de `project.yaml` et de presets. Ne pas relancer de production avant la fin de la migration.
- `seo_lint.py` ne lit pas le frontmatter imbriqué (`image:`, `faqs:`) : à corriger dans le skill, de façon minimale, avec ses tests.
- Clé OpenAI des images : `~/.claude/skills/generate-images/.env`. Ce qui manquait pour les covers, ce sont les presets, pas la clé.
- Persona de `docs/seo-context.md` antérieur au pivot IA (site web, SEO) : à réaligner pendant la migration.
- Ne pas écrire que les installations sont hébergées en Suisse chez Infomaniak (réel : Hostinger et HostHatch) ; les mentions de `/tarifs`, `/hermes`, `service-sections.ts` et de la fin de `hermes-agent-ia-pme` attendent la décision de Jonathan.
- Aucune expérience OpenClaw de première main : articles OpenClaw aux 26, 28, 30.12, n8n au 22.12, après les tests de Jonathan.
- Deux produits « OpenBot » : Synthetify Labs (openbot.run, celui de l'article) et CopilotKit (open.bot). `grok-bot-pme-suisse` doit nommer les deux.
- Accès SSH `barber` en lecture autorisé par Jonathan le 19.11 ; accord donné pour citer les chiffres du VPS Barber.

**Commit :** [5256dc6] fix(blog): prix d'installation Hermes aligné sur /tarifs (dès CHF 1'500)

---

## Carte du code
> Mise a jour : 2026-11-19

| Fichier | Role |
|---------|------|
| `docs/seo/topical-map-systemes-agents-ia.md` | Plan maître : clusters, calendrier des 20 articles, mini-briefs, maillage, 11 optimisations de pages, garde-fous de cannibalisation |
| `docs/seo/research-2026-11-19/` | Recherche brute : SERP, concurrents, actu produits, douleurs ICP, inventaire des 49 articles, preuves terrain Hermes, protocole de tests OpenClaw / n8n |
| `docs/seo/context.md`, `competitors.md`, `content-map.md` | Contexte SEO v3 lu par le pipeline : situations de recherche, cadence, concurrents et gaps, cibles de lien |
| `docs/brand/` | Marque du site (provisoire) : `proofs.md` liste ce qu'un article a le droit d'affirmer et les interdits |
| `docs/design/moodboard.md`, `visual/presets.yaml`, `visual/refs/` | Covers : presets `blog-cover` et `blog-inline` (openai, sans texte), références projetées du canon |
| `docs/project/readiness.md`, `project.yaml` | État des modules v3, décisions attendues, actions ouvertes |
| `.seo-data/` (gitignoré) | Mots-clés DataForSEO (6 493), sélection commerciale, GSC 90 j |
| `.github/workflows/scheduled-publish.yml` | Rebuild quotidien à 05:00 UTC |
| `src/content/blog/installer-hermes-agent.md` | Article du 22.11, prêt |
| `src/content/blog/claude-duet-suisse.md` | Article du 24.11, prêt ; à mettre à jour dès l'ouverture de Claude Duet en Europe |

### Decisions cles
- Stratégie « produit d'abord » : le volume est sur les noms d'outils (OpenClaw, Euria, Hermes Agent, Claude Cowork, Grok Bot), pas sur « agent IA PME ».
- Aucun nouvel article « prix agent IA » (5 URLs déjà sur cette intention) ni « installer openclaw » (rôle de la future page `/openclaw`).
- Un article ne lie un article futur qu'à la publication de celui-ci.
- Budget DataForSEO plafonné à 10 $ ; clés dans bws, projet `agents`.
- `docs/brand/` et les décisions du repo font foi pour le site tant que le canon `noyau/brand/` décrit l'ancienne offre SEO.
