# Pre-Commit Checklist

Before committing, check:

## Code Quality
- [ ] No console.logs left
- [ ] No commented-out code
- [ ] No stray TODO comments (les `TODO:image` intentionnels sont OK)
- [ ] TypeScript types are correct
- [ ] Follows `docs/guidelines.md`

## Content
- [ ] No Lorem Ipsum placeholder text
- [ ] Contenu issu du brief / de la demande (pas de copydeck central)
- [ ] Spelling checked (FR-CH)
- [ ] Links work (no 404s)

## Design (système blueprint)
- [ ] Tokens blueprint (`--ink`, `--muted`, `--line`, `--accent` teal) — cf. `docs/styleguide.md` + `src/styles/blueprint.css`
- [ ] Primitives `.co-*` scopées sous `.co-root` / `.co-chrome`
- [ ] Filets fins, coins nets (pas de bordures 2px ni ombres offset brutalistes)
- [ ] Zéro emoji dans l'UI (icônes Remix monochromes)
- [ ] Transitions en `ease-out`
- [ ] Responsive mobile/tablet/desktop
- [ ] Accessibilité (alt text, HTML sémantique, focus visible)

## Performance
- [ ] Images optimisées (`src/assets/` via `<Image>` quand possible)
- [ ] No unnecessary dependencies
- [ ] Lazy loading where appropriate

## SEO
- [ ] Meta tags présents (title, description, og:image)
- [ ] HTML sémantique (h1 > h2 > h3)
- [ ] Alt text sur toutes les images

## Commands

```bash
npm run build    # Check for errors
npm run preview  # Test build locally
```

---

# Request Structure

Pour les demandes complexes, ce format aide :

```
**Context**: Ce que tu cherches à faire
**Current state**: Ce qui existe déjà
**Desired outcome**: Résultat précis voulu
**Constraints**: Responsive, tokens blueprint, performance, etc.
**Reference**: docs/[fichier-pertinent].md
```

## Exemple

```
**Context**: Ajouter une section « preuves » sur une page service
**Current state**: Section absente
**Desired outcome**: 3 cartes preuve (metric + libellé + source) en grille
**Constraints**:
- Primitives blueprint (.co-root, .co-list, .co-badge), accent teal
- Mobile: empilé ; Desktop: 3 colonnes
- Filets fins, coins nets, zéro emoji
**Reference**: src/styles/blueprint.css + /styleguide-components (page live)
```
