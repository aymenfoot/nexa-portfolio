import Section from "./Section";

export default function Bio() {
  return (
    <Section id="about">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">About</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Aymen Jr.</h2>
          <p className="mt-3 text-xl text-[var(--accent-2)] font-medium">AI Engineer</p>
        </div>
        <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
          <p>
            Hi, I&apos;m Aymen Jr., an AI Engineer. I started my AI Engineering journey around nine
            months ago, learning through a combination of paid and free courses, technical resources,
            and hands-on experimentation.
          </p>
          <p>
            Throughout this journey, I focused on applying what I learned by building real software
            projects, exploring AI-powered systems, and developing practical solutions. I believe the
            best way to learn engineering is to build, experiment, test, and continuously improve.
          </p>
          <p>
            Below are some of the systems I&apos;ve built along the way.
          </p>
        </div>
      </div>
    </Section>
  );
}
