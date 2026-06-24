import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

const quickLinks = [
  { label: "PU College", href: "/pu-college" },
  { label: "Coaching", href: "/coaching" },
  { label: "Admissions", href: "/admissions" },
  { label: "Results", href: "/results" },
];

const programs = [
  { label: "Science — PCMB", href: "/pu-college" },
  { label: "Science — PCMS", href: "/pu-college" },
  { label: "NEET Coaching", href: "/coaching" },
  { label: "JEE Coaching", href: "/coaching" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-ink text-slate-300">
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: InstagramIcon, href: site.social.instagram },
                { Icon: FacebookIcon, href: site.social.facebook },
                { Icon: YoutubeIcon, href: site.social.youtube },
                { Icon: TwitterIcon, href: site.social.twitter },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-slate-300 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {programs.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span className="text-slate-400">
                  {site.address.line1}, {site.address.line2}, {site.address.state} —{" "}
                  {site.address.pin}
                </span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 text-slate-400 hover:text-white">
                  <Phone className="h-5 w-5 shrink-0 text-brand-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-3 text-slate-400 hover:text-white">
                  <Mail className="h-5 w-5 shrink-0 text-brand-400" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
