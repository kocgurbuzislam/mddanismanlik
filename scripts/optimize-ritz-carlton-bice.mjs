/**
 * The Ritz-Carlton · Bice Restaurant — npm run optimize:ritz-carlton-bice
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

const outDir = path.join(process.cwd(), "public", "projects", "ritz-carlton-bice");
fs.mkdirSync(outDir, { recursive: true });

const files = [
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-56748997-3c54-45d0-8a7e-8ff7681972c8.png",
    out: "cover.webp",
    width: 1600,
    height: 1200,
    position: "centre",
  },
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-addb95ef-6316-4ef3-bcdd-f330a8e99cdd.png",
    out: "interior.webp",
    width: 1400,
    height: 1050,
    position: "centre",
  },
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-376a24f3-21eb-430e-8c89-4756221b76c9.png",
    out: "pizza.webp",
    width: 1400,
    height: 1050,
    position: "centre",
  },
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-c75ec38f-238a-45a3-9307-ed884d06727d.png",
    out: "service.webp",
    width: 1400,
    height: 1050,
    position: "centre",
  },
];

for (const { src, out, width, height, position } of files) {
  const inputPath = path.join(assetsDir, src);
  if (!fs.existsSync(inputPath)) {
    console.error("Kaynak bulunamadı:", inputPath);
    process.exit(1);
  }

  const buffer = fs.readFileSync(inputPath);
  await sharp(buffer)
    .rotate()
    .resize(width, height, { fit: "cover", position })
    .webp({ quality: 85, effort: 4 })
    .toFile(path.join(outDir, out));

  console.log(`${out} → ${width}x${height}`);
}
