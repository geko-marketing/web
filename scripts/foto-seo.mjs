// Foto fija SEO de las 14 URLs de producción. Uso: node scripts/foto-seo.mjs <salida.json>
import { writeFileSync } from 'node:fs';
const out = process.argv[2];
const sm = await (await fetch('https://geko-marketing.com/sitemap.xml')).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const pick = (h, re) => h.match(re)?.[1]?.trim() ?? null;
const strip = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const foto = [];
for (const url of urls) {
  const res = await fetch(url);
  const h = await res.text();
  const body = h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  foto.push({
    url, status: res.status,
    title: pick(h, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: pick(h, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i),
    canonical: pick(h, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i),
    h1: [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => strip(m[1])),
    h2: [...body.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => strip(m[1])),
    texto: strip(body.match(/<body[\s\S]*<\/body>/i)?.[0] ?? '').slice(0, 20000),
  });
}
writeFileSync(out, JSON.stringify({ fecha: new Date().toISOString(), foto }, null, 1));
console.log(`${foto.length} URLs guardadas en ${out}`);
