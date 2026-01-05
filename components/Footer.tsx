import Image from "next/image";

const quickLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Who We Serve", href: "#benefits" },
  { label: "Free Audit", href: "https://calendly.com/orionweb-agency-co/30min", target: "_blank", rel: "noopener noreferrer" }
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f23]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/orion-logo.png"
                alt="Orion Web logo"
                width={42}
                height={42}
                className="h-10 w-10"
              />
              <span className="text-sm font-semibold tracking-[0.35em] text-white/70">
                ORION WEB AGENCY
              </span>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Guiding real estate professionals to systematic success
              through intelligent lead automation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><a href="mailto:orionweb.agency.co.@gmail.com">hello@orionweb.agency</a></li>
              <li><a href="tel:0798432974">07-98-43-29-74</a></li>
              <li><a href="https://maps.google.com/?q=ABIDJAN-MARCORY">ABIDJAN-MARCORY</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <span>© 2026 Orion Web Agency. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
