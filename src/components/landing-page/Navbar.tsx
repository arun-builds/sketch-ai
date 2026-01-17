"use client";

import Link from "next/link";
import { PenTool, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Use Cases", href: "#use-cases" },
  { name: "Docs", href: "#" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
      {/* Left Side: Logo + Navigation Pills */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <PenTool className="w-5 h-5 text-purple-600" />
          </div>
          <span className="text-white font-bold text-xl hidden sm:block">Sketch AI</span>
        </Link>

        {/* Nav Links Container - The "Glass" Pill */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full shadow-lg shadow-purple-900/20 ml-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Side: CTA */}
      <Link href="/workspace/sketch">
        <Button className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 border border-white/20 text-white px-6">
          Start Sketching <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </Link>
    </nav>
  );
}
