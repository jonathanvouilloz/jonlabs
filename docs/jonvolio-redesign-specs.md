# Redesign jonvolio.com — Specs

**Version:** 1.0  
**Date:** Janvier 2025  
**Objectif:** Aligner le site perso EN avec le personal brand X "I build things I want to exist"

---

## 🎯 Direction Créative

### Positionnement

```
AVANT: "I build things on the internet" (générique, corporate-lite)
APRÈS: "building things i want to exist" (personnel, assumé, indie)
```

### Ton & Vibe

| Aspect | Direction |
|--------|-----------|
| **Ton** | Décontracté, direct, dry humor |
| **Formalité** | Lowercase vibes (comme les tweets) |
| **Humour** | Self-deprecating, "0$ MRR and proud" |
| **Énergie** | Builder qui s'amuse, pas startup grind |

### Ce qu'on veut communiquer

1. Je build des trucs parce que je veux qu'ils existent
2. J'ai un objectif concret (24 apps en 2026)
3. Je m'en fous du MRR (pour l'instant)
4. Je partage le process publiquement

---

## 🏠 Homepage — Nouvelle Structure

### Layout Global

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  @jonvolio                          Projects  Blog  Inspirations│
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│            ┌──────┐                                             │
│            │ FOTO │  hey, i'm jon.                              │
│            └──────┘                                             │
│                      building things i want to exist.           │
│                      based in geneva. currently in thailand.    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  2026 CHALLENGE                                                 │
│  ═══════════════════════════════════════════════════════════   │
│                                                                 │
│  ship 24 apps this year. 2 per month minimum.                  │
│  doesn't matter if they make money. just ship.                 │
│                                                                 │
│  ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2/24          │
│                                                                 │
│  jan  ██ ██ ░░ ░░                                              │
│  feb  ░░ ░░ ░░ ░░                                              │
│  mar  ░░ ░░ ░░ ░░                                              │
│  ...                                                            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  LATEST SHIPS                                                   │
│  ───────────────────────────────────────────────────────────   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ > live    KIDOU                                    Jan  │   │
│  │           track your projects in terminal aesthetic     │   │
│  │           SvelteKit · Neon · Polar                      │   │
│  │                                          see project →  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ > live    NOKO                                     Jan  │   │
│  │           linktree but faster and with qr codes         │   │
│  │           SvelteKit · Turso                             │   │
│  │                                          see project →  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ > wip     GLANA                                    Jan  │   │
│  │           capture inspiration, plan content             │   │
│  │           Next.js · PostgreSQL                          │   │
│  │                                          see project →  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│                                        see all projects →      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CURRENT STATUS                                                 │
│  ───────────────────────────────────────────────────────────   │
│                                                                 │
│  📍 location      chiang mai, thailand (until feb)             │
│  💰 mrr           $0 (and that's fine)                         │
│  🔥 streak        building daily for 12 days                   │
│  📦 shipped       2 apps in 2026                               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  WHAT I'M INTO                                                  │
│  ───────────────────────────────────────────────────────────   │
│                                                                 │
│  → PWAs over native apps (fight me)                            │
│  → vibe coding with Claude Code                                │
│  → shipping fast, iterating faster                             │
│  → design that doesn't look like a dev made it                 │
│  → board games, badminton, photography                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ELSEWHERE                                                      │
│  ───────────────────────────────────────────────────────────   │
│                                                                 │
│  x.com/jonvolio        → daily brain dumps                     │
│  github.com/jonvolio   → the code                              │
│  jonlabs.ch            → my swiss freelance thing (in french)  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📝 Copy Détaillé

### Hero Section

**Option A — Minimal**
```
hey, i'm jon.

building things i want to exist.
based in geneva. currently in thailand.
```

**Option B — Avec contexte**
```
hey, i'm jon.

developer and indie hacker. i build things i want to exist — 
mostly apps nobody asked for. currently at $0 MRR and having fun.

based in geneva, switzerland.
```

**Option C — Statement**
```
i'm jon vouilloz.

i build things i want to exist.
2+ projects per month. PWA activist.
$0 MRR and proud.
```

**Recommandation:** Option A pour la homepage (clean), Option B/C pour une page /about si besoin.

---

### 2026 Challenge Section

```
2026 CHALLENGE

ship 24 apps this year.
2 per month minimum.
doesn't matter if they make money.
just ship.

████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  2/24
```

**Tracker visuel — Option grille annuelle:**
```
     jan    feb    mar    apr    may    jun
     ██ ██  ░░ ░░  ░░ ░░  ░░ ░░  ░░ ░░  ░░ ░░
     
     jul    aug    sep    oct    nov    dec
     ░░ ░░  ░░ ░░  ░░ ░░  ░░ ░░  ░░ ░░  ░░ ░░
```

**Légende:**
- `██` = shipped
- `░░` = not yet

---

### Current Status Section

**Style dashboard/stats:**
```
CURRENT STATUS

📍 location      chiang mai, thailand
💰 mrr           $0
🔥 streak        12 days building
📦 shipped       2 apps in 2026
☕ fuel          mass-delegating to claude code
```

**Alternative sans emoji (plus terminal):**
```
> status

location:    chiang mai, thailand
mrr:         $0 (and counting... down? no wait)
streak:      12 days
shipped:     2/24 for 2026
mood:        having fun
```

---

### "What I'm Into" Section

```
WHAT I'M INTO

→ PWAs over native apps (fight me)
→ vibe coding with Claude Code
→ shipping fast, iterating faster
→ design that doesn't look like a dev made it
→ making the internet weirder, one app at a time
```

**Alternative plus concise:**
```
BELIEFS

PWAs > native apps.
shipping > perfecting.
fun > profit (for now).
```

---

### Elsewhere/Links Section

```
ELSEWHERE

x        @jonvolio — daily builds and brain dumps
github   jonvolio — the actual code
jon labs my swiss freelance thing (in french)
```

---

## 🎨 Design Tokens

### Couleurs

```css
:root {
  /* Base - Light mode */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;      /* sections alternées */
  --bg-card: #ffffff;
  
  /* Text */
  --text-primary: #111827;       /* titres, corps */
  --text-secondary: #6b7280;     /* descriptions, meta */
  --text-muted: #9ca3af;         /* hints, placeholders */
  
  /* Accent */
  --accent: #059669;             /* emerald-600, pour "live" et liens */
  --accent-hover: #047857;
  
  /* Status */
  --status-live: #059669;        /* vert */
  --status-wip: #f59e0b;         /* amber */
  --status-shipped: #059669;
  
  /* Tracker */
  --tracker-filled: #059669;     /* shipped */
  --tracker-empty: #e5e7eb;      /* not yet */
  
  /* Border */
  --border: #e5e7eb;
  --border-hover: #d1d5db;
}
```

### Typographie

```css
:root {
  /* Font families */
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Sizes */
  --text-xs: 0.75rem;    /* 12px - meta, tags */
  --text-sm: 0.875rem;   /* 14px - descriptions */
  --text-base: 1rem;     /* 16px - body */
  --text-lg: 1.125rem;   /* 18px - lead text */
  --text-xl: 1.25rem;    /* 20px - section titles */
  --text-2xl: 1.5rem;    /* 24px - page titles */
  --text-3xl: 1.875rem;  /* 30px - hero name */
}
```

### Spacing

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
}
```

---

## 🧩 Composants

### Project Card

```html
<article class="project-card">
  <div class="project-status">
    <span class="status-badge status-live">> live</span>
    <span class="project-date">Jan</span>
  </div>
  
  <h3 class="project-name">KIDOU</h3>
  <p class="project-description">
    track your projects in terminal aesthetic
  </p>
  
  <div class="project-footer">
    <div class="project-stack">
      <span class="tech-tag">SvelteKit</span>
      <span class="tech-tag">Neon</span>
      <span class="tech-tag">Polar</span>
    </div>
    <a href="/projects/kidou" class="project-link">see project →</a>
  </div>
