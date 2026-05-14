import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Stamp } from "@/components/Stamp";
import { Annotation } from "@/components/Annotation";

const today = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
}).toUpperCase();

export function Hero() {
  const p = portfolio.personal;
  return (
    <section className="relative px-6 pt-12 md:px-16 md:pt-8">
      {/* Masthead */}
      <header className="text-center">
        <div className="meta">EST. {p.established} · VOL. 1 · NO. 138 · ONE PENNY</div>
        <h1 className="headline mt-2 flex items-center justify-center gap-4 md:gap-6 flex-wrap" style={{ fontSize: "clamp(48px, 9vw, 100px)", lineHeight: 0.95 }}>
          PRANJAL BHADAURIA
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
            alt="Pranjal Bhadauria"
            className="w-[0.8em] h-[0.8em] rounded-full object-cover border-[0.05em]"
            style={{ borderColor: "var(--ink)", filter: "grayscale(100%) contrast(1.2)" }}

          />
        </h1>
        <div className="editorial-rule mt-4 flex items-center justify-between py-2">
          <span className="meta">{today}</span>
          <span className="meta italic">"All the code that's fit to ship"</span>
          <span className="meta">EST. READERSHIP — HIRING MANAGERS</span>
        </div>
      </header>

      {/* Hero columns */}
      <div className="relative mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-7 md:pr-8" style={{ borderRight: "1px solid var(--ink-faded)" }}>
          <div className="meta mb-3">EXCLUSIVE — PAGE ONE</div>
          <h2 className="headline" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}>
            DESIGNER<br />
            <em style={{ fontWeight: 400 }}></em>
          </h2>
          <p className="drop-cap mt-6">
            {p.tagline} For seven years, {p.name.split(" ")[0]} has been quietly responsible
            for the kind of software that simply works — the sort that ships on time, scales
            without drama, and is a pleasure to inherit. He is, our editors are pleased to report,
            available for new commissions.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#projects" data-cursor="read" className="btn-ribbon">READ MORE ↓</a>
            <a href="#contact" className="meta underline" data-cursor="write">CONTACT THE EDITOR</a>
          </div>
        </div>

        <aside className="relative md:col-span-5">
          <div className="absolute -top-4 right-0 z-10">
            <Stamp rotate={-12}>Available for Hire</Stamp>
          </div>
          <div className="border-2 p-6" style={{ borderColor: "var(--ink)" }}>
            <div className="meta border-b pb-2" style={{ borderColor: "var(--ink-faded)" }}>
              FEATURE — ABOUT THE AUTHOR
            </div>
            <h3 className="headline mt-4" style={{ fontSize: 28 }}>{p.name}</h3>
            <p className="meta mt-1">{p.title.toUpperCase()} · {p.location.toUpperCase()}</p>
            <div className="halftone my-4 h-32 w-full" style={{ filter: "contrast(1.2)" }} />
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>{p.about}</p>
            <Annotation rotate={2} className="mt-3">— still answers his own emails</Annotation>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-20 md:px-16" style={{ background: "var(--paper-dark)" }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="editorial-rule headline py-3 text-center"
      >
        WHO IS {portfolio.personal.name.toUpperCase()}?
      </motion.h2>
      <p className="meta mt-2 text-center">A PROFILE — IN THREE COLUMNS</p>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="relative md:pr-6 md:column-rule md:pl-6">
          <Annotation rotate={-3} className="absolute -left-2 -top-6 hidden md:block">
            → grew up in Vancouver
          </Annotation>
          <p className="drop-cap">
            Alex began writing software in the back of a high-school physics
            classroom and has not, in any meaningful way, stopped since. He studied
            computer science at the University of British Columbia, then moved east
            looking for cold winters and harder problems.
          </p>
        </div>
        <div className="relative md:pr-6 md:column-rule md:pl-6">
          <p>
            He is a generalist by temperament: equally happy debugging a flaky
            Postgres replica or arguing about the visual weight of a button. He
            believes most software bugs are, eventually, communication bugs in
            disguise.
          </p>
          <div className="pull-quote my-8">
            "Good code, like good prose, is mostly a matter of cutting things out."
          </div>
          <Annotation rotate={2}>coffee, four cups, black</Annotation>
        </div>
        <div className="md:pl-6 md:column-rule">
          <p>
            Outside of work, he reads more than is strictly reasonable, runs
            slowly along the East River, and maintains a small open-source library
            for laying out musical scores in the browser. He is reachable by
            email, telegram, and — if absolutely necessary — telephone.
          </p>
          <Annotation rotate={-2} className="mt-4">P.S. dog person</Annotation>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-20 md:px-16">
      <h2 className="editorial-rule headline py-3 text-center">THE PROFESSIONAL RECORD</h2>
      <p className="meta mt-2 text-center">A CHRONOLOGICAL DISPATCH OF EMPLOYMENT</p>

      <div className="mx-auto mt-10 max-w-4xl space-y-12">
        {portfolio.experience.map((job, i) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="border-b pb-10"
            style={{ borderColor: "var(--ink-faded)" }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="meta">{job.vol}</span>
              <span className="meta">{job.dates}</span>
            </div>
            <h3 className="headline mt-1" style={{ fontSize: 38, lineHeight: 1.05 }}>
              {job.company}
            </h3>
            <p className="meta mt-1">{job.role.toUpperCase()}</p>
            {job.description && (
              <p className="mt-4" style={{ fontWeight: 600 }}>
                {job.description}
              </p>
            )}
            <ul className="mt-4 space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="pl-6" style={{ textIndent: "-1.5rem" }}>
                  <span style={{ color: "var(--red-stamp)", marginRight: 8 }}>—</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-20 md:px-16" style={{ background: "var(--paper-dark)" }}>
      <h2 className="editorial-rule headline py-3 text-center">FEATURED DISPATCHES</h2>
      <p className="meta mt-2 text-center">SELECTED WORKS — FRESH FROM THE NEWSROOM</p>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {portfolio.projects.map((proj, i) => (
          <motion.a
            key={proj.id}
            href={`/projects/${proj.slug}`}
            data-cursor="open"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="page-curl relative block overflow-hidden border-2 p-6 pb-10"
            style={{ borderColor: "var(--ink)", background: "var(--paper)" }}
          >
            <div className="absolute right-3 top-3 z-10">
              <Stamp rotate={6}>{proj.tag}</Stamp>
            </div>
            <div className="meta">{proj.date} · {proj.type.toUpperCase()}</div>
            <h3 className="headline mt-2" style={{ fontSize: 32, lineHeight: 1.05 }}>
              {proj.title}
            </h3>
            <p className="mt-3" style={{ fontStyle: "italic" }}>{proj.description}</p>
            <p className="mt-4">{proj.lede}</p>
            <p className="meta mt-6">
              FILED UNDER: {proj.stack.join(" · ")}
            </p>
            <div className="meta mt-4 underline">CONTINUED INSIDE →</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const p = portfolio.personal;
  return (
    <section id="contact" className="relative px-6 py-20 md:px-16">
      <h2 className="editorial-rule headline py-3 text-center">LETTERS TO THE EDITOR</h2>
      <p className="meta mt-2 text-center">CORRESPONDENCE WELCOME — REPLIES GUARANTEED</p>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        <form
          onSubmit={(e) => { e.preventDefault(); alert("Letter received. We will write back."); }}
          className="border-2 p-8"
          style={{
            borderColor: "var(--ink)",
            background:
              "repeating-linear-gradient(transparent, transparent 31px, var(--ink-light) 31px, var(--ink-light) 32px)",
          }}
        >
          <p className="hand mb-4" style={{ fontSize: 22 }}>Dear Editor,</p>
          <input required placeholder="Your name" className="block w-full bg-transparent py-1 outline-none" style={{ fontFamily: "var(--font-hand)", fontSize: 18 }} />
          <input required type="email" placeholder="Your address" className="mt-6 block w-full bg-transparent py-1 outline-none" style={{ fontFamily: "var(--font-hand)", fontSize: 18 }} />
          <textarea required rows={5} placeholder="Your dispatch..." className="mt-6 block w-full resize-none bg-transparent py-1 outline-none" style={{ fontFamily: "var(--font-hand)", fontSize: 18 }} />
          <button type="submit" data-cursor="send" className="btn-ribbon mt-6">POST LETTER</button>
        </form>

        <div className="md:pl-6 md:column-rule">
          <h3 className="headline" style={{ fontSize: 28 }}>Direct Correspondence</h3>
          <p className="mt-4">
            For commissions, consultations, or simply to argue about
            semicolons, the editor may be reached directly through any of the
            channels below.
          </p>
          <ul className="mt-6 space-y-3">
            <li><span className="meta">EMAIL —</span> <a className="underline" data-cursor="write" href={`mailto:${p.email}`}>{p.email}</a></li>
            <li><span className="meta">GITHUB —</span> <a className="underline" data-cursor="open" href={p.github}>{p.github.replace("https://", "")}</a></li>
            <li><span className="meta">LINKEDIN —</span> <a className="underline" data-cursor="open" href={p.linkedin}>{p.linkedin.replace("https://", "")}</a></li>
          </ul>
          <Annotation rotate={-2} className="mt-8">replies within 24 hours, usually sooner</Annotation>
        </div>
      </div>

      <footer className="mt-20 border-t pt-6 text-center" style={{ borderColor: "var(--ink)" }}>
        <p className="meta">— FIN —</p>
        <p className="meta mt-2">© {new Date().getFullYear()} THE DEVELOPER'S GAZETTE · ALL RIGHTS RESERVED · PRINTED WITH CARE</p>
      </footer>
    </section>
  );
}
