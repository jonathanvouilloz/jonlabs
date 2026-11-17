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
    label: 'Sites & SEO',
    href: '/services',
    type: 'mega',
    columns: [
      {
        title: 'Sites web',
        items: [
          { label: 'Création de site', href: '/services/creation-site-web', icon: 'ri-layout-line' },
        ],
      },
      {
        title: 'Tarifs',
        items: [
          { label: 'Tarifs', href: '/tarifs', icon: 'ri-price-tag-3-line' },
        ],
      },
      {
        title: 'Applications',
        items: [
          { label: 'Application mobile', href: '/services/developpement-application-mobile', icon: 'ri-smartphone-line' },
        ],
      },
    ],
    spotlight: {
      icon: 'ri-star-fill',
      title: 'Tu cherches un freelance basé à Genève ?',
      description: 'Développeur freelance basé à Genève, disponible pour votre projet.',
      href: '/developpeur-web-freelance-geneve',
    },
  },
  {
    label: 'IA & Automatisation',
    href: '/consultant-ia',
    type: 'mega',
    columns: [
      {
        title: 'Conseil & agents',
        items: [
          { label: 'Cadrage projet IA', href: '/consultant-ia', icon: 'ri-brain-line' },
          { label: 'Agents IA sur-mesure', href: '/consultant-ia#agents-sur-mesure', icon: 'ri-robot-2-line' },
          { label: 'Agent Hermès', href: '/hermes', icon: 'ri-message-3-line' },
        ],
      },
      {
        title: 'Automatiser',
        items: [
          { label: 'Automatisation de tâches', href: '/consultant-ia#automatisation', icon: 'ri-loop-left-line' },
          { label: 'Intégration d\'outils', href: '/consultant-ia#integration-outils', icon: 'ri-plug-line' },
          { label: 'Formation IA équipe', href: '/services/formation-ia-equipe', icon: 'ri-presentation-line' },
        ],
      },
      {
        title: 'Par métier',
        items: [
          { label: 'IA pour fiduciaires', href: '/metiers/ia-fiduciaire', icon: 'ri-calculator-line' },
          { label: 'IA pour agences immobilières', href: '/metiers/ia-agence-immobiliere', icon: 'ri-building-line' },
        ],
      },
      {
        title: 'Guides IA',
        items: [
          { label: 'Mettre en place l\'IA en entreprise', href: '/guides/mettre-en-place-ia-entreprise-guide', icon: 'ri-compass-3-line', badge: 'featured' },
          { label: 'Automatisation PME : guide complet', href: '/blog/automatisation-pme-suisse-guide-complet', icon: 'ri-loop-left-line' },
        ],
      },
    ],
    spotlight: {
      icon: 'ri-brain-line',
      title: 'Cadrer votre projet IA',
      description: 'Conseil et intégration d\'agents IA pour PME romandes — basé à Genève, prix CHF',
      href: '/consultant-ia',
    },
  },
  {
    label: 'Réalisations',
    href: '/portfolio',
    type: 'flat',
  },
  {
    label: 'Tarifs',
    href: '/tarifs',
    type: 'flat',
  },
  {
    label: 'Articles',
    href: '/blog',
    type: 'mega',
    columns: [
      {
        title: 'À la une',
        items: [
          { label: 'Apparaître dans les IA 2026', href: '/blog/geo-seo-ia', icon: 'ri-fire-fill', badge: 'featured' },
          { label: 'Prix site web Suisse 2026', href: '/blog/prix-site-web-suisse-2026', icon: 'ri-price-tag-3-line' },
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
    ],
    spotlight: {
      icon: 'ri-article-line',
      title: 'Voir tous les articles',
      description: 'Guides, retours d\'expérience et analyses sur le web et l\'automatisation',
      href: '/blog',
    },
  },
  {
    label: 'À propos',
    href: '/about',
    type: 'flat',
  },
];

export const ctaContact: NavItem = {
  label: 'Démarrer mon projet',
  href: '/contact',
};
