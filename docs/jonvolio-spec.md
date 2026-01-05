# jonvolio — English Side of Jon Labs

## Overview

**URL Base:** `jonlabs.ch/jonvolio/`

**Concept:** A parallel universe within Jon Labs — same domain, different vibe. While Jon Labs serves the Swiss market with professional services in French, jonvolio is the indie hacker playground in English.

**Target Audience:** Twitter/X community, indie hackers, vibe coders, build-in-public enthusiasts

**Language:** English only

---

## Philosophy

| Jon Labs (FR) | jonvolio (EN) |
|---------------|---------------|
| Professional consultant | Indie maker |
| Service-oriented | Project-oriented |
| Local Swiss market | Global internet |
| "I help your business" | "I build cool stuff" |
| Polished, established | Raw, authentic |

**Core principle:** No bullshit. Clean. Efficient. The site itself should feel like well-written code — minimal, functional, no unnecessary decoration.

---

## URL Structure

```
jonlabs.ch/jonvolio/              → Home (About/Resume)
jonlabs.ch/jonvolio/blog/         → Blog posts (EN)
jonlabs.ch/jonvolio/projects/     → Side projects showcase
jonlabs.ch/jonvolio/inspirations/ → Books, films, passions, influences
```

---

## Pages Specification

### 1. Home — `/jonvolio/`

**Purpose:** First impression. Who is jonvolio? What does he build?

**Layout:** Single-page resume style, scannable in 30 seconds.

**Sections (top to bottom):**

#### Hero
- Name: **Jon Vouilloz** (or just **jonvolio**)
- One-liner tagline: `"I build things on the internet."`
- Location: `🇨🇭 Geneva, Switzerland`
- Twitter handle: `@jonvolio` (linked)
- Optional: current status badge ("🟢 Building in public" or "🔨 Working on [project]")

#### Latest Tweets (5 max)
- Embedded or custom-styled feed
- Options for implementation:
  - **Twitter Embed Widget** — Easy but limited styling
  - **Twitter API v2** — Requires auth, more control
  - **Syndication API** — `https://syndication.twitter.com/srv/timeline-profile/screen-name/jonvolio` (no auth needed, returns HTML)
  - **Manual curation** — Update manually with best tweets (low maintenance, high control)
- Fallback: Link to Twitter profile if embed fails

#### Now
- What I'm currently working on (2-3 bullet points max)
- Updated manually or via a simple JSON/MD file
- Example:
  ```
  → Building a Linktree alternative for my clients
  → Writing about AI tools for small businesses
  → Exploring Chiang Mai ☀️
  ```

#### Quick Links
- → [Projects](/jonvolio/projects)
- → [Blog](/jonvolio/blog)
- → [Inspirations](/jonvolio/inspirations)
- → [Jon Labs (FR)](/)] — "My consulting side"

#### Footer
- Minimal: Twitter link, email (optional), back to Jon Labs

---

### 2. Blog — `/jonvolio/blog/`

**Purpose:** Long-form content in English. Build in public, dev logs, thoughts on indie hacking, tech, life.

**Content types:**
- Build logs (dev diaries)
- Tutorials / How I built X
- Thoughts on tools, AI, workflows
- Personal reflections (optional)

**Layout:**
- Simple list of posts (title + date + short excerpt)
- No categories needed initially — just chronological
- Minimal design: monospace vibes, no fancy cards

**Post template:**
```
/jonvolio/blog/[slug]/

# Title
*Published: January 6, 2025*

[Content in markdown]

---
← Back to blog
```

**Style notes:**
- No hero images required (optional)
- Code blocks should look good (syntax highlighting)
- Readable line width (~65 characters)

---

### 3. Projects — `/jonvolio/projects/`

**Purpose:** Showcase side projects, experiments, shipped products.

**Layout:** Grid or list of project cards

**Each project card:**
```
[Screenshot/Logo]
Project Name
One-line description
[Stack badges: Svelte, Supabase, etc.]
[Status badge: Live / WIP / Archived]
→ View project
→ Read the story (link to blog post if exists)
```

**Project detail page (optional):** `/jonvolio/projects/[slug]/`
- Can be a simple expanded view or link directly to external URL
- If blog post exists about the project, link to it

**Projects to include:**
- Noko (Linktree alternative) — if public
- Swiss-Review (Google reviews via WhatsApp)
- Isla Plomo (board game app)
- Personal tools (Glana, project tracker, etc.)
- Client projects (anonymized or with permission)

---

### 4. Inspirations — `/jonvolio/inspirations/`

**Purpose:** Show personality. What shapes jonvolio's thinking?

**Sections:**

#### Books
- List of influential books (title + author + optional one-liner why)
- Example:
  ```
  **The Almanack of Naval Ravikant** — Eric Jorgenson
  "Wealth and happiness, distilled."
  ```

#### Films / TV
- Favorite films or series that influenced you
- Can be casual: "Films I rewatch every year"

#### Music (optional)
- Spotify playlist embed or just a list
- "What I code to"

#### People / Creators
- Indie hackers, thinkers, creators you follow
- Twitter handles or links

#### Tools
- "My stack" — tools you actually use daily
- Can overlap with tech stack but more personal (Obsidian, specific apps, etc.)

#### Passions
- Badminton, board games, photography, crypto
- Brief mention, shows you're human

**Layout:** Can be a single long page with sections, or tabbed. Keep it scannable.

---

## Design Direction

### Style: "Dev Terminal Meets Clean Web"

