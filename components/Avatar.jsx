import { FaCode, FaMobileAlt, FaLayerGroup } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";

const Avatar = () => {
  return (
    <div className="hidden xl:flex flex-col items-center justify-center w-full h-full max-w-[500px] select-none pointer-events-none">
      {/* Outer subtle glow */}
      <div className="relative w-[340px] h-[340px] flex items-center justify-center">
        {/* Animated concentric rings */}
        <div className="absolute inset-0 rounded-full border border-accent/20 animate-spin-slow" />
        <div className="absolute inset-4 rounded-full border border-white/10" />
        <div className="absolute inset-8 rounded-full border border-accent/15" />

        {/* Central Monogram Glass Card */}
        <div className="relative z-10 w-[220px] h-[220px] rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl shadow-accent/20 flex flex-col items-center justify-center p-6 text-center">
          {/* Monogram Badge */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-accent to-[#ff6b5b] flex items-center justify-center shadow-lg shadow-accent/40 mb-3">
            <span className="text-3xl font-extrabold text-white tracking-tight">AM</span>
          </div>

          <h2 className="text-sm font-bold text-white tracking-wider uppercase mb-1">
            Ahmad Mehmood
          </h2>
          <p className="text-[11px] text-white/70 font-light tracking-wide">
            Full-Stack &amp; Mobile
          </p>

          {/* Active status indicator */}
          <div className="mt-3 flex items-center gap-x-1.5 bg-emerald-500/10 border border-emerald-500/30 px-3 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-emerald-300 font-medium tracking-wide">
              Engineering Active
            </span>
          </div>
        </div>

        {/* Floating Satellite Badges */}
        {/* Top-Right: Next.js */}
        <div className="absolute top-2 right-4 bg-primary/90 border border-white/15 px-3 py-1.5 rounded-xl flex items-center gap-x-2 shadow-xl backdrop-blur-sm">
          <SiNextdotjs className="text-sm text-white" />
          <span className="text-xs font-semibold text-white/90">Next.js</span>
        </div>

        {/* Bottom-Left: React Native */}
        <div className="absolute bottom-4 left-2 bg-primary/90 border border-white/15 px-3 py-1.5 rounded-xl flex items-center gap-x-2 shadow-xl backdrop-blur-sm">
          <SiReact className="text-sm text-[#61DAFB]" />
          <span className="text-xs font-semibold text-white/90">React Native</span>
        </div>

        {/* Top-Left: TypeScript */}
        <div className="absolute top-6 left-2 bg-primary/90 border border-white/15 px-3 py-1.5 rounded-xl flex items-center gap-x-2 shadow-xl backdrop-blur-sm">
          <SiTypescript className="text-sm text-[#3178C6]" />
          <span className="text-xs font-semibold text-white/90">TypeScript</span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
