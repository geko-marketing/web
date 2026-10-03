// Uso: node scripts/verificar-urls.mjs <base> [--produccion]
// Ej.: node scripts/verificar-urls.mjs https://geko-marketing.com --produccion
// Comprueba las 14 URLs del sitemap: 200, canonical a sí misma, noindex (solo staging),
// /servicios/ y /servicios.html vivas, y redirección de www.
const base = (process.argv[2] || '').replace(/\/$/, '');
const prod = process.argv.includes('--produccion');
if (!base) { console.error('Falta la base'); process.exit(2); }
const slugs = [
  'como-aumentar-seguidores-instagram-empresas-2025',
  'cuanto-cuesta-agencia-marketing-digital-madrid',
  'diseno-web-para-empresas-guia-completa-2025',
  'que-es-el-branding-y-por-que-importa-a-tu-empresa',
  'seo-local-para-negocios-madrid-guia-practica',
  'tiktok-para-empresas-guia-completa-2025',
];
const rutas = ['', '/servicios', '/servicios/gestion-redes', '/servicios/branding',
  '/servicios/paginas-web', '/nosotros', '/blog', '/contacto', ...slugs.map((s) => `/blog/${s}`)];
let fallos = 0;
const ko = (m) => { fallos++; console.log('  ✗', m); };
for (const r of rutas) {
  const url = base + r;
  const res = await fetch(url, { redirect: 'manual' });
  const html = res.status === 200 ? await res.text() : '';
  console.log(`${res.status} ${r || '/'}`);
  if (res.status !== 200) { ko('no responde 200'); continue; }
  const canon = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
  const esperado = 'https://geko-marketing.com' + r;
  if (prod && canon !== esperado) ko(`canonical ${canon} != ${esperado}`);
  if (!canon) ko('sin canonical');
  const noindex = /<meta[^>]+name="robots"[^>]+noindex/i.test(html);
  if (prod && noindex) ko('NOINDEX en producción');
  if (!prod && !noindex) ko('staging sin noindex');
}
for (const extra of ['/servicios/', '/servicios.html']) {
  const res = await fetch(base + extra, { redirect: 'manual' });
  console.log(`${res.status} ${extra}`);
  if (![200, 301].includes(res.status)) ko(`${extra} no responde`);
}
if (prod) {
  const res = await fetch('https://www.geko-marketing.com/', { redirect: 'manual' });
  console.log(`${res.status} www`);
  if (res.status !== 301) ko('www no redirige con 301');
}
console.log(fallos ? `\n${fallos} fallos` : '\nTodo en verde');
process.exit(fallos ? 1 : 0);
