import { getBrandStats } from "@/lib/brand-stats";
import { cn } from "@/lib/utils";

type StatDisplayProps = {
  foundedYear: number;
  completedProjectsMin?: number;
  referenceCount?: number;
  compact?: boolean;
  className?: string;
};

export function StatDisplay({
  foundedYear,
  completedProjectsMin = 100,
  referenceCount = 0,
  compact = false,
  className,
}: StatDisplayProps) {
  const stats = getBrandStats(foundedYear, {
    completedProjectsMin,
    referenceCount,
  });

  const items = [
    { value: String(stats.foundedYear), label: "Kuruluş yılı" },
    { value: `${stats.years}+`, label: "Yıl deneyim" },
    { value: `${stats.completedProjects}+`, label: "Tamamlanan proje" },
  ];

  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {items.map((stat) => (
        <div key={stat.label} className={compact ? "text-center" : undefined}>
          <p
            className={cn(
              "font-[family-name:var(--font-instrument)] text-accent tabular-nums",
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
