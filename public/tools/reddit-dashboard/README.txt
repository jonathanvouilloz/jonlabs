Reddit Dashboard — démarrage rapide
===================================

Petit outil LOCAL pour scraper des discussions Reddit sur un mot-clé (sans API)
et les lire dans une interface web propre. Idéal pour nourrir un prompt SEO avec
de la vraie parole d'utilisateurs.

Garde les 4 fichiers (dashboard.py, dashboard.html, reddit_scraper.py et ce README)
dans le MÊME dossier.

Prérequis : Python 3 installé.


1) Installer les dépendances (une seule fois)
---------------------------------------------
   pip install -r requirements.txt
   python -m playwright install chromium


2) Lancer le serveur
--------------------
   python dashboard.py

   Laisse cette fenêtre ouverte : c'est le serveur.


3) Ouvrir le dashboard
----------------------
   Dans ton navigateur : http://localhost:8765

   Entre un mot-clé, choisis le nombre de threads, clique sur "run".
   Le résultat est sauvé dans extraction_reddit_<mot-clé>.txt à côté des scripts.


Pour arrêter le serveur : Ctrl + C dans la fenêtre du terminal.

Guide complet (installation, étapes, dépannage) :
   GUIDE-reddit-dashboard.md
   ou en ligne : https://www.jonlabs.ch/outils/reddit-dashboard

Outil partagé librement par Jon Labs — https://www.jonlabs.ch
