import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import AuditFormSection from "@/components/AuditFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080b1d]">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <AudienceSection />
        <CTASection />
        <AuditFormSection />
      </main>
      <Footer />
    </div>
  );
}
