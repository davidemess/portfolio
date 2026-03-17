// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  compressHTML: true,
  site: 'https://portfolio.davidemessori.dev',
  base: '/portfolio',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: { prefixDefaultLocale: false },
  },
});