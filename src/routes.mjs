export function pageFromPath(pathname, base = '/portfolio/') {
  const normalizedBase = base.replace(/\/$/, '');
  if (pathname !== normalizedBase && !pathname.startsWith(normalizedBase + '/')) return '404';
  const route = pathname
    .slice(normalizedBase.length)
    .replace(/\/$/, '')
    .replace(/\/index\.html$/, '');
  if (route === '' || route === '/') return 'home';
  if (route === '/cases/nextage-class') return 'nextage-class';
  if (route === '/cases/worklog') return 'worklog';
  if (route === '/creditos') return 'creditos';
  return '404';
}
