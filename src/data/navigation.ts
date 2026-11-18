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
        title: 'Construire',
        items: [
          { label: 'Agents IA sur mesure', href: '/hermes', icon: 'ri-robot-2-line' },
          { label: 'Applications sur mesure', href: '/services/application-sur-mesure', icon: 'ri-window-line' },
          { label: 'Application mobile', href: '/services/developpement-application-mobile', icon: 'ri-smartphone-line' },
        ],
      },
      {
        title: 'Automatiser',
        items: [
          { label: 'Automatisation de tâches', href: '/consultant-ia#automatisation', icon: 'ri-loop-left-line' },
          { label: 'Intégration d\'outils', href: '/consultant-ia#integration-outils', icon: 'ri-plug-line' },
          { label: 'Agent Hermès', href: '/hermes', icon: 'ri-message-3-line' },
        ],
      },
      {
        title: 'Accompagner',
        items: [
          { label: 'Cadrage projet IA', href: '/consultant-ia', icon: 'ri-brain-line' },
          { label: 'Formation IA équipe', href: '/services/formation-ia-equipe', icon: 'ri-presentation-line' },
        ],
      },
      // Dernière colonne = barre du bas du méga-menu (Nav.astro) ; lue aussi par services.astro.
      {
        title: 'Par métier',
        items: [
          { label: 'IA pour fiduciaires', href: '/metiers/ia-fiduciaire', icon: 'ri-calculator-line' },
          { label: 'IA pour agences immobilières', href: '/metiers/ia-agence-immobiliere', icon: 'ri-building-line' },
        ],
      },
    ],
    spotlight: {
      icon: 'ri-brain-line',
      title: 'Cadrer votre projet IA',
      description: 'Conseil et intégration d\'agents IA pour PME romandes. Basé à Genève, prix en CHF.',
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
    label: 'À propos',
    href: '/about',
    type: 'flat',
  },
];

export const ctaContact: NavItem = {
  label: 'Démarrer mon projet',
  href: '/contact',
};
