# Pre-Commit Review

Review the staged/modified files before committing.

## Automated Checks

Run these checks on modified files:

1. **Code Quality**
   - No `console.log` statements
   - No commented-out code blocks
   - No TODO comments (list them if found)
   - TypeScript types are correct

2. **Content**
   - No Lorem Ipsum or placeholder text
   - Contenu cohérent avec le brief / la demande (pas de copydeck central)
   - No spelling errors (French)

3. **Design**
   - Tokens blueprint corrects (`--ink`, `--muted`, `--line`, `--accent` teal), primitives `.co-*` scopées
   - Has hover states on interactive elements (ease-out) ; zéro emoji dans l'UI
   - Responsive classes present (`md:` breakpoints)

4. **Accessibility**
   - Alt text on all images
   - Semantic HTML structure
   - Focus states on interactive elements

5. **SEO** (for .astro pages)
   - Has `<title>` tag
   - Has meta description
   - Heading hierarchy is correct (h1 > h2 > h3)

## Output

List any issues found with file:line references.
If all checks pass, confirm ready to commit.