</article>
```

**Styles:**
```css
.project-card {
  padding: var(--space-6);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: border-color 0.2s;
}

.project-card:hover {
  border-color: var(--border-hover);
}

.status-badge {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: lowercase;
}

.status-live { color: var(--status-live); }
.status-wip { color: var(--status-wip); }

.project-name {
  font-family: var(--font-mono);
  font-size: var(--text-lg);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tech-tag {
  font-size: var(--text-xs);
  color: var(--text-muted);
  padding: 2px 6px;
  background: var(--bg-secondary);
  border-radius: 4px;
}
```

### Tracker Grid

```html
<div class="tracker">
  <div class="tracker-header">
    <h2>2026 CHALLENGE</h2>
    <span class="tracker-count">2/24</span>
  </div>
  
  <p class="tracker-description">
    ship 24 apps this year. doesn't matter if they make money. just ship.
  </p>
  
  <div class="tracker-progress">
    <div class="progress-bar">
      <div class="progress-fill" style="width: 8.33%"></div>
    </div>
  </div>
  
  <div class="tracker-grid">
    <div class="tracker-month">
      <span class="month-label">jan</span>
      <div class="month-slots">
        <div class="slot filled" title="Kidou"></div>
        <div class="slot filled" title="Noko"></div>
      </div>
    </div>
    <div class="tracker-month">
      <span class="month-label">feb</span>
      <div class="month-slots">
        <div class="slot empty"></div>
        <div class="slot empty"></div>
      </div>
    </div>
    <!-- ... autres mois -->
  </div>
</div>
```

**Styles:**
```css
.tracker-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-4);
}

.month-slots {
  display: flex;
  gap: var(--space-2);
}

.slot {
  width: 24px;
  height: 24px;
  border-radius: 4px;
}

.slot.filled {
  background: var(--tracker-filled);
}

.slot.empty {
  background: var(--tracker-empty);
}

