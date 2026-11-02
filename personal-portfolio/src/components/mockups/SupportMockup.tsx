export default function SupportMockup() {
  return (
    <div className="surface rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-2)]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-xs font-mono text-[var(--text-dim)]">nexa-support · chat</span>
      </div>
      <div className="p-5 space-y-3 text-sm">
        <div className="flex justify-end">
          <div className="bg-[var(--accent)] text-[var(--bg)] px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
            Where is my order ORD-1002?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-[var(--surface-2)] text-[var(--text)] px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
            Your order ORD-1002 is <span className="text-[var(--accent)] font-medium">delivered</span>. Tracking: FDX-78901234.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[var(--accent)] text-[var(--bg)] px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
            Can I return it? Unused.
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-[var(--surface-2)] text-[var(--text)] px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
            Yes — within 30 days. Refund: <span className="text-[var(--accent)] font-medium">full amount</span>. Escalated to human for defect claim.
          </div>
        </div>
        <div className="pt-2 flex gap-2">
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-xs text-[var(--text-muted)]">Order lookup</span>
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-xs text-[var(--text-muted)]">Refund policy</span>
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-xs text-[var(--text-muted)]">Escalate</span>
        </div>
      </div>
    </div>
  );
}
