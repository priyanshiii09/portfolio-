import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { portfolio, type Project } from "@/data/portfolio";
import { PageTurnTransition } from "@/components/PageTurnTransition";
import { Stamp } from "@/components/Stamp";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = portfolio.projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — The Developer's Gazette` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="p-20 text-center">
      <h1 className="headline">404 — DISPATCH NOT FOUND</h1>
      <Link to="/" className="meta mt-4 inline-block underline">← RETURN TO GAZETTE</Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  return (
    <PageTurnTransition pageKey={`p-${project.slug}`}>
      <main className="paper-grain page-curl relative min-h-screen px-6 pb-20 pt-12 md:px-20">
        <div className="meta mb-4">
          <Link to="/" className="underline" data-cursor="back">HOME</Link> → <Link to="/" hash="projects" className="underline">DISPATCHES</Link> → {project.title.toUpperCase()}
        </div>
        <div className="editorial-rule flex items-center justify-between py-2">
          <span className="meta">{project.tag} · {project.date}</span>
          <span className="meta">VOL. 1 · CASE STUDY</span>
        </div>

        <div className="relative mt-8">
          <div className="absolute -top-2 right-0">
            <Stamp rotate={8}>Case Study</Stamp>
          </div>
          <h1 className="headline" style={{ fontSize: "clamp(48px, 8vw, 110px)", lineHeight: 0.95 }}>
            {project.title}
          </h1>
          <p className="mt-4" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 24 }}>
            {project.description}
          </p>
          <div className="meta mt-6 flex flex-wrap gap-x-8 gap-y-2 border-y py-3" style={{ borderColor: "var(--ink-faded)" }}>
            <span>DATE — {project.date}</span>
            <span>TYPE — {project.type}</span>
            <span>ROLE — {project.role}</span>
            <span>STATUS — {project.status}</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <article className="md:col-span-8">
            <p className="drop-cap" style={{ fontSize: 20 }}>{project.lede}</p>

            <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {project.imageSeeds.map((seed, i) => (
                <figure key={seed}>
                  <img
                    loading="lazy"
                    src={`https://picsum.photos/seed/${seed}/800/500`}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full border-2"
                    style={{ borderColor: "var(--ink)", filter: "sepia(0.15) contrast(1.05)" }}
                  />
                  <figcaption className="meta mt-2 italic">
                    FIG. {i + 1} — {project.title} interface, captured {project.date}.
                  </figcaption>
                </figure>
              ))}
            </div>

            <h2 className="editorial-rule headline py-3" style={{ fontSize: 32 }}>KEY FEATURES</h2>
            <ol className="mt-6 space-y-4">
              {project.features.map((f, i) => (
                <li key={f} className="flex gap-4">
                  <span className="headline" style={{ fontSize: 48, lineHeight: 1, color: "var(--red-stamp)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-2">{f}</span>
                </li>
              ))}
            </ol>

            <h2 className="editorial-rule headline mt-12 py-3" style={{ fontSize: 32 }}>CHALLENGE & SOLUTION</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <div className="meta">THE CHALLENGE</div>
                <p className="mt-2">{project.challenge}</p>
              </div>
              <div className="md:pl-6 md:column-rule">
                <div className="meta">THE SOLUTION</div>
                <p className="mt-2">{project.solution}</p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href={project.github} data-cursor="open" className="btn-ribbon">VIEW SOURCE →</a>
              <a href={project.demo} data-cursor="open" className="btn-ribbon" style={{ background: "var(--red-stamp)" }}>READ THE LIVE EDITION →</a>
            </div>
          </article>

          <aside className="md:col-span-4">
            <div className="border-2 p-5" style={{ borderColor: "var(--ink)", background: "var(--paper-dark)" }}>
              <div className="editorial-rule headline py-2 text-center" style={{ fontSize: 20 }}>
                TOOLS OF THE TRADE
              </div>
              <ul className="mt-4 space-y-2">
                {project.stack.map((t) => (
                  <li key={t} className="meta border-b pb-1" style={{ borderColor: "var(--ink-faded)" }}>
                    — {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-20 text-center">
          <Link to="/" data-cursor="back" className="btn-ribbon">← RETURN TO GAZETTE</Link>
        </div>
      </main>
    </PageTurnTransition>
  );
}
