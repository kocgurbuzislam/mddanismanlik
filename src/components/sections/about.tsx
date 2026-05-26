import Image from "next/image";
import { siteContent } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const { about } = siteContent;

  return (
    <section id="hakkimizda" className="scroll-mt-24 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow)]">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
                alt="Gastronomi ve işletme danışmanlığı"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-background px-6 py-5 shadow-lg sm:-right-8">
              <p className="font-[family-name:var(--font-instrument)] text-4xl text-accent">
                28+
              </p>
              <p className="mt-1 text-sm font-medium text-muted">yıllık sektör deneyimi</p>
            </div>
          </div>

          <div>
            <SectionHeading
              label="Hakkımızda"
              title={about.title}
              subtitle="Türkiye'nin gıda ve içecek sektöründe güvenilir danışmanlık ortağınız."
            />

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
