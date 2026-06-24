"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, GraduationCap, BadgePercent } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="animate-drift pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-300/30 blur-3xl" />
      <div
        className="animate-drift pointer-events-none absolute -right-24 top-24 h-96 w-96 rounded-full bg-accent-300/30 blur-3xl"
        style={{ animationDelay: "3s" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent-500" />
              Admissions open for 2026–27
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Where <span className="text-gradient">brilliance</span>
            <br className="hidden sm:block" /> begins.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            A Mangalore PU College with{" "}
            <strong className="font-semibold text-ink">FREE in-house coaching</strong>{" "}
            for NEET, JEE, CET and CA/CS — built right into college hours. Science
            &amp; Commerce, one focused campus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.19 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Apply for Admission <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/coaching"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:border-brand-300 hover:text-brand-700"
            >
              Explore Free Coaching
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600"
          >
            <span className="inline-flex items-center gap-2 font-medium">
              <GraduationCap className="h-4 w-4 text-brand-600" />
              Trusted by Mangalore families since 1987
            </span>
            <span className="inline-flex items-center gap-2 font-medium">
              <BadgePercent className="h-4 w-4 text-accent-500" />
              Scholarships up to 100%
            </span>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-black/5">
            <Image
              src="/images/celebration.png"
              alt="Brilliant PU College students celebrating their results"
              width={1200}
              height={896}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
          </div>

          <div className="animate-float absolute -left-4 top-8 hidden rounded-2xl bg-white p-4 shadow-card sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Free Coaching</p>
                <p className="text-xs text-slate-500">NEET · JEE · CET</p>
              </div>
            </div>
          </div>

          <div
            className="animate-float absolute -bottom-5 right-2 hidden rounded-2xl bg-white p-4 shadow-card sm:block"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-50 text-accent-600">
                <BadgePercent className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Since 1987</p>
                <p className="text-xs text-slate-500">A trusted legacy</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-slate-100 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 text-sm text-slate-500 sm:px-8">
          <span className="font-medium">Need guidance?</span>
          <a href={site.phoneHref} className="font-semibold text-brand-700 hover:underline">
            Call {site.phone}
          </a>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>{site.address.city}, {site.address.state}</span>
        </div>
      </div>
    </section>
  );
}
