"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getBrandStats } from "@/lib/brand-stats";
import { cn } from "@/lib/utils";

type StatGridProps = {
  foundedYear: number;
  completedProjectsMin?: number;
  referenceCount?: number;
  compact?: boolean;
  className?: string;
};

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return active ? value : target;
}

export function StatGrid({
  foundedYear,
  completedProjectsMin = 100,
  referenceCount = 0,
  compact = false,
  className,
}: StatGridProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const stats = useMemo(
    () => getBrandStats(foundedYear, { completedProjectsMin, referenceCount }),
    [foundedYear, completedProjectsMin, referenceCount],
  );

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const founded = useCountUp(stats.foundedYear, animate);
  const years = useCountUp(stats.years, animate);
  const completed = useCountUp(stats.completedProjects, animate);

  const items = [
    { value: String(founded), label: "Kuruluş yılı" },
    { value: `${years}+`, label: "Yıl deneyim" },
    { value: `${completed}+`, label: "Tamamlanan proje" },
  ];

  return (
    <div ref={rootRef} className={cn("grid grid-cols-3 gap-4", className)}>
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
