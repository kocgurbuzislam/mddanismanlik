import Image from "next/image";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: "header" | "footer";
};

export function BrandLogo({ className, size = "header" }: BrandLogoProps) {
  const { brand } = siteContent;
  const tall = size === "footer";

  return (
    <Image
      src={brand.logo}
      alt={brand.name}
      width={tall ? 450 : 360}
      height={tall ? 300 : 240}
      unoptimized
      priority={size === "header"}
      fetchPriority={size === "header" ? "high" : "auto"}
      style={{ width: "auto" }}
      className={cn(
        "w-auto object-contain pointer-events-none",
        tall
          ? "h-[110px] sm:h-[130px] -ml-[28px] sm:-ml-[34px]"
          : "relative top-1.5 sm:top-2 lg:top-3 -my-[26px] sm:-my-[32px] lg:-my-[43px] h-[100px] sm:h-[120px] lg:h-[150px] -ml-[26px] sm:-ml-[37px] lg:-ml-[54px]",
        className,
      )}
    />
  );
}