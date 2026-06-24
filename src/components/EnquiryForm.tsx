"use client";

import { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

const interests = [
  "PU College — Science (PCMB)",
  "PU College — Science (PCMC)",
  "PU College — Commerce",
  "NEET Coaching",
  "JEE Coaching",
  "KCET / COMEDK",
  "Foundation (VIII–X)",
];

type Status = "idle" | "submitting" | "done";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder: wire this to your backend / email service / Google Form.
    setTimeout(() => setStatus("done"), 1000);
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-500" />
        <h3 className="font-display text-2xl font-bold text-ink">
          Thank you! We&apos;ve received your enquiry.
        </h3>
        <p className="max-w-md text-slate-600">
          Our admissions counsellor will reach out within 24 hours. For anything
          urgent, call us directly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand-300"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
    >
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600">
            Student / Parent name
          </label>
          <input required name="name" placeholder="Full name" className={field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600">Phone number</label>
          <input
            required
            name="phone"
            type="tel"
            placeholder="10-digit mobile"
            className={field}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600">Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className={field}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600">
            Interested in
          </label>
          <select required name="interest" defaultValue="" className={field}>
            <option value="" disabled>
              Select a program
            </option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-slate-600">
          Message <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={compact ? 2 : 3}
          placeholder="Tell us anything we should know…"
          className={field}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-700 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Submit Enquiry <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">
        We respect your privacy. Your details are never shared.
      </p>
    </form>
  );
}
