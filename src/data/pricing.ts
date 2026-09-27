// Grille tarifaire — SEULE source de vérité des prix affichés sur le site.
// Toute page, carte, FAQ ou schema JSON-LD qui cite un prix lit ce fichier.
// Grille du 27.09.2026 : quatre services (site web, app mobile, SEO local, IA).
// Site web statique (Astro) dès 850, site Webflow dès 950.
// Pas de taux horaire affiché, pas de prix en EUR (pages villes frontalières : devis en CHF).

export const pricing = {
  siteWeb: {
    label: "Développement de site web",
    from: 850,
    display: "Dès CHF 850",
    note: "Devis sur demande",
    // Site statique sur mesure (Astro)
  },
  webflow: {
    label: "Site Webflow",
    from: 950,
    display: "Dès CHF 950",
    note: "Devis sur demande",
  },
  appMobile: {
    label: "Application mobile",
    from: null,
    display: "Sur devis",
    note: "Devis sur demande",
  },
  seoLocal: {
    label: "Référencement local (site + fiche Google)",
    setup: 390,
    monthly: 199,
    display: "CHF 390 + 199/mois",
    note: "Setup initial CHF 390, puis suivi CHF 199/mois, sans engagement",
    // Contenu du suivi mensuel (affiché sur /tarifs, /services/referencement-local, hub /services)
    monthlyIncludes: [
      "Suivi des positions SEO",
      "Publication automatisée de posts sur la fiche Google",
      "Réponses aux avis",
      "Ajustements du site et du contenu local",
      "Rapport mensuel des évolutions",
    ],
  },
  agentIA: {
    label: "Agent IA Hermès pour entreprise",
    from: 1500,
    display: "Dès CHF 1'500",
    note: "Sur devis",
    // Coût de fonctionnement payé directement par le client (hébergement Infomaniak + API du modèle)
    runningCost: "CHF 10 – 40 / mois",
  },
  formationIA: {
    label: "Formation IA (entreprise ou particulier)",
    from: null,
    display: "Sur devis",
    note: "Devis sur mesure",
  },
} as const;

// Conditions communes
export const terms = {
  payment: "20 % à la commande, 80 % à la livraison",
  commitment: "Aucun contrat de durée : le suivi mensuel se résilie d'un mois à l'autre",
};

/** Formate un montant CHF à la suisse : 1500 → "1'500". */
export function chf(n: number): string {
  return n.toLocaleString("de-CH").replace(/’/g, "'");
}
