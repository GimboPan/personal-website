/**
 * Generate optimized hero image variants + OG share image.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const src = path.join(root, 'public/landing/gimbos-universe.png');
const outDir = path.join(root, 'public/landing');

async function gen(format, ext, opts = {}) {
  const out = path.join(outDir, `gimbos-universe.${ext}`);
  const info = await sharp(src)[format](opts).toFile(out);
  const stat = await fs.stat(out);
  console.log(`  ${ext.padEnd(4)} → ${(stat.size / 1024).toFixed(0)} KB  (${info.width}×${info.height})`);
}

async function genResponsive(width, format, ext, opts) {
  const out = path.join(outDir, `gimbos-universe-${width}w.${ext}`);
  const info = await sharp(src).resize(width).toFormat(format, opts).toFile(out);
  const stat = await fs.stat(out);
  console.log(`  ${width}w ${ext.padEnd(4)} → ${(stat.size / 1024).toFixed(0)} KB`);
}

console.log('Optimizing hero image...');
console.log('Source:', src);
const srcStat = await fs.stat(src);
console.log(`  src  → ${(srcStat.size / 1024).toFixed(0)} KB`);

// Full-resolution modern formats
await gen('avif', 'avif', { quality: 50, effort: 6 });
await gen('webp', 'webp', { quality: 80 });

// Responsive variants for mobile/tablet to save bandwidth
console.log('\nResponsive variants:');
await genResponsive(768, 'webp', 'webp', { quality: 80 });
await genResponsive(768, 'avif', 'avif', { quality: 50, effort: 6 });
await genResponsive(1280, 'webp', 'webp', { quality: 82 });
await genResponsive(1280, 'avif', 'avif', { quality: 50, effort: 6 });

// OG share image (1200×630 — Twitter / LinkedIn / WeChat / etc.)
console.log('\nOG share image:');
const ogOut = path.join(root, 'public/og-image.jpg');
await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(ogOut);
const ogStat = await fs.stat(ogOut);
console.log(`  /og-image.jpg → ${(ogStat.size / 1024).toFixed(0)} KB`);

// PNG OG (some platforms prefer PNG)
const ogPngOut = path.join(root, 'public/og-image.png');
await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .png({ compressionLevel: 9, quality: 90 })
  .toFile(ogPngOut);
const ogPngStat = await fs.stat(ogPngOut);
console.log(`  /og-image.png → ${(ogPngStat.size / 1024).toFixed(0)} KB`);

console.log('\nDone.');
