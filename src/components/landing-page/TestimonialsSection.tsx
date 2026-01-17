"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    quote: "Sketch AI has completely changed how I prototype. I can sketch an idea and have working code in seconds. It's like having a developer assistant that reads my mind.",
    name: "Alex Chen",
    role: "Product Designer",
  },
  {
    quote: "As a frontend developer, I use Sketch AI to quickly scaffold layouts. It saves me hours of boilerplate code and lets me focus on the interesting parts.",
    name: "Sarah Miller",
    role: "Frontend Developer",
  },
  {
    quote: "I use Sketch AI in client meetings to turn their napkin sketches into real prototypes. The wow factor is incredible, and it speeds up our feedback loops.",
    name: "James Wilson",
    role: "UX Consultant",
  }
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. HEADER */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-gray-300">— Testimonials —</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Loved by designers <br />
            and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-500">developers</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-lg">
            See how Sketch AI is helping creatives and developers bring their ideas to life faster than ever.
          </p>
        </div>


        {/* 2. TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-32">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className={`
                flex flex-col justify-between p-8
                ${index !== testimonials.length - 1 ? 'md:border-r border-purple-900/30' : ''} 
                ${index !== testimonials.length - 1 ? 'border-b md:border-b-0 border-purple-900/30' : ''}
              `}
            >
              {/* Quote Text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple-500/30 bg-purple-900/20">
                   {/* Gradient avatar placeholder */}
                   <div className="w-full h-full bg-gradient-to-br from-purple-400 to-indigo-600 opacity-80" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{item.name}</h4>
                  <span className="text-gray-500 text-sm">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* 3. CTA BANNER */}
        <div className="relative w-full rounded-[3rem] overflow-hidden">
            
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[#1A0B2E]">
                {/* The main purple gradient sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/40 to-transparent opacity-80" />
                {/* Left Corner Glow */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />
                {/* Right Corner Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px]" />
                {/* Star overlay */}
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-400">Start Sketching?</span>
                </h2>
                
                <p className="text-gray-300 max-w-2xl text-lg mb-10">
                    Transform your ideas into working websites in seconds. No design tools needed, no coding required to get started.
                </p>

                <div className="flex gap-4">
                    <Link href="/workspace/sketch">
                      <Button className="h-12 px-8 text-lg rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#4B0082] hover:opacity-90 text-white shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all hover:scale-105">
                          Open Canvas &gt;
                      </Button>
                    </Link>
                    <Link href="#how-it-works">
                      <Button variant="outline" className="h-12 px-8 text-lg rounded-full border-gray-600 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/50 bg-transparent">
                          Learn more &gt;
                      </Button>
                    </Link>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
