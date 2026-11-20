import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const assetDirectory = dirname(fileURLToPath(import.meta.url));
const moduleName = process.env.PLAYWRIGHT_MODULE
  ? pathToFileURL(resolve(process.env.PLAYWRIGHT_MODULE)).href
  : 'playwright';
const { chromium } = await import(moduleName);
const routes = new Map([
  ['/header.html', ['header.html', 'text/html; charset=utf-8']],
  ['/fonts/newsreader-latin-400-normal.woff2', ['fonts/newsreader-latin-400-normal.woff2', 'font/woff2']],
]);
const server = createServer(async (request, response) => {
  const route = routes.get(request.url);
  if (!route) {
    response.writeHead(404).end();
    return;
  }
  try {
    const data = await readFile(join(assetDirectory, route[0]));
    response.writeHead(200, { 'Content-Type': route[1] }).end(data);
  } catch {
    response.writeHead(500).end();
  }
});
await new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', resolve);
});

let browser;
try {
  browser = await chromium.launch({
    headless: true,
    ...(process.env.BROWSER_CHANNEL ? { channel: process.env.BROWSER_CHANNEL } : {}),
  });
  console.log(`Chromium ${browser.version()}`);
  for (const theme of ['light', 'dark']) {
    const context = await browser.newContext({
      viewport: { width: 1200, height: 280 },
      deviceScaleFactor: 1,
      colorScheme: theme,
    });
    try {
      const page = await context.newPage();
      await page.goto(`http://127.0.0.1:${server.address().port}/header.html`);
      await page.evaluate(async () => {
        await document.fonts.load('400 116px Newsreader');
        await document.fonts.ready;
        if (!document.fonts.check('400 116px Newsreader')) throw new Error('Newsreader did not load');
      });
      const destination = join(assetDirectory, `header-${theme}.png`);
      await page.screenshot({ path: destination, animations: 'disabled' });
      const bytes = (await stat(destination)).size;
      if (bytes > 150_000) throw new Error(`${theme} header exceeds 150 KB: ${bytes} bytes`);
      console.log(`header-${theme}.png: 1200 × 280, ${bytes} bytes`);
    } finally {
      await context.close();
    }
  }
} finally {
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
}
