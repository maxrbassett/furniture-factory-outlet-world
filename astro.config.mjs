import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://furniturefactoryoutletworld.example', // CONFIRM: real domain once owner provides one
  compressHTML: true,
  vite: { plugins: [tailwindcss()] },
});
