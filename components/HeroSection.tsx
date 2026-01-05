export default function HeroSection() {
  return (
    <section id="home" className="bg-hero-gradient pt-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
          Orion Web Agency
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
          Stop Losing Deals to
          <span className="block text-accent">Slow Follow-Up</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Real estate agencies lose 35-50% of potential deals because
          inquiries slip through the cracks. We automate your follow-up so
          you never miss another opportunity.
        </p>
        <a href="https://calendly.com/orionweb-agency-co/30min" className="button-primary mt-10 text-base">
          Get Your Free Audit →
        </a>
      </div>
    </section>
  );
}
