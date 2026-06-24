import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-living.jpg";
import a from "@/assets/cat-estofados.jpg";
import b from "@/assets/cat-sala-jantar.jpg";
import c from "@/assets/cat-dormitorio.jpg";
import d from "@/assets/cat-home-office.jpg";
import e from "@/assets/cat-iluminacao.jpg";
import { useReveal, useRevealAny } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Casa Ambiente" },
      {
        name: "description",
        content:
          "Cenários assinados pela Casa Ambiente. Residências, apartamentos e ambientes sob medida.",
      },
      { property: "og:title", content: "Projetos Casa Ambiente" },
      {
        property: "og:description",
        content: "Ambientes projetados sob medida — curadoria e fabricação própria.",
      },
    ],
  }),
  component: Projetos,
});

function ProjectCard({
  item,
  className = "",
  delay = 0,
}: {
  item: { title: string; local: string; img: string };
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal(delay);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      <a href="#" className="group relative overflow-hidden block w-full h-full rounded-2xl">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/0 group-hover:from-black/90 transition-all duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-teal/5" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
          <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground mb-2">
            {item.local}
          </div>
          <div className="flex items-end justify-between gap-3">
            <h3 className="font-semibold group-hover:text-teal transition-colors duration-300">
              {item.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>
      </a>
    </div>
  );
}

const items = [
  {
    title: "Residência Permanência",
    local: "Joinville · SC",
    img: hero,
    span: "md:col-span-2 md:row-span-2",
  },
  { title: "Apartamento Linha Pura", local: "Curitiba · PR", img: a },
  { title: "Suíte Master Solano", local: "São Bento do Sul · SC", img: c },
  { title: "Sala de Jantar Boavista", local: "Jaraguá do Sul · SC", img: b },
  { title: "Home Office Atelier", local: "Florianópolis · SC", img: d },
  { title: "Lounge Verso", local: "Blumenau · SC", img: e },
];

function Projetos() {
  const cta = useReveal(0);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="border-b border-border">
        <div className="container-x py-20 md:py-28 grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-teal" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-teal">
                Cenários assinados
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl max-w-4xl leading-[0.98] font-semibold">
              Cada projeto, <span className="italic font-light text-teal">um cenário único.</span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Ambientes desenvolvidos com nossos clientes — do briefing à montagem. Curadoria,
              fabricação própria e atenção a cada detalhe.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="container-x py-16 md:py-20 pb-28 md:pb-36">
        {/* Hero project */}
        <ProjectCard
          item={items[0]}
          delay={0}
          className="block w-full overflow-hidden mb-6 aspect-[16/9] md:aspect-[21/9]"
        />

        {/* Second row */}
        <div className="grid gap-6 md:grid-cols-5 mb-6">
          <ProjectCard item={items[1]} delay={100} className="md:col-span-3 aspect-[4/3]" />
          <ProjectCard item={items[2]} delay={200} className="md:col-span-2 aspect-[3/4]" />
        </div>

        {/* Third row */}
        <div className="grid gap-6 md:grid-cols-3">
          {items.slice(3).map((it, i) => (
            <ProjectCard key={it.title} item={it} delay={300 + i * 100} className="aspect-[4/5]" />
          ))}
        </div>
      </section>

      <section
        ref={cta.ref}
        className={`bg-secondary transition-all duration-800 ${
          cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container-x py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl max-w-2xl leading-tight font-semibold">
            Vamos projetar o próximo cenário juntos?
          </h2>
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 bg-teal text-primary-foreground px-7 py-4 text-sm uppercase tracking-wider font-semibold rounded-full hover:bg-teal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Iniciar projeto <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
