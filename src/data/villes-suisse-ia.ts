// src/data/villes-suisse-ia.ts
// Données structurées pour le silo de conversion IA (programmatic SEO).
// Villes suisses romandes où Jon Labs propose du conseil et de l'intégration IA
// depuis Genève. Chaque entrée alimente /consultant-ia/[ville].
//
// Garde-fou anti-template : le contenu de chaque ville est réellement local
// (tissu économique, secteurs, cas d'usage, FAQ). Ce n'est PAS un gabarit au
// nom remplacé. Cf. /programmatic-seo.

export interface VilleIAFAQ {
  question: string;
  answer: string;
}

export interface CasUsageIA {
  /** secteur ou métier local concerné */
  secteur: string;
  /** cas d'usage IA concret pour ce secteur */
  cas: string;
}

export interface VilleIAData {
  /** slug utilisé en URL : /consultant-ia/{slug} */
  slug: string;
  /** nom court de la ville, ex. "Genève" */
  nom: string;
  /** nom complet pour SEO, ex. "Genève (canton de Genève)" */
  nomComplet: string;
  /** canton */
  canton: string;
  /** population approximative de l'agglomération (entier) */
  population: number;
  /** population formatée pour l'UI, ex. "environ 500 000 (agglomération)" */
  populationLabel: string;
  /** description courte (1-2 phrases) */
  description: string;
  /** contexte économique local + angle IA (3-4 phrases) */
  contexteEconomique: string;
  /** secteurs dominants du bassin économique local */
  secteursDominants: string[];
  /** cas d'usage IA concrets ancrés dans le tissu local (5-6 items) */
  casUsageIA: CasUsageIA[];
  /** douleurs opérationnelles fréquentes des PME locales (3-4 items) */
  pains: string[];
  /** publics cibles spécifiques */
  publicCible: string[];
  /** FAQ ville-spécifique (5 Q/R uniques) */
  faqs: VilleIAFAQ[];
  /** meta description unique et locale (≤ 158 car.) */
  metaDescription: string;
  /** mot-clé SEO principal, ex. "consultant IA Genève" */
  motCleSEO: string;
  /** angle d'approche unique pour le hero */
  angleHero: string;
  /** preuve / argument de proximité local affiché dans le hero */
  preuveLocale: string;
  /** slugs des villes proches pour maillage interne */
  voisines: string[];
}

