// Données du comparatif /blog/comparatif-browser-agents-ia — source unique du tableau,
// du comparateur et de la matrice. Vérifiées sur la doc officielle de chaque éditeur.
export const VERIFIED_AT = '16.11.2026';

export type Category = 'moteur' | 'automatisation' | 'recherche';
export type Status = 'oui' | 'part' | 'non' | 'nv';

export const CATEGORY_LABEL: Record<Category, string> = {
  moteur: 'Moteur léger',
  automatisation: 'Automatisation',
  recherche: 'Recherche et extraction',
};

export const STATUS_LABEL: Record<Status, string> = {
  oui: 'Oui',
  part: 'Partiel',
  non: 'Non',
  nv: 'Non vérifié',
};

export interface Tool {
  id: string;
  name: string;
  url: string;
  category: Category;
  note: number; // adéquation à l'usage principal, jugement éditorial
  role: string;
  license: string;
  openSource: boolean;
  selfHost: 'Oui' | 'Partiel' | 'Non';
  free: string; // ce qui est gratuit
  hasFree: boolean;
  price: string; // première offre payante + unité
  integrations: string[]; // API, SDK, CLI, MCP, CDP
  languages: string[]; // Python, JS/TS, Go, CLI
  resources: string;
  usage: string;
  limit: string;
}

export const tools: Tool[] = [
  { id: 'obscura', name: 'Obscura', url: 'https://github.com/h4ckf0r0day/obscura', category: 'moteur', note: 4,
    role: 'Navigateur headless en Rust', license: 'Apache-2.0', openSource: true, selfHost: 'Oui',
    free: 'Gratuit (open source)', hasFree: true, price: 'Cloud annoncé, sans prix publié',
    integrations: ['CLI', 'CDP', 'MCP'], languages: ['CLI', 'JS/TS', 'Python'],
    resources: '~30 Mo de RAM (éditeur)', usage: 'Scraping léger sur VPS', limit: 'Compatibilité web partielle' },
  { id: 'kitesurf', name: 'Kitesurf', url: 'https://github.com/cloudflare/kitesurf', category: 'moteur', note: 3,
    role: 'Moteur expérimental sur Cloudflare Workers', license: 'Apache-2.0', openSource: true, selfHost: 'Partiel',
    free: 'Gratuit en bêta (Browser Run)', hasFree: true, price: 'Workers Paid, dès 5 $/mois',
    integrations: ['CDP'], languages: ['JS/TS'],
    resources: '39 à 58 Mio par tâche (Cloudflare)', usage: 'Captures et HTML sans serveur', limit: 'Expérimental, aucune authentification' },
  { id: 'lightpanda', name: 'Lightpanda', url: 'https://github.com/lightpanda-io/browser', category: 'moteur', note: 4,
    role: 'Navigateur headless en Zig', license: 'AGPL-3.0', openSource: true, selfHost: 'Oui',
    free: 'Open source + 10 h/mois en cloud', hasFree: true, price: '19 $/mois (300 h), puis 0,08 $/h',
    integrations: ['CLI', 'CDP', 'MCP', 'API'], languages: ['CLI', 'JS/TS', 'Python'],
    resources: '123 Mo pour 100 pages (éditeur)', usage: 'Crawl de pages JavaScript', limit: 'AGPL, captures en rendu texte' },
  { id: 'agent-browser', name: 'agent-browser', url: 'https://github.com/vercel-labs/agent-browser', category: 'automatisation', note: 5,
    role: 'CLI de navigation pour agents', license: 'Apache-2.0', openSource: true, selfHost: 'Oui',
    free: 'Gratuit', hasFree: true, price: 'Aucun',
    integrations: ['CLI', 'MCP', 'CDP'], languages: ['CLI'],
    resources: 'Celles du moteur choisi', usage: 'Claude Code, Codex, Hermes', limit: 'Chaque étape passe par ton LLM' },
  { id: 'browser-use', name: 'Browser Use', url: 'https://github.com/browser-use/browser-use', category: 'automatisation', note: 4,
    role: 'Agent web autonome', license: 'MIT', openSource: true, selfHost: 'Oui',
    free: 'Bibliothèque gratuite + 1 $ offert', hasFree: true, price: '0,06 $/h de navigateur + modèle',
    integrations: ['SDK', 'CLI', 'MCP', 'API', 'CDP'], languages: ['Python', 'CLI'],
    resources: 'Chrome + tokens', usage: 'Tâches web variables', limit: 'Moins prévisible qu’un script' },
  { id: 'stagehand', name: 'Stagehand', url: 'https://github.com/browserbase/stagehand', category: 'automatisation', note: 4,
    role: 'SDK hybride code et IA', license: 'MIT', openSource: true, selfHost: 'Oui',
    free: 'SDK gratuit + 1 h/mois Browserbase', hasFree: true, price: 'Browserbase dès 20 $/mois (100 h)',
    integrations: ['SDK', 'CLI', 'MCP', 'API'], languages: ['JS/TS', 'Python', 'Go', 'CLI'],
    resources: 'Chrome + un appel LLM par primitive', usage: 'Workflows métier répétitifs', limit: 'Il faut écrire du code' },
  { id: 'steel', name: 'Steel', url: 'https://github.com/steel-dev/steel-browser', category: 'automatisation', note: 4,
    role: 'API de sessions navigateur', license: 'Apache-2.0', openSource: true, selfHost: 'Oui',
    free: 'Open source + 30 $ offerts', hasFree: true, price: '0,10 $/h de navigateur',
    integrations: ['API', 'SDK', 'CDP', 'MCP'], languages: ['JS/TS', 'Python'],
    resources: 'Un Chrome par session', usage: 'Parc de navigateurs partagé', limit: 'Bêta publique' },
  { id: 'skyvern', name: 'Skyvern', url: 'https://github.com/Skyvern-AI/skyvern', category: 'automatisation', note: 3,
    role: 'Workflows web par LLM et vision', license: 'AGPL-3.0 (hors anti-bot)', openSource: true, selfHost: 'Oui',
    free: 'Open source, essai cloud 14 jours', hasFree: true, price: '29 $/mois (30 000 crédits)',
    integrations: ['API', 'SDK', 'MCP'], languages: ['Python', 'JS/TS'],
    resources: 'Chrome + base de données + vision', usage: 'Formulaires et portails avec 2FA', limit: 'Anti-bot réservé au cloud' },
  { id: 'tavily', name: 'Tavily', url: 'https://www.tavily.com', category: 'recherche', note: 5,
    role: 'API de recherche pour agents', license: 'Propriétaire (SDK MIT)', openSource: false, selfHost: 'Non',
    free: '1 000 crédits/mois', hasFree: true, price: '0,008 $/crédit',
    integrations: ['API', 'SDK', 'MCP'], languages: ['Python', 'JS/TS'],
    resources: 'Aucune (API)', usage: 'Infos récentes', limit: 'Ne navigue pas' },
  { id: 'firecrawl', name: 'Firecrawl', url: 'https://github.com/firecrawl/firecrawl', category: 'recherche', note: 4,
    role: 'Extraction et crawl managés', license: 'AGPL-3.0', openSource: true, selfHost: 'Partiel',
    free: '1 000 crédits/mois', hasFree: true, price: '19 $/mois (5 000 crédits)',
    integrations: ['API', 'SDK', 'CLI', 'MCP'], languages: ['Python', 'JS/TS', 'Go', 'CLI'],
    resources: 'Aucune en cloud', usage: 'Extraire sans serveur', limit: 'Version self-hosted réduite' },
  { id: 'crawl4ai', name: 'Crawl4AI', url: 'https://github.com/unclecode/crawl4ai', category: 'recherche', note: 5,
    role: 'Extraction et crawl self-hosted', license: 'Apache-2.0', openSource: true, selfHost: 'Oui',
    free: 'Open source + 1 000 crédits/mois', hasFree: true, price: '10 $/mois (10 000 crédits)',
    integrations: ['API', 'SDK', 'CLI', 'MCP', 'CDP'], languages: ['Python', 'CLI'],
    resources: 'Chromium (Playwright)', usage: 'Scraping chez toi', limit: 'Tu maintiens le serveur' },
];

