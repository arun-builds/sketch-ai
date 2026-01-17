"use client";

import Link from "next/link";
import { PenTool } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
        
        {/* 1. Brand / Logo */}
        <div className="lg:col-span-2 flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-3 text-white text-3xl font-bold">
            <div className="p-2 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 shadow-lg shadow-purple-600/50">
              <PenTool className="w-6 h-6 text-white" />
            </div>
            Sketch AI
          </Link>
          <p className="text-gray-400 text-sm max-w-xs">
            Transform your UI sketches into production-ready code with the power of AI. Draw, generate, export.
          </p>
          <p className="text-gray-500 text-xs mt-4">&copy; {new Date().getFullYear()} Sketch AI. All rights reserved.</p>
        </div>

        {/* 2. Product Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-gray-200 font-semibold mb-2">Product</h4>
          <Link href="/workspace/sketch" className="text-gray-400 hover:text-white transition-colors text-sm">Canvas</Link>
          <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</Link>
          <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How it Works</Link>
          <Link href="#use-cases" className="text-gray-400 hover:text-white transition-colors text-sm">Use Cases</Link>
        </div>

        {/* 3. Legal Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-gray-200 font-semibold mb-2">Legal</h4>
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
          <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
        </div>

        {/* 4. Connect */}
        <div className="flex flex-col gap-3">
          <h4 className="text-gray-200 font-semibold mb-2">Connect</h4>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub</Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter (X)</Link>
          <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Discord</Link>
        </div>
      </div>
    </footer>
  );
}