export const villesSuisseIA: VilleIAData[] = [
  {
    slug: 'geneve',
    nom: 'Genève',
    nomComplet: 'Genève (canton de Genève)',
    canton: 'Genève',
    population: 500000,
    populationLabel: 'environ 500 000 (agglomération)',
    description:
      "Genève concentre la banque privée, le négoce de matières premières, l'horlogerie de luxe, les organisations internationales et une dense couche de fiduciaires, d'études et d'agences immobilières. C'est un bassin de PME à forte valeur ajoutée, où chaque heure administrative coûte cher.",
    contexteEconomique:
      "Le tissu genevois est dominé par les services à haute valeur : banque, négoce, horlogerie, droit, immobilier, santé privée. La plupart de ces PME croulent sous des tâches répétitives à faible valeur (saisie, classement de documents, relances, reporting) alors que leurs collaborateurs sont payés au prix fort. C'est exactement là qu'un agent IA bien cadré dégage du temps. Particularité genevoise : les données sensibles (clients bancaires, dossiers patients, mandats fiduciaires) imposent une rigueur nLPD que les solutions américaines posées à la va-vite ne respectent pas. Je suis basé à Chêne-Bougeries — pas de l'autre côté de la frontière, ici.",
    secteursDominants: [
      'banque privée et gestion de fortune',
      'négoce de matières premières (trading)',
      'fiduciaires et études (avocats, notaires)',
      'agences immobilières et régies',
      'horlogerie et luxe',
      'santé privée et cabinets',
    ],
    casUsageIA: [
      {
        secteur: 'Fiduciaire',
        cas: "Un agent qui lit les justificatifs reçus par e-mail, pré-impute les écritures dans Bexio ou Crésus et signale les pièces manquantes au comptable — la validation reste humaine.",
      },
      {
        secteur: 'Régie immobilière',
        cas: "Tri et réponse de premier niveau aux demandes locataires (états des lieux, sinistres, préavis), avec escalade automatique vers le gérant pour les cas non standard.",
      },
      {
        secteur: 'Étude d\'avocats',
        cas: "Recherche dans un fonds documentaire interne (jurisprudence, contrats types, dossiers passés) en langage naturel, avec citation des sources — sans envoyer les pièces sensibles à un service public.",
      },
      {
        secteur: 'Cabinet médical',
        cas: "Rédaction assistée des courriers de suite et synthèse des comptes-rendus dictés, hébergée sur une infrastructure conforme à la protection des données patients.",
      },
      {
        secteur: 'Négoce / PME B2B',
        cas: "Veille concurrentielle et préparation de propositions commerciales : l'agent compile les données marché et produit un premier jet que le commercial corrige.",
      },
      {
        secteur: 'Horlogerie / luxe',
        cas: "Réponses multilingues (FR/EN/DE) au service client et au SAV, avec ton de marque maîtrisé et transfert humain dès qu'un dossier sort du cadre.",
      },
    ],
    pains: [
      "Des collaborateurs à CHF 120k qui passent un tiers de leur temps sur de la saisie et du classement",
      "Des données clients sensibles qui interdisent de bricoler avec le premier outil IA américain venu",
      "Des prestataires IA qui promettent monts et merveilles sans jamais montrer un prix",
      "Un retard ressenti sur l'IA, mais aucune idée de par où commencer concrètement",
    ],
    publicCible: [
      'fiduciaires et comptables',
      'régies et agences immobilières',
      'études d\'avocats et de notaires',
      'PME de négoce et de services B2B',
      'cabinets médicaux et santé privée',
    ],
    faqs: [
      {
        question: "Pourquoi prendre un consultant IA basé à Genève plutôt qu'un freelance transfrontalier ?",
        answer:
          "Parce que « basé à Genève » et « je passe la frontière deux fois par semaine » ne sont pas la même chose. Je suis installé à Chêne-Bougeries, je facture en CHF, je connais le contexte nLPD et je peux passer dans vos bureaux le matin sans planifier un passage de douane. Pour des dossiers qui touchent des données clients bancaires, des mandats fiduciaires ou des pièces médicales, l'ancrage suisse réel n'est pas un détail marketing : c'est ce qui détermine où vos données sont hébergées et qui y a accès.",
      },
      {
        question: "Mes données clients sont confidentielles. L'IA, ce n'est pas un risque de fuite ?",
        answer:
          "Ça peut l'être si on branche n'importe quel outil grand public sur vos dossiers. C'est justement le point de départ de mon travail : cartographier quelles données peuvent sortir, lesquelles doivent rester chez vous, et choisir l'hébergement en conséquence (Suisse ou UE, jamais un service qui réentraîne ses modèles sur vos pièces). Pour une fiduciaire ou une étude genevoise, on travaille souvent avec des modèles hébergés en Europe ou en local, et une règle simple : aucune donnée sensible ne transite par un service public sans accord explicite.",
      },
      {
        question: "Combien coûte un projet d'agent IA pour une PME genevoise ?",
        answer:
          "Tout dépend du périmètre, mais je donne des chiffres au lieu de les cacher. Un premier cadrage et un agent simple (tri d'e-mails, pré-remplissage de documents) démarre autour de CHF 2'500 à 4'000. Un agent métier intégré à vos outils (Bexio, CRM, boîte mail) se situe généralement entre CHF 6'000 et 15'000 selon la complexité. Vous recevez un devis chiffré avant de vous engager, pas une fourchette floue après trois réunions.",
      },
      {
        question: "On n'a aucune compétence technique en interne, c'est gérable ?",
        answer:
          "Oui, et c'est même le cas le plus fréquent à Genève. Vous n'avez pas à comprendre comment l'agent fonctionne — vous devez comprendre ce qu'il vous enlève comme travail. Je m'occupe de la conception, de l'intégration et des garde-fous, puis je forme votre équipe à l'usage quotidien. L'objectif n'est jamais de vous rendre dépendant : c'est de vous donner un outil qui tourne et que vous pilotez.",
      },
      {
        question: "Vous travaillez avec quels outils déjà installés chez nous ?",
        answer:
          "Ceux que les PME romandes utilisent vraiment : Bexio et Crésus pour la compta, Outlook/Gmail pour la messagerie, les principaux CRM, et les logiciels métier verticaux (gérance immobilière, gestion de cabinet). L'idée n'est pas de tout remplacer mais de brancher l'IA sur l'existant. Si un outil ne s'intègre pas proprement, je le dis avant de commencer plutôt qu'après.",
      },
    ],
    metaDescription:
      "Consultant IA à Genève : agents IA sur-mesure et automatisation pour fiduciaires, régies et PME. Prix en CHF, conformité nLPD, vraiment basé ici.",
    motCleSEO: 'consultant IA Genève',
    angleHero:
      "Conseil et intégration d'agents IA pour les PME genevoises — vraiment basé ici, prix en CHF, conformité nLPD comprise.",
    preuveLocale: 'Basé à Chêne-Bougeries · facturation CHF · audit de 50 sites romands',
    voisines: ['lausanne'],
  },
  {
    slug: 'lausanne',
    nom: 'Lausanne',
    nomComplet: 'Lausanne (canton de Vaud)',
    canton: 'Vaud',
    population: 420000,
    populationLabel: 'environ 420 000 (agglomération)',
    description:
      "Lausanne mélange un écosystème tech tiré par l'EPFL et l'UNIL, un pôle santé et biotech (Health Valley), l'administration cantonale vaudoise, le sport international (CIO et fédérations) et un dense tissu de PME tertiaires. Une ville où l'innovation côtoie beaucoup de processus encore très manuels.",
    contexteEconomique:
      "Le bassin lausannois est plus jeune et plus tech que Genève : startups issues de l'EPFL, scale-ups en santé numérique, agences digitales, mais aussi une majorité de PME et d'indépendants vaudois aux processus 100 % manuels. Le décalage est frappant — on parle d'IA partout autour de l'EPFL, mais la PME de services moyenne de la région saisit encore ses factures à la main. Mon rôle n'est pas de vous vendre la dernière hype sortie d'un labo, mais de brancher des automatisations IA pragmatiques sur votre activité réelle. Je travaille depuis Genève, à 40 minutes en train ou en voiture, et je me déplace sur Lausanne pour les ateliers de cadrage.",
    secteursDominants: [
      'startups et scale-ups tech (écosystème EPFL/UNIL)',
      'santé numérique et biotech (Health Valley)',
      'agences digitales et marketing',
      'administration et parapublic vaudois',
      'PME tertiaires et services',
      'sport international et associations (CIO, fédérations)',
    ],
    casUsageIA: [
      {
        secteur: 'Startup / scale-up',
        cas: "Un agent support de premier niveau qui répond aux questions récurrentes des utilisateurs et n'escalade vers l'équipe que les cas réels — pour tenir la charge sans recruter trop tôt.",
      },
      {
        secteur: 'Agence digitale',
        cas: "Production assistée de premiers jets (briefs, comptes-rendus, propositions) et reporting client automatisé, pour que les équipes restent sur la création plutôt que l'administratif.",
      },
      {
        secteur: 'Cabinet / santé numérique',
        cas: "Synthèse de documents et rédaction assistée de courriers, sur une infrastructure conforme à la protection des données — la validation médicale restant humaine.",
      },
      {
        secteur: 'PME de services vaudoise',
        cas: "Automatisation des relances, du tri d'e-mails et de la préparation de devis : les tâches répétitives qui mangent une demi-journée par semaine.",
      },
      {
        secteur: 'Association / fédération',
        cas: "Réponses multilingues aux demandes des membres et organisation assistée des événements (inscriptions, relances, FAQ), avec transfert humain pour les cas particuliers.",
      },
      {
        secteur: 'Commerce / e-commerce',
        cas: "Veille produit, génération de fiches et réponse aux questions clients fréquentes, branchées sur le catalogue existant.",
      },
    ],
    pains: [
      "Une équipe qui croit que « faire de l'IA » veut dire engager un data scientist, alors qu'il s'agit d'automatiser le quotidien",
      "Des projets pilotes IA lancés en interne qui ne sortent jamais du stade de la démo",
      "Des heures perdues sur des tâches répétitives pendant que la concurrence avance",
      "Des outils IA empilés sans stratégie, qui coûtent un abonnement et ne sont jamais vraiment adoptés",
    ],
    publicCible: [
      'startups et scale-ups',
      'agences digitales et marketing',
      'PME tertiaires et indépendants vaudois',
      'cabinets et acteurs de la santé numérique',
      'associations et fédérations',
    ],
    faqs: [
      {
        question: "Vous êtes à Genève — pourquoi vous plutôt qu'un prestataire IA lausannois ?",
        answer:
          "Lausanne est à 40 minutes de Genève, je m'y déplace pour les ateliers de cadrage et la livraison sans que ça change quoi que ce soit aux délais. La vraie question n'est pas la distance mais l'approche : beaucoup d'acteurs proches de l'EPFL vendent de l'IA de pointe pensée pour des labos ou des scale-ups financées. Moi, je branche des automatisations concrètes sur des PME et des indépendants qui veulent récupérer du temps, avec un prix annoncé d'avance en CHF. Pour la plupart des entreprises vaudoises, c'est ça le bon niveau.",
      },
      {
        question: "On a déjà testé des outils IA en interne sans résultat. Qu'est-ce que vous faites de différent ?",
        answer:
          "Le piège classique, c'est de partir de l'outil (« on a un abonnement ChatGPT, servez-vous ») au lieu de partir du problème. Je commence par identifier les 2-3 tâches qui mangent le plus de temps chez vous, je conçois un agent ciblé sur celles-là, je l'intègre à vos outils existants et je m'assure qu'il est réellement adopté. Un agent qui résout un vrai problème et tourne tous les jours vaut mieux que dix expérimentations qui restent au stade de la démo.",
      },
      {
        question: "Combien coûte un accompagnement IA pour une PME lausannoise ?",
        answer:
          "Je donne des chiffres. Un cadrage et un premier agent simple démarrent autour de CHF 2'500 à 4'000. Un agent métier intégré à vos outils se situe généralement entre CHF 6'000 et 15'000 selon la complexité et le nombre d'intégrations. Vous avez un devis chiffré avant de signer. Pas d'abonnement obligatoire, pas de contrat de 12 mois pour vous garder captif.",
      },
      {
        question: "On est une startup, on bouge vite. Vous pouvez suivre le rythme ?",
        answer:
          "Oui. Pour une startup ou une scale-up, je travaille souvent par itérations courtes : un agent en production en deux à trois semaines, puis on l'étend selon ce qui marche. L'objectif est de vous faire gagner du temps tout de suite, pas de lancer un chantier de six mois. Et comme je conçois et intègre moi-même, vous n'avez pas trois interlocuteurs à coordonner.",
      },
      {
        question: "Nos données santé / utilisateurs sont sensibles. Comment vous gérez la conformité ?",
        answer:
          "Je pars toujours des données avant de choisir la technologie : ce qui peut sortir, ce qui doit rester chez vous, et l'hébergement adapté (Suisse ou UE). Pour la santé numérique et les acteurs qui traitent des données utilisateurs, on évite les services qui réentraînent leurs modèles sur vos contenus, et on cadre précisément ce qui transite. La conformité n'est pas une option ajoutée à la fin : c'est une contrainte de départ.",
      },
    ],
    metaDescription:
      "Consultant IA à Lausanne : automatisations IA concrètes pour startups, agences et PME vaudoises. Prix en CHF, du pragmatique, pas de hype de labo.",
    motCleSEO: 'consultant IA Lausanne',
    angleHero:
      "Automatisations IA pragmatiques pour les PME et startups vaudoises — du concret, pas de la hype de labo, prix en CHF.",
    preuveLocale: 'Déplacements Lausanne · facturation CHF · audit de 50 sites romands',
    voisines: ['geneve'],
  },
];

/**
 * Helper : récupérer une ville IA par son slug
 */
export function getVilleIA(slug: string): VilleIAData | undefined {
  return villesSuisseIA.find((v) => v.slug === slug);
}

/**
 * Helper : retourner les villes voisines (pour maillage interne)
 */
export function getVoisinesIA(ville: VilleIAData): VilleIAData[] {
  return villesSuisseIA.filter((v) => ville.voisines.includes(v.slug));
}
