const byOrder = (modules) => Object.values(modules)
  .map((module) => module.default)
  .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER));

export const publications = byOrder(import.meta.glob('./publications/*.json', { eager: true }));
export const photography = byOrder(import.meta.glob('./photography/*.json', { eager: true }));
export const cocktails = byOrder(import.meta.glob('./cocktails/*.json', { eager: true }));
export const recipes = byOrder(import.meta.glob('./recipes/*.json', { eager: true }));
