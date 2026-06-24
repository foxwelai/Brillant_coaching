import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CtaBanner({
  title = "Ready to begin your brilliant journey?",
  subtitle = "Admissions for 2026–27 are now open. Limited seats per batch — secure yours today.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-accent-500 px-7 py-14 text-center shadow-glow sm:px-12 sm:py-20">
        <div className="animate-drift pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div
          className="animate-drift pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-2xl"
          style={{ animationDelay: "5s" }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-brand-50 sm:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-card transition-transform hover:-translate-y-0.5"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
