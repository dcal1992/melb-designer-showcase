import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Damian Calello" },
      {
        name: "description",
        content:
          "Start a project with Damian Calello — a senior graphic designer in Melbourne available for branding, logo design, packaging, and website design commissions.",
      },
      { property: "og:title", content: "Contact — Damian Calello" },
      {
        property: "og:description",
        content:
          "Start a project with Damian Calello — branding, logo design, packaging, and website design commissions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Left — intro + details */}
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              (04) Contact
            </p>
            <h1 className="mt-5 font-sans text-4xl font-light leading-tight tracking-tight md:text-6xl">
              Let's talk about the next space.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Available for a small number of identity, packaging, and digital
              commissions each year. Tell me a little about the project and I'll
              be in touch within two business days.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:hello@damiancalello.com"
                  className="mt-1 block font-sans text-lg text-foreground transition-colors hover:text-accent"
                >
                  hello@damiancalello.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </p>
                <p className="mt-1 font-sans text-lg text-foreground">
                  +61 3 9000 0000
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Studio
                </p>
                <p className="mt-1 font-sans text-lg text-foreground">
                  Fitzroy, Melbourne VIC
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7 md:border-l md:border-border md:pl-12">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-start justify-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  Received
                </p>
                <h2 className="mt-4 font-sans text-3xl font-light tracking-tight">
                  Thank you — your message is on its way.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  I'll review your brief and respond within two business days. In
                  the meantime, feel free to browse the rest of the work.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@studio.com"
                />
                <Field
                  label="Project type"
                  name="project"
                  placeholder="Branding, logo, packaging, web…"
                />
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about the brief…"
                    className="w-full resize-none border-b border-border bg-transparent py-3 font-sans text-base text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-sm bg-foreground px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.15em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Send enquiry
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full border-b border-border bg-transparent py-3 font-sans text-base text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none"
      />
    </div>
  );
}
