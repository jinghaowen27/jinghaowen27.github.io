import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const directory = path.resolve('src/data/content/photography');
const filenames = fs.readdirSync(directory).filter((name) => name.endsWith('.json'));
const safeDirectory = process.cwd().replaceAll('\\', '/');

const records = filenames.map((filename) => {
  const relativePath = path.posix.join('src/data/content/photography', filename);
  const data = JSON.parse(fs.readFileSync(path.join(directory, filename), 'utf8'));
  let lastChanged = 0;

  try {
    lastChanged = Number(execFileSync(
      'git',
      ['-c', `safe.directory=${safeDirectory}`, 'log', '-1', '--format=%ct', '--', relativePath],
      { encoding: 'utf8' }
    ).trim()) || 0;
  } catch {
    // New uncommitted files are treated as the newest entries at their requested position.
    lastChanged = Number.MAX_SAFE_INTEGER;
  }

  return {
    filename,
    data,
    requestedOrder: Number.isFinite(Number(data.order)) ? Number(data.order) : Number.MAX_SAFE_INTEGER,
    lastChanged
  };
});

records.sort((a, b) =>
  a.requestedOrder - b.requestedOrder ||
  b.lastChanged - a.lastChanged ||
  a.filename.localeCompare(b.filename, 'en')
);

let changed = 0;
records.forEach((record, index) => {
  if (record.data.order === index) return;
  record.data.order = index;
  fs.writeFileSync(
    path.join(directory, record.filename),
    `${JSON.stringify(record.data, null, 2)}\n`
  );
  changed++;
});

console.log(`Normalized ${records.length} photography entries; updated ${changed} order values.`);
