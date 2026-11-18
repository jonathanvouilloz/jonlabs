# Inventaire de l'existant — jonlabs.ch (19.11.2026)

Sources : `src/content/blog/*` (49 fichiers, frontmatter + corps), `dist/` du 19.11 (title/H1/robots des pages), `vercel.json` (280 redirections), docs listées dans la demande, GSC `sc-domain:jonlabs.ch` 20.08 → 17.11.2026 (90 j, brut : `gsc-90j.json` dans ce dossier).
Méthode liens : liens internes extraits du corps markdown (`](/…)` et `href`), hors « articles liés » automatiques (3 par article, même catégorie + tags) et hors menu/footer. Aucun lien du blog ne pointe vers une URL redirigée ou absente.

## Synthèse

- 49 articles, 0 draft, 48 en ligne, 1 programmé (`openbot-souverainete-self-hosted`, ven. 20.11). **Aucun créneau pris après le 20.11.**
- Répartition : automatisation/IA 31 · mobile 10 · web 6 (dont 4 « sur mesure », 2 hors focus) · geo 2 (hors focus).
- Backlog d'articles non écrits dans les topical maps : **vide**. Il ne reste que des pages (métiers, landing OpenClaw, audit IA) et une fusion décidée (13 satellites → guide).
- GSC 90 j : 168 clics / 33 181 impressions / CTR 0,51 % / pos. 22,0. Les requêtes IA pèsent ~13 % des impressions des 1 000 premières requêtes ; le reste est mobile, web et villes frontalières (pages en partie supprimées le 09.11 et le 17.11).

## 1. Inventaire blog

### 1a. Les 49 articles (tri par pubDate)

`in blog` = nb d'articles qui le lient dans leur corps · `in src` = nb de fichiers hors blog (pages, data, guide) qui le lient · GSC = 90 j (20.08→17.11) clics/imp/pos · mots = corps markdown (MDX gonflé par les composants).

