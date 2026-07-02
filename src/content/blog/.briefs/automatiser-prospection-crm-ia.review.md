# SEO Review : Automatiser la prospection et le suivi CRM avec l'IA

## Score : 17/18 criteres PASS

| # | Critere | Status | Detail |
|---|---------|--------|--------|
| 1 | Title | PASS | 46 caractères, "Automatiser la prospection et le CRM avec l'IA", keyword en tête, unique |
| 2 | Meta desc | PASS | 117 caractères, keyword principal présent. Pas de verbe d'action explicite (cohérent avec la convention déjà en place sur les articles sœurs du cluster, ex. automatiser-facturation-relances-ia, automatiser-emails-documents-ia) |
| 3 | H1 | PASS | frontmatter `h1` (81 car.) distinct du `title` (46 car.), keyword présent, corps markdown démarre en paragraphe (pas de doublon H1) |
| 4 | Hn hiérarchie | PASS | H2 x4 contenu + H2 FAQ + H2 Conclusion + H2 Sources, H3 x5 (FAQ). Aucun saut de niveau |
| 5 | Bold keywords | PASS | 12 bolds comptés (10 hors label TLDR + CTA). Max 1 bold/paragraphe respecté, aucun mot bold 2x, aucun bold en heading |
| 6 | Liens internes | PASS | 4 cibles uniques dans le corps (pillar guide, ia-agence-immobiliere, ia-nlpd-conformite-suisse, consultant-ia) + CTA /contact. Toutes les cibles vérifiées existantes. Ancres descriptives, aucune ancre vide, formulations variées |
| 7 | TLDR | PASS | Blockquote correct, 5 bullets, keyword principal inclus en bullet 1 |
| 8 | Open Graph | PASS | og:type="article" appliqué automatiquement par le template `src/pages/blog/[slug].astro` |
| 9 | Schema | PASS | BlogPosting + Breadcrumb + FAQPage générés automatiquement depuis le frontmatter (5 faqs présents) |
| 10 | Keyword placement | PASS | Keyword principal dans title, h1, meta description, 100 premiers mots (1re phrase bold), et H2 #3 ("Automatiser les relances sans spammer") |
| 11 | Indexation | PASS (différé) | Pas de noindex/nofollow. `pubDate: 2026-08-28` > date système (2026-07-02) donc l'URL n'apparaît pas encore dans dist/sitemap tant que la date n'est pas atteinte, comportement normal du site (cron rebuild lundi/vendredi), vérifié identique sur les articles sœurs déjà publiés avec pubDate futur |
| 12 | Patterns IA | PASS | Aucun em dash, aucune formule IA générique détectée ("en conclusion", "il est impératif", listes à headers bold+deux-points absentes) |
| 13 | Orthographe FR | PASS | Accents vérifiés sur corps, frontmatter, alt text, FAQ |
| 14 | Formulation naturelle | PASS | Aucune forme brute de query en prose détectée. Bolds naturalisés ("enrichissement des leads", "scoring automatique des leads", "prospection à froid par email") |
| 15 | GEO — Réponse directe H2 | PASS | 4/4 H2 de contenu répondent en première phrase (cycle commercial, enrichissement, relances, connexion CRM) |
| 16 | GEO — Densité factuelle | PASS | 9 données chiffrées précises (5 étapes, 4 automatisables, score /100, seuils 40 et 70, cadence J+3/J+7/J+14, 200 contacts) sur 1580 mots de corps, soit ~5,7/1000 mots. Chiffres méthodologiques (cadence, scoring) posés comme cadre de travail, pas comme statistiques externes non sourcées, cohérent avec le précédent J+5/J+15/J+30 de automatiser-facturation-relances-ia |
| 17 | GEO — LLM.txt | PASS | `public/llm.txt` présent à la racine |
| 18 | GEO — Citation + sources inline | FAIL | 0 citation d'expert attribuée, 0 lien source externe faisant autorité dans le corps (liens internes uniquement). Cause : brief indique explicitement « Aucune source externe fournie. Pas de citation à fabriquer. » — conforme à la règle « mieux vaut zéro citation qu'une citation inventée » |

## Actions correctives

Aucun bloquant critique. Un FAIL reste en l'état par choix délibéré (anti-fabrication) :

1. **[Medium/High — GEO citation+sources]** Aucune source externe disponible dans le brief. Action recommandée lors d'un futur `/seo-refresh` : ajouter une citation d'expert ou un lien source faisant autorité (ex. texte de la LCD sur Fedlex, ou PFPDT) si une URL fiable est vérifiée à ce moment-là.
2. **[Low — maillage]** Le lien latéral demandé vers `/blog/integrer-agent-ia-outils-existants` a été omis : ce slug n'existe que comme brief (`src/content/blog/.briefs/integrer-agent-ia-outils-existants.md`), pas comme article publié. Insérer ce lien dès que cet article sera produit, plutôt que de créer un lien mort.

## Conclusion

Aucun bloquant critique (title, H1, accents, build, indexation, patterns IA, ancres, hiérarchie Hn tous PASS). Le seul FAIL (citation/sources GEO) est documenté comme une limitation du brief source, pas un défaut de rédaction. Statut : **publiable**, avec amélioration GEO possible lors d'un futur refresh si une source externe fiable est identifiée.
