import type { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { LogoEmblem } from "@/components/Logo";
import { CountUp } from "@/components/ui/CountUp";
import { milestones, sisterInstitutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Brilliant PU College & Coaching, Mangalore — 25 years of academic excellence, mentorship, and student success.",
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To deliver an education that combines academic rigour with character, preparing students to excel in board exams, competitive entrances, and life beyond.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be Coastal Karnataka's most trusted institution for integrated PU and entrance-exam education — known for outcomes, ethics, and care.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Discipline, empathy, and a relentless focus on the individual student. No one is just a roll number at Brilliant.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Brilliant"
        crumbs={[{ label: "About" }]}
        title={
          <>
            25 years of building <span className="text-gradient">brilliant futures</span>
          </>
        }
        subtitle="From a single classroom in Mangalore to one of Coastal Karnataka's most respected PU colleges and coaching institutes — our story has always been about students."
      />

      {/* Story */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={
                <>
                  Founded on a simple <span className="text-gradient">belief</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
              <p>
                Brilliant began in 1987 as{" "}
                <strong className="font-semibold text-ink">Brilliant Coaching Classes</strong>,
                with one conviction — that with the right mentoring, every child
                can achieve far more than they imagine. That belief still drives
                everything we do.
              </p>
              <p>
                In 2004 we opened{" "}
                <strong className="font-semibold text-ink">Brilliant Correspondence College</strong>,
                and in 2010,{" "}
                <strong className="font-semibold text-ink">Brilliant PU College</strong> — a
                full-fledged Pre-University College where Science and Commerce
                students receive free, integrated coaching for CET, NEET, JEE,
                CA/CS and more, all during college hours.
              </p>
              <p>
                Today, as a unit of the{" "}
                <strong className="font-semibold text-ink">Gurudeva Education Foundation</strong>,
                Brilliant remains rooted in the same idea it started with — that
                great teaching, made affordable, changes lives.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <CountUp
                      value={m.value}
                      className="mt-5 block font-display text-3xl font-extrabold text-gradient"
                    />
                    <p className="mt-1 text-sm text-slate-600">{m.label}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission / Vision / Values */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="What drives us"
          title={
            <>
              Mission, vision &amp; <span className="text-gradient">values</span>
            </>
          }
        />
        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <StaggerItem key={v.title} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {v.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Management's note */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-50" />
            <div className="relative grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="flex flex-col items-center text-center">
                <span className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 text-white">
                  <LogoEmblem className="h-12 w-12" />
                </span>
                <p className="mt-4 font-display text-base font-bold text-ink">
                  The Management
                </p>
                <p className="text-sm text-brand-600">Gurudeva Education Foundation</p>
              </div>
              <div>
                <p className="font-display text-xl font-semibold leading-relaxed text-ink sm:text-2xl">
                  “We don&apos;t just prepare students for exams — we prepare them
                  for the moment they realise how capable they truly are. That
                  spark is what Brilliant exists for.”
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* The Brilliant family */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="The Brilliant Family"
          title={
            <>
              Three institutions, <span className="text-gradient">one mission</span>
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
