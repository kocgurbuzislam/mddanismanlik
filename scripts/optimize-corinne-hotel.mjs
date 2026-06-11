/**
 * Corinne Hotel — npm run optimize:corinne-hotel
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

const outDir = path.join(process.cwd(), "public", "projects", "corinne-hotel");
fs.mkdirSync(outDir, { recursive: true });

const files = [
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-a22252af-a938-42b6-bcb0-8fbcf0ce1a39.png",
    out: "cover.webp",
    width: 1600,
    height: 1200,
    position: "centre",
  },
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-f374d70f-7007-4a7a-b882-cae1fae9e447.png",
    out: "terrace.webp",
    width: 1400,
    height: 1050,
    position: "centre",
  },
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-52df44d8-12b7-4758-8182-630062d9376b.png",
    out: "suite.webp",
    width: 1400,
    height: 1050,
    position: "centre",
  },
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-63e71fd7-7a2a-4bad-b993-d79b29e65bc8.png",
    out: "lounge.webp",
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
