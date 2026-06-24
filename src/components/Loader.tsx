import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.png";

export function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const minDelay = new Promise((r) => setTimeout(r, 1100));
    const winLoad =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((r) => window.addEventListener("load", () => r(null), { once: true }));
    Promise.all([minDelay, winLoad]).then(() => setDone(true));
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setHidden(true), 900);
    return () => clearTimeout(t);
  }, [done]);

  useEffect(() => {
    if (hidden) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ease-out ${
        done ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-10">
        <img
          src={logoImg}
          alt=""
          className="h-32 md:h-40 w-auto object-contain animate-[fade-in_900ms_ease-out]"
          draggable={false}
        />
        <div className="relative h-px w-40 overflow-hidden bg-muted">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-teal animate-[loader-slide_1.4s_ease-in-out_infinite]" />
        </div>
        <div className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground font-medium">
          Casa Ambiente
        </div>
      </div>
    </div>
  );
}
