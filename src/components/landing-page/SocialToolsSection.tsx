"use client";

import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Rocket, 
  Users, 
  Palette, 
  Code2, 
  Layers 
} from "lucide-react";
import Link from "next/link";

// Helper component for the use case icons
function UseCaseIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600/20 border border-purple-500/30 shadow-md shadow-purple-900/10 mb-4">
      {children}
    </div>
  );
}

export function SocialToolsSection() {
  return (
    <section id="use-cases" className="relative py-24 px-4 overflow-hidden">
      
      {/* Subtle background glow from the top-right */}
      <div className="absolute -right-[10%] top-[10%] w-[600px] h-[600px] rounded-full bg-indigo-700/10 blur-[150px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-gray-300">— Use Cases —</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Perfect for every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-500">creative workflow</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Whether you&apos;re a designer, developer, or entrepreneur, <br />
            Sketch AI accelerates your idea-to-code journey.
          </p>

          {/* Call to Action Button */}
          <Link href="/workspace/sketch">
            <Button className="h-12 px-8 text-lg rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all hover:scale-105">
              Start Creating &gt;
            </Button>
          </Link>
        </div>


        {/* 2. Use Cases Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* --- Rapid Prototyping --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <UseCaseIcon>
              <Rocket size={28} className="text-purple-400" />
            </UseCaseIcon>
            <h3 className="text-white font-semibold text-xl mb-2">Rapid Prototyping</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Quickly validate your ideas by sketching UI concepts and getting working prototypes in seconds.
            </p>
          </div>

          {/* --- Design Handoff --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <UseCaseIcon>
              <Layers size={28} className="text-purple-400" />
            </UseCaseIcon>
            <h3 className="text-white font-semibold text-xl mb-2">Design Handoff</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bridge the gap between design and development. Sketch your ideas and share the generated code.
            </p>
          </div>

          {/* --- Learning & Teaching --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <UseCaseIcon>
              <Lightbulb size={28} className="text-purple-400" />
            </UseCaseIcon>
            <h3 className="text-white font-semibold text-xl mb-2">Learning & Teaching</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Great for students and educators. See how UI concepts translate to real HTML and CSS code.
            </p>
          </div>

          {/* --- Client Presentations --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <UseCaseIcon>
              <Users size={28} className="text-purple-400" />
            </UseCaseIcon>
            <h3 className="text-white font-semibold text-xl mb-2">Client Presentations</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Impress clients by quickly turning their ideas into visual, working prototypes during meetings.
            </p>
          </div>

          {/* --- UI Exploration --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <UseCaseIcon>
              <Palette size={28} className="text-purple-400" />
            </UseCaseIcon>
            <h3 className="text-white font-semibold text-xl mb-2">UI Exploration</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Experiment with different layouts and designs freely. Iterate quickly without writing code.
            </p>
          </div>

          {/* --- Developer Productivity --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <UseCaseIcon>
              <Code2 size={28} className="text-purple-400" />
            </UseCaseIcon>
            <h3 className="text-white font-semibold text-xl mb-2">Developer Productivity</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Skip the boilerplate. Get a head start on your frontend code and focus on the logic.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
