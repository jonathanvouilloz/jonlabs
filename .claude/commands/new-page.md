# Create New Page

Create a new page `src/pages/$ARGUMENTS.astro` for Jon Labs:

## Requirements

1. **Read first**:
   - `docs/project-context.md` - Positionnement, ton (le contenu vient du brief/de la demande, pas d'un copydeck central)
   - `docs/styleguide.md` + `src/styles/blueprint.css` - Design system blueprint
   - `docs/schema-guide.md` - Schema.org implementation guide
   - `src/layouts/Layout.astro` - Use this layout

2. **Structure**:
   - Import and use `Layout.astro`
   - Add SEO meta tags (title, description, og:image)
   - **Add Schema.org data** (voir étape 6)
   - Follow semantic HTML (h1 > h2 > h3)
   - Mobile-first responsive design

3. **Styling**:
   - Système blueprint : primitives `.co-*` scopées sous `.co-root` / `.co-chrome`
   - Tokens `--ink` / `--muted` / `--line` / `--accent` (teal) ; filets fins, coins nets, zéro emoji
   - Tailwind utilities + classes blueprint

4. **Components**:
   - Reuse existing components from `src/components/`
   - Create new components if needed (in separate files)

5. **Content**:
   - Contenu issu du brief / de la demande (pas de copydeck central)
   - No Lorem Ipsum or placeholder text
   - French language (FR-CH)

6. **Schema.org** (obligatoire):
   - Importer depuis `src/data/schema.ts` et `src/lib/seo.ts`
   - Créer variable `schemas` selon le type de page
   - Passer `schemas={schemas}` au Layout
   - Consulter `docs/schema-guide.md` pour les détails
   - Ou utiliser `/schema add [page]` après création

## Output

Create the page file and any new components needed. Show me the code.
