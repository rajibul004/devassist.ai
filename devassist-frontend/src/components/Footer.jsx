export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold">
            DA
          </div>
          <span className="text-white font-semibold">DevAssist AI</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#" className="hover:text-white transition">
            Features
          </a>
          <a href="#" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#" className="hover:text-white transition">
            Docs
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} DevAssist AI
        </p>
      </div>
    </footer>
  );
}
