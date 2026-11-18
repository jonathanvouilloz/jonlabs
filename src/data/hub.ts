// Hub de la home v2 : contenus choisis à la main (pas d'API — X est payant, le flux RSS YouTube répond 404).
// shortcut: liste manuelle, à remplacer par un fetch au build si la mise à jour devient pénible.

export const videos = [
  { id: 'mYakiXsKi1o', title: "On teste OpenBot, l'agent IA qui révolutionne le game ?" },
  { id: 'tOxjgPTTYeE', title: 'Assistant IA qui réponds à TOUT vos emails et formulaires - Hermes Agent' },
  { id: '6AciFifIfRk', title: 'Arrête de faire ton SEO à la main (voilà mon système agents IA complet)' },
  { id: 'Z2R60BWDBlY', title: 'Hack Google Discover, seo/aso mobile app, on discute' },
];

// Tweets choisis par Jonathan (2026-11-17) : accroche seulement, la case renvoie au tweet complet.
export const tweets = [
  { text: 'Le plus gros gaspillage de tokens quand on dev avec l\'IA, c\'est rarement le code généré. C\'est le temps que ton IA passe à comprendre le code qu\'elle a écrit 2 jours plus tôt.', url: 'https://x.com/jonvolio/status/2118995969408647257' },
  { text: 'On se complique beaucoup trop la vie quand on veut intégrer de l\'IA dans nos apps. Parfois, 5 bonnes fonctions valent mieux qu\'un agent avec 50 outils.', url: 'https://x.com/jonvolio/status/2118690309383029139' },
];

// Pas de post LinkedIn pour l'instant : la home affiche un 2e article du blog. Ajouter ici { text, url } quand il y en a un.
export const linkedinPost: { text: string; url: string } | null = null;
