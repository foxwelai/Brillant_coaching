// ---------------------------------------------------------------------------
// Real content for Brilliant PU College & Coaching Classes, Mangalore.
// Sourced from public listings. We intentionally avoid fabricated topper
// names / ranks / pass-percentages — replace with official figures when shared.
// ---------------------------------------------------------------------------

import {
  Atom,
  Calculator,
  FlaskConical,
  Stethoscope,
  LineChart,
  Microscope,
  GraduationCap,
  BookOpen,
  Scale,
  Shield,
  Ruler,
  Wifi,
  FlaskRound,
  Library,
  Building2,
  Snowflake,
  HandCoins,
  BadgePercent,
  Layers,
  Target,
  Landmark,
} from "lucide-react";

export type Program = {
  name: string;
  subjects: string;
  icon: typeof Atom;
  blurb: string;
  highlights: string[];
  track?: "Science" | "Commerce";
};

// PU College streams — real combinations offered.
export const puStreams: Program[] = [
  {
    name: "Science — PCMB",
    subjects: "Physics · Chemistry · Maths · Biology",
    icon: Stethoscope,
    blurb:
      "The all-rounder science combination — keeps both medical (NEET) and engineering (JEE/CET) pathways open.",
    highlights: ["Free NEET + JEE coaching", "Equipped Bio & Chem labs", "Medical & engineering ready"],
  },
  {
    name: "Science — PCMS",
    subjects: "Physics · Chemistry · Maths · Statistics",
    icon: LineChart,
    blurb:
      "A maths-and-data focused science stream ideal for engineering, architecture and analytics careers.",
    highlights: ["Free JEE / CET / NATA coaching", "Strong in quantitative skills", "Engineering & data track"],
  },
  {
    name: "Commerce — EBAS",
    subjects: "Economics · Business · Accountancy · Statistics",
    icon: Calculator,
    blurb:
      "A complete commerce foundation for CA, CS, law and the defence services — with free in-house coaching.",
    highlights: ["Free CA / CS Foundation coaching", "CLAT & NDA preparation", "Finance, law & business track"],
  },
];

// Free in-house coaching programs (during college hours, no extra fee).
export const coachingPrograms: Program[] = [
  {
    name: "NEET (Medical)",
    subjects: "Physics · Chemistry · Biology",
    icon: Stethoscope,
    blurb: "Integrated medical-entrance coaching aligned with your PCMB classes.",
    highlights: ["Concept + MCQ drilling", "Regular mock tests", "For PCMB students"],
    track: "Science",
  },
  {
    name: "JEE-Main / IIT-JEE",
    subjects: "Physics · Chemistry · Mathematics",
    icon: Atom,
    blurb: "Engineering-entrance preparation built into your PU science timetable.",
    highlights: ["Problem-solving focus", "Advanced practice sets", "For PCMB / PCMS"],
    track: "Science",
  },
  {
    name: "KCET & COMED-K",
    subjects: "PCM / PCB · State + private",
    icon: FlaskConical,
    blurb: "Targeted state and private engineering & medical entrance coaching.",
    highlights: ["Syllabus-aligned", "Speed & accuracy", "Counselling guidance"],
    track: "Science",
  },
  {
    name: "NATA (Architecture)",
    subjects: "Drawing · Aptitude · Maths",
    icon: Ruler,
    blurb: "Architecture-aptitude coaching for students aiming at B.Arch programmes.",
    highlights: ["Drawing & aptitude", "Portfolio guidance", "For science students"],
    track: "Science",
  },
  {
    name: "CA / CS Foundation",
    subjects: "Accounts · Law · Economics",
    icon: Calculator,
    blurb: "Foundation-level coaching for Chartered Accountancy & Company Secretary.",
    highlights: ["CA Foundation (CPT)", "CS Foundation", "For commerce students"],
    track: "Commerce",
  },
  {
    name: "CLAT (Law)",
    subjects: "Legal Aptitude · GK · English",
    icon: Scale,
    blurb: "Common Law Admission Test coaching for future lawyers from the commerce stream.",
    highlights: ["Legal reasoning", "Logical & verbal", "For commerce students"],
    track: "Commerce",
  },
  {
    name: "NDA (Defence)",
    subjects: "Maths · GK · English",
    icon: Shield,
    blurb: "National Defence Academy entrance coaching for aspiring officers.",
    highlights: ["Written-exam prep", "GK & current affairs", "Open to eligible students"],
    track: "Commerce",
  },
  {
    name: "Foundation (VIII–X)",
    subjects: "Maths · Science · Aptitude",
    icon: BookOpen,
    blurb: "Early-start tutoring from Brilliant Coaching Classes (since 1987) across State, CBSE & ICSE.",
    highlights: ["State / CBSE / ICSE", "Strong fundamentals", "Smooth path into PU"],
  },
];

// The exams Brilliant prepares students for — used as a badge strip.
export const examsCovered = [
  "NEET",
  "JEE-Main",
  "IIT-JEE",
  "KCET",
  "COMED-K",
  "NATA",
  "CA Foundation",
  "CS Foundation",
  "CLAT",
  "NDA",
];

export type Feature = {
  title: string;
  desc: string;
  icon: typeof Atom;
};

