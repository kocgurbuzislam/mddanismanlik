import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  labelDashes?: boolean;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
  labelDashes = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && (
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-accent uppercase">
          {labelDashes && <span className="text-muted/40">— </span>}
          {label}
          {labelDashes && <span className="text-muted/40"> —</span>}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-instrument)] text-4xl leading-[1.1] font-normal tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
