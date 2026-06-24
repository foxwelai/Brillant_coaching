import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A glimpse of life at Brilliant PU College & Coaching, Mangalore — labs, library, classrooms and the day results arrive.",
};

// Swap these with the college's own campus photographs when available.
const photos = [
  { src: "/images/celebration.png", label: "Results day", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/lab.jpg", label: "Science laboratory", span: "" },
  { src: "/images/classroom.jpg", label: "In the classroom", span: "" },
  { src: "/images/library.png", label: "The library", span: "lg:col-span-2" },
  { src: "/images/studygroup.jpg", label: "Group study", span: "" },
  { src: "/images/books.jpg", label: "Learning resources", span: "" },
  { src: "/images/studygroup2.jpg", label: "Collaboration", span: "lg:col-span-2" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus Life"
        crumbs={[{ label: "Gallery" }]}
        title={
          <>
            Life at <span className="text-gradient">Brilliant</span>
          </>
        }
        subtitle="Beyond the syllabus — labs, library, classrooms, and the moments that make the journey worth it."
      />

      <Section>
        <Stagger className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {photos.map((p) => (
            <StaggerItem key={p.src + p.label} className={`h-full ${p.span}`}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5">
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                  {p.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-8 text-center text-sm text-slate-400">
          Representative images — replace with the college&apos;s own campus
          photographs in <code className="text-slate-500">/public/images</code>.
        </p>
      </Section>

      <CtaBanner />
    </>
  );
}
