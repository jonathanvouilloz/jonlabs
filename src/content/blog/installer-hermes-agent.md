---
title: "Installer Hermes Agent : VPS, Docker et coût en Suisse"
h1: "Comment installer Hermes Agent sur un VPS ou avec Docker, et combien ça coûte en Suisse"
description: "Installe Hermes Agent sur VPS ou Docker : étapes, sécurité, mises à jour et coût en CHF, puis chiffre ton installation. Doc relue le 19.11.2026."
pubDate: 2026-11-22
author: "Jon"
image:
  url: "/images/blog/installer-hermes-agent.webp"
  alt: "Illustration éditoriale : buste de statue antique devant un terminal ouvert, croix suisse stylisée, accent vert, direction artistique jonlabs"
category: "automatisation"
tags: ["hermes-agent", "installation", "vps", "docker", "agent-ia", "nlpd"]
featured: false
draft: true
readingTime: 11
slug: installer-hermes-agent
faqs:
  - question: "Comment installer Hermes Agent le plus simplement ?"
    answer: "Sur Linux, macOS ou WSL2, une commande officielle suffit : curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash. Elle installe Hermes avec ses dépendances, puis tu lances hermes model pour choisir ton modèle. Sous Windows, il existe un script PowerShell et des paquets Desktop. Procédure relue dans la documentation officielle le 19.11.2026."
  - question: "Quelle configuration de serveur faut-il pour Hermes Agent ?"
    answer: "La documentation officielle ne donne ni RAM ni disque minimum. Mon comparatif de VPS reprend les repères de sources tierces : 2 Go au minimum avec un modèle appelé par API, 4 Go pour être à l'aise, 8 Go si le serveur héberge d'autres services."
  - question: "Faut-il choisir Docker ou l'installation directe ?"
    answer: "Docker isole Hermes et se met à jour en changeant d'image, mais il demande de gérer un volume et des ports. L'installation directe donne la commande hermes update et un service systemd. Choisis Docker si tu l'utilises déjà, l'installation directe sinon."
  - question: "Hermes Agent est-il gratuit ?"
    answer: "Le logiciel l'est : le dépôt GitHub affiche la licence MIT (vérifié le 19.11.2026). Tu paies le serveur, les appels au modèle de langage et, si tu ne veux pas t'en occuper, l'installation et la maintenance."
  - question: "Un VPS en Suisse rend-il Hermes Agent conforme à la nLPD ?"
    answer: "Non, pas à lui seul. Le serveur peut être en Suisse, mais le texte que l'agent envoie au modèle de langage est traité chez le fournisseur du modèle, souvent à l'étranger. La conformité dépend de ce qui transite, du fournisseur et de ce que tu documentes."
  - question: "À quelle fréquence faut-il mettre à jour Hermes Agent ?"
    answer: "Hermes sort une version par semaine. La version stable la plus récente au 19.11.2026 est la v0.23.2, publiée le 16.11.2026. Une mise à jour par mois suffit pour un usage tranquille ; pour un agent qui touche à tes mails, lis les notes de version avant chaque passage."
---

Pour installer Hermes Agent, il te faut une commande et un serveur Linux : sur Linux, macOS ou WSL2, `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash` installe l'agent, puis `hermes model` te fait choisir ton modèle de langage. La partie qui prend du temps arrive après : brancher une messagerie, limiter qui peut parler à l'agent, le garder allumé et le mettre à jour chaque semaine.

