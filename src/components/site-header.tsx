import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { to: "/", label: "Index" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-5 md:px-12">
        <Link
          to="/"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
        >
          Archer <span className="text-accent">&</span> Co.
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-accent"
              aria-current={isActive(item.to) ? "page" : undefined}
            >
              <span className={isActive(item.to) ? "text-accent" : "text-muted-foreground"}>
                {item.label}
              </span>
            </Link>
          ))}
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
