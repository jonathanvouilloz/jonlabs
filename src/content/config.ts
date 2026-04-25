import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    category: z.enum(['tech', 'creatif', 'perso']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
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
    updatedDate: z.date().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
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

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Base
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),

    // Type d'entrée
    entryType: z.enum(['case-study', 'side-project']).default('case-study'),
    status: z.enum(['live', 'en-cours', 'archive']).optional(),

    // Client (optionnel pour side-projects)
    client: z.object({
      name: z.string(),
      sector: z.string(),
      website: z.string().url().optional(),
    }).optional(),

    // Projet
    project: z.object({
      duration: z.string(),           // "~80h" ou "3 mois"
      period: z.string(),             // "Juin - Sept 2025"
      measurementPeriod: z.string().optional(),
      platform: z.string().optional(), // "Framer"
      category: z.enum(['site-vitrine', 'e-commerce', 'seo', 'automatisation', 'application', 'side-project']),
    }),

    // Images
    heroImage: z.object({ url: z.string(), alt: z.string() }),

    // Résultats clés (optionnel pour side-projects)
    results: z.array(z.object({
      label: z.string(),
      value: z.string(),
      detail: z.string().optional(),
      icon: z.string().optional(),
    })).default([]),

    // Contexte (optionnel pour side-projects)
    context: z.object({
      clientDescription: z.string().optional(),
      challenge: z.string().optional(),
      whyThisProject: z.string().optional(),
    }).optional(),

    // Approche (optionnel pour side-projects)
    approach: z.array(z.object({
      phase: z.number(),
      title: z.string(),
      description: z.string(),
      tasks: z.array(z.string()).optional(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      }).optional(),
    })).default([]),

    // Ce qui a fonctionné
    successFactors: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),

    // Limites & apprentissages
    learnings: z.object({
      limitations: z.array(z.string()).optional(),
      insights: z.array(z.string()).optional(),
    }).optional(),

    // Témoignage
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string().optional(),
      avatar: z.string().optional(),
    }).optional(),

    // Images de résultats (graphs, screenshots)
    resultImages: z.array(z.object({
      url: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),

    // Liens
    tags: z.array(z.string()).default([]),
    liveUrl: z.string().url().optional(),
  }),
});

const devisCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    date: z.coerce.date(),
    password: z.string().optional(),
    status: z.enum(['draft', 'sent', 'accepted', 'rejected']).default('draft'),

    // Hero section
    hero: z.object({
      priority: z.string(),
      problem: z.string(),
      solution: z.string(),
    }).optional(),

    // Constat détaillé
    constat: z.string().optional(),

    // Offres
    offers: z.array(z.object({
      name: z.string(),
      price: z.string(),
      subtitle: z.string().optional(),
      features: z.array(z.string()),
      excluded: z.array(z.string()).optional(),
      recommended: z.boolean().default(false),
      pack: z.boolean().default(false),
      details: z.string().optional(),
    })).optional(),

    // Tableau comparatif personnalisé
    comparison: z.array(z.object({
      label: z.string(),
      starter: z.union([z.string(), z.boolean()]),
      premium: z.union([z.string(), z.boolean()]),
    })).optional(),

    // Timeline
    timeline: z.array(z.object({
      step: z.string(),
      description: z.string(),
    })).optional(),

    // Conseil
    advice: z.string().optional(),

    // Preuve/Résultats SEO
    proof: z.object({
      image: z.string(),
      title: z.string(),
      stats: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })),
      caption: z.string().optional(),
    }).optional(),

    // ROI
    roi: z.object({
      context: z.string(),
      calculation: z.string(),
      result: z.string(),
    }).optional(),

    // Disclaimer
    disclaimer: z.object({
      title: z.string(),
      content: z.string(),
    }).optional(),

    // Portfolio
    portfolio: z.array(z.object({
      name: z.string(),
      description: z.string(),
      url: z.string(),
    })).optional(),

    // Projet reporté
    postponed: z.object({
      title: z.string(),
      reason: z.string(),
      action: z.string().optional(),
      link: z.string().optional(),
    }).optional(),

    // Prochaines étapes
    nextSteps: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  linkedin: linkedinCollection,
  'jonvolio-blog': jonvolioBlogCollection,
  'jonvolio-projects': jonvolioProjectsCollection,
  devis: devisCollection,
  portfolio: portfolioCollection,
};
