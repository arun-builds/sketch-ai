"use client";

import React, { useState } from "react";
import { Tldraw, type Editor } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import {
  Code,
  Eye,
  PenTool,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { toast } from "sonner";
import { blobToBase64 } from "@/lib/blobToBase64";

export default function Page() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("canvas"); // 'canvas' | 'preview' | 'code'
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const [editor, setEditor] = useState<Editor | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);

    if (!editor) {
      setIsGenerating(false);
      return;
    }

    const shapeIds = editor.getCurrentPageShapeIds();

    if (shapeIds.size === 0) {
      toast.error("No shapes found");
      setIsGenerating(false);
      return;
    }

    try {
      // Export the canvas as SVG and convert to blob
      const svg = await editor.getSvg([...shapeIds], {
        background: true,
        padding: 20,
      });

      if (!svg) {
        toast.error("Failed to generate image");
        setIsGenerating(false);
        return;
      }

      // Convert SVG to PNG using canvas
      const svgString = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      const blob = await new Promise<Blob>((resolve, reject) => {
        img.onload = () => {
          canvas.width = img.width * 2;
          canvas.height = img.height * 2;
          ctx?.scale(2, 2);
          ctx?.drawImage(img, 0, 0);
          canvas.toBlob((blob) => {
            if (blob) resolve(blob);
            else reject(new Error("Failed to create blob"));
          }, "image/png");
        };
        img.onerror = reject;
        img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgString)));
      });

      const base64Image = await blobToBase64(blob);

      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ base64Image }),
      });
      const data = await response.json();
      setGeneratedCode(data.code);
      console.log("Response:", data.code);
      setActiveTab("preview");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to generate website");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex w-screen h-screen bg-gray-50 overflow-hidden font-sans">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative">
        {/* Top Navigation Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10">
          {/* Mode Switcher Tabs */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("canvas")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeTab === "canvas"
                  ? "bg-white text-indigo-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <PenTool size={16} />
              Canvas
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              disabled={!generatedCode}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeTab === "preview"
                  ? "bg-white text-indigo-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              <Eye size={16} />
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              disabled={!generatedCode}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeTab === "code"
                  ? "bg-white text-indigo-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            >
              <Code size={16} />
              Code
            </button>
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 hidden md:block">
              Draw your UI then click generate
            </span>
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white font-medium transition-all shadow-md hover:shadow-lg ${
                isGenerating
                  ? "bg-indigo-400 cursor-wait"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {isGenerating ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Generate Website
                </>
              )}
            </button>
          </div>
        </header>

        {/* Dynamic Content Body */}
        <main className="flex-1 relative bg-gray-50 overflow-hidden">
          {/* 1. Canvas Mode */}
          <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
              activeTab === "canvas"
                ? "opacity-100 z-10"
                : "opacity-0 pointer-events-none z-0"
            }`}
          >
            <Tldraw
              persistenceKey="sketch-ai-canvas"
              onMount={(editor) => setEditor(editor)}
            />
          </div>

          {/* 2. Preview Mode */}
          {activeTab === "preview" && (
            <div className="absolute inset-0 z-20 w-full h-full p-8 flex items-center justify-center animate-in fade-in zoom-in-95 duration-200">
              <div className="w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 relative">
                <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 px-3 py-0.5 bg-white rounded text-xs text-gray-400 border border-gray-200 w-64 text-center">
                    localhost:3000
                  </div>
                </div>
                <iframe
                  title="Preview"
                  srcDoc={generatedCode}
                  className="w-full h-[calc(100%-2rem)] border-none"
                  sandbox="allow-scripts"
                />
              </div>
            </div>
          )}

          {/* 3. Code Mode */}
          {activeTab === "code" && (
            <div className="absolute inset-0 z-20 w-full h-full p-8 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
              <div className="w-full h-full bg-[#1e1e1e] rounded-xl shadow-2xl border border-gray-700 flex flex-col">
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#252526]">
                  <span className="text-gray-300 text-sm font-mono">
                    index.html
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generatedCode);
                      toast.success("Copied to clipboard");
                    }}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Copy to Clipboard
                  </button>
                </div>
                <div className="flex-1 overflow-auto p-4 custom-scrollbar">
                  <pre className="text-sm font-mono text-blue-300 leading-relaxed">
                    <code>{generatedCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
