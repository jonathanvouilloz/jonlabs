export const statuses = {
  live: { name: 'Live', dotClass: 'bg-green-500' },
  'en-cours': { name: 'En cours', dotClass: 'bg-amber-500' },
  archive: { name: 'Archivé', dotClass: 'bg-gray-400' },
} as const;

export const categories = {
  app: { name: 'App', icon: 'ri-smartphone-line' },
  jeux: { name: 'Jeux', icon: 'ri-gamepad-line' },
  photo: { name: 'Photo', icon: 'ri-camera-line' },
  experiment: { name: 'Experiment', icon: 'ri-flask-line' },
} as const;

export type StatusKey = keyof typeof statuses;
export type CategoryKey = keyof typeof categories;

export function getStatusInfo(key: StatusKey) {
  return statuses[key] || statuses.archive;
}

export function getCategoryInfo(key: CategoryKey) {
  return categories[key] || categories.experiment;
}
