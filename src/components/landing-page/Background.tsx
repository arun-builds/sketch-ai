import { Plus } from "lucide-react";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#030014] overflow-hidden">
      
      {/* 1. The Purple Splash (Top-Left Corner) */}
      {/* We use a massive circle with a heavy blur to create the soft gradient effect */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-purple-700/20 blur-[120px] mix-blend-screen opacity-50" />
      
      {/* 1.1 Secondary Splash (Center/Bottom for balance - optional but looks good) */}
      <div className="absolute top-[40%] left-[40%] w-[50vw] h-[50vw] rounded-full bg-indigo-800/10 blur-[100px] opacity-30" />

      {/* 2. The Star Texture (Tiny dots everywhere) */}
      {/* This uses a CSS pattern to generate distinct stars without an image file */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 3. The "Hero" Stars (The brighter cross-shapes seen in the image) */}
      {/* We manually position a few of these to mimic the aesthetic */}
      
      {/* Star 1: Near the Pricing Pill */}
      <div className="absolute top-20 left-[20%] animate-pulse">
        <Plus className="w-6 h-6 text-purple-300 opacity-60" strokeWidth={1} />
      </div>

      {/* Star 2: Right side */}
      <div className="absolute top-40 right-[15%] animate-pulse delay-700">
        <Plus className="w-4 h-4 text-indigo-300 opacity-40" strokeWidth={1} />
      </div>

      {/* Star 3: Bottom Left */}
      <div className="absolute bottom-32 left-[30%] animate-pulse delay-1000">
        <Plus className="w-8 h-8 text-purple-200 opacity-20" strokeWidth={0.5} />
      </div>

      {/* Star 4: Random small one */}
      <div className="absolute top-1/2 right-[30%]">
        <Plus className="w-3 h-3 text-white opacity-20" strokeWidth={2} />
      </div>

    </div>
  );
}