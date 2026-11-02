import Section from "./Section";
import { Bot, ShoppingCart, Headphones, Workflow, Brain, ShieldCheck } from "lucide-react";

const caps = [
  { icon: Bot, title: "AI Agent Engineering", desc: "Agentic systems with tool execution, routing, and retries." },
  { icon: Headphones, title: "Intelligent Support", desc: "Grounded answers, policy-aware refunds, escalation." },
  { icon: ShoppingCart, title: "Commerce Assistance", desc: "Product discovery, recommendations, and sales help." },
  { icon: Workflow, title: "Workflow Automation", desc: "Order, shipping, and returns process automation." },
  { icon: Brain, title: "LLM Integration", desc: "Provider-agnostic LLM layers with offline fallbacks." },
  { icon: ShieldCheck, title: "Production Quality", desc: "Tests, builds, and deployable containers." },
];

export default function Capabilities() {
  return (
    <Section id="capabilities" className="bg-[var(--bg-elev)]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">Why NEXA</p>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Capabilities</h2>
        <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
          NEXA builds intelligent commerce systems end to end — from agent design to deployable applications.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caps.map((c) => (
            <div key={c.title} className="surface rounded-xl p-6">
              <c.icon size={22} className="text-[var(--accent-2)]" />
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
