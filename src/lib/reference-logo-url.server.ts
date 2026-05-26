import fs from "fs";
import path from "path";

/** Build sırasında dosya mtime ile ?v= eklenir; tarayıcı önbelleğini güncellemek için */
function referenceLogoUrl(logoPath: string): string {
  try {
    const file = path.join(process.cwd(), "public", logoPath.replace(/^\//, ""));
    const { mtimeMs } = fs.statSync(file);
    return `${logoPath}?v=${Math.floor(mtimeMs)}`;
  } catch {
    return logoPath;
  }
}

/** Aynı build içinde tekrarlayan stat çağrılarını önler */
export function referenceLogoUrls(logoPaths: string[]): Map<string, string> {
  const urls = new Map<string, string>();
  for (const logoPath of new Set(logoPaths)) {
    urls.set(logoPath, referenceLogoUrl(logoPath));
  }
  return urls;
}
