import { Button } from "@/components/ui/button";
import { ChevronRight, PenTool, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20 overflow-hidden">
      
      {/* Background Effects (The Purple Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/40 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      {/* Stars/Particles (Optional CSS decoration) */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      {/* 1. The "Tag" at the top */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
        <Sparkles className="w-4 h-4 text-purple-400" />
        <span className="text-sm text-purple-200">AI-Powered Sketch to Code</span>
      </div>

      {/* 2. Main Headline */}
      <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
        Draw Your Ideas, <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">Generate Websites</span>
      </h1>

      {/* 3. Subtext */}
      <p className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed">
        Transform your UI sketches into production-ready code instantly. 
        Just draw on the canvas and let AI generate beautiful, responsive websites for you.
      </p>

      {/* 4. Primary CTA */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link href="/auth">
          <Button 
            size="lg" 
            className="h-12 px-8 text-lg rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all hover:scale-105"
          >
            <PenTool className="w-5 h-5 mr-2" />
            Start Sketching <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
        <Link href="#how-it-works">
          <Button 
            variant="outline" 
            size="lg"
            className="h-12 px-8 text-lg rounded-full border-gray-600 text-gray-300 hover:text-white hover:border-white/50 bg-transparent backdrop-blur-sm"
          >
            See How It Works
          </Button>
        </Link>
      </div>

    </section>
  );
}