/**
 * Rixos Pera İstanbul — npm run optimize:rixos-pera
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

const outDir = path.join(process.cwd(), "public", "projects", "rixos-pera");
fs.mkdirSync(outDir, { recursive: true });

const files = [
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-2afcac2f-0697-4809-8533-4af0d5f542c7.png",
    out: "cover.webp",
    width: 1600,
    height: 1200,
    position: "centre",
  },
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-b77275df-c3e2-4387-bc6f-18dd484342ee.png",
    out: "hamam.webp",
    width: 1400,
    height: 1050,
    position: "centre",
  },
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-f6b025d9-9914-4c6d-a934-b8173a549009.png",
    out: "breakfast.webp",
    width: 1400,
    height: 1050,
    position: "centre",
  },
  {
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-4e7a2e9c-cb4b-45dd-b276-18e98c93edb6.png",
    out: "terrace.webp",
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
