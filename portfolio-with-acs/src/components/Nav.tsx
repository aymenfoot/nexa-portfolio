"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#support", label: "Support" },
  { href: "#order-intelligence", label: "Order" },
  { href: "#sales", label: "Sales" },
  { href: "#acs", label: "ACS" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setScrolled(h.scrollTop > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-[var(--bg)]/70 border-b border-[var(--border)]" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
            <span className="text-lg">NEXA</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--text-muted)]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-[var(--text)] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[var(--accent)] text-white hover:opacity-90 transition"
          >
            Discuss ACS
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu" aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-elev)]">
            <ul className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
                  >
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
