/**
 * Use Chrome DevTools Protocol to find horizontal overflow culprits.
 * Run with preview server up: node scripts/inspect-overflow.mjs <url>
 */
import { spawn } from 'node:child_process';
import WebSocket from 'ws';

const url = process.argv[2] ?? 'http://localhost:4322/';
const port = 9224;

const chrome = spawn(
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  [
    '--headless',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    '--window-size=390,844',
    '--no-first-run',
    url,
  ],
  { stdio: ['ignore', 'ignore', 'ignore'] },
);

await new Promise((r) => setTimeout(r, 1500));

const targets = await fetch(`http://localhost:${port}/json`).then((r) => r.json());
const target = targets.find((t) => t.type === 'page');
if (!target) {
  console.error('no target page');
  chrome.kill();
  process.exit(1);
}

const ws = new WebSocket(target.webSocketDebuggerUrl);
let id = 0;
const send = (method, params = {}) =>
  new Promise((res) => {
    const mid = ++id;
    const onMsg = (raw) => {
      const m = JSON.parse(raw);
      if (m.id === mid) {
        ws.off('message', onMsg);
        res(m);
      }
    };
    ws.on('message', onMsg);
    ws.send(JSON.stringify({ id: mid, method, params }));
  });

await new Promise((r) => ws.once('open', r));
await send('Runtime.enable');
await send('Page.enable');
await new Promise((r) => setTimeout(r, 2000));

const r = await send('Runtime.evaluate', {
  returnByValue: true,
  expression: `
    (() => {
      const vw = window.innerWidth;
      const overflow = [];
      document.querySelectorAll('*').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.width === 0) return;
        if (r.right > vw + 1 || r.left < -1) {
          overflow.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className && typeof el.className === 'string') ? el.className.slice(0, 100) : '',
            x: Math.round(r.x), w: Math.round(r.width), right: Math.round(r.right),
          });
        }
      });
      return {
        viewport: vw,
        documentScrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        overflowing: overflow.slice(0, 25),
      };
    })()
  `,
});

console.log(JSON.stringify(r.result.result.value, null, 2));
ws.close();
chrome.kill();
