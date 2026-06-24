import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 bg-card text-card-foreground border-t border-border">
      <div className="container-x py-20 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <Logo />
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Cenários de luxo projetados sob medida, com a exclusividade de quem fabrica. Mais de uma
            década transformando casas em ambientes de permanência.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="p-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="p-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="p-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h4 className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground mb-5">
            Coleções
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/produtos"
                className="text-foreground/60 hover:text-teal transition-colors duration-300"
              >
                Todas as coleções
              </Link>
            </li>
            <li>
              <a
                href="/produtos?cat=colchoes"
                className="text-foreground/60 hover:text-teal transition-colors duration-300"
              >
                Colchões
              </a>
            </li>
            <li>
              <a
                href="/produtos?cat=estofados"
                className="text-foreground/60 hover:text-teal transition-colors duration-300"
              >
                Estofados
              </a>
            </li>
            <li>
              <a
                href="/produtos?cat=dormitorio"
                className="text-foreground/60 hover:text-teal transition-colors duration-300"
              >
                Dormitório
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h4 className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground mb-5">
            Marca
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/sobre"
                className="text-foreground/60 hover:text-teal transition-colors duration-300"
              >
                A Casa
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                className="text-foreground/60 hover:text-teal transition-colors duration-300"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className="text-foreground/60 hover:text-teal transition-colors duration-300"
              >
                Atendimento
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-foreground/60 hover:text-teal transition-colors duration-300"
              >
                Para arquitetos
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h4 className="text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground mb-5">
            Visite
          </h4>
          <p className="text-sm leading-relaxed text-foreground/60">
            Rua das Flores, 1240
            <br />
            Centro · São Bento do Sul / SC
            <br />
            Seg–Sex · 9h às 19h · Sáb · 9h às 13h
          </p>
          <Link
            to="/contato"
            className="mt-5 inline-block text-sm border-b border-teal text-teal pb-1 hover:text-foreground hover:border-foreground transition-colors duration-300"
          >
            Agendar visita →
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Casa Ambiente. Todos os direitos reservados.</span>
          <span>Cenários de permanência · CNPJ 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  );
}
