import fs from 'node:fs';
import path from 'node:path';

const [
  photosPath = 'src/data/content/photography',
  stocksPath = 'src/data/content/film-stocks',
  configPath = '.pages.yml',
] = process.argv.slice(2);
const photosDirectory = path.resolve(photosPath);
const stocksDirectory = path.resolve(stocksPath);
const configFile = path.resolve(configPath);

fs.mkdirSync(stocksDirectory, { recursive: true });

const readJson = (filename) => JSON.parse(fs.readFileSync(filename, 'utf8'));
const writeJson = (filename, data) => {
  fs.writeFileSync(filename, `${JSON.stringify(data, null, 2)}\n`);
};

const normalizeName = (value) => String(value || '').trim().replace(/\s+/g, ' ');
const lookupKey = (value) => normalizeName(value).toLocaleLowerCase('en-US');
const slugify = (value) => normalizeName(value)
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('en-US')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '') || 'film-stock';

const stockFiles = fs.readdirSync(stocksDirectory).filter((name) => name.endsWith('.json'));
const stocksByName = new Map();
const usedIds = new Set();

for (const filename of stockFiles) {
  const data = readJson(path.join(stocksDirectory, filename));
  const name = normalizeName(data.name);
  const id = normalizeName(data.id) || path.basename(filename, '.json');
  if (name) stocksByName.set(lookupKey(name), { id, name });
  usedIds.add(id);
}

let created = 0;
let updatedPhotos = 0;

function ensureStock(name) {
  const normalized = normalizeName(name);
  if (!normalized) return '';

  const key = lookupKey(normalized);
  const existing = stocksByName.get(key);
  if (existing) return existing.name;

  const baseId = slugify(normalized);
  let id = baseId;
  let suffix = 2;
  while (usedIds.has(id) || fs.existsSync(path.join(stocksDirectory, `${id}.json`))) {
    id = `${baseId}-${suffix++}`;
  }

  writeJson(path.join(stocksDirectory, `${id}.json`), { id, name: normalized });
  stocksByName.set(key, { id, name: normalized });
  usedIds.add(id);
  created++;
  return normalized;
}

const photoFiles = fs.readdirSync(photosDirectory).filter((name) => name.endsWith('.json'));

for (const filename of photoFiles) {
  const fullPath = path.join(photosDirectory, filename);
  const data = readJson(fullPath);
  let photoChanged = false;

  // Existing values seed the reusable dropdown, including legacy entries.
  if (normalizeName(data.filmStock)) ensureStock(data.filmStock);

  const newStock = normalizeName(data.newFilmStock);
  if (!newStock) {
    if (Object.hasOwn(data, 'newFilmStock')) {
      delete data.newFilmStock;
      photoChanged = true;
    }
  } else if (data.medium === 'film') {
    data.filmStock = ensureStock(newStock);
    delete data.newFilmStock;
    photoChanged = true;
  }

  if (photoChanged) {
    writeJson(fullPath, data);
    updatedPhotos++;
  }
}

const optionStartMarker = '# FILM_STOCK_OPTIONS_START';
const optionEndMarker = '# FILM_STOCK_OPTIONS_END';
const config = fs.readFileSync(configFile, 'utf8');
const startIndex = config.indexOf(optionStartMarker);
const endIndex = config.indexOf(optionEndMarker);

if (startIndex < 0 || endIndex < 0 || endIndex <= startIndex) {
  throw new Error(`Could not find film stock option markers in ${configFile}`);
}

const lineStart = config.lastIndexOf('\n', startIndex) + 1;
const markerIndent = config.slice(lineStart, startIndex);
const optionIndent = `${markerIndent}`;
const sortedStocks = [...stocksByName.values()].sort((a, b) =>
  a.name.localeCompare(b.name, 'en-US', { sensitivity: 'base' })
);
const generatedOptions = sortedStocks
  .map(({ name }) => `${optionIndent}- { name: ${JSON.stringify(name)}, label: ${JSON.stringify(name)} }`)
  .join('\n');
const replacement = `${optionStartMarker}\n${generatedOptions}\n${markerIndent}`;
const updatedConfig = `${config.slice(0, startIndex)}${replacement}${config.slice(endIndex)}`;
const configChanged = updatedConfig !== config;

if (configChanged) fs.writeFileSync(configFile, updatedConfig);

console.log(
  `Film stocks synchronized: ${stocksByName.size} available, ${created} created, ${updatedPhotos} photo entries updated, dropdown ${configChanged ? 'updated' : 'unchanged'}.`
);
