// src/data/villes-suisse-ia.ts
// Données structurées pour le silo de conversion IA (programmatic SEO).
// Villes romandes (et frontalières françaises depuis le 17.11.2026, arbitrage Q2) où Jon Labs propose du conseil et de l'intégration IA
// depuis Genève. Chaque entrée alimente /consultant-ia/[ville].
// Genève retirée le 17.11.2026 (doublon du pilier, 301 /consultant-ia/geneve → /consultant-ia).
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
  /** canton (ou département, pour les villes frontalières françaises) */
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
  /** douleurs opérationnelles fréquentes des PME locales (3-4 items). Absent = section masquée (aucune donnée locale réelle). */
  pains?: string[];
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
          "Je donne des chiffres. Un premier agent démarre à CHF 1'500. Si l'agent doit gérer plusieurs tâches et outils, c'est sur devis. Vous avez un devis chiffré avant de signer. Pas d'abonnement obligatoire, pas de contrat de 12 mois pour vous garder captif.",
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
      "Consultant IA à Lausanne : automatisations IA concrètes pour startups, agences et PME vaudoises. Prix en CHF, sans hype.",
    motCleSEO: 'consultant IA Lausanne',
    angleHero:
      "Automatisations IA pragmatiques pour les PME et startups vaudoises — du concret, pas de la hype de labo, prix en CHF.",
    preuveLocale: 'Déplacements Lausanne · facturation CHF · audit de 50 sites romands',
    voisines: ['annemasse', 'gaillard'],
  },
  // ══ Zone frontalière (arbitrage Q2 du 17.11.2026) : plus de sites web à Annemasse/Gaillard,
  // du service IA à la place. Faits locaux repris tels quels de l'ex-data villes-frontalieres.ts
  // (géographie, trajets, tissu, facturation). Aucun client local ni chiffre ajouté ; pas de `pains`
  // (aucune observation locale réelle à citer).
  {
    slug: 'annemasse',
    nom: 'Annemasse',
    nomComplet: 'Annemasse (Haute-Savoie, 74)',
    canton: 'Haute-Savoie',
    population: 36000,
    populationLabel: 'environ 36 000',
    description:
      "Annemasse est la principale agglomération frontalière de Haute-Savoie, deuxième ville du département après Annecy. Elle constitue le cœur économique du Genevois français et accueille des dizaines de milliers de frontaliers.",
    contexteEconomique:
      "Le tissu économique d'Annemasse mélange commerces de centre-ville, services, PME industrielles, professions libérales et de nombreux frontaliers travaillant à Genève. Depuis l'arrivée du Léman Express en 2019, Genève Cornavin est à 20 minutes en train, et la clientèle compare naturellement aux standards genevois. Pour un commerce, un cabinet ou une PME, le travail qui se répète reste le même des deux côtés de la frontière : e-mails, relances, devis, documents à préparer. C'est là qu'un agent IA bien cadré rend du temps. Je travaille depuis Genève, à 8 km : je passe dans vos locaux pour le cadrage et la prise en main, le reste se fait en visio.",
    secteursDominants: [
      'commerces du centre-ville',
      'services',
      'PME industrielles et bâtiment',
      'professions libérales (médecins, avocats, notaires)',
      'artisans et indépendants frontaliers',
    ],
    casUsageIA: [
      {
        secteur: 'Cabinet médical',
        cas: "Rédaction assistée des courriers de suite et synthèse des comptes-rendus dictés, hébergée sur une infrastructure conforme à la protection des données patients.",
      },
      {
        secteur: 'Étude d\'avocats ou de notaires',
        cas: "Recherche dans un fonds documentaire interne (contrats types, dossiers passés) en langage naturel, avec citation des sources, sans envoyer les pièces sensibles à un service public.",
      },
      {
        secteur: 'Commerce du centre-ville',
        cas: "Fiches produits et réponses aux questions clients fréquentes, branchées sur le catalogue existant, pour une clientèle qui compare aux standards genevois. Les demandes hors cadre vous reviennent.",
      },
      {
        secteur: 'PME industrielle ou bâtiment',
        cas: "Pour les PME industrielles et du bâtiment de l'agglomération annemassienne : relances, tri d'e-mails et devis préparés par l'agent, validés par vous avant chaque envoi.",
      },
    ],
    publicCible: [
      'commerces locaux du centre-ville',
      'PME industrielles et bâtiment',
      'professions libérales (médecins, avocats, notaires)',
      'artisans et indépendants frontaliers',
    ],
    faqs: [
      {
        question: "Pourquoi un consultant IA basé à Genève pour une entreprise d'Annemasse ?",
        answer:
          "Annemasse est à 8 km de Genève centre, soit 15 minutes en voiture ou 20 minutes en Léman Express. Je peux passer dans vos locaux pour le cadrage et la prise en main, le reste avance en visio. Votre clientèle est souvent déjà en partie suisse (frontaliers, clients du Genevois) : je connais les règles des deux côtés de la frontière, RGPD côté France, nLPD côté Suisse.",
      },
      {
        question: "Combien coûte un agent IA pour une PME d'Annemasse ?",
        answer:
          "Comptez CHF 1'500 pour démarrer avec un agent sur une tâche précise, par exemple les relances et devis d'une PME du bâtiment. Un agent qui couvre plusieurs tâches et plusieurs outils se chiffre sur devis. Ensuite, l'agent tourne chez Infomaniak, en Suisse, dès CHF 15 par mois selon les fonctionnalités, payés directement à l'hébergeur.",
      },
      {
        question: "Vos prix sont en CHF. Je peux travailler avec vous depuis Annemasse ?",
        answer:
          "Oui, et c'est fréquent dans le Genevois français. Je chiffre en CHF, puis je peux facturer en EUR (virement SEPA) au taux du jour, TVA française appliquée si votre société y est assujettie. Le devis chiffré arrive avant tout engagement.",
      },
      {
        question: "Mes données clients sont confidentielles. Où vont-elles ?",
        answer:
          "C'est le point de départ du cadrage : ce qui peut sortir, ce qui doit rester chez vous, et l'hébergement choisi en conséquence (Suisse ou UE, jamais un service qui réentraîne ses modèles sur vos pièces). Aucune donnée sensible ne transite par un service public sans votre accord explicite.",
      },
      {
        question: "Je cherche une agence IA à Annemasse. Vous correspondez ?",
        answer:
          "Non, et autant le dire tout de suite : je suis freelance, pas une agence. Ni commercial, ni chef de projet : vous parlez directement à celui qui conçoit et intègre l'agent. Ce que vous perdez : une structure capable d'absorber dix chantiers en parallèle. Ce que vous gagnez : une décision prise dans la journée et un seul interlocuteur du devis à la mise en production.",
      },
    ],
    metaDescription:
      "Consultant IA à Annemasse : agents IA et automatisations pour les PME du Genevois français, à 8 km de Genève. Prix en CHF.",
    motCleSEO: 'consultant IA Annemasse',
    angleHero:
      "Agents IA et automatisations pour les commerces, cabinets et PME du Genevois français, à 15 minutes de Genève centre.",
    preuveLocale: 'À 8 km de Genève · 20 min en Léman Express · facturation CHF ou EUR',
    voisines: ['gaillard', 'lausanne'],
  },
  {
    slug: 'gaillard',
    nom: 'Gaillard',
    nomComplet: 'Gaillard (Haute-Savoie, 74)',
    canton: 'Haute-Savoie',
    population: 12000,
    populationLabel: 'environ 12 000',
    description:
      "Gaillard est une commune frontalière directement collée à Genève, séparée par la simple barrière douanière de Moillesulaz. Elle fait partie intégrante de l'agglomération genevoise sans en être suisse.",
    contexteEconomique:
      "Tissu économique mixte : commerces de proximité, restauration, PME industrielles dans la zone d'activité de Châteauvieux, et une forte densité d'artisans qui interviennent côté Genève comme côté France. La frontière directe avec Genève fait de Gaillard une porte d'entrée commerciale : beaucoup de Suisses traversent pour faire leurs courses, et beaucoup d'entreprises gaillardes ont une clientèle des deux côtés. Un agent IA qui répond aux clients, prépare les devis ou relance les factures doit donc composer avec deux monnaies et deux cadres de protection des données. Je suis à 12 minutes en voiture : je viens sur place pour le cadrage et la prise en main.",
    secteursDominants: [
      'commerces de proximité (épicerie, restauration, garages)',
      'artisans du bâtiment intervenant à Genève',
      'PME industrielles de la zone de Châteauvieux',
      'indépendants frontaliers',
    ],
    casUsageIA: [
      {
        secteur: 'Commerce de proximité',
        cas: "Réponses aux questions récurrentes des clients (horaires, prix en CHF, moyens de paiement) par e-mail ou messagerie, avec transfert vers vous dès qu'une demande sort du cadre.",
      },
      {
        secteur: 'Artisan du bâtiment',
        cas: "Tri des demandes entrantes, préparation des devis et relances des clients des deux côtés de la frontière ; vous validez avant chaque envoi.",
      },
      {
        secteur: 'PME industrielle',
        cas: "Pour les PME de la zone d'activité de Châteauvieux : relances, tri d'e-mails et préparation de documents, branchés sur les outils déjà en place.",
      },
      {
        secteur: 'Indépendant frontalier',
        cas: "Un agent qui trie la boîte mail, prépare les réponses et les relances : vous validez, la décision reste la vôtre.",
      },
    ],
    publicCible: [
      'commerces de proximité (épicerie, restauration, garages)',
      'artisans du bâtiment intervenant à Genève',
      'PME industrielles de la zone Châteauvieux',
      'indépendants frontaliers',
    ],
    faqs: [
      {
        question: "Gaillard est collée à Genève. Qu'est-ce que ça change pour un projet IA ?",
        answer:
          "Votre clientèle est souvent moitié française, moitié suisse : la douane de Moillesulaz se traverse à pied. Un agent qui répond à vos clients ou prépare vos devis doit donc gérer les deux monnaies et, côté données, les deux cadres : RGPD côté France, nLPD côté Suisse. On le cadre dès le départ, pas à la livraison.",
      },
      {
        question: "Je peux vous rencontrer à Gaillard ou seulement en visio ?",
        answer:
          "Les deux. Gaillard est à 12 minutes en voiture de Chêne-Bougeries : je viens sur place pour le brief initial, l'atelier de cadrage ou la prise en main. Pour les itérations en cours de projet (démos, ajustements), on travaille en visio avec partage d'écran : c'est plus efficace, et vous n'avez pas à bloquer une demi-journée.",
      },
      {
        question: "Combien coûte un agent IA pour une entreprise de Gaillard ?",
        answer:
          "Un commerce de proximité qui veut un agent pour répondre aux questions récurrentes de ses clients démarre à CHF 1'500. Un artisan ou une PME qui veut aussi le tri des demandes, les devis et les relances sur plusieurs outils passe sur devis. Dans les deux cas, l'agent tourne ensuite chez Infomaniak, en Suisse : dès CHF 15 par mois selon les fonctionnalités, réglés directement à l'hébergeur.",
      },
      {
        question: "Vos prix sont en CHF. Comment se passe la facturation pour une société française ?",
        answer:
          "Les prix sont annoncés en CHF. La facturation est possible en EUR (virement SEPA) au taux du jour, avec la TVA française appliquée pour les sociétés assujetties. Vous validez un devis chiffré avant de vous engager.",
      },
      {
        question: "Freelance ou agence pour un projet IA à Gaillard ?",
        answer:
          "Je ne suis pas une agence : chez moi, il n'y a personne entre vous et celui qui construit l'agent. Pas de commercial pour prendre le brief, pas de chef de projet pour le retransmettre. Une question posée le matin est arbitrée l'après-midi. Si votre projet demande une équipe pluridisciplinaire à plein temps pendant six mois, une agence sera plus adaptée, et je vous le dirai.",
      },
    ],
    metaDescription:
      "Consultant IA à Gaillard : agents IA et automatisations pour commerces et PME franco-suisses, à 5 min de Moillesulaz. Prix en CHF.",
    motCleSEO: 'consultant IA Gaillard',
    angleHero:
      "Agents IA et automatisations pour les commerces, artisans et PME à clientèle franco-suisse, à 5 minutes de la douane de Moillesulaz.",
    preuveLocale: 'À 12 min de Genève · déplacements sur place · facturation CHF ou EUR',
    voisines: ['annemasse', 'lausanne'],
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
