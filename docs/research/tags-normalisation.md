# Normalisation des tags du blog (2026-11-17)

Avant : 148 tags uniques sur 48 articles. Après : 33 tags. Script : mapping appliqué au seul champ `tags` du frontmatter (ordre conservé, dédoublonné, plafonné à 6).

Règles : slug minuscule kebab-case sans accent ni espace ; libellé lisible dans `src/lib/tags.ts` (`tagLabel`).
Pages `/blog/tag/*` : `noindex, follow`, exclues du sitemap. Chaque ancien tag disparu a une 301 dans `vercel.json` (forme encodée `%20`/`%C3%A9`, sans variante slash final : `trailingSlash: false` la normalise avant).
Exception : `PME`, `ROI`, `Flutter` (différence de casse seule) sans redirection, pour éviter une boucle si Vercel compare sans casse.

## Vocabulaire retenu

| Nouveau tag | Articles | Anciens tags fusionnés | Pourquoi |
|---|---|---|---|
| `suisse-romande` | 38 | `geneve` (2), `suisse` (10), `suisse romande` (5), `suisse-romande` (24) | marché unique du site (suisse, geneve = même cible) |
| `pme` | 31 | `PME` (14), `pme` (15), `pme-suisse` (2), `tpe` (1) | casse + tpe ; pme-suisse redondant avec suisse-romande |
| `automatisation` | 28 | `automatisation` (27), `automatisation-pme` (1), `workflow` (2), `workflows` (1) | workflow(s) et automatisation-pme sont la même entrée |
| `agent-ia` | 18 | `agent IA` (1), `agent-ia` (15), `agents-ia` (1), `fiabilite-agent-ia` (1) | variantes graphie/pluriel ; fiabilité rattachée à l'agent |
| `application-mobile` | 10 | `MVP` (1), `PWA` (2), `application hybride` (1), `application mobile` (9), `application native` (1), `développement mobile` (6), `mvp` (1) | tous les angles mobile (PWA, natif, hybride, MVP) |
| `prix` | 9 | `TCO` (1), `budget` (5), `prix` (3), `prix-agent-ia` (1), `tarifs` (2), `tarifs-web` (1) | budget, tarifs, TCO = question de prix |
| `ia` | 7 | `ia` (5), `ia-entreprise` (1), `intelligence-artificielle` (1) | termes génériques équivalents |
| `roi` | 7 | `ROI` (1), `calcul-roi` (1), `cout-horaire` (1), `couts-caches` (1), `limites` (1), `roi` (5), `roi-automatisation` (1) | tout le calcul de rentabilité (coûts cachés, limites inclus) |
| `no-code` | 7 | `Bubble` (1), `Webflow` (1), `make` (5), `n8n` (5), `no-code` (2), `vendor lock-in` (1), `zapier` (4) | outils no-code / low-code (n8n, Make, Zapier, Bubble, Webflow) |
| `flutter` | 6 | `Flutter` (1), `flutter` (5) | casse |
| `freelance` | 6 | `agence` (2), `agence-web` (1), `choix-prestataire` (1), `consultant-ia` (1), `freelance` (6) | choisir un prestataire (agence, consultant) |
| `logiciel-sur-mesure` | 5 | `SaaS` (1), `application métier` (2), `développement` (1), `développement sur mesure` (3), `logiciel sur mesure` (2), `sur mesure` (1), `webapp` (1) | positionnement « sur mesure » ; application métier, webapp, SaaS en face |
| `hermes-agent` | 4 | `Hermes Agent` (1), `hermes-agent` (3) | casse/espace |
| `outils-ia` | 4 | `Mistral` (1), `Resend` (1), `Telegram` (2), `browser-automation` (1), `claude-code` (1), `llm` (1), `navigateur-headless` (1), `prompt` (1), `scraping` (1), `serverless` (1), `whatsapp` (1) | briques techniques concrètes (LLM, Mistral, Telegram, scraping…) |
| `comparatif` | 4 | `comparatif` (3), `décision` (1) | articles « X vs Y » / aide à la décision |
| `react-native` | 4 | `React Native` (1), `react native` (3) | espace → kebab-case |
| `nlpd` | 4 | `LPD` (1), `conformite-donnees` (1), `hebergement-suisse` (1), `hostinger` (1), `infomaniak` (1), `nlpd` (3), `protection-donnees` (1), `vps` (1) | protection des données, y compris hébergement en Suisse |
| `prospection-crm` | 3 | `crm` (1), `crm-ia` (1), `formulaire de contact` (1), `leads` (1), `prospection-commerciale` (1), `scoring-leads` (1) | leads, scoring, CRM, formulaires |
| `integrations` | 3 | `integration-ia` (1), `intégration` (1), `mcp` (2) | brancher l'IA sur l'existant (MCP inclus) |
| `administratif` | 3 | `admin` (1), `attestations-rh` (1), `comptabilite-pme` (1), `contrats-travail` (1), `facturation` (1), `onboarding` (1), `relances-clients` (1) | facturation, comptabilité, RH |
| `adoption-ia` | 2 | `adoption-ia` (1), `champion-interne` (1), `conduite-du-changement` (1), `referent-ia` (1) | conduite du changement côté équipe |
| `emails-documents` | 2 | `documents-pme` (1), `email` (1), `rag` (1), `tri-emails` (1) | tri d'e-mails, RAG documentaire |
| `geo` | 2 | `anthropic` (1), `brave-search` (1), `chatgpt` (1), `claude` (2), `copilot` (1), `gemini` (1), `geo` (2), `grok` (1), `perplexity` (1), `visibilité` (2) | visibilité dans les IA (noms de moteurs IA fusionnés) |
| `seo` | 2 | `seo` (2) |  |
| `garde-fous-ia` | 2 | `audit-ia` (1), `escalade-humaine` (1), `garde-fous-ia` (1), `human-in-the-loop` (1) | contrôle humain, audit, escalade |
| `cadrage-projet` | 2 | `audit-processus` (1), `cadrage projet` (1), `cahier des charges` (1), `cartographie-processus` (1), `mapping-processus` (1) | cahier des charges et cartographie des processus = phase amont |
| `open-source` | 2 | `nous-research` (1), `open-source` (2), `openclaw` (1), `peter-steinberger` (1) | projets open source (OpenClaw, Nous Research…) |
| `productivite` | 2 | `productivite` (2) |  |
| `deploiement-ia` | 2 | `deploiement-ia` (1), `feuille-de-route` (1), `kpi-ia` (1), `poc-ia` (1), `projet-pilote-ia` (1) | pilote, POC, KPI, feuille de route |
| `site-web` | 2 | `developpement-web` (1), `site-web` (1) |  |
| `cas-usage` | 1 | `cas-usage` (1) |  |
| `support-client` | 1 | `chatbot` (1), `support-client` (1) | chatbot, support |
| `app-store` | 1 | `app store` (1), `expo` (1), `publication` (1), `revenuecat` (1) | publication en store (expo, RevenueCat) |
