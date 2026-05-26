import fs from "fs";
import path from "path";
import sharp from "sharp";

const referencesDir = path.join(process.cwd(), "public", "references");
const files = fs.readdirSync(referencesDir).filter((file) => file.endsWith(".png"));

let savedBytes = 0;

for (const file of files) {
  const inputPath = path.join(referencesDir, file);
  const outputPath = path.join(referencesDir, file.replace(/\.png$/i, ".webp"));
  const before = fs.statSync(inputPath).size;

  await sharp(inputPath)
    .webp({ quality: 82, effort: 4 })
    .toFile(outputPath);

  const after = fs.statSync(outputPath).size;
  savedBytes += before - after;

  fs.unlinkSync(inputPath);
  console.log(`${file} -> ${path.basename(outputPath)} (${formatKb(before)} -> ${formatKb(after)})`);
}

console.log(`\nToplam ${files.length} logo. Kazanç: ~${formatKb(savedBytes)}.`);

function formatKb(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}
