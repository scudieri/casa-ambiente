import { MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/5500000000000?text=Olá, gostaria de conversar sobre um projeto residencial."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg shadow-black/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-sm font-semibold"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <Link
        to="/contato"
        className="flex items-center gap-3 bg-teal text-black px-4 py-3 rounded-full shadow-lg shadow-teal/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-sm font-semibold"
      >
        Agendar atendimento
      </Link>
    </div>
  );
}
