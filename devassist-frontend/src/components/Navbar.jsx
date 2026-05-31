import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <nav className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-violet-500 rounded-full blur-md opacity-60" />
          </div>

          <span className="text-white text-lg font-semibold tracking-tight">
            DevAssist
            <span className="text-violet-400"> AI</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Features", "Platform", "Pricing", "Docs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-zinc-400 hover:text-white transition duration-300 group"
            >
              {item}

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-violet-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden sm:block text-zinc-400 hover:text-white transition"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-violet-500/25"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
