/**
 * Portfolio centralisé - Source unique pour tous les projets
 * Utilisé par : /portfolio, /devis, et autres pages
 */

export interface PortfolioProject {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[]; // Pour matcher avec les besoins du devis
  category: 'site-vitrine' | 'e-commerce' | 'application' | 'seo' | 'automatisation';
  year: number;
  featured?: boolean;
  image?: string; // Pour la page portfolio
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'barber-concept',
    name: 'Barber Concept',
    description: 'Chaîne de barbiers à Genève',
    url: 'https://barberconcept.ch',
    tags: ['site-vitrine', 'local', 'geneve', 'commerce', 'reservation'],
    category: 'site-vitrine',
    year: 2024,
    featured: true,
  },
  {
    id: 'lecureux-conseil',
    name: 'Lecureux Conseil',
    description: 'Juriste spécialisé lois des restaurateurs',
    url: 'https://lecureux-conseil.ch',
    tags: ['site-vitrine', 'seo', 'consultant', 'juridique', 'b2b'],
    category: 'site-vitrine',
    year: 2024,
    featured: true,
  },
  {
    id: 'ugo-mighali',
    name: 'Ugo Mighali',
    description: 'Portfolio coutelier professionnel',
    url: 'https://ugomighali.ch',
    tags: ['portfolio', 'artisan', 'creative', 'e-commerce'],
    category: 'site-vitrine',
    year: 2024,
    featured: true,
  },
  // Ajouter tes nouveaux projets ici :
  // {
  //   id: 'nom-projet',
  //   name: 'Nom du Client',
  //   description: 'Description courte',
  //   url: 'https://exemple.ch',
  //   tags: ['tag1', 'tag2'],
  //   category: 'site-vitrine',
  //   year: 2025,
  // },
];

/**
 * Récupère les projets par tags (pour matching intelligent)
 */
export function getProjectsByTags(tags: string[], limit = 3): PortfolioProject[] {
  return portfolioProjects
    .map(project => ({
      project,
      score: project.tags.filter(t => tags.includes(t)).length
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ project }) => project);
}

/**
 * Récupère les projets featured
 */
export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter(p => p.featured);
}

/**
 * Récupère tous les projets par catégorie
 */
export function getProjectsByCategory(category: PortfolioProject['category']): PortfolioProject[] {
  return portfolioProjects.filter(p => p.category === category);
}
