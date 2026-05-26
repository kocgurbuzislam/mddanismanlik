import Image from "next/image";
import { siteContent } from "@/content/site";
import { ExperienceBadge } from "@/components/ui/experience-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBrandExperience } from "@/lib/brand-stats";

export function About() {
  const { about, brand } = siteContent;
  const { years } = getBrandExperience(brand.foundedYear);

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
            <div className="absolute -bottom-6 -right-4 sm:-right-8">
              <ExperienceBadge years={years} />
            </div>
          </div>

          <div>
            <SectionHeading title={about.title} subtitle={about.subtitle} />

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-muted">
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
