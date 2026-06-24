"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Animates the numeric portion of a string (e.g. "Up to 100%", "10+", "1987").
// Falls back to plain text when there's no number (e.g. "FREE").
export function CountUp({
  value,
  className,
  duration = 1400,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const initial = match ? `${match[1]}0${match[3]}` : value;

  const [display, setDisplay] = useState<string>(match ? initial : value);

  useEffect(() => {
    const m = value.match(/^(\D*)([\d.,]+)(.*)$/);
    if (!inView || !m) {
      if (!m) setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = m;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const hasComma = numStr.includes(",");
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      const formatted = hasComma
        ? Math.round(current).toLocaleString("en-IN")
        : current.toFixed(decimals);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // Only re-run when it actually enters view or the source value changes.
  }, [inView, value, duration]);

  return (
    <span
      ref={ref}
      className={`whitespace-nowrap [font-variant-numeric:tabular-nums] ${className ?? ""}`}
    >
      {display}
    </span>
  );
}
