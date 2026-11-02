import Section from "./Section";
import { BookOpen, Code2, FlaskConical, Rocket } from "lucide-react";

const steps = [
  { icon: BookOpen, title: "Learn", desc: "Studied AI engineering through paid and free courses and technical resources." },
  { icon: FlaskConical, title: "Experiment", desc: "Tested ideas, models, and tools through hands-on experimentation." },
  { icon: Code2, title: "Build", desc: "Turned learning into working applications and real software projects." },
  { icon: Rocket, title: "Improve", desc: "Iterated, tested, and refined each system for production quality." },
];

export default function LearningJourney() {
  return (
    <Section id="journey">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">Learning journey</p>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">How I got here.</h2>
        <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
          Around nine months of focused learning and building — from fundamentals to deployed AI systems.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.title} className="surface rounded-xl p-6">
              <s.icon size={22} className="text-[var(--accent-2)]" />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
