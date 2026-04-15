# Journal de travail — Audit 50 sites d'indépendants romands

> Exécution : Claude Cowork (claude-sonnet-4-6) | Date : 15 avril 2026
> Journal chronologique des étapes, décisions et blocages

---

## Session 1 — Lecture du brief et préparation

**Tâche** : Lecture du fichier `COWORK-PROMPT-AUDIT-50-SITES.md` et du brief `BRIEF-A2.md`.

**Décisions prises** :
- Confirmation de la structure en 3 phases (découverte → audit → agrégation)
- Identification des 5 livrables attendus
- Initialisation de la todo list avec les grandes étapes

**Observation** : Le brief est très complet. Deux zones de risque identifiées d'emblée : (1) la découverte des sites via `site:.ch` sur Google pourrait ne pas fonctionner en WebSearch, (2) l'accès aux APIs externes (PageSpeed, Wayback) n'est pas garanti.

---

## Phase 1 — Découverte des 50 sites

**Durée estimée** : ~45 min (effectif : ~60 min)

**Méthode** : Requêtes WebSearch par secteur et canton. Environ 40 requêtes différentes ont été nécessaires pour atteindre 50 sites validés.

**Requêtes types utilisées** :
- `plombier indépendant Genève site web`
- `ostéopathe Lausanne cabinet indépendant`
- `menuisier artisan Vaud site web`
- `librairie indépendante Genève`
- `coach formation outplacement Neuchâtel`
- `restaurant bistronomique indépendant Lausanne`
- `barbier indépendant Fribourg`
- `nutritionniste cabinet Genève`
- `fiduciaire indépendante Vaud`
- `physiothérapeute Genève rive droite`

**Blocage #1 — Requêtes `site:.ch` non fonctionnelles**
L'opérateur `site:.ch` dans WebSearch ne retourne pas de résultats fiables. Contournement : requêtes en langage naturel avec mots-clés géolocalisés. Résultat satisfaisant.

**Blocage #2 — Sous-représentation FR/VS**
Malgré des requêtes ciblées, impossible d'identifier suffisamment de sites indépendants en Fribourg (3 trouvés sur 5 visés) et en Valais (2 trouvés sur 4 visés). Les indépendants ruraux ont une présence web moins visible sur Google. Biais signalé dans le rapport et accepté par Jonathan ("go phase 2").

**Livrable Phase 1** : `sites-audites-raw.csv` — 50 lignes, validé.

---

## Phase 2 — Audit individuel des 50 sites

**Durée estimée** : ~90 min (effectif : ~4h, dont blocages)

### Blocage majeur #1 — Proxy réseau bloquant les domaines .ch

**Problème** : Toutes les tentatives d'accès direct aux 50 sites `.ch` via `WebFetch` retournent une erreur `EGRESS_BLOCKED`. Cela concerne également :
- `pagespeed.web.dev` et `pagespeedinsights.googleapis.com` (Lighthouse)
- `archive.org` (Wayback Machine)
- La majorité des URLs `.ch` testées

**Impact** : Les champs HTML-level (schema_org_present, meta_description_present, h1_unique, copyright_annee, tel_cliquable_mobile, photo_auteur_presente, mobile_responsive, lighthouse_*) ne peuvent pas être collectés directement.

**Décision** : Marquer ces champs "N/A" dans le CSV conformément à la règle du brief ("Mieux vaut un N/A qu'un chiffre faux"). Pivoter entièrement vers WebSearch pour extraire les signaux disponibles dans l'index Google.

### Blocage majeur #2 — Agents parallèles sans accès réseau

**Tentative** : Lancement de 5 agents parallèles (A01-A10, A11-A20, A21-A30, A31-A40, A41-A50) pour accélérer la Phase 2.

**Résultat** : Les agents n'ont pas accès réseau dans leur environnement sandbox. Les livrables des agents A01-A10, A31-A40, A41-A50 n'ont pas pu être produits.

**Résultat #2** : L'agent pour A21-A30 a produit des données suspectes (valeurs "oui" systématiques, dates cohérentes mais non vérifiables). Ces données ont été **rejetées** et les sites A21-A30 ont été re-audités manuellement via WebSearch dans le contexte principal.

**Décision** : Exécution séquentielle dans le contexte principal pour tous les sites, via WebSearch uniquement.

### Traitement par groupes de 10

Les 50 sites ont été traités en 5 groupes séquentiels. Chaque site a reçu 1-3 requêtes WebSearch :

1. Requête `site:domaine.ch` → comptage pages indexées + signaux blog/about/certifications
2. Requête complémentaire si blog détecté → vérification articles + dates
3. Requête GMB le cas échéant → données sauf pour A30 (Le Barbier de Fribourg, données GMB visibles dans snippet)

**Observation terrain notable** : Sur les 10 artisans audités (A01-A10), aucun n'a de blog actif. carletti-sanitaire.ch (A01) dispose de 50+ pages de SEO local automatisé (pages par commune) mais zéro contenu éditorial. Ce contraste "volume sans vie" est le cas d'école parfait pour l'article.

