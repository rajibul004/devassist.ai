import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    navigate("/login");
  };

  return (
    <section className="relative min-h-screen bg-[#050816] overflow-hidden flex items-center justify-center px-6">

      {/* Animated Background */}
      <div className="absolute inset-0">

        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>

        {/* Floating Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-slate-300 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          AI Debug Assistant
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-white font-semibold tracking-tight leading-none">
          <span className="block text-4xl md:text-6xl">
            Understand Errors.
          </span>

          <span className="block mt-3 text-4xl md:text-6xl bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Fix Problems Faster.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl mx-auto text-base text-slate-400 leading-7">
          Analyze errors, understand root causes,
          and get actionable solutions in seconds.
        </p>

        {/* Prompt Box */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="glass-box">

            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Paste your error or describe your issue..."
              className="hero-input"
            />

            <button
              onClick={handleSubmit}
              className="hero-btn"
            >
              Analyze
            </button>

          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">

          {[
            "Errors",
            "Logs",
            "Debugging",
            "Root Cause",
            "Analysis"
          ].map((item) => (
            <div
              key={item}
              className="hero-pill"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}