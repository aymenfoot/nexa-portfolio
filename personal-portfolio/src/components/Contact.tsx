"use client";

import { useState } from "react";
import { Send, ExternalLink } from "lucide-react";
import Section from "./Section";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "ready">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("ready");
    if (CONTACT_EMAIL) {
      const subject = encodeURIComponent(`NEXA inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nStore URL: ${url}\n\n${message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <Section id="contact">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">Contact</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Discuss your ACS implementation.
          </h2>
          <p className="mt-6 text-[var(--text-muted)] leading-relaxed max-w-lg">
            Tell us about your store, your customers, and the workflows you want to automate.
            We will review your requirements and propose a focused implementation plan.
          </p>
          <div className="mt-8">
            <a
              href="https://github.com/aymenfoot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition"
            >
              <ExternalLink size={16} /> github.com/aymenfoot
            </a>
          </div>
          {!CONTACT_EMAIL && (
            <p className="mt-6 text-xs text-[var(--text-dim)] max-w-md">
              Note: the contact form is not yet connected to a mail backend. Set
              <code className="mx-1 px-1.5 py-0.5 rounded bg-[var(--surface)]">NEXT_PUBLIC_CONTACT_EMAIL</code>
              to enable direct email submission, or reach out via GitHub.
            </p>
          )}
        </div>
        <form onSubmit={onSubmit} className="surface rounded-2xl p-6 md:p-8 space-y-4">
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--accent)] outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Business email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--accent)] outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Store URL (optional)</label>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--accent)] outline-none"
              placeholder="https://yourstore.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5">Project requirements</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] focus:border-[var(--accent)] outline-none resize-none"
              placeholder="Describe your store and what you want to automate"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90 transition"
          >
            <Send size={16} /> Send inquiry
          </button>
          {status === "error" && (
            <p className="text-sm text-red-400">Please fill in name, email, and requirements.</p>
          )}
          {status === "ready" && !CONTACT_EMAIL && (
            <p className="text-sm text-[var(--accent-2)]">
              Your message is ready. Please send it via GitHub or configure NEXT_PUBLIC_CONTACT_EMAIL.
            </p>
          )}
          {status === "ready" && CONTACT_EMAIL && (
            <p className="text-sm text-green-400">Opening your email client…</p>
          )}
        </form>
      </div>
    </Section>
  );
}
