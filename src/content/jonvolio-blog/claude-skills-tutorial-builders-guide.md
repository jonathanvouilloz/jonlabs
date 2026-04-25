---
title: "Claude Skills: Builder's Guide with 11 Real Examples (2026)"
description: "Build Claude Skills that automate your workflows. 11 real examples, complete code, and honest takes from an indie hacker shipping in 2026."
pubDate: 2026-01-26
updatedDate: 2026-04-25
readingTime: 13
tags: ["claude", "skills", "ai-tools", "automation", "indie-hacker"]
draft: false
faqs:
  - question: "What are Claude Skills?"
    answer: "Claude Skills are folders containing a SKILL.md file with YAML frontmatter and markdown instructions. Claude loads them automatically when relevant, turning repeatable workflows like code reviews, post writing, or debugging into reusable procedural knowledge that survives across conversations."
  - question: "How are Skills different from MCP servers?"
    answer: "MCP connects Claude to external data (APIs, databases, tools). Skills teach Claude what to do with that data. They compose: an MCP server can fetch your GitHub issues, while a Skill encodes your specific review process (security checks, OWASP standards, output formatting) on top of that data."
  - question: "When should I use a Skill versus a Slash Command?"
    answer: "Use a Slash Command for one-off shortcuts you invoke explicitly with /command. Use a Skill when you want Claude to discover and apply procedural knowledge automatically based on context. Skills win on discovery and determinism; slash commands win on explicit, manual triggering."
  - question: "Can Skills build other Skills?"
    answer: "Yes. Anthropic ships a meta-skill called skill-creator that interviews you about your workflow, asks clarifying questions, and generates a ready-to-upload .skill ZIP file with the SKILL.md, reference files, and any scripts you need."
  - question: "What are the best Claude Skills for developers?"
    answer: "The most-shipped developer skills cover four phases: planning (software-architecture, feature-spec), coding (test-driven-development, artifacts-builder), quality (code-review, systematic-debugging), and shipping (git-commit, deploy-skill). Jesse Vincent's Superpowers library on GitHub has 33k+ stars and is a solid starting point."
  - question: "How long does it take to build a Skill?"
    answer: "A first usable Skill takes 30 to 60 minutes: write the description, draft instructions, test with real tasks, iterate. Spend 80% of that time on the description, since that is what determines whether Claude activates the skill at the right moment."
---

I've told Claude how to format my X posts maybe 47 times. Same instructions. Same style rules. Same "no emoji, all lowercase, end with a `>` punchline" pattern.

every. single. time.

Then I discovered Skills. Now Claude just *knows*. I type `xpost: [raw idea]` and get 7 variants in my exact voice. No prompting. No explaining. No repeating myself like a broken record.

That's the pitch. But Skills are way more than tweet formatters.

They're how you package your expertise into something Claude can actually use — across any conversation, any project, any context. Think of them as the difference between explaining your job to a new intern every Monday versus having a senior colleague who already knows your playbook.

This guide breaks down everything I've learned building Skills for my own workflows. Real code, real examples, honest takes on what works and what doesn't.

---

## TL;DR

- A Claude Skill is a folder with a single `SKILL.md` file: YAML frontmatter (name + description) plus markdown instructions Claude loads only when relevant.
- Skills differ from MCP and Slash Commands: MCP fetches data, Slash Commands are manual shortcuts, Skills teach Claude *how* to do something and activate automatically.
- Progressive disclosure keeps things cheap: Claude sees ~100 tokens of metadata per skill and only loads the full instructions (under 5k tokens) when it picks the skill.
- This article walks through 11 real examples — 9 dev workflows (code-review, systematic-debugging, git-commit, deploy-skill, subagent-driven-development...), the meta `skill-creator`, and my own `x-post-writer` with full SKILL.md code.
- Spend 80% of your effort on the description: it's the 200 characters that decide whether Claude activates your skill at the right moment. Start with one workflow you do 5+ times a week, ship a v1 in under an hour, iterate.

---

## What Are Claude Skills, Actually?

Let's skip the marketing fluff.

A Skill is a folder with instructions that Claude loads when relevant. At minimum, you need one file: `SKILL.md`. That's it.

```
my-skill/
└── SKILL.md
```

The file has two parts:

1. **YAML frontmatter** — metadata that tells Claude when to use the skill
2. **Markdown body** — instructions Claude follows when the skill activates

