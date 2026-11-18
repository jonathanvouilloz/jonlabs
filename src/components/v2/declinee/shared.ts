// Blocs communs aux pages déclinées du silo IA (villes + métiers). Copy reprise de l'ancien /metiers/[metier].
import type { DcItem, DcLink } from './types';
import { metiersIA } from '../../../data/metiers-ia';

export const methodeIA: DcItem[] = [
  { k: '01', t: 'Audit', d: "On regarde vos process réels et on repère les 2-3 tâches qui mangent le plus de temps. Pas de promesse en l'air : je vous dis franchement où l'IA aide et où elle n'apporte rien." },
  { k: '02', t: 'Prototype', d: "Je conçois un agent ciblé sur une tâche précise et je l'intègre à vos outils. Un premier résultat en production en deux à trois semaines, pas un chantier de six mois." },
  { k: '03', t: 'Garde-fous', d: "Validation humaine sur ce qui l'exige, cadrage des données (ce qui sort, ce qui reste chez vous), hébergement conforme. L'agent ne décide pas à votre place." },
  { k: '04', t: 'Prise en main', d: "Je forme votre équipe à l'usage quotidien. L'objectif n'est jamais de vous rendre dépendant : c'est de vous donner un outil qui tourne et que vous pilotez." },
];

export const piliersIA: DcLink[] = [
  { href: '/consultant-ia', k: 'Page pilier', t: 'Consultant IA en Suisse romande', d: "Méthode, types d'agents, conformité des données et tarifs." },
  { href: '/hermes', k: 'Offre', t: 'Agent IA Hermès', d: "Un agent branché sur vos outils, vous validez avant chaque envoi." },
  { href: '/guides/mettre-en-place-ia-entreprise-guide', k: 'Guide', t: "Mettre l'IA en place dans votre entreprise", d: 'Étapes, coûts en CHF, outils et adoption par l\'équipe.' },
];

export const metiersLinks = (except?: string): DcLink[] =>
  metiersIA.filter((m) => m.slug !== except).map((m) => ({ href: `/metiers/${m.slug}`, k: 'Métier', t: m.title, d: m.heroBadge }));
