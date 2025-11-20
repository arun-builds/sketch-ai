"use client";

import Link from "next/link";
import { Sparkles, Mail } from "lucide-react";
import { Input } from "@/components/ui/input"; // Assuming you have shadcn input
import { Button } from "@/components/ui/button"; // Assuming you have shadcn button

export function Footer() {
  return (
    <footer className="relative  py-16 px-4 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
        
        {/* 1. Brand / Logo */}
        <div className="lg:col-span-2 flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-3 text-white text-3xl font-bold">
            <div className="p-2 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 shadow-lg shadow-purple-600/50">
              <Sparkles className="w-6 h-6 text-white" fill="white" />
            </div>
            VidGenie
          </Link>
          <p className="text-gray-400 text-sm max-w-xs">
            Your AI-powered video creation platform. Generate stunning short videos in seconds.
          </p>
          <p className="text-gray-500 text-xs mt-4">&copy; {new Date().getFullYear()} VidGenie. All rights reserved.</p>
        </div>

        {/* 2. Company Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-gray-200 font-semibold mb-2">Company</h4>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link>
          <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link>
          <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link>
          <Link href="/updates" className="text-gray-400 hover:text-white transition-colors text-sm">Updates</Link>
          <Link href="/status" className="text-gray-400 hover:text-white transition-colors text-sm">Status</Link>
        </div>

        {/* 3. Legal Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-gray-200 font-semibold mb-2">Legal</h4>
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
          <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
          <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link>
        </div>

        {/* 4. Social & Newsletter */}
        <div className="flex flex-col gap-3">
          <h4 className="text-gray-200 font-semibold mb-2">Connect</h4>
          <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Discord</Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Instagram</Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter (X)</Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</Link>

          {/* Newsletter Signup */}
          {/* <div className="mt-6">
            <h4 className="text-gray-200 font-semibold mb-3">Stay Updated</h4>
            <div className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-[#1E162E] border-[#372F46] text-gray-200 placeholder:text-gray-500 rounded-lg h-10 px-4 text-sm focus:ring-purple-500 focus:border-purple-500"
              />
              <Button
                size="icon"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg h-10 w-10 flex items-center justify-center"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}