// jonvolio - Static data for the indie hacker section

export const jonvolio = {
  name: 'jon vouilloz',
  handle: '@jonvolio',
  tagline: 'building things i want to exist.',
  location: 'geneva, switzerland',
  currentLocation: 'chiang mai, thailand',
  twitter: 'https://x.com/jonvolio',
  github: 'https://github.com/jonvolio',

  // Status dashboard
  status: {
    mrr: 0,
    streak: 12,
    shipped: 2,
  },

  // Beliefs / What I'm into
  beliefs: [
    'PWAs over native apps (fight me)',
    'vibe coding with Claude Code',
    'shipping fast, iterating faster',
    'design that doesn\'t look like a dev made it',
    'board games, badminton, photography',
  ],

  // External links
  elsewhere: [
    { name: 'x.com/jonvolio', url: 'https://x.com/jonvolio', desc: 'daily brain dumps' },
    { name: 'github.com/jonvolio', url: 'https://github.com/jonvolio', desc: 'the code' },
    { name: 'jonlabs.ch', url: 'https://jonlabs.ch', desc: 'my swiss freelance thing (in french)' },
  ],
};

export const inspirations = {
  books: [
    {
      title: 'The Almanack of Naval Ravikant',
      author: 'Eric Jorgenson',
      quote: 'Wealth and happiness, distilled.',
    },
    {
      title: 'Make',
      author: 'Pieter Levels',
      quote: 'The indie hacker bible.',
    },
    {
      title: 'Zero to One',
      author: 'Peter Thiel',
      quote: 'On building the future.',
    },
  ],

  films: [
    { title: 'The Social Network', note: 'Startup energy' },
    { title: 'Her', note: 'AI and human connection' },
    { title: 'Chef', note: 'Passion and craft' },
  ],

  people: [
    { name: 'Pieter Levels', handle: '@levelsio', note: 'Nomad List, RemoteOK' },
    { name: 'Marc Lou', handle: '@marc_louvion', note: 'ShipFast' },
    { name: 'Tony Dinh', handle: '@tdinh_me', note: 'TypingMind, DevUtils' },
  ],

  tools: [
    { name: 'Cursor', category: 'Editor', note: 'AI-powered IDE' },
    { name: 'Astro', category: 'Framework', note: 'Fast static sites' },
    { name: 'Supabase', category: 'Backend', note: 'Postgres + Auth' },
    { name: 'Vercel', category: 'Hosting', note: 'Deploy in seconds' },
    { name: 'Figma', category: 'Design', note: 'UI/UX' },
    { name: 'Obsidian', category: 'Notes', note: 'Second brain' },
  ],

  passions: [
    'Badminton',
    'Board games',
    'Photography',
    'Crypto',
    'Travel',
  ],
};
