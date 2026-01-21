"use client";

import { 
  Sparkles, 
  PenTool, 
  Code, 
  Eye, 
  Zap, 
  Palette,
  Layout,
  Smartphone,
  Download,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 overflow-hidden">
      
      {/* Subtle background glow from the left */}
      <div className="absolute -left-[20%] top-[10%] w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-[150px] opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Section Header */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-gray-300">— Features —</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-500">design faster</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            Sketch AI combines the freedom of freehand drawing with the power of AI to generate production-ready code in seconds.
          </p>

          <div className="flex gap-4">
            <Link href="/auth">
              <Button className="h-12 px-8 text-lg rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all hover:scale-105">
                Try now &gt;
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" className="h-12 px-8 text-lg rounded-full border-gray-600 text-gray-300 hover:text-white hover:border-white/50 bg-transparent backdrop-blur-sm">
                Learn more
              </Button>
            </Link>
          </div>
        </div>


        {/* 2. Features Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* --- FEATURE CARD 1: Intuitive Canvas --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-4">
              <PenTool className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Intuitive Canvas</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Draw freely with our powerful canvas powered by tldraw. Shapes, text, arrows, and freehand - all at your fingertips.
            </p>
          </div>

          {/* --- FEATURE CARD 2: AI-Powered Generation (Central Glowing Card) --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/10 opacity-70 blur-3xl rounded-full" />

            {/* The Central Glowing Icon */}
            <div className="relative w-24 h-24 flex items-center justify-center mb-4">
              <div className="absolute inset-0 rounded-full border border-white/5 scale-150" />
              <div className="absolute inset-2 rounded-full border border-white/5 scale-125" />
              <div className="absolute inset-0 bg-[#150E25] rounded-full shadow-2xl" />
              
              {/* Progress Arc */}
              <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                 <circle cx="50" cy="50" r="40" fill="none" stroke="#2B213C" strokeWidth="6" />
                 <circle cx="50" cy="50" r="40" fill="none" stroke="#A855F7" strokeWidth="6" strokeDasharray="251" strokeDashoffset="100" strokeLinecap="round" />
              </svg>

              {/* Center Sparkle */}
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-white to-purple-200 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                     <Sparkles className="text-purple-600 fill-purple-600 w-5 h-5" />
                  </div>
              </div>
            </div>
            <h3 className="text-white font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-300 mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-400">Powered by Google Gemini for intelligent code generation</p>
          </div>

          {/* --- FEATURE CARD 3: Clean Code Output --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Clean Code Output</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Get semantic HTML with Tailwind CSS. Production-ready code that&apos;s easy to understand and customize.
            </p>
          </div>

          {/* --- FEATURE CARD 4: Live Preview --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Live Preview</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              See your generated website instantly in a live preview. Toggle between preview and code view anytime.
            </p>
          </div>

          {/* --- FEATURE CARD 5: Instant Generation --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Instant Generation</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              No waiting around. Our AI generates your website code in seconds, not minutes.
            </p>
          </div>

          {/* --- FEATURE CARD 6: Export Ready --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Export Ready</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Copy the generated code to your clipboard with one click. Ready to paste into your project.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
