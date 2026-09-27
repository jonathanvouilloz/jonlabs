// Données des 6 scénarios pour la page Services
// Chaque scénario représente une problématique client avec une conversation Jon - Client

export interface Message {
  speaker: 'client' | 'jon';
  text: string;
}

export interface Scenario {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  pillar: 'web' | 'auto' | 'validation';
  scrollTo: string;
  color: string;
  messages: Message[];
}

export const scenarios: Scenario[] = [
  // Pilier 1: Web & Outils
  {
    id: 'website-old',
    emoji: '🎨',
    title: 'Site obsolète',
    subtitle: 'Design 2015, pas responsive',
    pillar: 'web',
    scrollTo: 'site-web',
    color: 'rgba(0, 217, 163,0.15)',
    messages: [
      { speaker: 'client', text: 'Mon site date de 2015, il est moche, pas responsive... mais refaire un site ça coûte une blinde non ?' },
      { speaker: 'jon', text: 'T\'as raison de te poser la question. Dépend de ce que tu veux. Site sur-mesure avec 50 pages et 200 animations ? Oui. Site propre qui convertit ? Non.' },
      { speaker: 'client', text: 'C\'est quoi la différence ?' },
      { speaker: 'jon', text: 'La plupart des sites ont 80% de contenu inutile. On garde l\'essentiel : qui t\'es, ce que tu fais, pourquoi te choisir, comment te contacter.' },
      { speaker: 'client', text: 'Mais j\'ai besoin d\'un portfolio, d\'un blog, de 15 pages services...' },
      { speaker: 'jon', text: 'Tu penses. En vrai, 90% de tes visiteurs vont sur 3 pages max. On lance avec ça, on itère après si vraiment besoin.' },
      { speaker: 'client', text: 'Ok mais ça va m\'apporter quoi concrètement ?' },
      { speaker: 'jon', text: 'Un site moderne et bien référencé, c\'est un commercial qui bosse 24/7. Les gens te trouvent sur Google, ils voient que t\'es pro, ils te contactent. Des prospects en automatique, sans démarcher.' },
      { speaker: 'client', text: 'Délai ?' },
      { speaker: 'jon', text: '3 semaines. Site moderne, rapide, responsive, optimisé pour Google. Tu fournis le contenu, je gère le reste.' },
      { speaker: 'client', text: 'Et si je veux ajouter des trucs après ?' },
      { speaker: 'jon', text: 'C\'est prévu dans l\'archi. Tu peux faire évoluer facilement. Mais on lance simple et efficace d\'abord.' }
    ]
  },
  {
    id: 'no-presence',
    emoji: '🌐',
    title: 'Pas de présence en ligne',
    subtitle: 'Tout passe par le bouche-à-oreille',
    pillar: 'web',
    scrollTo: 'site-web',
    color: 'rgba(0, 217, 163,0.15)',
    messages: [
      { speaker: 'client', text: 'Je n\'ai pas de site, tout passe par le bouche-à-oreille... mais est-ce que j\'en ai vraiment besoin ?' },
      { speaker: 'jon', text: 'Ça dépend. Tu veux rester dépendant de ton réseau ou que des gens te trouvent sans te connaître ?' },
      { speaker: 'client', text: 'Les réseaux sociaux suffisent non ?' },
      { speaker: 'jon', text: 'Pour exister, oui. Pour convertir, non. Un post LinkedIn disparaît en 48h. Un site, c\'est ta vitrine permanente qui bosse même quand tu dors.' },
      { speaker: 'client', text: 'Je saurais pas quoi mettre dessus...' },
      { speaker: 'jon', text: 'Personne ne sait au début. On commence par l\'essentiel : qui t\'es, ce que tu fais, comment te contacter. Le reste vient après.' },
      { speaker: 'client', text: 'C\'est vraiment utile si je fais déjà du bouche-à-oreille ?' },
      { speaker: 'jon', text: 'Le bouche-à-oreille c\'est bien, mais c\'est limité à ton réseau actuel. Un site bien référencé, c\'est des gens qui te trouvent sur Google sans te connaître. Surtout en local : quelqu\'un cherche "[ton métier] + Genève", tu apparais. Des prospects que t\'aurais jamais eus autrement.' },
      { speaker: 'client', text: 'Ça va me prendre du temps à gérer ?' },
      { speaker: 'jon', text: 'Zéro. Un site vitrine bien fait, tu n\'y touches plus pendant des mois. C\'est pas un blog à alimenter, c\'est une base solide.' },
      { speaker: 'client', text: 'Délai et budget ?' },
      { speaker: 'jon', text: '2-3 semaines, tarif adapté à ta structure. On fait simple, efficace, évolutif.' }
    ]
  },

  // Pilier 2: Automatisation
  {
    id: 'tools-sync',
    emoji: '🔗',
    title: 'Outils désynchronisés',
    subtitle: 'Notion, Sheets, CRM... rien ne se parle',
    pillar: 'auto',
    scrollTo: 'ia',
    color: 'rgba(0, 217, 163, 0.15)',
    messages: [
      { speaker: 'client', text: 'J\'ai Notion, Google Sheets, mon CRM, ma compta... rien ne se parle et je perds un temps fou.' },
      { speaker: 'jon', text: 'Classique. T\'as empilé des outils au fil du temps, chacun fait son job, mais ensemble c\'est le chaos.' },
      { speaker: 'client', text: 'Du coup faut tout changer ?' },
      { speaker: 'jon', text: 'Non. On garde tes outils, on les fait communiquer. Une info rentrée une fois, elle se propage partout automatiquement.' },
      { speaker: 'client', text: 'C\'est compliqué techniquement ?' },
      { speaker: 'jon', text: 'Pour toi, non. Je m\'occupe des connexions. Toi tu continues à bosser comme avant, sauf que maintenant ça synchronise tout seul.' },
      { speaker: 'client', text: 'Et si j\'ai besoin de tout voir au même endroit ?' },
      { speaker: 'jon', text: 'On peut aussi créer un tableau de bord sur-mesure qui centralise toutes tes données importantes. Une seule interface, plus besoin de jongler entre 10 onglets. Tu vois tout d\'un coup d\'œil.' },
      { speaker: 'client', text: 'Et si un outil change ou si j\'en ajoute un ?' },
      { speaker: 'jon', text: 'C\'est prévu. Les automatisations sont modulaires, on peut ajuster sans tout reconstruire.' },
      { speaker: 'client', text: 'Délai ?' },
      { speaker: 'jon', text: '1-2 semaines pour une première automatisation fonctionnelle. On commence par le plus douloureux, on itère ensuite.' }
    ]
  },
  {
    id: 'time-lack',
    emoji: '⏰',
    title: 'Tâches chronophages',
    subtitle: 'Relances, rapports, copier-coller...',
    pillar: 'auto',
    scrollTo: 'ia',
    color: 'rgba(0, 217, 163, 0.15)',
    messages: [
      { speaker: 'client', text: 'Je passe des heures chaque semaine sur des trucs bêtes : relances, rapports, copier-coller...' },
      { speaker: 'jon', text: 'Combien d\'heures exactement ? Parce que si c\'est 5h/semaine, ça fait 250h/an. Soit 6 semaines de boulot.' },
      { speaker: 'client', text: 'Oui mais c\'est des petites tâches, ça se compte pas...' },
      { speaker: 'jon', text: 'Justement, ça se compte. Et ça s\'automatise. Emails de relance, création de factures, mise à jour de tableaux, envoi de rappels — tout ça peut tourner sans toi.' },
      { speaker: 'client', text: 'Mon process est trop spécifique, c\'est pas automatisable.' },
      { speaker: 'jon', text: 'C\'est ce que tout le monde dit. En vrai, 80% des tâches répétitives suivent une logique simple : "Si X arrive, alors faire Y." C\'est exactement ce qu\'on automatise.' },
      { speaker: 'client', text: 'Ça coûte cher à mettre en place ?' },
      { speaker: 'jon', text: 'Moins cher que ton temps. Une automatisation bien faite se rentabilise en quelques semaines.' },
      { speaker: 'client', text: 'Par où on commence ?' },
      { speaker: 'jon', text: 'On identifie ensemble tes tâches les plus chronophages. On automatise la plus douloureuse d\'abord. Tu vois le résultat, on continue.' }
    ]
  },

  // Pilier 3: Visibilité & app
  {
    id: 'invisible-google',
    emoji: '',
    title: 'Invisible sur Google',
    subtitle: 'Les clients trouvent mes concurrents',
    pillar: 'web',
    scrollTo: 'seo-local',
    color: 'rgba(0, 168, 125,0.15)',
    messages: [
      { speaker: 'client', text: 'Quand on cherche mon métier dans ma ville, je n\'apparais pas. Mes concurrents, si.' },
      { speaker: 'jon', text: 'Dans 9 cas sur 10, ça se joue sur deux choses : ta fiche Google et quelques pages de ton site.' },
      { speaker: 'client', text: 'Et ça coûte combien ?' },
      { speaker: 'jon', text: 'CHF 390 pour tout remettre d\'aplomb, puis CHF 199 par mois pour le suivi. Sans engagement.' },
      { speaker: 'client', text: 'Ça prend combien de temps ?' },
      { speaker: 'jon', text: 'Les premiers effets se voient souvent en quelques semaines sur Google Maps. Le site suit en 2-3 mois.' }
    ]
  },
  {
    id: 'app-idea',
    emoji: '',
    title: 'Une idée d\'app',
    subtitle: 'Je ne sais pas par où commencer',
    pillar: 'validation',
    scrollTo: 'app-mobile',
    color: 'rgba(0, 168, 125,0.15)',
    messages: [
      { speaker: 'client', text: 'J\'ai une idée d\'application pour mes clients, mais je n\'y connais rien en technique.' },
      { speaker: 'jon', text: 'C\'est normal, c\'est mon travail. Toi, tu connais ton métier et tes clients.' },
      { speaker: 'client', text: 'Il faut tout prévoir dès le départ ?' },
      { speaker: 'jon', text: 'Non. On garde l\'essentiel pour une première version, on la met entre les mains de vrais utilisateurs, puis on ajoute.' },
      { speaker: 'client', text: 'Et le budget ?' },
      { speaker: 'jon', text: 'Ça dépend vraiment de l\'app. On en parle 30 minutes et je te fais un devis clair.' }
    ]
  }
];

