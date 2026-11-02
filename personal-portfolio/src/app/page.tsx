import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import LearningJourney from "@/components/LearningJourney";
import Section from "@/components/Section";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";
import SupportDemo from "@/components/demos/SupportDemo";
import OrderDemo from "@/components/demos/OrderDemo";
import SalesDemo from "@/components/demos/SalesDemo";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Bio />
      <LearningJourney />

      <Section id="projects" className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-dim)]">Selected projects</p>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">What I&apos;ve built.</h2>
        <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
          Here are some of the systems I&apos;ve built through hands-on learning, experimentation, and engineering.
        </p>
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
        stack={["Python", "FastAPI", "LangChain", "scikit-learn", "SQLite"]}
        github="https://github.com/aymenfoot/nexa-support"
        demo={<SupportDemo />}
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
        description="A conversational sales assistant widget that helps shoppers discover products, get recommendations, and move toward purchase."
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

      <Section id="closing">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Let&apos;s build something.</h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            Explore the repositories above, or reach out via GitHub.
          </p>
          <a
            href="https://github.com/aymenfoot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90 transition"
          >
            View GitHub Profile
          </a>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
