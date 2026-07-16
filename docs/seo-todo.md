# SEO TODO — items ouverts

> Audit initial réalisé le 20.02.2026 sur les pages piliers de jonlabs.ch.
> **Tout le P0 + P1 a été livré** (About, mentions légales, OG/logo PNG, title tags, meta descriptions, FAQPage services, headings H1, `sameAs`, suppression SearchAction…) — historique dans git.
> Ne restent que les P2 ci-dessous.

---

## P2 — E-E-A-T / Confiance

- [ ] **Témoignages clients** — 1 seul présent aujourd'hui (`ProofLecureux` sur la home). Viser 2-3, sur home ou pages services.
- [ ] **Logos clients** — `ClientsBanner.astro` liste 6 vrais noms en texte (marquee). Passer à de vrais logos images si dispo.
- [ ] **Fourchettes de prix (`offers` schema)** — manquant dans `src/data/schema.ts` sur 7 services : `refonte-site-web`, `outils-sur-mesure`, `integration-outils`, `automatisation`, `validation-idee`, `developpement-mvp`, `referencement-local`.

## P2 — Divers

- [ ] **OG image par page** — seuls `blog/[slug]` et `guides/[slug]` passent un `ogImage` custom ; toutes les autres pages retombent sur `/og-image.png` générique.
