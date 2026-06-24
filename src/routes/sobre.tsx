import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-scroll-reveal";
import about from "@/assets/about-fabrica.jpg";
import story from "@/assets/story-family.jpg";
import hero from "@/assets/hero-living.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A Casa — Casa Ambiente" },
      {
        name: "description",
        content:
          "Mais de uma década compondo cenários em São Bento do Sul. Curadoria, fabricação própria e atendimento consultivo.",
      },
      { property: "og:title", content: "A Casa Ambiente" },
      {
        property: "og:description",
        content: "Cenários de luxo projetados sob medida — com a exclusividade de quem fabrica.",
      },
    ],
  }),
  component: About,
});

function Section({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal(delay);
  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

function About() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-black text-white">
        <img
          src={hero}
          alt="Ambiente Casa Ambiente"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        <div className="relative h-full container-x flex flex-col justify-end pb-16 md:pb-20">
          <div className="flex items-center gap-3 mb-7 text-muted-foreground">
            <span className="h-px w-8 bg-white/25" />
            <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-teal">
              A Casa
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl max-w-4xl leading-[0.98] font-semibold animate-fade-in">
            Uma marca de cenários, <span className="italic font-light">não apenas de móveis</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-muted-foreground leading-relaxed">
            Conforto não é produto. É percepção. É experiência. É a sensação de pertencimento dentro
            do próprio lar.
          </p>
        </div>
      </section>

      <section className="container-x py-24 grid gap-14 lg:grid-cols-12">
        <Section className="lg:col-span-5">
          <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground mb-3">
            Nossa origem
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Curadoria, conforto e visão de longo prazo.
          </h2>
        </Section>
        <Section
          className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed"
          delay={150}
        >
          <p>
            A Casa Ambiente nasceu da combinação entre curadoria, conforto e visão de longo prazo.
            Desde o início, a marca foi construída para ir além da venda de móveis: transformar
            casas em ambientes de permanência, acolhimento e identidade.
          </p>
          <p>
            Ao longo de mais de uma década, consolidamos nossa presença em São Bento do Sul e região
            através de uma operação baseada em confiança, atendimento próximo e seleção criteriosa
            de produtos.
          </p>
          <p>
            Com o tempo, estruturamos fabricação própria de colchões e estofados, elevando controle
            de qualidade, exclusividade e capacidade de personalização.
          </p>
        </Section>
      </section>

      <section className="bg-secondary">
        <div className="container-x py-24 grid gap-12 lg:grid-cols-2 items-center">
          <Section>
            <img
              src={about}
              alt="Fabricação Casa Ambiente"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-1000"
            />
          </Section>
          <Section delay={200}>
            <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-teal mb-4">
              Fabricação própria
            </div>
            <h2 className="text-4xl md:text-5xl leading-tight font-semibold">
              A exclusividade
              <br />
              <span className="italic font-light">de quem fabrica.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
              Cada colchão e estofado nasce em nossa fábrica, sob critérios próprios de densidade,
              costura e acabamento. Personalização real, do briefing à montagem.
            </p>
          </Section>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          <Section>
            <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-teal mb-4">
              Atendimento
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold">Consultivo, refinado, seguro.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
              Falamos como quem entende profundamente de conforto e composição. Não forçamos venda —
              orientamos. Nossa autoridade vem da segurança do discurso e do cuidado em cada
              projeto.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-flex items-center gap-3 bg-teal text-primary-foreground px-7 py-4 text-sm uppercase tracking-wider font-semibold rounded-full hover:bg-teal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Iniciar um projeto <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Section>
          <Section delay={200}>
            <img
              src={story}
              alt="Família em ambiente Casa Ambiente"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-1000"
            />
          </Section>
        </div>
      </section>
    </>
  );
}
