import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Mismas URLs que la web antigua: servicios.html, servicios/branding.html...
export default defineConfig({
  site: 'https://geko-marketing.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
