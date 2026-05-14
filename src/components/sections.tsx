import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
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
        </h1>
        <div className="editorial-rule mt-4 flex items-center justify-between py-2">
          <span className="meta">{today}</span>
          <span className="meta italic" style={{ textTransform: "none" }}>"Where strategy meets elegant financial storytelling."</span>
          <span className="meta">EST. READERSHIP — HIRING MANAGERS</span>
        </div>
      </header>

      {/* Hero columns */}
      <div className="relative mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-7 md:pr-8" style={{ borderRight: "1px solid var(--ink-faded)" }}>
          <div className="meta mb-3">EXCLUSIVE — PAGE ONE</div>
          <h2 className="headline" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}>
            BUSINESS SERVICE DESIGNER<br />
            <em style={{ fontWeight: 400 }}></em>
          </h2>
          <p className="drop-cap mt-6">
            {p.tagline}. For over three years, {p.name.split(" ")[0]} has been quietly responsible
            for the kind of design that simply works — the sort that clarifies complex financial narratives,
            positions brands with authority, and builds investor trust. She is, our editors are pleased
            to report, available for new commissions.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#projects" data-cursor="read" className="btn-ribbon">READ MORE ↓</a>
            <a href="#contact" className="meta underline" data-cursor="write">CONTACT THE EDITOR</a>
          </div>
        </div>

        <aside className="relative md:col-span-5">
          <div className="border-2 p-6" style={{ borderColor: "var(--ink)" }}>
            <div className="meta border-b pb-2" style={{ borderColor: "var(--ink-faded)" }}>
              FEATURE — ABOUT THE AUTHOR
            </div>
            <h3 className="headline mt-4" style={{ fontSize: 28 }}>{p.name}</h3>
            <p className="meta mt-1">{p.title.toUpperCase()} · {p.location.toUpperCase()}</p>
            <div className="halftone my-4 h-32 w-full" style={{ filter: "contrast(1.2)" }} />
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>{p.about}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-20 md:px-16" style={{ background: "var(--paper-dark)" }}>
      <div className="mx-auto max-w-3xl text-center">
        <Link to="/about" data-cursor="open" className="block page-curl border-2 p-10 hover:-translate-y-1 transition-transform" style={{ borderColor: "var(--ink)", background: "var(--paper)" }}>
          <h2 className="headline" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
            WHO IS {portfolio.personal.name.toUpperCase()}?
          </h2>
          <p className="mt-6 italic" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
            Read the exclusive profile on her three years spanning brand strategy, financial communication, and business consulting.
          </p>
          <div className="meta mt-8 underline">READ THE FULL PROFILE →</div>
        </Link>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-20 md:px-16">
      <h2 className="editorial-rule headline py-3 text-center">WORK EXPERIENCE</h2>
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

export function Freelance() {
  return (
    <section id="freelance" className="relative px-6 py-20 md:px-16" style={{ background: "var(--paper-dark)" }}>
      <h2 className="editorial-rule headline py-3 text-center">FREELANCE WORKS</h2>
      <p className="meta mt-2 text-center">FREELANCE DISPATCHES &amp; CONSULTATIONS</p>

      <div className="mx-auto mt-10 max-w-4xl space-y-12">
        {portfolio.freelance.map((job, i) => (
          <motion.article
            key={job.client}
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
              {job.client}
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
    <section id="projects" className="relative px-6 py-20 md:px-16">
      <h2 className="editorial-rule headline py-3 text-center">MY PROJECTS</h2>
      <p className="meta mt-2 text-center">SELECTED WORKS — FRESH FROM THE NEWSROOM</p>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {portfolio.projects.map((proj, i) => {
          const isExternal = !!proj.externalLink;
          return (
            <motion.a
              key={proj.id}
              href={proj.externalLink || `/projects/${proj.slug}`}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
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
          );
        })}
      </div>
    </section>
  );
}

export function Contact() {
  const p = portfolio.personal;
  return (
    <section id="contact" className="relative px-6 py-20 md:px-16" style={{ background: "var(--paper-dark)" }}>
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
            <li><span className="meta">LINKEDIN —</span> <a className="underline" data-cursor="open" href={p.linkedin}>{p.linkedin.replace("https://", "")}</a></li>
          </ul>
          <Annotation rotate={-2} className="mt-8">replies within 24 hours, usually sooner</Annotation>
        </div>
      </div>

      <footer className="mt-20 border-t pt-6 text-center" style={{ borderColor: "var(--ink)" }}>
        <p className="meta">— FIN —</p>
        <p className="meta mt-2">© {new Date().getFullYear()} THE PAPER TURN CHRONICLES · ALL RIGHTS RESERVED · PRINTED WITH CARE</p>
      </footer>
    </section>
  );
}
