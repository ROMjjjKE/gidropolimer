// After `vite build`: emit one static HTML entry per route with its own meta,
// so every URL answers 200 on GitHub Pages and carries a unique title/description.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const ORIGIN = 'https://romjjjke.github.io/gidropolimer';

const ROUTES = [
  {
    dir: '',
    path: '/',
    title: 'Гидрополимер — прочистка под перекрытием 2,3 м, Минск',
    description:
      'Гидродинамическая прочистка ливнёвки в закрытых паркингах, узких дворах и трубопроводов. Комбинированная машина высотой 2,3 м: промывка и откачка за один проезд. Минск и область, +375 44 742-74-47.',
  },
  {
    dir: 'parking',
    path: '/parking',
    title: 'Прочистка ливнёвки в закрытом паркинге — Гидрополимер, Минск',
    description:
      'Промывка трапов и лотков ливневой канализации в подземных паркингах при перекрытии от 2,3 м. Работа от одного трапа, шлам в цистерну, без сброса во двор.',
  },
  {
    dir: 'livnevka',
    path: '/livnevka',
    title: 'Промывка ливневой канализации и КНС — Гидрополимер, Минск',
    description:
      'Гидродинамическая прочистка ливневой канализации: лотки, дождеприёмники, пескоуловители, колодцы, КНС. Промывка от колодца к колодцу с откачкой шлама в цистерну. Минск и область.',
  },
  {
    dir: 'truby',
    path: '/truby',
    title: 'Гидродинамическая прочистка трубопроводов — Гидрополимер, Минск',
    description:
      'Прочистка трубопроводов от засоров, ила, песка и отложений: жир, цементное молоко, окалина, корни. Подбор давления и насадки под диаметр и материал трубы. Минск и область.',
  },
];

const base = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

const withMeta = (html, route) =>
  html
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${route.description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${ORIGIN}${route.path}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${route.title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${route.description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${ORIGIN}${route.path}$2`);

for (const route of ROUTES) {
  const target = route.dir ? path.join(DIST, route.dir) : DIST;
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, 'index.html'), withMeta(base, route));
}

// Unknown deep links fall back to the SPA shell (client router decides where to go).
fs.writeFileSync(path.join(DIST, '404.html'), base);

// Sitemap with trailing slashes so GitHub Pages answers 200 without a redirect.
const urls = ROUTES.map(
  (r) => `  <url><loc>${ORIGIN}${r.path === '/' ? '/' : r.path + '/'}</loc><priority>${r.path === '/' ? '1.0' : '0.9'}</priority></url>`
).join('\n');
fs.writeFileSync(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

console.log('[route-meta] routes:', ROUTES.map((r) => r.path).join(', '));
