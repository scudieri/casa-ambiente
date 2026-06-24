import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, Hammer, Truck, HeartHandshake } from "lucide-react";
import { useState } from "react";
import heroLiving from "@/assets/hero-living.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import storyFamily from "@/assets/story-family.jpg";
import aboutFabrica from "@/assets/about-fabrica.jpg";
import { categories } from "@/lib/collections";
import { useReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Ambiente — Cenários de permanência" },
      {
        name: "description",
        content:
          "Cenários de luxo projetados sob medida, com a exclusividade de quem fabrica. Mais de uma década compondo ambientes em São Bento do Sul.",
      },
      { property: "og:title", content: "Casa Ambiente — Cenários de permanência" },
      {
        property: "og:description",
        content: "Cenários de luxo projetados sob medida, com a exclusividade de quem fabrica.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [videoFailed, setVideoFailed] = useState(false);

  const manifestoT = useReveal(0);
  const manifestoImg = useReveal(200);
  const stats = useReveal(0);
  const catHeader = useReveal(0);
  const pillars = useReveal(0);
  const projectsHeader = useReveal(0);
  const cta = useReveal(0);

  return (
    <>
      {/* HERO — sempre dark */}
      <section className="relative h-screen w-full overflow-hidden bg-black text-white">
        {!videoFailed ? (
          <video
            src={heroVideo.url}
            poster={heroLiving}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <img
            src={heroLiving}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ animation: "ken-burns 20s ease-in-out infinite alternate" }}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/10" />

        <div className="relative z-10 container-x flex justify-center pt-10 md:pt-12">
          <span className="text-[13px] tracking-[0.28em] uppercase text-white/70 font-medium">
            Casa Ambiente
          </span>
        </div>

        <div className="relative z-10 container-x flex h-[calc(100vh-9rem)] flex-col justify-end pb-16 md:pb-20">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center gap-3 mb-7 text-white/60">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[10px] tracking-[0.4em] uppercase font-medium">
                Desde 2013 · São Bento do Sul
              </span>
            </div>
            <h1 className="text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-[5.25rem] font-semibold">
              Conforto não é produto.
              <br />
              <span className="italic font-light text-white/90">É permanência.</span>
            </h1>
            <p className="mt-8 max-w-lg text-sm md:text-base text-white/65 leading-relaxed font-light">
              Cenários de luxo projetados e fabricados sob medida — para quem entende a casa como um
              lugar de permanência.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase font-medium text-white border-b border-white/40 pb-2 rounded-sm hover:border-teal hover:text-teal transition-all duration-300"
              >
                Agendar atendimento
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
              <Link
                to="/projetos"
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase font-medium text-white/60 hover:text-white transition-colors duration-300"
              >
                Ver projetos
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container-x flex items-center justify-between pb-6 text-[9px] tracking-[0.5em] uppercase text-white/35 font-medium">
            <span>Maison Casa Ambiente</span>
            <span className="hidden md:inline">Atelier próprio · Fabricação sob medida</span>
            <span>Vol. I</span>
          </div>
          <div className="h-px bg-white/10" />
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-background">
        <div className="container-x py-24 md:py-32 lg:py-40">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div
              ref={manifestoT.ref}
              className={`lg:col-span-5 order-2 lg:order-1 transition-all duration-800 ease-out ${
                manifestoT.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-col gap-2 mb-10">
                <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
                  A Maison Casa Ambiente
                </span>
                <span className="h-px w-12 bg-teal" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-semibold">
                Uma casa não
                <br />
                se decora.
                <br />
                <span className="italic font-light text-teal">Ela se compõe.</span>
              </h2>
              <p className="mt-10 max-w-md text-base leading-relaxed text-muted-foreground font-light">
                Nascemos da união entre curadoria, conforto e visão de longo prazo. Peças projetadas
                e fabricadas sob medida em nosso próprio atelier — para quem compõe cenários para
                durar.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase font-medium text-foreground border-b border-border pb-2 rounded-sm hover:gap-4 hover:text-teal hover:border-teal transition-all duration-300"
                >
                  Agendar atendimento <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  O manifesto
                </Link>
              </div>
            </div>

            <div
              ref={manifestoImg.ref}
              className={`lg:col-span-7 order-1 lg:order-2 relative transition-all duration-800 ease-out ${
                manifestoImg.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-10 lg:col-start-3 relative">
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary rounded-2xl shadow-2xl shadow-black/20 group">
                    <img
                      src={storyFamily}
                      alt="Residência projetada pela Casa Ambiente"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="hidden md:block absolute -left-4 lg:-left-10 bottom-10 bg-card p-8 md:p-10 shadow-xl max-w-[18rem] border border-border rounded-2xl">
                    <p className="text-[10px] tracking-[0.32em] uppercase mb-3 text-muted-foreground font-medium">
                      Projeto 24 · SC
                    </p>
                    <p className="text-xl leading-snug font-semibold">
                      Residência das Flores:
                      <br />o equilíbrio entre o bruto e o têxtil.
                    </p>
                    <Link
                      to="/projetos"
                      className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.28em] uppercase font-medium text-teal border-b border-teal pb-1 rounded-sm hover:border-foreground hover:text-foreground transition-all duration-300"
                    >
                      Ver projeto
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:block absolute top-[18%] -left-2 w-[28%] z-10">
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary shadow-xl rounded-2xl border-[10px] border-background">
                    <img
                      src={aboutFabrica}
                      alt="Detalhe de fabricação Casa Ambiente"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
                    />
                  </div>
                  <span className="mt-4 inline-block text-[9px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
                    Atelier próprio · São Bento do Sul
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div
            ref={stats.ref}
            className={`mt-24 md:mt-32 transition-all duration-800 delay-200 ${
              stats.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-card border border-border rounded-2xl p-10 md:p-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-semibold text-teal group-hover:scale-105 transition-transform duration-300 origin-left">
                  12 anos
                </div>
                <div className="mt-2 text-[10px] tracking-[0.32em] uppercase text-muted-foreground font-medium">
                  Compondo ambientes
                </div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-semibold text-teal italic group-hover:scale-105 transition-transform duration-300 origin-left">
                  Tailor-made
                </div>
                <div className="mt-2 text-[10px] tracking-[0.32em] uppercase text-muted-foreground font-medium">
                  Fabricação e logística próprias
                </div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-semibold group-hover:text-teal transition-colors duration-300">
                  Atelier
                </div>
                <div className="mt-2 text-[10px] tracking-[0.32em] uppercase text-muted-foreground font-medium">
                  Design autoral brasileiro
                </div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-semibold group-hover:text-teal transition-colors duration-300">
                  +300
                </div>
                <div className="mt-2 text-[10px] tracking-[0.32em] uppercase text-muted-foreground font-medium">
                  Cenários entregues
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-x py-28 md:py-36">
        <div
          ref={catHeader.ref}
          className={`grid gap-10 md:grid-cols-12 items-end mb-16 md:mb-20 transition-all duration-800 ${
            catHeader.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-teal" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
                Coleções
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-semibold">
              Cada ambiente,
              <br />
              <span className="italic font-light text-teal">uma curadoria.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:text-right">
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Sete famílias de peças selecionadas para compor cenários atemporais — da estrutura ao
              detalhe.
            </p>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-medium border-b border-border pb-1 rounded-sm hover:text-teal hover:border-teal transition-colors duration-300"
            >
              Ver todas <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Featured collections */}
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-12">
          {categories.slice(0, 6).map((c, i) => {
            const isHero = i === 0;
            const isDuo = i === 1 || i === 2;
            const colSpan = isHero ? "md:col-span-12" : isDuo ? "md:col-span-6" : "md:col-span-4";
            const aspect = isHero ? "aspect-[16/8]" : isDuo ? "aspect-[5/4]" : "aspect-[4/5]";
            const titleSize = isHero
              ? "text-3xl md:text-4xl"
              : isDuo
                ? "text-2xl md:text-3xl"
                : "text-xl md:text-2xl";
            return (
              <CategoryCard
                key={c.slug}
                c={c}
                i={i}
                colSpan={colSpan}
                aspect={aspect}
                titleSize={titleSize}
              />
            );
          })}
        </div>

        {categories.length > 6 && (
          <div className="mt-20 pt-10 border-t border-border">
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-medium mb-6">
              Também na casa
            </div>
            <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.slice(6).map((c, i) => (
                <a
                  key={c.slug}
                  href={`/produtos?universo=${c.slug}`}
                  className="group flex items-baseline justify-between border-b border-border py-3 hover:border-teal transition-colors duration-300"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
                      {String(i + 7).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-semibold group-hover:text-teal transition-colors duration-300">
                      {c.name}
                    </span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* PILLARS */}
      <section className="container-x py-24">
        <div
          ref={pillars.ref}
          className={`grid gap-px bg-border md:grid-cols-4 rounded-2xl overflow-hidden transition-all duration-800 ${
            pillars.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              icon: Hammer,
              t: "Fabricação própria",
              d: "Colchões e estofados produzidos com controle integral de qualidade.",
            },
            {
              icon: HeartHandshake,
              t: "Atendimento consultivo",
              d: "Especialistas que orientam — nunca empurram. Projeto a projeto.",
            },
            {
              icon: Truck,
              t: "Logística própria",
              d: "Entrega segura na sua região, com montagem cuidada.",
            },
            {
              icon: Award,
              t: "Curadoria premium",
              d: "Marcas e peças selecionadas para compor cenários atemporais.",
            },
          ].map((p) => (
            <div
              key={p.t}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-500"
            >
              <p.icon
                className="h-6 w-6 text-teal group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-xl mt-5 font-semibold group-hover:text-teal transition-colors duration-300">
                {p.t}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="container-x pb-28 md:pb-36">
        <div
          ref={projectsHeader.ref}
          className={`grid gap-10 md:grid-cols-12 items-end mb-14 transition-all duration-800 ${
            projectsHeader.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-teal" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-medium">
                Projetos assinados
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-semibold">
              Cenários reais,
              <br />
              <span className="italic font-light text-teal">vividos todos os dias.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:text-right">
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Residências e apartamentos compostos com arquitetos parceiros — do briefing à montagem
              em obra.
            </p>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-medium border-b border-border pb-1 rounded-sm hover:text-teal hover:border-teal transition-colors duration-300"
            >
              Ver todos os projetos <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-12">
          <Link
            to="/projetos"
            className="group relative md:col-span-8 aspect-[16/10] overflow-hidden bg-secondary rounded-2xl"
          >
            <img
              src={heroLiving}
              alt="Residência Permanência"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/0 group-hover:from-black/90 transition-all duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-teal/5" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <div className="text-[10px] tracking-[0.4em] uppercase text-white/60 font-medium mb-2">
                Joinville · SC · 2024
              </div>
              <div className="flex items-end justify-between gap-4">
                <h3 className="text-3xl md:text-4xl font-semibold group-hover:text-teal transition-colors duration-300">
                  Residência Permanência
                </h3>
                <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          </Link>
          <Link
            to="/projetos"
            className="group relative md:col-span-4 aspect-[4/5] md:aspect-auto overflow-hidden bg-secondary rounded-2xl"
          >
            <img
              src={storyFamily}
              alt="Apartamento Linha Pura"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/0 group-hover:from-black/90 transition-all duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-teal/5" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <div className="text-[10px] tracking-[0.4em] uppercase text-white/60 font-medium mb-2">
                Curitiba · PR · 2024
              </div>
              <h3 className="text-2xl font-semibold group-hover:text-teal transition-colors duration-300">
                Apartamento Linha Pura
              </h3>
            </div>
          </Link>
        </div>
      </section>

      {/* INSTITUTIONAL CTA */}
      <section
        ref={cta.ref}
        className={`relative overflow-hidden bg-secondary rounded-3xl mx-4 md:mx-8 my-16 transition-all duration-800 ${
          cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container-x py-24 lg:py-32 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-teal mb-5">
              Projeto sob medida
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-semibold">
              Vamos projetar
              <br />o <span className="italic font-light text-teal">seu cenário</span>.
            </h2>
            <p className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Nossa equipe acompanha você do briefing à entrega. Conforto, composição e acabamento
              pensados sob medida — com a exclusividade de quem fabrica.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-3 bg-teal text-primary-foreground px-7 py-4 text-sm uppercase tracking-wider font-semibold rounded-full hover:bg-teal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-teal/25"
              >
                Fale com um especialista <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/5500000000000"
                className="inline-flex items-center gap-3 border border-border px-7 py-4 text-sm uppercase tracking-wider font-medium rounded-full hover:bg-foreground hover:text-background hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group">
              <img
                src={aboutFabrica}
                alt="Fabricação própria Casa Ambiente"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryCard({
  c,
  i,
  colSpan,
  aspect,
  titleSize,
}: {
  c: (typeof categories)[number];
  i: number;
  colSpan: string;
  aspect: string;
  titleSize: string;
}) {
  const { ref, visible } = useReveal(i * 100);

  return (
    <div
      ref={ref}
      className={`${colSpan} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <a href={`/produtos?universo=${c.slug}`} className="group block">
        <div className={`relative ${aspect} overflow-hidden bg-secondary rounded-2xl`}>
          <img
            src={c.image}
            alt={c.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-teal/5" />
          <span className="absolute top-5 left-5 text-[10px] tracking-[0.4em] uppercase text-white/75 font-medium">
            {String(i + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="pt-5 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="flex items-baseline gap-3 mb-1">
              <h3
                className={`${titleSize} tracking-tight font-semibold group-hover:text-teal transition-colors duration-300`}
              >
                {c.name}
              </h3>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
                {c.count}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-md">
              {c.description}
            </p>
          </div>
          <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground group-hover:border-teal group-hover:text-teal group-hover:bg-teal/[0.08] group-hover:scale-110 transition-all duration-500">
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
      </a>
    </div>
  );
}
