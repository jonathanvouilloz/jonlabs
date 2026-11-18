# Actu assistants / agents IA — état au 19.11.2026

Recherche web uniquement (WebSearch + lecture de pages). Pas de DataForSEO : **aucun volume de recherche vérifié**, les requêtes sont des hypothèses.
Fiabilité : **A** = source primaire lue (éditeur, admin.ch, GitHub) · **B** = presse établie lue ou plusieurs sources concordantes · **C** = sources secondaires / agrégateurs seulement, à revérifier avant publication.

## 1. Les 5 noms cités par Jonathan

Orthographes réelles : **OpenBot**, **Grok Bot** (deux mots), **Hermes Agent**, **Meta Muse**, **Claude Duet**. Les cinq existent.

| Nom | Éditeur | Nature | Sortie | Prix | Licence / hébergement | Dispo Suisse / UE | Dernière actu | Fiab. |
|---|---|---|---|---|---|---|---|---|
| **OpenBot** | CopilotKit | « Coworkers » IA self-hosted, un ordinateur isolé par agent, approbations humaines. Se positionne en alternative ouverte à Grok Bot | v0.0.1 ~17.08.2026 (alpha) ; v1.0 le 09 ou 10.11.2026 (sources divergentes) ; README mentionne v1.1.0 | Code gratuit. **Dépend de CopilotKit Intelligence, licence séparée** : licence locale gratuite 30 j renouvelable, licence d'essai pour Kubernetes, licence production payante (prix non publié) | Template **MIT** ; Intelligence non MIT. Docker Compose, image unique, Helm/K8s (~3,15 vCPU), app Mac/Windows. Modèles : OpenAI, Claude, Gemini, ou tout endpoint compatible OpenAI (donc modèle local / Infomaniak possible) | Oui en self-hosted (VPS suisse possible) ; 100 % souverain seulement si Intelligence + modèle sont aussi auto-hébergés | « OpenBot for Business » annoncé sur le blog CopilotKit (date non lue) ; 12,9k étoiles GitHub | A (repo) / C (dates) |
| **Grok Bot** | xAI (SpaceX/xAI + Cursor) | « Teammates » IA always-on, chacun avec son ordinateur cloud, se connecte aux outils de l'utilisateur. Produit managé, fermé | Bêta le 11.08.2026 | Pas de prix propre : inclus dans SuperGrok Heavy (~300 $/mois selon une source), Cursor Ultra 200 $/mois, Cursor Teams Premium 120 $/siège/mois. Entreprise : liste d'attente | Propriétaire. « Grok Bot computers run in the United States today » (doc sécurité citée par un tiers, 12.09.2026). Aucune certification SOC 2 / ISO / RGPD annoncée au lancement | Pas d'info régionale officielle trouvée. Données aux USA | Aucune annonce oct-nov 2026 trouvée | B (lancement) / C (prix, résidence) |
| **Hermes Agent** | Nous Research | Agent autonome open source self-hosted (CLI + Desktop + passerelles Telegram etc.), mémoire et skills | Courant 2026 ; v0.20 « Herald » 03.08 ; v0.21 « Pantheon » sept. (Bots Mode, agent-à-agent) | Gratuit ; coût = VPS + tokens du modèle | Open source (MIT d'après connaissance antérieure, **non relu sur le repo aujourd'hui**). Self-hosted, VPS suisse OK | Oui | **v0.23.2 stable le 16.11.2026** (~1 989 PR, correctifs) ; ligne 0.23 = Desktop servi dans le navigateur ; canary du 18.11 ajoute GPT-6.2 ; v0.24 annoncée | A |
| **Meta Muse** | Meta | Agent personnel grand public (mails, réservations, achats, formulaires) dans une VM dédiée. Pas un produit entreprise | 08.09.2026 (USA), Canada 18.09 ; « Muse Wonder » pour développeurs le 12.10 | Rapporté par la presse : gratuit / 20 $ / 100 $ par mois — non confirmé sur une page Meta | Propriétaire, cloud Meta, aucun self-hosting | **Non disponible en UE, UK ni Suisse ; aucune date annoncée** | >10 M d'utilisateurs revendiqués (presse, 21.10) | B (lancement, absence UE) / C (prix) |
| **Claude Duet** | Anthropic | App agent proactif pour indépendants et petites entreprises : surveille les services connectés, prépare, demande validation avant envoi / paiement / signature / suppression | Research preview le 21.10.2026 | Inclus dans Pro, Max, Ultra pendant la preview, mêmes limites d'usage ; pas de prix séparé | Propriétaire, VM cloud Anthropic, lieu d'hébergement non précisé. 6 000+ connecteurs (Gmail, Slack, Stripe, QuickBooks, DocuSign, HubSpot, Shopify…) | **Liste d'attente, abonnés aux États-Unis seulement. Team et Enterprise pas encore. Europe / Suisse non mentionnées** | Tourne sur Claude Opus 5.5 ; note sécurité ajoutée le 23.10 | A |

