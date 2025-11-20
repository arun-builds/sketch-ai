"use client";

import { Sparkles, FileText, Mic, Image as ImageIcon, Play, Volume2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // For actual images in the last card

// Shared styles for the inner mock UI elements within cards
const mockUiBoxStyle = "bg-[#1E162E] border border-[#372F46] rounded-xl p-4 text-xs text-gray-400";
const mockPillStyle = "flex items-center gap-2 px-3 py-1 rounded-full bg-[#372F46] text-purple-200 text-[10px]";

export function FeaturesSection() {
  return (
    <section className="relative py-24 px-4  overflow-hidden">
      
      {/* Subtle background glow from the left */}
      <div className="absolute -left-[20%] top-[10%] w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-[150px] opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Section Header */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-gray-300">— Features —</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Your go-to tool for crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-500">viral Shorts</span> using AI.
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            Produce an endless number of short videos simultaneously. Automatically generate captions, effects, backgrounds, and music for you.
          </p>

          <div className="flex gap-4">
            <Button className="h-12 px-8 text-lg rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all hover:scale-105">
              Try now &gt;
            </Button>
            <Button variant="outline" className="h-12 px-8 text-lg rounded-full border-gray-600 text-gray-300 hover:text-white hover:border-white/50 bg-transparent backdrop-blur-sm">
              Learn more
            </Button>
          </div>
        </div>


        {/* 2. Features Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* --- FEATURE CARD 1: Instantly Automate Videos --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            {/* Mock UI: Pill-shaped controls */}
            <div className="flex flex-col gap-2 mb-6">
              <div className={`${mockPillStyle} border border-purple-500/20`}>
                <ImageIcon size={14} className="text-purple-300" /> Video Background
              </div>
              <div className={`${mockPillStyle} border border-purple-500/20`}>
                <FileText size={14} className="text-purple-300" /> Script Generation
              </div>
              <div className={`${mockPillStyle} border border-purple-500/20`}>
                <Mic size={14} className="text-purple-300" /> Voice Narrator
              </div>
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Instantly automate videos.</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Generate captions, effects, music & backgrounds in a second.
            </p>
          </div>

          {/* --- FEATURE CARD 2: Your AI-powered video creator (Central Glowing Card) --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/10 opacity-70 blur-3xl rounded-full" />
            <div className="absolute inset-0 bg-radial-gradient from-purple-900/20 to-transparent opacity-60" />

            {/* The Central Glowing Icon */}
            <div className="relative w-32 h-32 flex items-center justify-center mb-6">
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
                  <div className="w-14 h-14 bg-gradient-to-br from-white to-purple-200 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                     <Sparkles className="text-purple-600 fill-purple-600 w-6 h-6" />
                  </div>
              </div>
            </div>
            <h3 className="text-white font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-300">Your AI-powered</h3>
            <h3 className="text-white font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-300">video creator</h3>
          </div>

          {/* --- FEATURE CARD 3: Video Background --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            {/* Mock UI: Image grid */}
            <div className="grid grid-cols-3 gap-2 mb-6 w-full">
              {[
                '/images/bg-forest.png', // Replace with your actual paths
                '/images/bg-pink.png',
                '/images/bg-stars.png',
              ].map((src, index) => (
                <div key={index} className={`relative aspect-[3/2] rounded-md overflow-hidden ${index === 1 ? 'border border-purple-500 ring-1 ring-purple-500/50' : 'border-[#372F46]'}`}>
                  <Image src={src} alt={`Background ${index + 1}`} fill objectFit="cover" className="brightness-90" />
                </div>
              ))}
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Video Background</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Choose an AI-generated custom video template from our library.
            </p>
          </div>

          {/* --- FEATURE CARD 4: AI Voice Narrator --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            {/* Mock UI: Waveform with play button */}
            <div className="flex items-center gap-4 w-full h-20 bg-[#1E162E] border border-[#372F46] rounded-xl mb-6 px-4">
              <Button size="icon" className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                <Play size={20} fill="white" />
              </Button>
              {/* CSS Waveform */}
              <div className="flex flex-1 items-center justify-center gap-[2px] h-10">
                {[...Array(25)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-[3px] bg-gradient-to-t from-purple-500 to-fuchsia-400 rounded-full"
                    style={{ height: `${Math.max(10, Math.random() * 80)}%`, opacity: Math.random() * 0.5 + 0.5 }} 
                  />
                ))}
              </div>
              <span className="text-gray-400 text-xs ml-2">1.0</span>
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">AI Voice Narrator</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Quickly generate lifelike AI voiceovers, converting text into natural-sounding narration.
            </p>
          </div>

          {/* --- FEATURE CARD 5: Cross Platform Videos --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            {/* Mock UI: Play button in a video player frame */}
            <div className="relative w-full aspect-video bg-[#1E162E] border border-[#372F46] rounded-xl mb-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent blur-3xl opacity-50" />
              <Button size="icon" className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                <Play size={24} fill="white" />
              </Button>
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Cross Platform Videos</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Create videos optimized for various platforms, including YouTube, Instagram, and TikTok.
            </p>
          </div>

          {/* --- FEATURE CARD 6: Auto Subtitle Generation --- */}
          <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 shadow-lg shadow-purple-900/5 flex flex-col items-start">
            {/* Mock UI: Text snippets */}
            <div className="w-full mb-6">
              <div className="p-3 bg-[#1E162E] border border-[#372F46] rounded-lg text-gray-300 text-sm mb-2">
                There lived a certain man in Russia long ago
              </div>
              <div className="p-3 bg-[#1E162E] border border-[#372F46] rounded-lg text-gray-300 text-sm">
                很久以前，在俄罗斯有一个人。
              </div>
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Auto Subtitle Generation.</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Automatically generate clear subtitles in any language, from Chinese to Russian and beyond.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}