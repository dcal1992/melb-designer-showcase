import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { to: "/", label: "Index" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function NavLink({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
  return (
    <Link
      to={to as "/"}
      onClick={onClick}
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-5 md:px-12">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
        >
          Damian <span className="text-accent">Calello</span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:inline">
            Melbourne, AU
          </span>
          <ThemeToggle />
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid h-9 w-9 place-items-center text-foreground transition-colors hover:text-accent sm:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="15" y2="15" />
                  <line x1="15" y1="5" x2="5" y2="15" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border/60 bg-background/95 backdrop-blur-md sm:hidden"
        >
          <div className="mx-auto flex max-w-screen-xl flex-col gap-5 px-6 py-6">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
