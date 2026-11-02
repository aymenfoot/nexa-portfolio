"use client";
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-dim)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          <span>NEXA — Intelligent AI systems for e-commerce.</span>
        </div>
        <div>© 2026 NEXA. All rights reserved.</div>
      </div>
    </footer>
  );
}