| # | slug | pubDate (maj) | draft | cat · cluster | mot-clé principal | Int. | mots | in blog | in src | GSC c/imp/pos | tags | liens sortants (b: = /blog/) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `temps-perdu-pme-automatisation` | 2025-12-15 | non | automatisation · Automate/fondamentaux | temps perdu administratif PME | I | 1707 | 2 | 0 | 0/7/11.6 | automatisation, pme, productivite, suisse-romande, administratif | b:application-mobile-automatisation-pme · b:ia-pragmatique-pme-suisse · /consultant-ia · /services |
| 2 | `ia-pragmatique-pme-suisse` | 2025-12-16 | non | automatisation · Automate/fondamentaux | IA pour PME suisse (usages) | I | 2334 | 2 | 2 | — | ia, pme, suisse-romande, productivite, automatisation | b:apparaitre-claude · b:temps-perdu-pme-automatisation · /consultant-ia · /services · /services/formation-ia-equipe |
| 3 | `prix-site-web-suisse-2026` | 2025-12-25 | non | web · HORS FOCUS web | prix site web suisse | C | 2774 | 1 | 3 | 6/1330/9.6 | prix, site-web, suisse-romande, freelance | b:specialiste-developpement-web-suisse · /developpeur-web-freelance-geneve · /services · /services/creation-site-web · /tarifs |
| 4 | `apparaitre-claude` | 2026-03-05 | non | geo · HORS FOCUS GEO | apparaître sur Claude / claude brave search | I | 2682 | 2 | 1 | 4/609/7.1 | geo, seo, ia | b:geo-seo-ia · /portfolio/leo-lecureux-seo |
| 5 | `geo-seo-ia` | 2026-04-14 (2026-10-22) | non | geo · HORS FOCUS GEO | apparaître dans les IA / GEO 2026 | I | 3228 | 1 | 2 | 5/1644/14.1 | geo, seo, ia, suisse-romande | b:apparaitre-claude · b:specialiste-developpement-web-suisse · /consultant-ia · /contact · /services · /tarifs |
| 6 | `specialiste-developpement-web-suisse` | 2026-04-25 (2026-05-06) | non | web · HORS FOCUS web | spécialiste développement web suisse | C | 1506 | 2 | 3 | 1/2343/17.5 | site-web, suisse-romande, freelance, prix | /about · b:prix-site-web-suisse-2026 · /contact · /developpeur-web-freelance-geneve · /portfolio · /services/creation-site-web · /tarifs |
| 7 | `automatisation-pme-suisse-guide-complet` | 2026-04-26 (2026-07-15) | non | automatisation · Automate/HUB info | automatisation PME suisse | I | 2046 | 9 | 2 | — | automatisation, pme, suisse-romande, no-code, agent-ia, roi | b:agent-ia-entreprise-cas-usage · b:application-mobile-automatisation-pme · b:avantages-limites-automatisation-pme · b:comment-choisir-quoi-automatiser-pme · b:hermes-agent-ia-pme · b:openclaw-pme-suisse · b:prix-agent-ia-automatisation-suisse · b:workflows-vs-agents-ia-pme · /consultant-ia |
| 8 | `workflows-vs-agents-ia-pme` | 2026-04-27 | non | automatisation · Agents IA | workflow vs agent IA | C | 2090 | 10 | 3 | 1/445/11.5 | automatisation, agent-ia, no-code, pme, suisse-romande | b:automatisation-pme-suisse-guide-complet · b:comparatif-browser-agents-ia · b:hermes-agent-ia-pme · b:meilleurs-vps-hermes-agent-suisse · b:openclaw-pme-suisse · /consultant-ia · /contact |
| 9 | `comment-choisir-quoi-automatiser-pme` | 2026-04-28 | non | automatisation · Automate/décider | quoi automatiser en premier PME | I | 2569 | 5 | 1 | 0/4/12.2 | automatisation, pme, suisse-romande, roi, no-code | b:automatisation-pme-suisse-guide-complet · b:avantages-limites-automatisation-pme · b:workflows-vs-agents-ia-pme · /consultant-ia · /contact |
| 10 | `avantages-limites-automatisation-pme` | 2026-04-29 | non | automatisation · Automate/décider | avantages et limites automatisation PME | I | 2468 | 5 | 0 | 0/40/10.2 | automatisation, pme, suisse-romande, roi, no-code | b:automatisation-pme-suisse-guide-complet · b:comment-choisir-quoi-automatiser-pme · b:hermes-agent-ia-pme · b:prix-agent-ia-automatisation-suisse · b:workflows-vs-agents-ia-pme · /consultant-ia · /contact |
| 11 | `hermes-agent-ia-pme` | 2026-04-30 (2026-09-20) | non | automatisation · Agents IA/produit | hermes agent (c'est quoi, prix) | I | 2739 | 11 | 2 | 20/2533/8.9 | hermes-agent, agent-ia, automatisation, pme, suisse-romande, open-source | b:agent-ia-entreprise-cas-usage · b:automatisation-pme-suisse-guide-complet · b:avantages-limites-automatisation-pme · b:comparatif-browser-agents-ia · b:meilleurs-vps-hermes-agent-suisse · b:openbot-souverainete-self-hosted · b:openclaw-pme-suisse · b:prix-agent-ia-automatisation-suisse · b:workflows-vs-agents-ia-pme · /consultant-ia · /contact · /hermes |
| 12 | `openclaw-pme-suisse` | 2026-05-01 (2026-11-09) | non | automatisation · Agents IA/produit | intégration OpenClaw suisse / agence openclaw | C | 2664 | 6 | 1 | 0/243/9.3 | open-source, agent-ia, automatisation, pme, suisse-romande, outils-ia | b:automatisation-pme-suisse-guide-complet · b:avantages-limites-automatisation-pme · b:comment-choisir-quoi-automatiser-pme · b:comparatif-browser-agents-ia · b:hermes-agent-ia-pme · b:meilleurs-vps-hermes-agent-suisse · b:openbot-souverainete-self-hosted · b:workflows-vs-agents-ia-pme · /consultant-ia · /contact · /hermes · /tarifs |
| 13 | `developper-application-mobile-suisse` | 2026-06-29 | non | mobile · Mobile/hub info | développement application mobile suisse (guide) | I | 2924 | 10 | 1 | 1/207/9.5 | application-mobile, suisse-romande, pme, flutter, react-native | b:application-mobile-ou-pwa · b:application-mobile-pme-suisse · b:application-native-vs-hybride · b:budget-mvp-application-mobile · b:flutter-vs-react-native-pme · b:freelance-ou-agence-application-mobile · b:prix-application-mobile-suisse · /services/developpement-application-mobile |
| 14 | `prix-application-mobile-suisse` | 2026-07-03 | non | mobile · Mobile | prix application mobile suisse | C | 2767 | 5 | 3 | 1/46/3.8 | application-mobile, prix, suisse-romande, flutter, freelance, pme | b:budget-mvp-application-mobile · b:developper-application-mobile-suisse · b:freelance-ou-agence-application-mobile · /contact · /services/developpement-application-mobile |
| 15 | `application-mobile-pme-suisse` | 2026-07-06 (2026-11-09) | non | mobile · Mobile | application mobile entreprise suisse | C | 2198 | 2 | 1 | 0/349/8.1 | application-mobile, pme, suisse-romande, prix, comparatif | b:application-mobile-ou-pwa · b:developper-application-mobile-suisse · b:prix-application-mobile-suisse · /services/developpement-application-mobile |
| 16 | `flutter-vs-react-native-pme` | 2026-07-08 | non | mobile · Mobile | flutter vs react native | C | 1728 | 5 | 2 | 0/5/6.6 | flutter, react-native, application-mobile, pme, suisse-romande | b:application-mobile-ou-pwa · b:application-native-vs-hybride · b:developper-application-mobile-suisse · /services/developpement-application-mobile |
| 17 | `application-mobile-ou-pwa` | 2026-07-10 | non | mobile · Mobile | application mobile ou PWA | C | 1983 | 5 | 2 | 0/4/14.0 | application-mobile, suisse-romande, pme, prix | b:developper-application-mobile-suisse · b:flutter-vs-react-native-pme · b:prix-application-mobile-suisse · /services/developpement-application-mobile |
| 18 | `budget-mvp-application-mobile` | 2026-07-13 | non | mobile · Mobile | budget MVP application mobile | C | 1776 | 4 | 2 | 0/10/7.8 | application-mobile, prix, suisse-romande, pme | b:application-mobile-pme-suisse · b:developper-application-mobile-suisse · b:flutter-vs-react-native-pme · b:prix-application-mobile-suisse · b:prix-logiciel-sur-mesure-pme · /services/developpement-application-mobile |
| 19 | `freelance-ou-agence-application-mobile` | 2026-07-15 | non | mobile · Mobile | freelance ou agence application mobile | C | 2103 | 2 | 3 | 0/3/5.0 | application-mobile, freelance, suisse-romande, flutter | b:developper-application-mobile-suisse · b:flutter-vs-react-native-pme · /contact · /services/developpement-application-mobile |
| 20 | `application-native-vs-hybride` | 2026-07-17 | non | mobile · Mobile | application native vs hybride | C | 1706 | 3 | 1 | 0/1/5.0 | application-mobile, flutter, react-native, pme, suisse-romande | b:application-mobile-ou-pwa · b:developper-application-mobile-suisse · b:flutter-vs-react-native-pme · /services/developpement-application-mobile |
| 21 | `application-mobile-automatisation-pme` | 2026-07-20 | non | mobile · Mobile/pont automate | application mobile + automatisation PME | I | 2072 | 3 | 1 | — | application-mobile, automatisation, pme, no-code, prospection-crm, integrations | b:application-metier-pme-sur-mesure · b:developper-application-mobile-suisse · /consultant-ia · /contact · /services/developpement-application-mobile |
| 22 | `logiciel-sur-mesure-vs-saas` | 2026-07-22 | non | web · Build sur mesure | logiciel sur mesure ou SaaS | C | 2201 | 3 | 2 | 0/6/5.3 | logiciel-sur-mesure, prix, pme, suisse-romande, comparatif | b:application-metier-pme-sur-mesure · b:no-code-vs-developpement-sur-mesure · b:prix-logiciel-sur-mesure-pme · /contact · /services/application-sur-mesure |
| 23 | `prix-logiciel-sur-mesure-pme` | 2026-07-24 | non | web · Build sur mesure | prix logiciel / application métier sur mesure | C | 2463 | 4 | 2 | 0/25/8.3 | logiciel-sur-mesure, prix, pme, suisse-romande, freelance | b:application-metier-pme-sur-mesure · b:cahier-des-charges-application-metier · b:logiciel-sur-mesure-vs-saas · /contact · /services/application-sur-mesure · /services/developpement-application-mobile |
| 24 | `recevoir-leads-formulaire-telegram-resend` | 2026-07-24 | non | automatisation · Tuto technique (isolé) | formulaire de contact vers Telegram / Resend | I | 2308 | 1 | 0 | 0/12/5.2 | prospection-crm, outils-ia, automatisation | b:automatisation-pme-suisse-guide-complet · b:comment-choisir-quoi-automatiser-pme · b:ia-nlpd-conformite-suisse · b:integrer-agent-ia-outils-existants · /contact |
| 25 | `no-code-vs-developpement-sur-mesure` | 2026-07-27 | non | web · Build sur mesure | no-code ou développement sur mesure | C | 2564 | 1 | 1 | 0/2/4.5 | no-code, logiciel-sur-mesure, pme, nlpd, suisse-romande | b:application-metier-pme-sur-mesure · b:logiciel-sur-mesure-vs-saas · /services/application-sur-mesure · /services/developpement-application-mobile |
| 26 | `cahier-des-charges-application-metier` | 2026-07-29 | non | web · Build sur mesure | cahier des charges application métier | I | 2242 | 3 | 1 | 0/8/6.2 | cadrage-projet, logiciel-sur-mesure, pme, suisse-romande | b:application-metier-pme-sur-mesure · b:prix-logiciel-sur-mesure-pme · /contact · /services/application-sur-mesure |
| 27 | `application-metier-pme-sur-mesure` | 2026-07-31 | non | web · Build sur mesure | application métier sur mesure PME | C | 2457 | 5 | 2 | 0/3/5.3 | logiciel-sur-mesure, pme, suisse-romande, roi, flutter | b:application-mobile-automatisation-pme · b:budget-mvp-application-mobile · b:cahier-des-charges-application-metier · b:developper-application-mobile-suisse · b:logiciel-sur-mesure-vs-saas · b:prix-logiciel-sur-mesure-pme · /consultant-ia · /contact · /services/application-sur-mesure |
| 28 | `agent-ia-entreprise-cas-usage` | 2026-08-03 | non | automatisation · Agents IA | agent IA entreprise (cas d'usage) | C | 2314 | 7 | 1 | 0/17/18.7 | agent-ia, automatisation, pme, suisse-romande, cas-usage, ia | b:automatisation-pme-suisse-guide-complet · b:hermes-agent-ia-pme · b:workflows-vs-agents-ia-pme · /consultant-ia · /contact |
| 29 | `prix-agent-ia-automatisation-suisse` | 2026-08-05 | non | automatisation · Agents IA | prix agent IA / coût automatisation | C | 2262 | 7 | 6 | 2/127/6.9 | prix, agent-ia, automatisation, pme, suisse-romande, roi | b:agent-ia-entreprise-cas-usage · b:automatisation-pme-suisse-guide-complet · b:avantages-limites-automatisation-pme · b:hermes-agent-ia-pme · b:meilleurs-vps-hermes-agent-suisse · /consultant-ia · /contact · /hermes |
| 30 | `ia-nlpd-conformite-suisse` | 2026-08-07 | non | automatisation · Agents IA/trust | IA nLPD / IA conforme nLPD | I | 2557 | 8 | 5 | 0/64/8.0 | nlpd, agent-ia, automatisation, suisse-romande | b:automatisation-pme-suisse-guide-complet · b:hermes-agent-ia-pme · b:meilleurs-vps-hermes-agent-suisse · /contact · /metiers/ia-fiduciaire |
| 31 | `consultant-ia-c-est-quoi` | 2026-08-10 | non | automatisation · Consultant IA | consultant IA c'est quoi / rôle | I | 2019 | 1 | 3 | 1/13/15.8 | freelance, automatisation, pme, suisse-romande, ia | b:agent-ia-entreprise-cas-usage · b:prix-agent-ia-automatisation-suisse · /consultant-ia · /contact |
| 32 | `implementer-agent-ia-etapes` | 2026-08-14 | non | automatisation · Mise en place IA | déployer / implémenter un agent IA (étapes) | I | 1923 | 2 | 1 | 1/23/8.7 | agent-ia, deploiement-ia, automatisation, pme, suisse-romande, adoption-ia | /consultant-ia · /contact · /guides/mettre-en-place-ia-entreprise-guide · /hermes |
| 33 | `automatiser-facturation-relances-ia` | 2026-08-17 | non | automatisation · Mise en place IA/processus | automatiser facturation et relances IA | I | 1805 | 0 | 2 | 0/6/6.0 | administratif, agent-ia, automatisation, suisse-romande | b:calculer-gain-temps-automatisation · /consultant-ia · /contact · /guides/mettre-en-place-ia-entreprise-guide · /metiers/ia-fiduciaire |
| 34 | `calculer-gain-temps-automatisation` | 2026-08-19 | non | automatisation · Mise en place IA/ROI | calculer gain de temps automatisation | I | 1483 | 2 | 1 | 0/20/7.4 | roi, automatisation, pme, suisse-romande | b:agent-ia-entreprise-cas-usage · b:prix-agent-ia-automatisation-suisse · /contact · /guides/mettre-en-place-ia-entreprise-guide |
| 35 | `projet-pilote-ia-30-jours` | 2026-08-21 | non | automatisation · Mise en place IA | projet pilote IA / POC IA | I | 1827 | 0 | 2 | 0/18/9.0 | deploiement-ia, automatisation, pme, suisse-romande | b:calculer-gain-temps-automatisation · b:implementer-agent-ia-etapes · /contact · /guides/mettre-en-place-ia-entreprise-guide |
| 36 | `automatiser-support-client-ia` | 2026-08-24 | non | automatisation · Mise en place IA/processus | automatiser support client agent IA (chatbot vs agent) | I | 1729 | 1 | 1 | — | support-client, agent-ia, automatisation, garde-fous-ia, suisse-romande | b:workflows-vs-agents-ia-pme · /consultant-ia · /contact · /guides/mettre-en-place-ia-entreprise-guide |
| 37 | `automatiser-emails-documents-ia` | 2026-08-26 | non | automatisation · Mise en place IA/processus | trier emails et documents IA (RAG) | I | 1472 | 1 | 2 | 0/12/14.8 | emails-documents, agent-ia, automatisation, suisse-romande | b:ia-nlpd-conformite-suisse · /contact · /guides/mettre-en-place-ia-entreprise-guide |
| 38 | `automatiser-prospection-crm-ia` | 2026-08-28 | non | automatisation · Mise en place IA/processus | automatiser prospection CRM IA | I | 1627 | 0 | 2 | 0/26/9.9 | prospection-crm, agent-ia, automatisation, suisse-romande | b:ia-nlpd-conformite-suisse · /consultant-ia · /contact · /guides/mettre-en-place-ia-entreprise-guide · /metiers/ia-agence-immobiliere |
| 39 | `integrer-agent-ia-outils-existants` | 2026-08-31 | non | automatisation · Mise en place IA | intégrer agent IA outils existants (CRM, ERP, MCP) | I | 2541 | 2 | 4 | 0/75/16.1 | integrations, agent-ia, no-code, automatisation, pme, suisse-romande | b:comparatif-browser-agents-ia · b:prix-agent-ia-automatisation-suisse · /consultant-ia · /contact · /guides/mettre-en-place-ia-entreprise-guide · /metiers/ia-agence-immobiliere · /metiers/ia-fiduciaire |
| 40 | `adoption-ia-equipe-change-management` | 2026-09-02 | non | automatisation · Mise en place IA/adoption | adoption IA équipe / conduite du changement | I | 1936 | 1 | 2 | — | ia, automatisation, adoption-ia, pme | b:garde-fous-ia-validations-audit · b:ia-nlpd-conformite-suisse · /consultant-ia · /contact · /guides/mettre-en-place-ia-entreprise-guide · /services/formation-ia-equipe |
| 41 | `sortir-application-mobile-app-store` | 2026-09-03 | non | mobile · Mobile | publier application App Store (de zéro) | I | 1829 | 0 | 3 | — | application-mobile, app-store, react-native | b:application-mobile-ou-pwa · b:application-native-vs-hybride · b:budget-mvp-application-mobile · b:cahier-des-charges-application-metier · b:developper-application-mobile-suisse · b:prix-application-mobile-suisse · /contact · /portfolio/nooria · /services/developpement-application-mobile |
| 42 | `avant-apres-automatisation-pme-romande` | 2026-09-04 | non | automatisation · Mise en place IA/ROI | avant/après automatisation PME (cas chiffré) | I | 1650 | 0 | 1 | 0/10/11.3 | automatisation, pme, suisse-romande, roi, ia | b:consultant-ia-c-est-quoi · b:temps-perdu-pme-automatisation · /consultant-ia · /contact · /guides/mettre-en-place-ia-entreprise-guide · /hermes |
| 43 | `cartographier-processus-avant-automatiser` | 2026-09-07 | non | automatisation · Mise en place IA | cartographier processus avant automatiser | I | 1373 | 0 | 1 | 0/28/10.7 | cadrage-projet, automatisation, suisse-romande | b:comment-choisir-quoi-automatiser-pme · /consultant-ia · /contact · /guides/mettre-en-place-ia-entreprise-guide |
| 44 | `garde-fous-ia-validations-audit` | 2026-09-09 | non | automatisation · Mise en place IA/gouvernance | garde-fous IA (validation humaine, audit) | I | 1738 | 5 | 3 | 0/3/7.7 | garde-fous-ia, agent-ia, automatisation, pme | b:adoption-ia-equipe-change-management · b:automatiser-emails-documents-ia · b:ia-nlpd-conformite-suisse · b:openbot-souverainete-self-hosted · /contact · /guides/mettre-en-place-ia-entreprise-guide |
| 45 | `automatiser-rh-onboarding-ia` | 2026-09-11 | non | automatisation · Mise en place IA/processus | automatiser RH onboarding IA | I | 1518 | 0 | 1 | 0/6/6.5 | administratif, agent-ia, automatisation, nlpd | b:ia-nlpd-conformite-suisse · /consultant-ia · /contact · /guides/mettre-en-place-ia-entreprise-guide |
| 46 | `meilleurs-vps-hermes-agent-suisse` | 2026-10-12 | non | automatisation · Agents IA/infra | VPS Hermes Agent / hermes vps | C | 3936 | 8 | 0 | 5/311/11.5 | hermes-agent, nlpd, agent-ia, comparatif | b:agent-ia-entreprise-cas-usage · b:comparatif-browser-agents-ia · b:garde-fous-ia-validations-audit · b:hermes-agent-ia-pme · b:ia-nlpd-conformite-suisse · b:ia-pragmatique-pme-suisse · b:implementer-agent-ia-etapes · b:integrer-agent-ia-outils-existants · b:openclaw-pme-suisse · b:prix-agent-ia-automatisation-suisse · b:workflows-vs-agents-ia-pme · /contact · /hermes |
| 47 | `agent-ia-repondre-mails-clients` | 2026-10-23 | non | automatisation · Agents IA/cas | agent IA répondre mails clients | I | 4089 | 1 | 3 | 7/204/6.7 | agent-ia, hermes-agent, emails-documents, outils-ia, automatisation | b:agent-ia-entreprise-cas-usage · b:automatiser-support-client-ia · b:garde-fous-ia-validations-audit · b:hermes-agent-ia-pme · b:meilleurs-vps-hermes-agent-suisse · b:openbot-souverainete-self-hosted · b:recevoir-leads-formulaire-telegram-resend · /contact · /hermes |
| 48 | `comparatif-browser-agents-ia` | 2026-11-16 | non | automatisation · Agents IA/outils | navigateur pour agents IA (browser agents comparatif) | C | 8079 | 6 | 0 | 0/3/2.0 | agent-ia, outils-ia, integrations, hermes-agent, comparatif | b:garde-fous-ia-validations-audit · b:hermes-agent-ia-pme · b:meilleurs-vps-hermes-agent-suisse · b:openclaw-pme-suisse · b:workflows-vs-agents-ia-pme · /contact |
| 49 | `openbot-souverainete-self-hosted` | 2026-11-20 | non | automatisation · Agents IA/produit | OpenBot test / agent IA self-hosted souverain | C | 2977 | 4 | 0 | — | openbot, agent-ia, souverainete, open-source, hermes-agent, outils-ia | b:agent-ia-repondre-mails-clients · b:comparatif-browser-agents-ia · b:garde-fous-ia-validations-audit · b:hermes-agent-ia-pme · b:ia-nlpd-conformite-suisse · b:meilleurs-vps-hermes-agent-suisse · b:openclaw-pme-suisse · b:workflows-vs-agents-ia-pme · /contact |

### 1a-bis. Qui lie chaque article (entrants détaillés)

| slug | depuis articles | depuis hors blog |
|---|---|---|
| `automatiser-rh-onboarding-ia` | **aucun** | c/p/mettre-en-place-ia-entreprise-guide.md |
| `avant-apres-automatisation-pme-romande` | **aucun** | c/p/mettre-en-place-ia-entreprise-guide.md |
| `cartographier-processus-avant-automatiser` | **aucun** | c/p/mettre-en-place-ia-entreprise-guide.md |
| `recevoir-leads-formulaire-telegram-resend` | agent-ia-repondre-mails-clients | **aucun** |
| `automatiser-facturation-relances-ia` | **aucun** | c/p/mettre-en-place-ia-entreprise-guide.md, d/metiers-ia.ts |
| `automatiser-prospection-crm-ia` | **aucun** | c/p/mettre-en-place-ia-entreprise-guide.md, d/metiers-ia.ts |
| `automatiser-support-client-ia` | agent-ia-repondre-mails-clients | c/p/mettre-en-place-ia-entreprise-guide.md |
| `no-code-vs-developpement-sur-mesure` | logiciel-sur-mesure-vs-saas | p/services/application-sur-mesure.astro |
| `projet-pilote-ia-30-jours` | **aucun** | c/p/mettre-en-place-ia-entreprise-guide.md, p/consultant-ia/index.astro |
| `temps-perdu-pme-automatisation` | avant-apres-automatisation-pme-romande, ia-pragmatique-pme-suisse | **aucun** |
| `adoption-ia-equipe-change-management` | garde-fous-ia-validations-audit | c/p/mettre-en-place-ia-entreprise-guide.md, p/services/formation-ia-equipe.astro |
| `apparaitre-claude` | geo-seo-ia, ia-pragmatique-pme-suisse | c/portfolio/leo-lecureux-seo.md |
| `application-mobile-pme-suisse` | budget-mvp-application-mobile, developper-application-mobile-suisse | p/services/developpement-application-mobile.astro |
| `automatiser-emails-documents-ia` | garde-fous-ia-validations-audit | c/p/mettre-en-place-ia-entreprise-guide.md, d/metiers-ia.ts |
| `calculer-gain-temps-automatisation` | automatiser-facturation-relances-ia, projet-pilote-ia-30-jours | c/p/mettre-en-place-ia-entreprise-guide.md |
| `geo-seo-ia` | apparaitre-claude | p/services.astro, p/services/creation-site-web.astro |
| `implementer-agent-ia-etapes` | meilleurs-vps-hermes-agent-suisse, projet-pilote-ia-30-jours | c/p/mettre-en-place-ia-entreprise-guide.md |
| `sortir-application-mobile-app-store` | **aucun** | c/portfolio/nooria.md, d/villes-mobile.ts, p/services/developpement-application-mobile.astro |
| `agent-ia-repondre-mails-clients` | openbot-souverainete-self-hosted | c/portfolio/wildcat-agent-mails.md, d/metiers-ia.ts, p/hermes.astro |
| `application-mobile-automatisation-pme` | application-metier-pme-sur-mesure, automatisation-pme-suisse-guide-complet, temps-perdu-pme-automatisation | p/services/developpement-application-mobile.astro |
| `application-native-vs-hybride` | developper-application-mobile-suisse, flutter-vs-react-native-pme, sortir-application-mobile-app-store | p/services/developpement-application-mobile.astro |
| `cahier-des-charges-application-metier` | application-metier-pme-sur-mesure, prix-logiciel-sur-mesure-pme, sortir-application-mobile-app-store | p/services/application-sur-mesure.astro |
| `consultant-ia-c-est-quoi` | avant-apres-automatisation-pme-romande | c/p/mettre-en-place-ia-entreprise-guide.md, p/consultant-ia/[ville].astro, p/consultant-ia/index.astro |
| `ia-pragmatique-pme-suisse` | meilleurs-vps-hermes-agent-suisse, temps-perdu-pme-automatisation | p/consultant-ia/[ville].astro, p/services/formation-ia-equipe.astro |
| `openbot-souverainete-self-hosted` | agent-ia-repondre-mails-clients, garde-fous-ia-validations-audit, hermes-agent-ia-pme, openclaw-pme-suisse | **aucun** |
| `prix-site-web-suisse-2026` | specialiste-developpement-web-suisse | p/developpeur-web-freelance-geneve.astro, p/services.astro, p/services/creation-site-web.astro |
| `avantages-limites-automatisation-pme` | automatisation-pme-suisse-guide-complet, comment-choisir-quoi-automatiser-pme, hermes-agent-ia-pme, openclaw-pme-suisse, prix-agent-ia-automatisation-suisse | **aucun** |
| `freelance-ou-agence-application-mobile` | developper-application-mobile-suisse, prix-application-mobile-suisse | d/villes-mobile.ts, p/developpeur-web-freelance-geneve.astro, p/services/developpement-application-mobile.astro |
| `logiciel-sur-mesure-vs-saas` | application-metier-pme-sur-mesure, no-code-vs-developpement-sur-mesure, prix-logiciel-sur-mesure-pme | p/services.astro, p/services/application-sur-mesure.astro |
| `specialiste-developpement-web-suisse` | geo-seo-ia, prix-site-web-suisse-2026 | p/developpeur-web-freelance-geneve.astro, p/services.astro, p/services/creation-site-web.astro |
| `budget-mvp-application-mobile` | application-metier-pme-sur-mesure, developper-application-mobile-suisse, prix-application-mobile-suisse, sortir-application-mobile-app-store | d/villes-mobile.ts, p/services/developpement-application-mobile.astro |
| `comment-choisir-quoi-automatiser-pme` | automatisation-pme-suisse-guide-complet, avantages-limites-automatisation-pme, cartographier-processus-avant-automatiser, openclaw-pme-suisse, recevoir-leads-formulaire-telegram-resend | p/consultant-ia/[ville].astro |
| `comparatif-browser-agents-ia` | hermes-agent-ia-pme, integrer-agent-ia-outils-existants, meilleurs-vps-hermes-agent-suisse, openbot-souverainete-self-hosted, openclaw-pme-suisse, workflows-vs-agents-ia-pme | **aucun** |
| `integrer-agent-ia-outils-existants` | meilleurs-vps-hermes-agent-suisse, recevoir-leads-formulaire-telegram-resend | c/p/mettre-en-place-ia-entreprise-guide.md, d/metiers-ia.ts, p/hermes.astro, p/services/application-sur-mesure.astro |
| `prix-logiciel-sur-mesure-pme` | application-metier-pme-sur-mesure, budget-mvp-application-mobile, cahier-des-charges-application-metier, logiciel-sur-mesure-vs-saas | p/services/application-sur-mesure.astro, p/tarifs.astro |
| `application-metier-pme-sur-mesure` | application-mobile-automatisation-pme, cahier-des-charges-application-metier, logiciel-sur-mesure-vs-saas, no-code-vs-developpement-sur-mesure, prix-logiciel-sur-mesure-pme | p/services/application-sur-mesure.astro, p/services/developpement-application-mobile.astro |
| `application-mobile-ou-pwa` | application-mobile-pme-suisse, application-native-vs-hybride, developper-application-mobile-suisse, flutter-vs-react-native-pme, sortir-application-mobile-app-store | d/villes-mobile.ts, p/services/developpement-application-mobile.astro |
| `flutter-vs-react-native-pme` | application-mobile-ou-pwa, application-native-vs-hybride, budget-mvp-application-mobile, developper-application-mobile-suisse, freelance-ou-agence-application-mobile | d/villes-mobile.ts, p/services/developpement-application-mobile.astro |
| `openclaw-pme-suisse` | automatisation-pme-suisse-guide-complet, comparatif-browser-agents-ia, hermes-agent-ia-pme, meilleurs-vps-hermes-agent-suisse, openbot-souverainete-self-hosted, workflows-vs-agents-ia-pme | p/hermes.astro |
| `agent-ia-entreprise-cas-usage` | agent-ia-repondre-mails-clients, automatisation-pme-suisse-guide-complet, calculer-gain-temps-automatisation, consultant-ia-c-est-quoi, hermes-agent-ia-pme, meilleurs-vps-hermes-agent-suisse, prix-agent-ia-automatisation-suisse | p/consultant-ia/index.astro |
| `garde-fous-ia-validations-audit` | adoption-ia-equipe-change-management, agent-ia-repondre-mails-clients, comparatif-browser-agents-ia, meilleurs-vps-hermes-agent-suisse, openbot-souverainete-self-hosted | c/p/mettre-en-place-ia-entreprise-guide.md, d/metiers-ia.ts, p/services/formation-ia-equipe.astro |
| `meilleurs-vps-hermes-agent-suisse` | agent-ia-repondre-mails-clients, comparatif-browser-agents-ia, hermes-agent-ia-pme, ia-nlpd-conformite-suisse, openbot-souverainete-self-hosted, openclaw-pme-suisse, prix-agent-ia-automatisation-suisse, workflows-vs-agents-ia-pme | **aucun** |
| `prix-application-mobile-suisse` | application-mobile-ou-pwa, application-mobile-pme-suisse, budget-mvp-application-mobile, developper-application-mobile-suisse, sortir-application-mobile-app-store | d/villes-mobile.ts, p/services/developpement-application-mobile.astro, p/tarifs.astro |
| `automatisation-pme-suisse-guide-complet` | agent-ia-entreprise-cas-usage, avantages-limites-automatisation-pme, comment-choisir-quoi-automatiser-pme, hermes-agent-ia-pme, ia-nlpd-conformite-suisse, openclaw-pme-suisse, prix-agent-ia-automatisation-suisse, recevoir-leads-formulaire-telegram-resend, workflows-vs-agents-ia-pme | c/p/mettre-en-place-ia-entreprise-guide.md, p/consultant-ia/index.astro |
| `developper-application-mobile-suisse` | application-metier-pme-sur-mesure, application-mobile-automatisation-pme, application-mobile-ou-pwa, application-mobile-pme-suisse, application-native-vs-hybride, budget-mvp-application-mobile, flutter-vs-react-native-pme, freelance-ou-agence-application-mobile, prix-application-mobile-suisse, sortir-application-mobile-app-store | p/services/developpement-application-mobile.astro |
| `hermes-agent-ia-pme` | agent-ia-entreprise-cas-usage, agent-ia-repondre-mails-clients, automatisation-pme-suisse-guide-complet, avantages-limites-automatisation-pme, comparatif-browser-agents-ia, ia-nlpd-conformite-suisse, meilleurs-vps-hermes-agent-suisse, openbot-souverainete-self-hosted, openclaw-pme-suisse, prix-agent-ia-automatisation-suisse, workflows-vs-agents-ia-pme | p/consultant-ia/index.astro, p/hermes.astro |
| `ia-nlpd-conformite-suisse` | adoption-ia-equipe-change-management, automatiser-emails-documents-ia, automatiser-prospection-crm-ia, automatiser-rh-onboarding-ia, garde-fous-ia-validations-audit, meilleurs-vps-hermes-agent-suisse, openbot-souverainete-self-hosted, recevoir-leads-formulaire-telegram-resend | c/p/mettre-en-place-ia-entreprise-guide.md, d/metiers-ia.ts, p/consultant-ia/[ville].astro, p/consultant-ia/index.astro, p/services/formation-ia-equipe.astro |
| `prix-agent-ia-automatisation-suisse` | automatisation-pme-suisse-guide-complet, avantages-limites-automatisation-pme, calculer-gain-temps-automatisation, consultant-ia-c-est-quoi, hermes-agent-ia-pme, integrer-agent-ia-outils-existants, meilleurs-vps-hermes-agent-suisse | c/p/mettre-en-place-ia-entreprise-guide.md, d/metiers-ia.ts, p/consultant-ia/[ville].astro, p/consultant-ia/index.astro, p/index.astro, p/tarifs.astro |
| `workflows-vs-agents-ia-pme` | agent-ia-entreprise-cas-usage, automatisation-pme-suisse-guide-complet, automatiser-support-client-ia, avantages-limites-automatisation-pme, comment-choisir-quoi-automatiser-pme, comparatif-browser-agents-ia, hermes-agent-ia-pme, meilleurs-vps-hermes-agent-suisse, openbot-souverainete-self-hosted, openclaw-pme-suisse | c/p/mettre-en-place-ia-entreprise-guide.md, p/consultant-ia/index.astro, p/hermes.astro |

## 2. Pages hors blog indexables

GSC = 90 j clics/imp/pos. « Liens blog » = nombre d'articles qui lient la page dans leur corps.

| URL | title (dist) | mot-clé cible | mots | GSC c/imp/pos | liens blog | articles sources |
|---|---|---|---|---|---|---|
| `/` | Développement IA sur mesure à Genève | développement IA sur mesure Genève (décision 17.11) | 955 | 44/3653/38,1 (www + non-www) | 0 | — |
| `/consultant-ia` | Consultant IA pour PME romandes : stratégie et mise en place | consultant IA (Genève, PME romandes) ; absorbe `/consultant-ia/geneve`, `/services/automatisation`, `/services/integration-outils`, `/services/outils-sur-mesure` | 2083 | 5/413/24,3 | 23 | tout le silo automatisation sauf : `agent-ia-repondre-mails-clients`, `meilleurs-vps-hermes-agent-suisse`, `comparatif-browser-agents-ia`, `openbot-…`, `ia-nlpd-…`, `garde-fous-…`, `calculer-gain-temps-…`, `projet-pilote-…`, `automatiser-emails-documents-ia` |
| `/consultant-ia/lausanne` | Consultant IA à Lausanne : agents IA pour PME | consultant IA Lausanne | 1536 | 2/88/7,5 | **0** | — |
| `/consultant-ia/annemasse` | Consultant IA à Annemasse : agents IA pour PME | consultant IA Annemasse (créée 17.11, reprend la 301 de `/developpement-web/annemasse`) | 1240 | — | **0** | — |
| `/consultant-ia/gaillard` | Consultant IA à Gaillard : agents IA pour PME | consultant IA Gaillard (créée 17.11) | 1238 | — | **0** | — |
| `/hermes` | Agent IA sur mesure pour PME romandes | agent IA sur mesure (décision 17.11) ; ranke en fait sur « hermes agent / agent ia hermes » | 1430 | 6/165/7,2 | 7 | hermes-agent-ia-pme, openclaw-pme-suisse, prix-agent-ia-…, implementer-agent-ia-etapes, avant-apres-…, meilleurs-vps-…, agent-ia-repondre-mails-clients |
| `/metiers/ia-fiduciaire` | IA pour fiduciaires en Suisse romande | IA fiduciaire / automatisation fiduciaire | 1856 | 5/474/25,2 | 3 | automatiser-facturation-relances-ia, ia-nlpd-conformite-suisse, integrer-agent-ia-outils-existants |
| `/metiers/ia-agence-immobiliere` | IA pour agences immobilières en Suisse romande | IA agence immobilière / régie | 1731 | 0/60/18,4 | 2 | automatiser-prospection-crm-ia, integrer-agent-ia-outils-existants |
| `/services/formation-ia-equipe` | Formation IA pour équipes en Suisse romande | formation IA entreprise / PME | 906 | 0/169/31,2 | 2 | adoption-ia-equipe-change-management, ia-pragmatique-pme-suisse |
| `/services/application-sur-mesure` | Application sur mesure et logiciel métier à Genève | application sur mesure / logiciel métier Genève | 1291 | — (page du 17.11) | 5 | les 5 articles « sur mesure » (application-metier, cahier-des-charges, logiciel-vs-saas, no-code-vs, prix-logiciel) |
| `/services/developpement-application-mobile` | Développement d'application mobile en Suisse romande | agence / développement application mobile Genève, Suisse romande (absorbe `/geneve` et `/services/developpement-mvp`) | 1123 | 4/7269/28,5 | 12 | les 10 articles mobile + no-code-vs, prix-logiciel |
| `/services/developpement-application-mobile/lausanne` | Application mobile à Lausanne, sans agence | application mobile Lausanne | 2015 | 1/152/26,0 | **0** | — |
| `/services/creation-site-web` | Création de site web à Genève, freelance | création site web Genève (absorbe refonte, Webflow, WordPress) | 1479 | 0/24/40,9 | 2 | prix-site-web-suisse-2026, specialiste-developpement-web-suisse |
| `/services` | Systèmes IA, sites web et apps mobiles à Genève | hub services | 635 | 0/357/45,3 | 4 | geo-seo-ia, ia-pragmatique, prix-site-web, temps-perdu |
| `/tarifs` | Tarifs IA, site web et app mobile à Genève | tarifs agent IA / site web / app (page gardée « bonne page SEO potentielle », 17.11) | 475 | 1/647/40,5 | 4 | geo-seo-ia, openclaw-pme-suisse, prix-site-web, specialiste-dev-web (aucun article prix IA/mobile/logiciel ne la lie) |
| `/guides/mettre-en-place-ia-entreprise-guide` | Mettre l'IA en place dans votre entreprise : le guide | mettre en place l'IA en entreprise (pilier `pages`, 2433 mots, pubDate 15.07) | 2433 | 0/161/25,8 | 13 | ses 13 satellites ; lie en retour 18 articles + `/consultant-ia` |
| `/developpeur-web-freelance-geneve` | Développeur web freelance à Genève : IA, sites et apps | développeur web freelance Genève (non tranché) | 1587 | 7/1571/32,4 | 2 | prix-site-web, specialiste-dev-web |
| `/portfolio` + 16 études de cas | — | marque / preuve | — | /portfolio 1/117/30,7 | 3 | leo-lecureux-seo ← apparaitre-claude ; nooria ← sortir-application-mobile-app-store ; /portfolio ← specialiste-dev-web. **Aucun cas IA (barber-hub-automatisation, wildcat-agent-mails, systeme-ia-jonlabs, gestion-camps-budget) n'est lié depuis un article.** |
| `/about`, `/contact`, `/cv`, `/outils/reddit-dashboard`, `/blog` | — | marque / utilitaires | — | about 12/164/6,3 | contact 37, about 1 | — |

Non indexables : `/blog/tag/*` (noindex, follow, 33 tags), `/mentions-legales`, `/cv-pdf`, `/devis-client/*`, `/v2/styleguide`.

## 3. Métiers et villes réellement générés

| Route | Source de données | Entrées générées |
|---|---|---|
| `/metiers/[metier]` | `src/data/metiers-ia.ts` | **2** : `ia-fiduciaire`, `ia-agence-immobiliere` |
| `/consultant-ia/[ville]` | `src/data/villes-suisse-ia.ts` | **3** : `lausanne`, `annemasse`, `gaillard` (Genève fusionnée dans le pilier, 301) |
| `/services/developpement-application-mobile/[ville]` | `src/data/villes-mobile.ts` | **1** : `lausanne` (Genève fusionnée dans le pilier, 301) |
| — | `src/data/villes-frontalieres.ts` | fichier encore présent (Annemasse, Gaillard) mais **plus aucune route** `/developpement-web/*` (301 vers `/consultant-ia/{ville}`) |

Garde-fou (DECISIONS 25.06) : pas de ville ou métier sans contenu réellement local. Nyon écarté (trop petit), Bulle et Fribourg bloqués sur le mobile.

## 4. Programmation et créneaux

- Seul article futur : `openbot-souverainete-self-hosted`, **vendredi 20.11.2026**. Déjà lié par 4 articles en ligne (`hermes-agent-ia-pme`, `openclaw-pme-suisse`, `garde-fous-ia-validations-audit`, `agent-ia-repondre-mails-clients`) : ces 4 liens sont en 404 jusqu'au rebuild du 20.11.
- Créneaux pris après le 20.11 : **aucun**. Dernières publications : 12.10, 23.10, 16.11 (cadence lun/ven non tenue depuis le 11.09).
- Cadence 1 article / 2 jours du 22.11 au 31.12 = 20 dates : 22, 24, 26, 28, 30 nov. ; 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30 déc. (tombe sur le 24.12 et le 26.12).
- À tenir compte : bilan du tri « focus IA » prévu entre le 23.11 et le 09.12 (relance `/seo-gsc` et `/seo-index-diagnose` contre la baseline du 09.11), suivi d'une fusion de 13 articles. Indexation au 09.11 : 74/125 URLs, 37 « explorée, non indexée ».

## 5. Cannibalisations, orphelins, hors focus

### 5.1 Cannibalisations mesurées (GSC 90 j, URLs encore en ligne)

| Requête(s) | Pages en concurrence (imp, pos) | État / décision des docs |
|---|---|---|
| hermes agent, hermes ia, agent hermes, agent ia hermes | `/blog/hermes-agent-ia-pme` (408 ; 8,8) vs `/hermes` (28 ; 6,9) | GSC 16.09 : garder les deux, maillage croisé. Depuis le 17.11, `/hermes` vise « agent IA sur mesure » mais son URL et ses requêtes restent « hermes ». Le menu « Agents IA sur-mesure » pointe sur `/consultant-ia#…` au lieu de `/hermes` (audit 19.11, P2). |
| développement application mobile suisse, mobile hybride suisse | pilier mobile (951 ; 21,7) vs `/blog/developper-application-mobile-suisse` (37–111 ; 8,7–9,6) | DECISIONS 02.09 : le guide blog garde le générique « …suisse », le pilier se recentre sur « agence + ville ». Pas de 301. |
| application mobile Lausanne (5 requêtes) | pilier mobile (130–297) vs `/…/lausanne` (18–27) | Le pilier prend les impressions de la page ville ; page ville sans lien depuis le blog. |
| spécialiste / création site web suisse | `/blog/specialiste-developpement-web-suisse` (239 ; 5,9) vs `/` (155 ; 79,6) vs `/developpeur-web-freelance-geneve` (155 ; 53,1) | Non tranché (hors focus). |
| expert ia freelance suisse romande, agence ia lausanne | `/consultant-ia` (41 ; 8,9) vs `/services/formation-ia-equipe` (34 ; 77,5) vs `/blog/specialiste-…` | Dilution faible. |
| développeur web (freelance) genève | `/` vs `/developpeur-web-freelance-geneve` | Title home changé le 17.11 ; à remesurer. |

### 5.2 Risques d'intention (non encore visibles en GSC, à éviter dans le nouveau plan)

| Intention | URLs existantes | Note |
|---|---|---|
| Coût / prix d'un agent IA | `prix-agent-ia-automatisation-suisse`, `hermes-agent-ia-pme` (section prix, requête « prix de hermes agent » 73 imp), `/hermes`, `/tarifs`, `openclaw-pme-suisse` | Un nouvel article « prix agent IA » doublerait. Prix OpenClaw non tranché (CHF 200-800 vs dès 1'500). |
| Usages IA / automatisation pour PME (généraliste) | `automatisation-pme-suisse-guide-complet` (hub), `ia-pragmatique-pme-suisse`, `temps-perdu-pme-automatisation`, `comment-choisir-quoi-automatiser-pme`, `avantages-limites-automatisation-pme`, guide `/guides/…` | Topical map C1 : 301 de `ia-pragmatique` et `temps-perdu` vers le guide automatisation, **décidé, non exécuté** (les deux sont en ligne). |
| Mise en place / déploiement d'un agent IA | guide `/guides/…`, `implementer-agent-ia-etapes`, `projet-pilote-ia-30-jours`, `integrer-agent-ia-outils-existants`, `consultant-ia-c-est-quoi` | Deux hubs informationnels coexistent (guide `pages` + guide automatisation blog). |
| Agent IA pour les mails | `agent-ia-repondre-mails-clients`, `automatiser-emails-documents-ia`, `automatiser-support-client-ia`, cas `/portfolio/wildcat-agent-mails`, `/portfolio/barber-hub-automatisation` | 3 articles + 2 cas sur une intention voisine. |
| Application d'entreprise / mobile PME | `application-mobile-pme-suisse` (326 imp, pos 6,9, 0 clic), `developper-application-mobile-suisse`, `prix-application-mobile-suisse`, pilier | Silo déjà saturé (10 articles). |
| Natif / hybride / Flutter | `application-native-vs-hybride`, `flutter-vs-react-native-pme`, `application-mobile-ou-pwa` | 3 comparatifs proches. |
| Logiciel sur mesure | `application-metier-pme-sur-mesure`, `logiciel-sur-mesure-vs-saas`, `no-code-vs-developpement-sur-mesure`, `prix-logiciel-sur-mesure-pme`, `/services/application-sur-mesure` | Silo complet (map C1 : 0 à créer). |
| Agent IA self-hosted / souverain | `openbot-…` (20.11), `openclaw-pme-suisse`, `hermes-agent-ia-pme`, `meilleurs-vps-hermes-agent-suisse`, `ia-nlpd-conformite-suisse` | Chaque nouveau « test d'agent » doit avoir un mot-clé produit distinct. |
| Workflow vs agent / n8n | `workflows-vs-agents-ia-pme` (porte aussi « hermes agent vs n8n », pos 24,9) | Voir quick wins : sujet à détacher. |

### 5.3 Orphelins et articles faiblement maillés

| Article | Entrants (articles / hors blog) | Remarque |
|---|---|---|
| `recevoir-leads-formulaire-telegram-resend` | 1 / 0 | quasi orphelin, tutoriel isolé |
| `automatiser-facturation-relances-ia` | 0 / 2 | lié seulement par le guide et la page métier fiduciaire |
| `projet-pilote-ia-30-jours` | 0 / 2 | idem (guide) |
| `automatiser-prospection-crm-ia` | 0 / 2 | guide + page métier immobilier |
| `avant-apres-automatisation-pme-romande` | 0 / 1 | guide seul |
| `cartographier-processus-avant-automatiser` | 0 / 1 | guide seul |
| `automatiser-rh-onboarding-ia` | 0 / 1 | guide seul |
| `sortir-application-mobile-app-store` | 0 / 3 | pages mobile seulement |
| `automatiser-support-client-ia`, `automatiser-emails-documents-ia`, `adoption-ia-equipe-change-management`, `consultant-ia-c-est-quoi` | 1 / 1-3 | faibles |
| `agent-ia-repondre-mails-clients` (4 089 mots, cas phare) | 1 / 3 | sous-maillé pour son poids |
| `no-code-vs-developpement-sur-mesure`, `prix-site-web-suisse-2026`, `geo-seo-ia` | 1 / 1-3 | faibles |

Les 13 satellites « mise en place IA » ne se lient presque pas entre eux : ils montent au guide et au hub, sans latéral. Phase 6 « bouclage » du plan archivé (`docs/archive/plan-mise-en-place-ia.md`) jamais faite.
Mieux maillés : `hermes-agent-ia-pme` (11), `workflows-vs-agents-ia-pme` (10), `developper-application-mobile-suisse` (10), `automatisation-pme-suisse-guide-complet` (9), `ia-nlpd-conformite-suisse` (8), `meilleurs-vps-hermes-agent-suisse` (8).
Pages sans lien depuis le blog : `/consultant-ia/{lausanne,annemasse,gaillard}`, mobile Lausanne, la home, les 4 cas IA du portfolio. Audit 19.11 : `/services/application-sur-mesure` 0 lien contextuel entrant depuis les pages, `/services/formation-ia-equipe` 4.

### 5.4 Hors focus IA encore en ligne

| URL | GSC 90 j | Décision des docs |
|---|---|---|
| `/blog/prix-site-web-suisse-2026` | 6 clics / 1330 imp / 9,6 | **Non tranché**, gardé jusqu'au bilan (≥ 2 clics) |
| `/blog/specialiste-developpement-web-suisse` | 1 / 2343 / 17,5 | **Non tranché** ; capte des requêtes commerciales web (agence drupal, création site web suisse) |
| `/blog/apparaitre-claude` | 4 / 609 / 7,1 | **Non tranché** ; seul GEO « apparaître sur {IA} » conservé (24 clics sur 6 mois) |
| `/blog/geo-seo-ia` | 5 / 1644 / 14,1 | **Non tranché** ; reçoit les 301 des 6 autres articles GEO |
| `/blog/recevoir-leads-formulaire-telegram-resend` | 0 / 12 / 5,2 | pas de décision ; hors cluster |
| 10 articles mobile | cf. tableau | **Conservés** : l'app mobile fait partie du pivot (« applications sur mesure, dont mobile ») ; CTR nul sur le silo (S+4 mesuré 08.09) |
| `/services/creation-site-web` | 0 / 24 | gardée, absorbe refonte + Webflow + WordPress (17.11) |
| `/developpeur-web-freelance-geneve` | 7 / 1571 / 32,4 | **Non tranché** |
| `/portfolio/*` SEO local (barber-concept, leo-lecureux-seo, physio-pommier, swiss-dental-care) | — | gardées comme preuve |

Règle du tri (09.11) : suppression si « hors positionnement ET 0-1 clic sur 6 mois » ; les hors-pivot avec ≥ 2 clics restent jusqu'au bilan 23.11 → 09.12. Supprimés le 09.11 : 33 articles + 8 pages ; le 17.11 : `/developpement-web/*`, `/guides` (index), `/outils` (index), Webflow, WordPress, refonte, doublons Genève.
**Décision en attente d'exécution** (tri-contenu, roadmap) : après le bilan, fusionner les 13 articles IA à 0 clic (les satellites « mise en place IA ») dans `/guides/mettre-en-place-ia-entreprise-guide`, sauf `garde-fous-ia-validations-audit`, à réécrire. Sur 90 j ces 13 articles totalisent 1 clic.

## 6. Backlog déjà planifié, non produit

### Articles
Aucun article planifié non écrit : topical map consultant IA (4/4 écrits, 2 migrés et absorbés), map C1 (4/4), map « mise en place IA » (13/13 + pilier).

| Slug prévu | Source | Statut |
|---|---|---|
| `webflow-vs-wordpress`, `webflow-ou-site-sur-mesure`, `webflow-vs-framer`, `webflow-vs-shopify` | `docs/chantier-cluster-plateformes.md` phase 6 | **Caduc** (pivot ; pages Webflow/WordPress redirigées le 17.11) |
| `refonte-site-web-pme` | `docs/features/refonte-seo-clusters.md` | **Caduc** |
| modèle de rapport SEO, page WooCommerce, page Pays de Gex, page « refonte WordPress vers Astro » | `docs/audits/gsc-2026-09-16.md` | **Caduc** (SEO local / web abandonnés) |
| Mise à jour benchmark maison de `comparatif-browser-agents-ia` (8 cibles, 10 passages) | `docs/features/comparatif-browser-agents-ia.md` | À faire (mise à jour, pas un nouvel article) |
| Réécriture de `garde-fous-ia-validations-audit` | tri-contenu | À faire après bilan |

### Pages (planSEOIA Phase 3 et 4, « EN ATTENTE », cœur du pivot)
| Slug prévu | Priorité | Note |
|---|---|---|
| `/metiers/ia-commerce-retail` | P3 | attendu par `automatiser-support-client-ia` (latéral omis) |
| `/metiers/ia-cabinet` (avocats, médecins, thérapeutes) | P3 | attendu par `automatiser-rh-onboarding-ia` et `ia-nlpd-conformite-suisse` |
| `/openclaw` (landing produit) | P3 | 137 imp sur « agence (intégration) openclaw » déjà captées par l'article, pos 6-8, 0 clic |
| `/services/audit-ia` | P3 | — |
| `/consultant-ia/nyon` | P3 | écarté en Phase 1 (« trop petit ») |
| `/consultant-ia/{fribourg,neuchatel,sion,riviera}` | P4 | seulement si les phases 1-3 rankent |
| `/metiers/ia-agence-web-marketing` | P4 | — |
| Version EN (hub, Genève, métiers) | P4 | reporté |
| 5 lead magnets (calculateur de gain de temps en pilote, feuille de route, canevas de pilote, kit de lancement, grille de cartographie) | backlog | skill `/lead-magnet` non conçu |

### Optimisations de pages déjà listées (audit 19.11, non faites)
`public/llms.txt` à l'ancien positionnement ; `og-image.png` ancienne DA ; title/meta de `/services`, `/tarifs`, `/portfolio`, `/contact`, `/cv` ; meta > 140 sur 8 piliers et 8/9 déclinées ; title ≠ H1 sur home, application-sur-mesure, mobile, services, tarifs ; og:image unique absente des piliers et déclinées ; schémas manquants (FAQPage home, Service + areaServed villes IA, OfferCatalog tarifs sans mobile) ; ancres génériques ; Annemasse/Gaillard ~44 % de phrases communes. Arbitrages ouverts : tu/vous du guide, H1 home, og:image auto ou manuelle.

## 7. Mécanique de publication

- Gate : `isPublished = !draft && pubDate <= Date.now()` (`src/lib/blog.ts`), évalué **au build**. Appliqué à `/blog`, `/blog/[slug]` (la page n'est pas générée, donc absente du sitemap), `/blog/tag/*`, RSS, home (`index.astro`, `PostFeature.astro`), `/guides/[slug]`. Les articles liés sont pris dans la liste déjà filtrée.
- `pubDate: AAAA-MM-JJ` = minuit UTC. Site statique : l'article sort au premier build postérieur (cron ou n'importe quel push sur `main`).
- Cron `.github/workflows/scheduled-publish.yml` : `cron: '0 5 * * 1,5'` = **lundi et vendredi à 05:00 UTC** (06:00 heure suisse en hiver, 07:00 en été ; le commentaire dit « 07:00 CEST »), plus `workflow_dispatch`. Il fait un `curl POST` sur le secret `VERCEL_DEPLOY_HOOK_URL`.
- Conséquence aujourd'hui : un article daté un mardi, mercredi, jeudi, samedi ou dimanche attend le lundi ou vendredi suivant (jusqu'à 3 jours de retard) sauf push entre-temps.
- Sitemap : `lastmod` réel (updatedDate > pubDate), donc des rebuilds plus fréquents ne faussent pas la fraîcheur.

