// src/data/metiers-ia.ts
// Données structurées pour les pages Métiers du silo de conversion IA.
// Verticales romandes où Jon Labs propose du conseil et de l'intégration IA.
// Chaque entrée alimente /metiers/[metier].
//
// Garde-fou anti-template : le contenu de chaque métier est réellement
// spécifique (flux métier, cas d'usage, outils nommés, FAQ). Ce n'est PAS un
// gabarit au nom remplacé. Cf. /programmatic-seo.
//
// La section "Méthode" (audit → prototype → garde-fous → prise en main) est
// commune à tous les métiers : elle vit dans le template [metier].astro, pas ici.

export interface MetierIAFAQ {
  question: string;
  answer: string;
}

export interface MetierCasUsage {
  /** titre court du cas d'usage */
  titre: string;
  /** description concrète du cas d'usage IA pour ce métier */
  description: string;
}

export interface MetierParcours {
  /** étape du cycle de vie métier */
  etape: string;
  /** ce que l'IA change à cette étape */
  description: string;
}

export interface MetierOutil {
  /** nom du logiciel métier (capte les recherches par outil) */
  nom: string;
  /** ce que l'IA fait avec / autour de cet outil */
  usage: string;
}

export interface MetierArticleLie {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface MetierIAData {
  /** slug utilisé en URL : /metiers/{slug} */
  slug: string;
  /** nom du métier au singulier, ex. "Fiduciaire" */
  metier: string;
  /** H1 on-page (formulation naturelle) */
  h1: string;
  /** title SEO (≤ 60 car.) */
  title: string;
  /** meta description unique (≤ 158 car.) */
  metaDescription: string;
  /** mot-clé SEO principal */
  motCleSEO: string;
  /** badge affiché dans le hero, ex. "Fiduciaires & experts-comptables" */
  heroBadge: string;
  /** accroche du hero (pain métier, 2-3 phrases) */
  accroche: string;
  /** trust line du hero ("a · b · c") */
  preuveLocale: string;
  /** "ce qui devrait remonter tout seul" — 4 flux clés du métier */
  fluxRemontent: string[];
  /** douleurs opérationnelles concrètes (5-6 items) */
  pains: string[];
  /** 8 cas d'usage IA spécifiques au métier (le cœur) */
  casUsage: MetierCasUsage[];
  /** libellé du parcours métier, ex. "Le cycle d'un mandat fiduciaire" */
  parcoursLabel: string;
  /** parcours / cycle de vie en 4-5 étapes */
  parcours: MetierParcours[];
  /** outils métier suisses nommés (capte les recherches par logiciel) */
  outils: MetierOutil[];
  /** critères "pour qui" */
  pourQui: string[];
  /** anti-critères "pas pour qui" */
  pasPourQui: string[];
  /** FAQ métier-spécifique (6-7 Q/R) */
  faqs: MetierIAFAQ[];
  /** preuves / arguments de confiance (notre avantage vs hgnn) */
  preuves: string[];
  /** articles blog connexes pour le maillage (3-4) */
  articlesConnexes: MetierArticleLie[];
}

export const metiersIA: MetierIAData[] = [
  {
    slug: 'ia-fiduciaire',
    metier: 'Fiduciaire',
    h1: "IA pour fiduciaires et experts-comptables en Suisse romande",
    title: "IA pour fiduciaires en Suisse romande",
    metaDescription:
      "IA et automatisation pour fiduciaires romandes : tri des pièces, pré-saisie Bexio/Crésus, relances, TVA, veille légale. Prix en CHF, conformité nLPD.",
    motCleSEO: 'IA fiduciaire',
    heroBadge: 'Fiduciaires & experts-comptables',
    accroche:
      "Vos comptables passent leurs journées à trier des pièces, saisir des écritures et relancer des clients. Une IA bien cadrée leur rend ces heures — sans jamais toucher à la validation, qui reste humaine et professionnelle.",
    preuveLocale: 'Basé à Chêne-Bougeries · facturation CHF · conformité nLPD',
    fluxRemontent: [
      "Les pièces comptables reçues par e-mail, triées et pré-imputées avant même que vous les ouvriez.",
      "Les clients qui n'ont pas envoyé leurs justificatifs du mois, relancés automatiquement.",
      "Les échéances TVA, AVS et bouclements qui approchent, signalées avant de devenir urgentes.",
      "Les incohérences dans un jeu d'écritures (doublon, TVA anormale, pièce manquante), remontées pour contrôle.",
    ],
    pains: [
      "Une équipe qualifiée qui passe un tiers de son temps à saisir et classer des pièces au lieu de conseiller.",
      "Des relances clients pour obtenir les justificatifs, refaites à la main chaque mois.",
      "Des périodes de bouclement et de TVA où tout le monde fait des heures parce que le travail s'accumule en pics.",
      "Des données clients ultra-sensibles qui interdisent de brancher n'importe quel outil IA américain.",
      "Des logiciels métier (Bexio, Crésus, Winbiz, Abacus) qui ne se parlent pas et obligent à ressaisir.",
      "Une pression tarifaire des clients qui refusent de payer des heures de saisie mais veulent plus de conseil.",
    ],
    casUsage: [
      {
        titre: "Tri et pré-imputation des pièces",
        description:
          "Un agent lit les factures et justificatifs reçus par e-mail, les rattache au bon client et pré-impute l'écriture dans Bexio ou Crésus. Le comptable valide en un clic au lieu de tout saisir.",
      },
      {
        titre: "Relance automatique des justificatifs",
        description:
          "L'agent détecte les clients dont les pièces du mois manquent et envoie une relance personnalisée, avec rappel des documents attendus. Fini le suivi manuel dans un tableur.",
      },
      {
        titre: "Préparation des décomptes TVA",
        description:
          "Contrôle de cohérence des taux, détection des écritures à TVA anormale et pré-remplissage du décompte, avec un récapitulatif des points à vérifier avant dépôt.",
      },
      {
        titre: "Veille légale et fiscale",
        description:
          "Un agent surveille les changements de réglementation (TVA, AVS, droit fiscal cantonal) pertinents pour votre portefeuille et vous en fait une synthèse actionnable, sans lire dix newsletters.",
      },
      {
        titre: "Onboarding d'un nouveau client",
        description:
          "Génération de la checklist des documents à récupérer, création du dossier et pré-remplissage des informations à partir des pièces fournies, pour démarrer un mandat sans friction.",
      },
      {
        titre: "Réponses de premier niveau aux clients",
        description:
          "L'agent répond aux questions récurrentes (où en est mon bouclement, quels documents fournir, quelles échéances) et n'escalade vers vous que les vrais sujets.",
      },
      {
        titre: "Synthèse et analyse de dossier",
        description:
          "Interrogation en langage naturel d'un dossier client ou d'un fonds documentaire interne (contrats, statuts, historique), avec citation des sources — sans envoyer les pièces à un service public.",
      },
      {
        titre: "Reporting et tableaux de bord",
        description:
          "Production automatique des situations intermédiaires et indicateurs par client, mis en forme et prêts à commenter, au lieu d'un export Excel retravaillé à la main.",
      },
    ],
    parcoursLabel: "Le cycle d'un mandat fiduciaire",
    parcours: [
      {
        etape: "Réception des pièces",
        description:
          "Les documents arrivent par e-mail, courrier, portail. L'IA les capte, les classe et les rattache au bon dossier dès l'arrivée.",
      },
      {
        etape: "Saisie et imputation",
        description:
          "Pré-imputation automatique dans votre logiciel comptable ; le comptable contrôle et valide au lieu de tout ressaisir.",
      },
      {
        etape: "Contrôle et bouclement",
        description:
          "Détection des incohérences, préparation des décomptes TVA et des situations, avec les points d'attention remontés.",
      },
      {
        etape: "Conseil au client",
        description:
          "Le temps récupéré sur la saisie est réinvesti là où vous avez de la valeur : le conseil, l'optimisation, la relation.",
      },
      {
        etape: "Restitution",
        description:
          "Reporting clair et régulier, généré automatiquement, que vous commentez plutôt que vous fabriquez.",
      },
    ],
    outils: [
      { nom: 'Bexio', usage: "Lecture et pré-imputation des écritures, rapprochement des pièces." },
      { nom: 'Crésus', usage: "Automatisation de la saisie et préparation des décomptes." },
      { nom: 'Winbiz', usage: "Connexion des flux de documents et synchronisation des données." },
      { nom: 'Abacus', usage: "Intégration pour les fiduciaires structurées, remontée d'indicateurs." },
      { nom: 'Outlook / Gmail', usage: "Tri des pièces reçues, relances clients, réponses de premier niveau." },
      { nom: 'Portails clients', usage: "Récupération et classement automatiques des justificatifs déposés." },
    ],
    pourQui: [
      "Fiduciaires et experts-comptables romands, de l'indépendant à la structure de 20 personnes.",
      "Cabinets qui veulent déplacer du temps de la saisie vers le conseil.",
      "Structures qui traitent des données sensibles et exigent une conformité nLPD réelle.",
    ],
    pasPourQui: [
      "Ceux qui cherchent à remplacer leurs comptables — l'IA assiste, la validation reste humaine et réglementée.",
      "Ceux qui veulent « un ChatGPT » branché sur tout sans cadrage des données.",
      "Les cabinets non prêts à revoir un minimum leurs process (l'outil seul ne suffit jamais).",
    ],
    faqs: [
      {
        question: "L'IA peut-elle vraiment saisir la compta à ma place ?",
        answer:
          "Elle pré-saisit, elle ne valide pas. L'agent lit les pièces, propose l'imputation et rattache au bon compte ; votre comptable contrôle et valide. Vous gagnez le temps de la saisie mécanique, pas la responsabilité professionnelle — qui reste chez un humain, comme l'exige le métier.",
      },
      {
        question: "Nos données clients sont confidentielles. Où vont-elles ?",
        answer:
          "C'est le point de départ du cadrage. On définit ce qui peut sortir, ce qui doit rester chez vous, et on choisit l'hébergement en conséquence (Suisse ou UE, jamais un service qui réentraîne ses modèles sur vos pièces). Pour une fiduciaire, on travaille souvent avec des modèles hébergés en Europe et une règle simple : aucune donnée sensible ne transite sans accord explicite.",
      },
      {
        question: "On utilise Bexio / Crésus. C'est compatible ?",
        answer:
          "Oui, ce sont justement les outils sur lesquels je travaille le plus avec les fiduciaires romandes. L'idée n'est pas de les remplacer mais d'y brancher l'IA pour la lecture des pièces, la pré-imputation et les relances. Si une intégration n'est pas propre, je le dis avant de commencer plutôt qu'après.",
      },
      {
        question: "Combien coûte un projet IA pour une fiduciaire ?",
        answer:
          "Je donne des chiffres. Un cadrage et un premier agent (tri et pré-imputation des pièces, relances) démarrent autour de CHF 2'500 à 4'000. Un agent intégré à vos outils métier se situe généralement entre CHF 6'000 et 15'000 selon la complexité. Vous recevez un devis chiffré avant de vous engager.",
      },
      {
        question: "On est une petite structure, ça vaut le coup ?",
        answer:
          "Souvent oui, parce que ce sont les petites structures qui subissent le plus les pics de bouclement et n'ont personne pour absorber la saisie. Un agent bien ciblé sur une ou deux tâches récurrentes se rentabilise vite. On commence petit, on étend selon ce qui marche.",
      },
      {
        question: "Combien de temps pour mettre ça en place ?",
        answer:
          "Un premier agent utile en production en deux à trois semaines, sur une tâche précise. On l'étend ensuite. L'objectif est un gain rapide, pas un chantier de six mois.",
      },
      {
        question: "Faut-il des compétences techniques en interne ?",
        answer:
          "Non. Je conçois, j'intègre et je pose les garde-fous, puis je forme votre équipe à l'usage quotidien. Vous pilotez un outil qui tourne, sans avoir à comprendre sa mécanique.",
      },
    ],
    preuves: [
      "Audit de plus de 50 sites et process d'entreprises romandes.",
      "Position #1 obtenue en 5 mois sur un cas client (référencement local).",
      "Prestataire unique : IA, intégration, site et SEO — pas trois interlocuteurs à coordonner.",
      "Basé à Chêne-Bougeries, facturation en CHF, conformité nLPD maîtrisée.",
    ],
    articlesConnexes: [
      {
        title: "Agent IA en entreprise : 10 cas d'usage qui rapportent",
        description: "Les automatisations IA qui dégagent vraiment du temps en PME, secteur par secteur.",
        href: "/blog/agent-ia-entreprise-cas-usage",
        icon: "ri-robot-2-line",
      },
      {
        title: "IA et nLPD : automatiser en conformité en Suisse",
        description: "Où vont vos données, quel hébergement, ce qui peut sortir de chez vous — et ce qui doit rester.",
        href: "/blog/ia-nlpd-conformite-suisse",
        icon: "ri-shield-check-line",
      },
      {
        title: "Prix d'un agent IA et d'une automatisation en Suisse",
        description: "Les fourchettes réelles en CHF selon la complexité, sans devis flou.",
        href: "/blog/prix-agent-ia-automatisation-suisse",
        icon: "ri-money-cny-circle-line",
      },
    ],
  },
  {
    slug: 'ia-agence-immobiliere',
    metier: 'Agence immobilière',
    h1: "IA pour agences immobilières et régies en Suisse romande",
    title: "IA pour agence immobilière romande",
    metaDescription:
      "IA et automatisation pour agences immobilières et régies romandes : qualification des leads, annonces, tri des dossiers locataires, relances. Prix en CHF.",
    motCleSEO: 'IA agence immobilière',
    heroBadge: 'Agences immobilières & régies',
    accroche:
      "Entre les demandes de visite, les dossiers de candidature à trier et les annonces à rédiger, vos courtiers passent plus de temps sur l'administratif que sur la vente. L'IA reprend le répétitif ; vos équipes gardent la relation.",
    preuveLocale: 'Basé à Genève · facturation CHF · un seul interlocuteur',
    fluxRemontent: [
      "Les demandes de visite et de renseignement qualifiées et priorisées avant que le courtier n'ouvre sa boîte mail.",
      "Les dossiers de candidature locataire pré-triés selon vos critères, les incomplets relancés automatiquement.",
      "Les annonces rédigées à partir des caractéristiques du bien, prêtes à relire et publier.",
      "Les relances de mandats, de baux à échéance et de documents manquants, déclenchées au bon moment.",
    ],
    pains: [
      "Des courtiers qui répondent cent fois aux mêmes questions (disponibilité, loyer, visite) au lieu de vendre et louer.",
      "Un tri manuel des dossiers de candidature qui prend des heures et laisse passer les meilleurs profils.",
      "Des annonces rédigées à la va-vite ou copiées-collées, peu vendeuses et mal référencées.",
      "Des logiciels de gérance (Garaio REM, ImmoTop, Realadmin) qui gèrent les données mais pas la communication.",
      "Des leads qui refroidissent parce que personne n'a répondu assez vite.",
      "Des relances (baux, régie, documents) suivies dans la tête des gens ou dans un tableur.",
    ],
    casUsage: [
      {
        titre: "Qualification et réponse aux leads",
        description:
          "Un agent répond instantanément aux demandes (portails, site, e-mail), qualifie le besoin (achat/location, budget, délai) et route vers le bon courtier, 24h/24.",
      },
      {
        titre: "Tri des dossiers de candidature",
        description:
          "L'agent lit les dossiers locataires, vérifie la complétude (pièces, garanties, ratio loyer/revenu) et vous présente une short-list classée selon vos critères, sans lecture manuelle.",
      },
      {
        titre: "Rédaction d'annonces",
        description:
          "Génération d'annonces vendeuses à partir des caractéristiques du bien, déclinées par canal (portail, réseaux, site), avec le ton de votre agence.",
      },
      {
        titre: "Relance des documents manquants",
        description:
          "Détection des dossiers incomplets et relance automatique des candidats ou propriétaires pour obtenir les pièces, sans suivi manuel.",
      },
      {
        titre: "Réponses locataires de premier niveau",
        description:
          "Traitement des demandes courantes (sinistre, préavis, état des lieux, décompte de charges) avec escalade vers le gérant pour les cas non standard.",
      },
      {
        titre: "Préparation des états des lieux et baux",
        description:
          "Pré-remplissage des documents à partir des données du dossier et génération des courriers types, pour que le gérant relise au lieu de tout rédiger.",
      },
      {
        titre: "Suivi des échéances",
        description:
          "Un agent surveille les baux à échéance, les mandats et les renouvellements et vous alerte à temps, avec le courrier ou la relance déjà préparés.",
      },
      {
        titre: "Veille et estimation assistée",
        description:
          "Compilation des données de marché comparables pour préparer une estimation ou un argumentaire de mandat, que le courtier ajuste.",
      },
    ],
    parcoursLabel: "Le cycle d'un mandat immobilier",
    parcours: [
      {
        etape: "Captation du lead",
        description:
          "Une demande arrive d'un portail ou du site. L'IA répond, qualifie et route immédiatement vers le bon courtier.",
      },
      {
        etape: "Mise en marché",
        description:
          "Rédaction de l'annonce, déclinaison multicanale, réponses aux premières questions automatisées.",
      },
      {
        etape: "Sélection des candidats",
        description:
          "Tri et vérification des dossiers, short-list classée, relance des pièces manquantes.",
      },
      {
        etape: "Contractualisation",
        description:
          "Pré-remplissage du bail ou du compromis, courriers types, échéances suivies.",
      },
      {
        etape: "Gestion courante",
        description:
          "Réponses locataires de premier niveau, suivi des baux et relances, escalade humaine quand il faut.",
      },
    ],
    outils: [
      { nom: 'Garaio REM', usage: "Connexion aux données de gérance, remontée des échéances et documents." },
      { nom: 'ImmoTop', usage: "Synchronisation des mandats et des dossiers, préparation des courriers." },
      { nom: 'Realadmin', usage: "Intégration des flux de gestion et automatisation des relances." },
      { nom: 'Homegate / ImmoScout24', usage: "Captation et qualification des leads entrants." },
      { nom: 'Outlook / Gmail', usage: "Réponses de premier niveau, relances, tri des demandes." },
      { nom: 'CRM immobilier', usage: "Routage des leads vers le bon courtier, historique de la relation." },
    ],
    pourQui: [
      "Agences immobilières et régies romandes, de l'agence de quartier au groupe multi-sites.",
      "Courtiers indépendants qui veulent répondre vite sans embaucher un assistant.",
      "Régies qui veulent désengorger la gestion locative des demandes répétitives.",
    ],
    pasPourQui: [
      "Ceux qui espèrent automatiser la relation client de bout en bout — l'humain reste au cœur de la vente.",
      "Ceux qui veulent un outil magique sans revoir un minimum leurs process.",
      "Les structures qui ne veulent pas cadrer l'usage des données candidats (nLPD / RGPD).",
    ],
    faqs: [
      {
        question: "L'IA va-t-elle répondre à mes clients à ma place ?",
        answer:
          "Sur le premier niveau, oui : disponibilité, loyer, prise de rendez-vous, questions récurrentes. Dès qu'un échange demande du jugement — négociation, visite, conseil — c'est votre courtier qui prend la main. L'agent trie et prépare ; il ne remplace pas la relation, il vous libère du répétitif pour vous y consacrer.",
      },
      {
        question: "Comment l'IA trie les dossiers sans discriminer ?",
        answer:
          "On cadre les critères avec vous, et ce sont des critères objectifs et légaux (complétude du dossier, garanties, ratio loyer/revenu). L'agent vérifie et classe selon ces règles ; il n'invente pas de critère. La décision finale reste humaine, et on documente la logique pour rester conforme.",
      },
      {
        question: "On utilise Garaio REM / ImmoTop. C'est compatible ?",
        answer:
          "Oui, ce sont les logiciels de gérance que je rencontre le plus en Suisse romande. On y branche l'IA pour la communication, le tri et les relances plutôt que de les remplacer. Si une intégration n'est pas propre, je le dis avant de commencer.",
      },
      {
        question: "Combien coûte un projet IA pour une agence ?",
        answer:
          "Je donne des chiffres. Un cadrage et un premier agent (qualification des leads, tri des dossiers) démarrent autour de CHF 2'500 à 4'000. Un agent intégré à votre logiciel de gérance se situe généralement entre CHF 6'000 et 15'000 selon la complexité. Devis chiffré avant engagement.",
      },
      {
        question: "Nos leads viennent de plusieurs portails. On peut tout centraliser ?",
        answer:
          "Oui, c'est même un des gains les plus rapides : l'agent capte les demandes de vos différents canaux, les qualifie de façon homogène et les route vers le bon courtier, pour qu'aucun lead ne refroidisse faute de réponse.",
      },
      {
        question: "En combien de temps c'est opérationnel ?",
        answer:
          "Un premier agent utile en production en deux à trois semaines, sur une tâche précise (souvent la qualification des leads). On l'étend ensuite selon ce qui marche.",
      },
      {
        question: "Faut-il une compétence technique dans l'agence ?",
        answer:
          "Non. Je conçois, j'intègre et je pose les garde-fous, puis je forme vos courtiers et gérants à l'usage. Vous pilotez un outil qui tourne.",
      },
    ],
    preuves: [
      "Audit de plus de 50 sites et process d'entreprises romandes.",
      "Position #1 obtenue en 5 mois sur un cas client (référencement local).",
      "Prestataire unique : IA, intégration, site et SEO — un seul interlocuteur.",
      "Basé à Genève, facturation en CHF, conformité des données maîtrisée.",
    ],
    articlesConnexes: [
      {
        title: "Agent IA en entreprise : 10 cas d'usage qui rapportent",
        description: "Les automatisations IA qui dégagent vraiment du temps en PME, secteur par secteur.",
        href: "/blog/agent-ia-entreprise-cas-usage",
        icon: "ri-robot-2-line",
      },
      {
        title: "Prix d'un agent IA et d'une automatisation en Suisse",
        description: "Les fourchettes réelles en CHF selon la complexité, sans devis flou.",
        href: "/blog/prix-agent-ia-automatisation-suisse",
        icon: "ri-money-cny-circle-line",
      },
      {
        title: "Automatisation PME en Suisse : le guide complet",
        description: "Par où commencer, quoi automatiser en premier, et ce que ça change concrètement.",
        href: "/blog/automatisation-pme-suisse-guide-complet",
        icon: "ri-book-open-line",
      },
    ],
  },
];

/**
 * Helper : récupérer un métier par son slug
 */
export function getMetierIA(slug: string): MetierIAData | undefined {
  return metiersIA.find((m) => m.slug === slug);
}
