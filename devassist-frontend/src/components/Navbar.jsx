import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    checkLogin();

    window.addEventListener("authChange", checkLogin);

    return () => window.removeEventListener("authChange", checkLogin);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);

    navigate("/login");
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <nav className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse" />

          <span className="text-white text-lg font-semibold">
            DevAssist
            <span className="text-violet-400"> AI</span>
          </span>
        </Link>

        {/* Links */}

        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Features", path: "/" },
            { name: "Platform", path: "/" },
            { name: "Pricing", path: "/" },
            { name: "Developer", path: "/developer" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-zinc-400 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login dynamic */}

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Link to="/chats" className="text-zinc-300 hover:text-white">
                Chat
              </Link>

              <button
                onClick={logout}
                className="
                px-5 py-2.5
                rounded-xl
                bg-red-600
                text-white
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-zinc-400 hover:text-white">
                Sign In
              </Link>

              <Link
                to="/signup"
                className="
                px-5 py-2.5
                rounded-xl
                bg-gradient-to-r 
                from-violet-600 
                to-indigo-600 
                text-white
                "
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
