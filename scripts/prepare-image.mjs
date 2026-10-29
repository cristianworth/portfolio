import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
const [name, source] = process.argv.slice(2);
if (!name || !source || !/^[a-z][a-z0-9-]*$/.test(name)) {
  throw Error('Usage: node scripts/prepare-image.mjs project-name path-to-authorized-image');
}
await mkdir('public/assets', { recursive: true });
const metadata = await sharp(source).metadata();
for (const width of [640, 1280]) {
  await sharp(source)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`public/assets/${name}-${width}.webp`);
}
console.log(
  `${name}: ${metadata.width} × ${metadata.height}. Update image dimensions, alt text and credits.`,
);
