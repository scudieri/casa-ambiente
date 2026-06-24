import { Link } from "@tanstack/react-router";
import { Search, Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeProvider";

const nav = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Coleções" },
  { to: "/sobre", label: "A Casa" },
  { to: "/projetos", label: "Projetos" },
  { to: "/contato", label: "Contato" },
];

function NavLink({ to, label, isHero }: { to: string; label: string; isHero: boolean }) {
  return (
    <Link
      to={to}
      className={`relative text-[11px] tracking-[0.28em] uppercase font-medium transition-colors duration-300 py-1 group ${
        isHero ? "text-white/70 hover:text-white" : "text-foreground/70 hover:text-foreground"
      }`}
      activeOptions={{ exact: to === "/" }}
      activeProps={{ className: "text-teal" }}
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-teal transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const { theme, toggle } = useTheme();
  const isHero = isHome && !scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 text-foreground transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* Eyebrow */}
      <div className={`${scrolled ? "border-b border-border" : "border-b border-transparent"}`}>
        <div className={`container-x flex h-8 items-center justify-between text-[10px] tracking-[0.32em] uppercase font-medium transition-colors duration-500 ${isHome && !scrolled ? "text-white/40" : "text-muted-foreground"}`}>
          <span>São Bento do Sul · Atendimento consultivo</span>
          <span className="hidden md:inline">Fabricação própria · Entrega em todo o Brasil</span>
        </div>
      </div>

      {/* Main bar */}
      <div className="relative">
        <div className="container-x grid grid-cols-[1fr_auto_1fr] items-center h-24 gap-6">
          {/* Left: utilities */}
          <div className={`hidden lg:flex items-center gap-6 text-[11px] tracking-[0.28em] uppercase transition-colors duration-500 ${isHero ? "text-white/50" : "text-muted-foreground"}`}>
            <button
              aria-label="Buscar"
              className="inline-flex items-center gap-2 hover:text-teal transition-colors duration-300"
            >
              <Search className="h-3.5 w-3.5" strokeWidth={1.25} />
              <span>Buscar</span>
            </button>
            <span className={`h-3 w-px transition-colors duration-500 ${isHero ? "bg-white/15" : "bg-border"}`} />
            <a href="tel:+5547000000000" className="hover:text-teal transition-colors duration-300">
              +55 47 0000·0000
            </a>
          </div>

          {/* Center: logo */}
          <div className="justify-self-start lg:justify-self-center flex justify-start lg:justify-center">
            <Logo />
          </div>

          {/* Right: nav + theme toggle */}
          <div className="hidden lg:flex items-center justify-end gap-6">
            <nav className="flex items-center gap-8">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} label={n.label} isHero={isHero} />
              ))}
            </nav>
            <span className={`h-3 w-px transition-colors duration-500 ${isHero ? "bg-white/15" : "bg-border"}`} />
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Modo claro" : "Modo escuro"}
              className={`p-2 rounded-full hover:bg-secondary transition-colors duration-300 ${isHero ? "text-white/60 hover:text-white" : "text-foreground/60 hover:text-foreground"}`}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile: menu + theme */}
          <div className="lg:hidden justify-self-end flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Modo claro" : "Modo escuro"}
              className="p-2 rounded-full hover:bg-secondary transition-colors duration-300 text-foreground/60"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className={`p-2 transition-colors ${isHero ? "text-white/70 hover:text-teal" : "text-foreground/70 hover:text-teal"}`}
              onClick={() => setOpen((s) => !s)}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.25} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.25} />
              )}
            </button>
          </div>
        </div>

        {/* Hairline bottom border with teal accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute -bottom-px left-1/2 -translate-x-1/2 h-px w-24 bg-teal/70" />
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-6 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-3 text-[11px] tracking-[0.28em] uppercase font-medium text-foreground/70 hover:text-teal border-b border-border"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-6 text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
              São Bento do Sul · Atendimento consultivo
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
