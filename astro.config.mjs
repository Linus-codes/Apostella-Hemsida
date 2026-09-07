import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domänen styr canonical, hreflang, og:url, sitemap.xml och robots.txt. Byt här och i public/robots.txt samtidigt.
export default defineConfig({
  site: 'https://apostella.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv'],
    routing: { prefixDefaultLocale: false },
  },
  build: {
    // Stilar som egna filer, så att Content-Security-Policy utan 'unsafe-inline' fungerar.
    inlineStylesheets: 'never',
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', sv: 'sv-SE' } },
    }),
  ],
});
