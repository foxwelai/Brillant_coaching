import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-glow hover:bg-brand-700 hover:-translate-y-0.5",
  secondary:
    "bg-accent-500 text-white shadow-[0_14px_40px_-12px_rgba(249,115,22,0.55)] hover:bg-accent-600 hover:-translate-y-0.5",
  ghost:
    "border border-slate-200 bg-white text-ink hover:border-brand-300 hover:text-brand-700",
  white:
    "bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5 shadow-card",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
