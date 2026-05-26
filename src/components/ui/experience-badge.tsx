type ExperienceBadgeProps = {
  years: number;
  label?: string;
};

export function ExperienceBadge({
  years,
  label = "yıllık sektör deneyimi",
}: ExperienceBadgeProps) {
  return (
    <div className="rounded-2xl border border-border bg-background px-6 py-5 shadow-lg">
      <p className="font-[family-name:var(--font-instrument)] text-4xl text-accent">
        {years}+
      </p>
      <p className="mt-1 text-sm font-medium text-muted">{label}</p>
    </div>
  );
}
