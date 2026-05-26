import Image from "next/image";
import { ArrowDown, Phone } from "lucide-react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn, yearsSince } from "@/lib/utils";

type Stat = { value: string; label: string };

function HeroStats({
  stats,
  compact = false,
  className,
}: {
  stats: Stat[];
  compact?: boolean;
  className?: string;
}) {
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

export function Hero() {
  const { brand, contact } = siteContent;
  const experienceYears = yearsSince(brand.foundedYear);

  const stats: Stat[] = [
    { value: String(brand.foundedYear), label: "Kuruluş yılı" },
    { value: `${experienceYears}+`, label: "Yıl deneyim" },
    { value: "100+", label: "Tamamlanan proje" },
  ];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=80"
          alt="Şık restoran iç mekânı"
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h1 className="animate-fade-up animate-fade-up-delay-1 font-[family-name:var(--font-instrument)] text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] font-normal tracking-tight text-foreground">
              {brand.name}
            </h1>

            <p className="animate-fade-up animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {brand.slogan}
            </p>

            <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <Button href={contact.phoneHref} variant="primary">
                <Phone className="h-4 w-4" />
                Hemen Arayın
              </Button>
              <Button href="#hakkimizda" variant="outline">
                Keşfedin
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="animate-fade-up animate-fade-up-delay-3 hidden rounded-2xl border border-border bg-cream/90 p-6 shadow-[var(--shadow)] backdrop-blur-md lg:block">
            <p className="text-sm leading-relaxed text-muted">
              Restoran, kafe, otel ve gıda işletmeleri için konseptten işletmeye,
              eğitimden sürdürülebilir büyümeye uçtan uca danışmanlık.
            </p>
            <HeroStats stats={stats} className="mt-6 border-t border-border pt-6" />
          </div>
        </div>

        <HeroStats
          stats={stats}
          compact
          className="mt-12 rounded-2xl border border-border bg-cream/90 p-5 shadow-[var(--shadow)] backdrop-blur-md lg:hidden"
        />
      </div>
    </section>
  );
}
