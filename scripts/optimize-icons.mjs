/**
 * Favicon ve uygulama ikonları — npm run optimize:icons
 * Kaynak: assets/logo-icon.png (deploy edilmez)
 */
import fs from "fs";
import sharp from "sharp";

const SOURCE = "assets/logo-icon.png";

async function squareIcon(size, out) {
  const trimmed = await sharp(SOURCE).trim({ threshold: 10 }).toBuffer();
  await sharp(trimmed)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(out);
  console.log(`${out} → ${size}x${size}`);
}

if (!fs.existsSync(SOURCE)) {
  console.error("logo-icon.png bulunamadı:", SOURCE);
  process.exit(1);
}

await squareIcon(48, "src/app/icon.png");
await squareIcon(180, "src/app/apple-icon.png");
await squareIcon(512, "public/icon.png");
await squareIcon(48, "public/favicon.ico");
