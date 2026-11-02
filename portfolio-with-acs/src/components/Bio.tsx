import Section from "./Section";

export default function Bio() {
  return (
    <Section id="about">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">About</p>
          <h2 className="display mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Aymen Jr.</h2>
          <p className="mt-2 text-[var(--accent)] font-medium">AI Engineer</p>
        </div>
        <div className="lg:col-span-8 space-y-5 text-[var(--text-muted)] leading-relaxed text-lg">
          <p>
            I&apos;m an AI Engineer who started the journey around nine months ago, learning through a
            mix of paid and free courses, technical resources, and hands-on experimentation.
          </p>
          <p>
            I focus on applying what I learn by building real software — exploring AI-powered systems
            and turning ideas into working applications. The best way to learn engineering is to build,
            experiment, test, and improve.
          </p>
          <p className="text-[var(--text)]">
            Below are systems I&apos;ve built along the way.
          </p>
        </div>
      </div>
    </Section>
  );
}
