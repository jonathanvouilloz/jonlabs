// Hub de la home v2 : contenus choisis à la main (pas d'API — X est payant, le flux RSS YouTube répond 404).
// shortcut: liste manuelle, à remplacer par un fetch au build si la mise à jour devient pénible.

export const videos = [
  { id: 'tOxjgPTTYeE', title: 'Assistant IA qui réponds à TOUT vos emails et formulaires - Hermes Agent' },
  { id: '6AciFifIfRk', title: 'Arrête de faire ton SEO à la main (voilà mon système agents IA complet)' },
  { id: 'Z2R60BWDBlY', title: 'Hack Google Discover, seo/aso mobile app, on discute' },
];

// PLACEHOLDER : textes à remplacer par de vrais tweets choisis par Jon.
export const tweets = [
  { text: '[Tweet à choisir] Un agent qui répond aux emails, c\'est 20% de prompt et 80% de garde-fous.', url: 'https://x.com/jonvolio' },
  { text: '[Tweet à choisir] Ce que j\'ai shippé cette semaine, en une capture.', url: 'https://x.com/jonvolio' },
];

// PLACEHOLDER : post LinkedIn à choisir.
export const linkedinPost = {
  text: '[Post à choisir] Le retour d\'expérience d\'un client sur son premier agent IA en production.',
  url: 'https://www.linkedin.com/in/jonathan-vouilloz-3b5741139/',
};
