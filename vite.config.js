import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => ({
  plugins: [react()],
  root: 'src',
  publicDir: resolve(rootDir, 'public'),
  base: command === 'build' ? '/about-me/' : '/',
  build: {
    outDir: resolve(rootDir, 'dist'),
    emptyOutDir: true
  }
}));
