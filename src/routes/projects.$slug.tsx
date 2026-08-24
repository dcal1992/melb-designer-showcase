import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) {
      return {
        meta: [
          { title: "Project not found — Archer & Co." },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${project.title} — Archer & Co.` },
        {
          name: "description",
          content: project.summary,
        },
        { property: "og:title", content: `${project.title} — Archer & Co.` },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "website" },
        { property: "og:image", content: project.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: project.cover },
      ],
    };
  },
  loader: ({ params }): { project: Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = getProject(slug)!;
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length]!;

  return (
    <div className="px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-screen-xl">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            to="/projects"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
          >
            ← All projects
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Title block */}
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {project.category}
            </p>
            <h1 className="mt-4 font-sans text-4xl font-light tracking-tight md:text-6xl">
              {project.title}
            </h1>
          </div>
          <div className="md:col-span-4 md:border-l md:border-border md:pl-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
          </div>
        </div>

        {/* Cover image */}
        <div className="mb-4 overflow-hidden rounded-sm bg-secondary">
          <img
            src={project.cover}
            alt={project.title}
            width={project.coverWidth}
            height={project.coverHeight}
            className="max-h-[70vh] w-full object-cover"
          />
        </div>

        {/* Metadata + detail */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <dl className="space-y-0 border-t border-border font-mono text-[12px]">
              <div className="flex justify-between border-b border-border py-4">
                <dt className="text-muted-foreground">Client</dt>
                <dd className="text-foreground">{project.client}</dd>
              </div>
              <div className="flex justify-between border-b border-border py-4">
                <dt className="text-muted-foreground">Year</dt>
                <dd className="text-foreground">{project.year}</dd>
              </div>
              <div className="flex justify-between border-b border-border py-4">
                <dt className="text-muted-foreground">Scope</dt>
                <dd className="text-right text-foreground">{project.scope}</dd>
              </div>
              <div className="flex justify-between py-4">
                <dt className="text-muted-foreground">Type</dt>
                <dd className="text-right text-foreground">
                  {project.types.join(", ")}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.types.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-2xl font-sans text-lg font-light leading-relaxed text-foreground md:text-xl">
              {project.description}
            </p>

            <div className="mt-10 overflow-hidden rounded-sm bg-secondary">
              <img
                src={project.detail}
                alt={`${project.title} — detail`}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Next project */}
        <div className="mt-24 border-t border-border pt-12">
          <Link
            to="/projects/$slug"
            params={{ slug: nextProject.slug }}
            className="group flex items-end justify-between"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Next project
              </p>
              <h2 className="mt-3 font-sans text-3xl font-light tracking-tight transition-colors group-hover:text-accent md:text-4xl">
                {nextProject.title}
              </h2>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
