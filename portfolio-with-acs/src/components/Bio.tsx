import Section from "./Section";

export default function Bio() {
  return (
    <Section id="about">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">About</p>
          <h2 className="display mt-4 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.9]">
            Aymen
            <br />
            <span className="text-[var(--accent)]">Jr.</span>
          </h2>
          <p className="mt-4 text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest">AI Engineer</p>
        </div>
        <div className="lg:col-span-7 space-y-6 text-[var(--text-muted)] leading-relaxed text-lg">
          <p>
            I&apos;m an AI Engineer who started the journey around nine months ago, learning through a
            mix of paid and free courses, technical resources, and hands-on experimentation.
          </p>
          <p>
            I focus on applying what I learn by building real software — exploring AI-powered systems
            and turning ideas into working applications. The best way to learn engineering is to build,
            experiment, test, and improve.
          </p>
          <div className="pt-6 border-t border-[var(--border)] flex items-baseline gap-6">
            <div>
              <div className="display text-5xl font-semibold text-[var(--accent)]">09</div>
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mt-1">Months learning</div>
            </div>
            <div>
              <div className="display text-5xl font-semibold text-[var(--text)]">03</div>
              <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)] mt-1">Systems built</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
