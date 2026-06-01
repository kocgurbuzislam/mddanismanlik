import { yearsSince } from "@/lib/utils";

export type BrandStats = {
  foundedYear: number;
  years: number;
  completedProjects: number;
};

export function getBrandStats(
  foundedYear: number,
  options?: {
    completedProjectsMin?: number;
    referenceCount?: number;
  },
): BrandStats {
  const years = yearsSince(foundedYear);
  const completedProjects = Math.max(
    options?.completedProjectsMin ?? 100,
    options?.referenceCount ?? 0,
  );

  return { foundedYear, years, completedProjects };
}