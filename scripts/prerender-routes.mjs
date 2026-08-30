/*
  GitHub Pages serves static files only. A request for /peripherals finds no
  file, so the server replies 404 and the SPA never boots — the page looked
  broken and search engines could not index any route but "/".

  Writing index.html to <route>/index.html gives every route a real file, so
  the first response is 200 and Vue Router takes over from there. 404.html is
  the safety net for anything not listed here (a component detail page, say).
*/
import fs from 'fs';
import path from 'path';

const DIST = new URL('../dist/', import.meta.url).pathname;

const CATEGORIES = ['pc', 'laptop', 'monitors', 'peripherals', 'audio', 'workspace'];
const ROUTES = ['setup', 'components', 'specs', '404', ...CATEGORIES];

const shell = path.join(DIST, 'index.html');
if (!fs.existsSync(shell)) {
  console.error('prerender: dist/index.html is missing — run the build first.');
  process.exit(1);
}

const html = fs.readFileSync(shell, 'utf8');

for (const route of ROUTES) {
  const dir = path.join(DIST, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// GitHub Pages serves this for any path with no file of its own.
fs.writeFileSync(path.join(DIST, '404.html'), html);

console.log(`prerender: wrote ${ROUTES.length} route entry points plus 404.html.`);
