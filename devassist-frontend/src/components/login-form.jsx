import { useState } from "react";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", data.token);

      localStorage.setItem("email", data.email);

      localStorage.setItem("role", data.role);

      setTimeout(() => {
        if (data.role === "ROLE_ADMIN") {
          navigate("/admin");
        } else {
          navigate("/chats");
        }
      }, 2000);
    } catch (error) {
      console.log("Login Error:", error);
    }
  };
  return (
    <div className="min-h-screen bg-[#050505] flex justify-center items-center">
      <div className="w-[75vw] h-[80vh]">
        <div
          className="
      relative
      h-full
      rounded-[40px]
      border border-white/10
      bg-[#08090D]
      overflow-hidden
    "
        >
          ...
          {/* Glow Effects */}
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px] animate-float" />
          <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px] animate-float-reverse" />
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          {/* Content */}
          <div className="relative z-10 h-full grid lg:grid-cols-[45%_55%]">
            {/* Left Side */}
            <div className="hidden lg:flex flex-col justify-center px-20">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-xs text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  DevAssist AI
                </div>

                <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white leading-tight">
                  Debug Smarter.
                  <br />
                  Build Faster.
                </h1>

                <p className="mt-6 text-slate-400 text-lg leading-8">
                  Analyze errors, understand root causes, and resolve issues
                  faster with AI assistance.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center p-8">
              <div
                className="
                w-full
                max-w-[460px]
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                p-6
                shadow-[0_20px_80px_rgba(0,0,0,.5)]
              "
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold text-white">
                    Welcome back
                  </h2>

                  <p className="mt-2 text-slate-400">
                    Sign in to continue using DevAssist
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400">Email</label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="
                      mt-2
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      text-white
                      placeholder:text-slate-500
                      outline-none
                      focus:border-violet-500
                    "
                    />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400">Password</label>

                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="
                      mt-2
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      text-white
                      placeholder:text-slate-500
                      outline-none
                      focus:border-violet-500
                    "
                    />
                  </div>
                  <button
                    type="submit"
                    className="
                    h-12
                    w-full
                    rounded-xl
                    bg-violet-600
                    hover:bg-violet-500
                    transition-all
                    text-white
                    font-medium
                  "
                  >
                    Sign In
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-500">
                    Don't have an account?{" "}
                    <a
                      href="/signup"
                      className="text-violet-400 hover:text-violet-300"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
