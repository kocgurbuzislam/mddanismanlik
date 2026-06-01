"use client";

import { useEffect, useState } from "react";
import { getBrandStats } from "@/lib/brand-stats";

type ExperienceBadgeProps = {
  foundedYear: number;
  label?: string;
};

export function ExperienceBadge({
  foundedYear,
  label = "yıllık sektör deneyimi",
}: ExperienceBadgeProps) {
  const [years, setYears] = useState(() => getBrandStats(foundedYear).years);

  useEffect(() => {
    setYears(getBrandStats(foundedYear).years);
  }, [foundedYear]);

  return (
    <div className="rounded-2xl border border-border bg-background px-6 py-5 shadow-lg">
      <p className="font-[family-name:var(--font-instrument)] text-4xl text-accent tabular-nums">
        {years}+
      </p>
      <p className="mt-1 text-sm font-medium text-muted">{label}</p>
    </div>
  );
}
