"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden noise">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[var(--accent)]/20 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[var(--accent-2)]/15 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 text-xs text-[var(--text-muted)]"
        >
          <Sparkles size={13} className="text-[var(--accent-2)]" />
          Intelligent systems for e-commerce
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]"
        >
          Aymen Jr.
          <br />
          <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">
            AI Engineer.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-[var(--text-muted)] leading-relaxed"
        >
          I build AI-powered systems for e-commerce — customer support, order intelligence,
          and sales assistance. Real software, built through hands-on learning and engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#support"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90 transition"
          >
            Explore Our Work <ArrowRight size={16} />
          </a>
          <a
            href="#acs"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border-strong)] text-[var(--text)] font-medium hover:bg-[var(--surface)] transition"
          >
            Discover ACS
          </a>
        </motion.div>

        {/* Visual preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative"
        >
          <div className="surface glow rounded-2xl p-6 md:p-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-4 text-xs text-[var(--text-dim)] font-mono">nexa — agent console</span>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="text-[var(--text-dim)]">$ nexa agent --task &quot;Find order ORD-1002 and check delivery&quot;</div>
              <div className="text-[var(--accent-2)]">→ triage: intent=order_status, order_id=ORD-1002</div>
              <div className="text-[var(--accent-2)]">→ tool: lookup_order(&quot;ORD-1002&quot;) ✓</div>
              <div className="text-[var(--text-muted)]">→ response: &quot;Your order is delivered. Tracking: FDX-78901234&quot;</div>
              <div className="text-green-400">✓ completed in 1.2s</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
