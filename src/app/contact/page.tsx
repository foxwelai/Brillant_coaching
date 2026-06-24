import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.fullName} in Mangalore — address, phone, email and map.`,
};

export default function ContactPage() {
  const info = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: [
        site.address.line1,
        `${site.address.line2}, ${site.address.state} — ${site.address.pin}`,
      ],
      href: site.mapLink,
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: [site.phone, "Mon–Sat, 9 AM – 6 PM"],
      href: site.phoneHref,
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: [site.email],
      href: site.emailHref,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: [site.whatsapp, "Quick replies during work hours"],
      href: site.whatsappHref,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        crumbs={[{ label: "Contact" }]}
        title={
          <>
            We&apos;d love to <span className="text-gradient">hear from you</span>
          </>
        }
        subtitle="Questions about admissions, programs, or a campus visit? Reach out — we usually respond within a few hours."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {info.map((c) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {c.title}
                  </h3>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1 text-sm text-slate-600">
                      {l}
                    </p>
                  ))}
                </a>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Send a message"
                title={
                  <>
                    Drop us a <span className="text-gradient">line</span>
                  </>
                }
              />
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-5">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card">
                <iframe
                  title="Brilliant College location map"
                  src={site.mapEmbed}
                  className="h-80 w-full lg:h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
                <Clock className="h-6 w-6 shrink-0 text-brand-600" />
                <div className="text-sm">
                  <p className="font-semibold text-ink">Office Hours</p>
                  <p className="text-slate-600">
                    Monday – Saturday · 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
