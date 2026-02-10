import Link from "next/link";

const workExperience = [
  {
    company: "Novoflow (YC X25)",
    role: "Founding Engineer",
    period: "Oct 2025 — Present",
    description: "Building AI employees for Healthcare.",
  },
  {
    company: "HelpUsDefend",
    role: "Full Stack Engineer",
    period: "May 2025 — Sep 2025",
    description:
      "Built and maintained 65square, a social networking application focused on security and privacy. Improved test coverage by 30% and reduced issue resolution time by 25% via automated CI/CD pipelines.",
  },
  {
    company: "Shopify",
    role: "Fullstack/Mobile Developer",
    period: "May 2024 — Apr 2025",
    description:
      "Enhanced checkout flow in the mobile app, reducing cart abandonment by 57%. Engineered merchant-facing APIs and SDKs and worked on Shopify's AI assistant (Sidekick).",
  },
  {
    company: "IBM",
    role: "Software Intern → Software Engineer",
    period: "Jun 2021 — Apr 2024",
    description:
      "Built and optimized REST APIs consumed by 30+ internal services. Contributed to cloud migration initiatives, containerizing legacy applications.",
  },
];

const blogPosts = [
  {
    title: "How We Cracked Extraction Pipelines",
    date: "Feb 2026",
    href: "https://www.novoflow.io/blog/extraction-pipelines",
    code: "https://github.com/cyohan21/openemr-extraction-pipeline",
  },
];

const projects = [
  {
    name: "LLM Observability Monitoring System",
    description:
      "Real-time monitoring system for LLM agent events using a microservices architecture with two TypeScript services. Integrated with Groq API and engineered rolling window aggregation pipelines for latency tracking, error rates, and confidence scoring.",
    link: "https://github.com/cyohan21/llm-observability",
  },
  {
    name: "MeetingDigest",
    description:
      "AI-powered meeting transcription and summarization service. RESTful API with Flask, OpenAI Whisper and GPT-3.5, JWT auth, Google OAuth, and PostgreSQL.",
    link: "https://github.com/cyohan21/meetingdigest.app",
  },
  {
    name: "AI Document Analyzer",
    description:
      "Full-stack app for uploading, analyzing, and extracting content from PDFs and YouTube videos using AI chat with text and voice modes.",
    link: "https://github.com/cyohan21/ai-document",
  },
  {
    name: "Flopp",
    description:
      "Ottawa's first social network for discovering local spots, sharing experiences, and connecting with residents.",
    link: "https://github.com/cyohan21/__PUBLIC__-flopp.app",
  },
  {
    name: "Spending Tracker",
    description:
      "AI-powered mobile spending tracker that makes personal finance fun, social, and habit-forming. Inspired by oops.app and Duolingo.",
    link: "https://github.com/cyohan21/spending-tracker-v1",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-16">
        <h1 className="mb-4 text-2xl font-medium tracking-tight text-neutral-100">
          Caleb Yohannes
        </h1>
        <p className="max-w-lg leading-relaxed text-neutral-400">
          The most ambitious person you&apos;ll ever meet, trying to build the
          future.
        </p>
        <div className="mt-4 flex gap-4 text-sm text-neutral-500">
          <a
            href="https://github.com/cyohan21"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-300"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/cyohan21"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-300"
          >
            linkedin
          </a>
          <a
            href="https://x.com/cyohan21"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-300"
          >
            x
          </a>
          <a
            href="mailto:calebyhns@gmail.com"
            className="transition-colors hover:text-neutral-300"
          >
            email
          </a>
        </div>
      </section>

      {/* Work */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-medium text-neutral-100">work</h2>
          <Link
            href="/work"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            view all
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          {workExperience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-medium text-neutral-200">{job.company}</h3>
                  <p className="text-sm text-neutral-500">{job.role}</p>
                </div>
                <p className="text-sm text-neutral-600">{job.period}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-medium text-neutral-100">blog</h2>
          <Link
            href="/blog"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            view all
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {blogPosts.map((post) => (
            <div key={post.title} className="flex flex-col gap-1">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 transition-colors hover:text-neutral-100"
                >
                  {post.title}
                </a>
                <p className="text-sm text-neutral-600">{post.date}</p>
              </div>
              {post.code && (
                <a
                  href={post.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
                >
                  view code
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-medium text-neutral-100">projects</h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            view all
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="font-medium text-neutral-300 transition-colors group-hover:text-neutral-100">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
