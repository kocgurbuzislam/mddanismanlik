/**
 * Hero arka plan — npm run optimize:hero
 */
import fs from "fs";
import sharp from "sharp";

const OUT_DIR = "public/images";
const OUT = `${OUT_DIR}/hero.webp`;
const URL =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80";

fs.mkdirSync(OUT_DIR, { recursive: true });

const response = await fetch(URL);
if (!response.ok) {
  console.error("Hero kaynağı indirilemedi:", response.status);
  process.exit(1);
}

const buffer = Buffer.from(await response.arrayBuffer());

await sharp(buffer)
  .resize(828, null, { withoutEnlargement: true })
  .webp({ quality: 38, effort: 6, smartSubsample: true })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
const size = fs.statSync(OUT).size;
console.log(`${OUT} → ${meta.width}x${meta.height}, ${(size / 1024).toFixed(1)} KiB`);
