import { Sparkles, Target, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Instant Response, Every\nTime",
    body: "Automatic responses that feel personal\nreach every inquiry within 60 seconds.\nNo more lost opportunities because\nsomeone was in a meeting or showing a\nproperty.",
    stat: "400% increase in lead engagement\nrates",
    statClass: "text-emerald-400"
  },
  {
    icon: Target,
    title: "More Closings with Less\nEffort",
    body: "Your agents focus on what they do best—\nclosing deals and building relationships—\nwhile our system handles the repetitive\nfollow-up tasks automatically.",
    stat: "3-4 hours saved per agent daily",
    statClass: "text-white/70"
  },
  {
    icon: ThumbsUp,
    title: "Consistent Professional\nExperience",
    body: "Every lead receives the same high-\nquality, timely communication regardless\nof when they inquire or which agent\nthey’re assigned to.",
    stat: "85% improvement in client\nsatisfaction scores",
    statClass: "text-white/70"
  }
];

export default function SolutionSection() {
  return (
    <section className="bg-[#080b1d] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
          THE ORION WEB SOLUTION
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          We Handle the Follow-Up,
          <span className="block text-accent">You Handle the Closings</span>
        </h2>
        <p className="mt-4 max-w-3xl text-base text-white/70">
          Our automation platform transforms your lead management from chaotic to
          systematic, delivering consistent results without adding complexity to your
          workflow.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="glass-card rounded-3xl p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="whitespace-pre-line text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/70">
                  {benefit.body}
                </p>
                <p
                  className={`mt-6 whitespace-pre-line text-sm font-semibold ${benefit.statClass}`}
                >
                  {benefit.stat}
                </p>
              </div>
            );
          })}
        </div>

        <div className="glass-card mt-12 rounded-3xl px-10 py-10 text-center">
          <h3 className="text-2xl font-semibold text-white">The Orion Web Difference</h3>
          <p className="mt-4 text-base text-white/70">
            Unlike generic CRM tools, we specialize exclusively in real estate lead automation. Every
            feature is designed specifically for agencies like yours, with proven results across
            hundreds of implementations.
          </p>
        </div>
      </div>
    </section>
  );
}
