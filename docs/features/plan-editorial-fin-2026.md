# Plan éditorial fin 2026 — systèmes et agents IA

## Etat session 2026-11-19 (3)

**Fait :**
- Vague 1 écrite, relue et commitée en local (non poussée) : `grok-bot-pme-suisse` (26.11, `633140a`), `euria-infomaniak-avis` (28.11, `9922d71`), `chatbot-ia-entreprise-prix` (30.11, `fcab8f6`). Lint à 0 erreur, review éditoriale PASS, covers générées, build OK (125 pages).
- `ia-pragmatique-pme-suisse` : ligne Euria corrigée (prix et lieu faux), `35c5b50`.
- `CLAUDE.md` et `docs/README.md` repointés vers les chemins v3 par `doc-keeper` (`14bacbe`). DOC-001 reste « ouvert » dans `readiness.md`.
- Vague 2 écrite, relue et commitée en local (non poussée) : `assistant-ia-suisse-comparatif` (02.12, `fdac65c`), `claude-entreprise-prix` (04.12, `fc6ce3c`), `agent-vocal-ia-entreprise` (06.12, `c9e9af2`). Lint à 0 erreur, review PASS, covers, build OK.
- Vague 3 écrite, relue et commitée en local (non poussée) : `assistant-ia-interne-entreprise` (08.12, `4f75516`), `agent-ia-bexio` (12.12, `0359040`), et `agence-ia-suisse-romande` (10.12, `8e8a2fd`) laissé en `draft: true` jusqu'à la relecture de Jonathan (il nomme douze prestataires concurrents).
- `agent-ia-bexio` recentré sur « agent ia bexio » : « bexio api » est une recherche de développeurs (gatekeeper needs_review sur le mot-clé d'origine), il devient un H2 secondaire.
- Comparatif corrigé (`82b25ca`) : Apertus 1.5 est listé dans l'API d'Infomaniak, page de prix relue en texte brut.
- Vague 4 écrite, relue et commitée en local : `charte-ia-entreprise-modele` (14.12, `f1b6d41`), `ia-locale-entreprise` (16.12, `d1dd53b`), `creer-agent-ia-ou-faire-faire` (18.12, `1137c79`).
- Vague 5 : `serveur-mcp-entreprise` (24.12, `e3eee3d`) écrit et commité. `prestataire-ia-suisse-ou-francais` (20.12) NON écrit : gatekeeper needs_review (aucun volume mesuré, aucune preuve de première main, risque de conseil fiscal), en attente de Jonathan.
- Corrections d'articles en ligne : `ia-nlpd-conformite-suisse` (registre des traitements, exceptions de l'art. 12 al. 5 LPD, `c849f15`) ; `integrer-agent-ia-outils-existants` (gouvernance du MCP, `d39e0a2`).
- Bilan : 13 articles commités du 26.11 au 24.12 (12 en `draft: false`, `agence-ia-suisse-romande` en `draft: true`), sur 14 dans le périmètre. Restent hors périmètre : n8n (22.12) et les trois OpenClaw (26, 28, 30.12), faute de tests de première main. Rien n'est poussé.

