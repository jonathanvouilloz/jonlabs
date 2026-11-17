// Données partagées de la v2 (home /v2 + /v2/styleguide). Copy = placeholders du spike.
import { author } from '../sample';

export const WHATSAPP = '41789447707';

export const nav: { label: string; href: string; mega?: string; iso?: string }[] = [
  // mega = section de mainNav (data/navigation.ts) affichée en carte flottante ; iso = figure Hairline de l'encart.
  { label: 'Systèmes IA', href: '/services', mega: 'IA & Automatisation', iso: 'terminal' },
  { label: 'Réalisations', href: '/portfolio' },
  { label: 'Blog', href: '/blog', mega: 'Articles', iso: 'laptop' },
  { label: 'À propos', href: '/about' },
];

export const steps = ['Appel découverte', 'Cartographie des tâches', 'Prototype', 'Construction', 'Mise en production', 'Suivi'];

export const promises = [
  { iso: 'relay', title: 'Ce que je fais pour vous', items: ['Choisir les tâches à confier à l\'IA', 'Construire agents et apps sur mesure', 'Les brancher sur vos outils', 'Former votre équipe'] },
  { iso: 'patch', title: 'Les outils que j\'utilise', tools: ['Claude', 'OpenAI', 'Hermes', 'Supabase', 'PostgreSQL', 'Python', 'Astro', 'Vercel'] },
  { iso: 'padlock', title: 'Ce que vous pouvez attendre', items: ['Un pilote en production en quelques semaines', 'Vos données sous contrôle', 'Un code qui vous appartient'] },
];

export const builds = [
  { iso: 'terminal', title: 'Agents IA', text: 'Ils lisent, trient, répondent. Vous validez.', big: true },
  { iso: 'laptop', title: 'Applications IA', text: 'Un outil métier taillé pour votre équipe.' },
  { iso: 'slow', title: 'Automatisations', text: 'Les tâches répétitives disparaissent.' },
  { iso: 'plug', title: 'Branché sur vos outils', text: 'Gmail, CRM, Notion, votre ERP.' },
];

export const faqs = [
  { q: 'Combien coûte un système IA ?', a: 'Dès CHF X. Le prix exact sort de l\'appel de cadrage.' },
  { q: 'Combien de temps pour un premier système ?', a: 'Un pilote tourne en 2 à 4 semaines.' },
  { q: 'Mes données restent-elles en Suisse ?', a: 'Hébergement suisse possible, conforme nLPD.' },
  { q: 'Et si je n\'ai aucune compétence technique ?', a: 'C\'est le cas de la plupart de mes clients.' },
  { q: 'Que se passe-t-il après la mise en production ?', a: 'Je reste disponible pour ajuster et faire évoluer le système.' },
];

export const socials = [
  { k: 'Me suivre', icon: 'ri-linkedin-box-fill', l: 'LinkedIn', href: author.linkedin },
  { k: 'Me suivre', icon: 'ri-twitter-x-line', l: 'X / Twitter', href: 'https://x.com/jonvolio' },
  { k: 'Mes vidéos', icon: 'ri-youtube-fill', l: 'YouTube', href: author.youtube },
  { k: 'Mes essais', icon: 'ri-quill-pen-line', l: 'Substack', href: author.substack },
];

// Une phrase par étape (essai C du process, styleguide). Même ordre que `steps`.
export const stepDetails = [
  'On parle de votre activité et des tâches qui vous prennent le plus de temps.',
  'On liste ce qui se répète, ce qu\'on confie à l\'IA et ce qui reste humain.',
  'Une première version tourne sur vos vraies données. Vous jugez sur pièce.',
  'Le système complet, branché sur vos outils, testé avec votre équipe.',
  'Mise en service, accès, documentation et prise en main par l\'équipe.',
  'Ajustements, nouvelles tâches, et un point régulier sur ce qui tourne.',
];

// Accueil du rebrand tant que la v2 vit sur /v2 (passera à '/' à la bascule).
export const HOME = '/v2';

// ⚠️ PLACEHOLDER (lorem) : aucun vrai témoignage collecté. À remplacer avant toute mise en production, ne rien inventer.
export const testimonials = [
  { quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: 'Prénom Nom', role: 'Directrice', company: 'Entreprise A', result: '−12 h / semaine' },
  { quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', name: 'Prénom Nom', role: 'Fondateur', company: 'Entreprise B', result: 'Pilote en 3 semaines' },
  { quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.', name: 'Prénom Nom', role: 'Responsable admin', company: 'Entreprise C', result: '0 mail oublié' },
  { quote: 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.', name: 'Prénom Nom', role: 'Associé', company: 'Entreprise D', result: '×3 devis traités' },
];
