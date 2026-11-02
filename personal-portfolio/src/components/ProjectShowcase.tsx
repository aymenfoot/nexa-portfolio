"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Section from "./Section";

export default function ProjectShowcase({
  number,
  name,
  category,
  headline,
  description,
  points,
  stack,
  github,
  demo,
  reverse = false,
  flagship = false,
}: {
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  points: string[];
  stack: string[];
  github: string;
  demo: React.ReactNode;
  reverse?: boolean;
  flagship?: boolean;
}) {
  return (
    <Section id={name.toLowerCase().replace(/\s+/g, "-").replace("nexa-", "")}>
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-dim)]">
            <span>{number}</span>
            <span className="w-8 h-px bg-[var(--border-strong)]" />
            <span className="uppercase tracking-widest">{category}</span>
          </div>
          <h2 className={`mt-6 font-semibold tracking-tight ${flagship ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"}`}>
            {name}
          </h2>
          <p className="mt-3 text-xl text-[var(--accent-2)] font-medium">{headline}</p>
          <p className="mt-6 text-[var(--text-muted)] leading-relaxed max-w-xl">{description}</p>
          <ul className="mt-6 space-y-2.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-md text-xs font-mono border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-strong)] text-sm font-medium hover:bg-[var(--surface)] transition"
            >
              <ExternalLink size={16} /> View on GitHub
            </a>
            {flagship && (
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition"
              >
                Discuss Your ACS Implementation <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {demo}
        </motion.div>
      </div>
    </Section>
  );
}
