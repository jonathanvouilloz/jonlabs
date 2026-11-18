# Preuves terrain Hermes / OpenClaw (première main)

> Relevé le 2026-11-19, en lecture seule, dans les fichiers locaux du noyau. Aucun accès au VPS, aucun secret lu.
> Chemins relatifs à `/home/jon/noyau/`. Format des sources : `fichier:ligne`.
> Calendrier : `jonlabs/docs/seo/topical-map-systemes-agents-ia.md` (numéros 1 à 20).
> Statuts : **PUB** = déjà publié (fichier du site indiqué) · **ACC** = publiable après accord de Jonathan · **INT** = interne, ne pas publier.
> Règle (loi n°7) : pas de nom de personne tierce, pas de contenu brut client, pas d'IP, pas d'identifiant. Dans les articles, écrire « la gérante », « les responsables ».

## 0. À lire avant d'écrire (3 alertes)

| Alerte | Détail | Source |
|---|---|---|
| Le client « mails » nommé est Wildcat, pas Barber Concept | L'agent mail documenté et mesuré (2 $/mois, 49 brouillons) est celui de Wildcat Muay Thai. Barber Concept a ses propres agents (avis, formulaires, prospection) sur un autre VPS, non documenté localement. | `jonlabs/src/content/portfolio/wildcat-agent-mails.md` · `barber-hub-automatisation.md` |
| « Hébergé en Suisse chez Infomaniak » n'est pas ce qui tourne | Le site l'affirme pour l'offre. Les installations réelles sont sur Hostinger (VPS Barber, hors Suisse) et HostHatch (VPS perso `jonlabs`, pays non documenté). Ne pas présenter les cas réels comme hébergés en Suisse. | Affirmation : `jonlabs/src/pages/hermes.astro:14`, `src/content/blog/hermes-agent-ia-pme.md:217`, `openclaw-pme-suisse.md:17`. Réalité : `cerveau/10-Projets/vps/vps-human.md:46`, `cerveau/00-Daily/2026-11-11.md:5,15` |
| Aucune trace d'installation OpenClaw | Voir § 4. Tout ce qui est écrit sur OpenClaw vient de sources tierces. | — |

## 1. Installations réelles

