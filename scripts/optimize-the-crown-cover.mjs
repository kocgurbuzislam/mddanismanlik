/**
 * The Crown kapak — ince ayar: npm run optimize:the-crown-cover
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

const SRC =
  "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-0bbccb5d-99a1-4783-bca4-ea21d07427ad.png";

const OUT = path.join(process.cwd(), "public", "projects", "the-crown", "cover.webp");

const TOP_SKIP_RATIO = 0;
const BOTTOM_TRIM_PX = 40;
const OUT_WIDTH = 1600;

const inputPath = path.join(assetsDir, SRC);
if (!fs.existsSync(inputPath)) {
  console.error("Kaynak bulunamadı:", inputPath);
  process.exit(1);
}

const { width, height } = await sharp(inputPath).rotate().metadata();
const top = Math.round(height * TOP_SKIP_RATIO);
const cropH = height - top - BOTTOM_TRIM_PX;

await sharp(inputPath)
  .rotate()
  .extract({ left: 0, top, width, height: cropH })
  .resize(OUT_WIDTH, Math.round(OUT_WIDTH * (3 / 4)), {
    fit: "cover",
    position: "centre",
  })
  .webp({ quality: 85, effort: 4 })
  .toFile(OUT);

console.log(`cover.webp → top=${top}, cropH=${cropH}, ${width}x${height}`);
