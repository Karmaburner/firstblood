// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: siden ligger på karmaburner.github.io/firstblood/.
// Får Trond eget domene, sett site til domenet og fjern base.
export default defineConfig({
  site: 'https://karmaburner.github.io',
  base: '/firstblood',
  vite: {
    plugins: [tailwindcss()]
  }
});
