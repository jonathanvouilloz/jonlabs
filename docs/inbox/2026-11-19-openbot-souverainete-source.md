# Source article OpenBot / souveraineté (fournie par Jon le 2026-11-19)

## Vidéo associée
- YouTube : https://www.youtube.com/watch?v=mYakiXsKi1o — « On teste OpenBot, l'agent IA qui révolutionne le game ? » (partie 1, 20:49)
- Transcript brut (temps source) : /home/jon/Vidéos/openbot-ep1/work/transcript.txt (+ transcript.json)
- Notes de montage + chapitres (timecodes finaux) : /home/jon/Vidéos/openbot-ep1/out/edit_notes.md
- Cartes résumé souveraineté (texte) : /home/jon/Vidéos/openbot-ep1/work/split/gen_cards.py (dict SCENES)

## Recherche fournie par Jon (générée avec ChatGPT : chaque fait est à VÉRIFIER sur la source primaire avant usage)
- Repo : https://github.com/nightly-labs/openbot
- Doc self-hosting : https://github.com/nightly-labs/openbot/blob/main/docs/self-hosting.md
- Par défaut, même sur ton VPS : exécution des agents, fichiers, conversations, mémoire = chez toi ; authentification, gestion des comptes, connexions à distance = serveurs OpenBot (api.openbot.run, signal.openbot.run) ; modèles IA = fournisseur au choix.
- Auto-héberger l'auth est possible (API d'authentification, service Signal, serveur TURN, clés de signature, comptes) : Cloudflare Workers, D1, R2, un serveur Linux, un SMTP. On perd l'app web officielle, les intégrations hébergées, une partie de l'accès mobile.
- Licence actuelle : PolyForm Noncommercial 1.0.0 → code accessible, usage commercial = licence distincte. Pas open source au sens OSI. Versions ≤ 0.1.11 sous Apache 2.0.
- Affirmation à vérifier : le 29.09.2026 les mainteneurs auraient d'abord refusé l'auto-hébergement des services d'auth/connexion, puis publié la doc.
- Tableau comparatif Hermes / OpenClaw / OpenBot (self-hosting, compte éditeur, accès distant indépendant, licence, install VPS).
- Angle clé : self-hosted (le logiciel tourne chez toi) ≠ souverain (tu peux continuer à l'utiliser/administrer/faire évoluer si l'éditeur disparaît).
- Avis de Jon : Hermes ou OpenClaw comme moteur principal pour la souveraineté ; OpenBot éventuellement comme interface complémentaire.