### Passage à 1 article / 2 jours : changements requis
1. `.github/workflows/scheduled-publish.yml` : `cron: '0 5 * * *'` (rebuild quotidien). Ne pas utiliser `*/2` sur le jour du mois : il donne les jours impairs et se décale à chaque changement de mois.
2. Même fichier : `name:` et commentaires d'en-tête (« lundi/vendredi », « 2 articles/semaine »).
3. `docs/seo-context.md`, section « Cadence éditoriale — RÈGLE OBLIGATOIRE » : remplacer la règle lundi/vendredi. Elle est lue par `/seo-brief`, `/seo-write`, `/seo-enrich`, qui dateraient sinon sur lun/ven.
4. `docs/planSEOIA.md` §4 (rappel de cadence) et le commentaire d'`astro.config.mjs:13` (cosmétique).
5. Dater les 20 articles sur les dates du §4. Aucun changement de code : le gate ne dépend pas du jour de semaine.
6. Maillage : un article qui lie un article futur produit un 404 jusqu'à la date de celui-ci (cas actuel d'OpenBot). Publier les cibles avant les sources, ou ajouter les liens après coup.
7. Après chaque mise en ligne : ping IndexNow (commande dans `seo-context.md`) ; côté Google, demande d'indexation manuelle (Jonathan).
À noter : `seo-context.md` renvoie à une commande `/calendar` qui n'existe pas dans `.claude/commands/`.