// Structure des sections concrètes (PARTIE 2)
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
    accroche: `Un site rapide, clair et trouvable sur Google. Dès CHF 750, devis sur demande.`,
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
          'Site Webflow propre et rapide',
          'Formation à l\'éditeur incluse',
          'Reprise d\'un site Webflow existant'
        ],
        ctaText: 'En savoir plus',
        link: '/services/developpeur-webflow'
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
    id: 'seo-local',
    title: 'Référencement local',
    accroche: `Être trouvé quand on te cherche près de chez toi : ton site et ta fiche Google. CHF 390 de mise en place, puis CHF 199/mois.`,
    subServices: [
      {
        id: 'referencement-local',
        title: 'Référencement local',
        description: 'Ton site optimisé pour remonter sur les recherches de ta ville.',
        features: [
          'Audit et corrections techniques',
          'Pages et contenus pensés pour ta zone',
          'Suivi mensuel, sans engagement'
        ],
        ctaText: 'En savoir plus',
        link: '/services/referencement-local'
      },
      {
        id: 'gestion-fiche-google',
        title: 'Fiche Google',
        description: 'Ta fiche Google Business Profile complète, à jour et active.',
        features: [
          'Optimisation complète de la fiche',
          'Publications et réponses aux avis',
          'Compris dans le suivi à CHF 199/mois'
        ],
        ctaText: 'En savoir plus',
        link: '/services/gestion-fiche-google'
      }
    ],
    ctaText: 'Booster ma visibilité locale'
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

// Helper pour récupérer un scénario par ID
export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find(s => s.id === id);
}

// Helper pour récupérer les scénarios d'un pilier
export function getScenariosByPillar(pillar: 'web' | 'auto' | 'validation'): Scenario[] {
  return scenarios.filter(s => s.pillar === pillar);
}

// Helper pour récupérer une section par ID
export function getSectionById(id: string): ServiceSection | undefined {
  return serviceSections.find(s => s.id === id);
}
