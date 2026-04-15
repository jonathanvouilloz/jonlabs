# Prompt Claude Cowork — Audit de 50 sites d'indépendants romands

> Copier/coller ce prompt dans une session Claude Cowork. Prévoir 2-3h d'exécution autonome.
> Livrable final : fichier CSV avec 50 lignes × ~25 colonnes de métriques.

---

## Prompt à coller

Tu es mon analyste SEO senior. Mission : auditer 50 sites web d'indépendants et petites PME de Suisse romande pour une étude que je vais publier sur mon blog (jonlabs.ch, article "J'ai audité 50 sites d'indépendants romands"). L'article est déjà rédigé avec des placeholders `[DATA-À-INJECTER]` — ton travail est de me produire les vraies données chiffrées pour remplir ces trous.

## Contexte

- Marché : Suisse romande (GE, VD, NE, FR, VS, JU)
- Cible : **indépendants ou TPE (1-15 employés)** qui ont un site web "vitrine" (pas e-commerce, pas SaaS, pas de gros site corporate)
- Période de l'étude : avril 2026
- Objectif éditorial : démontrer qu'une majorité de ces sites sont "dormants" et que ça leur coûte des clients
- Ton des constats : factuel, sans juger, basé sur des faits mesurables

## Phase 1 — Découverte des 50 sites (≈45 min)

Tu dois constituer un échantillon **diversifié et représentatif**. Règles de sélection :

### Répartition sectorielle cible (pondération sur 50)
- 10 artisans (plombiers, électriciens, menuisiers, peintres, carreleurs, serruriers)
- 8 santé paramédicale (ostéopathes, physiothérapeutes, psychologues, nutritionnistes — PAS de médecins/dentistes avec Doctolib)
- 6 professions libérales (avocats indés, comptables indés, notaires, architectes, consultants)
- 6 beauté/bien-être (coiffeurs, barbiers, esthéticiennes, masseurs, coachs sportifs, studios yoga)
- 5 restauration indépendante (petits restos, bistrots, cafés locaux — PAS de chaînes)
- 5 commerces de niche (librairies indépendantes, caves, fromageries, fleuristes, boutiques spécialisées)
- 5 services PME (agences voyage indés, déménageurs, services à domicile, garages indés)
- 5 formateurs/coachs indés (coachs de vie, formateurs corporate, profs privés)

### Répartition géographique cible
- 20 Genève / canton GE
- 15 canton de Vaud (Lausanne, Nyon, Morges, Vevey, Montreux)
- 6 Neuchâtel / Jura
- 5 Fribourg
- 4 Valais

