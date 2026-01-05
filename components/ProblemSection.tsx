import { AlertTriangle, Clock, TrendingDown, UserX } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Inquiries Slip Through the Cracks",
    body: "Your team is busy showing properties and closing deals.\nMeanwhile, new leads wait hours or days for a response—and\nthey’re already talking to your competitors."
  },
  {
    icon: Clock,
    title: "Manual Follow-Up Kills Productivity",
    body: "Your agents spend 3-4 hours daily on repetitive follow-up\ntasks instead of high-value activities like negotiations and\nclient meetings."
  },
  {
    icon: UserX,
    title: "Inconsistent Communication Damages Trust",
    body: "Some leads get immediate attention while others are forgotten.\nThis inconsistency makes your agency look unprofessional and\ncosts you referrals."
  },
  {
    icon: TrendingDown,
    title: "Lost Revenue from Delayed Response",
    body: "Studies show that responding within 5 minutes increases\nconversion by 400%. Every hour of delay costs you potential\ncommissions."
  }
];

export default function ProblemSection() {
  return (
    <section id="solutions" className="bg-[#0a0f23] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
          THE REAL COST OF MANUAL FOLLOW-UP
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Sound Familiar? You’re Not Alone
        </h2>
        <p className="mt-4 max-w-3xl text-base text-white/70">
          Real estate agencies across Cote d'ivore face the same challenge: great lead
          generation, poor follow-up execution. Here’s what’s really happening behind the
          scenes.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div key={problem.title} className="glass-card rounded-3xl p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/70">
                  {problem.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="glass-card mt-10 rounded-3xl px-8 py-8 text-center">
          <h3 className="text-xl font-semibold text-white">The Bottom Line</h3>
          <p className="mt-4 text-base text-white/70">
            Every day without automation, you’re losing qualified leads to competitors who respond faster. The question isn’t whether
            you can afford to automate—it’s whether you can afford not to.
          </p>
        </div>
      </div>
    </section>
  );
}
