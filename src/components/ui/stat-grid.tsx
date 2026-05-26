import type { BrandStat } from "@/lib/brand-stats";
import { cn } from "@/lib/utils";

type StatGridProps = {
  stats: BrandStat[];
  compact?: boolean;
  className?: string;
};

export function StatGrid({ stats, compact = false, className }: StatGridProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className={compact ? "text-center" : undefined}>
          <p
            className={cn(
              "font-[family-name:var(--font-instrument)] text-accent",
              compact ? "text-2xl" : "text-3xl",
            )}
          >
            {stat.value}
          </p>
          <p
            className={cn(
              "mt-1 text-muted",
              compact ? "text-[10px]" : "text-xs",
            )}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