### Critères de sélection
- Site web propre (pas page Facebook uniquement, pas page annuaire)
- Nom de domaine propre (pas un sous-domaine type `.wixsite.com` obligatoire, mais c'est OK si quelques-uns en ont — c'est même intéressant pour les constats)
- Entreprise active (pas un site fantôme d'une boîte fermée — vérifier via mention légale ou réseaux sociaux récents)

### Méthode de découverte

Utilise Google avec des requêtes variées du type :
- `"plombier" Genève site:.ch`
- `ostéopathe Lausanne`
- `menuisier indépendant Vaud`
- `cabinet avocat Neuchâtel`
- Puis explore les résultats pages 1-3, évite les annuaires (local.ch, pagesjaunes, yelp, yellow.local.ch)
- Vérifie rapidement que c'est bien un indépendant/TPE (About page, mentions légales, "Je suis..." en homepage)

**Livrable phase 1** : liste brute de 50 URLs + secteur + canton dans un fichier `sites-audites-raw.csv`.

## Phase 2 — Audit de chaque site (≈90 min)

Pour chacun des 50 sites, mesure et enregistre les champs suivants :

### Identification
- `url` — URL de la homepage (sans trailing slash)
- `secteur` — catégorie parmi les 8 ci-dessus
- `canton` — GE, VD, NE, FR, VS, JU
- `ville` — ville principale mentionnée sur le site
- `date_audit` — date du jour (format YYYY-MM-DD)

### Fraîcheur du contenu
- `blog_present` — oui/non (existence d'une section blog/actus/articles)
- `nb_articles_blog` — entier (nombre visible d'articles si blog, sinon 0)
- `dernier_article_date` — date du dernier article publié (YYYY-MM-DD), "never" si pas de blog, "undated" si blog sans dates
- `mois_depuis_dernier_article` — entier calculé (ou "N/A")
- `derniere_modif_sitemap` — date du `lastmod` le plus récent dans `/sitemap.xml` (YYYY-MM-DD ou "N/A" si pas de sitemap)
- `copyright_annee` — année affichée dans le footer (ex: 2024) ou "absent"
- `wayback_last_snapshot_diff_date` — via https://web.archive.org/web/timemap/link/{URL}, date du dernier snapshot où le HTML a changé substantiellement (YYYY-MM-DD)

### Technique (Lighthouse ou estimation manuelle)
- `lighthouse_perf_mobile` — score sur 100 (via https://pagespeed.web.dev/ avec config mobile). Si tu ne peux pas lancer Lighthouse, note "N/A" et passe.
- `lighthouse_seo` — score sur 100
- `lighthouse_accessibility` — score sur 100
- `https` — oui/non
- `mobile_responsive` — oui/non (test rapide en redimensionnant la fenêtre ou mode device)

### SEO on-page
- `title_present` — oui/non (balise `<title>` non vide et non générique type "Home")
- `meta_description_present` — oui/non
- `h1_unique` — oui/non (1 seul H1 sur la homepage)
- `schema_org_present` — oui/non (détectable via "schema.org" dans le HTML source)
- `schema_types` — liste des types schema détectés (ex: "LocalBusiness, Person") ou "none"
- `nb_pages_indexees` — via Google `site:domaine.ch`, nombre de résultats (estimation Google)

### Google Business Profile
- `gmb_present` — oui/non (chercher le nom de l'entreprise sur Google Maps)
- `gmb_derniere_photo_date` — date estimée de la dernière photo publiée par le propriétaire (pas par les visiteurs). Si impossible à estimer, mettre "unknown"
- `gmb_dernier_post_date` — date du dernier post Google Business Profile (YYYY-MM-DD ou "never")
- `gmb_nb_avis` — nombre d'avis Google
- `gmb_note_moyenne` — note /5 (ex: 4.6)
- `gmb_reponses_avis_pct` — estimation du % d'avis auquel le propriétaire a répondu (0, 25, 50, 75, 100)
- `gmb_horaires_visibles` — oui/non
- `gmb_telephone_visible` — oui/non

### Conversion
- `cta_homepage_present` — oui/non (un bouton clair type "Contactez-moi", "Prendre RDV", "Devis gratuit")
- `formulaire_contact_present` — oui/non
- `tel_cliquable_mobile` — oui/non (lien `tel:` détectable)
- `preuves_sociales_presentes` — oui/non (avis, témoignages, logos clients visibles)

### E-E-A-T
- `page_about_present` — oui/non
- `auteur_nomme` — oui/non (nom de l'indépendant visible)
- `photo_auteur_presente` — oui/non
- `mentions_legales_presentes` — oui/non
- `certifications_visibles` — oui/non (diplômes, certifications pro, affiliations)

### Réseaux sociaux
- `liens_rs_presents` — oui/non
- `rs_actifs` — liste des RS avec un post de < 3 mois (ex: "instagram, linkedin") ou "aucun"

### Classification finale (ta synthèse)
- `archetype` — 1 des 4 valeurs : `vitrine-fossile`, `blog-abandonne`, `squelette-mobile-casse`, `vivant` (ton jugement d'analyste)
- `score_activite` — sur 20, ta note globale de "vivant-ness" du site (calibrage : vitrine fossile 0-5, blog abandonné 6-10, squelette 4-8, vivant 14-20)
- `notes` — 1-2 phrases max de commentaire libre si quelque chose est frappant

## Phase 3 — Agrégation et constats (≈30 min)

Une fois les 50 lignes remplies, produis :

### Fichier 1 — `audit-50-sites-data.csv`
Le CSV brut avec les 50 lignes × ~40 colonnes. Anonymiser est OPTIONNEL — pour la publication finale on remplacera les URLs par des identifiants A01-A50, mais pour ton livrable garde les URLs originales pour que je puisse vérifier.

### Fichier 2 — `audit-50-sites-constats.md`
Document markdown qui me donne les chiffres à injecter dans l'article `audit-50-sites-indeps-romands.md`. Format attendu pour chaque placeholder `[DATA-À-INJECTER]` :

```
### Constat #1 — Sites non publiés depuis 12+ mois
- % sites sans nouveau contenu depuis 12 mois : XX%
- % sites sans nouveau contenu depuis 24 mois : XX%
- Breakdown par secteur : artisans XX%, santé XX%, etc.
- Citation marquante : "[observation terrain saillante]"
```

Reprends **chacun des 7 constats** du brief A2 (`docs/Pourquoi avoir un site actif cluster/BRIEF-A2.md`) et fournis les chiffres. Plus :
- Répartition cantonale finale du panel (nombre exact par canton)
- Répartition sectorielle finale
- Médiane + p25 + p75 du score Lighthouse perf mobile
- % sites avec schema.org, % avec schema minimal, % sans schema
- Année médiane du dernier article de blog (pour les sites qui ont un blog)
- % copyright obsolète (défini comme ≠ 2025 ET ≠ 2026)
- Estimation du coût cumulé pour le marché romand (méthodo détaillée ci-dessous)

### Méthodologie du coût cumulé (Constat "Coût économique")
1. Prends le taux horaire moyen d'un indépendant romand (OFS : ~95 CHF/h pour services)
2. Estime le manque à gagner mensuel moyen par site dormant (hypothèse conservatrice : 2 prospects perdus/mois × taux de conversion 20% × panier moyen de 800 CHF = 320 CHF/mois/site)
3. Multiplie par le nombre total d'indépendants romands estimé (environ 50 000 selon OFS — à vérifier)
4. Multiplie par le % de sites "dormants" dans notre panel (extrapolation)
5. Donne une fourchette (basse/haute) en CHF millions/an

Pour chaque chiffre, **indique ta source** et ta **méthode de calcul**, même sommaire.

### Fichier 3 — `audit-50-sites-patterns-positifs.md`
Liste les 5 sites du panel qui ont le meilleur `score_activite`. Pour chacun :
- URL + secteur + canton
- Ce qu'ils font bien (3-5 bullets concrets)
- Ce qui ressort en commun entre ces 5 meilleurs

Anonymisation : remplace les URLs par "Site A", "Site B"... dans le markdown final si tu ne veux pas les citer nommément. Mais conserve les URLs réelles dans le CSV.

## Règles d'exécution

- **Ne pas inventer de chiffres.** Si un site ne permet pas de mesurer un champ (ex: Lighthouse inaccessible, Wayback vide), mets "N/A" et passe. Mieux vaut un N/A qu'un chiffre faux.
- **Sois efficace.** Tu n'as pas besoin d'explorer chaque site en profondeur. 2-3 minutes max par site pour la phase 2, sauf si tu tombes sur un archétype intéressant à documenter.
- **Conserve l'anonymat.** Tu peux noter les URLs dans le CSV de travail, mais dans les livrables markdown finaux destinés à l'article, utilise des identifiants A01-A50.
- **Pas de jugement moral.** L'article est factuel. On ne moque pas les indépendants qui ont des sites dormants — on constate et on explique pourquoi ça leur coûte cher.
- **Signale les biais.** Si ton échantillon est biaisé (ex: tu n'as trouvé que des sites trouvables via Google = sites déjà indexés donc pas les pires), note-le dans le markdown final.

## Livrables finaux attendus

Dans un dossier que je pourrai télécharger, produis :

1. `audit-50-sites-data.csv` — données brutes (50 lignes × ~40 colonnes)
2. `audit-50-sites-constats.md` — chiffres agrégés + méthodologie par constat
3. `audit-50-sites-patterns-positifs.md` — top 5 + patterns communs
4. `audit-50-sites-methodologie.md` — résumé de ta méthode (requêtes Google utilisées, outils, limites de l'étude, biais identifiés)
5. `audit-50-sites-log.md` — journal chronologique de ce que tu as fait, heure par heure, avec les blocages rencontrés (utile pour moi quand je relirai)

## Feedback loop

Si pendant la phase 1 ou 2 tu rencontres un problème structurel (ex: 80% des sites que tu trouves sont des sites WordPress quasi-identiques donc le panel manque de diversité réelle), **arrête-toi et reviens vers moi** avec une note sur le problème et une proposition d'ajustement du plan. Je préfère perdre 15 min à recadrer que recevoir des données inexploitables.

---

**Go.** Commence par la phase 1 et montre-moi les 50 URLs avant d'attaquer la phase 2 pour que je valide l'échantillon.
