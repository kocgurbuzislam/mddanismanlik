import { cn } from "@/lib/utils";

export const referenceLogoCellClass =
  "flex aspect-[5/4] items-center justify-center border-b border-r border-dashed border-border/70 bg-cream p-8 sm:p-10 lg:aspect-[4/3]";

export function referenceLogoZoomStyle(scale: number, wide?: boolean) {
  if (!wide || scale < 1.5) return undefined;
  return { transform: `scale(${1.12 + (scale - 1.5) * 0.6})` };
}

export function referenceLogoDimensions(scale: number) {
  const large = scale >= 1.25;
  return { width: large ? 360 : 280, height: large ? 280 : 200 };
}

export function referenceLogoClass(scale = 1, wide = false) {
  const large = scale >= 1.25;
  const extraLarge = scale >= 1.5;

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