**Chaîne de production utilisée** (la session orchestre elle-même, `content-creator` n'est pas appelé) : un sous-agent Sonnet par brief → `brief-critic` à l'aveugle, 2 révisions max → `finalize_spec.py` → `article-producer` en Opus → relecture de l'orchestrateur contre le registre de claims → build → un commit par article. Vagues de trois.

**Prochain :** pousser avant le 26.11 (tâche de Jonathan). Ensuite, à chaque date de sortie : relire les prix et statuts de l'article du jour sur les pages des éditeurs, puis poser les liens retour (liste ci-dessous). Décisions de Jonathan attendues : relecture de `agence-ia-suisse-romande` et de la charte, sort de `prestataire-ia-suisse-ou-francais`, tests n8n et OpenClaw pour les quatre articles de fin décembre. Lancer `doc-keeper` en mode feature sur ce plan éditorial.

**À faire à date :**
- 26.11 : poser le lien retour vers `grok-bot-pme-suisse` dans `openbot-souverainete-self-hosted`.
- 28.11 : poser le lien retour vers `euria-infomaniak-avis` dans `ia-nlpd-conformite-suisse` ; relire les prix kSuite Pro et my kSuite+ et l'accès sans compte.
- 30.11 : poser le lien retour vers `chatbot-ia-entreprise-prix` dans `automatiser-support-client-ia` ; relire les prix Tidio, Chatbase, Intercom, Swisscom.
- 02.12 : à la sortie du comparatif, ajouter son lien dans `euria-infomaniak-avis` (remplacer « je prépare un comparatif » dans la FAQ), `grok-bot-pme-suisse`, `claude-duet-suisse`. Relire le prix Copilot (promotion jusqu'au 31.12.2026) ; compléter la ligne ChatGPT si Jonathan a lu les pages d'OpenAI, sinon elle reste « non relevé ».
- 04.12 : à la sortie de `claude-entreprise-prix`, ajouter son lien dans `claude-duet-suisse` et dans le comparatif (remplacer « un article consacré aux offres de Claude suivra »). Relire la page de prix d'Anthropic.
- 06.12 : à la sortie de `agent-vocal-ia-entreprise`, ajouter son lien dans `chatbot-ia-entreprise-prix` et `agent-ia-entreprise-cas-usage`. Relire les prix Retell, Vapi, ElevenLabs.
- 08.12 : à la sortie de `assistant-ia-interne-entreprise`, ajouter son lien dans le comparatif et dans `automatiser-emails-documents-ia`.
- 10.12 : `agence-ia-suisse-romande` ne sort que si Jonathan l'a relu et passé en `draft: false` ; relire alors les pages des douze acteurs (prix, citations) et poser le lien retour dans `consultant-ia-c-est-quoi`.
- 12.12 : avant la sortie de `agent-ia-bexio`, les phrases de `/metiers/ia-fiduciaire` (« sur lesquels je travaille le plus », « conforme nLPD ») doivent être tranchées par Jonathan : l'article dit qu'aucune intégration Bexio n'existe et renvoie vers cette page. Relire la page de prix de Bexio. Lien retour dans `automatiser-facturation-relances-ia`.
- 14.12 : à la sortie de `charte-ia-entreprise-modele` (après relecture de Jonathan), lien retour dans `ia-nlpd-conformite-suisse` et `adoption-ia-equipe-change-management`.
- 18.12 : à la sortie de `creer-agent-ia-ou-faire-faire`, lien retour dans `implementer-agent-ia-etapes`. Si `agence-ia-suisse-romande` est publié, passer le passage « agence » à la variante A du brief (deux prix publiés cités, lien vers le relevé). Nuancer dans `consultant-ia-c-est-quoi` « le freelance est presque toujours le bon calibre ».
- 24.12 : à la sortie de `serveur-mcp-entreprise`, relire le statut des serveurs Gmail, Microsoft et HubSpot et la version de la spécification ; lien retour dans `integrer-agent-ia-outils-existants` et `agent-ia-bexio`.
- 16.12 : lien retour vers `ia-locale-entreprise` aussi dans `assistant-ia-interne-entreprise` et `euria-infomaniak-avis`. À la sortie de `ia-locale-entreprise`, remplacer « je traiterai ce cas dans un prochain article » (section Apertus du comparatif) par le lien.

**Contradictions du site relevées pendant la production, non corrigées (décision de Jonathan) :**
- TVA transfrontalière : `/consultant-ia/annemasse` et `/gaillard` (`src/data/villes-suisse-ia.ts`, FAQ) écrivent « facturer en EUR au taux du jour, TVA française appliquée » ; `/tarifs` écrit « hors TVA (exonéré) » ; `pricing.ts` « pas de prix en EUR ». Le BOFiP relu le 19.11 décrit l'autoliquidation par le client français.
- « Hébergé en Suisse / Infomaniak » : `/tarifs`, `pricing.ts`, `/hermes`, `/consultant-ia`, pages Annemasse et Gaillard, `prix-agent-ia-automatisation-suisse`.
- Bexio : `/metiers/ia-fiduciaire` (« sur lesquels je travaille le plus », « conforme nLPD ») et `automatiser-facturation-relances-ia` (« pratique terrain »), non couverts par `proofs.md`.
- Prix : fourchettes « CHF 2'500 à 15'000 » et « CHF 60 à 120 par heure » dans quatre articles, absentes de `/tarifs` ; « suivi mensuel » sans montant sur `/tarifs`.
- `/services/formation-ia-equipe` : « exemple concret d'une PME de 12 personnes », non couvert par `proofs.md`.
- `meilleurs-vps-hermes-agent-suisse` : « 8 Go et plus pour un modèle local », d'après des sources tierces.
- `proofs.md` ne mentionne ni Barnaby ni les serveurs MCP du système interne et d'Inkmesh, que le portfolio publie.

**Tests Euria attendus de Jonathan** (sans eux, l'article reste « avis sur documentation, non testé ») :
1. Euria sans compte puis avec my kSuite gratuit : quota réellement atteint, mode Expert, limite de 2 projets.
2. Cinq tâches de PME : mail de devis, réponse à un avis négatif, résumé d'un PDF de 20 pages, traduction FR-DE d'un contrat, question sur 3 documents.
3. Transcription d'un vocal et d'une réunion de 20 minutes.
4. Fichiers proches des limites (20 Mo, 100 Mo) : PDF scanné, tableur, .docx.
5. Euria dans Mail et dans kDrive (offre Business) : aucun envoi automatique, portée de la recherche dans les fichiers.
6. Données : mode éphémère, suppression, historique ; lire le contrat de sous-traitance kSuite Pro.
7. Lui demander de créer un rappel, d'écrire dans un tableur ou d'envoyer un mail, pour constater qu'il n'agit pas.
8. Noter les noms de modèles affichés dans l'interface.

**Tests agent vocal attendus de Jonathan** (sans eux, l'article reste « analyse de documentation, non testé ») :
1. Monter un agent d'accueil sur Retell, Vapi ou ElevenLabs avec un numéro et passer 20 à 30 appels réels : horaires, prise de message, rendez-vous, nom épelé, numéro dicté, bruit, interruption, urgence à basculer vers un humain.
2. Obtenir un numéro +41 : justificatifs, délais, renvoi depuis un fixe suisse, coût réel.
3. Écouter les voix françaises : nombres (septante, nonante), noms de lieux et de personnes romands.
4. Relever latence, taux de compréhension et facture réelle sur 900 minutes.
5. Lieu de traitement, durée de conservation et sous-traitants de l'audio : dans la documentation ou par écrit à l'éditeur.
6. Une intégration agenda, temps de mise en place chronométré.

**Pieges :**
- La topical map additionne parfois plusieurs requêtes : « claude entreprise » fait 90 CH (le 4 400 CH est « claude cowork »), « agent vocal ia » 10 CH, « standard téléphonique ia » 0 CH.
- Taux de change commun aux articles de prix : BCE du 18.11.2026, 1 USD = 0,8427 CHF. Le comparatif ne convertit rien.
- `finalize_spec.py` refuse un champ `locale` de premier niveau, un artefact de recherche de type `sources`, et tout claim `confirmed` sans `source_ids`. La preuve Wildcat se source sur `/blog/agent-ia-repondre-mails-clients`.
- `build_article.py` n'écrit pas `image` en objet ni `faqs`, et refuse une `reviewedDate` antérieure à `pubDate` : les rédacteurs assemblent le frontmatter à part.
- Deux `npm run build` en parallèle se cassent l'un l'autre (`dist/` partagé) : builder une fois, à la fin de la vague.
- Les sous-agents de brief appliquent les SKILL.md à la main au lieu d'invoquer les skills ; `seo-competitors` a été sauté pour Grok Bot.
- WebFetch résume les pages et tronque les pages lourdes : une citation ou un chiffre relevé par WebFetch n'est pas fiable mot pour mot. Relire en texte brut (`curl` puis retrait des balises) tout ce que l'article met entre guillemets. Pages qui refusent même `curl` : aide de Bexio (rendu côté client), Microsoft Copilot (403), OpenAI (403). Depuis la vague 4, les consignes communes des briefs l'imposent (`consignes-brief.md`, copiées dans `docs/seo/consignes-brief.md`).
- `brief-critic` n'applique pas le plafond de H2 de façon constante : selon le critique, FAQ, Conclusion et Sources comptent ou non. Tenir 5 H2 de corps au plus et écrire dans le brief que Conclusion et Sources sont imposées par le lint.
- Les rédacteurs ne rouvrent pas les pages des éditeurs : les faits datent du relevé du brief. Relire les prix le jour de la sortie.
- Incohérences du site non tranchées : `/tarifs`, `pricing.ts` et `prix-agent-ia-automatisation-suisse` disent encore « hébergé en Suisse / Infomaniak » ; ce dernier affiche des fourchettes (CHF 2'500 à 15'000) absentes de `/tarifs`.
- Fichiers v2 encore en place à côté de leur équivalent v3 (`docs/seo-context.md`, `docs/moodboard.md`, `moodboard/presets.yaml`, `docs/styleguide.md`) : ne pas les retirer avant d'avoir vérifié que `.claude/commands/` ne les lit plus.

**Commit :** [e3eee3d] feat(blog): serveur-mcp-entreprise (24.12) prêt

---

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
