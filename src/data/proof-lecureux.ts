// Source unique de vérité — preuve client Léo Lécureux (SEO local).
// Toute mention publique (hors page portfolio détail) doit dériver d'ici.
// Règle projet : cette preuve va UNIQUEMENT sur les pages SEO / dev
// (referencement-local, developpeur-web-freelance-geneve, about, portfolio).
// JAMAIS sur une page IA / automatisation.
//
// ⚠️ Clics / CTR à reconfirmer avec la data GSC exacte (cf. plan Phase 5).
// Si Jonathan révise ces chiffres, c'est le seul endroit à éditer.

export interface ProofStat {
  value: string;
  label: string;
  icon: string;
}

export const proofLecureux = {
  name: "Léo Lécureux",
  company: "Lécureux Conseil",
  metier: "juriste spécialisé en droit de la restauration à Genève",
  metierShort: "juriste restauration Genève",
  duration: "5 mois",
  // Accroche canonique répétée partout (décision Jonathan 2026-07-03)
  accrocheShort: "Top 1 Google en 5 mois",
  accrocheLong: "De zéro au Top 1 Google en 5 mois sur « juriste restauration Genève »",
  // Résultat business gravé partout (décision Jonathan 2026-07-03)
  businessResult: "10+ leads qualifiés",
  platform: "Framer",
  year: "2025",
  portfolioUrl: "/portfolio/leo-lecureux-seo/",
  // Grille de stats (6 tuiles) — miroir du frontmatter portfolio
  stats: [
    { value: "#1", label: "Position Google", icon: "ri-trophy-line" },
    { value: "20.4k", label: "Impressions", icon: "ri-eye-line" },
    { value: "485", label: "Clics organiques", icon: "ri-cursor-line" },
    { value: "2.4%", label: "CTR moyen", icon: "ri-percent-line" },
    { value: "10+", label: "Leads qualifiés", icon: "ri-user-add-line" },
    { value: "100/100", label: "Score SEO", icon: "ri-speed-line" },
  ] as ProofStat[],
} as const;
