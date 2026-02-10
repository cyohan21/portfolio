import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Caleb Yohannes",
  description: "Things I've built and worked on.",
};

const projects: {
  name: string;
  description: string;
  tech: string[];
  link: string;
  website?: string;
}[] = [
  {
    name: "LLM Observability Monitoring System",
    description:
      "Built a real-time monitoring system for LLM agent events using a microservices architecture with two TypeScript services. Integrated with the Groq API to generate realistic event data and engineered rolling window aggregation pipelines to deliver real-time metrics including latency tracking, error rates, and confidence scoring with Prometheus-format monitoring.",
    tech: ["TypeScript", "Node.js", "Express", "Groq API", "Docker", "Jest", "Prometheus"],
    link: "https://github.com/cyohan21/llm-observability",
  },
  {
    name: "MeetingDigest",
    description:
      "Developed a RESTful API for automated meeting transcription and summarization using Flask and OpenAI integration. Implemented secure user authentication with JWT tokens and Google OAuth, enabling users to upload audio files that are automatically transcribed via Whisper API and summarized using GPT-3.5-turbo. Engineered database schema with SQLAlchemy ORM featuring indexed queries for efficient record retrieval and user management with email verification and password reset flows.",
    tech: ["Python", "Flask", "SQLAlchemy", "OpenAI API", "PostgreSQL", "Google OAuth", "Pytest"],
    link: "https://github.com/cyohan21/meetingdigest.app",
  },
  {
    name: "AI Document Analyzer",
    description:
      "A full-stack application for uploading, analyzing, and extracting content from PDF documents and YouTube videos using AI. Features PDF upload (max 25MB), YouTube transcript extraction, in-browser PDF viewing, AI chat with text and voice modes powered by OpenAI, contextual AI that adapts to PDFs vs YouTube videos, ephemeral API key storage, and a responsive unified dashboard for document management.",
    tech: ["Next.js", "Express", "TypeScript", "OpenAI API", "localStorage"],
    link: "https://github.com/cyohan21/ai-document",
  },
  {
    name: "Flopp",
    description:
      "Ottawa's first social network where users can discover local spots, share experiences about restaurants, events, and activities, and connect with other Ottawa residents. Features local discovery, location-based content, community building, and social interactions like likes and comments around local experiences and recommendations.",
    tech: [],
    link: "https://github.com/cyohan21/__PUBLIC__-flopp.app",
    website: "https://flopp.app",
  },
  {
    name: "Spending Tracker",
    description:
      "A playful, AI-powered mobile spending tracker designed to help users effortlessly manage their finances. Inspired by apps like oops.app and Duolingo's engagement model, it aims to make personal finance fun, social, and habit-forming.",
    tech: [],
    link: "https://github.com/cyohan21/spending-tracker-v1",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-medium tracking-tight text-neutral-100">
        projects
      </h1>
      <p className="mb-12 text-neutral-500">
        Things I&apos;ve built and worked on.
      </p>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border border-neutral-800 p-5 transition-colors hover:border-neutral-700"
          >
            <div className="flex items-center justify-between">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="font-medium text-neutral-200 transition-colors hover:text-neutral-100">
                  {project.name}
                </h2>
              </a>
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
                >
                  visit site
                </a>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {project.description}
            </p>
            {project.tech.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
