import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://asuosonurb.github.io/learning-by-heart', base: '/learning-by-heart', integrations: [sitemap()] });
