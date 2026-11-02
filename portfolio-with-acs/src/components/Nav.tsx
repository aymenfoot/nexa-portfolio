"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#acs", label: "ACS" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setScrolled(h.scrollTop > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[var(--forest)]/90 backdrop-blur-md border-b border-[var(--border)]" : ""
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
            <span className="display font-semibold tracking-tight text-lg text-[var(--ivory)]">NEXA</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm text-[var(--text-muted)]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-[var(--text)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://github.com/aymenfoot"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full bg-[var(--accent)] text-[var(--forest)] hover:opacity-90 transition"
          >
            GitHub
          </a>
          <button className="md:hidden p-2 text-[var(--text)]" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? "✕" : "☰"}
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-elev)]">
            <ul className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block text-sm text-[var(--text-muted)] hover:text-[var(--text)]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
