import fs from "fs";
import path from "path";

import { cn } from "@/lib/utils";

const SCALE_LARGE = 1.25;
const SCALE_EXTRA_LARGE = 1.5;

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

export const referenceLogoCellClass =
  "flex aspect-[5/4] items-center justify-center border-b border-r border-dashed border-border/70 bg-cream p-8 sm:p-10 lg:aspect-[4/3]";

export function referenceLogoZoomStyle(scale: number, wide?: boolean) {
  if (!wide || scale < SCALE_EXTRA_LARGE) return undefined;
  return { transform: `scale(${1.12 + (scale - SCALE_EXTRA_LARGE) * 0.6})` };
}

export function referenceLogoDimensions(scale: number) {
  const large = scale >= SCALE_LARGE;
  return { width: large ? 360 : 280, height: large ? 280 : 200 };
}

export function referenceLogoClass(scale = 1, wide = false) {
  const large = scale >= SCALE_LARGE;
  const extraLarge = scale >= SCALE_EXTRA_LARGE;

  if (wide && extraLarge) {
    return "h-[8.5rem] w-auto max-w-full object-contain sm:h-[9.5rem] lg:h-[10.5rem]";
  }

  if (wide) {
    return cn(
      "w-full max-w-[98%] object-contain",
      large
        ? "max-h-[6.25rem] sm:max-h-[7.25rem] lg:max-h-[8.25rem]"
        : "max-h-[4.75rem] sm:max-h-[5.5rem] lg:max-h-[6rem]",
    );
  }

  return cn(
    "w-auto object-contain",
    large
      ? "h-[6.75rem] max-w-[95%] sm:h-[8rem] lg:h-[8.75rem]"
      : "h-[5.5rem] max-w-[90%] sm:h-[6.25rem] lg:h-[7rem]",
  );
}