## 8. Search Console — 90 jours (20.08 → 17.11.2026)

Accès : OK via service account (`sc-domain:jonlabs.ch`, siteOwner). Le script du skill échoue faute de `google-auth` ; données tirées par l'API REST (`gsc_pull.py`). Brut : `gsc-90j.json` (1 000 requêtes, 109 pages, 1 832 lignes requête × page). Fichier de credentials supprimé.
Totaux : 168 clics · 33 181 impressions · CTR 0,51 % · position 22,0. Une partie des impressions vient d'URLs supprimées depuis (villes frontalières, WordPress, Webflow, SEO local).

### 8.1 Quick wins IA (position 5-20, impressions, peu ou pas de clics)

| Requête | Imp | Clics | Pos | Page | Piste |
|---|---|---|---|---|---|
| hermes agent | 436 | 1 | 8,7 | `/blog/hermes-agent-ia-pme` (+ `/hermes` 6,9) | title/meta ; pos 6,9 pour la landing |
| hermes ia | 161 | 2 | 10,9 | idem | — |
| prix de hermes agent / hermes agent prix / hermes ia prix | 73 + 10 + 11 | 0 | 12,3 / 7,5 / 6,5 | `/blog/hermes-agent-ia-pme` | intention prix non servie par une page dédiée |
| agent hermes, agent ia hermes, c'est quoi hermes agent, hermes agent c'est quoi | 63 / 31 / 31 / 23 | 0 | 7-9 | article + `/hermes` | — |
| agence intégration openclaw / agence openclaw | 69 / 68 | 0 | 6,2 / 7,9 | `/blog/openclaw-pme-suisse` | intention prestataire : landing `/openclaw` prévue |
| claude brave search, claude brave, claude for brave, brave claude | 163 / 64 / 23 / 21 | 0-2 | 3-6 | `/blog/apparaitre-claude` | hors focus, mais 271 imp en top 6 |
| quel est le meilleur outil geo en 2026, meilleures plateformes d'optimisation pour les moteurs IA 2026, best gemini geo services 2026 | 120 / 79 / 103 | 0 | 11,8 / 10,7 / 4,7 | `/blog/geo-seo-ia` | hors focus |
| expert ia freelance suisse romande | 47 | 0 | 12,8 (hub 8,9) | `/consultant-ia` | — |
| ia pour une fiduciaire d'entreprise | 43 | 0 | 17,5 | `/metiers/ia-fiduciaire` | — |
| ia conforme nlpd | 33 | 0 | 7,8 | `/blog/ia-nlpd-conformite-suisse` | — |
| meilleur consultant ia (marketing) lausanne | 18 + 13 | 0 | 6,4 / 5,8 | `/consultant-ia/lausanne` | — |
| workflow d'agents ia, workflow ia, agent ia workflow | 21 / 16 / 14 | 0 | 17-20 | `/blog/workflows-vs-agents-ia-pme` | — |
| comment automatiser mes flux de travail avec des agents ia en suisse | 17 | 0 | 8,3 | idem | requête conversationnelle |
| besoin d'un prestataire agile pour intégrer des outils ia… à genève | 19 | 0 | 7,2 | guide | requête conversationnelle |
| automatiser leads crm | 7 | 0 | 15,7 | `/blog/automatiser-prospection-crm-ia` | — |

