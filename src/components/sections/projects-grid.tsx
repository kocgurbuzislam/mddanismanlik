"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import type { ProjectEntry } from "@/types/site";

const ProjectModal = dynamic(
  () =>
    import("@/components/sections/project-modal").then((mod) => mod.ProjectModal),
  { ssr: false },
);

type ProjectsGridProps = {
  entries: ProjectEntry[];
};

export function ProjectsGrid({ entries }: ProjectsGridProps) {
  const [activeProject, setActiveProject] = useState<ProjectEntry | null>(null);
  const closeModal = useCallback(() => setActiveProject(null), []);

  return (
    <>
      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              onClick={() => setActiveProject(project)}
              className="group w-full overflow-hidden rounded-2xl border border-border bg-cream text-left shadow-sm transition-all hover:border-accent/35 hover:shadow-[var(--shadow)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background-alt">
                <Image
                  key={project.cover}
                  src={project.cover}
                  alt={project.coverAlt ?? project.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={
                    project.coverFit === "contain"
                      ? "object-contain object-center"
                      : "object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  }
                />
              </div>
              <div className="px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-accent">
                  Detayları gör
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} />
      )}
    </>
  );
}