const ids = tools.map((t) => t.id);
// Ordre des valeurs : celui de `tools`.
function row(label: string, s: string): { label: string; values: Record<string, Status> } {
  const map: Record<string, Status> = { O: 'oui', P: 'part', N: 'non', '?': 'nv' };
  const vals = s.split(' ');
  if (vals.length !== ids.length) throw new Error(`Matrice « ${label} » : ${vals.length} valeurs`);
  return { label, values: Object.fromEntries(ids.map((id, i) => [id, map[vals[i]]])) };
}

// O = oui, P = partiel, N = non, ? = non vérifié
// Colonnes : obscura kitesurf lightpanda agent-browser browser-use stagehand steel skyvern tavily firecrawl crawl4ai
export const features = [
  row('Recherche web', 'P ? P N P P P O O O P'),
  row('Lecture d’une URL', 'O O O O O O O O O O O'),
  row('HTML, Markdown, JSON', 'O O O P O O P O P O O'),
  row('Exécution JavaScript', 'O P O O O O O O P O O'),
  row('Clic, saisie, formulaires', 'O P O O O O O O N P O'),
  row('Login, cookies, sessions', 'O N O O O O O O N P O'),
  row('Captures et PDF', 'O O P O P P O O N P O'),
  row('Onglets', 'O P O O O O O O N ? P'),
  row('Playwright / Puppeteer', 'O O O N O N O O N P O'),
  row('MCP', 'O P O O O O O O O O O'),
  row('CDP', 'O O O O O O O O N P O'),
  row('Proxies', 'O ? O O P O O O N O O'),
  row('Exécution parallèle', 'O O O O O O O O O O O'),
  row('CAPTCHA, anti-bot', 'P N P P P P P P ? P P'),
  row('Reprise sur erreur', 'P P P P P P P O P P O'),
  row('Logs et debug', 'O O O O O O O O P O O'),
  row('Docker', 'O N O ? O P O O N O O'),
  row('Déploiement VPS', 'O N O O O O O O N P O'),
  row('API hébergée', 'P P O P O O O O O O O'),
];
