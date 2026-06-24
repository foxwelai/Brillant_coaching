import type { Metadata } from "next";
import Image from "next/image";
import { BadgePercent, Sparkles, CheckCircle2, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { examsCovered, scholarships, sisterInstitutions } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Results & Achievements",
  description:
    "Brilliant PU College & Coaching, Mangalore — free integrated NEET/JEE/CET/CA-CS coaching, merit scholarships and a legacy of student success since 1987.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results & Achievements"
        crumbs={[{ label: "Results" }]}
        title={
          <>
            A legacy families <span className="text-gradient">trust</span>
          </>
        }
        subtitle="Since 1987, Brilliant has helped Mangalore students turn ambition into admissions — in medicine, engineering, law, commerce and the defence services."
      />

      {/* Image + intro */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-black/5">
              <Image
                src="/images/celebration.png"
                alt="Brilliant PU College students celebrating their exam results"
                width={1200}
                height={896}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Built for outcomes"
              title={
                <>
                  Success, by <span className="text-gradient">design</span>
                </>
              }
              subtitle="Our model is simple: combine a rigorous PU curriculum with free, integrated entrance coaching and individual support — so results follow naturally."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Free CET / NEET / JEE / CA-CS coaching during college hours",
                "Merit scholarships rewarding academic performance",
                "Hostel support for focused outstation students",
                "Three decades of mentoring experience since 1987",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-brand-50 px-5 py-4 text-sm text-brand-800">
              For the latest verified board and entrance results, please{" "}
              <a href={site.phoneHref} className="font-semibold underline">
                contact the college office
              </a>
              .
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Exams covered */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="Entrances we cover"
          title={
            <>
              One college, <span className="text-gradient">many pathways</span>
            </>
          }
          subtitle="Free coaching for every one of these is built into the PU timetable."
        />
        <Stagger className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {examsCovered.map((exam) => (
            <StaggerItem key={exam}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-5 py-2.5 text-sm font-bold text-brand-700 shadow-card">
                <Sparkles className="h-4 w-4 text-accent-500" />
                {exam}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Scholarships */}
      <Section>
        <SectionHeading
          eyebrow="Merit Scholarships"
          title={
            <>
              We reward <span className="text-gradient">hard work</span>
            </>
          }
          subtitle="Fee concessions are awarded on the basis of your Class X (SSLC) performance."
        />
        <Stagger className="mx-auto mt-12 grid max-w-3xl gap-4">
          {scholarships.map((s) => (
            <StaggerItem key={s.band}>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <BadgePercent className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{s.band}</span>
                </div>
                <span className="shrink-0 rounded-full bg-accent-50 px-3 py-1 text-sm font-bold text-accent-600">
                  {s.concession}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-slate-400">
          Indicative tiers — exact eligibility is confirmed by the office at admission.
        </p>
      </Section>

      {/* Legacy / sister institutions */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="The Brilliant Family"
          title={
            <>
              A trusted name <span className="text-gradient">since 1987</span>
            </>
          }
        />
        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {sisterInstitutions.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.name} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
                    <Icon className="h-7 w-7" />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent-600">
                    {s.since}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <CtaBanner />
    </>
  );
}
