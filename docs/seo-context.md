---
extends: identity
expertise: Astro/Tailwind/Node.js, automatisation Make/Zapier/n8n, SEO local Suisse romande, applications sur-mesure
location: Genève, Suisse — service Suisse romande
eeat_proof: Audit terrain de 50 sites d'indépendants romands réalisé et publié (2026) ; projets clients livrés pour TPE/PME ; site jonlabs.ch en production ; expérience terrain en automatisation et intégration API
goals:
  cluster: Construire la visibilité organique sur les requêtes "développeur web Genève", "site web suisse romande", "automatisation PME suisse" — asseoir l'expertise E-E-A-T locale
  transactional: Générer des leads qualifiés vers /services/refonte-site-web ou /contact — lecteur qui reconnaît son problème et veut passer à l'action
  local: Apparaître pour les recherches géolocalisées romandes — "freelance web Genève", "développeur web Lausanne", "automatisation PME suisse"
  evergreen: Nurturing — amener le lecteur vers le prochain article du cluster ou vers le CTA email
cta_map:
  hot:
    url: /services/refonte-site-web
    anchor: "Obtenir un audit gratuit"
  warm:
    url: /contact
    anchor: "Discuter de votre projet"
  nurturing: article suivant du cluster (lien interne contextuel)
  email: "[à compléter si newsletter active]"
  calendly:
    url: https://cal.com/jonathan-vouilloz/appel-de-bienvenue
    anchor: "Réserver un appel découverte"
---

# SEO Context — Jon Labs

> Extension d'`identity.md`. Personas détaillés, CTA map, objectifs business par type de contenu, concurrents.
> `tone`, `register`, `banned_words` sont dans `identity.md`.
> `sounds_like`, auteur sont dans `voice.md`.
>
> Lu par `/seo-brief`, `/seo-write`, `/seo-enrich`.

## Personas

### Persona principal

- **Label** : Indépendant romand ou dirigeant TPE/PME
- **Profil** : Entrepreneur 30-55 ans, Suisse romande (Genève, Vaud, Neuchâtel), entreprise de 1 à 15 personnes
- **Ce qu'il sait déjà** : Il a un site web, il connaît WordPress de nom, il comprend les bases du business digital, il sait que "le SEO c'est important" sans savoir pourquoi
- **Ce qu'il veut savoir** : Combien ça coûte vraiment, combien de temps ça prend, si ça vaut le coup par rapport à son budget, comment ses concurrents font
- **Ce qu'il devrait savoir (angle expert)** : Son site lui coûte des clients de façon invisible chaque mois ; la vitesse mobile et l'architecture SEO ont un impact direct mesurable sur les revenus ; l'IA change les règles de visibilité en 2025-2026 et un site sans schema.org devient invisible pour les AI Overviews
- **Pain points** : Site vieilli ou invisible sur Google, dépendance à un prestataire qui ne répond plus, coûts de maintenance imprévisibles, aucune idée du ROI de son site, concurrent qui le dépasse sur Google

### Persona secondaire

- **Label** : Association ou club sportif / culturel
- **Profil** : Responsable communication non-technique, budget très contraint, besoin de gérer le site sans développeur
- **Ce qu'il veut savoir** : Solutions simples et économiques, comment faire les mises à jour soi-même

## Concurrents de référence

> Mis à jour le 2026-04-19. 10 références analysées — gaps identifiés pour la Gap Analysis.

### Concurrents directs Suisse romande

- **Justin Cappelle** — https://www.justincappelle.ch/blog
  - Point fort: Concurrent le plus direct (PME/artisans/indépendants romands), vrais chiffres sur les tarifs, ton direct et localisé
  - Gap: Aucun contenu sur l'automatisation, l'IA appliquée aux PME, ou le SEO local comme discipline — blog peu nourri
  - Activité: Modérée (quelques articles/trimestre)

