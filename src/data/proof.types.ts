// ─────────────────────────────────────────────────────────────────────────
// TEMPLATE — Preuve client (source unique de vérité, 1 fichier par client)
// ─────────────────────────────────────────────────────────────────────────
//
// Convention projet :
//   • 1 client = 1 fichier `src/data/proof-<slug>.ts` (ex. proof-lecureux.ts).
//   • Chaque fichier exporte un objet typé `ClientProof` — la forme est
//     garantie par ce type (un champ manquant = erreur TS / `astro check`).
//   • Toute mention publique du client (portfolio, page service, about, le
//     vrai site) DÉRIVE de ce fichier. On ne réécrit JAMAIS un chiffre ou une
//     citation ailleurs en dur → mécanisme anti-dérive.
//   • Chiffres = data réelle (GSC, analytics…), jamais gonflés. Documenter la
//     source en tête du fichier client (fenêtre, propriété, valeurs brutes).
//   • `testimonial` = témoignage réel fourni par le client, intégré tel quel
//     (jamais reformulé). `null` si le client n'en a pas encore donné.
//
// Pour un nouveau client, copier ce squelette dans proof-<slug>.ts :
//
//   import type { ClientProof } from "./proof.types";
//   export const proofXxx: ClientProof = {
//     name: "", company: "", metier: "", metierShort: "", niche: "",
//     duration: "", accrocheShort: "", accrocheLong: "", rankClaim: "",
//     businessResult: "", platform: "", year: "", portfolioUrl: "",
//     stats: [{ value: "", label: "", icon: "ri-…" }],
//     testimonial: null, // ou { quote: "", author: "", role: "" }
//   };
//
// Ce fichier de types est volontairement autonome (aucune dépendance) — il se
// copie tel quel dans un futur projet de site pour y réutiliser le pattern.
// ─────────────────────────────────────────────────────────────────────────

/** Une tuile de stat chiffrée (grille de preuve). `icon` = classe Remix Icon. */
export interface ProofStat {
  value: string;
  label: string;
  icon: string;
}

/** Témoignage client réel — intégré tel quel, jamais reformulé. */
export interface ClientTestimonial {
  /** Texte exact du client (peut contenir des `\n\n` = paragraphes). */
  quote: string;
  /** Nom affiché en attribution. */
  author: string;
  /** Ligne de contexte sous le nom (entreprise · métier · lieu). */
  role: string;
}

/** Preuve complète d'un client. Une instance par fichier proof-<slug>.ts. */
export interface ClientProof {
  name: string;
  company: string;
  /** Métier détaillé (phrase). */
  metier: string;
  /** Métier condensé (méta / fiche technique). */
  metierShort: string;
  /** Niche ciblée. */
  niche: string;
  /** Fenêtre de mesure des chiffres (ex. "5 mois"). */
  duration: string;
  /** Accroche courte canonique, répétée partout. */
  accrocheShort: string;
  /** Accroche longue (cas vedette). */
  accrocheLong: string;
  /** Formulation honnête du rang (jamais "Top 1 Google" si non défendable). */
  rankClaim: string;
  /** Résultat business (souvent offline, non vérifiable via analytics). */
  businessResult: string;
  /** Plateforme du site livré. */
  platform: string;
  /** Année de livraison. */
  year: string;
  /** Lien vers l'étude de cas détaillée. */
  portfolioUrl: string;
  /** Grille de stats chiffrées (data réelle). */
  stats: ProofStat[];
  /** Témoignage réel, ou `null` si pas encore fourni. */
  testimonial: ClientTestimonial | null;
}