| Preuve | Valeur | Source | Statut | Articles |
|---|---|---|---|---|
| Hébergeur de l'auteur (article VPS) | Hostinger KVM 2 : 2 vCPU, 8 Go, 100 Go NVMe ; cohabite avec n8n, un système de mailing et une base de données | `jonlabs/src/content/blog/meilleurs-vps-hermes-agent-suisse.md:63,216` | PUB | 1, 3, 6, 7 |
| Prix catalogue Hostinger relevé le 12.10.2026 | KVM 2 : 7.99 € promo puis 14.99 € ; KVM 1 : 5.49 € puis 11.99 € | `jonlabs/docs/research/vps-hermes/2026-10-12-comparatif-vps.md:56-57` ; article `:89` | PUB (KVM 1) / ACC (KVM 2, prix réellement payé non noté) | 3, 7 |
| VPS client Barber | Hostinger (terminal web Hostinger), utilisateur Linux `hermes`, séparé du VPS perso | `cerveau/10-Projets/vps/vps-human.md:36,46` | INT | 1, 3 |
| VPS perso `jonlabs` | HostHatch, Ubuntu 24.04, cible 12 Go RAM / 4 vCPU (2 dédiés, 2 partagés), en service le 14.11.2026 | `cerveau/10-Projets/vps/vps-human.md:36` ; `cerveau/_system/VPS-MIGRATION-PLAN.md:275` ; `cerveau/00-Daily/2026-11-11.md:5,15` | ACC (date du 14.11 déjà PUB : `portfolio/systeme-ia-jonlabs.md:61`) | 3, 17 |
| Mode d'installation | Hermes natif (pas en conteneur), utilisateur `hermes` sans sudo, service systemd, version épinglée, secrets en `0600` | `vps/docs/DECISIONS.md:10` ; `vps/docs/PROFILES.md:13-18,81-82` ; `vps/docs/HANDOFF.md:55-57` | ACC | 3, 11 |
| Une passerelle, plusieurs profils | Un seul process sert 6 profils (poste Windows, 09.11) ; sur le VPS, 2 profils cibles `ops` et `assistant` | `cerveau/00-Daily/2026-11-09.md:25` ; `vps/docs/PROFILES.md:23-28` | ACC | 1, 3 |
| Accès au serveur | Tailscale uniquement, SSH public fermé (10.11) ; tableau de bord Hermes jamais public | `cerveau/10-Projets/vps/vps-human.md:30,34` | ACC | 3, 11 |
| Sauvegardes | Restic vers Cloudflare R2 ; ne couvre que `~/.hermes` et `~/workspace` ; test de restauration pas encore fait | `cerveau/00-Daily/2026-11-11.md:14-15` ; `cerveau/10-Projets/vps/vps-human.md:33` | ACC | 3, 11 |
| Synchronisation des notes | `git pull` horaire sur le VPS, GitHub comme hub | `cerveau/_system/SETUP-LAPTOP.md:10-13` ; PUB : `portfolio/systeme-ia-jonlabs.md:62` | PUB | 3, 20 |
| Modèles utilisés | GLM 5.3 via OpenRouter (agent mail Wildcat) ; `deepseek/deepseek-v4-flash` (Hermes perso, veille) ; Nous Portal (VPS Barber) | `blog/agent-ia-repondre-mails-clients.md:120` ; `atelier/docs/features/veille-capture-hermes.md:113` ; `cerveau/10-Projets/barberconcept/barberconcept-human.md:22` | PUB (GLM) / ACC (DeepSeek) / INT (Nous Portal) | 1, 3, 7 |
| Canaux réellement branchés | Telegram (groupe d'équipe, boutons de validation) ; IMAP/SMTP sur boîte du domaine ; mini app web (PWA) ; Gmail/Calendar par OAuth sur l'assistant perso. Discord : prévu puis retiré (15.11). WhatsApp : non branché | `portfolio/wildcat-agent-mails.md:68-80` ; `cerveau/00-Daily/2026-11-09.md:26` ; `cerveau/10-Projets/vps/vps-human.md:26` ; `cerveau/_system/VPS-MIGRATION-PLAN.md:309-312` | PUB (Telegram, mail, app) / ACC (reste) | 1, 3 |
| Outils reliés | CRM et facturation maison (API + serveur MCP, accès machine par périmètre) ; Google Workspace ; Twenty CRM puis hub maison chez Barber ; Cloudflare R2 pour les fichiers de formulaires | `portfolio/systeme-ia-jonlabs.md:51-56` ; `portfolio/barber-hub-automatisation.md:76` ; `atelier/ideas/099-agent-ia-tri-mails/idea.md:19-23` | PUB (Twenty nommé : ACC) | 15, 20 |
| Skills maison de l'agent | 5 skills dans `agent-ops` (facture, corrections, proposition-devis, audit de prospect, mail client) | `agent-ops/skills/` (5 dossiers) | ACC | 3, 18 |
| Empreinte mémoire d'un système complet | ~600 Mo pour tout le système mail ; programme de relève 16 Mo et ~0,1 % d'un cœur sur 7 h 30 | `blog/agent-ia-repondre-mails-clients.md:116-117` | PUB | 1, 3, 6 |
| Délai annoncé de mise en place | 2 à 3 semaines du cadrage à la production (offre) ; l'agent Wildcat a été livré les 22-23.10.2026, la mini app les 14-16.11 | `jonlabs/src/pages/hermes.astro:15` ; `portfolio/wildcat-agent-mails.md:4` | PUB | 3, 18 |
| Coût d'installation affiché | Agent dès CHF 1'500 ; fourchettes article : CHF 400 à 1'200 (4 à 12 h) | `blog/hermes-agent-ia-pme.md:139,217` | PUB | 3, 7, 18 |

## 2. Chiffres d'usage

| Preuve | Valeur | Source | Statut | Articles |
|---|---|---|---|---|
| Coût IA mensuel, agent mail | ≈ 2 $ par mois pour 100 demandes + 300 messages à l'agent | `blog/agent-ia-repondre-mails-clients.md:112` ; brut `atelier/_resources/transcripts/2026-10-23_agent-hermes-mails-wildcat.md:75` | PUB | 1, 3, 7, 8 |
| Coût par brouillon | ½ centime, mesuré sur 49 vrais mails | `blog/agent-ia-repondre-mails-clients.md:113` | PUB | 7, 8 |
| Temps de réponse | Brouillon 10 à 45 s ; réponse de l'agent 6 à 8 s ; accusé de réception ~1 min, dans la langue du client | `atelier/ideas/103-agent-hermes-mails-wildcat/idea.md:29,31` ; transcript `:77-78` | PUB (article, tableau `:108-118`) | 1, 12 |
| Choix du modèle | 2-3 modèles bon marché testés sur 10 vraies demandes (JSON valide, temps, coût) | `blog/agent-ia-repondre-mails-clients.md:120` | PUB | 1, 3, 17 |
| Coût à vide | 0 $ quand aucun mail n'arrive | `blog/agent-ia-repondre-mails-clients.md:118` | PUB | 7 |
| Volume Wildcat | 100+ demandes de réservation traitées (déclaré par Jonathan le 17.11) | `portfolio/wildcat-agent-mails.md:38-40` ; `src/pages/index.astro:35` | PUB | 1, 8 |
| Volume Barber, avis | 1000+ avis Google traités et répondus (déclaré le 17.11) | `portfolio/barber-hub-automatisation.md:40-42` ; `index.astro:33` | PUB | 1, 14 |
| Volume Barber, mails | 500+ mails traités (200+ le 17.11, 500+ le 19.11, déclaré) | `portfolio/barber-hub-automatisation.md:40,44-45` | PUB | 1, 8 |
| Temps gagné Barber | 4 h par semaine sur l'admin, estimation et non mesure | `portfolio/barber-hub-automatisation.md:48-49,111` | PUB | 14, 18 |
| Temps gagné Jon Labs | 10 h par semaine (déclaré le 19.11), non mesuré poste par poste | `portfolio/systeme-ia-jonlabs.md:37-40,93` | PUB | 18 |
| Taux de validation sans correction | Objectif 70 % ; bilan automatique chaque lundi ; **valeur réelle non relevée**. Le « 75 % (9 sur 12) » du doc d'accompagnement est un exemple de format, pas une mesure | `portfolio/wildcat-agent-mails.md:102` ; transcript `:71` | PUB (objectif) / à relever | 1, 11, 16 |
| Fréquences | Relève de la boîte toutes les 60 s ; base de connaissances recompilée toutes les heures ; rappel des cartes sans réponse après 24 h ; avis Barber relevés 2 fois par jour | `portfolio/wildcat-agent-mails.md:57,64,73` ; `portfolio/barber-hub-automatisation.md:60-62` | PUB | 3, 6 |
| Cron de l'assistant perso | 1 cron quotidien à 07h00 (tâches + agenda), sans appel au modèle | `cerveau/00-Daily/2026-11-09.md:32` | ACC | 3 |
| Durée en production | Avis Barber : auto-réponse 4-5 étoiles décidée le 17.08.2026 ; intake formulaires en prod le 30.09 ; agent Wildcat depuis le 22-23.10 ; prospection Barber Media depuis fin octobre | `cerveau/10-Projets/barberconcept/barberconcept-human.md:28,56` ; `portfolio/wildcat-agent-mails.md:4` ; `portfolio/barber-hub-automatisation.md:110` | ACC (dates Barber) / PUB (Wildcat, prospection) | 1, 14 |
| Abonnement « Hermes » | 20 CHF par mois dans les charges fixes (nature exacte non précisée) | `cerveau/90-Perso/Finance-Voyage/charges-fixes.md:11` | INT tant que non clarifié | 7 |

## 3. Incidents et leçons

| Preuve | Valeur | Source | Statut | Articles |
|---|---|---|---|---|
| Première version sans mémoire | L'agent était relancé à chaque message, donc sans souvenir ; refait en profil continu dans la passerelle | `portfolio/wildcat-agent-mails.md:98` ; transcript `:84` | PUB | 1, 3, 18 |
| Ton robot | Les consignes de style ont échoué ; les vraies réponses envoyées ont réglé le problème | `blog/agent-ia-repondre-mails-clients.md:84` | PUB | 8, 18 |
| Bug en démonstration | Le bouton « Corriger » n'a pas fonctionné pendant le test filmé | transcript `:39` | PUB (vidéo) | 3 |
| Séparation lecture / action | L'IA qui lit le mail d'un inconnu n'a aucun outil ; l'agent du groupe n'a pas d'outil d'envoi ; seul le clic envoie, une seule fois | `portfolio/wildcat-agent-mails.md:62,99` | PUB | 11, 16 |
| Envoi incertain | Un envoi à l'issue incertaine n'est jamais renvoyé : alerte « vérifier Envoyés » | `blog/agent-ia-repondre-mails-clients.md` (master prompt) ; transcript `:164-165` | PUB | 11 |
| Port public assumé | Mini app exposée publiquement : code de connexion envoyé par Telegram, 2 comptes autorisés, essais limités, API de l'agent en local seulement. Limites reconnues : pas de passkeys, pas de Cloudflare Access | `atelier/ideas/103-agent-hermes-mails-wildcat/productions/x-post-app-securite.md:34-50` (statut `ready`, non posté) | ACC | 11 |
| Les mails passent par le fournisseur du modèle | La clé reste sur le serveur, le texte des mails non | même fichier `:48` | ACC | 11, 17, 19 |
| Restauration du VPS Barber (18.11.2026) | Après restauration : connexion au fournisseur de modèle à refaire, contrôle de santé quotidien en échec, état de veille revenu au 16.11, curseur IMAP rejoué deux fois (risque de doublons) | `cerveau/10-Projets/barberconcept/barberconcept-human.md:22-24` | INT (ACC si anonymisé : « chez un client ») | 3, 11 |
| Deux instances sur la même boîte | Pendant la migration, l'ancienne instance a échoué à répondre à 2 mails avant d'être coupée | `cerveau/10-Projets/barberconcept/barberconcept-human.md:25` | INT (ACC anonymisé) | 3 |
| Règle « une seule instance » | Un deuxième process sur le même bot Telegram casse le premier, double les crons, fait diverger les mémoires | `cerveau/_system/SETUP-LAPTOP.md:17-19` | ACC | 3 |
| Secrets passés en clair dans une conversation IA | Un mot de passe serveur (14.11) et un jeton d'accès machine ; rotation à faire ensuite | `cerveau/10-Projets/vps/vps-human.md:46` ; `cerveau/10-Projets/invoices/invoices-human.md:27` | INT (ACC anonymisé, sans détail) | 11, 16 |
| Accès root perdu | Mot de passe root du VPS perso introuvable après la mise en service | `cerveau/00-Daily/2026-11-11.md:5` | INT | — |
| Formulaires sans réponse pendant un mois | 67 soumissions, 1 seule arrivée au service d'envoi, sans erreur visible | `portfolio/barber-hub-automatisation.md:54` (PUB, sans le chiffre) ; `barberconcept-human.md:104` | PUB / chiffre INT | 8, 14 |
| Avis automatiques : ratés | Le job quotidien n'a rien publié deux jours de suite et sautait la fin de liste (12 avis 5 étoiles) ; 3 propositions restées en état incertain | `barberconcept-human.md:35,50` | INT (ACC anonymisé) | 11 |
| Politique des avis | 4-5 étoiles publiés seuls, 1-3 étoiles et cas sensibles en validation humaine | `portfolio/barber-hub-automatisation.md:60` ; `vps/docs/DECISIONS.md:21-22,31` | PUB | 16 |
| Trop d'approbations tue l'usage | Deux approbations par facture rendaient l'agent pénible ; passage à 3 niveaux (auto, à confirmer, interdit) le même jour | `cerveau/10-Projets/invoices/invoices-log.md:114` | ACC | 16, 20 |
| Jamais d'accès SQL pour l'agent | L'agent passe par l'API métier, écritures tracées | `portfolio/systeme-ia-jonlabs.md:78-80` | PUB | 11, 20 |
| Abandonné : pilote avis depuis le VPS de Jonathan | 19.10.2026 : le client gère ses avis sur son propre VPS ; plus de profil par client | `vps/docs/DECISIONS.md:33` ; `vps/docs/PROFILES.md:7-9,30` | ACC | 14 |
| Abandonné : Discord | Choisi le 04.08 comme canal principal, retiré le 15.11 (recherche d'une autre interface) | `vps/docs/DECISIONS.md:9` ; `cerveau/10-Projets/vps/vps-human.md:26,41` | ACC | 1 |
| Abandonné : CRM du marché (Twenty) chez Barber | Remplacé par un hub maison : l'agent n'y voyait pas les réponses | `portfolio/barber-hub-automatisation.md:76,108` | PUB (sans nommer Twenty) | 15, 20 |
| n8n | Tourne sur le Hostinger (article VPS). Écarté pour l'agent mail : ~2 Go de RAM conseillés contre 600 Mo. Différé sur le VPS perso (hors chemin critique) | `blog/meilleurs-vps-hermes-agent-suisse.md:216` ; `blog/agent-ia-repondre-mails-clients.md:246` ; `vps/docs/DECISIONS.md:17` | PUB / ACC | 6 |
| Dokploy | Essayé en juillet comme PaaS, sorti du chemin critique en août | `vps/docs/DECISIONS.md:5,11` | ACC | 3 |
| Pas de modèle local | Décision : aucun LLM local sur 8 ou 12 Go ; il faudrait 16 Go et plus | `vps/docs/DECISIONS.md:32` ; `vps/docs/PROFILES.md:76` | ACC | 17 |
| WhatsApp | Seule piste : pont non officiel (OpenWA), risque de restriction du numéro ; non déployé | `cerveau/_system/VPS-MIGRATION-PLAN.md:309-312` | ACC | 1, 11 |

## 4. Expérience OpenClaw de première main

| Constat | Détail | Source | Statut |
|---|---|---|---|
| Aucune installation OpenClaw documentée | Aucune note, log, tâche ou runbook ne mentionne une installation ou un test d'OpenClaw. Recherche sur `cerveau/`, `atelier/`, `vps/`, `agent-ops/`, `projets/` | — | — |
| L'auteur l'écrit lui-même | « Pour OpenClaw, je n'ai pas refait le test ici » ; compte éditeur : « non, à ma connaissance (non testé ici) » | `jonlabs/src/content/blog/openbot-souverainete-self-hosted.md:153,157` | PUB |
| L'article OpenClaw repose sur des sources tierces | Coûts, comparaison et verdict sans mesure propre ; l'offre d'intégration y est décrite mais absente de `/hermes` et `/tarifs` | `blog/openclaw-pme-suisse.md:114-121` ; `cerveau/10-Projets/jonlabs/jonlabs-human.md:51` | PUB |
| Test OpenClaw prévu, pas fait | Série vidéo : même dossier fictif donné à chaque agent (Hermes, OpenClaw, etc.) sur VPS vierge ; épisode 1 = OpenBot | `atelier/ideas/104-agents-ia-tester-sur-vps/idea.md:34-37,49-52` | ACC |
| Faits sécurité OpenClaw non vérifiés | ClawHavoc (341 skills malveillants), secrets en clair par défaut, audit Trail of Bits : marqués « à vérifier source avant de sortir » | `atelier/ideas/104-agents-ia-tester-sur-vps/idea.md:66-68` | INT tant que non sourcé |
| Seul test comparable réalisé | OpenBot installé de zéro sur un VPS HostHatch, scénario fictif assumé, mail piégé non testé | `blog/openbot-souverainete-self-hosted.md:165,182` | PUB |

Conséquence pour les articles 1, 7 et 11 : côté Hermes, preuves mesurées ; côté OpenClaw, uniquement documentation et sources tierces, à écrire comme tel, ou installer OpenClaw avant le 22.11.

## 5. Public ou interne

| Déjà public | Où |
|---|---|
| Chiffres clients (1000+ avis, 500+ mails, 100+ demandes, 4 h, 10 h) | `src/pages/index.astro:33-36` ; `src/pages/hermes.astro:50-52` ; 3 fiches portfolio |
| Architecture et coûts de l'agent mail, master prompt complet | `src/content/blog/agent-ia-repondre-mails-clients.md` ; vidéo YouTube (`src/data/hub.ts:6`) |
| Hébergeur de l'auteur, lien affilié déclaré | `src/content/blog/meilleurs-vps-hermes-agent-suisse.md:33,216` |
| Noms de clients : Wildcat et Barber Concept nommés ; le client « camps » anonymisé | `jonlabs/docs/DECISIONS.md:17` |

| Interne uniquement | Pourquoi |
|---|---|
| Incident de restauration du 18.11, secrets passés en clair, accès root perdu | Sécurité et image du client |
| Fournisseur, nom d'hôte et adresses des VPS, noms de services systemd | Surface d'attaque |
| Détail des avis, des mentions d'employés et des formulaires Barber | Contenu brut client (loi n°7) |
| Cas « tri des mails + CRM » de `atelier/ideas/099` | Client anonyme par décision éditoriale (`idea.md:19`) |

## 6. Trous : ce que Jonathan doit fournir

1. Version de Hermes en production sur chaque VPS (`hermes --version`) et date de la dernière mise à jour. Aucune version n'est notée localement ; la seule version citée est 0.23.2 au 16.11, issue de la recherche (`research-actu-assistants.md:82`).
2. Taux réel de brouillons envoyés sans correction (ligne du lundi dans le groupe Telegram), sur 4 semaines.
3. Coût réel mensuel : facture du VPS (Hostinger, HostHatch) et dépense OpenRouter / fournisseur de modèle par mois, en CHF. La tâche existe depuis le 05.10 (`cerveau/10-Projets/jonlabs/jonlabs-human.md:71`).
4. Compteurs sur les VPS : nombre de crons, de skills et de profils (`hermes cron list`, dossier skills), mémoire utilisée, durée de fonctionnement.
5. Temps d'installation chronométré d'un Hermes sur VPS vierge (aucune mesure locale ; seulement 4 à 12 h annoncés).
6. Captures anonymisées (carte Telegram, mini app, tableau de bord) : les fiches portfolio ont des images provisoires.
7. OpenClaw : soit une installation réelle avant l'article 1, soit l'accord pour écrire « non testé ».
8. Accord du client Barber pour citer un incident anonymisé, et confirmation de ce que couvre l'abonnement « Hermes » à 20 CHF.

## 7. Non vérifié

- Rien n'a été contrôlé sur les serveurs : tous les chiffres « déclarés par Jonathan » (1000+, 500+, 100+, 4 h, 10 h) n'ont pas de compteur local.
- Le fichier source des cas (`scratchpad/cas-ia-faits.md`, cité dans les fiches portfolio) n'existe plus.
- Le dépôt du VPS Barber (`barbermedia/docs/project/handoff.md`, cité en `barber-hub-automatisation.md:4`) et celui de l'agent Wildcat (`wildcat-assistant/`) ne sont pas dans le noyau local.
- Fournisseur du VPS perso : HostHatch selon les notes du 11.11, « console Hostinger » selon `SETUP-LAPTOP.md:32` (10.11), Hetzner selon les anciens docs `vps/docs/`. À confirmer.
- Le Hostinger KVM 2 de l'article VPS est probablement le VPS Barber ; le lien n'est écrit nulle part.
- Le wiki (`cerveau/20-Knowledge/wiki/`) ne contient aucune page sur Hermes ou OpenClaw.
- La mémoire Claude du projet (hors `/home/jon/noyau`) n'a pas été lue.

## Relevé direct du VPS Barber — 2026-11-19 (lecture seule, SSH `barber`)

Statut de tout ce bloc : publiable après accord de Jonathan (chiffres d'une installation client, à citer sans nom de personne ni contenu).

| Preuve | Valeur relevée | Commande |
|---|---|---|
| Serveur | 2 vCPU, 7,8 Go de RAM (1,7 Go utilisés), disque 96 Go occupé à 63 % | `nproc`, `free -h`, `df -h /` |
| Version de Hermes | v0.21.5 (build du 24.09.2026), installation par git, mise à jour disponible (stable 0.23.2 au 16.11) | `hermes --version` |
| Première installation | 24.09.2026 | date de création de `~/.hermes/hermes-agent` |
| Modèle | `gpt-6.1-sol` via le fournisseur `openai-codex` (abonnement, pas de facturation au token) | `config.yaml` |
| Profils | 11 profils (9 Barber par métier : concept, email, général, avis Google, marketing, média, avis Shopify, charbon, dev ; newsletter ; wildcat) | `ls ~/.hermes/profiles` |
| Skills | 58 à 70 skills par profil, 61 au niveau racine | `find … -name SKILL.md` |
| Tâches planifiées | 21 crons répartis sur 6 profils (concept 7, avis Google 6, média 3, général 2, newsletter 2, email 1) | `cron/jobs.json` par profil |
| Exécutions enregistrées | 2 641 exécutions dans les journaux, dont 2 600 terminées et 40 en échec (1,5 %). Les deux profils les plus actifs sont plafonnés à 1 000 lignes : le total réel est supérieur | `cron/executions.db` |
| Incidents de cron | 36 incidents classés : limite de débit, configuration, authentification, script, livraison | table `cron_incidents` |
| Mémoire | passerelle Hermes : 400 Mo ; processus Hermes : 380 Mo et 160 Mo | `systemctl --user show`, `ps` |
| Services à côté | passerelle de messagerie, tableau de bord Hermes, tunnel Cloudflare, Listmonk (newsletter) et Umami (statistiques) en Docker | `systemctl --user`, `docker ps` |
| Canaux configurés | Telegram, Discord, WhatsApp, Slack, Signal déclarés dans la configuration (usage réel de chacun non vérifié) | `config.yaml` |
| Hébergeur | nom d'hôte `srv…` de type Hostinger, cohérent avec les notes | `hostname` |

Non relevé : coût mensuel en CHF, nombre de mails traités (pas de compteur trouvé dans ces fichiers), temps d'installation, n8n (aucun conteneur n8n actif sur ce serveur le 19.11, contrairement à ce que dit l'article VPS).
