const audiences = [
  {
    title: "Established Agencies",
    subtitle: "5-50 agents",
    challenge:
      "You’re generating plenty of inquiries but\nlosing deals because your team can’t\nkeep up with follow-up demands. Manual\nprocesses are costing you revenue.",
    solution:
      "Automated follow-up that scales with\nyour lead volume, freeing your agents to\nfocus on high-value activities like\nnegotiations and client relationships.",
    ideal: [
      "Generate 100+ monthly inquiries",
      "Have multiple agents managing leads",
      "Want to increase revenue without hiring",
      "Need consistent communication standards"
    ]
  },
  {
    title: "Independent Brokers",
    subtitle: "Solo or small teams",
    challenge:
      "You’re wearing too many hats—showing\nproperties, negotiating deals, and trying\nto follow up with every inquiry. Something\nalways falls through the cracks.",
    solution:
      "Personal-feeling automated responses\nthat handle routine follow-up, giving you\nback 3-4 hours daily to focus on closing\ndeals and building your business.",
    ideal: [
      "Handle 20-50 monthly inquiries",
      "Work solo or with 1-2 assistants",
      "Want to scale without losing personal touch",
      "Need more time for client-facing work"
    ]
  },
  {
    title: "Property Management",
    subtitle: "Multi-property portfolios",
    challenge:
      "Inconsistent response times are\ndamaging your reputation. Tenant\ninquiries, maintenance requests, and\nleasing questions pile up while your team\njuggles priorities.",
    solution:
      "Systematic communication that ensures\nevery inquiry gets timely attention, with\nintelligent routing to the right team\nmember based on request type.",
    ideal: [
      "Manage 50+ properties",
      "Handle diverse inquiry types",
      "Need reputation management",
      "Want scalable operations"
    ]
  }
];

export default function AudienceSection() {
  return (
    <section id="benefits" className="bg-[#080b1d] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
          WHO WE SERVE
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Built for Real Estate Professionals
          <span className="block text-accent">Who Value Their Time</span>
        </h2>
        <p className="mt-4 max-w-3xl text-base text-white/70">
          Our automation platform is specifically designed for real estate professionals
          who understand that fast, consistent follow-up is the key to converting more
          leads into closed deals.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div key={audience.title} className="glass-card rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{audience.title}</h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                  {audience.subtitle}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                  Your Challenge
                </p>
                <p className="mt-3 whitespace-pre-line text-sm text-white/70">
                  {audience.challenge}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                  Our Solution
                </p>
                <p className="mt-3 whitespace-pre-line text-sm text-white/70">
                  {audience.solution}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                  Ideal If You
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {audience.ideal.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