Cet article est la procédure, relue dans la documentation officielle de Nous Research le 19.11.2026. Si tu veux d'abord comprendre ce que fait l'agent, lis [ce qu'est Hermes Agent pour une PME](/blog/hermes-agent-ia-pme). Pour choisir l'hébergeur, j'ai un [comparatif des VPS pour Hermes Agent](/blog/meilleurs-vps-hermes-agent-suisse). Et si tu préfères ne pas t'en charger, c'est mon métier : je propose l'[installation de Hermes Agent sur mesure](/hermes) pour les PME romandes.

> **L'essentiel en bref**
>
> - L'installation tient en une commande officielle, mais compte plusieurs heures pour une configuration stable (messagerie, accès, service, sauvegarde).
> - Trois chemins : script direct sur un VPS, Docker, ou paquet Desktop sur un poste Windows ou Mac.
> - Hermes sort une version par semaine : la mise à jour fait partie de l'installation, pas d'un chantier à part.
> - Un serveur en Suisse garde tes fichiers en Suisse, mais pas le texte envoyé au modèle de langage.
> - Première année : environ CHF 200 à 800 en le faisant toi-même, hors ton temps, selon le modèle choisi.

Les commandes viennent de la documentation officielle. Je n'ai pas chronométré une installation sur un serveur vierge pour cet article : quand je donne une durée, c'est une estimation, et je le dis.

## Installer Hermes Agent : quelle méthode choisir

La méthode dépend de la machine. Sur un serveur, prends le script ou Docker. Sur un poste de travail, prends le paquet Desktop. Voici ce que dit la documentation officielle au 19.11.2026.

| Méthode | Pour qui | Mise à jour |
|---|---|---|
| Script `install.sh` (Linux, macOS, WSL2) | Un VPS ou un poste Linux | `hermes update` |
| Script `install.ps1` (Windows natif, PowerShell) | Un poste Windows sans WSL2 | `hermes update` |
| Paquet Desktop (Windows, macOS Apple Silicon) | Tester sur un poste, sans terminal | Bouton de mise à jour de l'application |
| Image Docker `nousresearch/hermes-agent` | Un serveur qui fait déjà tourner d'autres conteneurs | Tirer la nouvelle image et recréer le conteneur |
| Paquet Termux (Android) | Un téléphone, rarement pertinent en PME | Mise à jour du paquet |

Deux limites à connaître avant de commencer. Le paquet macOS ne tourne que sur les puces Apple Silicon : un Mac Intel n'est pas supporté. Et l'installateur de la version courante s'appuie sur Python 3.14, mais il récupère lui-même ses versions épinglées de Python et de Node.js, donc tu n'as rien à préparer de ce côté. Pour le script POSIX, il faut seulement Git, curl, tar et un outil de somme SHA-256.

Dernier point, un réflexe de sécurité : n'installe Hermes que depuis les adresses officielles. La page « Official Domains & Phishing Safety » de la documentation liste `hermes-agent.nousresearch.com` pour les scripts et `nousresearch` pour l'image Docker. Une image sous un autre nom n'est pas la leur. Et puisque la commande est un `curl | bash`, je télécharge d'abord le script, je le lis, puis je le lance. C'est ma pratique, pas une exigence de la documentation.

## Hermes Agent sur un VPS : installation, modèle et service

Sur un VPS, la procédure tient en trois temps : préparer le serveur et lancer la commande officielle, choisir le modèle et la messagerie, puis installer le service. Mon propre serveur est un Hostinger KVM 2 (2 vCPU, 8 Go de RAM) où Hermes cohabite avec un système de mailing et un outil de statistiques, comme je l'explique dans le comparatif. Il est hors de Suisse, ce que je dis aussi là-bas.

Pour te donner un ordre de grandeur réel, voici ce que j'ai relevé le 19.11.2026 sur ce serveur, qui fait tourner les agents de Barber Concept depuis le 24.09.2026 :

| Mesure | Valeur relevée |
|---|---|
| Mémoire de la passerelle Hermes | 400 Mo, sur 1,7 Go utilisés au total |
| Profils d'agent | 11, un par métier (mails, avis Google, newsletter, marketing…) |
| Tâches planifiées | 21 |
| Exécutions journalisées | plus de 2 600, dont 1,5 % en échec |
| Causes d'échec relevées | limite de débit du modèle, configuration, authentification |

Un serveur à 2 vCPU et 8 Go suffit donc largement pour une PME. Les échecs viennent presque tous de l'extérieur (le fournisseur du modèle, un jeton expiré), pas de Hermes.

### Préparer le serveur et lancer la commande officielle

Connecte-toi en SSH, jamais par la console web de l'hébergeur : la documentation Docker prévient que ces consoles transmettent mal certains caractères (les deux-points, l'arobase) et corrompent silencieusement les commandes et les clés collées. Crée ensuite un utilisateur sans droits d'administration pour faire tourner l'agent, et lance l'installateur depuis cet utilisateur. La documentation le décrit dans sa section « Non-Sudo / System Service User Installs » : le dossier personnel, la configuration et le lanceur doivent appartenir à l'utilisateur de service.

