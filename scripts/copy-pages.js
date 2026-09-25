import { cpSync, existsSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

const copy = (from, to, required = true) => {
  if (!existsSync(from)) {
    if (required) {
      throw new Error(`Missing build output: ${from}`);
    }
    return;
  }

  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
};

copy(resolve(dist, 'index.html'), resolve(root, 'index.html'));
copy(resolve(dist, 'assets'), resolve(root, 'assets'));
copy(resolve(dist, 'img'), resolve(root, 'img'));
copy(resolve(dist, '.nojekyll'), resolve(root, '.nojekyll'), false);
