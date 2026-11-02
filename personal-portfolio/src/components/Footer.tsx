"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          <span className="display font-semibold tracking-tight">NEXA</span>
        </div>
        <div className="text-sm text-[var(--text-dim)]">© 2026 Aymen Jr. All rights reserved.</div>
      </div>
    </footer>
  );
}
