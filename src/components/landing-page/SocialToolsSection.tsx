"use client";

import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Facebook, X, AtSign, Rss } from "lucide-react"; // Using Rss for TikTok icon as it's not directly in Lucide
import Image from "next/image"; // For the TikTok icon, if you use a custom SVG/PNG

// Helper component for the platform icons, which have a specific style
function PlatformIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1E162E] border border-[#372F46] shadow-md shadow-purple-900/10 mb-4">
      {children}
    </div>
  );
}

export function SocialToolsSection() {
  return (
    <section className="relative py-24 px-4  overflow-hidden">
      
      {/* Subtle background glow from the top-right */}
      <div className="absolute -right-[10%] top-[10%] w-[600px] h-[600px] rounded-full bg-indigo-700/10 blur-[150px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-gray-300">— Social Tools —</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Powerful tool for <br />
            boosting social media <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-500">growth</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Produce unlimited short videos simultaneously with automatic generation <br />
            of captions, effects, backgrounds, and music.
          </p>

          {/* Call to Action Button */}
          <Button className="h-12 px-8 text-lg rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all hover:scale-105">
            Try now &gt;
          </Button>
        </div>


        {/* 2. Platform Features Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* --- Instagram Reels --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <PlatformIcon>
              <Instagram size={30} className="text-purple-400" />
            </PlatformIcon>
            <h3 className="text-white font-semibold text-xl mb-2">Instagram Reels</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transform Instagram Reels into engaging content by adding gameplay to captivate viewers.
            </p>
          </div>

          {/* --- TikTok Videos --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <PlatformIcon>
              {/* Using a custom image for TikTok icon as Lucide doesn't have it directly */}
              {/* You'll need to save a TikTok icon as public/tiktok.svg or public/tiktok.png */}
              <Image src="/images/tiktok.svg" alt="TikTok" width={30} height={30} className="text-purple-400" />
            </PlatformIcon>
            <h3 className="text-white font-semibold text-xl mb-2">TikTok Videos</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Elevate your TikTok videos by adding gameplay to create captivating and entertaining content.
            </p>
          </div>

          {/* --- YouTube Shorts --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <PlatformIcon>
              <Youtube size={30} className="text-purple-400" />
            </PlatformIcon>
            <h3 className="text-white font-semibold text-xl mb-2">YouTube Shorts</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Enhance your YouTube Shorts by adding gameplay to create dynamic and engaging content.
            </p>
          </div>

          {/* --- Facebook Reels --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <PlatformIcon>
              <Facebook size={30} className="text-purple-400" />
            </PlatformIcon>
            <h3 className="text-white font-semibold text-xl mb-2">Facebook Reels</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transform Facebook Reels into engaging content by adding gameplay to captivate viewers.
            </p>
          </div>

          {/* --- Twitter (X) videos --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <PlatformIcon>
              <X size={30} className="text-purple-400" />
            </PlatformIcon>
            <h3 className="text-white font-semibold text-xl mb-2">Twitter (X) videos</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Enhance your X videos by incorporating gameplay to grab attention and keep viewers hooked.
            </p>
          </div>

          {/* --- Thread Videos (Using AtSign for now) --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            <PlatformIcon>
              {/* Lucide doesn't have a direct "Threads" icon, using AtSign for now */}
              <AtSign size={30} className="text-purple-400" /> 
            </PlatformIcon>
            <h3 className="text-white font-semibold text-xl mb-2">Thread Videos</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Boost your Thread videos with gameplay! Engaging visuals captivate viewers and enhance your content.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}