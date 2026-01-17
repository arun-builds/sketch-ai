"use client";

import { Sparkles, PenTool, Eye, Code, ArrowRight, Download } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-4 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm text-gray-300">— How it works —</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            From sketch to website <br />
            in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-indigo-500">seconds.</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Simply draw your UI on the canvas, and our AI will transform it into clean, production-ready code instantly.
          </p>
        </div>


        {/* 2. The Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* --- CARD 1: Draw Your UI --- */}
          <div className="flex flex-col h-full">
             {/* The UI Mockup Box */}
            <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 flex-1 mb-6 shadow-lg shadow-purple-900/5 relative overflow-hidden">
              
              {/* Canvas with sketch elements */}
              <div className="w-full h-48 bg-white rounded-xl relative">
                {/* Grid */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ 
                    backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
                    backgroundSize: '16px 16px'
                  }}
                />
                
                {/* Sketch elements */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="h-6 bg-gray-200 rounded border-2 border-dashed border-gray-400 mb-3"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-6 w-16 bg-purple-200 rounded-full border-2 border-purple-400"></div>
                    <div className="h-6 w-16 bg-gray-100 rounded-full border-2 border-gray-300"></div>
                  </div>
                </div>

                {/* Pen cursor */}
                <PenTool className="absolute bottom-4 right-4 w-5 h-5 text-purple-600" />
              </div>

              {/* Step indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
            </div>
            
            {/* Description Text */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-purple-400" />
                Draw Your UI
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Use our intuitive canvas to sketch your website layout. Draw shapes, boxes, text areas, and buttons - just like on a whiteboard.
              </p>
            </div>
          </div>


          {/* --- CARD 2: AI Generates Code --- */}
          <div className="flex flex-col h-full">
            {/* The UI Mockup Box */}
            <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 flex-1 mb-6 shadow-lg shadow-purple-900/5 flex items-center justify-center relative overflow-hidden">
              
              {/* Background Radial Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent opacity-50" />

              {/* The Loader Animation */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Outer Rings */}
                <div className="absolute inset-0 rounded-full border border-white/5 scale-150" />
                <div className="absolute inset-2 rounded-full border border-white/5 scale-125" />
                <div className="absolute inset-0 bg-[#150E25] rounded-full shadow-2xl" />
                
                {/* The Progress Arc */}
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
                <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '3s' }}>
                   <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]" />
                </div>
              </div>

              {/* Step indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>

            </div>

            {/* Description Text */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                AI Generates Code
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Click generate and watch as our AI analyzes your sketch and creates clean, semantic HTML with Tailwind CSS styling.
              </p>
            </div>
          </div>


          {/* --- CARD 3: Preview & Export --- */}
          <div className="flex flex-col h-full">
            {/* The UI Mockup Box */}
            <div className="bg-[#0F081E] border border-[#2B213C] rounded-2xl p-6 flex-1 mb-6 shadow-lg shadow-purple-900/5 relative overflow-hidden">
              
              {/* Preview/Code Tabs */}
              <div className="flex gap-2 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 text-xs">
                  <Eye size={12} /> Preview
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1A1329] border border-[#362854] rounded-lg text-gray-500 text-xs">
                  <Code size={12} /> Code
                </div>
              </div>

              {/* Mini Website Preview */}
              <div className="bg-white rounded-lg p-3 h-36">
                <div className="h-4 bg-gray-100 rounded mb-2 flex items-center px-2">
                  <div className="w-10 h-2 bg-purple-400 rounded"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded w-2/3 mb-1"></div>
                <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="flex gap-2">
                  <div className="h-4 w-12 bg-purple-500 rounded-full"></div>
                  <div className="h-4 w-12 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              {/* Export indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 text-purple-400 text-xs">
                <Download size={14} /> Export
              </div>

              {/* Step indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
            </div>

            {/* Description Text */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-400" />
                Preview & Export
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Preview your generated website in real-time, view the source code, and export it for use in your projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
