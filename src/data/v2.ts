// Données partagées de la v2 (home /v2 + /v2/styleguide). Copy validée par Jonathan le 2026-11-17 (interview home).
import { author } from '../sample';

export const WHATSAPP = '41789447707';

export const nav: { label: string; href: string; mega?: string; iso?: string }[] = [
  // mega = section de mainNav (data/navigation.ts) affichée en carte flottante ; iso = figure Hairline de l'encart.
  { label: 'Systèmes IA', href: '/services', mega: 'IA & Automatisation', iso: 'terminal' },
  { label: 'Réalisations', href: '/portfolio' },
  { label: 'Blog', href: '/blog', mega: 'Articles', iso: 'laptop' },
  { label: 'À propos', href: '/about' },
];

export const steps = ['Appel découverte', 'Audit et cartographie', 'Développement', 'Mise en production', 'Suivi, support et conseil'];

export const promises = [
  { iso: 'relay', title: 'Ce que je fais pour vous', items: ['Choisir les tâches à confier à l\'IA', 'Construire agents et apps sur mesure', 'Les brancher sur vos outils', 'Former votre équipe'] },
  { iso: 'patch', title: 'Ce que vous gagnez', items: ['Du temps rendu à votre équipe', 'Moins d\'erreurs de saisie et d\'oublis', 'Des demandes traitées même quand vous n\'êtes pas là', 'Une équipe sur le travail à valeur ajoutée'] },
  { iso: 'padlock', title: 'Ce que vous pouvez attendre', items: ['Un système livré en 2 à 4 semaines selon le projet', 'Vos données sous contrôle', 'Un code qui vous appartient'] },
];

export const builds = [
  { iso: 'laptop', title: 'Applications sur mesure', text: 'Un outil métier taillé pour votre équipe et vos agents IA.', big: true },
  { iso: 'terminal', title: 'Agents IA', text: 'Ils lisent, trient, répondent. Vous validez.' },
  { iso: 'slow', title: 'Automatisations', text: 'Les tâches répétitives disparaissent.' },
  { iso: 'phone', title: 'Applications mobiles', text: 'iPhone et Android, pour vos clients ou vos équipes.' },
];

export const faqs = [
  { q: 'Combien coûte un système IA ?', a: 'La mise en place démarre à CHF 1\'500. Ensuite, l\'hébergement coûte dès CHF 15 par mois, selon les fonctionnalités. Le prix exact sort de l\'appel découverte.' },
  { q: 'Combien de temps pour un premier système ?', a: 'Entre 2 et 4 semaines selon le type de projet, du premier appel à un système en production.' },
  { q: 'Mes données restent-elles en Suisse ?', a: 'Si vous le souhaitez, oui : hébergement en Suisse, conforme à la nLPD. Et si vous ne voulez pas que vos données servent à entraîner les modèles, je choisis une configuration qui l\'exclut. Je m\'adapte à votre besoin.' },
  { q: 'Est-ce que l\'IA va remplacer mes employés ?', a: 'Non. Les agents prennent le répétitif : trier, copier, relancer. Vos équipes gardent le travail à valeur ajoutée : décider, conseiller, s\'occuper des clients.' },
  { q: 'Et si l\'IA se trompe ?', a: 'Elle propose, vous validez. Les actions sensibles, comme un envoi, un paiement ou une modification de données, passent par une validation humaine ou des règles fixes. L\'IA ne décide jamais seule de ce qui compte.' },
  { q: 'Et si je n\'ai aucune compétence technique ?', a: 'C\'est le cas de la plupart de mes clients. Vous n\'avez rien à configurer : je construis, je mets en production et je vous montre comment l\'utiliser.' },
  { q: 'Que se passe-t-il après la mise en production ?', a: 'Je reste là pour le suivi, le support et le conseil : ajustements, nouvelles tâches à confier, et un point régulier. Aucun contrat de durée.' },
];

export const socials = [
  { k: 'Me suivre', icon: 'ri-linkedin-box-fill', l: 'LinkedIn', href: author.linkedin },
  { k: 'Me suivre', icon: 'ri-twitter-x-line', l: 'X / Twitter', href: 'https://x.com/jonvolio' },
  { k: 'Mes vidéos', icon: 'ri-youtube-fill', l: 'YouTube', href: author.youtube },
];

// Une phrase par étape (essai C du process, styleguide). Même ordre que `steps`.
export const stepDetails = [
  'On parle de votre activité et des tâches qui vous prennent le plus de temps.',
  'Je passe en revue vos processus et je liste ce qui se répète, ce qu\'on confie à l\'IA et ce qui reste humain.',
  'Je construis le système sur mesure, branché sur vos outils, et je le teste avec votre équipe.',
  'Le système tourne pour de vrai, avec accès, documentation et prise en main par l\'équipe.',
  'Ajustements, nouvelles tâches à confier, et un point régulier sur ce qui tourne.',
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
