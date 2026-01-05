"use client";

import { useState } from "react";

const leadOptions = [
  "0-25 inquiries",
  "26-50 inquiries",
  "51-100 inquiries",
  "101-200 inquiries",
  "200+ inquiries"
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  volume: string;
  challenge: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function AuditFormSection() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    volume: "",
    challenge: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formState.name.trim()) newErrors.name = "Full Name is required";
    if (!formState.email.trim()) newErrors.email = "Email Address is required";
    if (!formState.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formState.company.trim()) newErrors.company = "Company/Agency Name is required";
    if (!formState.volume.trim()) newErrors.volume = "Monthly Lead Volume is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    alert("Thanks! We’ll reach out shortly.");
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      volume: "",
      challenge: ""
    });
    setErrors({});
  };

  return (
    <section id="audit" className="bg-[#080b1d] py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            LIMITED TIME OFFER
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white">
            Get Your Free
            <span className="block text-accent">Automation Audit</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/70">
            Discover exactly how much time and revenue you’re losing to
            manual follow-up. Our 30-minute audit reveals your biggest
            opportunities for improvement—with zero obligation.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-white">Identify Your Bottlenecks</h3>
              <p className="text-sm text-white/70">
                See exactly where leads are falling through the cracks
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Calculate Lost Revenue</h3>
              <p className="text-sm text-white/70">
                Quantify the cost of delayed follow-up in real dollars
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Get Custom Recommendations</h3>
              <p className="text-sm text-white/70">
                Receive a tailored automation strategy for your agency
              </p>
            </div>
          </div>

          <div className="glass-card mt-10 rounded-2xl px-6 py-6">
            <h4 className="text-base font-semibold text-white">Act Now—Don’t Wait</h4>
            <p className="mt-3 text-sm text-white/70">
              Every day you delay costs you potential commissions. The average
              agency loses $15,000-$25,000 monthly to poor follow-up. How much
              longer can you afford to wait?
            </p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="text-sm font-semibold text-white" htmlFor="name">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
              />
              {errors.name ? (
                <p className="mt-2 text-xs text-red-300">{errors.name}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm font-semibold text-white" htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
              />
              {errors.email ? (
                <p className="mt-2 text-xs text-red-300">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm font-semibold text-white" htmlFor="phone">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                placeholder="07-98-43-29-74"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
              />
              {errors.phone ? (
                <p className="mt-2 text-xs text-red-300">{errors.phone}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm font-semibold text-white" htmlFor="company">
                Company/Agency Name *
              </label>
              <input
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                placeholder="Smith Realty Group"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
              />
              {errors.company ? (
                <p className="mt-2 text-xs text-red-300">{errors.company}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm font-semibold text-white" htmlFor="volume">
                Monthly Lead Volume *
              </label>
              <select
                id="volume"
                name="volume"
                value={formState.volume}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
              >
                <option value="" className="bg-[#0a0f23]">
                  Select range
                </option>
                {leadOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#0a0f23]">
                    {option}
                  </option>
                ))}
              </select>
              {errors.volume ? (
                <p className="mt-2 text-xs text-red-300">{errors.volume}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm font-semibold text-white" htmlFor="challenge">
                Tell Us About Your Biggest Challenge (Optional)
              </label>
              <textarea
                id="challenge"
                name="challenge"
                value={formState.challenge}
                onChange={handleChange}
                placeholder="e.g., We’re losing deals because leads wait too long for
responses..."
                rows={4}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
              />
            </div>

            <button type="submit" className="button-primary w-full text-base">
              Schedule My Free Audit →
            </button>
            <p className="text-xs text-white/50">
              By submitting this form, you agree to receive communications from Orion Web. We respect
              your privacy and will never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
