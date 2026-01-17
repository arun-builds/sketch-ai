import { Navbar } from "@/components/landing-page/Navbar";
import { Hero } from "@/components/landing-page/Hero";
import { Background } from "@/components/landing-page/Background";
import { SketchDemoSection } from "@/components/landing-page/SketchDemoSection";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
import { FeaturesSection } from "@/components/landing-page/FeaturesSection";
import { SocialToolsSection } from "@/components/landing-page/SocialToolsSection";
import { TestimonialsSection } from "@/components/landing-page/TestimonialsSection";
import { Footer } from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-purple-500/30">
      
      {/* Background with gradient effects */}
      <Background />

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SketchDemoSection />
        <HowItWorks />
        <FeaturesSection />
        <SocialToolsSection />
        <TestimonialsSection />
        <Footer />
      </div>
      
    </main>
  );
}