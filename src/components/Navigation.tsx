import { Link, useLocation } from "@tanstack/react-router";

const items = [
  { label: "FRONT PAGE", to: "/", page: "01" },
  { label: "ABOUT", hash: "#about", page: "02" },

  { label: "RECORD", hash: "#experience", page: "04" },
  { label: "DISPATCHES", hash: "#projects", page: "05" },
  { label: "LETTERS", hash: "#contact", page: "06" },
];

export function Navigation() {
  const loc = useLocation();
  const onHome = loc.pathname === "/";

  return (
    <>
      {/* Desktop side tabs */}
      <nav className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {items.map((it, i) => {
          const href = onHome && it.hash ? it.hash : "/";
          const isActive = onHome && i === 0;
          return (
            <a
              key={it.label}
              href={href}
              data-cursor="open"
              className="group relative flex items-center"
              style={{ writingMode: "vertical-rl" }}
            >
              <span
                className="meta py-4 pl-3 pr-2 transition-all"
                style={{
                  background: "var(--paper-dark)",
                  border: "1px solid var(--ink-faded)",
                  borderRight: "none",
                  color: "var(--ink)",
                  marginRight: isActive ? 0 : -6,
                  paddingLeft: isActive ? 16 : 12,
                  borderLeftWidth: isActive ? 3 : 1,
                  borderLeftColor: isActive ? "var(--red-stamp)" : "var(--ink-faded)",
                }}
              >
                {it.label}
                <span
                  className="ml-2 opacity-50"
                  style={{ fontSize: 10 }}
                >
                  P.{it.page}
                </span>
              </span>
            </a>
          );
        })}
      </nav>

      {/* Mobile top bookmark strip */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex overflow-x-auto md:hidden"
        style={{ background: "var(--paper-dark)", borderBottom: "1px solid var(--ink)" }}>
        {items.map((it) => {
          const href = onHome && it.hash ? it.hash : "/";
          return (
            <a key={it.label} href={href} className="meta whitespace-nowrap px-3 py-2"
              style={{ borderRight: "1px solid var(--ink-faded)" }}>
              {it.label}
            </a>
          );
        })}
      </nav>

      <Link
        to="/"
        data-cursor="home"
        className="meta fixed left-4 top-4 z-50 hidden md:block"
        style={{ background: "var(--paper-dark)", padding: "6px 10px", border: "1px solid var(--ink)" }}
      >
        ← THE PORTFOLIO
      </Link>
    </>
  );
}
