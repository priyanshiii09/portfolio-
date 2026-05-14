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
  externalLink?: string;
}

interface Portfolio {
  personal: {
    name: string; title: string; tagline: string; about: string;
    email: string; github: string; linkedin: string; location: string; established: number;
  };
  skills: { category: string; items: { name: string; level: number }[] }[];
  experience: { vol: string; company: string; role: string; dates: string; description?: string; bullets: string[] }[];
  freelance: { vol: string; client: string; role: string; dates: string; description?: string; bullets: string[] }[];
  projects: Project[];
}

export const portfolio: Portfolio = {
  personal: {
    name: "Pranjal Bhadauria",
    title: "Designer",
    tagline: "Design for impact",
    about:
      "With over three years of experience spanning brand strategy, financial communication, and business consulting, I specialize in the asset and wealth management sectors. My expertise encompasses Go-to-Market strategy, marketing transformation, brand positioning, and business model design. Having collaborated closely with HNI and UHNI-focused platforms, I bring a rare blend of strategic thinking and design-led communication to equity-driven investment products. I have driven impactful initiatives across diverse industries—including Wealth & Asset Management, FinTech, Real Estate, Automotive, and Brand Consulting—with a steadfast commitment to translating complex financial narratives into clear, compelling investor communications.",
    email: "pranjallbhadauriaa@gmail.com",
    github: "https://github.com/alexchen",
    linkedin: "https://www.linkedin.com/in/pranjalb2901/",
    location: "Bangalore, India",
    established: 2018,
  },


  experience: [
    {
      vol: "VOL. 04",
      company: "True Beacon",
      role: "Creative Lead / Marketing Associate / PR Intern",
      dates: "August 2024 - January 2026",
      description: "",
      bullets: [
        "Led end-to-end creative execution across digital, social, brand, presentation, and integrated campaign assets.",
        "Owned social media strategy and management, driving periodic performance analysis and growth-led content decisions.",
        "Established and scaled the brand’s visual language, tone, and design systems across all touchpoints.",
        "Managed the brand’s design, communication, and marketing execution end-to-end in close alignment with business goals.",
        "Iterated and optimized the website to improve traffic, engagement, and content discovery.",
        "Launched the TB Observatory vertical to strengthen industry relevance and drive sustained website viewership.",
        "Co-led dynamic UI design for Mr. Nikhil Kamath's website, reflecting brand identity and expertise.",
        "Contributed to brand identity for the 'WTF is?' podcast, driving successful launch.",
        "Strategically planned the 'WTF is?' first podcast launch achieving 100K views in 24 hours.",
        "Achieved an engagement increase on social media via creative data visual content.",
        "Conducted comprehensive competitive analysis for innovative PR and Brand Marketing strategies.",
        "Supported media outreach, streamlining tasks, and increasing lead generation.",
        "Collaborated across teams to develop the EFQ (Equity Factor Quant) pitch deck for TB Wealth Product.",
      ],
    },
    {
      vol: "VOL. 03",
      company: "Royal Enfield",
      role: "Design & Market Research Intern",
      dates: "Feb 2024 - Jul 2024",
      description: "Served dual roles in Primary Market Research and the Global Brand and Marketing Department.",
      bullets: [
        "Led in-depth interviews with 50 potential customers, uncovering critical reasons for Classic 350 rejection.",
        "Collaborated in a meticulous analysis of past rejections, identifying recurring themes.",
        "Drove impactful contributions to product launch by executing engaging product newsletters: Classic 350 and Meteor 350.",
        "Conceptualized captivating marketing collaterals for the bikers' community for social media marketing.",
        "Royal Enfield - The Timeless Classic UI Design."
      ],
    },
    {
      vol: "VOL. 02",
      company: "Finforall by Jupiter",
      role: "UI and Graphic Designer",
      dates: "June 2020 - September 2020",
      description: "",
      bullets: [
        "Managed a team of 2 designers, achieving 30k followers in 6 months for social media channels through content carousels.",
        "Designed website interface, improving user experience by centralizing company resources for easy access.",
        "Illustrated Personal Finance content for easy understanding and adaptation of complex terminologies and concepts.",
      ],
    },


  ],
  freelance: [
    {
      vol: "VOL. 02",
      client: "TORO Investment Managers, Savvy Infrastructure Bengaluru",
      role: "Client Communication Design",
      dates: "February 2024 – July 2024",
      description: "",
      bullets: [
        "Conducted market, category, and peer benchmarking research to shape narrative, structure, and messaging for pitch decks.",
        "Translated complex financial and real estate data into clear information design and data visualisations, improving clarity and decision-readiness for investors.",
        "Delivered multiple high-stakes pitch and presentation assets, aligned with leadership and fundraising objectives.",
        "Designed brand guidelines and the initial website for the brand.",
      ],
    },
    {
      vol: "VOL. 01",
      client: "ArthAlpha Investment Management Bengaluru, Karnataka",
      role: "Investors’ Design",
      dates: "December 2023 – February 2024",
      description: "",
      bullets: [
        "Designed visual presentation systems to articulate the brand narrative and clearly communicate USPs of the product Brahmastra.",
        "Translated abstract product and business ideas into structured, insight-led visual stories which further contributed in raising first INR 100 Crores for the company.",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      slug: "royal-enfield-newsletter",
      title: "Royal Enfield",
      tag: "FEATURED",
      type: "Newsletter Design",
      role: "Design Intern",
      status: "Published",
      date: "VOL. 9",
      description:
        "The Timeless Classic UI Design and marketing collaterals for the bikers' community.",
      lede:
        "Drove impactful contributions to the product launch by executing engaging product newsletters for Classic 350.",
      stack: ["UI Design", "Content Strategy", "Figma", "Marketing"],
      features: [
        "Captivating marketing collaterals for social media.",
        "Clear information design for the bikers' community.",
        "Interactive newsletter layout.",
      ],
      challenge:
        "Communicating the legacy of Royal Enfield in a modern, engaging format.",
      solution:
        "Designed 'The Timeless Classic' UI, combining vintage aesthetics with clean, modern typography.",
      github: "",
      demo: "",
      imageSeeds: ["royalenfield1", "royalenfield2"],
      externalLink: "https://www.royalenfield.com/in/en/newsletter/",
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