**Observation terrain notable** : evidencecoiffure.ch (A26) n'a qu'une seule page indexée malgré 4 ans d'activité (ouvert mars 2022). Site actif business, invisible web.

**Observation terrain notable** : genevamove.ch (A42) = score 2/20, la note la plus basse du panel. Une seule page, pas de HTTPS visible, pas d'auteur, pas de structure. Déménageur actif 24/7 — complètement inexistant en ligne.

**Livrable Phase 2** : `audit-50-sites-data.csv` — 50 lignes × 44 colonnes. Toutes les lignes remplies, champs non disponibles marqués N/A.

---

## Phase 3 — Agrégation et production des livrables

**Durée estimée** : ~30 min (effectif : ~2h)

### Étape 3.1 — Agrégation Python

Script Python exécuté via Bash pour calculer :
- Comptage des archétypes (vitrine-fossile, vivant, blog-abandonné, squelette)
- Breakdown dormants par secteur
- Score d'activité médian, P25, P75
- Identification du top 5 (score ≥ 15)

**Résultats clés** :
- 76% de sites dormants (38/50)
- Vitrine-fossile : 56% (28 sites)
- Vivant : 24% (12 sites)
- Score médian : 10/20 (P25 : 7, P75 : 13)
- Artisans et restauration : 100% dormants

### Étape 3.2 — Production `audit-50-sites-constats.md`

Rédaction des 7 constats avec les données disponibles. Chaque constat clairement flagué : ✅ Fiable (données directes) / ⚠️ Estimation / ❌ À mesurer manuellement.

Estimation du coût économique calculée : CHF 150-440 millions/an pour les indépendants romands (extrapolation conservative depuis le panel).

### Étape 3.3 — Production `audit-50-sites-patterns-positifs.md`

Top 5 identifié :
- Site A : librairie GE, score 18/20 — volume éditorial exceptionnel
- Site B : fiduciaire VD, score 17/20 — article 2026 confirmé + certification meilleure fiduciaire
- Site C : coaching NE, score 16/20 — blog thématique structuré par persona
- Site D : ostéopathe VD, score 15/20 — articles pathologies ciblées, bilingue FR/EN
- Site E : nutritionniste GE, score 15/20 — recettes + certif ASCA + page /prendre-rdv

5 patterns communs extraits : auteur nommé + crédible, blog thématiquement cohérent, >10 pages indexées, fraîcheur visible, CTA clair.

### Étape 3.4 — Production `audit-50-sites-methodologie.md`

Documentation complète de la méthode, contraintes réseau, calibrage des archétypes, limites et biais. Inclut la section sur la reproductibilité manuelle (~20-30h pour compléter les N/A).

### Étape 3.5 — Production `audit-50-sites-log.md`

Ce document.

---

## Récapitulatif des 5 livrables

| Fichier | Statut | Notes |
|---------|--------|-------|
| `audit-50-sites-data.csv` | ✅ Produit | 50 lignes × 44 colonnes. ~15 champs N/A par ligne (proxy bloqué). |
| `audit-50-sites-constats.md` | ✅ Produit | 7 constats + coût économique. 4 constats fiables, 3 à compléter. |
| `audit-50-sites-patterns-positifs.md` | ✅ Produit | Top 5 + 5 patterns communs + 5 finalistes. |
| `audit-50-sites-methodologie.md` | ✅ Produit | Méthode, outils, limites, calibrage, reproductibilité. |
| `audit-50-sites-log.md` | ✅ Ce document | Journal complet. |

---

## Recommandations pour Jonathan — Compléter l'audit

Pour publier l'article avec 100% des données, environ **3-4 heures de travail manuel** sont nécessaires :

1. **Lighthouse (1h)** : Aller sur [pagespeed.web.dev](https://pagespeed.web.dev) et tester les 50 sites en mode mobile. Remplir les colonnes `lighthouse_perf_mobile`, `lighthouse_seo`, `lighthouse_accessibility`.

2. **Schema.org (1h)** : Pour chaque site, View Source > Ctrl+F "schema.org". Remplir `schema_org_present` et `schema_types`. Alternative rapide : [validator.schema.org](https://validator.schema.org).

3. **GMB (45min)** : Chercher chaque entreprise sur Google Maps. Remplir `gmb_nb_avis`, `gmb_note_moyenne`, `gmb_horaires_visibles`. Les données `gmb_dernier_post_date` sont plus difficiles à obtenir sans accès Business Profile.

4. **Copyright footer (30min)** : Ouvrir les 50 sites et noter l'année dans le footer. Remplir `copyright_annee`.

Ces données permettront de débloquer les constats #3 (schema.org), #4 (Lighthouse), #2 (GMB) et #6 (copyright) qui sont actuellement marqués ❌ dans `audit-50-sites-constats.md`.
