import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import ProjectGrid from "@/components/ProjectGrid";
import { delay } from "@/lib/delay";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow reveal">Portfolio</span>
          <h1 className="reveal" style={delay(1)}>
            Things I’ve <span className="grad">built</span>
          </h1>
          <p className="reveal" style={delay(2)}>
            Web3 products, production systems, data dashboards, and frontend work — ordered from the
            most complex project first. Click any card to open it.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: "20px" }}>
        <div className="container">
          <ProjectGrid filterable />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
