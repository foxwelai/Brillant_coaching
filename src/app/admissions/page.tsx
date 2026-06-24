import type { Metadata } from "next";
import { Phone, Mail, Calendar, FileCheck2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { admissionSteps } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions 2026–27",
  description:
    "Apply to Brilliant PU College & Coaching, Mangalore. Simple 4-step admission process for PU and NEET/JEE/CET programs.",
};

const docs = [
  "SSLC / Class X marks card (original + copies)",
  "Transfer Certificate (TC) from previous school",
  "Aadhaar card of student & parent",
  "Caste / income certificate (if applicable)",
  "4 recent passport-size photographs",
  "Migration certificate (for other-board students)",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions Open · 2026–27"
        crumbs={[{ label: "Admissions" }]}
        title={
          <>
            Begin your <span className="text-gradient">application</span>
          </>
        }
        subtitle="A simple, transparent process. Tell us a little about yourself and our counsellor will guide you through every step."
      />

      {/* Steps */}
      <Section>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Four steps to <span className="text-gradient">joining</span>
            </>
          }
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s) => (
            <StaggerItem key={s.step} className="h-full">
              <div className="relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
                <span className="font-display text-5xl font-extrabold text-brand-100">
                  {s.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Form + side info */}
      <Section className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Enquiry Form"
                title={
                  <>
                    Tell us about <span className="text-gradient">yourself</span>
                  </>
                }
                subtitle="We'll get back to you within 24 hours."
              />
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                  <FileCheck2 className="h-5 w-5 text-brand-600" /> Documents required
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {docs.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-7 text-white shadow-glow">
                <h3 className="font-display text-lg font-bold">
                  Prefer to talk to someone?
                </h3>
                <p className="mt-2 text-sm text-brand-100">
                  Our admissions team is available Mon–Sat, 9 AM – 6 PM.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/20"
                  >
                    <Phone className="h-5 w-5 text-brand-200" /> {site.phone}
                  </a>
                  <a
                    href={site.emailHref}
                    className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/20"
                  >
                    <Mail className="h-5 w-5 text-brand-200" /> {site.email}
                  </a>
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/15 px-4 py-3 text-sm">
                  <Calendar className="h-5 w-5 text-accent-300" />
                  <span className="text-brand-100">
                    Counselling open daily — walk-ins welcome
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