Sources :
- OpenBot : https://github.com/CopilotKit/openbot (lu 19.11) · https://www.copilotkit.ai/blog · dates 1.0 : https://ibl.ai/blog/copilotkit-openbot-open-source-ai-coworkers-what-mit-covers (09.11) vs https://casrai.org/news/copilotkit-openbot-1-0-agent-workspace-launch-2026 (10.11) · alpha août : https://moclaw.ai/blog/copilotkit-openbot · https://runtimewire.com/article/copilotkit-founders-pitch-self-hosted-openbot-directly-against-grok-bot
- Grok Bot : https://www.unite.ai/xai-launches-grok-bot-always-on-ai-teammates-with-their-own-cloud-computers/ (11.08) · https://www.iphoneincanada.ca/2026/08/12/xai-debuts-grok-bot-ai-teammates-you-can-give-real-work-to/ · résidence US : https://www.spotdev.co.uk/blog/grok-api-pricing-uk-business-grok-bot-enterprise (12.09)
- Hermes : https://github.com/NousResearch/hermes-agent/releases (lu 19.11) · https://aiweekly.co/alerts/nous-research-ships-hermes-agent-v021-pantheon-with-bots-mode-agent-to-agent
- Muse : https://alternativeto.net/news/2026/9/meta-launches-muse-a-personal-ai-agent-designed-to-act-on-your-behalf-not-just-answer/ · https://notebookcheck.net/Meta-Muse-Wonder-Developers-get-it-now-the-Muse-app-skips-Europe.1422810.0.html (oct., page en 403 à la lecture) · https://gagadget.com/en/725170-metas-muse-ai-agent-can-shop-book-and-email-on-your-behalf-for-20-a-month/ · annonce officielle about.fb.com **non retrouvée**
- Duet : https://claude.com/fr/resources/articles/claude-duet (21.10, lu) · https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/ (lu)

Point d'attention blog : le slug existant `openbot-souverainete-self-hosted` promet la souveraineté. À nuancer dans l'article : OpenBot ne démarre pas sans CopilotKit Intelligence (licence séparée).

## 2. Autres actualités oct-nov 2026 utiles à une PME

