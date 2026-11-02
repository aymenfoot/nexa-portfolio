import { ArrowUpRight } from "lucide-react";
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
  mockup,
  reverse = false,
}: {
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  points: string[];
  stack: string[];
  github: string;
  mockup: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <Section id={name.toLowerCase().replace(/\s+/g, "-").replace("nexa-", "")}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-dim)]">
              <span>{number}</span>
              <span className="w-8 h-px bg-[var(--border-strong)]" />
              <span className="uppercase tracking-widest">{category}</span>
            </div>
            <h2 className="display mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
              {name}
            </h2>
            <p className="mt-4 text-xl text-[var(--accent)] font-medium">{headline}</p>
            <p className="mt-6 text-[var(--text-muted)] leading-relaxed max-w-lg">{description}</p>
            <ul className="mt-6 space-y-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="px-2.5 py-1 rounded-md text-xs font-mono border border-[var(--border)] text-[var(--text-muted)]">
                  {s}
                </span>
              ))}
            </div>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition"
            >
              Explore on GitHub <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--accent)]/5 blur-3xl rounded-3xl" aria-hidden="true" />
            {mockup}
          </div>
        </div>
      </div>
    </Section>
  );
}
