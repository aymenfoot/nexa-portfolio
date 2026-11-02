"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--forest)] noise">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/8 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]"
          >
            <span className="w-10 h-px bg-[var(--accent)]" />
            AI Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="display mt-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.85] text-[var(--ivory)]"
          >
            Aymen
            <br />
            <span className="text-[var(--accent)]">Jr.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-md text-lg text-[var(--text-muted)] leading-relaxed"
          >
            I build intelligent AI systems for e-commerce — support, order intelligence, and sales
            assistance. Real software, engineered by hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a href="#work" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--accent)] text-[var(--forest)] font-medium hover:opacity-90 transition">
              Explore work
            </a>
            <a href="https://github.com/aymenfoot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[var(--border-strong)] text-[var(--text)] font-medium hover:bg-[var(--surface)] transition">
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Visual: abstract 3D-like composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-[460px] h-[460px]">
            <svg viewBox="0 0 460 460" className="w-full h-full" aria-hidden="true">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#C8F169" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#C8F169" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F2F0E8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#F2F0E8" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              {/* Grid planes */}
              <g opacity="0.4">
                {[0,1,2,3,4].map((i) => (
                  <line key={`h${i}`} x1="80" y1={120 + i*60} x2="380" y2={120 + i*60} stroke="#A7B4A6" strokeWidth="0.5" />
                ))}
                {[0,1,2,3,4].map((i) => (
                  <line key={`v${i}`} x1={120 + i*60} y1="80" x2={120 + i*60} y2="380" stroke="#A7B4A6" strokeWidth="0.5" />
                ))}
              </g>
              {/* Floating glass panels */}
              <rect x="110" y="110" width="160" height="100" rx="12" fill="url(#g2)" stroke="#C8F169" strokeOpacity="0.4" strokeWidth="1" transform="rotate(-8 190 160)" />
              <rect x="190" y="200" width="180" height="110" rx="12" fill="url(#g2)" stroke="#C8F169" strokeOpacity="0.4" strokeWidth="1" transform="rotate(6 280 255)" />
              <rect x="130" y="280" width="140" height="80" rx="12" fill="url(#g2)" stroke="#C8F169" strokeOpacity="0.4" strokeWidth="1" transform="rotate(-4 200 320)" />
              {/* Accent nodes */}
              <circle cx="190" cy="160" r="4" fill="#C8F169" />
              <circle cx="280" cy="255" r="4" fill="#C8F169" />
              <circle cx="200" cy="320" r="4" fill="#C8F169" />
              <circle cx="320" cy="140" r="3" fill="#F2F0E8" opacity="0.6" />
              <circle cx="140" cy="340" r="3" fill="#F2F0E8" opacity="0.6" />
              {/* Connecting lines */}
              <line x1="190" y1="160" x2="280" y2="255" stroke="#C8F169" strokeWidth="0.8" strokeOpacity="0.5" />
              <line x1="280" y1="255" x2="200" y2="320" stroke="#C8F169" strokeWidth="0.8" strokeOpacity="0.5" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
