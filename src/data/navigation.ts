export type NavType = 'flat' | 'mega';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  external?: boolean;
  badge?: 'new' | 'featured';
}

export interface NavColumn {
  title: string;
  items: NavItem[];
}

export interface Spotlight {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface NavSection {
  label: string;
  href: string;
  type: NavType;
  columns?: NavColumn[];
  spotlight?: Spotlight;
  footer?: NavItem;
}

export const mainNav: NavSection[] = [
  {
    label: 'Solutions',
    href: '/services',
    type: 'mega',
    columns: [
      {
        title: 'Web & apps',
        items: [
          { label: 'Création de site', href: '/services/creation-site-web', icon: 'ri-layout-line' },
          { label: 'Refonte de site', href: '/services/refonte-site-web', icon: 'ri-refresh-line' },
          { label: 'Développement MVP', href: '/services/developpement-mvp', icon: 'ri-rocket-line' },
          { label: 'Outils sur mesure', href: '/services/outils-sur-mesure', icon: 'ri-tools-line' },
        ],
      },
      {
        title: 'Automatisation',
        items: [
          { label: 'Automatisation processus', href: '/services/automatisation', icon: 'ri-loop-left-line' },
          { label: "Intégration d'outils", href: '/services/integration-outils', icon: 'ri-link' },
        ],
      },
      {
        title: 'Acquisition',
        items: [
          { label: 'Référencement local', href: '/services/referencement-local', icon: 'ri-map-pin-line' },
          { label: 'Gestion fiche Google', href: '/services/gestion-fiche-google', icon: 'ri-store-2-line' },
          { label: "Validation d'idée", href: '/services/validation-idee', icon: 'ri-test-tube-line' },
        ],
      },
      {
        title: 'Zones',
        items: [
          { label: 'Annemasse', href: '/developpement-web/annemasse', icon: 'ri-map-pin-2-line' },
          { label: 'Gaillard', href: '/developpement-web/gaillard', icon: 'ri-map-pin-2-line' },
          { label: 'Ville-la-Grand', href: '/developpement-web/ville-la-grand', icon: 'ri-map-pin-2-line' },
          { label: 'Saint-Julien', href: '/developpement-web/saint-julien-en-genevois', icon: 'ri-map-pin-2-line' },
          { label: 'La Roche-sur-Foron', href: '/developpement-web/la-roche-sur-foron', icon: 'ri-map-pin-2-line' },
        ],
      },
    ],
    spotlight: {
      icon: 'ri-star-fill',
      title: 'Tu cherches un freelance basé à Genève ?',
      description: 'Page dédiée freelance Genève — positionnement transactionnel',
      href: '/developpeur-web-freelance-geneve',
    },
  },
  {
    label: 'Tarifs',
    href: '/tarifs',
    type: 'flat',
  },
  {
    label: 'Réalisations',
    href: '/portfolio',
    type: 'flat',
  },
  {
    label: 'Ressources',
    href: '/blog',
    type: 'mega',
    columns: [
      {
        title: 'À la une',
        items: [
          { label: 'Apparaître dans les IA 2026', href: '/blog/geo-seo-ia-2026', icon: 'ri-fire-fill', badge: 'featured' },
          { label: 'Prix site web Suisse 2026', href: '/blog/prix-site-web-suisse-2026', icon: 'ri-price-tag-3-line' },
          { label: '15 signes site web dort', href: '/blog/15-signes-site-web-dort', icon: 'ri-pulse-line' },
        ],
      },
      {
        title: 'Catégories',
        items: [
          { label: 'IA & GEO', href: '/blog/tag/geo', icon: 'ri-sparkling-2-line' },
          { label: 'Prix & tarifs', href: '/blog/tag/prix', icon: 'ri-coins-line' },
          { label: 'Local & Romandie', href: '/blog/tag/suisse-romande', icon: 'ri-map-pin-line' },
          { label: 'Automatisation', href: '/blog/tag/automatisation', icon: 'ri-loop-left-line' },
          { label: 'SEO', href: '/blog/tag/seo', icon: 'ri-search-line' },
        ],
      },
      {
        title: 'Outils gratuits',
        items: [
          { label: 'Checklist 15 signes site dort', href: '/outils/checklist-15-signes-site-dort', icon: 'ri-checkbox-line' },
          { label: 'Checklist commerce Google', href: '/outils/checklist-commerce-google', icon: 'ri-checkbox-line' },
          { label: 'Calculateur coût site dormant', href: '/blog/cout-site-web-dormant-calculateur', icon: 'ri-calculator-line' },
        ],
      },
    ],
    spotlight: {
      icon: 'ri-article-line',
      title: 'Voir tous les articles',
      description: 'Guides, retours d\'expérience et analyses sur le web et l\'automatisation',
      href: '/blog',
    },
    footer: {
      label: 'Indie hacker (EN)',
      href: '/jonvolio',
      icon: 'ri-global-line',
      description: 'jonvolio — building things I want to exist',
    },
  },
  {
    label: 'À propos',
    href: '/about',
    type: 'flat',
  },
];

export const ctaContact: NavItem = {
  label: 'Contact',
  href: '/contact',
};