Here's the skeleton:

```markdown
---
name: my-skill-name
description: A clear description of what this skill does and when to use it
---

# My Skill Name

[Instructions go here]
```

The magic is in the description. Claude reads it to decide: "Should I use this for what the user just asked?" A vague description means your skill never activates. A precise one means Claude becomes psychic about when you need it.

> Simon Willison, the guy who co-created Django, put it this way: "Skills are conceptually extremely simple: a Markdown file telling the model how to do something. It's somewhat bewildering how much new capability this unlocks."

---

## Skills vs MCP vs Slash Commands: When to Use What

This confused me at first. Anthropic has like three different ways to extend Claude. Here's the mental model that finally clicked:

| Feature | What it does | Best for |
|---------|--------------|----------|
| **MCP** | Connects Claude to external data (APIs, databases, tools) | Getting information from somewhere |
| **Slash Commands** | Quick prompts you trigger manually with `/command` | One-off shortcuts you invoke explicitly |
| **Skills** | Procedural knowledge Claude loads automatically | Teaching Claude *how* to do something |

The key distinction: **MCP connects Claude to data. Skills teach Claude what to do with that data.**

You could have an MCP server that pulls your GitHub issues. But a Skill teaches Claude your specific review process — check for security issues first, use OWASP standards, format output with severity emojis.

They compose beautifully. MCP fetches the data. Skills process it your way.

### Token Efficiency

Here's a detail that matters for context-conscious builders:

Skills use "progressive disclosure" — a fancy term for lazy loading:

1. **Metadata only** (~100 tokens): Claude sees the name and description of every available skill
2. **Full instructions** (<5k tokens): Only loaded when Claude decides the skill is relevant
3. **Bundled resources**: Scripts execute without loading code into context at all

So you can have 20 skills installed without bloating every conversation. Claude only loads what it needs.

---

## Skills That Actually Ship: Developer Workflows

Let me show you what real developers are building. Not toy examples — actual workflows that save hours.

### Planning Phase

**software-architecture** — Takes your vague "I want to build X" and turns it into architecture docs. System components, data flow, technology recommendations. It's like having a senior architect on call.

**feature-spec** — Converts rough ideas into proper specifications. User stories, acceptance criteria, edge cases you forgot about.

### Coding Phase

**test-driven-development** — Enforces red/green TDD discipline. Write the test first. Watch it fail. Then implement. No shortcuts.

**artifacts-builder** — Consistent React/HTML artifact creation. Remembers your component patterns, your styling preferences, your state management approach.

### Quality Phase

**code-review** — Reviews PRs like a paranoid senior dev. Security (OWASP top 10), performance (N+1 queries, lazy loading), accessibility (WCAG AA). Outputs structured feedback with severity levels.

**systematic-debugging** — My favorite for stubborn bugs. Forces Claude through a root cause analysis instead of randomly changing code until something works.

### Shipping Phase

**git-commit** — Consistent commit messages following your conventions. Never write "fixed stuff" again.

**deploy-skill** — Your deployment checklist, codified. Pre-flight checks, environment variables, rollback procedures.

### Power User Territory

**subagent-driven-development** — This one's wild. Breaks complex tasks into smaller pieces, spins up separate Claude instances for each, then synthesizes results. It's agents all the way down.

---

## The Skill-Creator Meta-Skill: Skills That Build Skills

Here's where it gets recursive.

Anthropic built a Skill whose entire purpose is helping you build other Skills. It's called `skill-creator`, and it's legitimately useful.

### How It Works

1. Start a new chat: "I want to create a skill for [your workflow]"
2. Claude asks clarifying questions about your process
3. You explain like you're onboarding a new hire
4. Claude generates the entire skill structure — SKILL.md, reference files, scripts if needed
5. You get a `.skill` file (which is just a ZIP) ready to upload

The questions Claude asks are actually good:

- "Can you give examples of when you'd use this skill?"
- "What makes output good for this type of work?"
- "Are there common mistakes you want me to avoid?"

### Pro Tip

Don't just answer the questions. Upload examples of your actual work. Claude learns your style better from real artifacts than from descriptions.

If you're making a brand voice skill, upload 5 emails that nail the tone. Building a code review skill? Share 3 PRs with your feedback. The skill-creator uses these as training data.

---

## Building Your First Skill: Real Code

Let's build something practical. I'll show you my actual X post writer skill, then we'll break down why each part works.

