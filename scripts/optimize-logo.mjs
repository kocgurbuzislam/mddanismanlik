/**
 * Site logosu — npm run optimize:logo
 * Kaynak: assets/logo-source.png (deploy edilmez)
 */
import fs from "fs";
import sharp from "sharp";

const SOURCE = "assets/logo-source.png";
const OUT_WEBP = "public/logo.webp";
const OUT_OG = "public/og-image.webp";

if (!fs.existsSync(SOURCE)) {
  console.error("logo-source.png bulunamadı:", SOURCE);
  process.exit(1);
}

const sourceBuffer = fs.readFileSync(SOURCE);

await sharp(sourceBuffer)
  .resize(600, 400, { fit: "inside", withoutEnlargement: true })
  .webp({ quality: 88, effort: 4 })
  .toFile(OUT_WEBP);

await sharp(sourceBuffer)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .webp({ quality: 82, effort: 4 })
  .toFile(OUT_OG);

for (const file of [OUT_WEBP, OUT_OG]) {
  const meta = await sharp(file).metadata();
  const size = fs.statSync(file).size;
  console.log(`${file} → ${meta.width}x${meta.height}, ${(size / 1024).toFixed(1)} KiB`);
}
