import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import type { Program, Feature, Testimonial } from "@/lib/content";

export function ProgramCard({
  program,
  href,
}: {
  program: Program;
  href?: string;
}) {
  const Icon = program.icon;
  const body = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 transition-colors group-hover:bg-brand-100" />
      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="relative mt-6 font-display text-xl font-bold text-ink">
        {program.name}
      </h3>
      <p className="relative mt-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
        {program.subjects}
      </p>
      <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
        {program.blurb}
      </p>
      <ul className="relative mt-5 space-y-2">
        {program.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {h}
          </li>
        ))}
      </ul>
      {href && (
        <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {body}
    </Link>
  ) : (
    body
  );
}

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold text-ink">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.desc}</p>
    </div>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
      <Quote className="h-8 w-8 text-brand-200" />
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
        “{t.quote}”
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white">
          {t.initials}
        </span>
        <div>
          <p className="text-sm font-bold text-ink">{t.name}</p>
          <p className="text-xs text-slate-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}
