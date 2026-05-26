import { yearsSince } from "@/lib/utils";

export type BrandStat = { value: string; label: string };

export function getBrandExperience(foundedYear: number) {
  const years = yearsSince(foundedYear);

  return {
    years,
    stats: [
      { value: String(foundedYear), label: "Kuruluş yılı" },
      { value: `${years}+`, label: "Yıl deneyim" },
      { value: "100+", label: "Tamamlanan proje" },
    ] satisfies BrandStat[],
  };
}
