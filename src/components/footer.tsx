export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-800 pt-8 pb-16">
      <div className="flex flex-col gap-4 text-sm text-neutral-500 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Caleb Yohannes</p>
        <div className="flex gap-4">
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
        </div>
      </div>
    </footer>
  );
}
