import fs from "fs";
import path from "path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "projects", "zihni-pub");
const assetsDir =
  process.env.ZIHNI_ASSETS_DIR ??
  path.join(
    process.env.USERPROFILE ?? "",
    ".cursor",
    "projects",
    "c-Users-iso-Desktop-websitelercursor-md-danismanlik",
    "assets",
  );

const files = [
  {
    out: "cover.webp",
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-dd3747c5-67e6-418a-ad8b-7813a9eb1857.png",
    alt: "Zihni Pub ekip ve şef Olcay İnel",
  },
  {
    out: "team.webp",
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-508f5a9b-02fa-4efd-a477-0e3323fd38e8.png",
    alt: "Zihni Pub ekip fotoğrafı",
  },
  {
    out: "seafood.webp",
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-5bc3026d-2ebf-43ac-b991-a2044142a687.png",
    alt: "Zihni Pub deniz ürünleri sunumu",
  },
  {
    out: "interior.webp",
    src: "c__Users_iso_AppData_Roaming_Cursor_User_workspaceStorage_3e167338efa718e1ea5d40efe5549a45_images_image-199f8c45-ca00-4b98-8b41-808097c9a398.png",
    alt: "Zihni Pub bar ve kokteyl sunumu",
  },
];

fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const inputPath = path.join(assetsDir, file.src);
  const outputPath = path.join(outDir, file.out);
  const before = fs.statSync(inputPath).size;

  await sharp(inputPath)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(outputPath);

  const after = fs.statSync(outputPath).size;
  console.log(`${file.out}: ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB`);
}
