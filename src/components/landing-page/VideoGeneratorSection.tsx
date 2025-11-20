"use client";

import { 
  Sparkles, 
  Wand2, 
  LayoutGrid, 
  Ruler, 
  Mic, 
  Brush, 
  Settings, 
  Zap, 
  Play,
  Layers,
  Type
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

// Shared style for all the "Cards" to ensure consistency
const cardStyle = "bg-[#0f091f] border border-[#2B1B4A] rounded-[24px] shadow-lg shadow-purple-900/5 overflow-hidden";

export function VideoGeneratorSection() {
  return (
    <section className="relative z-10 py-20 flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto px-4">
      
      {/* Main Layout Grid: 3 Columns (Left Form, Middle Content, Right Toolbar) */}
      <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch justify-center">
        
        {/* ------------------------------------------------------- */}
        {/* 1. LEFT COLUMN: INPUT FORM CARD                         */}
        {/* ------------------------------------------------------- */}
        <div className={`${cardStyle} flex-1 p-8 flex flex-col gap-6 min-w-[350px] lg:max-w-[450px]`}>
          {/* Header */}
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500 fill-purple-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Turn your Text into <span className="text-purple-500">Video</span>
            </span>
          </h2>

          {/* Input 1: Video Type */}
          <div className="space-y-2">
            <label className="text-gray-400 text-sm font-medium ml-1">Select video type</label>
            <Select defaultValue="explainer">
              <SelectTrigger className="w-full h-12 bg-[#1A1329] border-[#362854] text-gray-200 rounded-xl focus:ring-purple-500/50">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1329] border-[#362854] text-gray-200">
                <SelectItem value="explainer">I want Explainer Videos</SelectItem>
                <SelectItem value="promo">Promotional Ads</SelectItem>
                <SelectItem value="social">Social Media Reels</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Input 2: Prompt Area */}
          <div className="space-y-2 flex-1 flex flex-col">
            <label className="text-gray-400 text-sm font-medium ml-1">Write your #Prompt in your language</label>
            <Textarea
              placeholder="Imagine a playful elephant calf skating on snow..."
              className="flex-1 min-h-[180px] bg-[#1A1329] border-[#362854] text-gray-300 placeholder:text-gray-600 rounded-xl p-4 resize-none focus-visible:ring-purple-500/50"
            />
          </div>

          {/* Generate Button */}
          <Button className="w-full h-14 mt-2 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white text-lg font-semibold rounded-full shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02]">
            <Wand2 className="w-5 h-5 mr-2" /> Generate
          </Button>
        </div>


        {/* ------------------------------------------------------- */}
        {/* 2. MIDDLE COLUMN: PREVIEWS & WAVEFORM                   */}
        {/* ------------------------------------------------------- */}
        <div className="flex flex-col gap-6 flex-[1.5]">
          
          {/* Top Box: Image Grid */}
          <div className={`${cardStyle} p-4 grid grid-cols-2 gap-4 h-[320px]`}>
            {/* Big Left Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden group">
               <Image 
                 src="/images/elephant-skater.png" 
                 alt="Main Preview" 
                 fill 
                 className="object-cover transition-transform duration-500 group-hover:scale-110" 
               />
            </div>
            {/* Right Column Images */}
            <div className="flex flex-col gap-4 h-full">
              <div className="relative w-full h-1/2 rounded-2xl overflow-hidden group">
                <Image 
                  src="/images/elephant-space.png" 
                  alt="Sub Preview 1" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="relative w-full h-1/2 rounded-2xl overflow-hidden group">
                <Image 
                  src="/images/elephant-flower.png" 
                  alt="Sub Preview 2" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            </div>
          </div>

          {/* Bottom Box: Waveform Visualization */}
          <div className={`${cardStyle} flex-1 min-h-[160px] flex items-center justify-center relative bg-gradient-to-b from-[#0f091f] to-[#140c2a]`}>
             {/* This uses CSS to create a pure CSS waveform representation if you don't have an SVG */}
             <div className="flex items-center justify-center gap-1 h-16 w-full px-8">
                {[...Array(40)].map((_, i) => {
                  // Random heights to simulate audio wave
                  const height = Math.max(20, Math.random() * 100); 
                  return (
                    <div 
                      key={i} 
                      className="w-1.5 bg-linear-to-t from-purple-600 to-fuchsia-500 rounded-full animate-pulse"
                      style={{ 
                        height: `${height}%`,
                        opacity: Math.random() * 0.5 + 0.5,
                        animationDelay: `${i * 0.05}s`
                      }} 
                    />
                  )
                })}
             </div>
          </div>
        </div>


        {/* ------------------------------------------------------- */}
        {/* 3. RIGHT COLUMN: VERTICAL TOOLBAR                       */}
        {/* ------------------------------------------------------- */}
        <div className={`${cardStyle} w-20 py-6 flex flex-col items-center justify-between gap-4 min-h-[500px]`}>
          {/* Top Tools */}
          <div className="flex flex-col gap-6">
            <ToolbarButton icon={<LayoutGrid size={20} />} />
            <ToolbarButton icon={<Ruler size={20} />} />
            <ToolbarButton icon={<Layers size={20} />} />
            <ToolbarButton icon={<Type size={20} />} />
          </div>

          {/* Divider */}
          <div className="w-8 h-[1px] bg-purple-800/30"></div>

          {/* Bottom Tools */}
          <div className="flex flex-col gap-6">
            <ToolbarButton icon={<Settings size={20} />} />
            <ToolbarButton icon={<Zap size={20} />} />
            <ToolbarButton icon={<Wand2 size={20} />} active />
          </div>
        </div>

      </div>

      {/* ------------------------------------------------------- */}
      {/* 4. BOTTOM: FEATURE PILL                                 */}
      {/* ------------------------------------------------------- */}
      <div className="mt-12">
         <div className="flex items-center gap-8 px-8 py-4 rounded-full border border-purple-500/20 bg-[#0f091f] shadow-lg shadow-purple-900/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-gray-300 text-sm font-medium">
              <div className="p-1.5 rounded-md border border-white/10 bg-white/5"><Mic size={14} /></div>
              AI Voice
            </div>
            <div className="w-1 h-1 rounded-full bg-purple-500"></div>
            
            <div className="flex items-center gap-3 text-gray-300 text-sm font-medium">
              <div className="p-1.5 rounded-md border border-white/10 bg-white/5"><Brush size={14} /></div>
              AI Backgrounds
            </div>
            <div className="w-1 h-1 rounded-full bg-purple-500"></div>

            <div className="flex items-center gap-3 text-gray-300 text-sm font-medium">
              <div className="p-1.5 rounded-md border border-white/10 bg-white/5"><Type size={14} /></div>
              AI Script Generator
            </div>
         </div>
      </div>

    </section>
  );
}

// Helper component for the sidebar buttons
function ToolbarButton({ icon, active = false }: { icon: React.ReactNode, active?: boolean }) {
  return (
    <button className={`
      p-3 rounded-full transition-all duration-200
      ${active 
        ? 'bg-white text-purple-900 shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
        : 'text-gray-500 hover:text-white hover:bg-white/10'
      }
    `}>
      {icon}
    </button>
  )
}