# Méthodologie — Audit 50 sites d'indépendants romands

> Période : avril 2026 | Exécution : Claude Cowork (claude-sonnet-4-6)
> Document à inclure en annexe ou en section "Méthodologie" de l'article

---

## 1. Objectif de l'audit

Produire des données chiffrées originales sur l'état des sites web d'indépendants et TPE de Suisse romande. L'audit vise à répondre à 7 constats précis (fraîcheur du contenu, présence GMB, schema.org, performance Lighthouse, indexation Google, copyright obsolète, blogs zombies) et à calculer un coût économique estimatif du "site dormant".

---

## 2. Constitution du panel (Phase 1)

### Méthode de découverte

Les 50 sites ont été identifiés via des requêtes Google structurées, en évitant les annuaires (local.ch, yellow.ch, pagesjaunes.ch, yelp, Docteur.ch). Exemples de requêtes utilisées :

```
"plombier" Genève site:.ch
ostéopathe Lausanne site:.ch
menuisier indépendant Vaud
cabinet avocat Neuchâtel
librairie indépendante Lausanne
coach vie Genève indépendant
garage toutes marques Neuchâtel
restaurant bistronomique Lausanne indépendant
salon coiffure Genève indépendant
nutritionniste Genève cabinet
fiduciaire indépendante Vaud
barbier Fribourg
physiothérapeute rive droite Genève
yoga studio Lausanne centre-ville
coach sportif Fribourg
```

### Critères de sélection appliqués

Un site était retenu si :
- Il appartient à un indépendant ou une TPE (1-15 employés) — vérifié via mentions légales, page /à-propos, ou contenu "je suis..." en homepage
- Il dispose d'un nom de domaine propre (les sous-domaines `.wixsite.com` étaient acceptés mais notés)
- L'entreprise est clairement active (présence récente sur RS, mentions dans la presse locale, inscription registre du commerce visible)
- Il n'est pas un site e-commerce pur, un SaaS, ou un site corporate multi-pages

### Répartition obtenue vs. cible

| Canton | Cible | Obtenu | Écart |
|--------|-------|--------|-------|
| GE | 20 | 21 | +1 |
| VD | 15 | 17 | +2 |
| NE | 6 | 7 | +1 |
| FR | 5 | 3 | **-2** |
| VS | 4 | 2 | **-2** |

**Biais géographique documenté** : Les indépendants FR et VS ont une présence web moins indexée par Google. La méthode de découverte via Search favorise les sites déjà bien indexés, créant un biais de sélection. Les cantons ruraux sont structurellement sous-représentés dans cet audit.

---

## 3. Audit individuel de chaque site (Phase 2)

### Contrainte technique principale : proxy réseau bloqué

L'environnement d'exécution (Claude Cowork) dispose d'un proxy réseau qui bloque les requêtes sortantes directes vers les domaines `.ch` ainsi que vers les APIs externes (PageSpeed Insights, Wayback Machine). Cela a rendu impossible :

- L'accès direct au HTML des 50 sites (balises `<title>`, schema.org, meta_description, h1, copyright footer)
- Les mesures Lighthouse via l'API PageSpeed Insights
- Les snapshots Wayback Machine pour dater les dernières modifications
- La vérification des fiches Google Business Profile via Maps

**Solution adoptée** : Toutes les données ont été extraites via l'outil WebSearch (API Google Search), qui ne subit pas les mêmes restrictions réseau. Chaque site a été recherché avec des requêtes du type :

```
site:domaine.ch
"nom domaine" blog OR actualites OR articles
"nom domaine" about OR a-propos
"nom domaine" mentions-legales
"nom domaine" certification OR diplome
```

### Champs mesurés directement (WebSearch)

| Champ | Méthode |
|-------|---------|
| `blog_present` | Présence d'une section /blog, /actualites, /articles dans les résultats site: |
| `nb_articles_blog` | Comptage des pages de blog visibles dans Google Search |
| `dernier_article_date` | Date visible dans le snippet Google (pas toujours disponible) |
| `nb_pages_indexees` | Nombre de résultats retournés par `site:domaine.ch` (max 10 affichés) |
| `page_about_present` | URL /a-propos, /about, /qui-suis-je, /equipe visible dans site: |
| `auteur_nomme` | Nom d'une personne physique visible dans les snippets |
| `mentions_legales_presentes` | URL /mentions-legales, /imprint, /nlpd, /politique-confidentialite visible |
| `certifications_visibles` | Mention de diplôme, certification, label dans les snippets |
| `cta_homepage_present` | Pages /prendre-rdv, /devis, /contact dédiées visibles |
| `https` | Préfixe https dans l'URL retournée par Google |
| `archetype` | Jugement synthétique de l'analyste (voir calibrage ci-dessous) |
| `score_activite` | Note /20 (voir calibrage ci-dessous) |

### Champs non collectés (N/A dans le CSV)