| # | Sujet | Fait | Date | Source | Fiab. |
|---|---|---|---|---|---|
| 1 | **OpenAI Dots** | Agents always-on dans ChatGPT (ordinateur cloud, 4 000+ apps, Slack/Teams). Inclus dans Pro et Business Premium. **Offre Pro exclue EEE, Suisse, UK** ; Business Premium annoncé dispo dans toutes les régions supportées (une seule source). Nouveau palier Pro à 500 $/mois | 29.09.2026 | https://roo.beehiiv.com/p/openai-dots-price-availability · https://www.aa.com.tr/en/science-technology/openai-unveils-always-on-dots-agent-500-monthly-chatgpt-plan/4073095 | B/C |
| 2 | **Google Gemini Agent (Workspace)** | Agents « collègues » avec leur propre compte Workspace, mail, agenda, Drive ; actions journalisées au nom de l'agent ; fonctionne aussi dans Microsoft 365 et Slack. Prix et date de GA non communiqués | 08-09.10.2026 | https://thenextweb.com/news/gemini-agent-workspace-identity-europe | B |
| 3 | **Microsoft Ignite 2026** | En cours (17-20.11). Copilot Workspaces, Code, Autopilot en preview Frontier ; « Office in Copilot » et Copilot Managed Runtime en GA ; Agent ID étendu aux agents locaux (Claude Code, Copilot CLI) ; Windows 365 for Agents | 17-18.11.2026 | https://news.microsoft.com/events/ignite/2026/book-of-news/ (non lu en détail) · https://www.epcgroup.net/insights/microsoft-ignite-2026-day-1-announcements | C (trop frais) |
| 4 | **Claude Fable 5.2 / Mythos 5.2** | Nouveau modèle Anthropic, API 8 $ / 40 $ par M tokens (-20 % vs 5.1). Opus 5.5 listé à 4 $ / 20 $ | 09.11.2026 | https://thenewstack.io/anthropic-fable-coding-upgrade/ · https://techenclave.com/news/items/anthropic-releases-claude-fable-5-2-at-lower-api-prices | B |
| 5 | **OpenClaw 2.0 → 2026.11.4** | 2.0 (v2026.8.1) le 30-31.08 : coffre d'identifiants partagé, modes de permission, consentement plugins ; critiques sur la sécurité par défaut. Porté par l'OpenClaw Foundation (501c3), pas par OpenAI. Versions 2026.11.1 (05.11), .2 (10.11), .4 (16.11) avec étapes de migration | 30.08 → 16.11.2026 | https://siliconangle.com/2026/08/31/openclaw-just-gave-everyone-version-2-0-and-it-comes-with-major-updates/ · https://www.csoonline.com/article/4216969/ · https://openclawdatabase.com/changelog/2026-11/index.md | B / C (versions nov.) |
| 6 | **Nvidia NemoClaw** | Couche entreprise autour d'OpenClaw (sandbox OpenShell, politiques réseau/fichiers, modèles locaux sur RTX/DGX). Toujours en 0.0.x (0.0.144 le 16.11), télémétrie activée par défaut depuis 0.0.141 | 16.03 → 16.11.2026 | https://www.theregister.com/2026/03/16/nvidia_wraps_its_nemoclaw_around/ · https://openclawdatabase.com/changelog/2026-11/index.md | B / C |
| 7 | **Navigateurs agentiques** | **ChatGPT Atlas arrêté le 09.08.2026** (fonctions reversées dans ChatGPT desktop + extension Chrome). Comet gratuit. Agent Gemini dans Chrome documenté surtout USA/Inde ; Gemini Spark bloqué UE/UK | 10.07 / 09.08.2026 | https://thenextweb.com/news/openai-chatgpt-atlas-browser-shutdown-superapp · https://techrepublic.com/article/news-chatgpt-atlas-shutdown-migration | B |
| 8 | **MCP** | Dernière spec = 2026-07-28 (cœur stateless, auth durcie, extensions). Feuille de route du 22.08 : identité d'agent, sécurité entreprise. Pas de release en novembre | 28.07.2026 | https://blog.modelcontextprotocol.io/posts/2026-07-28/ · https://claude.com/fr/blog/bringing-mcp-2026-07-28-to-claude | A |
| 9 | **Suisse : réglementation IA** | Communiqué du Conseil fédéral : état d'avancement, pas de loi globale, Convention du Conseil de l'Europe. « L'ouverture de la consultation est prévue pour le printemps 2027. » Aucune obligation contraignante pour le privé à ce stade | 28.10.2026 | https://www.admin.ch/fr/newnsb/s2TQiUUjrA5D (lu) | A |
| 10 | **AI Act UE** | Omnibus numérique : haut risque (Annexe III) repoussé au 02.12.2027, Annexe I au 02.08.2028. Art. 50(1) (dire qu'on parle à une IA) applicable depuis le 02.08.2026. **Art. 50(2) marquage lisible machine : 02.12.2026** | accord 07.05.2026 ; échéance 02.12.2026 | https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-article50-watermarking-deadline/ · https://www.houthoff.com/insights/news/ai-act-transparency-obligations-and-the-ai-omnibus-regulation/ · https://www.loyensloeff.com/insights/news--events/news/eu-ai-act-key-amendments-adopted-under-digital-omnibus-package/ | B (publication au JO non vérifiée sur EUR-Lex) |
| 11 | **Apertus 1.5** | Modèle ouvert suisse (EPFL/ETH/CSCS), 8B et 70B, contexte 262k. Disponible via l'API Infomaniak (70B) et la Swiss AI Platform de Swisscom | 24.07.2026 | https://ai.epfl.ch/apertus-1-5-building-the-next-generation-of-open-ai-infrastructure/ · https://www.cscs.ch/science/computer-science-hpc/2026/apertus-15-building-the-next-generation-of-open-ai-infrastructure | A/B |
| 12 | **Instinct** (+ Hark, Fo) | Agent personnel par SMS/appel, bêta privée sur invitation (Spear Street Technology, août 2026) ; données utilisées pour l'entraînement par défaut. Hark et Fo : cités par TechCrunch, non étudiés | août-oct. 2026 | https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/ · https://letsdatascience.com/news/instinct-holds-its-own-as-muse-and-dots-enter-the-ai-agent-m-5b4de4e1 | C |

Acteurs suisses, rien de neuf trouvé en oct-nov 2026 : Infomaniak (Euria lancé le 09.12.2025, guide mis à jour le 05.11.2026, « agents » annoncés comme intention ; projet d'entrée en bourse le 29.07.2026 — source C), Swisscom (Swiss AI Assistant PME, 18.02.2026 : https://www.swisscom.ch/fr/about/news/2026/02/18-swiss-ai-assistant.html), Proton (Lumo 2.0 le 30.06.2026, Lumo for Business 11,99 $/utilisateur/mois), Exoscale (aucun résultat), Mistral (Work Mode dans Le Chat, date non établie).

## 3. Angles d'article (intention commerciale) et requête probable

| Sujet | Angle | Requête FR probable |
|---|---|---|
| Claude Duet | Claude Duet pas encore disponible en Suisse : ce qu'on peut faire installer aujourd'hui pour le même résultat | `claude duet suisse` / `claude duet disponible europe` |
| Claude Duet | Claude Duet vs agent sur mesure pour une PME : prix, données, limites | `claude duet prix` / `claude duet avis` |
| OpenBot / Grok Bot | OpenBot vs Grok Bot : self-hosted en Suisse ou cloud américain, lequel pour une PME | `openbot vs grok bot` |
| OpenBot | Faire installer OpenBot en Suisse : prérequis, licence CopilotKit Intelligence, coût réel | `openbot installation` / `openbot prix` |
| Grok Bot | Grok Bot pour une PME suisse : prix, données hébergées aux USA, alternatives | `grok bot prix` / `grok bot entreprise` |
| Hermes / OpenClaw / OpenBot | Hermes Agent vs OpenClaw vs OpenBot : quel agent open source déployer dans une PME | `hermes agent vs openclaw` / `meilleur agent ia open source` |
| Hermes Agent | Hermes Agent 0.23 : faire installer et maintenir l'agent (mises à jour hebdomadaires, sécurité) | `installer hermes agent` / `hermes agent prestataire` |
| OpenClaw | Migrer vers OpenClaw 2.0 en PME : ce qui casse, ce qu'il faut sécuriser | `openclaw 2.0 migration` / `openclaw sécurité` |
| Dots / Muse / Duet | Dots, Muse, Duet : aucun des trois n'est ouvert en Suisse — les alternatives disponibles maintenant | `agent ia personnel suisse` / `chatgpt dots suisse` |
| Gemini Agent / Copilot | Gemini Agent ou Copilot : quel agent quand on est déjà sur Google Workspace ou Microsoft 365 | `gemini agent workspace prix` / `agent copilot pme` |
| Apertus + Infomaniak | Agent IA hébergé en Suisse : Apertus 1.5 et Infomaniak, ce que ça permet et ce que ça ne permet pas | `agent ia hébergé en suisse` / `ia souveraine pme suisse` |
| Réglementation | Agent IA et loi en Suisse fin 2026 : ce qu'une PME doit respecter (LPD, AI Act si clients UE, art. 50) | `réglementation ia suisse pme` / `ai act pme suisse` |
| MCP | Connecter ses outils métier à un agent via MCP : coût et délais d'une intégration | `mcp entreprise` / `intégration mcp` |
| Navigateurs agentiques | Atlas arrêté : quel navigateur agentique reste utilisable en entreprise | `chatgpt atlas alternative` |
| Prix des modèles | Combien coûte un agent IA par mois fin 2026 (Fable 5.2, Opus 5.5, modèles locaux) | `prix agent ia` / `coût agent ia entreprise` |

## 4. Trop volatile ou trop mal sourcé pour un article fiable aujourd'hui

- **Microsoft Ignite 2026** : en cours, statuts GA / preview contradictoires entre sources. Attendre le Book of News et une semaine.
- **Prix Meta Muse (0 / 20 / 100 $)** et **prix Grok Bot** : presse et blogs seulement, pas de page éditeur lue.
- **OpenAI Dots** : modèle (GPT-6 Astra vs 6.1 Sol), grille Pro (100/200/500 $) et exclusion Suisse reposent sur des sources secondaires ; page tarifaire OpenAI non atteinte.
- **Date exacte d'OpenBot 1.0** (09 ou 10.11) et prix de la licence production CopilotKit Intelligence : non publiés.
- **Instinct, Hark, Fo** : sur invitation, chiffres de valorisation contradictoires (2,5 Md vs 10 Md $). Pas de sujet PME.
- **AI Act art. 50(2) au 02.12.2026** : vérifier la publication au Journal officiel sur EUR-Lex avant d'écrire une date ferme.
- **Versions OpenClaw / NemoClaw de novembre** : vues via un agrégateur (openclawdatabase.com), pas sur les release notes officielles.
- **Infomaniak** : un résumé de recherche datait la « plateforme IA souveraine » de juillet 2026 ; l'article lu (it-connect) est du 11.10.2024. Aucune annonce agent datée 2026 trouvée.
- **Rythme de release** : Hermes et OpenClaw sortent une version par semaine ; tout article « version X » est périmé en quelques jours — écrire sur l'installation et la maintenance, pas sur un numéro de version.

## 5. Impact sur le blog existant

- `comparatif-browser-agents-ia` : à contrôler, ChatGPT Atlas est arrêté depuis le 09.08.2026.
- `openbot-souverainete-self-hosted` (sortie 20.11) : contrôler la mention de la dépendance CopilotKit Intelligence et la version (1.0 / 1.1.0).
- `hermes-agent-ia-pme` : version courante 0.23.2 (16.11.2026).
