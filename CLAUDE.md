# Web GEKO (código)

Rama `web-nueva`: código Astro. `main` guarda la web **compilada** que publica
Hostinger; no se desarrolla en `main`. La web antigua está en el tag `web-antigua`.

- Astro 5 estático, `build.format: 'file'`, `trailingSlash: 'never'`: genera
  `servicios.html`, `servicios/branding.html`... igual que la web antigua.
- `STAGING=1 npm run build` añade `noindex`. Nunca se escribe a mano.
- `node scripts/verificar-urls.mjs <base> [--produccion]` comprueba las 14 URLs.
- `public/.htaccess` se copia a la raíz publicada: no borrarlo.
- Repo público: sin precios internos, notas de alcance ni claves.