// Real, verifiable differentiators.
export const whyChoose: Feature[] = [
  {
    title: "Free Integrated Coaching",
    desc: "CET, NEET, JEE-Main, NATA and CA/CS, CLAT, NDA coaching is built into college hours — at no additional fee.",
    icon: Target,
  },
  {
    title: "Merit Scholarships",
    desc: "Fee concessions from 25% up to 100%, awarded on the basis of your Class X (SSLC) performance.",
    icon: BadgePercent,
  },
  {
    title: "Interest-free Education Loans",
    desc: "Financial assistance so that fees never stand between a deserving student and a great education.",
    icon: HandCoins,
  },
  {
    title: "A Legacy Since 1987",
    desc: "Backed by Brilliant Coaching Classes, trusted by Mangalore families for over three decades.",
    icon: GraduationCap,
  },
  {
    title: "Equipped Labs & Library",
    desc: "Air-conditioned classrooms, fully-equipped Physics, Chemistry & Biology labs and a well-stocked library.",
    icon: FlaskRound,
  },
  {
    title: "Hostel for Outstation Students",
    desc: "Safe, supervised hostel accommodation for students coming from beyond Mangalore.",
    icon: Building2,
  },
];

export type Facility = {
  title: string;
  icon: typeof Atom;
};

export const facilities: Facility[] = [
  { title: "Air-conditioned Classrooms", icon: Snowflake },
  { title: "Physics · Chemistry · Biology Labs", icon: Microscope },
  { title: "Well-stocked Library", icon: Library },
  { title: "Hostel for Outstation Students", icon: Building2 },
  { title: "Merit Scholarships (25–100%)", icon: BadgePercent },
  { title: "Interest-free Education Loans", icon: HandCoins },
  { title: "Online Classes (VIII–II PUC)", icon: Wifi },
  { title: "Multi-curriculum Tutoring", icon: Layers },
];

// Departments / faculty strengths (no fabricated individual names).
export type Department = {
  subject: string;
  focus: string;
  icon: typeof Atom;
};

export const departments: Department[] = [
  { subject: "Physics", focus: "Board mastery + JEE / NEET / CET problem-solving", icon: Atom },
  { subject: "Chemistry", focus: "Strong theory with lab-backed understanding", icon: FlaskConical },
  { subject: "Mathematics", focus: "Concept clarity for JEE, CET & beyond", icon: Calculator },
  { subject: "Biology", focus: "NEET-focused depth and revision", icon: Microscope },
  { subject: "Commerce", focus: "Accountancy, economics & CA/CS foundation", icon: Landmark },
];

export type ScholarshipTier = {
  band: string;
  concession: string;
};

export const scholarships: ScholarshipTier[] = [
  { band: "Top performers in SSLC / Class X", concession: "Up to 100% fee concession" },
  { band: "High distinction", concession: "Up to 75% fee concession" },
  { band: "Distinction", concession: "Up to 50% fee concession" },
  { band: "First class", concession: "Up to 25% fee concession" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

// Representative voices (generic attribution — replace with consented quotes).
export const testimonials: Testimonial[] = [
  {
    quote:
      "The free integrated coaching is the real difference — my son prepared for NEET right inside college hours, with no separate tuition cost.",
    name: "A Parent",
    role: "Parent of a II PUC Science student",
    initials: "P",
  },
  {
    quote:
      "Coming from outside Mangalore, the hostel and the supportive faculty made it easy to focus completely on my studies.",
    name: "An Outstation Student",
    role: "II PUC, PCMB",
    initials: "S",
  },
  {
    quote:
      "The scholarship on my Class X marks made a top-quality education genuinely affordable for our family.",
    name: "A Scholarship Awardee",
    role: "I PUC, Commerce",
    initials: "C",
  },
];

export type Step = {
  step: string;
  title: string;
  desc: string;
};

export const admissionSteps: Step[] = [
  {
    step: "01",
    title: "Enquire",
    desc: "Submit the enquiry form or call the office. Our team will guide you through eligibility and streams.",
  },
  {
    step: "02",
    title: "Visit & Counselling",
    desc: "Meet the faculty, see the campus, and choose the right Science or Commerce combination.",
  },
  {
    step: "03",
    title: "Scholarship Check",
    desc: "Share your SSLC / Class X marks to find out the merit scholarship you qualify for.",
  },
  {
    step: "04",
    title: "Enrol",
    desc: "Complete the admission formalities and begin your PU + integrated-coaching journey.",
  },
];

export type SisterInstitution = {
  name: string;
  since: string;
  desc: string;
  icon: typeof Atom;
};

export const sisterInstitutions: SisterInstitution[] = [
  {
    name: "Brilliant Coaching Classes",
    since: "Since 1987",
    desc: "Tutoring for Classes VIII–X and I–II PUC across State, CBSE and ICSE curricula.",
    icon: BookOpen,
  },
  {
    name: "Brilliant PU College",
    since: "Since 2010",
    desc: "Science & Commerce pre-university education with free integrated entrance coaching.",
    icon: GraduationCap,
  },
  {
    name: "Brilliant Correspondence College",
    since: "Since 2004",
    desc: "Flexible exam pathways for Class X and II PUC with online classes and hostel support.",
    icon: Layers,
  },
];

export const milestones: { icon: typeof Atom; label: string; value: string }[] = [
  { icon: GraduationCap, label: "Serving students since", value: "1987" },
  { icon: Target, label: "Competitive exams covered", value: "10+" },
  { icon: BadgePercent, label: "Merit scholarships up to", value: "100%" },
  { icon: Layers, label: "Curricula tutored", value: "3" },
];
