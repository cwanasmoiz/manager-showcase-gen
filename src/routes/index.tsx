import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Twitter, ArrowUpRight, Mail, Cloud, LayoutGrid, LineChart, Compass } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { value: "10+", label: "Years in tech", sub: "Engineer to Staff PM" },
  { value: "$350M", label: "Acquisition", sub: "Cloudways → DigitalOcean" },
  { value: "80K+", label: "Customers served", sub: "Managed cloud hosting" },
  { value: "5", label: "Cloud providers", sub: "AWS, GCP, DO, Linode, Vultr" },
];

const brands = [
  "DigitalOcean", "Cloudways", "AWS", "Google Cloud", "Linode", "Vultr", "WordPress", "Magento",
];

const skills = [
  {
    icon: Cloud,
    title: "Cloud & Hosting Platforms",
    body: "Managed cloud infrastructure at scale — server orchestration, multi-cloud provisioning, and the operator experience that keeps agencies and SMBs shipping.",
  },
  {
    icon: LayoutGrid,
    title: "0→1 Product Building",
    body: "From discovery to GA. Framing fuzzy problems, prototyping with engineering, and shipping platform features that customers actually adopt.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    body: "Structured, analytical approach rooted in systems thinking. Instrumenting funnels, running experiments, and letting the data pick the roadmap.",
  },
  {
    icon: Compass,
    title: "Cross-Functional Leadership",
    body: "Partnering across engineering, design, marketing, and support to align technical and business teams around user-centric, high-impact outcomes.",
  },
];

const experience = [
  {
    company: "DigitalOcean · Cloudways",
    role: "Staff Product Manager",
    period: "2022 — present",
    body: "Leading product for Cloudways after the $350M acquisition by DigitalOcean. Shipped Cloudways Site Manager to GA for agencies, and driving the platform roadmap for managed cloud hosting.",
  },
  {
    company: "Cloudways",
    role: "Senior Product Manager",
    period: "2020 — 2022",
    body: "Owned core platform surfaces across server management, application deployment, and the customer console. Contributed to the growth and platform maturity that led to the DigitalOcean acquisition.",
  },
  {
    company: "Cloudways",
    role: "Product Manager",
    period: "2018 — 2020",
    body: "Transitioned from engineering into product. Shipped features across multi-cloud provisioning (AWS, GCP, DO, Linode, Vultr) and the WordPress / Magento hosting stack.",
  },
  {
    company: "Cloudways · Gaditek",
    role: "Software / Systems Engineer",
    period: "2015 — 2018",
    body: "Started in engineering with a focus on systems thinking and analytical problem-solving. Built the foundation for a decade of technical, data-driven product work.",
  },
];

const writing = [
  { title: "Cloudways Site Manager is now Generally Available for agencies", date: "Jun 2026" },
  { title: "Caching mechanisms that actually speed up your site", date: "Jan 2023" },
  { title: "How to install WordPress into a subdirectory on Cloudways", date: "Sep 2020" },
  { title: "How to save your online business during the COVID-19 outbreak", date: "Jul 2020" },
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
          <span className="text-sm font-semibold tracking-tight">Anas Moiz Hashmi</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#writing" className="hover:text-foreground transition-colors">Writing</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="https://www.linkedin.com/in/anasmoiz/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
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
            Staff Product Manager · Cloudways @ DigitalOcean · Karachi, PK
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Engineer-turned-PM shipping{" "}
            <span className="text-highlight">managed cloud</span> at scale.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            I use a structured, data-driven approach to product management —
            turning systems-level thinking into user-centric, high-impact
            products for developers, agencies, and SMBs.
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
              alt="Anas Moiz Hashmi headshot"
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
          Built on and alongside
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
            A decade at the intersection of engineering and product — put to
            work on managed cloud, hosting platforms, and the operator
            experience.
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
            10 years and 8 months across engineering and product at Cloudways
            and DigitalOcean.
          </p>
        </div>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-background">
          {experience.map((e) => (
            <div key={e.role + e.period} className="grid grid-cols-1 gap-4 p-8 md:grid-cols-[200px_1fr]">
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Writing & posts</h2>
            <p className="mt-3 text-muted-foreground">Notes on cloud, hosting, and shipping product.</p>
          </div>
          <a href="https://thecloudkeeper.io/author/anasmoiz/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-highlight">
            View all <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="mt-10 divide-y divide-border border-t border-border">
          {writing.map((w) => (
            <li key={w.title}>
              <a
                href="https://thecloudkeeper.io/author/anasmoiz/"
                target="_blank"
                rel="noreferrer"
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
          Let's talk product & cloud.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Advising, collaboration, or a good conversation about managed cloud,
          hosting platforms, and product craft — always open to a message.
        </p>
        <a
          href="https://www.linkedin.com/in/anasmoiz/"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          Reach out on LinkedIn
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
      <div>© {new Date().getFullYear()} Anas Moiz Hashmi. Built with care.</div>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/anasmoiz/" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
        <a href="https://thecloudkeeper.io/author/anasmoiz/" target="_blank" rel="noreferrer" className="hover:text-foreground">Blog</a>
        <a href="#contact" className="hover:text-foreground">Contact</a>
      </div>
    </footer>
  );
}
