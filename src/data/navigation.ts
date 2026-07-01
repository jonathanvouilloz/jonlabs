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
          { label: 'Développeur Webflow', href: '/services/developpeur-webflow', icon: 'ri-pencil-ruler-2-line' },
          { label: 'Freelance WordPress', href: '/services/developpeur-wordpress', icon: 'ri-wordpress-line' },
          { label: 'Application mobile', href: '/services/developpement-application-mobile', icon: 'ri-smartphone-line' },
          { label: 'Développement MVP', href: '/services/developpement-mvp', icon: 'ri-rocket-line' },
          { label: 'Outils sur mesure', href: '/services/outils-sur-mesure', icon: 'ri-tools-line' },
        ],
      },
      {
        title: 'SEO local',
        items: [
          { label: 'Référencement local', href: '/services/referencement-local', icon: 'ri-map-pin-line' },
          { label: 'Gestion fiche Google', href: '/services/gestion-fiche-google', icon: 'ri-store-2-line' },
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
    label: 'Consultant IA',
    href: '/consultant-ia',
    type: 'mega',
    columns: [
      {
        title: 'Agents IA & automatisation',
        items: [
          { label: 'Agents IA sur-mesure', href: '/consultant-ia#agents-sur-mesure', icon: 'ri-robot-2-line' },
          { label: 'Agent Hermès', href: '/hermes', icon: 'ri-message-3-line' },
          { label: 'Automatisation de tâches', href: '/services/automatisation', icon: 'ri-loop-left-line' },
          { label: 'Intégration d\'outils', href: '/services/integration-outils', icon: 'ri-plug-line' },
          { label: 'Formation IA équipe', href: '/services/formation-ia-equipe', icon: 'ri-presentation-line' },
        ],
      },
      {
        title: 'Métiers',
        items: [
          { label: 'IA pour fiduciaires', href: '/metiers/ia-fiduciaire', icon: 'ri-calculator-line' },
          { label: 'IA pour agences immobilières', href: '/metiers/ia-agence-immobiliere', icon: 'ri-building-line' },
        ],
      },
      {
        title: 'Régions',
        items: [
          { label: 'Consultant IA Genève', href: '/consultant-ia/geneve', icon: 'ri-map-pin-2-line' },
          { label: 'Consultant IA Lausanne', href: '/consultant-ia/lausanne', icon: 'ri-map-pin-2-line' },
        ],
      },
      {
        title: 'À lire',
        items: [
          { label: 'Agent IA en entreprise : cas d\'usage', href: '/blog/agent-ia-entreprise-cas-usage', icon: 'ri-lightbulb-line' },
          { label: 'Prix d\'un agent IA en Suisse', href: '/blog/prix-agent-ia-automatisation-suisse', icon: 'ri-coins-line' },
          { label: 'Automatisation PME : guide complet', href: '/blog/automatisation-pme-suisse-guide-complet', icon: 'ri-book-open-line' },
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
          { label: 'Apparaître dans les IA 2026', href: '/blog/geo-seo-ia', icon: 'ri-fire-fill', badge: 'featured' },
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
          { label: 'Reddit Dashboard', href: '/outils/reddit-dashboard', icon: 'ri-reddit-line', badge: 'new' },
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
