import fs from "fs";
import path from "path";

/** Sunucu bileşenleri: dosya değişince önbelleği kırar */
export function referenceLogoUrl(logoPath: string): string {
  try {
    const file = path.join(process.cwd(), "public", logoPath.replace(/^\//, ""));
    const { mtimeMs } = fs.statSync(file);
    return `${logoPath}?v=${Math.floor(mtimeMs)}`;
  } catch {
    return logoPath;
  }
}