Hors IA mais dans le pivot (mobile) : « application mobile entreprise suisse » 326 imp, pos 6,9, 0 clic (`application-mobile-pme-suisse`, déjà rafraîchi le 09.11) ; « agence app native suisse » 249 imp, pos 9,4 ; « développement mobile hybride suisse » 220, pos 12,1 ; « agence app hybride flutter » 187, pos 18,4 ; « créer une application genève » 304, pos 19,3 ; « création application mobile genève » 284, pos 19,9.

### 8.2 Pages à fortes impressions et CTR nul ou quasi nul

| Page | Imp | Clics | Pos |
|---|---|---|---|
| `/services/developpement-application-mobile` | 7 269 | 4 | 28,5 |
| `/blog/specialiste-developpement-web-suisse` | 2 343 | 1 | 17,5 |
| `/blog/hermes-agent-ia-pme` | 2 233 | 20 | 9,1 (CTR 0,9 %) |
| `/blog/geo-seo-ia` | 1 644 | 5 | 14,1 |
| `/developpeur-web-freelance-geneve` | 1 571 | 7 | 32,4 |
| `/blog/prix-site-web-suisse-2026` | 1 330 | 6 | 9,6 |
| `/tarifs` | 647 | 1 | 40,5 (requêtes « tarif freelance / consultant suisse ») |
| `/blog/apparaitre-claude` | 609 | 4 | 7,1 |
| `/metiers/ia-fiduciaire` | 474 | 5 | 25,2 |
| `/blog/workflows-vs-agents-ia-pme` | 445 | 1 | 11,5 |
| `/consultant-ia` | 413 | 5 | 24,3 |
| `/blog/application-mobile-pme-suisse` | 349 | 0 | 8,1 |
| `/blog/meilleurs-vps-hermes-agent-suisse` | 311 | 5 | 11,5 |
| `/blog/openclaw-pme-suisse` | 243 | 0 | 9,3 |
| `/blog/developper-application-mobile-suisse` | 207 | 1 | 9,5 |
| `/services/formation-ia-equipe` | 169 | 0 | 31,2 |
| `/guides/mettre-en-place-ia-entreprise-guide` | 161 | 0 | 25,8 |

