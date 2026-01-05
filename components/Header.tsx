import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Benefits", href: "#benefits" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0f23]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/orion-web-logo.png"
            alt="Orion Web logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <div className="text-sm font-semibold tracking-[0.35em] text-white/70">
            AGENCY
          </div>
        </div>
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
        <a href="https://calendly.com/orionweb-agency-co/30min" className="button-primary text-xs md:text-sm">
          Get Free Audit
        </a>
      </div>
    </header>
  );
}
