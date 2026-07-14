import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Twitter, ArrowUpRight, Mail, Sparkles, LayoutGrid, LineChart, Compass } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { value: "3M+", label: "Users reached", sub: "Across shipped products" },
  { value: "62%", label: "Activation lift", sub: "Onboarding redesign, 2024" },
  { value: "10+", label: "Years in product", sub: "SaaS, AI, dev tools" },
  { value: "9", label: "Products led", sub: "0→1 and scale" },
];

const brands = [
  "Linear", "Notion", "Stripe", "Vercel", "Figma", "Intercom", "Zapier", "Datadog",
];

const skills = [
  {
    icon: Sparkles,
    title: "AI Product Strategy",
    body: "Turning frontier models into everyday product surfaces — agents, copilots, and RAG systems that ship, measure, and improve.",
  },
  {
    icon: LayoutGrid,
    title: "0→1 & Platform",
    body: "Taking fuzzy problems to launched products. From discovery and prototyping through pricing, packaging, and GTM.",
  },
  {
    icon: LineChart,
    title: "Growth & Activation",
    body: "Instrumenting the funnel, running the experiments, and shipping the mechanics that move retention and revenue.",
  },
  {
    icon: Compass,
    title: "Product Leadership",
    body: "Building small, senior teams. Coaching PMs, aligning cross-functional partners, writing the strategy people can act on.",
  },
];

const experience = [
  {
    company: "Northwind AI",
    role: "Principal Product Manager",
    period: "2024 — present",
    body: "Leading the agent platform used by 40+ enterprise teams. Shipped the workflow builder, model routing, and evals suite; drove ARR from $4M to $12M in year one.",
  },
  {
    company: "Loop",
    role: "Group Product Manager",
    period: "2021 — 2024",
    body: "Ran the collaboration surface at a Series C SaaS company. Rebuilt onboarding for a 62% activation lift and launched the Loop API, now powering 200+ integrations.",
  },
  {
    company: "Meridian",
    role: "Senior Product Manager",
    period: "2018 — 2021",
    body: "Owned the payments and billing platform. Migrated 1.4M merchants to a new pricing engine with zero downtime and shipped self-serve upgrades that lifted MRR 28%.",
  },
  {
    company: "Fieldnote",
    role: "Founding PM",
    period: "2015 — 2018",
    body: "Employee #4 at a mobile-first SaaS for field teams. Built the roadmap through Series A, hired the first three PMs, and grew paid seats past 50,000.",
  },
];

const writing = [
  { title: "Designing evals your team will actually run", date: "Jun 2026" },
  { title: "The unreasonable effectiveness of a boring roadmap", date: "Mar 2026" },
  { title: "Pricing AI products when the cost floor keeps moving", date: "Dec 2025" },
  { title: "Notes on hiring senior PMs into small teams", date: "Aug 2025" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <StatsBar />
      <Brands />
      <Skills />
      <Experience />
      <Writing />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background">
            A
          </span>
          <span className="text-sm font-semibold tracking-tight">Alex Chen</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#writing" className="hover:text-foreground transition-colors">Writing</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            Product leader with 10+ years across SaaS, AI, and platform
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Building the next wave of{" "}
            <span className="text-highlight">AI-native</span> software.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            I ship agents, platforms, and developer tools that turn model
            capability into product value. Principal Product Manager at
            Northwind AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              About me
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-highlight/30 to-transparent blur-2xl" aria-hidden />
          <div className="relative aspect-square w-64 overflow-hidden rounded-full border border-border bg-secondary sm:w-80 lg:w-[380px]">
            <img
              src={headshot}
              alt="Alex Chen headshot"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section id="about" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-extrabold tracking-tight sm:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm font-medium">{s.label}</div>
            <div className="text-sm text-muted-foreground">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Brands() {
  const doubled = [...brands, ...brands];
  return (
    <section className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Shipped alongside teams at
        </div>
        <div className="mt-6 overflow-hidden">
          <div className="marquee flex w-max gap-16 whitespace-nowrap">
            {doubled.map((b, i) => (
              <span key={i} className="text-2xl font-bold tracking-tight text-muted-foreground/70">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What I do</h2>
          <p className="mt-3 text-muted-foreground">
            A decade of pattern recognition across AI, SaaS, and platform
            products — put to work on your hardest problem.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.title} className="bg-background p-8">
              <s.icon className="h-6 w-6 text-highlight" />
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
          <p className="mt-3 text-muted-foreground">
            From founding-team PM to principal at an AI platform.
          </p>
        </div>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-background">
          {experience.map((e) => (
            <div key={e.company} className="grid grid-cols-1 gap-4 p-8 md:grid-cols-[200px_1fr]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {e.period}
                </div>
                <div className="mt-2 text-lg font-bold">{e.company}</div>
              </div>
              <div>
                <div className="text-sm font-medium">{e.role}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest writing</h2>
            <p className="mt-3 text-muted-foreground">Notes on product, AI, and building teams.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-highlight">
            View all <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="mt-10 divide-y divide-border border-t border-border">
          {writing.map((w) => (
            <li key={w.title}>
              <a
                href="#"
                className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-highlight"
              >
                <span className="text-lg font-medium">{w.title}</span>
                <span className="flex items-center gap-4 text-sm text-muted-foreground">
                  {w.date}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Got a hard product problem?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Advising, fractional work, or just a good conversation about AI and
          product. I read every message.
        </p>
        <a
          href="mailto:hello@alexchen.co"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          hello@alexchen.co
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
      <div>© {new Date().getFullYear()} Alex Chen. Built with care.</div>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:text-foreground">LinkedIn</a>
        <a href="#" className="hover:text-foreground">Twitter</a>
        <a href="#contact" className="hover:text-foreground">Email</a>
      </div>
    </footer>
  );
}
