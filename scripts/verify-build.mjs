import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
const pages = [
  'index.html',
  'cases/nextage-class/index.html',
  'cases/worklog/index.html',
  'creditos/index.html',
  '404.html',
];
const docs = new Map(
  await Promise.all(pages.map(async (p) => [p, await readFile(`dist/${p}`, 'utf8')])),
);
let checked = 0;
const descriptions = new Set();
for (const [file, html] of docs) {
  const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/)?.[1];
  const socialDescription = html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/)?.[1];
  if (!description || description !== socialDescription || descriptions.has(description)) {
    throw Error(`${file}: missing, duplicate or inconsistent page descriptions`);
  }
  descriptions.add(description);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) throw Error(`${file}: expected one h1`);
  if (html.includes('<!--app-html-->') || !html.includes('id="conteudo"'))
    throw Error(`${file}: missing prerendered content`);
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical?.startsWith('https://cristianworth.github.io/portfolio/'))
    throw Error(`${file}: invalid canonical`);
  for (const [, raw] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|data:)/.test(raw)) continue;
    const url = new URL(raw, `https://example.org/portfolio/${file}`);
    let relative = decodeURIComponent(url.pathname.replace(/^\/portfolio\//, ''));
    if (relative === '' || relative.endsWith('/')) relative += 'index.html';
    const target = path.resolve('dist', relative);
    if (!target.startsWith(path.resolve('dist') + path.sep))
      throw Error(`Invalid local link ${raw}`);
    await access(target);
    if (url.hash && relative.endsWith('.html')) {
      const targetHtml = await readFile(target, 'utf8');
      if (!targetHtml.includes(`id="${url.hash.slice(1)}"`))
        throw Error(`${file}: missing anchor ${raw}`);
    }
    checked++;
  }
}
console.log(
  `Verified ${pages.length} prerendered pages and ${checked} local asset/link/anchor references.`,
);
