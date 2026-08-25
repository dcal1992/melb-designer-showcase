export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-12">
        <div className="max-w-sm">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            New Business
          </span>
          <a
            href="mailto:hello@damiancalello.com"
            className="mt-3 block font-sans text-2xl font-light text-foreground transition-colors hover:text-accent"
          >
            hello@damiancalello.com
          </a>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            Fitzroy, Melbourne VIC
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
            >
              Instagram
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
            >
              Behance
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            © {new Date().getFullYear()} Damian Calello. — Melbourne, AU
          </p>
        </div>
      </div>
    </footer>
  );
}
