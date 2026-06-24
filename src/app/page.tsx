import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Target, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ProgramCard, FeatureCard, TestimonialCard } from "@/components/cards";
import { CountUp } from "@/components/ui/CountUp";
import { ExamsMarquee } from "@/components/home/ExamsMarquee";
import { CtaBanner } from "@/components/CtaBanner";
import {
  puStreams,
  coachingPrograms,
  whyChoose,
  testimonials,
} from "@/lib/content";
import { stats } from "@/lib/site";

const wings = [
  {
    badge: "Wing 01",
    title: "PU College",
    tagline: "Class XI & XII — Karnataka Pre-University",
    desc: "A rigorous, well-rounded Pre-University education across Science (PCMB / PCMS) and Commerce streams, with concept-driven teaching and equipped labs.",
    points: [
      "Science (PCMB / PCMS) & Commerce (EBAS)",
      "Air-conditioned classrooms & equipped labs",
      "Merit scholarships up to 100%",
    ],
    href: "/pu-college",
    icon: GraduationCap,
    gradient: "from-brand-600 to-brand-800",
  },
  {
    badge: "Wing 02",
    title: "Coaching Classes",
    tagline: "NEET · JEE · CET · CA/CS · CLAT · NDA",
    desc: "FREE in-house coaching woven into college hours — no clashing schedules, no separate tuition fees, just one focused path to your goal.",
    points: [
      "Free coaching during college hours",
      "Science: NEET, JEE, CET, NATA",
      "Commerce: CA/CS, CLAT, NDA",
    ],
    href: "/coaching",
    icon: Target,
    gradient: "from-accent-500 to-accent-600",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats bar */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="px-4 py-10 text-center">
                <CountUp
                  value={s.value}
                  className="block font-display text-4xl font-extrabold text-gradient sm:text-5xl"
                />
                <p className="mt-2 text-sm font-medium text-slate-600">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Two wings */}
      <Section>
        <SectionHeading
          eyebrow="One campus, two pathways"
          title={
            <>
              Two ways we help you <span className="text-gradient">succeed</span>
            </>
          }
          subtitle="Whether you want stellar board results, a top entrance rank, or both — Brilliant is built around your goal."
        />
        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {wings.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-10">
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${w.gradient} opacity-10 blur-2xl`}
                  />
                  <div className="flex items-center justify-between">
                    <span
                      className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${w.gradient} text-white shadow-glow`}
                    >
                      <Icon className="h-8 w-8" />
                    </span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {w.badge}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-extrabold text-ink">
                    {w.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand-600">
                    {w.tagline}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                    {w.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {w.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={w.href}
                    className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all hover:gap-3 hover:bg-brand-700"
                  >
                    Explore {w.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* PU streams */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="PU College"
          title={
            <>
              Choose your <span className="text-gradient">stream</span>
            </>
          }
          subtitle="Carefully designed combinations covering Science and Commerce — each mapped to clear career destinations."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {puStreams.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <ProgramCard program={p} href="/pu-college" />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Coaching */}
      <Section>
        <SectionHeading
          eyebrow="Coaching Classes"
          title={
            <>
              Crack <span className="text-gradient">NEET, JEE &amp; CET</span>
            </>
          }
          subtitle="Integrated coaching that trains concepts, speed, and exam temperament — without sacrificing your board marks."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coachingPrograms.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <ProgramCard program={p} href="/coaching" />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Why choose */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="Why Brilliant"
          title={
            <>
              An ecosystem built for <span className="text-gradient">results</span>
            </>
          }
          subtitle="Everything a student needs to learn deeply, stay motivated, and perform when it matters."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((f) => (
            <StaggerItem key={f.title} className="h-full">
              <FeatureCard feature={f} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Exams covered + image band */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-black/5">
              <Image
                src="/images/library.png"
                alt="Students studying in the Brilliant College library"
                width={1200}
                height={896}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="One fee, every exam"
              title={
                <>
                  We prepare you for <span className="text-gradient">10+ entrances</span>
                </>
              }
              subtitle="Coaching for all of these is included free, during college hours — so you never pay for separate tuition or run between two institutes."
            />
            <div className="mt-8">
              <ExamsMarquee />
            </div>
            <Link
              href="/coaching"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              See all coaching programs <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="Loved by students & parents"
          title={
            <>
              What our <span className="text-gradient">community</span> says
            </>
          }
        />
        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <TestimonialCard t={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBanner />
    </>
  );
}
