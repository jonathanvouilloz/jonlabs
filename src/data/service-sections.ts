// Sous-services de la page /services (sortis de l'ancien scenarios.ts, retiré le 2026-11-17).

export interface SubService {
  id: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  link?: string; // Lien vers une page dédiée (optionnel)
}

export interface ServiceSection {
  id: string;
  title: string;
  accroche: string;
  subServices: SubService[];
  ctaText: string;
}

export const serviceSections: ServiceSection[] = [
  {
    id: 'site-web',
    title: 'Développement de site web',
    accroche: `Un site rapide, clair et trouvable sur Google. Dès CHF 850, devis sur demande.`,
    subServices: [
      {
        id: 'creation-site',
        title: 'Création de site',
        description: 'Un site vitrine qui explique ce que tu fais et donne envie de te contacter.',
        features: [
          'Design sur mesure, lisible sur mobile',
          'Optimisé pour Google dès la mise en ligne',
          'Tu modifies tes textes toi-même'
        ],
        ctaText: 'En savoir plus',
        link: '/services/creation-site-web'
      },
      {
        id: 'developpeur-webflow',
        title: 'Développeur Webflow',
        description: 'Création ou reprise de site Webflow, que ton équipe gère en autonomie.',
        features: [
          'Site Webflow propre et rapide, dès CHF 950',
          'Formation à l\'éditeur incluse',
          'Reprise d\'un site Webflow existant'
        ],
        ctaText: 'En savoir plus',
        link: '/services/creation-site-web'
      }
    ],
    ctaText: 'Parler de mon site'
  },
  {
    id: 'app-mobile',
    title: 'Application mobile',
    accroche: `Une app iPhone et Android pour tes clients ou ton équipe. Sur devis.`,
    subServices: [
      {
        id: 'application-mobile',
        title: 'Application mobile',
        description: 'De l\'idée à la publication sur l\'App Store et Google Play.',
        features: [
          'On commence par l\'essentiel, on ajoute ensuite',
          'Un seul interlocuteur, du début à la fin',
          'Publication sur les stores comprise'
        ],
        ctaText: 'En savoir plus',
        link: '/services/developpement-application-mobile'
      }
    ],
    ctaText: 'Parler de mon app'
  },
  {
    id: 'ia',
    title: 'IA pour votre entreprise',
    accroche: `Moins de tâches répétitives, plus de temps pour le vrai travail. Agents IA dès CHF 1'500, formation sur devis.`,
    subServices: [
      {
        id: 'agent-hermes',
        title: 'Agent IA Hermès',
        description: 'Un assistant IA branché sur tes outils : e-mails, relances, documents.',
        features: [
          'Dès CHF 1\'500',
          'Hébergé en Suisse chez Infomaniak',
          'Tu valides avant chaque envoi'
        ],
        ctaText: 'En savoir plus',
        link: '/hermes'
      },
      {
        id: 'consultant-ia',
        title: 'Automatisation & intégration',
        description: 'On relie tes outils entre eux et on automatise ce qui te fait perdre du temps.',
        features: [
          'On part de ta tâche la plus pénible',
          'Tes outils actuels, pas de changement forcé',
          'Sur devis'
        ],
        ctaText: 'En savoir plus',
        link: '/consultant-ia'
      },
      {
        id: 'formation-ia',
        title: 'Formation IA',
        description: 'Pour une équipe ou en individuel : utiliser l\'IA au quotidien, sans risque.',
        features: [
          'Adaptée à ton métier',
          'Entreprise ou particulier',
          'Devis sur mesure'
        ],
        ctaText: 'En savoir plus',
        link: '/services/formation-ia-equipe'
      }
    ],
    ctaText: 'Parler de mon projet IA'
  }
];
