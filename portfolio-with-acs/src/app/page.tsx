import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import LearningJourney from "@/components/LearningJourney";
import Section from "@/components/Section";
import ProjectShowcase from "@/components/ProjectShowcase";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SupportDemo from "@/components/demos/SupportDemo";
import OrderDemo from "@/components/demos/OrderDemo";
import SalesDemo from "@/components/demos/SalesDemo";
import AcsDemo from "@/components/demos/AcsDemo";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Bio />
      <LearningJourney />

      <ProjectShowcase
        number="01"
        name="Nexa Support"
        category="Customer Support"
        headline="Intelligent e-commerce support that proves its value."
        description="An AI support system that answers product and policy questions with cited sources, looks up orders, drafts policy-correct refund decisions, and escalates sensitive cases to humans. Every metric is computed from real ticket replays."
        points={[
          "Grounded answers with source citations",
          "Order lookup and status assistance",
          "Policy-correct refund and return decisions",
          "Human escalation for sensitive cases",
          "Operations dashboard with real ROI metrics",
        ]}
        stack={["Python", "FastAPI", "LangChain", "scikit-learn", "SQLite"]}
        github="https://github.com/aymenfoot/nexa-support"
        demo={<SupportDemo />}
      />

      <ProjectShowcase
        number="02"
        name="Nexa Order Intelligence"
        category="Order Operations"
        headline="An agentic system for order and shipping workflows."
        description="A ReAct AI agent that handles order lookups, shipment tracking, and returns through tool execution and structured API interactions — not just chat."
        points={[
          "Order lookup by ID or email",
          "Shipment tracking across carriers",
          "Return eligibility and initiation",
          "Agentic reasoning with retry logic",
          "FastAPI gateway with Swagger docs",
        ]}
        stack={["Python", "LangGraph", "FastAPI", "Streamlit", "SQLite"]}
        github="https://github.com/aymenfoot/nexa-order-intelligence"
        demo={<OrderDemo />}
        reverse
      />

      <ProjectShowcase
        number="03"
        name="Nexa Sales"
        category="Sales Assistance"
        headline="An AI shopping assistant for Shopify stores."
        description="A conversational sales assistant widget that helps shoppers discover products, get recommendations, and move toward purchase, with an admin panel and optional N8N integration."
        points={[
          "Product discovery and recommendations",
          "Real-time conversational chat widget",
          "Customizable appearance and behavior",
          "Mobile-responsive storefront experience",
          "Optional N8N AI workflow integration",
        ]}
        stack={["TypeScript", "Remix", "Prisma", "Shopify", "N8N"]}
        github="https://github.com/aymenfoot/nexa-sales"
        demo={<SalesDemo />}
      />

      {/* ACS flagship */}
      <Section id="acs" className="bg-[var(--bg-elev)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-dim)]">
            <span>04</span>
            <span className="w-8 h-px bg-[var(--border-strong)]" />
            <span className="uppercase tracking-widest">Flagship System</span>
          </div>
          <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
            ACS — Agentic Commerce System
          </h2>
          <p className="mt-3 text-xl text-[var(--accent-2)] font-medium">
            A complete intelligent commerce journey.
          </p>
          <p className="mt-6 max-w-3xl text-[var(--text-muted)] leading-relaxed">
            ACS is NEXA&apos;s flagship custom AI commerce implementation. It helps e-commerce
            businesses improve product discovery, customer experience, sales assistance, and
            operational support through a coordinated agentic system.
          </p>
          <div className="mt-10">
            <AcsDemo />
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {[
              "Understand shopping intent",
              "Search the product catalog",
              "Compare relevant products",
              "Generate contextual recommendations",
              "Answer shipping and policy questions",
              "Route unsupported requests to human support",
            ].map((c) => (
              <div key={c} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                {c}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90 transition"
            >
              Discuss Your ACS Implementation
            </a>
          </div>
          <p className="mt-6 text-xs text-[var(--text-dim)] max-w-3xl">
            Capabilities are subject to store configuration and available integrations.
          </p>
        </div>
      </Section>

      <Capabilities />
      <Contact />
      <Footer />
    </main>
  );
}
