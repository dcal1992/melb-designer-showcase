import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Archer & Co." },
      {
        name: "description",
        content:
          "Selected portfolio of branding, logo design, packaging, and website design projects by Archer & Co., a senior graphic designer in Melbourne.",
      },
      { property: "og:title", content: "Projects — Archer & Co." },
      {
        property: "og:description",
        content:
          "Selected portfolio of branding, logo design, packaging, and website design projects by Archer & Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-screen-xl">
        <header className="mb-16 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            (02) Selected Work
          </p>
          <h1 className="mt-5 font-sans text-4xl font-light tracking-tight md:text-6xl">
            Projects
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            A selection of identities, packaging, and digital systems built
            between 2022 and 2025. Hover any plate to reveal its name and focus.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-24">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="project-card group relative block"
    >
      <div className="relative overflow-hidden rounded-sm bg-secondary">
        <img
          src={project.cover}
          alt={project.title}
          width={project.coverWidth}
          height={project.coverHeight}
          loading="lazy"
          className="card-image aspect-[4/5] w-full object-cover"
        />
        {/* Hover overlay — reveals project name + category over the image */}
        <div className="reveal-overlay absolute inset-0 flex items-end bg-gradient-to-t from-black/55 via-black/10 to-transparent">
          <div className="reveal-content p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
              {project.category}
            </p>
            <h3 className="mt-1.5 font-sans text-lg font-medium text-white">
              {project.title}
            </h3>
            <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
              View project →
            </span>
          </div>
        </div>
      </div>
      {/* Default caption beneath the image, fades on hover */}
      <div className="card-caption mt-5">
        <h3 className="font-sans text-base font-medium text-foreground">
          {project.title}
        </h3>
        <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {project.category} / {project.year}
        </p>
      </div>
    </Link>
  );
}
