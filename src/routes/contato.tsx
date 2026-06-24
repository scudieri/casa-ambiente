import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Casa Ambiente" },
      {
        name: "description",
        content:
          "Agende uma consultoria. Atendimento consultivo Casa Ambiente em São Bento do Sul.",
      },
      { property: "og:title", content: "Fale com a Casa Ambiente" },
      {
        property: "og:description",
        content: "Projetos sob medida com fabricação própria. Atendimento consultivo.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  const info = useReveal(0);
  const form = useReveal(200);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="border-b border-border bg-secondary/60">
        <div className="container-x py-16 md:py-24 grid gap-8 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-teal" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-teal">
                Atendimento consultivo
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl leading-[0.98] font-semibold">
              Vamos compor
              <br />
              <span className="italic font-light text-teal">o seu cenário.</span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Conte um pouco sobre o ambiente, o uso e o seu repertório. Nossa equipe entra em
              contato em até um dia útil, com calma e sem pressa.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div
            ref={info.ref}
            className={`lg:col-span-5 transition-all duration-800 ${
              info.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4 group cursor-default">
                <MapPin className="h-4 w-4 mt-0.5 text-teal group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-semibold">Showroom</div>
                  <div className="text-muted-foreground">
                    Rua das Flores, 1240 · Centro · São Bento do Sul / SC
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4 group cursor-default">
                <Phone className="h-4 w-4 mt-0.5 text-teal group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-semibold">Telefone · WhatsApp</div>
                  <div className="text-muted-foreground">(47) 0000-0000</div>
                </div>
              </li>
              <li className="flex items-start gap-4 group cursor-default">
                <Mail className="h-4 w-4 mt-0.5 text-teal group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-muted-foreground">contato@casaambiente.com.br</div>
                </div>
              </li>
              <li className="flex items-start gap-4 group cursor-default">
                <Clock className="h-4 w-4 mt-0.5 text-teal group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-semibold">Horários</div>
                  <div className="text-muted-foreground">Seg–Sex · 9h às 19h · Sáb · 9h às 13h</div>
                </div>
              </li>
            </ul>
          </div>

          <div
            ref={form.ref}
            className={`lg:col-span-7 transition-all duration-800 delay-200 ${
              form.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-secondary rounded-2xl p-8 md:p-12 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nome" placeholder="Como devemos te chamar?" />
                <Field label="Telefone" placeholder="(00) 00000-0000" />
              </div>
              <Field label="E-mail" type="email" placeholder="seu@email.com" />
              <div>
                <label className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground mb-3 block">
                  Interesse
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Projeto completo", "Sob medida", "Colchões", "Estofados", "Decoração"].map(
                    (t) => (
                      <label key={t} className="cursor-pointer group">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="block px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-full border border-border peer-checked:bg-teal peer-checked:text-primary-foreground peer-checked:border-teal hover:border-teal transition-all duration-300">
                          {t}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>
              <div>
                <label className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground mb-3 block">
                  Conte sobre o ambiente
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-background border border-border rounded-xl p-4 text-sm focus:outline-none focus:border-teal text-foreground placeholder:text-muted-foreground transition-colors duration-300 resize-none"
                  placeholder="Espaço, estilo desejado, prazos..."
                />
              </div>
              <button className="group inline-flex items-center gap-3 bg-teal text-primary-foreground px-7 py-4 text-sm uppercase tracking-wider font-semibold rounded-full hover:bg-teal/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                Enviar pedido{" "}
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
              <p className="text-xs text-muted-foreground">Respondemos em até um dia útil.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground mb-2 block">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-background border border-border rounded-xl p-3.5 text-sm focus:outline-none focus:border-teal text-foreground placeholder:text-muted-foreground transition-colors duration-300"
      />
    </div>
  );
}
