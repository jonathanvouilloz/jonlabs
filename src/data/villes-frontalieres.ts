// src/data/villes-frontalieres.ts
// Données structurées pour les pages programmatic SEO
// Villes frontalières françaises (Haute-Savoie / Pays de Gex) où Jon Labs intervient
// depuis Genève. Chaque entrée alimente /developpement-web/[ville].

export interface VilleFAQ {
  question: string;
  answer: string;
}

/** Bloc « vendre en ligne » — intention e-commerce, ancrée dans le tissu local.
 *  Aucun fait inventé : les éléments cités (Stripe, TWINT, gestion des stocks,
 *  sur devis, seuils Webflow Ecommerce, délai 4-6 semaines) proviennent
 *  exclusivement de /services/creation-site-web et /services/developpeur-webflow. */
export interface VilleEcommerce {
  /** 2 phrases : pourquoi la vente en ligne se pose DANS CETTE VILLE */
  intro: string;
  /** 3 points concrets (offre réelle, seuils, arbitrage outil) */
  points: string[];
}

export interface VilleData {
  /** slug utilisé en URL : /developpement-web/{slug} */
  slug: string;
  /** nom court de la ville, ex. "Annemasse" */
  nom: string;
  /** nom complet pour SEO, ex. "Annemasse (Haute-Savoie, 74)" */
  nomComplet: string;
  /** population approximative (entier) */
  population: number;
  /** population formatée pour l'UI, ex. "environ 36 000" */
  populationLabel: string;
  /** distance routière depuis Genève centre */
  distanceGeneve: string;
  /** temps de trajet depuis Genève (voiture / TC) */
  tempsTrajetGeneve: string;
  /** description courte (1-2 phrases) */
  description: string;
  /** contexte économique local (2-3 phrases) */
  contexteEconomique: string;
  /** publics cibles spécifiques */
  publicCible: string[];
  /** spécificités locales (3-4 items) */
  specificites: string[];
  /** exemples concrets de projets adaptés */
  exemplesProjets: string[];
  /** FAQ ville-spécifique (4-5 Q/R uniques) */
  faqs: VilleFAQ[];
  /** mot-clé SEO principal */
  motCleSEO: string;
  /** angle d'approche unique pour le hero */
  angleHero: string;
  /** slugs des villes proches pour maillage interne */
  voisines: string[];

  // ── SEO par ville (alignés sur la demande réelle mesurée en GSC) ──────────
  // Avant : title/description générés centralement dans [ville].astro → 5 metas
  // quasi identiques, 1'210 impressions et 0 clic sur 4 semaines. Chaque ville
  // porte désormais SES requêtes. Le suffixe « | Jonlabs » est réapposé par
  // Layout.astro : `metaTitle` doit rester ≤ 60 car. suffixe compris.
  //
  // Cadrage « agence » : les requêtes contiennent « agence », Jon Labs n'en est
  // pas une. Le terme est donc utilisé comme ce dont on est l'ALTERNATIVE,
  // jamais comme revendication d'identité (même règle que le silo mobile,
  // cf. src/data/villes-mobile.ts). Formulation différente par ville pour ne pas
  // servir cinq fois la même phrase en SERP.
  /** title complet de la page (≤ 60 car., suffixe marque compris) */
  metaTitle?: string;
  /** meta description unique et locale (≤ 158 car.) */
  metaDescription?: string;
  /** amorce du H1, avant le nom de ville en Instrument Serif.
   *  Fallback : « Développeur web sur mesure à ». */
  h1Lead?: string;
  /** bloc e-commerce local (intention totalement absente des pages avant ce jour) */
  ecommerce?: VilleEcommerce;
}

