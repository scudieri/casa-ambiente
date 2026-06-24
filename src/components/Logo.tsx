import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ className = "", tone }: { className?: string; tone?: "light" }) {
  return (
    <Link
      to="/"
      aria-label="Casa Ambiente"
      className={`inline-flex items-center select-none group ${className}`}
    >
      <img
        src={logoImg}
        alt="Casa Ambiente"
        className="h-20 md:h-24 w-auto object-contain"
        draggable={false}
      />
    </Link>
  );
}