.slot.filled:hover {
  cursor: pointer;
  transform: scale(1.1);
}
```

### Status Dashboard

```html
<div class="status-grid">
  <div class="status-item">
    <span class="status-label">location</span>
    <span class="status-value">chiang mai, thailand</span>
  </div>
  <div class="status-item">
    <span class="status-label">mrr</span>
    <span class="status-value">$0 <span class="status-note">(and that's fine)</span></span>
  </div>
  <div class="status-item">
    <span class="status-label">streak</span>
    <span class="status-value">12 days building</span>
  </div>
  <div class="status-item">
    <span class="status-label">shipped</span>
    <span class="status-value">2 apps in 2026</span>
  </div>
</div>
```

---

## 📄 Pages Secondaires

### /projects (existante, minor tweaks)

**Changements:**
- Ajouter le tracker en haut (comme actuellement)
- Cards avec le nouveau design
- Filtres: `all` | `live` | `wip` | `archived`

### /blog (existante, minor tweaks)

**Changements:**
- Sous-titre: "dev logs, experiments, and thoughts on building."
- Style des articles inchangé (déjà clean)

### /inspirations (existante, garder tel quel)

Déjà bien, montre la personnalité.

### /about (nouvelle, optionnelle)

Si besoin d'un espace plus long pour raconter l'histoire :

```
ABOUT

i'm jonathan vouilloz, but most people call me jon.

by day, i help small businesses in switzerland with web stuff 
through jon labs. by night (and weekends, and random tuesday 
afternoons), i build side projects.

my current obsession: shipping 24 apps in 2026. not because 
i think they'll all succeed — most won't. but because building 
is the point. the process is the reward.

i believe in:
→ PWAs over native apps
→ shipping over perfecting  
→ having fun over chasing MRR
→ building things that should exist, even if nobody asked

when i'm not coding, you'll find me playing badminton, 
taking photos, or losing at board games.

currently based in geneva, switzerland.
currently typing from chiang mai, thailand.
```

---

## 📁 Structure des Fichiers (Astro)

```
src/
├── components/
│   ├── Header.astro           # Navigation
│   ├── Hero.astro             # Hero section
│   ├── Tracker.astro          # 24 apps challenge
│   ├── ProjectCard.astro      # Carte projet
│   ├── ProjectList.astro      # Liste des projets
│   ├── StatusDashboard.astro  # Current status
│   ├── Beliefs.astro          # "What I'm into"
│   ├── Elsewhere.astro        # Links externes
│   └── Footer.astro           # Footer
│
├── layouts/
│   └── BaseLayout.astro       # Layout principal
│
├── pages/
│   ├── index.astro            # Homepage
│   ├── projects/
│   │   ├── index.astro        # Liste projets
│   │   └── [slug].astro       # Page projet
│   ├── blog/
│   │   ├── index.astro        # Liste articles
│   │   └── [slug].astro       # Article
│   ├── inspirations.astro     # Page inspirations
│   └── about.astro            # (optionnel)
│
├── content/
│   ├── projects/              # Markdown des projets
│   └── blog/                  # Markdown des articles
│
└── styles/
    ├── global.css             # Variables, reset
    └── components.css         # Styles composants
```

---

## ✅ Checklist Implémentation

### Phase 1: Homepage (2-3h)
- [ ] Nouveau Hero avec tagline
- [ ] Tracker 24 apps (composant dédié)
- [ ] Section "Latest Ships" (3 projets)
- [ ] Section "Current Status"
- [ ] Section "What I'm Into"
- [ ] Section "Elsewhere"

### Phase 2: Composants (1-2h)
- [ ] Nouveau design ProjectCard
- [ ] Tracker grid component
- [ ] Status dashboard component

### Phase 3: Polish (1h)
- [ ] Responsive mobile
- [ ] Hover states
- [ ] Animations subtiles
- [ ] Dark mode toggle (optionnel, V2)

### Phase 4: Contenu (30min)
- [ ] Mettre à jour les textes
- [ ] Vérifier tous les projets
- [ ] Ajouter les projets manquants

---

## 🚫 Ce qu'on NE fait PAS

- Pas de dark mode pour l'instant (light = plus visible, tu l'as dit)
- Pas d'animations complexes
- Pas de refonte des pages Projects/Blog/Inspirations (juste minor tweaks)
- Pas de page /about pour le MVP (la homepage suffit)

---

## 📝 Notes

### Cohérence X ↔ Site

| Élément | X | Site |
|---------|---|------|
| Tagline | "building things i want to exist" | ✓ même |
| Ton | lowercase, décontracté | ✓ même |
| Tracker | mentionné dans bio | ✓ mis en avant |
| MRR joke | "0$ MRR and having fun" | ✓ dans status |

### Lien avec Jon Labs FR

Le site mentionne Jon Labs dans "Elsewhere" mais ne mélange pas les deux identités. C'est la même personne, deux facettes :
- **jonvolio.com** = indie hacker, side projects, EN
- **jonlabs.ch** = freelance pro, clients suisses, FR