### The Complete Skill

```markdown
---
name: x-post-writer
description: Generates X/Twitter posts and replies in Jonathan's signature indie hacker style. Triggers on "xpost" (new tweet, 7 variants) or "rpost" (reply to tweet, 3 variants). Translates FR→EN when needed. Style is concise, punchy, no emoji, no hashtags, all lowercase, with pop culture/tech refs and dry humor.
---

# X Post Writer

Transform raw ideas into polished X/Twitter content while preserving my authentic voice.

## Triggers

| Command | Use case | Output |
|---------|----------|--------|
| `xpost: [your text]` | New tweet | 7 variants |
| `rpost ([source tweet]) : [your reply]` | Reply to a tweet | 3 variants |

## Style Rules

### Language & Tone
- **Language**: Translate FR→EN if input is French. Output always in English.
- **Tone**: Indie hacker, builder, direct. No bullshit.
- **No emoji. No hashtags. Ever.**
- **Humor**: Dry, absurd analogies, pop culture/tech refs welcome.

### Formatting Rules
- **All lowercase**. No capital letters at the start of sentences. Ever.
- **Hook**: Max 10-12 words. One line. Grab attention instantly.
- **Body**: One thought per line. White space between sections.

### The Mandatory Closer
**Every single tweet must end with a `>` insight line.**

Format:
```
[tweet content]

> [final insight, punchline, or takeaway]
```

This is non-negotiable. It's the signature move. The `>` line is the mic drop.

## Variants for xpost

1. **Core** — Raw idea, cleaned up. Direct.
2. **Teacher** — Actionable how-to. Must be genuinely valuable.
3. **Hot Take** — Subjective, opinionated. Take a stance.
4. **Story** — Add context, the journey behind.
5. **Contrarian** — Flip the common take.
6. **One-liner** — Ultra-condensed punchline.
7. **Collaborative** — Invite others to share.
```

### What Makes This Work

**Specific triggers**: Claude knows exactly when to activate. "xpost:" and "rpost:" are unambiguous.

**Concrete style rules**: "All lowercase" is clearer than "casual tone". "No emoji ever" leaves zero room for interpretation.

**The signature element**: That `>` closer. It's weird, it's distinctive, and it makes every post identifiable as mine. Claude would never guess this without being told.

**Variant system**: Seven options means I always find one that fits. The skill does the creative heavy lifting; I just pick.

### Testing Your Skill

Two ways to verify it works:

1. **Explicit invocation**: Type the trigger directly. "xpost: just mass-delegated my coding to Claude Code"

2. **Natural language**: Ask something that matches the description. "Can you help me write some tweets about my new project?"

If Claude activates the skill, you'll see it in the thinking output: "Using x-post-writer skill..."

---

## Expert Insights: What the Power Users Say

I've been digging into what developers who've gone deep on Skills have learned. Here are the takes worth knowing:

<div class="expert-card">
  <div class="expert-header">
    <span class="expert-name">Simon Willison</span>
    <span class="expert-title">25+ years dev, Django co-creator</span>
  </div>
  <div class="expert-content">

> "The most significant difference between Skills and previous attempts at extending LLM capabilities (like MCP and ChatGPT Plugins) is that they require a code execution environment. It's a significant dependency, but it's staggering how much it enables."

> "It's somewhat bewildering how much new capability this unlocks."

  </div>
  <a class="expert-source" href="https://simonwillison.net/2025/Oct/16/claude-skills/">simonwillison.net →</a>
</div>

<div class="expert-card">
  <div class="expert-header">
    <span class="expert-name">Jesse Vincent</span>
    <span class="expert-title">@obra, creator of Superpowers (33k+ GitHub stars)</span>
  </div>
  <div class="expert-content">

> "Superpowers is a complete software development workflow for your coding agents. As soon as it sees that you're building something, it doesn't just jump into trying to write code. Instead, it steps back and asks you what you're really trying to do."

> "It's not uncommon for Claude to work autonomously for a couple hours at a time without deviating from the plan."

> "The persuasion principles from Robert Cialdini's *Influence* work on LLMs under stress. Time pressure makes Claude skip helpful resources, just like humans. Subagents avoid this by starting fresh each task."

  </div>
  <a class="expert-source" href="https://blog.fsck.com/2025/10/09/superpowers/">blog.fsck.com →</a>
</div>

