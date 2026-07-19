## Etat session 2026-06-19 — ✅ EPIC TERMINÉ

**Fait :**
- Produit le **pillar** `developper-application-mobile-suisse` de A à Z (via @content-creator) + cover
- Produit les **9 satellites** en bulk parallèle (via @content-creator → workers @article-producer) : prix, pme-suisse, flutter-vs-rn, ou-pwa, budget-mvp, freelance-ou-agence, metier-sur-mesure, native-vs-hybride, automatisation — tous avec cover, scores review 16-17/18
- **Maillage retour** posé sur articles existants : `freelance-ou-agence-web`, `automatisation-pme-suisse-guide-complet`, `temps-perdu-pme-automatisation` + mention iOS/Android/PWA sur `/services/developpement-mvp`
- **Publication échelonnée** 2/semaine (Mar/Ven) : pillar 30.06 → automatisation 31.07
- Généré `public/llm.txt` + alias `llms.txt` (signal GEO)
- Topical map mise à jour : 10/10 créés, actions annexes cochées

**Prochain :**
Epic clos. Restant optionnel : pousser la branche `feat/cluster-application-mobile` / ouvrir une PR, et lancer `/publish-hub` pour pousser le cluster vers le hub. Prochain epic candidat : Cluster plateformes Webflow + WordPress (`docs/chantier-cluster-plateformes.md`, Phase 6 satellites — commencer par `webflow-vs-wordpress`).

**Pièges :**
- Les 10 articles sont datés en futur (30.06→31.07) → ils n'apparaissent pas en prod avant leur pubDate (publication auto)
- Warning review récurrent (16/18) = `llm.txt` désormais créé + citation d'expert non attribuée (volontaire, anti-hallucination) — non bloquant

**Commit :** e2a2951 feat(seo): maillage retour cluster mobile + llm.txt

---

## Carte du code
> Mise a jour : 2026-06-19

| Fichier | Role |
|---------|------|
| `docs/topical-map-application-mobile.md` | Source de vérité du cluster : pillar + 9 satellites, blueprint maillage, mini-briefs (10/10 ✅ Créé) |
| `src/content/blog/developper-application-mobile-suisse.md` | Pillar hub du cluster (pubDate 30.06) |
| `src/content/blog/{prix,application-mobile-pme,flutter-vs-react-native,application-mobile-ou-pwa,budget-mvp,freelance-ou-agence,application-metier,application-native-vs-hybride,application-mobile-automatisation}-*.md` | 9 satellites (pubDate 03.07→31.07) |
| `src/pages/services/developpement-mvp.astro` | CTA transactionnel du cluster ; mentionne désormais iOS/Android/PWA |
| `public/llm.txt` + `public/llms.txt` | Signal GEO pour crawlers IA (identité, thématiques, pages/articles de référence) |

### Decisions cles
- Publication échelonnée 2/semaine plutôt qu'en bloc — pillar en premier pour que les liens entrants des satellites pointent vers un hub déjà live
- Maillage retour appliqué manuellement sur 3 articles existants (pas automatisé) selon la section « Liens entrants → existants » de la topical map

---

## Etat session 2026-06-15

**Fait :**
- Archivé 4 briefs cluster GMB juin (entrer-top-3-google-maps, choisir-categorie-google-business-profile, obtenir-plus-avis-google, referencement-local-lausanne) → `.briefs/archived/`
- Keyword research DataForSEO : "développement application mobile" (140/mois, CPC 51 CHF, diff 20, LOW) + 5 seeds complémentaires
- Croisé avec export GKP (2 809 keywords) → validé les volumes : cluster core à 500/mois GKP, sous-topics (PWA, flutter, hybride) à 50/mois
- Topical map complète générée : `docs/topical-map-application-mobile.md` — 10 articles, 0 existants, ordre de production établi

**Prochain :**
Démarrer le cluster dans une prochaine session. Commencer par le pillar : `/seo-brief developper-application-mobile-suisse` (keyword "développement application mobile suisse", 500/mois GKP, LOW, quick win).
Ensuite #2 : `/seo-brief prix-application-mobile-suisse` (intent commercial chaud, CPC 25 CHF).

**Pièges :**
- Les volumes CH sont petits (~140-210/mois DataForSEO, ~500/mois GKP bucketé) mais CPC 25-51 CHF = leads B2B haute valeur
- Articles #9 (app métier) et #10 (automatisation) n'ont pas de keyword direct → à produire en dernier, rôle = autorité thématique + différenciation
- Vérifier que `/services/developpement-mvp` mentionne iOS/Android/PWA avant de lancer les articles (CTA du cluster pointe là)
- Google Keyword Planner n'a pas d'API publique → DataForSEO reste la meilleure option d'automatisation

**Commit :** ffd09db feat(socials): ajout chaine YouTube (dernier commit du repo, rien committé cette session)

---
