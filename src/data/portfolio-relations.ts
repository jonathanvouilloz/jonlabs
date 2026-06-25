// Source de vérité du maillage portfolio → pilier service.
// Chaque fiche pointe vers l'offre qu'elle illustre (lien sortant sur la fiche)
// et reçoit en retour un lien contextuel depuis le pilier service correspondant.
// Pattern DRY (cf. villes-frontalieres.ts) : une seule liste, jamais dupliquée en dur.

export interface ServiceLink {
  label: string;
  href: string;
}

export const portfolioServiceLinks: Record<string, ServiceLink> = {
  'leo-lecureux-seo': { label: 'Référencement local', href: '/services/referencement-local' },
  'physio-pommier': { label: 'Création de site web', href: '/services/creation-site-web' },
  'barber-concept': { label: 'Développeur Webflow', href: '/services/developpeur-webflow' },
  'ugo-mighali-coutelier': { label: 'Création de site web', href: '/services/creation-site-web' },
  'isla-plomo': { label: 'Application mobile', href: '/services/developpement-application-mobile' },
  'wisp': { label: 'Développement MVP', href: '/services/developpement-mvp' },
};
