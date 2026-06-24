import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { categories, pieces } from "@/lib/collections";
import { useReveal } from "@/hooks/use-scroll-reveal";

type Search = { universo?: string };

export const Route = createFileRoute("/produtos")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    universo: typeof s.universo === "string" ? s.universo : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Universos — Casa Ambiente" },
      {
        name: "description",
        content:
          "Consultoria, curadoria e fabricação própria para compor ambientes de permanência. Conheça os universos Casa Ambiente.",
      },
      { property: "og:title", content: "Universos Casa Ambiente" },
      {
        property: "og:description",
        content:
          "Atendimento consultivo, projetos sob medida e curadoria autoral em São Bento do Sul.",
      },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const { universo } = Route.useSearch();
  const [active, setActive] = useState<string>(universo ?? categories[0]?.slug ?? "");
  const current = useMemo(
    () => categories.find((c) => c.slug === active) ?? categories[0],
    [active],
  );
  const referencePieces = useMemo(
    () => pieces.filter((p) => p.category === current?.slug).slice(0, 3),
    [current],
  );

  const process = useReveal(0);
  const cta = useReveal(0);

  return (
    <>
      {/* MANIFESTO HEADER */}
      <section className="border-b border-border">
        <div className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-teal" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-teal">
                Universos Casa Ambiente
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
              Capítulo 01 — Curadoria
            </p>
          </div>
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-6xl leading-[1.05] tracking-tight font-semibold">
              Não vendemos peças.
              <br />
              <span className="italic font-light text-teal">Compomos ambientes</span> de
              permanência.
            </h1>
            <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Cada universo abaixo é um ponto de partida para uma conversa. Recebemos você
              presencialmente em São Bento do Sul ou à distância para entender o seu projeto, propor
              composições e desenhar peças sob medida quando necessário.
            </p>
          </div>
        </div>
      </section>

      {/* UNIVERSE NAVIGATOR */}
      <section className="border-b border-border">
        <div className="container-x py-16 md:py-20 grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground mb-6">
              Sete universos
            </div>
            <ul>
              {categories.map((c, i) => {
                const isActive = active === c.slug;
                return (
                  <li key={c.slug}>
                    <button
                      onClick={() => setActive(c.slug)}
                      className={`group w-full text-left py-5 border-t border-border flex items-baseline gap-5 transition-all duration-300 ${
                        isActive
                          ? "text-foreground pl-3"
                          : "text-muted-foreground hover:text-foreground hover:pl-1"
                      }`}
                    >
                      <span className="text-[10px] tracking-[0.25em] text-muted-foreground font-medium w-8 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-2xl md:text-3xl tracking-tight font-semibold transition-all duration-300 ${
                          isActive ? "italic text-teal" : ""
                        }`}
                      >
                        {c.name}
                      </span>
                    </button>
                  </li>
                );
              })}
              <li className="border-t border-border" />
            </ul>
          </aside>

          {/* Active universe */}
          <div className="lg:col-span-8">
            {current && (
              <div className="space-y-10">
                <div className="relative aspect-[5/4] overflow-hidden bg-secondary rounded-2xl group">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-[10px] tracking-[0.3em] uppercase opacity-70 font-medium">
                      Universo
                    </p>
                    <p className="text-3xl md:text-4xl mt-1 font-semibold group-hover:text-teal transition-colors duration-300">
                      {current.name}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-teal mb-3">
                      Sobre este universo
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {current.description}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground mb-3">
                      Composições possíveis
                    </div>
                    <ul className="space-y-2">
                      {current.subcategories.map((s) => (
                        <li
                          key={s}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <span className="h-px w-4 bg-teal" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {referencePieces.length > 0 && (
                  <div>
                    <div className="flex items-end justify-between mb-5 border-b border-border pb-3">
                      <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground">
                        Referências do acervo
                      </div>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-medium">
                        Não comercializadas online
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {referencePieces.map((p) => (
                        <div key={p.id} className="group">
                          <div className="relative aspect-[4/5] overflow-hidden bg-secondary rounded-2xl">
                            <img
                              src={p.image}
                              alt={p.name}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                          </div>
                          <h3 className="text-base mt-3 font-semibold group-hover:text-teal transition-colors duration-300">
                            {p.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{p.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-border pt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium text-foreground border-b border-teal pb-1 hover:text-teal transition-colors duration-300"
                  >
                    Conversar sobre {current.name.toLowerCase()}{" "}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-xs text-muted-foreground">
                    Atendimento por agendamento · sem compromisso
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONSULTATIVE PROCESS */}
      <section className="border-b border-border bg-secondary/60">
        <div
          ref={process.ref}
          className={`container-x py-20 md:py-24 transition-all duration-800 ${
            process.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid gap-10 lg:grid-cols-12 mb-14">
            <div className="lg:col-span-5">
              <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-teal mb-4">
                Como atendemos
              </div>
              <h2 className="text-3xl md:text-4xl tracking-tight font-semibold">
                Um <span className="italic text-teal">processo</span>, não um carrinho.
              </h2>
            </div>
            <p className="lg:col-span-7 text-base text-muted-foreground leading-relaxed self-end">
              Trabalhamos em quatro tempos. Cada projeto é único e segue o ritmo do ambiente, da
              arquitetura e de quem vai habitar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border rounded-2xl overflow-hidden">
            {[
              {
                n: "01",
                t: "Escuta",
                d: "Conversamos sobre o ambiente, o estilo de vida, prazos e orçamento. Pode ser presencial ou por vídeo.",
              },
              {
                n: "02",
                t: "Curadoria",
                d: "Selecionamos peças do acervo, propomos composições e indicamos quando vale projetar sob medida.",
              },
              {
                n: "03",
                t: "Projeto",
                d: "Materiais, dimensões, tecidos e acabamentos definidos junto com você — com nossa fábrica própria por trás.",
              },
              {
                n: "04",
                t: "Entrega",
                d: "Logística, montagem e acompanhamento pós-entrega. O ambiente nasce pronto para ser vivido.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="border-b sm:border-r border-border last:border-r-0 p-8 bg-background group hover:bg-secondary transition-colors duration-500"
              >
                <div className="text-5xl text-teal/70 mb-6 font-semibold group-hover:text-teal group-hover:scale-110 transition-all duration-300 origin-left">
                  {s.n}
                </div>
                <h3 className="text-xl mb-2 font-semibold">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULT CTA */}
      <section
        ref={cta.ref}
        className={`transition-all duration-800 ${
          cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container-x py-24 md:py-28 grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-teal mb-5">
              Próximo passo
            </div>
            <h2 className="text-4xl md:text-5xl tracking-tight leading-[1.05] font-semibold">
              Conte sobre o seu ambiente.
              <br />
              <span className="italic font-light text-teal">
                A composição começa em uma conversa.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md lg:ml-auto mb-6">
              Atendimento por agendamento — presencial em São Bento do Sul (SC) ou remoto, com
              orientação de um especialista da casa.
            </p>
            <div className="flex flex-wrap lg:justify-end gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center gap-3 bg-teal text-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-teal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Agendar consultoria <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/5500000000000"
                className="inline-flex items-center gap-3 border border-border px-7 py-4 text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-foreground hover:text-background hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
