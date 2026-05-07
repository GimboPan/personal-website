/**
 * Take screenshots at proper mobile viewports using CDP device emulation.
 * Headless Chrome's --window-size doesn't honor narrow inner viewport,
 * so we use Emulation.setDeviceMetricsOverride to force the real width.
 */
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import WebSocket from 'ws';

const BASE = process.argv[2] ?? 'http://localhost:4322';
const port = 9225;

const devices = [
  { name: 'iphone',  width: 390, height: 844, dpr: 3 },
  { name: 'ipad',    width: 768, height: 1024, dpr: 2 },
  { name: 'pixel',   width: 412, height: 915, dpr: 2.625 },
  { name: 'desktop', width: 1440, height: 900, dpr: 1 },
];

const routes = ['/', '/work', '/fitness', '/life', '/ideas', '/about', '/no-such-page'];

const chrome = spawn(
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ['--headless=new', '--disable-gpu', `--remote-debugging-port=${port}`,
   '--no-first-run', '--window-size=1500,1000', 'about:blank'],
  { stdio: ['ignore', 'ignore', 'ignore'] },
);

await new Promise((r) => setTimeout(r, 1500));

const targets = await fetch(`http://localhost:${port}/json`).then((r) => r.json());
const target = targets.find((t) => t.type === 'page');
const ws = new WebSocket(target.webSocketDebuggerUrl);
let id = 0;
const send = (method, params = {}) =>
  new Promise((res) => {
    const mid = ++id;
    const onMsg = (raw) => {
      const m = JSON.parse(raw);
      if (m.id === mid) { ws.off('message', onMsg); res(m); }
    };
    ws.on('message', onMsg);
    ws.send(JSON.stringify({ id: mid, method, params }));
  });

await new Promise((r) => ws.once('open', r));
await send('Page.enable');
await send('Runtime.enable');

for (const device of devices) {
  await send('Emulation.setDeviceMetricsOverride', {
    width: device.width,
    height: device.height,
    deviceScaleFactor: device.dpr,
    mobile: device.name !== 'desktop',
  });

  for (const route of routes) {
    const url = BASE + route;
    await send('Page.navigate', { url });
    // Wait for load + animations to settle
    await new Promise((r) => setTimeout(r, 2200));

    // Capture full page
    const layout = await send('Page.getLayoutMetrics');
    const fullHeight = Math.min(8000, Math.ceil(layout.result.contentSize.height));

    await send('Emulation.setDeviceMetricsOverride', {
      width: device.width,
      height: fullHeight,
      deviceScaleFactor: device.dpr,
      mobile: device.name !== 'desktop',
    });

    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const safeName = route.replace(/^\//, '') || 'home';
    const fname = `/tmp/m4-${device.name}-${safeName.replace(/\//g, '-')}.png`;
    writeFileSync(fname, Buffer.from(shot.result.data, 'base64'));
    console.log(`✓ ${device.name.padEnd(8)} ${route.padEnd(16)} → ${fname}`);

    // Restore device viewport for next route
    await send('Emulation.setDeviceMetricsOverride', {
      width: device.width,
      height: device.height,
      deviceScaleFactor: device.dpr,
      mobile: device.name !== 'desktop',
    });
  }
}

ws.close();
chrome.kill();
console.log('done');
