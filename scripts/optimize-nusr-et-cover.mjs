/**
 * Nusr-Et kapak + galeri görselleri — ince ayar buradan.
 *
 * Kullanım: npm run optimize:nusr-et-cover
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const assetsDir = path.join(
  process.env.USERPROFILE ?? "",
  ".cursor",
  "projects",
  "c-Users-iso-Desktop-websitelercursor-md-danismanlik",
  "assets",
);

const outDir = path.join(process.cwd(), "public", "projects", "nusr-et");
const OUT_WIDTH = 1600;

const exports_ = [
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-8afeb305-7a15-46d7-8833-83ccf294ec06.png",
    out: "cover-card.webp",
    topSkipRatio: 0,
    bottomTrimPx: 34,
    position: "attention",
  },
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-65a85e34-d940-4144-898b-ad5a5917a5b4.png",
    out: "team.webp",
    topSkipRatio: 0,
    bottomTrimPx: 24,
    position: "centre",
  },
];

async function processCard(inputPath, outputPath, options) {
  const { topSkipRatio, bottomTrimPx, position } = options;
  const { width, height } = await sharp(inputPath).rotate().metadata();
  const top = Math.round(height * topSkipRatio);
  const cropH = height - top - bottomTrimPx;

  await sharp(inputPath)
    .rotate()
    .extract({ left: 0, top, width, height: cropH })
    .resize(OUT_WIDTH, Math.round(OUT_WIDTH * (3 / 4)), {
      fit: "cover",
      position,
    })
    .webp({ quality: 85, effort: 4 })
    .toFile(outputPath);

  return { top, cropH, width, height };
}

fs.mkdirSync(outDir, { recursive: true });

for (const file of exports_) {
  const inputPath = path.join(assetsDir, file.src);
  const outputPath = path.join(outDir, file.out);

  if (!fs.existsSync(inputPath)) {
    console.error("Kaynak bulunamadı:", inputPath);
    process.exit(1);
  }

  const meta = await processCard(inputPath, outputPath, file);
  console.log(
    `${file.out} → top=${meta.top}, cropH=${meta.cropH}, ${meta.width}x${meta.height}`,
  );
}
