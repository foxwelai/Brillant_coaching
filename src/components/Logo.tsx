import Link from "next/link";
import type { SVGProps } from "react";

// Graduation-cap + rising-sun emblem (matches the Brilliant logo).
// Caps inherit `currentColor`; the sun stays gold on any background.
export function LogoEmblem(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 42" fill="none" aria-hidden {...props}>
      {/* rising sun */}
      <circle cx="24" cy="8.5" r="5.5" fill="#f5a623" />
      <g stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round">
        <line x1="24" y1="0.5" x2="24" y2="2.4" />
        <line x1="15.5" y1="3.6" x2="16.7" y2="5.1" />
        <line x1="32.5" y1="3.6" x2="31.3" y2="5.1" />
      </g>
      {/* mortarboard cap */}
      <g fill="currentColor">
        <path d="M24 15 L45 23 L24 31 L3 23 Z" />
        <path d="M14 26.2 L34 26.2 L34 32.5 Q24 38.5 14 32.5 Z" />
        <circle cx="24" cy="23" r="2.1" fill="#f5a623" />
        {/* tassel */}
        <path
          d="M44 23 L44 31"
          stroke="#f5a623"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="44" cy="32.5" r="2" fill="#f5a623" />
      </g>
    </svg>
  );
}

// Full logo: emblem + "Brilliant" wordmark + sub-line.
export function Logo({
  variant = "dark",
  href = "/",
}: {
  variant?: "dark" | "light";
  href?: string;
}) {
  const light = variant === "light";
  return (
    <Link href={href} className="group flex items-center gap-2.5">
      <LogoEmblem
        className={`h-10 w-11 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 ${
          light ? "text-white" : "text-ink"
        }`}
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-extrabold tracking-tight text-brand-600">
          Brilliant
        </span>
        <span
          className={`mt-0.5 text-[9px] font-bold uppercase tracking-[0.22em] ${
            light ? "text-slate-300" : "text-ink/70"
          }`}
        >
          Pre University College
        </span>
      </span>
    </Link>
  );
}
