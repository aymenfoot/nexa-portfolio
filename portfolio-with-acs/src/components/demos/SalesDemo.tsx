"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const flow = [
  { q: "I need running shoes under $120", a: null },
  { q: null, a: "Found 3 options that match your budget." },
  { q: null, a: "• CloudRun Pro — $99  • AeroLite — $109  • Stride X — $115" },
  { q: "Which is best for long runs?", a: null },
  { q: null, a: "CloudRun Pro: best cushioning for distance." },
];

export default function SalesDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % (flow.length + 1)), 1600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="surface rounded-2xl p-5 md:p-6 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="text-xs text-[var(--text-dim)] font-mono">nexa-sales · widget</span>
      </div>
      <div className="space-y-3 min-h-[220px]">
        {flow.slice(0, i).map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`flex ${f.q ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[90%] px-3.5 py-2 rounded-2xl text-sm whitespace-pre-line ${
                f.q ? "bg-[var(--accent)] text-white" : "bg-[var(--surface-2)] text-[var(--text)]"
              }`}
            >
              {f.q ?? f.a}
            </div>
          </motion.div>
        ))}
        {i < flow.length && (
          <div className="flex justify-start">
            <div className="px-3.5 py-2 rounded-2xl bg-[var(--surface-2)] text-[var(--text-dim)] text-sm">
              <span className="animate-pulse">● ● ●</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
