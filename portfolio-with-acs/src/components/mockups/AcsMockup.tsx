export default function AcsMockup() {
  const steps = [
    "Customer: waterproof hiking jacket under $150",
    "ACS: Understanding shopping intent…",
    "ACS: Searching product catalog…",
    "ACS: Comparing 4 relevant jackets…",
    "ACS: Recommending 2 best matches with links",
    "ACS: Answering shipping & return policy",
    "ACS: Routing unsupported request to human support",
  ];
  return (
    <div className="surface rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-2)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-2)]" />
        <span className="text-xs font-mono text-[var(--text-dim)]">acs · commerce journey</span>
      </div>
      <div className="p-5 space-y-2">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm">
            <span className="text-[var(--accent-2)] font-mono text-xs w-6">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[var(--text)]">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
