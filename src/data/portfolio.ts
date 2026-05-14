export interface Project {
  id: string;
  slug: string;
  title: string;
  tag: string;
  type: string;
  role: string;
  status: string;
  date: string;
  description: string;
  lede: string;
  stack: string[];
  features: string[];
  challenge: string;
  solution: string;
  github: string;
  demo: string;
  imageSeeds: string[];
}

interface Portfolio {
  personal: {
    name: string; title: string; tagline: string; about: string;
    email: string; github: string; linkedin: string; location: string; established: number;
  };
  skills: { category: string; items: { name: string; level: number }[] }[];
  experience: { vol: string; company: string; role: string; dates: string; description: string; bullets: string[] }[];
  projects: Project[];
}

export const portfolio: Portfolio = {
  personal: {
    name: "Alex Chen",
    title: "Full-Stack Engineer",
    tagline: "Building reliable systems and delightful interfaces.",
    about:
      "Alex is a full-stack engineer with seven years of experience shipping production software for startups and Fortune 500 newsrooms alike. He believes in well-typed code, well-formed sentences, and a properly pulled espresso.",
    email: "alex@chen.dev",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    location: "Brooklyn, NY",
    established: 2018,
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React / Next.js", level: 5 },
        { name: "TypeScript", level: 5 },
        { name: "Tailwind CSS", level: 5 },
        { name: "Framer Motion", level: 4 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 5 },
        { name: "PostgreSQL", level: 4 },
        { name: "Go", level: 3 },
        { name: "GraphQL", level: 4 },
      ],
    },
    {
      category: "Tools & Ops",
      items: [
        { name: "Docker / K8s", level: 4 },
        { name: "AWS / Cloudflare", level: 4 },
        { name: "Figma", level: 3 },
        { name: "CI/CD", level: 5 },
      ],
    },
  ],
  experience: [
    {
      vol: "VOL. 04",
      company: "The Meridian Press",
      role: "Senior Staff Engineer",
      dates: "2023 — PRESENT",
      description:
        "Lead architect on a real-time editorial CMS serving 14 newsrooms across three continents.",
      bullets: [
        "Migrated a legacy PHP monolith to a typed Node + React stack, halving p95 latency.",
        "Designed an offline-first filing tool used by 200+ field reporters.",
        "Mentored a team of six and chaired the internal architecture council.",
      ],
    },
    {
      vol: "VOL. 03",
      company: "Atlas Cartographics",
      role: "Full-Stack Engineer",
      dates: "2020 — 2023",
      description:
        "Built data tooling for a geospatial analytics platform used by city planners and logistics firms.",
      bullets: [
        "Shipped a WebGL tile renderer that handled 12M points without dropping frames.",
        "Owned the public REST and GraphQL APIs end-to-end, including auth and billing.",
      ],
    },
    {
      vol: "VOL. 02",
      company: "Foundry & Co.",
      role: "Software Engineer",
      dates: "2018 — 2020",
      description:
        "Generalist on a small product team building B2B workflow software for legal teams.",
      bullets: [
        "Designed a document diffing engine still in production five years on.",
        "Wrote the company's first style guide for typed React.",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      slug: "chronicle-app",
      title: "The Chronicle App",
      tag: "EXCLUSIVE",
      type: "Web Application",
      role: "Lead Engineer",
      status: "Shipped, 2025",
      date: "MAY 2025",
      description:
        "A news aggregator that reads the day's web so you don't have to. Quietly meta.",
      lede:
        "Chronicle pulls thousands of feeds, deduplicates by story (not by URL), and presents the day in a lean, single-column reading view.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "OpenAI"],
      features: [
        "Story-level deduplication using semantic embeddings.",
        "Reader mode that strips chrome from any source on the fly.",
        "Personal archive with full-text search across everything you've read.",
        "Quiet hours and digest delivery by email.",
      ],
      challenge:
        "Most aggregators show the same wire story fifty times. We needed to cluster pieces by event without false positives across politically charged topics.",
      solution:
        "We embed headlines and ledes with a small open model, cluster via HDBSCAN, then run a cheap cross-encoder re-rank. Editors confirm clusters in a human-in-the-loop tool.",
      github: "https://github.com/alexchen/chronicle",
      demo: "https://chronicle.example.com",
      imageSeeds: ["chronicle1", "chronicle2"],
    },
    {
      id: "2",
      slug: "atlas-dashboard",
      title: "Atlas Dashboard",
      tag: "BREAKING",
      type: "Data Platform",
      role: "Founding Engineer",
      status: "Shipped, 2024",
      date: "NOV 2024",
      description:
        "A data visualization platform for civic data — built for clarity, not flash.",
      lede:
        "Atlas turns dense municipal datasets into legible, shareable maps and charts that reporters and citizens can actually use.",
      stack: ["React", "D3", "Mapbox GL", "Go", "ClickHouse"],
      features: [
        "Composable chart and map primitives with sane defaults.",
        "One-click embeddable visualizations with stable URLs.",
        "Differential privacy controls for sensitive datasets.",
        "Export to PNG, SVG, and print-ready PDF.",
      ],
      challenge:
        "Civic data arrives messy, in dozens of formats, and changes shape between releases.",
      solution:
        "A small DSL describes a dataset's shape, and the platform compiles that into ingestion, validation, and visualization scaffolding automatically.",
      github: "https://github.com/alexchen/atlas",
      demo: "https://atlas.example.com",
      imageSeeds: ["atlas1", "atlas2"],
    },
    {
      id: "3",
      slug: "meridian-api",
      title: "Meridian API",
      tag: "DISPATCH",
      type: "Backend Service",
      role: "Architect",
      status: "Shipped, 2024",
      date: "AUG 2024",
      description:
        "A REST API powering an editorial CMS used by 14 international newsrooms.",
      lede:
        "Meridian is the spine of a modern newsroom: filing, scheduling, syndication, and audit — all behind a tight, versioned HTTP surface.",
      stack: ["Node.js", "Fastify", "PostgreSQL", "Kafka", "OpenAPI"],
      features: [
        "Schema-first design with a generated TypeScript SDK.",
        "Append-only audit log for every editorial decision.",
        "Idempotent publishing with deterministic story IDs.",
        "Multi-region read replicas with sub-50ms p95 reads.",
      ],
      challenge:
        "Editorial systems are read-heavy but absolutely cannot lose a write — and reporters file from terrible hotel Wi-Fi.",
      solution:
        "Writes go through a small idempotency layer with client-supplied keys; reads are served from cached projections that are reconciled hourly against the source of truth.",
      github: "https://github.com/alexchen/meridian",
      demo: "https://meridian.example.com",
      imageSeeds: ["meridian1", "meridian2"],
    },
  ],
};


