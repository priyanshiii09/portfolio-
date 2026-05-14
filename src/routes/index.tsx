import { createFileRoute } from "@tanstack/react-router";
import { Hero, About, Skills, Experience, Projects, Contact } from "@/components/sections";
import { PageTurnTransition } from "@/components/PageTurnTransition";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Developer's Gazette — Alex Chen, Full-Stack Engineer" },
      { name: "description", content: "An editorial portfolio of software, dispatches and case studies by Alex Chen." },
      { property: "og:title", content: "The Developer's Gazette" },
      { property: "og:description", content: "An editorial portfolio of software by Alex Chen." },
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
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </PageTurnTransition>
  );
}
