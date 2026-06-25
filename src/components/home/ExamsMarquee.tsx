import { Sparkles } from "lucide-react";
import { examsCovered } from "@/lib/content";

export function ExamsMarquee() {
  const row = [...examsCovered, ...examsCovered];
  return (
    <div className="relative w-full min-w-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee gap-4 py-2">
        {row.map((exam, i) => (
          <span
            key={`${exam}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-6 py-3 text-base font-bold text-brand-700"
          >
            <Sparkles className="h-4 w-4 text-accent-500" />
            {exam}
          </span>
        ))}
      </div>
    </div>
  );
}