**Keywords:** Minimal, monospace, functional, fast, no fluff

**References:**
- [lineas.io](https://lineas.io) — Ultra minimal
- [paco.me](https://paco.me) — Clean personal site
- [leerob.io](https://leerob.io) — Dev-focused, simple
- [brianlovin.com](https://brianlovin.com) — Well-organized personal site

### Colors

| Element | Value | Notes |
|---------|-------|-------|
| Background | `#0D1117` or `#FAFAFA` | Dark or light mode toggle? |
| Text | `#E6EDF3` (dark) / `#1F2328` (light) | High contrast |
| Accent | `#58A6FF` | Links, highlights (GitHub blue) |
| Muted | `#8B949E` | Secondary text, dates |
| Code blocks | `#161B22` | Slightly different from bg |

**Option:** Start with light mode to match Jon Labs, add dark mode toggle later.

### Typography

| Element | Font | Notes |
|---------|------|-------|
| Headings | System sans-serif or `Inter` | Clean, modern |
| Body | System sans-serif | Fast loading |
| Code/Mono | `JetBrains Mono` or `Fira Code` | For code blocks & accents |

**Alternative:** Go full monospace for everything (more "dev" vibe but less readable for long text).

### Components

**Buttons:** Ghost style, minimal borders
```css
.btn {
  border: 1px solid currentColor;
  padding: 0.5rem 1rem;
  background: transparent;
  transition: background 0.2s;
}
.btn:hover {
  background: rgba(255,255,255,0.1);
}
```

**Cards:** No shadows, subtle borders or just spacing
```css
.card {
  border: 1px solid #30363d;
  padding: 1rem;
}
```

**Links:** Underline on hover, accent color

**Badges/Tags:**
```css
.badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  background: #21262d;
  color: #8b949e;
}
```

---

## Technical Implementation (Astro)

### File Structure

```
src/
├── pages/
│   └── jonvolio/
│       ├── index.astro          # Home/About
│       ├── blog/
│       │   ├── index.astro      # Blog list
│       │   └── [...slug].astro  # Blog post
│       ├── projects/
│       │   └── index.astro      # Projects grid
│       └── inspirations/
│           └── index.astro      # Inspirations page
├── content/
│   └── jonvolio/
│       ├── blog/                # EN blog posts (.md)
│       └── projects/            # Project entries (.md)
├── layouts/
│   └── JonvolioLayout.astro     # Separate layout from main site
└── components/
    └── jonvolio/
        ├── Nav.astro
        ├── Footer.astro
        ├── TwitterFeed.astro
        └── ProjectCard.astro
```

### i18n Consideration

Add `hreflang` tags in `<head>`:
```html
<!-- On jonvolio pages -->
<link rel="alternate" hreflang="en" href="https://jonlabs.ch/jonvolio/" />
<link rel="alternate" hreflang="fr" href="https://jonlabs.ch/" />
<link rel="alternate" hreflang="x-default" href="https://jonlabs.ch/" />
```

### Layout Separation

jonvolio should have its own layout to:
- Use different styling (cleaner, more minimal)
- Have its own navigation
- Feel like a distinct "side" of the site

```astro
// JonvolioLayout.astro
---
import '../styles/jonvolio.css';
---
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>{title} | jonvolio</title>
    <!-- jonvolio-specific styles -->
  </head>
  <body class="jonvolio">
    <nav>
      <!-- jonvolio nav -->
    </nav>
    <main>
      <slot />
    </main>
    <footer>
      <!-- jonvolio footer -->
    </footer>
  </body>
</html>
```

---

## Navigation / "Side Switch"

**Persistent element:** A small toggle or link to switch between worlds.

**Option A — Corner badge:**
```
[🇫🇷 Jon Labs] ←→ [🇬🇧 jonvolio]
```

**Option B — Minimal text link:**
```
Currently viewing: jonvolio (EN)
→ Switch to Jon Labs (FR)
```

**Option C — Footer only:**
Just mention the other side in the footer, keep main nav clean.

**Recommendation:** Option B in the header, subtle but clear.

---

## Content Priorities (MVP)

### Must have for launch:
- [ ] Home page with basic info + Twitter link
- [ ] 1-2 blog posts (can repurpose/translate existing content)
- [ ] Projects page with 3-5 projects
- [ ] Basic styling (can be very minimal)

### Nice to have:
- [ ] Twitter feed embed
- [ ] Inspirations page
- [ ] Dark/light mode toggle
- [ ] "Now" section with current status

### Later:
- [ ] Newsletter signup
- [ ] RSS feed
- [ ] Search

---

## Open Questions

1. **Twitter feed:** Embedded widget or custom implementation? (Widget is easier, custom is cleaner)

2. **Dark mode:** Ship with light mode first (consistent with Jon Labs) or go dark from day one?

3. **Blog content:** Will you write new content in EN or translate existing FR articles?

4. **Projects:** Which projects are ready to showcase publicly?

5. **Domain consideration:** Any interest in `jonvolio.com` later for easier sharing on Twitter? (Can redirect to `jonlabs.ch/jonvolio/`)

---

## Summary

jonvolio is your indie hacker identity — raw, authentic, building in public. The design should feel like reading someone's well-organized GitHub profile or a clean dev blog. No corporate polish, no marketing speak. Just: here's who I am, here's what I build, here's what inspires me.

Ship fast. Iterate. Let Twitter drive traffic, let the work speak for itself.
