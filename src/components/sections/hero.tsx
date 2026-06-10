import Image from "next/image";
import { ArrowDown, Phone } from "lucide-react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/ui/button";
import { StatDisplay } from "@/components/ui/stat-display";
import { telHref } from "@/lib/contact-links";
import { referenceEntries } from "@/content/references";

export function Hero() {
  const { brand, contact } = siteContent;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
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
              <span className="sr-only"> — {brand.tagline}</span>
            </h1>

            <p className="animate-fade-up animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {brand.tagline}. {brand.slogan}
            </p>

            <div className="animate-fade-up animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <Button href={telHref(contact.phone)} variant="primary">
                <Phone className="h-4 w-4" />
                Hemen Arayın
              </Button>
              <Button href="#hakkimizda" variant="outline">
                Keşfedin
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="animate-fade-up animate-fade-up-delay-3 hidden rounded-2xl border border-border bg-cream p-6 shadow-[var(--shadow)] lg:block">
            <p className="text-sm leading-relaxed text-muted">
              Restoran, kafe, otel ve gıda işletmeleri için konseptten işletmeye,
              eğitimden sürdürülebilir büyümeye uçtan uca danışmanlık.
            </p>
            <StatDisplay
              foundedYear={brand.foundedYear}
              completedProjectsMin={brand.completedProjectsMin}
              referenceCount={referenceEntries.length}
              className="mt-6 border-t border-border pt-6"
            />
          </div>
        </div>

        <StatDisplay
          foundedYear={brand.foundedYear}
          completedProjectsMin={brand.completedProjectsMin}
          referenceCount={referenceEntries.length}
          compact
          className="mt-12 rounded-2xl border border-border bg-cream p-5 shadow-[var(--shadow)] lg:hidden"
        />
      </div>
    </section>
  );
}
