"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const flow = [
  "Customer: I need a waterproof jacket for hiking under $150",
  "ACS: Understanding shopping intent…",
  "ACS: Searching product catalog…",
  "ACS: Retrieving product information…",
  "ACS: Comparing 4 relevant jackets…",
  "ACS: Recommending 2 best matches with links",
  "ACS: Answering shipping & return policy",
  "ACS: Routing unsupported request to human support",
];

export default function AcsDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % (flow.length + 1)), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative surface rounded-2xl p-6 md:p-8 w-full max-w-2xl mx-auto overflow-hidden">
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[var(--accent)]/20 blur-[80px]" aria-hidden="true" />
      <div className="flex items-center gap-2 mb-5">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-2)]" />
        <span className="text-xs text-[var(--text-dim)] font-mono">acs · commerce journey</span>
      </div>
      <div className="space-y-2.5">
        {flow.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: idx < i ? 1 : 0.2, x: idx < i ? 0 : -8 }}
            transition={{ duration: 0.4 }}
            className={`flex items-center gap-3 p-3 rounded-xl border text-sm ${
              idx < i
                ? "border-[var(--accent)]/40 bg-[var(--accent)]/5 text-[var(--text)]"
                : "border-[var(--border)] bg-transparent text-[var(--text-dim)]"
            }`}
          >
            <span className="text-[var(--accent-2)] font-mono text-xs w-6">{String(idx + 1).padStart(2, "0")}</span>
            {f}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
