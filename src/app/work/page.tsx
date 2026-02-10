import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Caleb Yohannes",
  description: "My professional experience and career journey.",
};

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
      "Collaborated, and autonomously built software with security in mind to develop, test and ship innovative solutions to protect users' privacy. Built and maintained 65square, a social networking application for people of all ages, putting security and privacy as our #1 concern. Improved test coverage by 30% and reduced issue resolution time by 25% via automated CI/CD pipelines.",
  },
  {
    company: "Shopify",
    role: "Fullstack/Mobile Developer",
    period: "May 2024 — Apr 2025",
    description:
      "Enhanced checkout flow in the mobile app, reducing cart abandonment by 57% and boosted completed transactions. Engineered merchant-facing APIs and SDKs and worked as a full-stack engineer on Shopify's AI assistant (Sidekick), empowering tens of thousands of merchants and 3rd-party developers to build custom apps and leverage AI-driven store management. Worked on Shopify's mobile app, implementing features and performance optimizations that improved app load times by 15% and boosted merchant adoption by 10%.",
  },
  {
    company: "IBM",
    role: "Software Intern → Software Engineer",
    period: "Jun 2021 — Apr 2024",
    description:
      "Built and optimized REST APIs consumed by 30+ internal services, enabling cross-functional teams (data engineers, QA, product managers) to launch features for tens of thousands of IBM enterprise clients. Implemented unit and integration testing frameworks (PyTest), increasing test coverage and reducing post-release defects by 25%. Contributed to IBM's cloud migration initiatives, containerizing legacy applications and improving scalability in hybrid cloud environments.",
  },
];

export default function WorkPage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-medium tracking-tight text-neutral-100">
        work
      </h1>
      <p className="mb-12 text-neutral-500">
        My professional journey so far.
      </p>
      <div className="flex flex-col gap-10">
        {workExperience.map((job) => (
          <div key={job.company} className="border-l border-neutral-800 pl-6">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-medium text-neutral-200">{job.company}</h2>
                <p className="text-sm text-neutral-500">{job.role}</p>
              </div>
              <p className="text-sm text-neutral-600">{job.period}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