Un détail sur les systèmes Debian et Ubuntu minimaux : le Node.js géré par l'installateur a besoin de la bibliothèque `libatomic`. L'installateur la pose lui-même s'il est lancé en root ou avec `sudo -n`. Avec un utilisateur sans sudo, il t'affiche la commande exacte à faire passer par un administrateur.

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
source ~/.bashrc
hermes
```

L'installateur place le code dans `~/.hermes/hermes-agent/`, un lanceur dans `~/.local/bin/hermes` et tes données dans `~/.hermes/`. Une installation neuve part sur la dernière version stable, celle que `hermes update` suivra ensuite. Si tu veux la pointe de la branche principale, il faut le demander explicitement avec l'option `--channel main`. Pour un agent de production, je reste sur la version stable.

### Modèle, clé API et Telegram

```bash
hermes model
hermes config set OPENROUTER_API_KEY ta_cle
```

`hermes model` t'aide à choisir un fournisseur. La documentation liste de nombreux fournisseurs, dont OpenRouter et l'API OpenAI directe, et prévoit aussi un point d'accès personnalisé via `model.base_url`. Pour garder le traitement en Suisse, ce point d'accès personnalisé est la piste, mais je ne l'ai pas testé avec un fournisseur suisse, donc je ne le garantis pas. Pour mon agent de mails, le modèle a été choisi après un test sur 10 vraies demandes, parmi deux ou trois modèles bon marché : je détaille la démarche dans l'article sur l'[agent IA qui répond aux mails des clients](/blog/agent-ia-repondre-mails-clients).

Si tu veux un seul abonnement pour le modèle et les outils, la documentation propose `hermes setup --portal` (Nous Portal). Je n'ai pas vérifié son prix, je ne le chiffre donc pas ici.

```bash
hermes gateway setup
```

Cette commande configure les messageries de façon interactive. La passerelle de Hermes gère Telegram, Slack, Signal, WhatsApp, l'e-mail et d'autres. Sur mes installations publiées, Telegram sert de canal d'équipe avec des boutons de validation, et la boîte mail passe par IMAP et SMTP.

Ensuite, ferme la porte. Un agent qui peut agir sur un serveur ne doit répondre qu'à des personnes connues. La documentation prévoit une liste d'identifiants autorisés par plateforme, par exemple `TELEGRAM_ALLOWED_USERS=123456789,987654321`, et un système d'appairage par code (`hermes pairing approve telegram CODE`). Elle déconseille expressément l'option qui autorise tout le monde (`GATEWAY_ALLOW_ALL_USERS`) pour un agent qui a accès à un terminal. Je ne l'active jamais.

### Service systemd pour garder l'agent allumé

```bash
hermes gateway install
sudo loginctl enable-linger $USER
hermes gateway status
```

`hermes gateway install` crée un service utilisateur sous systemd. La commande `loginctl enable-linger` lui permet de continuer après ta déconnexion SSH. Pour un démarrage au boot, la documentation propose `sudo hermes gateway install --system`, qui crée un service système exécuté sous ton utilisateur. Les journaux se lisent avec `journalctl --user -u hermes-gateway -f`. Termine par `hermes doctor`, qui liste ce qui manque.

Sur mes propres agents, la première version de l'agent de mails relançait le modèle à chaque message : il n'avait donc aucun souvenir. La seconde tourne en continu, avec sa mémoire. C'est la raison pour laquelle je passe par la passerelle en service plutôt que par des lancements ponctuels.

## Hermes Agent avec Docker : commandes, volume et pièges

Avec Docker, la configuration se fait en deux temps : un premier lancement interactif pour le `setup`, puis un conteneur permanent qui exécute la passerelle. Les deux partagent le même dossier de données monté sur l'hôte.

```bash
mkdir -p ~/.hermes
docker run -it --rm \
  -v ~/.hermes:/opt/data \
  nousresearch/hermes-agent setup