export const villesFrontalieres: VilleData[] = [
  {
    slug: 'annemasse',
    nom: 'Annemasse',
    nomComplet: 'Annemasse (Haute-Savoie, 74)',
    population: 36000,
    populationLabel: 'environ 36 000',
    distanceGeneve: '8 km',
    tempsTrajetGeneve: '15 min en voiture, 20 min en Léman Express',
    description: "Annemasse est la principale agglomération frontalière de Haute-Savoie, deuxième ville du département après Annecy. Elle constitue le cœur économique du Genevois français et accueille des dizaines de milliers de frontaliers.",
    contexteEconomique: "Le tissu économique d'Annemasse mélange commerces de centre-ville, services, PME industrielles, professions libérales et de nombreux frontaliers travaillant à Genève. L'arrivée du Léman Express en 2019 a structurellement renforcé la zone : trajets directs vers Genève Cornavin en 20 minutes, ce qui change l'attente des visiteurs en ligne. Les clients d'Annemasse fréquentent quotidiennement des sites suisses et comparent automatiquement aux standards genevois.",
    publicCible: [
      "commerces locaux du centre-ville",
      "PME industrielles et bâtiment",
      "professions libérales (médecins, avocats, notaires)",
      "artisans et indépendants frontaliers"
    ],
    specificites: [
      "Léman Express direct vers Cornavin : audience habituée aux standards suisses",
      "Forte densité de frontaliers : facturation EUR mais devis souvent comparé en CHF",
      "Concurrence visible des prestataires genevois et lyonnais",
      "Zone bilingue de fait : pages FR-FR mais terminologie suisse acceptée"
    ],
    exemplesProjets: [
      "Site vitrine d'un cabinet médical avec prise de rendez-vous en ligne",
      "Refonte e-commerce d'un commerce du centre-ville (chaussures, optique)",
      "Site multilingue FR/EN pour entreprise transfrontalière",
      "Outil interne de gestion pour PME industrielle de la zone Ziplo"
    ],
    faqs: [
      {
        question: "Pourquoi choisir un développeur basé à Genève pour un projet à Annemasse ?",
        answer: "Annemasse est à 8 km de Genève centre, soit 15 minutes en voiture ou 20 minutes en Léman Express. Concrètement, je peux passer dans tes locaux le matin et rentrer travailler à Chêne-Bougeries l'après-midi. Au-delà de la proximité géographique, ton audience est déjà partiellement suisse (frontaliers, clients du Genevois) : un développeur qui maîtrise les codes des deux côtés de la frontière (RGPD côté France, LPD côté Suisse, double affichage de prix CHF/EUR) évite les angles morts. La plupart des prestataires lyonnais ou parisiens facturent un déplacement, ignorent la spécificité frontalière et travaillent uniquement en EUR."
      },
      {
        question: "Tes tarifs sont en CHF, je peux quand même travailler avec toi depuis Annemasse ?",
        answer: "Oui, sans problème. Je facture en CHF par défaut mais j'émets des factures en EUR pour les clients français qui le préfèrent. Le taux de change appliqué est celui du jour de la facture, et le devis affiche les deux montants en parallèle pour que tu valides en pleine connaissance de cause. Le paiement se fait par virement SEPA (EUR) ou IBAN suisse (CHF). Pas de frais de change cachés."
      },
      {
        question: "Mon site doit-il viser les Genevois ou rester local Annemasse ?",
        answer: "Ça dépend de ton métier. Un commerce de centre-ville cible avant tout les habitants d'Annemasse, Ville-la-Grand, Gaillard et Étrembières — la fiche Google Business Profile et le SEO local sont alors prioritaires. Un cabinet médical ou un service B2B peut viser tout le bassin transfrontalier (les frontaliers représentent un tiers des actifs). Pour ces cas, je structure le site avec des pages séparées par zone (page Annemasse, page Genève) plutôt qu'une page fourre-tout qui dilue le SEO."
      },
      {
        question: "Combien de temps pour livrer un site à Annemasse ?",
        answer: "Mêmes délais que pour un client genevois : 3 à 4 semaines pour un site vitrine, 6 à 8 semaines pour un site avec blog et intégrations, 2 à 3 mois pour une application. La proximité d'Annemasse facilite les ateliers en présentiel quand le projet le justifie (workshop de cadrage, séance photo, formation à la livraison) sans que ça allonge le planning."
      },
      {
        question: "Tu travailles avec quelles entreprises à Annemasse ?",
        answer: "Le profil typique de mes clients du Genevois français : PME entre 3 et 50 personnes, commerces installés, professions libérales et indépendants frontaliers. Pas de très grosses structures industrielles avec service informatique interne. Le ticket d'entrée se situe autour de 1'500 EUR pour un site vitrine et grimpe selon la complexité (e-commerce, multilingue, espace client, intégrations métier)."
      },
      {
        question: "Je tiens un commerce à Annemasse, comment je passe à la vente en ligne ?",
        answer: "On commence par regarder ton catalogue, pas l'outil. Si tu vends moins d'une centaine de références sans variantes compliquées, une boutique Webflow Ecommerce avec paiement Stripe fait le travail et tu la gères toi-même après la formation. Dès qu'on parle de click & collect entre le magasin du centre et un stock déporté, d'abonnements ou de tailles × couleurs × stocks, Webflow bloque : on part alors sur une boutique sur-mesure ou une intégration adaptée. Dans les deux cas la boutique est chiffrée sur devis, et une boutique demande plutôt 4 à 6 semaines qu'un simple site vitrine."
      },
      {
        question: "Je cherche une agence web à Annemasse — tu corresponds ?",
        answer: "Non, et autant le dire tout de suite : je suis développeur freelance, pas une agence. Il n'y a ni commercial, ni chef de projet, ni équipe de trois personnes derrière moi. Tu parles directement à celui qui écrit le code et qui livre. Ce que tu perds : une structure capable d'absorber dix chantiers en parallèle. Ce que tu gagnes : une décision prise dans la journée, un seul interlocuteur du devis à la mise en ligne, et un budget qui ne finance pas des bureaux."
      }
    ],
    motCleSEO: 'développement web Annemasse',
    angleHero: "Sites pro pour PME, commerces et indépendants frontaliers, à 15 minutes de Genève centre.",
    voisines: ['gaillard'],

    metaTitle: 'Boutique en ligne et site web à Annemasse | Jonlabs',
    metaDescription:
      "L'alternative à l'agence pour ouvrir ta boutique en ligne ou refaire ton site à Annemasse : freelance à 15 min de Genève, devis en EUR ou en CHF.",
    h1Lead: 'Boutique en ligne et site web à',
    ecommerce: {
      intro:
        "Les commerces du centre d'Annemasse servent déjà une clientèle qui traverse la frontière tous les jours, dans les deux sens. Une boutique en ligne prolonge la vitrine physique et le rayon d'action au-delà du Léman Express — elle ne la remplace pas.",
      points: [
        "Boutique en ligne, paiement sécurisé (Stripe, TWINT) et gestion des stocks : chiffré sur devis, selon le catalogue.",
        "Moins de 100 produits, peu de variantes, marché suisse ou zone unique : Webflow Ecommerce suffit largement.",
        "Click & collect, abonnements, tailles × couleurs × stocks : Webflow montre ses limites, on passe au sur-mesure.",
      ],
    },
  },
  {
    slug: 'gaillard',
    nom: 'Gaillard',
    nomComplet: 'Gaillard (Haute-Savoie, 74)',
    population: 12000,
    populationLabel: 'environ 12 000',
    distanceGeneve: '5 km',
    tempsTrajetGeneve: '12 min en voiture, 15 min en bus TPG/TAC',
    description: "Gaillard est une commune frontalière directement collée à Genève, séparée par la simple barrière douanière de Moillesulaz. Elle fait partie intégrante de l'agglomération genevoise sans en être suisse.",
    contexteEconomique: "Tissu économique mixte : commerces de proximité, restauration, PME industrielles dans la zone d'activité de Châteauvieux, et une forte densité d'artisans qui interviennent côté Genève comme côté France. La frontière directe avec Genève fait de Gaillard une porte d'entrée commerciale : beaucoup de Suisses traversent pour faire leurs courses, et beaucoup d'entreprises gaillardes facturent une clientèle des deux côtés.",
    publicCible: [
      "commerces de proximité (épicerie, restauration, garages)",
      "artisans du bâtiment intervenant à Genève",
      "PME industrielles de la zone Châteauvieux",
      "indépendants frontaliers"
    ],
    specificites: [
      "Frontière directe Moillesulaz : 5 minutes à pied de Genève",
      "Clientèle suisse fréquente : double affichage CHF/EUR souvent attendu",
      "TPG ligne 61 connecte directement à la gare de Genève",
      "Petite ville mais fort trafic transfrontalier quotidien"
    ],
    exemplesProjets: [
      "Site vitrine d'un garage automobile avec prise de RDV",
      "E-commerce léger pour une épicerie spécialisée du centre",
      "Site bilingue FR/EN pour artisan intervenant à Genève",
      "Refonte du site d'une PME industrielle de Châteauvieux"
    ],
    faqs: [
      {
        question: "Gaillard est à 5 km de Genève, ça change quoi pour mon site ?",
        answer: "Ça change que ta clientèle potentielle est moitié française, moitié suisse. La douane de Moillesulaz se traverse à pied en 30 secondes, et beaucoup de Genevois font leurs courses, mangent ou se garent à Gaillard. Concrètement, ton site doit afficher proprement les prix dans les deux monnaies, accepter idéalement TWINT en plus de la CB, et apparaître à la fois sur Google.fr et Google.ch. Un développeur basé à Genève qui facture en CHF maîtrise nativement ces sujets."
      },
      {
        question: "Je suis artisan à Gaillard et j'interviens des deux côtés de la frontière, comment l'afficher ?",
        answer: "Le piège classique, c'est de créer une page fourre-tout 'zone d'intervention' qui mélange tout. Mieux : une page dédiée à Gaillard et au Genevois français, une autre dédiée à Genève et aux communes suisses limitrophes (Thônex, Chêne-Bourg, Vésenaz). Chaque page parle directement à son audience, mentionne les prix dans la bonne monnaie et capte le SEO local des deux côtés. Le site reste un seul domaine — ce sont juste les pages internes qui sont localisées."
      },
      {
        question: "Combien coûte un site web à Gaillard comparé à Genève ?",
        answer: "Le coût du développement ne dépend pas de la ville, il dépend du périmètre fonctionnel. Un site vitrine démarre à CHF 850, que tu sois à Gaillard ou à Genève. Le différentiel réel se situe surtout sur la TVA : facturation TVA française à 20% pour les sociétés gaillardes, pas de TVA pour les non-assujettis suisses. Je gère les deux cas avec des factures conformes."
      },
      {
        question: "Je peux te rencontrer à Gaillard ou seulement en visio ?",
        answer: "Les deux. Gaillard est à 12 minutes en voiture de chez moi à Chêne-Bougeries, je peux donc venir sur place pour le brief initial, les ateliers de cadrage ou la formation à la livraison. Pour les itérations en cours de projet (validation de maquettes, démos), on travaille en visio avec partage d'écran : c'est plus efficace, et tu n'as pas à bloquer une demi-journée."
      },
      {
        question: "Les clients suisses qui visitent Gaillard cherchent quoi en ligne ?",
        answer: "D'après mes propres clients gaillardes : essentiellement les horaires, les prix en CHF, les places de parking et les conditions de paiement (CB suisse acceptée ? TWINT ?). C'est court, c'est pragmatique, et c'est rarement bien fait sur les sites de PME locales. Un site qui répond à ces 4 questions dès le hero capte une part disproportionnée de la clientèle transfrontalière."
      },
      {
        question: "Ma boutique en ligne doit encaisser des Suisses et des Français, c'est possible ?",
        answer: "Oui, mais c'est précisément ce qui décide de l'outil. Webflow Ecommerce est parfait tant que tu restes sur un catalogue simple, une zone unique et un paiement par carte via Stripe. À Gaillard, la moitié de la clientèle arrive de Moillesulaz : dès que tu veux TWINT, un affichage en deux monnaies ou des règles de TVA différentes des deux côtés, Webflow atteint sa limite. On bascule alors sur une boutique sur-mesure ou une intégration adaptée (Stripe, Snipcart, solution headless), avec gestion des stocks — le tout chiffré sur devis plutôt qu'au forfait."
      },
      {
        question: "Freelance ou agence web pour un projet à Gaillard ?",
        answer: "Je ne suis pas une agence, donc la comparaison est simple : chez moi il n'y a personne entre toi et le code. Pas de commercial pour prendre le brief, pas de chef de projet pour le retransmettre. Sur un site de commerce ou d'artisan gaillard, ça se voit surtout sur le rythme : une question posée le matin est arbitrée l'après-midi, et je peux passer sur place — la douane est à cinq minutes. Si ton projet demande une équipe pluridisciplinaire à plein temps pendant six mois, une agence sera plus adaptée, et je te le dirai."
      }
    ],
    motCleSEO: 'développement web Gaillard',
    angleHero: "Sites optimisés pour la clientèle franco-suisse, à 5 minutes de la douane de Moillesulaz.",
    voisines: ['annemasse'],

    metaTitle: 'Développement web et site internet à Gaillard | Jonlabs',
    metaDescription:
      "Le travail d'une agence de développement web, en direct avec le développeur : site vitrine, boutique en ligne et refonte à Gaillard. Devis EUR ou CHF.",
    h1Lead: 'Développement web et boutique en ligne à',
    ecommerce: {
      intro:
        "À Gaillard, une boutique en ligne encaisse par définition des deux côtés de la douane. Le choix de l'outil ne se joue donc pas sur le design mais sur le paiement : carte, TWINT, double affichage CHF/EUR, TVA française ou pas.",
      points: [
        "Catalogue simple, zone unique, paiement par carte via Stripe : Webflow Ecommerce fait le travail.",
        "TWINT ou moyens de paiement suisses spécifiques, multi-devises, règles de TVA croisées : Webflow ne suit plus.",
        "Dans ce cas, boutique sur-mesure ou intégration (Stripe, Snipcart, headless), avec gestion des stocks — sur devis.",
      ],
    },
  }
];

/**
 * Helper : récupérer une ville par son slug
 */
export function getVille(slug: string): VilleData | undefined {
  return villesFrontalieres.find(v => v.slug === slug);
}

/**
 * Helper : retourner les villes voisines (pour maillage interne)
 */
export function getVoisines(ville: VilleData): VilleData[] {
  return villesFrontalieres.filter(v => ville.voisines.includes(v.slug));
}
