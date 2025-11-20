import { Navbar } from "@/components/landing-page/Navbar";
import { Hero } from "@/components/landing-page/Hero";
import { Background } from "@/components/landing-page/Background";
import { VideoGeneratorSection } from "@/components/landing-page/VideoGeneratorSection";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
import { FeaturesSection } from "@/components/landing-page/FeaturesSection";
import { SocialToolsSection } from "@/components/landing-page/SocialToolsSection";
import { TestimonialsSection } from "@/components/landing-page/TestimonialsSection";
import { Footer } from "@/components/landing-page/Footer";

export default function Home() {
  return (
    // We use relative here to ensure content sits on top of the fixed background
    <main className="relative min-h-screen selection:bg-purple-500/30">
      
      {/* The Background Component sits behind everything because of z-index inside it */}
      <Background />

      {/* Your Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <VideoGeneratorSection/>
        <HowItWorks/>
        <FeaturesSection/>
        <SocialToolsSection/>
        <TestimonialsSection/>
        <Footer/>
      </div>
      
    </main>
  );
}