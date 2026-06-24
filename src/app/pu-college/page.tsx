import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ProgramCard } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { puStreams, facilities, departments } from "@/lib/content";

export const metadata: Metadata = {
  title: "PU College — Science & Commerce",
  description:
    "Karnataka Pre-University College in Mangalore offering Science (PCMB/PCMC) and Commerce streams with a 98% board pass rate.",
};

const highlights = [
  "Affiliated to Dept. of PU Education, Karnataka",
  "Free integrated entrance coaching",
  "Merit scholarships from 25% to 100%",
  "Hostel facility for outstation students",
];

export default function PuCollegePage() {
  return (
    <>
      <PageHero
        eyebrow="Pre-University College"
        crumbs={[{ label: "PU College" }]}
        title={
          <>
            A PU College built for <span className="text-gradient">board excellence</span>
          </>
        }
        subtitle="Class XI & XII across Science (PCMB / PCMS) and Commerce (EBAS) — rigorous academics with free in-house entrance coaching built right in."
      />

      {/* Intro + highlights */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Overview"
              title={
                <>
                  Two years that shape <span className="text-gradient">everything</span>
                </>
              }
              subtitle="Our Pre-University programme blends a structured board curriculum with continuous assessment, so students build deep understanding — not last-minute cramming. Small batches keep every learner seen and supported."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-black/5">
              <Image
                src="/images/lab.jpg"
                alt="Well-equipped science laboratory at Brilliant PU College"
                width={1400}
                height={933}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Streams */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="Streams & Combinations"
          title={
            <>
              Pick the path that fits <span className="text-gradient">your goal</span>
            </>
          }
          subtitle="Each combination is mapped to clear higher-education and career destinations."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {puStreams.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <ProgramCard program={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Departments */}
      <Section>
        <SectionHeading
          eyebrow="Departments"
          title={
            <>
              Strong in <span className="text-gradient">every subject</span>
            </>
          }
          subtitle="Experienced faculty who teach for board mastery and competitive entrances together."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => {
            const Icon = d.icon;
            return (
              <StaggerItem key={d.subject} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">
                      {d.subject}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {d.focus}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Facilities */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="Campus & Facilities"
          title={
            <>
              A campus that helps you <span className="text-gradient">thrive</span>
            </>
          }
        />
        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-200">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{f.title}</span>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <CtaBanner
        title="Admissions for PU College are open"
        subtitle="Science and Commerce seats are filling fast for 2026–27. Reserve your seat today."
      />
    </>
  );
}
