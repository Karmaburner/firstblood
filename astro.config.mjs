// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Siden ligger på firstblood.no (GitHub Pages med eget domene, se public/CNAME).
export default defineConfig({
  site: 'https://firstblood.no',
  vite: {
    plugins: [tailwindcss()]
  }
});
