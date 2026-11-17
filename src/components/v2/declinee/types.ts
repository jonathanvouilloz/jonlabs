// Contrat du gabarit « page déclinée » (ville ou métier). Chaque route mappe sa source
// (villes-suisse-ia, villes-mobile, metiers-ia) vers cette forme ; le gabarit ne lit aucune donnée lui-même.

export interface DcItem {
  /** petite ligne mono au-dessus (secteur, numéro…) */
  k?: string;
  t?: string;
  d?: string;
  list?: string[];
}

export type DcSection =
  /** titre collant à gauche | texte + liste à puces à droite */
  | { kind: 'prose'; id?: string; title: string; dim?: string; meta?: string; paras: string[]; listTitle?: string; list?: string[] }
  /** en-tête (titre | phrase) + grille de cellules bord à bord */
  | { kind: 'cells'; id?: string; title: string; dim?: string; intro?: string; items: DcItem[]; cols?: 2 | 3 | 4 };

export interface DcLink {
  href: string;
  k: string;
  t: string;
  d?: string;
}

export interface DcPage {
  /** chemin absolu, ex. /consultant-ia/lausanne */
  path: string;
  title: string;
  description: string;
  /** fil d'Ariane visible ET schéma BreadcrumbList (la page courante en dernier) */
  crumbs: { name: string; path: string }[];
  meta: string;
  h1: string;
  /** suite du H1, en gris sur une 2e ligne (le texte du H1 reste continu) */
  h1Dim?: string;
  lead: string;
  trust: string[];
  price?: { label: string; value: string };
  ctaLabel: string;
  sections: DcSection[];
  faqs: { question: string; answer: string }[];
  links: DcLink[];
  cta: { title: string; dim?: string; text: string };
  /** schémas en plus de WebPage / BreadcrumbList / FAQPage (Service, LocalBusiness…) */
  schemas: any[];
}
