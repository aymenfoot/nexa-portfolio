import Section from "./Section";

const steps = [
  { n: "01", title: "Learn", desc: "AI engineering through paid and free courses and technical resources." },
  { n: "02", title: "Experiment", desc: "Tested ideas, models, and tools through hands-on experimentation." },
  { n: "03", title: "Build", desc: "Turned learning into working applications and real software." },
  { n: "04", title: "Improve", desc: "Iterated, tested, and refined each system for production quality." },
];

export default function LearningJourney() {
  return (
    <Section id="journey" className="bg-[var(--bg-elev)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">Learning journey</p>
            <h2 className="display mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[0.9]">
              From zero to
              <br />
              <span className="text-[var(--accent)]">shipped systems.</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[var(--text-muted)] leading-relaxed max-w-md">
              Around nine months of focused learning and building — from fundamentals to deployed AI systems.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[var(--bg-elev)] p-8 hover:bg-[var(--surface)] transition-colors">
              <div className="display text-5xl font-semibold text-[var(--accent)]/30">{s.n}</div>
              <h3 className="display mt-6 text-xl font-semibold text-[var(--text)]">{s.title}</h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
