"use client";

import { Sparkles, X, ChevronDown, Music, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

// Reusable styles for the inner "Mock UI" elements
const mockInputStyle = "w-full bg-[#1E162E] border border-[#372F46] rounded-lg px-4 py-3 text-xs text-gray-400 mb-4 flex items-center justify-between";
const labelStyle = "text-xs text-gray-500 font-medium mb-2 block ml-1";

export function HowItWorks() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      
      {/* Background Stars (Optional: Keeps the theme consistent) */}
      {/* <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-20 w-1 h-1 bg-purple-500 rounded-full opacity-50 animate-pulse" />
        <div className="absolute top-40 right-40 w-1 h-1 bg-white rounded-full opacity-30" />
        <div className="absolute bottom-20 left-1/3 w-2 h-2 text-purple-900/20">+</div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-gray-300">— How it works —</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Turn ideas into <br />
            short videos in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-500">seconds.</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Produce endless short videos instantly. Automatically generate captions, effects, backgrounds, and music.
          </p>
        </div>


        {/* 2. The Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* --- CARD 1: Write & Outline --- */}
          <div className="flex flex-col h-full">
             {/* The UI Mockup Box */}
            <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 flex-1 mb-6 shadow-lg shadow-purple-900/5">
              
              {/* Input 1 */}
              <span className={labelStyle}>Enter Your Story Topic</span>
              <div className={mockInputStyle}>
                 <span>Write a story about Spanish lullaby</span>
              </div>

              {/* Input 2 (Tags) */}
              <span className={labelStyle}>Select Story Tone</span>
              <div className={`${mockInputStyle} !py-2 !px-2 flex gap-2`}>
                {['Funny', 'Fairy', 'Lullaby'].map((tag) => (
                  <span key={tag} className="bg-[#2D2440] text-purple-200 text-[10px] px-2 py-1 rounded flex items-center gap-1 border border-purple-500/20">
                    {tag} <X size={10} className="opacity-50" />
                  </span>
                ))}
              </div>

              {/* Input 3 */}
              <span className={labelStyle}>Max Words</span>
              <div className={mockInputStyle}>
                 <span>500 words</span>
              </div>
            </div>
            
            {/* Description Text */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">1. Write & Outline</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Kick off by crafting a script with a prompt or by choosing from available template suggestions.
              </p>
            </div>
          </div>


          {/* --- CARD 2: Customise & Style --- */}
          <div className="flex flex-col h-full">
            {/* The UI Mockup Box */}
            <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 flex-1 mb-6 shadow-lg shadow-purple-900/5">
              
              {/* Select Dropdown */}
              <span className={labelStyle}>Video Orientation</span>
              <div className={mockInputStyle}>
                 <span>16:9 Landscape (YouTube Recommended)</span>
                 <ChevronDown size={14} className="opacity-50" />
              </div>

              {/* Image Grid */}
              <span className={labelStyle}>Select Background</span>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`aspect-square rounded-md overflow-hidden border ${i === 2 ? 'border-purple-500 ring-1 ring-purple-500/50' : 'border-[#372F46]'} relative bg-[#1E162E]`}>
                     {/* Placeholder for image thumbnail */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon size={12} className="text-gray-600" />
                     </div>
                     {/* If you have images, use <Image /> here */}
                  </div>
                ))}
              </div>

               {/* Sound Selection */}
               <span className={labelStyle}>Select Background Sound</span>
               <div className="flex gap-2">
                 <div className="flex-1 bg-[#1E162E] border border-[#372F46] rounded-md p-2 flex items-center gap-2 text-xs text-gray-400 opacity-50">
                    <Music size={10} /> Beach...
                 </div>
                 <div className="flex-1 bg-[#1E162E] border border-[#372F46] rounded-md p-2 flex items-center gap-2 text-xs text-gray-400 opacity-50">
                    <Music size={10} /> Deep...
                 </div>
               </div>

            </div>

            {/* Description Text */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">2. Customise & Style</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Select orientation and pick a background scene and music from free templates.
              </p>
            </div>
          </div>


          {/* --- CARD 3: Finish & Export --- */}
          <div className="flex flex-col h-full">
            {/* The UI Mockup Box - Centered Loader Content */}
            <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 flex-1 mb-6 shadow-lg shadow-purple-900/5 flex items-center justify-center relative overflow-hidden">
              
              {/* Background Radial Glow */}
              <div className="absolute inset-0 bg-radial-gradient from-purple-900/20 to-transparent opacity-50" />

              {/* The Loader Animation */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Outer Rings */}
                <div className="absolute inset-0 rounded-full border border-white/5 scale-150" />
                <div className="absolute inset-2 rounded-full border border-white/5 scale-125" />
                <div className="absolute inset-0 bg-[#150E25] rounded-full shadow-2xl" />
                
                {/* The Progress Arc (simulated with CSS) */}
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

                {/* Orbiting Dot */}
                <div className="absolute w-full h-full animate-spin-slow">
                   <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]" />
                </div>
              </div>

            </div>

            {/* Description Text */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">3. Finish & Export</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Select the export format and download the generated videos, script, or narration.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}