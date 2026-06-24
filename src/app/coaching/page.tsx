import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Target, Timer, BarChart3, BookMarked } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ProgramCard } from "@/components/cards";
import { CtaBanner } from "@/components/CtaBanner";
import { coachingPrograms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Coaching — NEET, JEE & CET",
  description:
    "Integrated NEET, JEE and KCET/COMEDK coaching in Mangalore that runs alongside PU studies, with weekly mock tests and expert mentors.",
};

const method = [
  {
    icon: BookMarked,
    title: "Concept Building",
    desc: "Every topic taught from first principles with worked examples before drills.",
  },
  {
    icon: Target,
    title: "Practice & Application",
    desc: "Graded problem sets — from board level up to JEE Advanced difficulty.",
  },
  {
    icon: Timer,
    title: "Timed Mock Tests",
    desc: "Weekly NTA / KEA-pattern tests to build speed, accuracy and exam temperament.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Mentoring",
    desc: "Per-student performance dashboards drive a personalised improvement plan.",
  },
];

const why = [
  "Free coaching — no separate tuition fees",
  "Integrated with PU — one timetable, no clashes",
  "Experienced subject faculty",
  "Regular tests, practice & revision",
  "Doubt-clearing support",
  "Counselling & admission guidance",
];

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Competitive Exam Coaching"
        crumbs={[{ label: "Coaching" }]}
        title={
          <>
            Your fastest route to a <span className="text-gradient">top rank</span>
          </>
        }
        subtitle="Integrated NEET, JEE, KCET & COMEDK coaching that runs in lockstep with your PU classes — built to maximise both board marks and entrance rank."
      />

      {/* Programs */}
      <Section>
        <SectionHeading
          eyebrow="Coaching Programs"
          title={
            <>
              Choose your <span className="text-gradient">target exam</span>
            </>
          }
          subtitle="Specialised tracks for every aspiration — start as early as Class VIII with our Foundation programme."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coachingPrograms.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <ProgramCard program={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Method */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="The Brilliant Method"
          title={
            <>
              A proven <span className="text-gradient">4-step</span> system
            </>
          }
          subtitle="The same loop, every week, for two years — it's what turns effort into ranks."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {method.map((m, i) => {
            const Icon = m.icon;
            return (
              <StaggerItem key={m.title} className="h-full">
                <div className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
                  <span className="absolute right-6 top-6 font-display text-4xl font-extrabold text-brand-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {m.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Why integrated */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why integrated coaching"
              title={
                <>
                  Board <span className="text-gradient">+</span> entrance, without burnout
                </>
              }
              subtitle="Running PU and coaching separately means double commutes, clashing tests, and exhausted students. Our integrated model weaves both into a single, sane timetable — so you go deeper, not just longer."
            />
            <div className="mt-8 overflow-hidden rounded-[2rem] shadow-card ring-1 ring-black/5">
              <Image
                src="/images/classroom.jpg"
                alt="Students in a coaching class at Brilliant"
                width={1400}
                height={933}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3">
              {why.map((w) => (
                <li
                  key={w}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-card"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <CtaBanner
        title="Free coaching, included with admission"
        subtitle="Enquire now to learn about the current batches for NEET, JEE, CET and the commerce entrance tracks."
      />
    </>
  );
}
