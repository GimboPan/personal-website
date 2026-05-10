/**
 * Generate optimized hero image variants + OG share image.
 *
 * Source PNG masters live in `landing-source/` at the repo root (NOT in
 * `public/`, so the multi-MB originals don't get deployed). Optimized
 * variants are written into `public/landing/` and are what the browser
 * actually loads.
 *
 * For each hero, emits:
 *   - <name>.avif / <name>.webp           (full-resolution modern formats)
 *   - <name>-768w.{avif,webp}             (mobile responsive variant)
 *   - <name>-1280w.{avif,webp}            (tablet/laptop responsive variant)
 *
 * Also regenerates `/og-image.{jpg,png}` from the canonical landing source
 * (`gimbos-universe.png`) for social previews.
 *
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'landing-source');
const outDir = path.join(root, 'public/landing');

const heroes = [
  'gimbos-universe',
  'homepage-hero',
  'work-hero',
  'fitness-hero',
  'life-hero',
  'ideas-hero',
  'about-hero',
];

const RESPONSIVE_WIDTHS = [768, 1280];

/* The hero artworks have a painted nav strip baked into the top ~6% of
   each scene. Now that the site has a real persistent HTML <Nav />, that
   strip is redundant and visually clashes. Crop it off all variants
   (sources stay untouched in landing-source/). 80px on a 1024-tall master
   = ~7.8%, safely past the painted nav (which ends near 6.5%) without
   biting into the scene below. */
const CROP_TOP_PX = 80;

/** Source after top-crop is 1536×944. Mobile gets a centered square cut
   (944×944) so the AI scene retains presence on phone-sized viewports
   without the cover-crop guesswork at narrow widths. */
const MOBILE_CROP_SIZE = 944;

/** Returns a sharp pipeline with the painted-nav strip cropped off. */
async function loadCropped(src) {
  const meta = await sharp(src).metadata();
  return sharp(src).extract({
    top: CROP_TOP_PX,
    left: 0,
    width: meta.width,
    height: meta.height - CROP_TOP_PX,
  });
}

/** Returns a sharp pipeline with the painted-nav crop AND a centered
   square crop applied — the source for mobile <picture> branches. */
async function loadMobileSquare(src) {
  const meta = await sharp(src).metadata();
  const remainingHeight = meta.height - CROP_TOP_PX;
  const size = Math.min(remainingHeight, MOBILE_CROP_SIZE);
  const left = Math.floor((meta.width - size) / 2);
  return sharp(src).extract({
    top: CROP_TOP_PX,
    left,
    width: size,
    height: size,
  });
}

async function fileSize(p) {
  const stat = await fs.stat(p);
  return stat.size;
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function genFull(name, format, ext, opts) {
  const out = path.join(outDir, `${name}.${ext}`);
  const src = path.join(sourceDir, `${name}.png`);
  const pipeline = await loadCropped(src);
  const info = await pipeline[format](opts).toFile(out);
  console.log(`    ${ext.padEnd(4)} → ${kb(await fileSize(out))}  (${info.width}×${info.height})`);
}

async function genResponsive(name, width, format, ext, opts) {
  const out = path.join(outDir, `${name}-${width}w.${ext}`);
  const src = path.join(sourceDir, `${name}.png`);
  const pipeline = await loadCropped(src);
  await pipeline.resize(width).toFormat(format, opts).toFile(out);
  console.log(`    ${width}w ${ext.padEnd(4)} → ${kb(await fileSize(out))}`);
}

async function genMobile(name, format, ext, opts) {
  const out = path.join(outDir, `${name}-mobile.${ext}`);
  const src = path.join(sourceDir, `${name}.png`);
  const pipeline = await loadMobileSquare(src);
  const info = await pipeline[format](opts).toFile(out);
  console.log(`    mobile ${ext.padEnd(4)} → ${kb(await fileSize(out))}  (${info.width}×${info.height})`);
}

async function processHero(name) {
  const srcPath = path.join(sourceDir, `${name}.png`);
  try {
    await fs.access(srcPath);
  } catch {
    console.log(`\n[skip] ${name}.png not found`);
    return;
  }

  console.log(`\n${name}.png  → ${kb(await fileSize(srcPath))}`);

  await genFull(name, 'avif', 'avif', { quality: 50, effort: 6 });
  await genFull(name, 'webp', 'webp', { quality: 80 });

  for (const w of RESPONSIVE_WIDTHS) {
    await genResponsive(name, w, 'avif', 'avif', { quality: 50, effort: 6 });
    await genResponsive(name, w, 'webp', 'webp', { quality: 82 });
  }

  await genMobile(name, 'avif', 'avif', { quality: 50, effort: 6 });
  await genMobile(name, 'webp', 'webp', { quality: 82 });
}

console.log('Optimizing hero images...');
for (const hero of heroes) {
  await processHero(hero);
}

// OG share images (1200×630) — one per primary surface so social previews
// reflect the actual page being shared. The painted-nav top crop applies
// here too (consistent with what visitors see on the page).
console.log('\nOG share images:');
const ogTargets = [
  { source: 'gimbos-universe', out: 'og-image', alsoPng: true }, // homepage default
  { source: 'work-hero', out: 'og-work' },
  { source: 'fitness-hero', out: 'og-fitness' },
  { source: 'life-hero', out: 'og-life' },
  { source: 'ideas-hero', out: 'og-ideas' },
  { source: 'about-hero', out: 'og-about' },
];

for (const t of ogTargets) {
  const srcPath = path.join(sourceDir, `${t.source}.png`);
  const ogJpg = path.join(root, 'public', `${t.out}.jpg`);
  const jpgPipeline = await loadCropped(srcPath);
  await jpgPipeline
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(ogJpg);
  console.log(`  /${t.out}.jpg → ${kb(await fileSize(ogJpg))}`);

  if (t.alsoPng) {
    const ogPng = path.join(root, 'public', `${t.out}.png`);
    const pngPipeline = await loadCropped(srcPath);
    await pngPipeline
      .resize(1200, 630, { fit: 'cover', position: 'center' })
      .png({ compressionLevel: 9, quality: 90 })
      .toFile(ogPng);
    console.log(`  /${t.out}.png → ${kb(await fileSize(ogPng))}`);
  }
}

console.log('\nDone.');
