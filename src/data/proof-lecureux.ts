// Source unique de vérité — preuve client Léo Lécureux (SEO local).
// Toute mention publique (hors page portfolio détail) doit dériver d'ici.
// Règle projet : cette preuve va UNIQUEMENT sur les pages SEO / dev
// (referencement-local, developpeur-web-freelance-geneve, about, portfolio).
// JAMAIS sur une page IA / automatisation.
//
// Chiffres = data GSC réelle (sc-domain:lecureux-conseil.ch), fenêtre 5 mois
// sept. 2025 → janv. 2026 : 19 105 impressions · 367 clics · CTR 1,92% · pos. moy. 15,3.
// Le « #1 » est réel mais sur la LONGUE TRAÎNE restauration (patente restaurant,
// créer restaurant, ouvrir son restaurant… tous en pos. 1-3, faible volume) — d'où
// la formulation « #1 sur sa niche ». Ne PAS écrire « Top 1 Google » (pos. moy. réelle 15,3).
// All-time (16 mois) si besoin : 829 clics · 52 923 impressions.

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
  niche: "droit de la restauration",
  duration: "5 mois",
  // Accroche canonique répétée partout (décision Jonathan 2026-07-03, chiffres GSC)
  accrocheShort: "#1 sur sa niche, 19 000 impressions en 5 mois",
  accrocheLong: "De zéro au #1 sur sa niche (droit de la restauration à Genève) : 19 000 impressions et 367 clics organiques en 5 mois",
  rankClaim: "#1 sur sa niche (droit de la restauration)",
  // Résultat business gravé partout (décision Jonathan 2026-07-03)
  businessResult: "10+ leads qualifiés",
  platform: "Framer",
  year: "2025",
  portfolioUrl: "/portfolio/leo-lecureux-seo/",
  // Grille de stats (6 tuiles) — miroir du frontmatter portfolio, chiffres GSC réels
  stats: [
    { value: "#1", label: "Sur sa niche", icon: "ri-trophy-line" },
    { value: "19k", label: "Impressions", icon: "ri-eye-line" },
    { value: "367", label: "Clics organiques", icon: "ri-cursor-line" },
    { value: "1.9%", label: "CTR moyen", icon: "ri-percent-line" },
    { value: "10+", label: "Leads qualifiés", icon: "ri-user-add-line" },
    { value: "100/100", label: "Score SEO", icon: "ri-speed-line" },
  ] as ProofStat[],
} as const;