| Champ | Raison |
|-------|--------|
| `lighthouse_*` | API PageSpeed bloquée |
| `schema_org_present` | HTML inaccessible |
| `meta_description_present` | HTML inaccessible |
| `h1_unique` | HTML inaccessible |
| `copyright_annee` | HTML footer inaccessible |
| `wayback_last_snapshot_diff_date` | archive.org bloqué |
| `tel_cliquable_mobile` | HTML inaccessible |
| `photo_auteur_presente` | HTML inaccessible |
| `liens_rs_presents` | HTML inaccessible |
| `gmb_*` (sauf A30) | Google Maps non automatisé |
| `mobile_responsive` | HTML inaccessible |

---

## 4. Calibrage des archétypes et du score d'activité

### Les 4 archétypes

| Archétype | Définition |
|-----------|-----------|
| `vitrine-fossile` | Site avec plusieurs pages de services, mais aucun contenu éditorial récent. Pas de blog ou blog invisible. Contenu statique. |
| `blog-abandonne` | Site avec une section blog visible, mais aucun article récent (> 12 mois ou dates inconnues). La structure est là, la vie a disparu. |
| `squelette-mobile-casse` | Site avec 1-2 pages indexées, HTTPS absent, ou structure si minimale qu'elle ne signale aucune activité à Google. |
| `vivant` | Site avec blog actif (contenu récent < 6 mois idéalement), auteur nommé, certifications, et 10+ pages indexées. |

### Calibrage du score_activite /20

| Plage | Archétype typique | Description |
|-------|-------------------|-------------|
| 0-4 | squelette-mobile-cassé | 1 page, sans HTTPS, aucun signal |
| 5-8 | vitrine-fossile | Pages services, pas de blog, auteur parfois nommé |
| 9-11 | blog-abandonné / vitrine+ | Blog présent ou vitrine structurée, dates douteuses |
| 12-14 | vivant partiel | Blog + auteur + certifications, mais fraîcheur incertaine |
| 15-18 | vivant | Blog actif + auteur + certifications + 10+ pages + fraîcheur confirmée |
| 19-20 | non observé dans le panel | Perfection théorique (Lighthouse > 90, GMB actif, schema complet) |

Le score intègre : présence blog, nb articles, fraîcheur apparente, auteur nommé, certifications visibles, pages indexées, CTA, mentions légales, signaux GMB si disponibles.

---

## 5. Limites de l'étude

### Biais de sélection
Les sites identifiés via Google Search sont, par définition, déjà indexés. Les sites les plus dormants — ceux qui ont été désindexés ou qui n'ont jamais été soumis à Google — sont invisibles dans cet audit. La réalité du marché est donc probablement encore plus dégradée que ce que les 76% de dormants laissent supposer.

### Données partielles
Plusieurs métriques importantes (Lighthouse, schema.org, GMB) n'ont pas pu être mesurées. Les constats les concernant sont des estimations qualitatives ou des extrapolations à partir de benchmarks internationaux. Ils sont clairement signalés comme tels dans le document des constats.

### Taille du panel
50 sites est un échantillon exploratoire, pas une étude statistiquement représentative. La Suisse romande compte environ 50 000 indépendants (OFS 2024). Les extrapolations doivent être présentées avec précaution.

### Subjectivité de la classification
Les archétypes et scores d'activité sont des jugements d'analyste, non des métriques automatisées. Deux analystes pourraient diverger de ±2 points sur le score d'un même site. La cohérence interne a été maintenue par un calibrage explicite, mais la valeur absolue des scores est indicative.

### Pas de vérification terrain
Aucun site n'a été consulté directement (proxy bloqué). Toutes les données proviennent de ce que Google a indexé. Un site peut avoir un blog actif non indexé par Google — il serait classifié comme dormant dans cet audit alors qu'il ne l'est pas.

---

## 6. Outils utilisés

| Outil | Usage |
|-------|-------|
| Google Search (via WebSearch API) | Découverte des sites, audit blog/about/certifications, comptage pages indexées |
| Python (csv module) | Agrégation des données, calculs statistiques, génération des constats |
| Claude Cowork (claude-sonnet-4-6) | Orchestration, jugements d'analyste, rédaction des livrables |

**Outils non disponibles** : PageSpeed Insights API, Wayback Machine, Google Maps API, Chrome DevTools (mode headless), Screaming Frog, Ahrefs/Semrush.

---

## 7. Reproductibilité

Cet audit peut être reproduit manuellement en environ 20-30 heures de travail humain avec accès à :
- PageSpeed Insights (lighthouse_perf_mobile, lighthouse_seo, lighthouse_accessibility)
- Chrome DevTools / View Source (schema_org_present, meta_description_present, h1_unique, copyright_annee, tel_cliquable_mobile, photo_auteur_presente)
- Google Maps (gmb_nb_avis, gmb_note_moyenne, gmb_horaires_visibles, gmb_reponses_avis_pct)
- Wayback Machine (wayback_last_snapshot_diff_date)

Une fois ces données ajoutées au CSV existant, l'ensemble des constats `[DATA-À-INJECTER]` de l'article pourront être complétés.
