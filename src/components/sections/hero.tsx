import Image from "next/image";
import { ArrowDown, Phone } from "lucide-react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "1997", label: "Kuruluş yılı" },
  { value: "28+", label: "Yıl deneyim" },
  { value: "100+", label: "Tamamlanan proje" },
];

export function Hero() {
  const { brand, contact } = siteContent;

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
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-[family-name:var(--font-instrument)] text-3xl text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-cream/90 p-5 shadow-[var(--shadow)] backdrop-blur-md lg:hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-instrument)] text-2xl text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
