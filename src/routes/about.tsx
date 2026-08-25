import { createFileRoute } from "@tanstack/react-router";
import aboutPortrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Damian Calello" },
      {
        name: "description",
        content:
          "Damian Calello is a senior graphic designer in Melbourne with a decade of experience turning brand strategy into identities that hold their shape — branding, logo design, and editorial systems.",
      },
      { property: "og:title", content: "About — Damian Calello" },
      {
        property: "og:description",
        content:
          "A senior graphic designer in Melbourne with a decade of editorial-led identity work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const services = [
  {
    no: "01",
    title: "Brand Identity",
    body: "End-to-end identity systems — wordmarks, type, colour, and the rules that hold them together across every surface.",
  },
  {
    no: "02",
    title: "Logo Design",
    body: "Marks built on an exposed geometric grid, engineered to behave at 8mm and 8 metres alike.",
  },
  {
    no: "03",
    title: "Packaging",
    body: "Modular label and packaging systems for craft brands, designed to scale across a range without losing discipline.",
  },
  {
    no: "04",
    title: "Website Design",
    body: "Editorial digital surfaces — art-directed layouts where typography and photography carry the weight.",
  },
];

const timeline = [
  { year: "2013", event: "Began independent practice in Melbourne" },
  { year: "2016", event: "Identity lead for a national cultural institution" },
  { year: "2020", event: "Founded Damian Calello studio" },
  { year: "2024", event: "AGDA finalist, Identity of the Year" },
];

function AboutPage() {
  return (
    <div className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-screen-xl">
        {/* Intro */}
        <section className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              (03) About
            </p>
            <div className="mt-8 overflow-hidden rounded-sm bg-secondary">
              <img
                src={aboutPortrait}
                alt="Damian Calello, senior graphic designer, in the Melbourne studio"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:pl-4">
            <h1 className="font-sans text-3xl font-light leading-tight tracking-tight md:text-5xl">
              A decade of turning ambition into identities people trust.
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm Damian Calello — a senior graphic designer working independently from
                a studio in Fitzroy, Melbourne. For over ten years I've partnered
                with founders and cultural institutions across Australia to bring
                clarity to complex stories through thoughtful art direction.
              </p>
              <p>
                My work sits at the seam between identity and editorial. I care
                about the unglamorous details — the grid, the kerning, the way a
                mark behaves at 8mm and 8 metres. The result is design that's felt
                before it's read.
              </p>
              <p>
                I take on a deliberately small number of projects each year so
                each one gets the attention it deserves.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-28 border-t border-border pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Capabilities
          </p>
          <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.no}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-accent">{s.no}</span>
                  <h3 className="font-sans text-xl font-normal text-foreground">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-28 border-t border-border pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Trajectory
          </p>
          <div className="mt-10 divide-y divide-border border-t border-border">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="flex items-baseline gap-8 py-5"
              >
                <span className="font-mono text-sm text-accent">{t.year}</span>
                <span className="font-sans text-base text-foreground">
                  {t.event}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