docker run -d \
  --name hermes \
  --restart unless-stopped \
  -v ~/.hermes:/opt/data \
  nousresearch/hermes-agent gateway run
```

Le volume `~/.hermes:/opt/data` contient tes clés et la mémoire de l'agent : si tu l'oublies, tout repart de zéro à chaque redémarrage du conteneur. Le port 8642 expose une API compatible OpenAI et un point de contrôle de santé, mais il est facultatif si tu n'utilises que des messageries. Ne le publie pas sur Internet sans nécessité : la documentation rappelle qu'ouvrir un port sur une machine exposée est un risque, et que l'API exige une clé d'au moins 8 caractères dès qu'elle écoute hors du conteneur.

Le tableau de bord web s'active avec `HERMES_DASHBOARD=1` sur le port 9119. Depuis le durcissement de juin 2026 décrit dans la documentation, une écoute hors boucle locale exige un fournisseur d'authentification. Je ne l'expose pas publiquement non plus.

Côté versions, l'image existe avec les étiquettes `latest` et `stable` (image acceptée par le contrôle de version stable), `main` (développement) et `X.Y.Z` (version précise). Pour un déploiement que tu veux figer, la documentation recommande d'épingler un condensat (digest). Pour mettre à jour, tu tires l'image voulue et tu recrées le conteneur avec le même montage. Un Docker Compose fait la même chose en un fichier : la documentation en donne un exemple complet, que je ne recopie pas ici puisqu'il évolue avec les versions.

## Hermes Agent en production : sécurité, mises à jour et erreurs fréquentes

Une installation qui fonctionne le premier jour n'est pas une installation maintenue. Trois sujets reviennent : qui peut parler à l'agent, quand tu mets à jour, et ce que tu sauvegardes.

- **Les accès.** Liste d'utilisateurs autorisés, ports fermés, tableau de bord non public, clés d'API limitées en dépense chez le fournisseur du modèle. Sur mon agent de mails, l'IA qui lit le texte d'un inconnu n'a aucun outil, et l'agent qui parle à l'équipe n'a pas d'outil d'envoi : seul un clic humain envoie. Ces garde-fous sont décrits dans mon article sur les [garde-fous d'un agent IA](/blog/garde-fous-ia-validations-audit).
- **Les mises à jour.** Hermes sort une version par semaine. Au 19.11.2026, la version stable est la v0.23.2 (16.11.2026) ; deux versions candidates (canary) du 17 et du 18 novembre existent aussi, marquées comme préversions. Une installation par script suit uniquement les versions stables avec `hermes update`, jamais les préversions. Passe d'une version à l'autre en lisant les notes, et après chaque mise à jour lance `hermes config check`, puis `hermes config migrate` si la configuration a changé.
- **Les sauvegardes.** Ce qui compte est le dossier de données (`~/.hermes`, ou le volume `/opt/data` avec Docker) : configuration, clés, mémoire. La documentation décrit `hermes backup` et `hermes import` pour déménager un agent sur une autre machine. Teste la restauration une fois, avant d'en avoir besoin.

Les erreurs que je vois le plus souvent chez ceux qui démarrent :

1. Coller des commandes depuis la console web de l'hébergeur et se retrouver avec une clé corrompue.
2. Oublier de monter le volume de données avec Docker.
3. Lancer l'installation en root et s'étonner de ne pas retrouver `hermes` pour l'utilisateur de service.
4. Laisser l'agent répondre à n'importe quel compte de messagerie.
5. Ne jamais mettre à jour, puis tout mettre à jour d'un coup après trois mois.

## Installer Hermes Agent pour une PME suisse : hébergement, nLPD et coût

Pour une PME suisse, trois questions comptent : où sont les données, que voit le fournisseur du modèle, et combien ça coûte la première année.

**L'hébergement.** Le choix d'un serveur en Suisse relève d'un comparatif à part : j'ai relevé dix hébergeurs, avec leurs prix, dans [mon top des VPS pour Hermes Agent](/blog/meilleurs-vps-hermes-agent-suisse). Au 12.10.2026, l'offre suisse d'entrée de gamme la moins chère était l'Infomaniak VPS Lite (2 vCPU, 4 Go) à CHF 7.20 par mois HT, avec un engagement de 12 mois payé d'avance et sans snapshots ; hosttech vServer démarrait à CHF 19.90 pour la gamme Foggy, avec sauvegardes incluses. Je n'ai pas revérifié ces prix pour cet article : contrôle-les avant de commander.

**La nLPD.** Un serveur en Suisse protège l'endroit où sont stockés tes fichiers et la mémoire de l'agent. Il ne protège pas l'endroit où le texte est traité : à chaque demande, Hermes envoie du contenu au fournisseur du modèle, souvent à l'étranger. Aucun hébergeur ne te garantit la conformité à ta place. Ce qui compte, c'est de savoir quelles données partent au modèle, de les minimiser, et de documenter le tout. Le cadre est expliqué dans [IA et nLPD en Suisse](/blog/ia-nlpd-conformite-suisse).

**Le coût de la première année.** Voici le budget si tu installes toi-même, avec les sources de chaque ligne.

| Poste | Montant | Source |
|---|---|---|
| Hermes Agent (licence MIT) | CHF 0 | Dépôt GitHub, 19.11.2026 |
| Serveur, Infomaniak VPS Lite 4 Go | CHF 86.40 par an HT (7.20 × 12) | Comparatif VPS, relevé du 12.10.2026 |
| Modèle de langage | de 2 $ par mois (agent de mails mesuré, 100 demandes et 300 messages) à CHF 10 à 60 par mois (fourchette de mon guide de prix) | Articles publiés |
| Installation par un prestataire | dès CHF 1'500 pour un agent sur une tâche précise | [/tarifs](/tarifs) |
| Maintenance | 1 à 2 h par mois | Guide Hermes Agent pour PME |

En le faisant toi-même, ça fait donc environ CHF 200 à 800 pour la première année (le serveur plus un modèle entre CHF 10 et 60 par mois), sans compter ton temps. Mon comparatif des coûts est dans le [prix réel d'un agent IA en Suisse](/blog/prix-agent-ia-automatisation-suisse).

**Quand faire installer.** Si tu n'as personne pour surveiller un serveur, si l'agent doit lire des mails clients ou si tu veux des validations humaines câblées dès le départ, le temps passé dépasse vite le coût d'une prestation. Sur [/hermes](/hermes) et [/tarifs](/tarifs), la mise en place est affichée dès CHF 1'500 pour un agent sur une tâche précise, et le fonctionnement dès CHF 15 par mois, payé directement à l'hébergeur. Le délai annoncé est de deux à trois semaines du cadrage à la production. Le choix de l'hébergeur fait partie du cadrage : on décide ensemble si ta contrainte impose la Suisse.

## FAQ : installer Hermes Agent (Windows, Docker, VPS, nLPD)

### Comment installer Hermes Agent le plus simplement ?

Sur Linux, macOS ou WSL2, une commande officielle suffit : `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`. Elle installe Hermes avec ses dépendances, puis tu lances `hermes model` pour choisir ton modèle. Sous Windows, il existe un script PowerShell et des paquets Desktop. Procédure relue dans la documentation officielle le 19.11.2026.

### Quelle configuration de serveur faut-il pour Hermes Agent ?

La documentation officielle ne donne ni RAM ni disque minimum. Mon comparatif de VPS reprend les repères de sources tierces : 2 Go au minimum avec un modèle appelé par API, 4 Go pour être à l'aise, 8 Go si le serveur héberge d'autres services.

### Faut-il choisir Docker ou l'installation directe ?

Docker isole Hermes et se met à jour en changeant d'image, mais il demande de gérer un volume et des ports. L'installation directe donne la commande `hermes update` et un service systemd. Choisis Docker si tu l'utilises déjà, l'installation directe sinon.

### Hermes Agent est-il gratuit ?

Le logiciel l'est : le dépôt GitHub affiche la licence MIT (vérifié le 19.11.2026). Tu paies le serveur, les appels au modèle de langage et, si tu ne veux pas t'en occuper, l'installation et la maintenance.

### Un VPS en Suisse rend-il Hermes Agent conforme à la nLPD ?

Non, pas à lui seul. Le serveur peut être en Suisse, mais le texte que l'agent envoie au modèle de langage est traité chez le fournisseur du modèle, souvent à l'étranger. La conformité dépend de ce qui transite, du fournisseur et de ce que tu documentes.

### À quelle fréquence faut-il mettre à jour Hermes Agent ?

Hermes sort une version par semaine. La version stable la plus récente au 19.11.2026 est la v0.23.2, publiée le 16.11.2026. Une mise à jour par mois suffit pour un usage tranquille ; pour un agent qui touche à tes mails, lis les notes de version avant chaque passage.

## Conclusion : installer Hermes Agent et le garder à jour

Installer Hermes Agent prend une commande. Le rendre fiable prend une configuration d'accès, un service qui redémarre seul, des sauvegardes testées et une mise à jour régulière. En Suisse, ajoute la question du modèle de langage, qui est le vrai point de passage de tes données.

Si tu veux faire installer et maintenir l'agent sur ton cas, on cadre le périmètre, l'hébergeur et les validations avant de toucher au serveur.

[**Cadrer mon installation de Hermes Agent →**](/contact?utm_source=blog&utm_medium=article&utm_campaign=installer-hermes-agent)

---

## Sources et Références

Tous les accès sont datés du 19.11.2026.

- [Nous Research, installation de Hermes Agent](https://hermes-agent.nousresearch.com/docs/getting-started/installation) : commandes, prérequis, disposition des fichiers, utilisateur de service.
- [Nous Research, mise à jour et désinstallation](https://hermes-agent.nousresearch.com/docs/getting-started/updating) : canal stable, `hermes update`, mise à jour Docker.
- [Nous Research, Docker](https://hermes-agent.nousresearch.com/docs/user-guide/docker) : commandes `setup` et `gateway run`, volume, ports, étiquettes d'image, avertissement sur les consoles web.
- [Nous Research, passerelle de messagerie](https://hermes-agent.nousresearch.com/docs/user-guide/messaging) : service systemd, utilisateurs autorisés, appairage.
- [Nous Research, domaines officiels](https://hermes-agent.nousresearch.com/docs/getting-started/official-domains) : adresses officielles des scripts et de l'image Docker.
- [Dépôt GitHub NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) et [ses versions](https://github.com/NousResearch/hermes-agent/releases) : licence MIT, v0.23.2 du 16.11.2026, préversions canary des 17 et 18.11.2026.
- Prix des hébergeurs : [mon comparatif des VPS](/blog/meilleurs-vps-hermes-agent-suisse), relevés du 12.10.2026.
