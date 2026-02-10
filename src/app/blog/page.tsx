import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Caleb Yohannes",
  description: "Thoughts on development, design, and building things.",
};

const blogPosts = [
  {
    title: "How We Cracked Extraction Pipelines",
    date: "Feb 2026",
    href: "https://www.novoflow.io/blog/extraction-pipelines",
    code: "https://github.com/cyohan21/openemr-extraction-pipeline",
  },
];

export default function BlogPage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-medium tracking-tight text-neutral-100">
        blog
      </h1>
      <p className="mb-12 text-neutral-500">
        Thoughts on development, design, and building things.
      </p>
      <div className="flex flex-col gap-8">
        {blogPosts.map((post) => (
          <div key={post.title}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="font-medium text-neutral-300 transition-colors hover:text-neutral-100">
                  {post.title}
                </h2>
              </a>
              <p className="text-sm text-neutral-600">{post.date}</p>
            </div>
            {post.code && (
              <a
                href={post.code}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-neutral-500 transition-colors hover:text-neutral-300"
              >
                view code
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
