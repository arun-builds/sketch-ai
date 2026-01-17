"use client";

import { 
  Sparkles, 
  PenTool,
  Eye,
  Code,
  ArrowRight,
  MousePointer2,
  Shapes,
  Type
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Shared style for all the "Cards" to ensure consistency
const cardStyle = "bg-[#0f091f] border border-[#2B1B4A] rounded-[24px] shadow-lg shadow-purple-900/5 overflow-hidden";

export function SketchDemoSection() {
  return (
    <section className="relative z-10 py-20 flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto px-4">
      
      {/* Main Layout Grid: 3 Columns */}
      <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch justify-center">
        
        {/* ------------------------------------------------------- */}
        {/* 1. LEFT COLUMN: CANVAS PREVIEW                          */}
        {/* ------------------------------------------------------- */}
        <div className={`${cardStyle} flex-1 p-6 flex flex-col gap-4 min-w-[350px] lg:max-w-[450px]`}>
          {/* Header */}
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <PenTool className="w-5 h-5 text-purple-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Draw Your <span className="text-purple-500">UI</span>
            </span>
          </h2>

          {/* Canvas Preview Mock */}
          <div className="flex-1 min-h-[280px] bg-white rounded-xl relative overflow-hidden">
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{ 
                backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
            
            {/* Mock UI sketch elements */}
            <div className="absolute top-6 left-6 right-6">
              {/* Header bar sketch */}
              <div className="h-8 bg-gray-200 rounded-md border-2 border-dashed border-gray-400 mb-4"></div>
              
              {/* Hero section sketch */}
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="h-8 bg-purple-200 rounded-full w-24 border-2 border-purple-400"></div>
                </div>
                <div className="w-24 h-24 bg-gray-200 rounded-lg border-2 border-dashed border-gray-400"></div>
              </div>
              
              {/* Cards sketch */}
              <div className="flex gap-3">
                <div className="flex-1 h-16 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300"></div>
                <div className="flex-1 h-16 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300"></div>
                <div className="flex-1 h-16 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300"></div>
              </div>
            </div>

            {/* Cursor indicator */}
            <MousePointer2 className="absolute bottom-8 right-8 w-6 h-6 text-purple-600 animate-pulse" />
          </div>

          {/* Generate Button */}
          <Link href="/workspace/sketch" className="w-full">
            <Button className="w-full h-14 mt-2 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white text-lg font-semibold rounded-full shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02]">
              <Sparkles className="w-5 h-5 mr-2" /> Try It Now
            </Button>
          </Link>
        </div>


        {/* ------------------------------------------------------- */}
        {/* 2. MIDDLE COLUMN: GENERATED OUTPUT                      */}
        {/* ------------------------------------------------------- */}
        <div className="flex flex-col gap-6 flex-[1.5]">
          
          {/* Top Box: Generated Website Preview */}
          <div className={`${cardStyle} p-4 h-[320px] flex flex-col`}>
            {/* Browser chrome */}
            <div className="h-8 bg-[#1A1329] border-b border-[#362854] flex items-center px-4 gap-2 rounded-t-lg">
              <div className="w-3 h-3 rounded-full bg-red-400/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/70"></div>
              <div className="ml-4 px-3 py-0.5 bg-[#0f091f] rounded text-xs text-gray-500 border border-[#362854] flex-1 max-w-xs text-center">
                localhost:3000
              </div>
            </div>
            
            {/* Generated website preview */}
            <div className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-b-lg p-4 overflow-hidden">
              {/* Mini website */}
              <div className="h-6 bg-white rounded shadow-sm mb-3 flex items-center px-3">
                <div className="w-16 h-3 bg-purple-200 rounded"></div>
                <div className="ml-auto flex gap-2">
                  <div className="w-8 h-2 bg-gray-200 rounded"></div>
                  <div className="w-8 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="flex gap-3 mb-3">
                <div className="flex-1">
                  <div className="h-3 bg-gray-800 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-gray-400 rounded w-full mb-1"></div>
                  <div className="h-2 bg-gray-400 rounded w-2/3 mb-3"></div>
                  <div className="h-6 bg-purple-600 rounded-full w-20"></div>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg shadow-lg"></div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 h-12 bg-white rounded-lg shadow-sm p-2">
                  <div className="h-2 bg-gray-300 rounded w-1/2 mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="flex-1 h-12 bg-white rounded-lg shadow-sm p-2">
                  <div className="h-2 bg-gray-300 rounded w-1/2 mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="flex-1 h-12 bg-white rounded-lg shadow-sm p-2">
                  <div className="h-2 bg-gray-300 rounded w-1/2 mb-1"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Box: Code Preview */}
          <div className={`${cardStyle} flex-1 min-h-[160px] flex flex-col`}>
            <div className="px-4 py-2 border-b border-[#2B1B4A] flex items-center gap-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-gray-400 font-mono">index.html</span>
            </div>
            <div className="flex-1 p-4 font-mono text-xs overflow-hidden">
              <div className="text-gray-500">&lt;!DOCTYPE html&gt;</div>
              <div className="text-purple-400">&lt;<span className="text-pink-400">div</span> <span className="text-blue-400">class</span>=<span className="text-green-400">&quot;container&quot;</span>&gt;</div>
              <div className="text-purple-400 ml-4">&lt;<span className="text-pink-400">header</span> <span className="text-blue-400">class</span>=<span className="text-green-400">&quot;navbar&quot;</span>&gt;...&lt;/<span className="text-pink-400">header</span>&gt;</div>
              <div className="text-purple-400 ml-4">&lt;<span className="text-pink-400">main</span> <span className="text-blue-400">class</span>=<span className="text-green-400">&quot;hero&quot;</span>&gt;...&lt;/<span className="text-pink-400">main</span>&gt;</div>
              <div className="text-purple-400">&lt;/<span className="text-pink-400">div</span>&gt;</div>
            </div>
          </div>
        </div>


        {/* ------------------------------------------------------- */}
        {/* 3. RIGHT COLUMN: VERTICAL TOOLBAR                       */}
        {/* ------------------------------------------------------- */}
        <div className={`${cardStyle} w-20 py-6 flex flex-col items-center justify-between gap-4 min-h-[500px]`}>
          {/* Top Tools */}
          <div className="flex flex-col gap-6">
            <ToolbarButton icon={<MousePointer2 size={20} />} active />
            <ToolbarButton icon={<Shapes size={20} />} />
            <ToolbarButton icon={<PenTool size={20} />} />
            <ToolbarButton icon={<Type size={20} />} />
          </div>

          {/* Divider */}
          <div className="w-8 h-[1px] bg-purple-800/30"></div>

          {/* Bottom Tools */}
          <div className="flex flex-col gap-6">
            <ToolbarButton icon={<Eye size={20} />} />
            <ToolbarButton icon={<Code size={20} />} />
            <ToolbarButton icon={<Sparkles size={20} />} />
          </div>
        </div>

      </div>

      {/* ------------------------------------------------------- */}
      {/* 4. BOTTOM: FEATURE PILL                                 */}
      {/* ------------------------------------------------------- */}
      <div className="mt-12">
         <div className="flex items-center gap-8 px-8 py-4 rounded-full border border-purple-500/20 bg-[#0f091f] shadow-lg shadow-purple-900/20 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-gray-300 text-sm font-medium">
              <div className="p-1.5 rounded-md border border-white/10 bg-white/5"><PenTool size={14} /></div>
              Freehand Drawing
            </div>
            <div className="w-1 h-1 rounded-full bg-purple-500"></div>
            
            <div className="flex items-center gap-3 text-gray-300 text-sm font-medium">
              <div className="p-1.5 rounded-md border border-white/10 bg-white/5"><Sparkles size={14} /></div>
              AI Code Generation
            </div>
            <div className="w-1 h-1 rounded-full bg-purple-500"></div>

            <div className="flex items-center gap-3 text-gray-300 text-sm font-medium">
              <div className="p-1.5 rounded-md border border-white/10 bg-white/5"><Code size={14} /></div>
              Export Ready Code
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
