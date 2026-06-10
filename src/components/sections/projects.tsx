import dynamic from "next/dynamic";
import { siteContent } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

const ProjectsGrid = dynamic(
  () =>
    import("@/components/sections/projects-grid").then((mod) => mod.ProjectsGrid),
  {
    loading: () => (
      <ul
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-hidden
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={index}
            className="aspect-[4/3] animate-pulse rounded-2xl bg-background-alt"
          />
        ))}
      </ul>
    ),
  },
);

export function Projects() {
  const { projects } = siteContent;

  return (
    <section
      id="projeler"
      className="scroll-mt-24 bg-background pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Projeler"
          title={projects.title}
          subtitle={projects.subtitle}
          align="center"
          className="mx-auto"
        />

        <ProjectsGrid entries={projects.entries} />
      </div>
    </section>
  );
}
