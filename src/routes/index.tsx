import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Archer & Co. — Senior Graphic Designer, Melbourne" },
      {
        name: "description",
        content:
          "Senior graphic designer in Melbourne creating quietly impactful visual systems — branding, logo design, packaging, and website design.",
      },
      { property: "og:title", content: "Archer & Co. — Senior Graphic Designer, Melbourne" },
      {
        property: "og:description",
        content:
          "Editorial-led brand identities, logo systems, and website design from a senior graphic designer in Melbourne.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="px-6 pt-24 pb-32 md:px-12 md:pt-40 md:pb-48">
        <div className="mx-auto max-w-5xl text-center">
          <p className="fade-up mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            Senior Graphic Designer · Melbourne, AU
          </p>
          <h1 className="fade-up font-sans text-4xl font-light leading-[1.08] tracking-tight text-pretty md:text-6xl [animation-delay:100ms]">
            Creating <span className="italic text-accent">quietly impactful</span>{" "}
            visual systems for brands worth remembering.
          </h1>
          <p className="fade-up mx-auto mt-10 max-w-md text-sm leading-relaxed text-muted-foreground [animation-delay:200ms]">
            An independent practice specialising in editorial-led identity work
            for cultural institutions and high-end craft brands.
          </p>
          <div className="fade-up mt-12 flex flex-wrap items-center justify-center gap-5 [animation-delay:300ms]">
            <Link
              to="/projects"
              className="rounded-sm bg-foreground px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.15em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View selected work
            </Link>
            <Link
              to="/contact"
              className="font-mono text-[12px] uppercase tracking-[0.15em] text-foreground underline decoration-accent/40 underline-offset-[6px] transition-colors hover:decoration-accent"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Selected Work
              </p>
              <h2 className="mt-3 font-sans text-3xl font-light tracking-tight md:text-4xl">
                A practice in restraint.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent sm:inline"
            >
              All projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 md:gap-y-28">
            {featured.map((project, i) => (
              <FeaturedCard key={project.slug} project={project} offset={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach strip */}
      <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              (01) The Practice
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="max-w-2xl font-sans text-2xl font-light leading-snug tracking-tight md:text-3xl">
              The best design is felt before it is read. By prioritising negative
              space and typographic rhythm, I build identities that endure.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
              <p>
                Over the last decade I have partnered with founders and
                institutions across Australia to bring clarity to complex stories
                through thoughtful art direction.
              </p>
              <p>
                Based in Melbourne, operating at the intersection of traditional
                print craft and digital refinement.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-foreground underline decoration-accent/40 underline-offset-[6px] transition-colors hover:decoration-accent"
            >
              More about Archer →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Project } from "@/lib/projects";

function FeaturedCard({ project, offset }: { project: Project; offset: boolean }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={`project-card group relative block ${offset ? "md:mt-24" : ""}`}
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
          <div className="reveal-content p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
              {project.category}
            </p>
            <h3 className="mt-2 font-sans text-xl font-medium text-white">
              {project.title}
            </h3>
            <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
              View project →
            </span>
          </div>
        </div>
      </div>
      {/* Default caption beneath the image, fades on hover */}
      <div className="card-caption mt-6">
        <h3 className="font-sans text-base font-medium text-foreground">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {project.category} / {project.year}
        </p>
      </div>
    </Link>
  );
}
