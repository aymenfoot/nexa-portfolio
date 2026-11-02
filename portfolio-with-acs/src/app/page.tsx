import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import LearningJourney from "@/components/LearningJourney";
import Section from "@/components/Section";
import ProjectShowcase from "@/components/ProjectShowcase";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SupportMockup from "@/components/mockups/SupportMockup";
import OrderMockup from "@/components/mockups/OrderMockup";
import SalesMockup from "@/components/mockups/SalesMockup";
import AcsMockup from "@/components/mockups/AcsMockup";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Bio />
      <LearningJourney />

      <Section id="work">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">Selected work</p>
          <h2 className="display mt-4 text-3xl md:text-5xl font-semibold tracking-tight">What I&apos;ve built.</h2>
        </div>
      </Section>

      <ProjectShowcase
        number="01"
        name="Nexa Support"
        category="Customer Support"
        headline="Intelligent e-commerce support that proves its value."
        description="An AI support system that answers product and policy questions with cited sources, looks up orders, drafts policy-correct refund decisions, and escalates sensitive cases to humans."
        points={[
          "Grounded answers with source citations",
          "Order lookup and status assistance",
          "Policy-correct refund and return decisions",
          "Human escalation for sensitive cases",
          "Operations dashboard with real ROI metrics",
        ]}
        stack={["Python", "FastAPI", "LangChain", "scikit-learn"]}
        github="https://github.com/aymenfoot/nexa-support"
        mockup={<SupportMockup />}
      />

      <ProjectShowcase
        number="02"
        name="Nexa Order Intelligence"
        category="Order Operations"
        headline="An agentic system for order and shipping workflows."
        description="A ReAct AI agent that handles order lookups, shipment tracking, and returns through tool execution and structured API interactions."
        points={[
          "Order lookup by ID or email",
          "Shipment tracking across carriers",
          "Return eligibility and initiation",
          "Agentic reasoning with retry logic",
          "FastAPI gateway with Swagger docs",
        ]}
        stack={["Python", "LangGraph", "FastAPI", "Streamlit"]}
        github="https://github.com/aymenfoot/nexa-order-intelligence"
        mockup={<OrderMockup />}
        reverse
      />

      <ProjectShowcase
        number="03"
        name="Nexa Sales"
        category="Sales Assistance"
        headline="An AI shopping assistant for Shopify stores."
        description="A conversational sales assistant widget that helps shoppers discover products, get recommendations, and move toward purchase."
        points={[
          "Product discovery and recommendations",
          "Real-time conversational chat widget",
          "Customizable appearance and behavior",
          "Mobile-responsive storefront experience",
          "Optional N8N AI workflow integration",
        ]}
        stack={["TypeScript", "Remix", "Prisma", "Shopify"]}
        github="https://github.com/aymenfoot/nexa-sales"
        mockup={<SalesMockup />}
      />

      {/* ACS flagship */}
      <Section id="acs" className="bg-[var(--bg-elev)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-dim)]">
            <span>04</span>
            <span className="w-8 h-px bg-[var(--border-strong)]" />
            <span className="uppercase tracking-widest">Flagship System</span>
          </div>
          <h2 className="display mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
            ACS — Agentic Commerce System
          </h2>
          <p className="mt-4 text-xl text-[var(--accent)] font-medium">Intelligent commerce, engineered for your store.</p>
          <p className="mt-6 max-w-3xl text-[var(--text-muted)] leading-relaxed">
            ACS is NEXA&apos;s flagship custom AI commerce implementation. It helps e-commerce businesses
            improve product discovery, customer experience, shopping assistance, and operational support.
          </p>
          <div className="mt-10">
            <AcsMockup />
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
            {[
              "Product Discovery",
              "Intelligent Recommendations",
              "Product Comparison",
              "Shopping Assistance",
              "Cart & Product Links",
              "Store Policy Assistance",
              "Post-Purchase Support",
              "Human Escalation",
            ].map((c) => (
              <div key={c} className="bg-[var(--bg-elev)] p-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mb-3" />
                <div className="text-sm font-medium text-[var(--text)]">{c}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="display text-2xl font-semibold">How ACS works</h3>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-mono text-[var(--text-muted)]">
                {["Customer Request", "Intent Understanding", "Verified Store Data", "Action / Recommendation", "Customer Response"].map((s, i, arr) => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]">{s}</span>
                    {i < arr.length - 1 && <span className="text-[var(--accent)]">→</span>}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="display text-2xl font-semibold">Custom implementation</h3>
              <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed">
                Every store is different. ACS is configured and adapted to the merchant&apos;s catalog,
                policies, workflows, and operational requirements. Final scope is determined after
                discussing the merchant&apos;s needs — not a rigid, identical package.
              </p>
            </div>
          </div>
          <p className="mt-8 text-xs text-[var(--text-dim)] max-w-3xl">
            Capabilities depend on store configuration, available data, and integrations.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--accent)] text-[var(--bg)] font-medium hover:opacity-90 transition"
            >
              Discuss Your ACS Implementation
            </a>
          </div>
        </div>
      </Section>

      <Capabilities />
      <Contact />
      <Footer />
    </main>
  );
}
