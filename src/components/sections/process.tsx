import { siteContent } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessIcon } from "@/components/sections/process-icon";

export function Process() {
  const { process } = siteContent;

  return (
    <section id="surec" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Metodolojimiz"
          title={process.title}
          subtitle={process.subtitle}
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, index) => (
            <article
              key={step.id}
              className="group relative flex flex-col rounded-2xl border border-border bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[var(--shadow)]"
            >
              <div className="mb-6 flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-cream">
                  <ProcessIcon name={step.icon} className="h-5 w-5" />
                </span>
                <span className="font-[family-name:var(--font-instrument)] text-4xl leading-none text-accent-soft transition-colors group-hover:text-accent/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
