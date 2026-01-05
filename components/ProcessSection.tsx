const steps = [
  {
    number: "01",
    title: "Free Automation\nAudit",
    body: "We analyze your current lead\nmanagement process, identify\nbottlenecks, and show you\nexactly where deals are being\nlost. No obligation, no sales\npressure—just actionable\ninsights.",
    meta: "30-minute call"
  },
  {
    number: "02",
    title: "Custom Setup &\nIntegration",
    body: "Our team configures the\nautomation to match your\nspecific workflow, integrates\nwith your existing tools, and\ntrains your team on the new\nsystem. You don’t lift a finger.",
    meta: "3-5 business days"
  },
  {
    number: "03",
    title: "Launch &\nOptimize",
    body: "We monitor performance\nclosely during the first 30\ndays, making adjustments to\nmaximize results. You’ll see\nimproved response times and\nconversion rates immediately.",
    meta: "Ongoing support"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#0a0f23] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
          SIMPLE THREE-STEP PROCESS
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          From Chaos to Systematic Success
          <span className="block text-accent">in Three Simple Steps</span>
        </h2>
        <p className="mt-4 max-w-3xl text-base text-white/70">
          We’ve streamlined the implementation process so you can start seeing results
          without disrupting your current operations. No technical expertise required.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="glass-card rounded-3xl p-6">
              <div className="text-sm font-semibold text-accent">{step.number}</div>
              <h3 className="mt-3 whitespace-pre-line text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/70">
                {step.body}
              </p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                {step.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
