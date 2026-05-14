import { createFileRoute, Link } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";
import { PageTurnTransition } from "@/components/PageTurnTransition";
import { Annotation } from "@/components/Annotation";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${portfolio.personal.name} — The Paper Turn Chronicles` },
      { name: "description", content: "A profile in three columns." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTurnTransition pageKey="about">
      <main className="paper-grain page-curl relative min-h-screen px-6 pb-20 pt-12 md:px-20" style={{ background: "var(--paper)" }}>
        <div className="meta mb-4">
          <Link to="/" className="underline" data-cursor="back">HOME</Link> → ABOUT
        </div>
        <div className="editorial-rule flex items-center justify-between py-2">
          <span className="meta">A PROFILE IN THREE COLUMNS</span>
          <span className="meta">VOL. 1 · EXCLUSIVE</span>
        </div>

        <section className="relative py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="headline text-center"
            style={{ fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 0.95 }}
          >
            WHO IS {portfolio.personal.name.toUpperCase()}?
          </motion.h1>
          <p className="meta mt-4 text-center">A PROFILE — IN THREE COLUMNS</p>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative md:pr-6 md:column-rule md:pl-6">
              <Annotation rotate={-3} className="absolute -left-2 -top-6 hidden md:block">
                → based in Bangalore
              </Annotation>
              <p className="drop-cap">
                Pranjal has spent over three years navigating the intersection of brand strategy, financial communication, and business consulting. With a focused track record in asset and wealth management, she specializes in transforming complex financial concepts into accessible, engaging narratives.
              </p>
            </div>
            <div className="relative md:pr-6 md:column-rule md:pl-6">
              <p>
                Her expertise spans Go-to-Market (GTM) strategy, brand positioning, and business model design. Having worked closely with HNI and UHNI-focused platforms, she brings a rare blend of strategic thinking and design-led communication to equity-driven investment products.
              </p>
              <div className="pull-quote my-8">
                "Good design, like good communication, is about clarity and trust."
              </div>
              <Annotation rotate={2}>driven by impact</Annotation>
            </div>
            <div className="md:pl-6 md:column-rule">
              <p>
                She has driven impactful initiatives across diverse sectors including Wealth &amp; Asset Management, FinTech, Real Estate, Automotive, and Brand Consulting. Throughout her career, her consistent emphasis has been on translating complex financial data into clear, compelling business and investor communications.
              </p>
              <Annotation rotate={-2} className="mt-4">P.S. always seeking the next challenge</Annotation>
            </div>
          </div>
        </section>

        <div className="mt-20 text-center">
          <Link to="/" data-cursor="back" className="btn-ribbon">← RETURN TO CHRONICLES</Link>
        </div>
      </main>
    </PageTurnTransition>
  );
}
