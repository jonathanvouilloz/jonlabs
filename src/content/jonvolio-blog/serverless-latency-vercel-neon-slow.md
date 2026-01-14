---
title: "I vibe-coded a slow app: fixing Vercel + Neon latency the hard way"
description: "AI wrote my code perfectly. But my app was still 800ms slow. The fix had nothing to do with code—it was physics."
pubDate: 2026-01-14
image:
  url: "/jonvolio/images-blog/serverless-latency-tcp-http.webp"
  alt: "Latency comparison diagram showing TCP driver (slow) vs HTTP driver (fast) for serverless"
tags: ["serverless", "vercel", "neon", "latency", "vibe-coding"]
draft: false
---

My first project of 2026, **[kidou.dev](https://kidou.dev)**, was supposed to be a quick win. Modern stack (Vercel + Neon), AI-assisted code, clean architecture. I'd vibe-coded the whole thing in a weekend.

But once deployed, it felt sluggish. We're talking **500ms to 800ms per request**.

I spent hours debugging. Mass-optimized queries, added indexes, refactored logic. Barely any change.

Here's the thing about vibe coding in 2026: Cursor and Claude will write you *valid* code. *Efficient* SQL. But they won't tell you that your database is in Singapore while your server is in Washington. They assume a spherical cow in a vacuum.

**The problem wasn't my code. It was physics.**

If you're building with serverless (Vercel, Next.js, Neon/Supabase) and your app feels slow, stop optimizing your loops. Read this first.

---

## The symptom: invisible latency

You deploy your app. The database is on Neon (serverless Postgres). The frontend is on Vercel. But every request crawls. Cold starts feel eternal.

Your first instinct is to check your SQL queries. Wrong instinct.

I measured it: my queries were taking **15ms** to execute on the DB, but the request was taking **800ms** to return. Where did the other 785ms go?

They were lost in two invisible killers: **Geography** and **Handshakes**.

---

## Invisible killer #1: the world tour

Nobody tells you this when you start with Vercel: **the default region for Serverless Functions is Washington D.C. (iad1).**

I'm based in Thailand. My Neon database was in Singapore (`sin1`)—makes sense for my location, right?

But because I didn't explicitly configure Vercel, here's what happened for **every single request**:

1. **Me (Thailand)** → Request → **Vercel Function (Washington D.C.)**
2. **Vercel Function** → Query → **Neon DB (Singapore)**
3. **Neon DB** → Data → **Vercel Function (Washington D.C.)**
4. **Vercel Function** → Response → **Me (Thailand)**

![The default region trap: a world tour for every click](/jonvolio/images-blog/serverless-latency-world-tour.webp)

That's a double intercontinental roundtrip. Just the speed of light through fiber optics accounts for **300-400ms** of latency. Not slow code. Just distance.

### The fix: colocate your compute

Move your backend logic right next to your database. One file.

Create a `vercel.json` at the root of your project:

```json
{
  "regions": ["sin1"]
}
```

Now your function runs in Singapore. The distance between your code and your database is near-zero.

**Result:** ~500ms network latency → ~20ms.

---

## Invisible killer #2: the TCP tax

In a traditional server setup (VPS), your app connects to Postgres once, keeps the connection open, and reuses it.

In serverless, functions are ephemeral. They spin up, run, and die. For every cold start, your app negotiates a fresh connection to the database.

Standard Postgres drivers use TCP. A full TCP connection involves heavy handshakes (TCP + TLS + Postgres auth). It adds a consistent **100-300ms tax** before your SQL is even sent.

![Latency comparison: TCP vs HTTP driver](/jonvolio/images-blog/serverless-latency-tcp-http.webp)

### The fix: switch to HTTP

Neon provides a specialized driver (`@neondatabase/serverless`) that communicates via HTTP/WebSockets. It uses a proxy that maintains warm connections to Postgres. Your function just does a quick HTTP handshake—significantly faster for one-shot executions.

**Before (standard driver):**

```javascript
import postgres from 'postgres';
const client = postgres(DATABASE_URL); // Heavy TCP start
```

**After (serverless-optimized):**

```javascript
import { neon } from '@neondatabase/serverless';
const sql = neon(DATABASE_URL); // Lightweight HTTP
```

This simple switch shaved off another **150ms** from cold starts.

---

## The result

Two infrastructure changes. Zero application logic touched.

![Before vs After: 80% latency reduction with zero code changes](/jonvolio/images-blog/serverless-latency-before-after.webp)

- **Fixed geography:** `vercel.json` (iad1 → sin1)
- **Fixed protocol:** TCP → HTTP driver

The app became snappy instantly.

---

## The meta lesson for vibe coders

This is the uncomfortable truth about AI-assisted development in 2026.

I used Claude to write this app. The AI wrote valid code. Efficient SQL. Clean architecture. But it had no idea about the physical topology of my infrastructure. It couldn't see that I was sending data on a world tour for every click.

Vibe coding is fast. It's genuinely powerful. But it abstracts away the **physics** of the internet.

You can generate the code. You still have to own the architecture.

---

## The serverless speed checklist

Before you rewrite your code, check the physics:

1. **Where is your DB?** (Physical region)
2. **Where is your function?** (Check Vercel defaults—it's usually US East)
3. **Are they neighbors?** (Colocation is king)
4. **Are you using a serverless-ready driver?** (HTTP > TCP for ephemeral functions)

Peace. ✌️
