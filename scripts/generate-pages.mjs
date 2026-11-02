import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { render } from '../work/ssr/entry-server.js';
const template = await readFile('dist/index.html', 'utf8');
const origin = 'https://cristianworth.github.io/portfolio/';
const pages = [
  {
    page: 'home',
    path: '',
    title: 'Cristian Weissmantel | Desenvolvedor Pleno',
    description:
      'Cristian Weissmantel, desenvolvedor pleno. C#/.NET, React, TypeScript e bancos de dados relacionais. Projetos, demos e cases de desenvolvimento web.',
  },
  {
    page: 'nextage-class',
    path: 'cases/nextage-class/',
    title: 'Nextage Class: agenda e continuidade pedagógica | Cristian Weissmantel',
    description:
      'Case do Nextage Class: recorrência de aulas, continuidade pedagógica e separação entre demonstração e piloto com servidor.',
  },
  {
    page: 'worklog',
    path: 'cases/worklog/',
    title: 'Worklog: revisão de horas e envios parciais | Cristian Weissmantel',
    description:
      'Case do Worklog for Redmine: rascunhos, revisão de horas, recibos e reconciliação de resultados incertos.',
  },
  {
    page: 'creditos',
    path: 'creditos/',
    title: 'Créditos e fontes | Cristian Weissmantel',
    description:
      'Fontes dos cases, créditos das capturas, tipografia e direitos de materiais apresentados neste portfólio.',
  },
  {
    page: '404',
    path: '404',
    title: 'Página não encontrada | Cristian Weissmantel',
    description: 'Encontre os projetos e cases no portfólio de Cristian Weissmantel.',
  },
];
for (const page of pages) {
  const url = origin + (page.page === '404' ? '' : page.path);
  let html = template.replace('<!--app-html-->', render(page.page));
  html = html
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*/, `$1${page.description}`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*/, `$1${page.title}`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*/, `$1${page.description}`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*/, `$1${url}`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*/, `$1${url}`);
  if (page.page === '404')
    html = html.replace('</head>', '<meta name="robots" content="noindex" /></head>');
  const target = page.page === '404' ? 'dist/404.html' : `dist/${page.path}index.html`;
  if (page.page !== '404') await mkdir(`dist/${page.path}`, { recursive: true });
  await writeFile(target, html);
}
await writeFile('dist/.nojekyll', '');
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}sitemap.xml\n`);
await writeFile(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages
    .filter((p) => p.page !== '404')
    .map((p) => `<url><loc>${origin}${p.path}</loc></url>`)
    .join('')}</urlset>\n`,
);
console.log('Prerendered home, two cases, credits and 404.');