<div class="expert-card">
  <div class="expert-header">
    <span class="expert-name">Nick Nisi</span>
    <span class="expert-title">Staff Engineer @ WorkOS, 16+ years dev</span>
  </div>
  <div class="expert-content">

> "Skills aren't about hiding context like subagents do. They aren't prompts you explicitly invoke like slash commands. Skills are about discovery and determinism. Claude figures out when to use them. And when it does, it can leverage scripts to generate consistent, predictable output."

> "The barrier to entry is absurdly low. You start with a markdown file. That's it. You experiment. You zip it. You send it to colleagues. They can try it, modify it, extract value immediately. No complex tooling. No hosting. No distribution problems."

  </div>
  <a class="expert-source" href="https://nicknisi.com/posts/claude-skills/">nicknisi.com →</a>
</div>

<div class="expert-card">
  <div class="expert-header">
    <span class="expert-name">Smerchek</span>
    <span class="expert-title">Business case study</span>
  </div>
  <div class="expert-content">

> "Skills streamline our management accounting and finance workflows. Claude processes multiple spreadsheets, catches critical anomalies, and generates reports using our procedures. What once took a day, we can now accomplish in an hour."

  </div>
  <a class="expert-source" href="https://claude.com/skills">claude.com/skills →</a>
</div>

---

## My Honest Take

I've been using Skills for a few months now. Here's what I actually think:

### What Works

**The description is everything**. Spend 80% of your effort on those 200 characters. A great description means the skill activates exactly when you need it. A mediocre one means you're always typing `/skill-name` manually.

**Simple skills > complex skills**. My best-performing skills are focused on one thing. The temptation is to build a mega-skill that handles all your content. Resist it. Claude composes multiple focused skills better than one bloated one.

**Scripts are underrated**. If your skill involves any data processing, write a Python script. Claude executes it without loading the code into context. Deterministic output every time.

### What's Tricky

**Testing is manual**. There's no "skill unit test" framework. You just... try it. Works? Great. Doesn't? Tweak the description, try again.

**Discovery can be flaky**. Sometimes Claude picks the wrong skill. Sometimes it doesn't activate when it should. Iteration helps, but it's not 100% reliable.

**The ecosystem is young**. The community is building fast (check awesome-claude-skills on GitHub), but we're still figuring out patterns. Best practices are emerging, not established.

### The Bigger Picture

The thing is... Skills represent a shift in how we work with AI.

Instead of treating Claude like a smart autocomplete you have to prompt perfectly every time, you're building a personalized toolkit. Your processes. Your standards. Your voice. Encoded once, applied forever.

The builders who invest in this now will have a significant advantage. Not because the technology is hard — it isn't. But because the effort compounds. Every skill you build makes the next project faster.

> distribution matters more than code quality. AI made building so accessible that markets are oversaturated, yet builders keep prioritizing development over validation. Skills flip this: build the workflow once, ship the outputs forever.

---

## Resources & Next Steps

### Official Documentation

- [How to create custom Skills](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills) — The official guide
- [Skills GitHub repository](https://github.com/anthropics/skills) — Anthropic's public skills, including the document editing ones
- [Claude Code Skills docs](https://code.claude.com/docs/en/skills) — For Claude Code users

### Community Resources

- [awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) — Curated list of skills and resources
- [obra/superpowers](https://github.com/obra/superpowers) — Jesse Vincent's battle-tested workflow library
- [Simon Willison's analysis](https://simonwillison.net/2025/Oct/16/claude-skills/) — Deep dive from someone who understands this stuff

### Start Here

1. **Pick one workflow** you do at least 5 times a week
2. **Write the SKILL.md** — description first, instructions second
3. **Test it** with real tasks, not toy examples
4. **Iterate** based on where Claude gets it wrong

Don't try to automate everything at once. One good skill that actually works beats 10 half-baked ones.

---

## Read in French

- [Apparaître sur Claude : guide GEO Brave Search (FR)](/blog/apparaitre-claude-2026) — French version of the AI visibility angle, focused on Brave Search and GEO for francophone audiences.

---

## Keep Building

I'm shipping apps and writing about the process. Skills are part of how I move fast without breaking everything (most of the time).

If you want more of this — real workflows, honest takes, occasional hot takes about building in public:

**→ Follow me on X: [@jonvolio](https://x.com/jonvolio)**

No fluff. No growth hacks. Just building.

> the best developers will be the best delegators.
