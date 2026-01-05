export default function CTASection() {
  return (
    <section className="bg-[#0a0f23] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass-card rounded-3xl px-10 py-12 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Not Sure If This Is Right for You?
          </h2>
          <p className="mt-4 text-base text-white/70">
            Our free automation audit will show you exactly how much time and revenue
            you’re losing to manual follow-up—and how we can fix it. No commitment
            required.
          </p>
          <a href="https://calendly.com/orionweb-agency-co/30min" 
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary mt-8 text-base">
            Schedule Your Free Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
