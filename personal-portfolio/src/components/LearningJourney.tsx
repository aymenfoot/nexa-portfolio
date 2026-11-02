import Section from "./Section";
import { BookOpen, FlaskConical, Code2, Rocket } from "lucide-react";

const steps = [
  { n: "01", icon: BookOpen, title: "Learn", desc: "AI engineering through paid and free courses and technical resources." },
  { n: "02", icon: FlaskConical, title: "Experiment", desc: "Tested ideas, models, and tools through hands-on experimentation." },
  { n: "03", icon: Code2, title: "Build", desc: "Turned learning into working applications and real software." },
  { n: "04", icon: Rocket, title: "Improve", desc: "Iterated, tested, and refined each system for production quality." },
];

export default function LearningJourney() {
  return (
    <Section id="journey">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">Learning journey</p>
        <h2 className="display mt-4 text-3xl md:text-5xl font-semibold tracking-tight">How I got here.</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[var(--bg)] p-8">
              <div className="flex items-center justify-between">
                <s.icon size={20} className="text-[var(--accent)]" />
                <span className="font-mono text-xs text-[var(--text-dim)]">{s.n}</span>
              </div>
              <h3 className="display mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
