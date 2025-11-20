"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image"; // Ensure you have avatars or use placeholders

const testimonials = [
  {
    quote: "I've never seen a tool like this. Creating endless short videos is a breeze, and the auto-generated captions and effects are perfect. A must-have for social media!",
    name: "Samantha Lee",
    role: "Social Media Influencer",
    avatar: "/images/avatar1.png" // Placeholder path
  },
  {
    quote: "Creating short videos is effortless with this tool. It handles everything from captions to music, delivering fantastic results. A game-changer for social media!",
    name: "Avery Thompson",
    role: "Youtube content creator",
    avatar: "/images/avatar2.png" // Placeholder path
  },
  {
    quote: "This tool surpassed my expectations. It seamlessly manages captions and music, letting me focus on content. Efficient and user-friendly—I absolutely love it!",
    name: "Taylor Johnson",
    role: "Video marketing specialist",
    avatar: "/images/avatar3.png" // Placeholder path
  }
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4  overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. HEADER */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-gray-300">— Testimonial —</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our User Stories: <br />
            How We Made an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-500">Impact</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-lg">
            Explore user stories that highlight how we made a significant impact and transformed user experiences in meaningful ways.
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
                {item.quote}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-purple-500/30 bg-purple-900/20">
                   {/* Replace with actual Next/Image if you have assets, or use this placeholder div */}
                   <div className="w-full h-full bg-gradient-to-br from-purple-400 to-indigo-600 opacity-80" />
                   {/* <Image src={item.avatar} alt={item.name} fill objectFit="cover" /> */}
                </div>
                <div>
                  <h4 className="text-white font-medium">{item.name}</h4>
                  <span className="text-gray-500 text-sm">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* 3. CTA BANNER (Experience the Magic) */}
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
                    Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-400">Magic</span>
                </h2>
                
                <p className="text-gray-300 max-w-2xl text-lg mb-10">
                    Create endless short videos simultaneously with automatic captions, effects, backgrounds, and music.
                </p>

                <div className="flex gap-4">
                    <Button className="h-12 px-8 text-lg rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#4B0082] hover:opacity-90 text-white shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all hover:scale-105">
                        Try now &gt;
                    </Button>
                    <Button variant="outline" className="h-12 px-8 text-lg rounded-full border-gray-600 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/50 bg-transparent">
                        Learn more &gt;
                    </Button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}