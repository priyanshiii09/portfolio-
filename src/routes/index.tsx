import { createFileRoute } from "@tanstack/react-router";
import { Hero, About, Experience, Freelance, Projects, Contact } from "@/components/sections";
import { PageTurnTransition } from "@/components/PageTurnTransition";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Paper Turn Chronicles — Pranjal Bhadauria, Designer" },
      { name: "description", content: "An editorial portfolio of design, strategy and financial storytelling by Pranjal Bhadauria." },
      { property: "og:title", content: "The Paper Turn Chronicles" },
      { property: "og:description", content: "An editorial portfolio by Pranjal Bhadauria." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageTurnTransition pageKey="home">
      <main className="paper-grain page-curl relative min-h-screen pb-20">
        <Hero />
        <About />
        <Experience />
        <Freelance />
        <Projects />
        <Contact />
      </main>
    </PageTurnTransition>
  );
}
