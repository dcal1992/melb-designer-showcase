import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";

function NavLink({ to, label }: { to: string; label: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
  return (
    <Link
      to={to as "/"}
      className="font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-accent"
      aria-current={active ? "page" : undefined}
    >
      <span className={active ? "text-accent" : "text-muted-foreground"}>
        {label}
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-5 md:px-12">
        <Link
          to="/"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
        >
          Damian Calello <span className="text-accent">&</span> Co.
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          <NavLink to="/" label="Index" />
          <NavLink to="/projects" label="Projects" />
          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:inline">
            Melbourne, AU
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
