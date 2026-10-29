import test from 'node:test';
import assert from 'node:assert/strict';
import { pageFromPath } from '../src/routes.mjs';

test('case routes survive direct paths, trailing slash and index.html on Pages', () => {
  for (const slug of ['nextage-class', 'worklog']) {
    for (const suffix of ['', '/', '/index.html'])
      assert.equal(pageFromPath(`/portfolio/cases/${slug}${suffix}`), slug);
  }
  for (const path of ['/portfolio', '/portfolio/', '/portfolio/index.html'])
    assert.equal(pageFromPath(path), 'home');
  assert.equal(pageFromPath('/portfolio/creditos/'), 'creditos');
});
test('unknown routes and paths outside the configured base show 404', () => {
  for (const path of [
    '/portfolio/cases/missing/',
    '/other/',
    '/portfolio-other/',
    '/portfolio/404.html',
  ])
    assert.equal(pageFromPath(path), '404');
});
