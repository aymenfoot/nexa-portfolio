"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  { from: "user", text: "Where is my order ORD-1002?" },
  { from: "ai", text: "Let me check that for you." },
  { from: "tool", text: "lookup_order(\"ORD-1002\") ✓ delivered" },
  { from: "ai", text: "Your order ORD-1002 is delivered. Tracking: FDX-78901234." },
  { from: "user", text: "Can I return it? It's unused." },
  { from: "ai", text: "Yes — within the 30-day window. Refund: full amount." },
];

export default function SupportDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % (steps.length + 1)), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="surface rounded-2xl p-5 md:p-6 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="text-xs text-[var(--text-dim)] font-mono">nexa-support · live</span>
      </div>
      <div className="space-y-3 min-h-[260px]">
        {steps.slice(0, i).map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`flex ${s.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-3.5 py-2 rounded-2xl text-sm ${
                s.from === "user"
                  ? "bg-[var(--accent)] text-white"
                  : s.from === "tool"
                  ? "bg-[var(--surface-2)] text-[var(--accent-2)] font-mono text-xs"
                  : "bg-[var(--surface-2)] text-[var(--text)]"
              }`}
            >
              {s.text}
            </div>
          </motion.div>
        ))}
        {i < steps.length && (
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