- **Vixal Digital** — https://www.vixaldigital.com/blog
  - Point fort: Bonne couverture des requêtes transactionnelles romandes ("combien coûte un site en Suisse", "freelance ou agence")
  - Gap: Pas de contenu IA/automatisation, pas de stratégie SEO long terme, peu de personnalité éditoriale
  - Activité: Faible (quelques articles/an)

- **Mivelaz Consulting** — https://mivelaz-consulting.ch/blog
  - Point fort: Couvre SEO Suisse romande + automatisation PME (n8n, Make, IA) — double positionnement proche du tien
  - Gap: Ton "agence", pas de personal brand, peu de contenu sur le dev sur mesure, blog peu nourri
  - Activité: Faible (vitrine principalement)

- **We Acend** — https://blog.weacend.com
  - Point fort: Seul acteur genevois sur l'angle "automatisation IA pour PME" avec un vrai blog (digitalisation PME Genève, tableaux de bord, centralisation données)
  - Gap: Aucun contenu SEO, aucune vision sur la visibilité Google locale, pas de dev custom
  - Activité: Modérée (articles bien construits, cadence irrégulière)

- **Lyketil** — https://www.lyketil.com
  - Point fort: Agence no-code Lausanne (Bubble, Webflow, Glide), cible PME romandes, positionnement local clair
  - Gap: Aucun blog éditorial, aucun contenu SEO/IA, pure vitrine prestataire
  - Activité: Nulle côté blog

- **web-dev.fr** — https://web-dev.fr
  - Point fort: Freelance dev qui couvre exactement le bassin lémanique transfrontalier (Genève, Annecy, Annemasse, Fillinges)
  - Gap: Pas de blog ni contenu éditorial, aucun angle SEO/automatisation/IA
  - Activité: Nulle côté blog

### Références France francophone (benchmarks éditoriaux)

- **Louis Descamps** — https://louisdescamps.fr/blog
  - Point fort: Blog SEO dédié PME/indépendants, fort sur le SEO local, Google My Business, WordPress SEO. Ton accessible, expert sans être corporate
  - Gap: Basé à Lille, aucun ancrage suisse, pas de dev ni automatisation
  - Activité: Régulière (~1 article/mois) — bonne référence de cadence éditoriale

- **Amandine Bart / SEO sans migraine** — https://www.seo-sans-migraine.fr/blog
  - Point fort: Référence absolue FR pour démystifier le SEO (150k+ followers), contenu très pédagogique, orienté entrepreneurs et indépendants
  - Gap: Positionnement "formation/outil", aucun ancrage suisse, aucun contenu IA appliquée ou dev custom
  - Activité: Très active — référence nationale mais pas locale

- **Paul Vengeons** — https://www.paulvengeons.fr/blog
  - Point fort: SEO consultant très actif, a publié une page "Consultant SEO Suisse" pour capter le marché romand — concurrent indirect sur le SEO. Fort personal branding, bien référencé
  - Gap: Basé à Paris, aucune connaissance terrain du marché suisse, pas de dev ni automatisation
  - Activité: Très active (publication régulière, très bien référencé)

- **Florian Perrier** — https://www.florianperrier.com/blog
  - Point fort: Dev freelance parisien qui mélange contenu SEO, tendances tech et IA (Mistral Code, automatisation). Bon angle "dev + IA"
  - Gap: Ancrage parisien, contenu IA très "developer tools" sans bénéfice concret PME, pas de SEO local
  - Activité: Modérée (quelques articles/trimestre)

### Référence tonale

- **welovedevs.com** — https://welovedevs.com — référence pour le ton direct et candide (FR, pas CH — à adapter au marché romand)

### Synthèse des gaps à exploiter

- Aucun acteur local ne publie sur les 3 piliers simultanément : dev sur mesure + SEO local suisse + automatisation IA pour PME
- Le blog est le principal avantage compétitif en Suisse romande : les acteurs locaux n'ont pas de stratégie de contenu
- Paul Vengeons tente de capter le marché suisse depuis Paris → opportunité de le détrôner avec un ancrage terrain réel
- Louis Descamps est la référence de cadence à atteindre (~1 article/mois) dans un premier temps
