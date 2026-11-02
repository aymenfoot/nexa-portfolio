"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden noise">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="absolute top-1/3 -left-32 w-[480px] h-[480px] rounded-full bg-[var(--accent)]/10 blur-[140px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--accent-2)]/10 blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]"
          >
            <span className="w-8 h-px bg-[var(--accent)]" />
            AI Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="display mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.9]"
          >
            Aymen Jr.
            <br />
            <span className="text-[var(--text-muted)]">Building</span>
            <br />
            <span className="text-[var(--accent)]">intelligent</span>
            <br />
            systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-md text-lg text-[var(--text-muted)] leading-relaxed"
          >
            AI systems for e-commerce — support, order intelligence, and sales assistance.
            Real software, built through hands-on learning and engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a href="#work" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--accent)] text-[var(--bg)] font-medium hover:opacity-90 transition">
              Explore work
            </a>
            <a href="https://github.com/aymenfoot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border-strong)] text-[var(--text)] font-medium hover:bg-[var(--surface)] transition">
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square max-w-[520px] mx-auto">
            {/* Concentric rings */}
            <div className="absolute inset-0 rounded-full border border-[var(--border)]" />
            <div className="absolute inset-8 rounded-full border border-[var(--border-strong)]" />
            <div className="absolute inset-16 rounded-full border border-[var(--accent)]/30" />
            <div className="absolute inset-24 rounded-full bg-[var(--accent)]/5 blur-xl" />
            {/* Nodes */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={deg}
                className="absolute w-3 h-3 rounded-full bg-[var(--accent)]"
                style={{
                  top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 42}%)`,
                  left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 42}%)`,
                  transform: "translate(-50%, -50%)",
                  opacity: 0.6 + (i % 3) * 0.13,
                }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="display text-6xl font-semibold text-[var(--accent)]">AI</div>
                <div className="text-xs font-mono text-[var(--text-dim)] mt-2 tracking-widest">SYSTEMS</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
