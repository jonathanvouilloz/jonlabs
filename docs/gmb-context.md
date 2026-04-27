---
extends: identity
hub_project_slug: jonlabs
locations:
  - fiche_id: locations/5169306032527013289
    label: Jon Labs
    city: Genève, Suisse
    specifics: Freelance développement web, automatisation, SEO local pour PME et indépendants
keywords:
  - développement web Genève
  - automatisation PME
  - SEO local Suisse
  - freelance web Genève
  - site vitrine Genève
art_direction:
  style: brutaliste
  typography: bold sans-serif
  mood: professionnel, créatif, maker
  ratio: "4:3"
post_frequency: 3/week
period_months: 1
image_folder: jonlabs
content_sources:
  - type: files
    directories:
      - src/content/blog/
      - src/content/portfolio/
    extensions:
      - .md
      - .mdx
  - type: static_pages
    pages:
      - { url: /services, title: Services }
      - { url: /contact, title: Contact }
      - { url: /tarifs, title: Tarifs }
      - { url: /portfolio, title: Portfolio }
      - { url: /services/referencement-local, title: "Référencement local" }
      - { url: /services/refonte-site-web, title: "Refonte site web" }
whatsapp_number: ""
---

# GMB Context — Jon Labs

> Extension d'`identity.md`. Spécificités GMB : locations, keywords locaux, art direction visuelle, sources de contenu.
> `tone`, `register`, `banned_words`, colors sont dans `identity.md`.
>
> Lu par `/gmb-generate`, `/gmb-post`, `/gmb-generate-images`, `/gmb-regenerate-image`.

## Stratégie GMB

Une fiche unique sur Genève — Jon Labs en tant que freelance/atelier solo. Cadence 3 posts/semaine pendant les périodes de production (lancements de services, audits publiés, articles de fond). Post types alternés : "Quoi de neuf" (annonce article ou cas client), "Offre" (audit gratuit, appel découverte), occasionnellement "Événement" (workshop ou intervention).

L'angle local Suisse romande est central : chaque post intègre 1-2 keywords géolocalisés (Genève, Lausanne, Suisse romande) sans être lourd, et renvoie vers une page service ou un article du blog jonlabs.ch.

## Notes par location

- **Genève** : zone de chalandise principale (45 min de Lausanne, transfrontalier inclus). Fiche à pousser sur les requêtes "développeur web Genève", "automatisation PME Genève", "freelance web Genève".
