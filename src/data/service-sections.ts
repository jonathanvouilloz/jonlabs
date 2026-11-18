// Sous-services de la page /services (sortis de l'ancien scenarios.ts, retiré le 2026-11-17).

export interface SubService {
  id: string;
  title: string;
  description: string;
  features: string[];
  /** ancre du lien vers la page dédiée (texte = mot-clé de la page cible) */
  ctaText?: string;
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
    accroche: `Un site rapide, clair et trouvable sur Google.`,
    subServices: [
      {
        id: 'creation-site',
        title: 'Création de site',
        description: 'Un site vitrine qui explique ce que vous faites et donne envie de vous contacter.',
        features: [
          'Design sur mesure, lisible sur mobile',
          'Optimisé pour Google dès la mise en ligne',
          'Vous modifiez vos textes vous-même'
        ],
        ctaText: 'Création de site web',
        link: '/services/creation-site-web'
      },
      {
        id: 'developpeur-webflow',
        title: 'Développeur Webflow',
        description: 'Création ou reprise de site Webflow, que votre équipe gère en autonomie.',
        features: [
          'Site Webflow propre et rapide',
          'Formation à l\'éditeur incluse',
          'Reprise d\'un site Webflow existant'
        ]
      }
    ],
    ctaText: 'Parler de mon site'
  },
  {
    id: 'app-mobile',
    title: 'Application mobile',
    accroche: `Une app iPhone et Android pour vos clients ou votre équipe.`,
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
        ctaText: "Développement d'application mobile",
        link: '/services/developpement-application-mobile'
      },
      {
        id: 'application-sur-mesure',
        title: 'Application sur mesure',
        description: 'Espace client, outil de gestion, tableau de bord ou réservation : un logiciel métier qui suit votre façon de travailler.',
        features: [
          'On commence petit, on grandit ensuite',
          'Branchée sur vos outils actuels'
        ],
        ctaText: 'Application sur mesure pour PME',
        link: '/services/application-sur-mesure'
      }
    ],
    ctaText: 'Parler de mon app'
  },
  {
    id: 'ia',
    title: 'IA pour votre entreprise',
    accroche: `Moins de tâches répétitives, plus de temps pour le vrai travail.`,
    subServices: [
      {
        id: 'agent-hermes',
        title: 'Agent IA Hermès',
        description: 'Un assistant IA branché sur vos outils : e-mails, relances, documents.',
        features: [
          'Hébergé en Suisse chez Infomaniak',
          'Vous validez avant chaque envoi'
        ],
        ctaText: 'Agent IA Hermès',
        link: '/hermes'
      },
      {
        id: 'consultant-ia',
        title: 'Automatisation & intégration',
        description: 'On relie vos outils entre eux et on automatise ce qui vous fait perdre du temps.',
        features: [
          'On part de votre tâche la plus pénible',
          'Vos outils actuels, pas de changement forcé'
        ],
        ctaText: 'Consultant IA en Suisse romande',
        link: '/consultant-ia'
      },
      {
        id: 'formation-ia',
        title: 'Formation IA',
        description: 'Pour une équipe ou en individuel : utiliser l\'IA au quotidien, sans risque.',
        features: [
          'Adaptée à votre métier',
          'Entreprise ou particulier'
        ],
        ctaText: 'Formation IA pour équipes',
        link: '/services/formation-ia-equipe'
      }
    ],
    ctaText: 'Parler de mon projet IA'
  }
];
