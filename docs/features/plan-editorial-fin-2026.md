# Plan éditorial fin 2026 — systèmes et agents IA

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
| `docs/seo/research-2026-11-19/` | Recherche brute : SERP, concurrents, actu produits, douleurs ICP, inventaire des 49 articles, preuves terrain Hermes (dont relevé VPS), protocole de tests OpenClaw / n8n |
| `.seo-data/` (gitignoré) | Mots-clés DataForSEO (6 493), sélection commerciale, GSC 90 j |
| `docs/seo-context.md` | Règle de cadence du 22.11 au 31.12 ; deviendra `docs/seo/context.md` à la migration |
| `.github/workflows/scheduled-publish.yml` | Rebuild quotidien à 05:00 UTC |
| `src/content/blog/installer-hermes-agent.md` | Article du 22.11, brouillon |
| `src/content/blog/claude-duet-suisse.md` | Article du 24.11, brouillon |
| `project.yaml`, `docs/project/`, `docs/business/` | Début de migration v2, non relu, non commité |

### Decisions cles
- Stratégie « produit d'abord » : le volume est sur les noms d'outils (OpenClaw, Euria, Hermes Agent, Claude Cowork, Grok Bot), pas sur « agent IA PME ».
- Aucun nouvel article « prix agent IA » (5 URLs déjà sur cette intention) ni « installer openclaw » (rôle de la future page `/openclaw`).
- Un article ne lie un article futur qu'à la publication de celui-ci.
- Budget DataForSEO plafonné à 10 $ ; clés dans bws, projet `agents`.
