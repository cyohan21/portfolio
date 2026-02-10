import Link from "next/link";

const navItems = [
  { name: "home", href: "/" },
  { name: "work", href: "/work" },
  { name: "blog", href: "/blog" },
  { name: "projects", href: "/projects" },
];

export function Navbar() {
  return (
    <nav className="mb-16 flex flex-row items-start gap-6 text-sm">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-neutral-400 transition-colors hover:text-neutral-200"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
