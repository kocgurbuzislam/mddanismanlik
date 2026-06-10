import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  src: string;
  alt: string;
  className?: string;
  size?: "header" | "footer";
};

export function BrandLogo({
  src,
  alt,
  className,
  size = "header",
}: BrandLogoProps) {
  const tall = size === "footer";

  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      priority={size === "header"}
      fetchPriority={size === "header" ? "high" : "auto"}
      sizes={
        tall
          ? "(max-width: 640px) 220px, 300px"
          : "(max-width: 640px) 200px, (max-width: 1024px) 240px, 300px"
      }
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
