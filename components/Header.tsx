import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Benefits", href: "#benefits" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0f23]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/orion-logo.png"
            alt="Orion Web"
            width={500}
            height={400}
            priority
            className="h-8 w-auto md:h-9"
          />
          <span className="text-[11px] font-semibold tracking-[0.35em] text-white/60">
            ORION WEB AGENCY
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://calendly.com/orionweb-agency-co/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-indigo-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-indigo-600 md:text-sm"
        >
          Get Free Audit
        </a>

      </div>
    </header>
  );
}