Articles IA quasi invisibles (< 30 imp en 90 j) : `agent-ia-entreprise-cas-usage` 17, `consultant-ia-c-est-quoi` 13, `implementer-agent-ia-etapes` 23, `projet-pilote-ia-30-jours` 18, `automatiser-emails-documents-ia` 12, `automatiser-facturation-relances-ia` 6, `automatiser-rh-onboarding-ia` 6, `garde-fous-ia-validations-audit` 3, `comment-choisir-quoi-automatiser-pme` 4, `temps-perdu-pme-automatisation` 7, `comparatif-browser-agents-ia` 3 (publié le 16.11). `automatisation-pme-suisse-guide-complet` (hub info) n'apparaît pas dans les 109 pages.

### 8.3 Requêtes IA sans page dédiée

| Thème | Requêtes (imp ; pos) | Page qui répond aujourd'hui |
|---|---|---|
| Hermes vs n8n | hermes agent vs n8n (20 ; 24,9) | `workflows-vs-agents-ia-pme` (pas de section dédiée) |
| Hébergement Hermes générique | hermes vps (38 ; 31,7), hermes server (14 ; 23,5), hermes agent vps (10 ; 28,6), meilleures solutions d'hébergement pour hermes agent (7 ; 10) | `meilleurs-vps-hermes-agent-suisse` (angle Suisse, pos 24-32) |
| Prix Hermes | prix de hermes agent (73 ; 12,3) | section de l'article Hermes |
| Prestataire OpenClaw | agence (intégration) openclaw (137 ; 6-8) | article ; landing `/openclaw` au backlog |
| « Agence IA » + ville | agence ia lausanne (55 ; 68,8), agence ia geneve (21 ; 50,3), agence ia suisse (12 ; 64,7), agence ia (11), agence automatisation ia geneve (9 ; 32,8) | `/consultant-ia` (aucune page ni article « agence IA ou freelance ») |
| Consultant IA générique | consultant ia (31 ; 30,4), consultant ia marketing (4) | hub |
| Automatisation fiduciaire | automatisation fiduciaire (20 ; 29,4), … suisse (20 ; 26,4), outil automatisation pour fiduciaire (22 ; 37,6), automatisation des tâches fiduciaire (12 ; 36), ia fiduciaria (34, italien) | `/metiers/ia-fiduciaire` seule, aucun article satellite fiduciaire |
| Formation IA | formation automatisation ia (13 ; 20,2), formation ia pme (8 ; 27,4), formation ia (11 ; 50,4) | `/services/formation-ia-equipe`, aucun article |
| Intégration / interopérabilité | intégrer agent ia (28 ; 23,2), interopérabilité des agents ia (12 ; 26,2) | `integrer-agent-ia-outils-existants` (pos > 20) |
| Orchestration / infra d'agents | infrastructure la plus rentable pour les workflows d'agents de longue durée (11 ; 9,2), compare les capacités d'orchestration… (10 ; 6,8) | `workflows-vs-agents-ia-pme` |
| Application web sur mesure | développement application web sur mesure (94 ; 55,2), application mobile sur mesure (211 ; 23,6), application métier sur mesure (11 ; 54,4), « je cherche une agence pour développer une application web sur mesure en suisse romande » (20 ; 6,5) | home, `/developpeur-web-freelance-geneve` ; `/services/application-sur-mesure` (17.11) pas encore vue |
| IA immobilier | ia dans l'immobilier (2 ; 53) | `/metiers/ia-agence-immobiliere` (60 imp au total) |

Absents de la GSC (aucune impression mesurée) : MCP, RAG, chatbot, Claude Code, n8n seul, Bexio/Crésus + IA, agent IA par métier hors fiduciaire. Ce sont des territoires vierges, pas des demandes mesurées : volumes à valider autrement (DataForSEO non utilisé ici).
