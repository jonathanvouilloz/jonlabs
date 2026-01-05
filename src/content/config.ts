import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    category: z.enum(['tech', 'creatif', 'perso']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

const labCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(155),
    date: z.coerce.date(),
    status: z.enum(['live', 'en-cours', 'archive']),
    category: z.enum(['app', 'jeux', 'photo', 'experiment']),
    tags: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    thumbnail: z.string(),
    featured: z.boolean().default(false),
  }),
});

// LinkedIn drafts (internal use, no frontmatter required)
const linkedinCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

// jonvolio collections (English indie hacker section)
const jonvolioBlogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const jonvolioProjectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(155),
    date: z.coerce.date(),
    status: z.enum(['live', 'wip', 'archived']),
    stack: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    thumbnail: z.string().optional(),
    blogPost: z.string().optional(), // slug of related blog post
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  lab: labCollection,
  linkedin: linkedinCollection,
  'jonvolio-blog': jonvolioBlogCollection,
  'jonvolio-projects': jonvolioProjectsCollection,
};
