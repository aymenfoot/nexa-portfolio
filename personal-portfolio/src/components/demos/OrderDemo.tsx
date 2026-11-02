"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const flow = [
  { label: "Input", value: "Where is my package FDX-78901234?" },
  { label: "Triage", value: "intent = shipping_tracking" },
  { label: "Tool", value: "track_shipment(\"FDX-78901234\")" },
  { label: "Result", value: "FedEx · DELIVERED · 3 events" },
  { label: "Response", value: "Your package was delivered on Tue." },
];

export default function OrderDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % (flow.length + 1)), 1400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="surface rounded-2xl p-5 md:p-6 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="text-xs text-[var(--text-dim)] font-mono">nexa-order · agent</span>
      </div>
      <div className="space-y-2.5">
        {flow.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0.25 }}
            animate={{ opacity: idx < i ? 1 : 0.25 }}
            transition={{ duration: 0.4 }}
            className={`flex items-start gap-3 p-3 rounded-xl border ${
              idx < i ? "border-[var(--border-strong)] bg-[var(--surface-2)]" : "border-[var(--border)] bg-transparent"
            }`}
          >
            <span className="text-xs font-mono text-[var(--accent-2)] w-16 shrink-0 pt-0.5">{f.label}</span>
            <span className="text-sm text-[var(--text)]">{f.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
