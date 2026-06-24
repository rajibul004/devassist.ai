import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signupUser } from "../api/authApi";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      email,
      password,
    };

    console.log("Sending:", payload);

    try {
      const data = await signupUser(payload);

      console.log("Signup success:", data);
      navigate("/login");
    } catch (error) {
      console.log("Signup failed:", error);

      console.log("Server response:", error.response?.data);

      console.log("Status:", error.response?.status);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] flex justify-center items-center">
      <div className="w-[75vw] h-[80vh]">
        <div
          className="
            relative
            h-full
            rounded-[40px]
            border
            border-white/10
            bg-[#08090D]
            overflow-hidden
          "
        >
          {/* Glow Effects */}
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px] animate-float" />

          <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px] animate-float-reverse" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="relative z-10 h-full grid lg:grid-cols-[45%_55%]">
            {/* Left Side */}
            <div className="hidden lg:flex flex-col justify-center px-20">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-xs text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  DevAssist AI
                </div>

                <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white leading-tight">
                  Start Building.
                  <br />
                  Join DevAssist.
                </h1>

                <p className="mt-6 text-slate-400 text-lg leading-8">
                  Create your account and get access to AI-powered debugging,
                  analysis and developer assistance.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center h-full p-8">
              <div
                className="
                  relative
                  w-full
                  max-w-[600px]
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-3xl
                  p-6
                  shadow-[0_20px_80px_rgba(0,0,0,.5)]
                "
              >
                <div className="mb-2">
                  <h2 className="text-3xl font-semibold text-white">
                    Create Account
                  </h2>

                  <p className="mt-2 text-slate-400">
                    Create your DevAssist account
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
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
                        transition-all
                        focus:border-violet-500
                      "
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="text-sm text-slate-400">Password</label>

                    <div className="relative mt-2">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create password"
                        className="
        h-12
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
        px-4
        pr-12
        text-white
        placeholder:text-slate-500
        outline-none
        focus:border-violet-500
      "
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        text-slate-400
        hover:text-white
        transition
      "
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="text-sm text-slate-400">
                      Confirm Password
                    </label>

                    <div className="relative mt-2">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
                        className="
        h-12
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/[0.03]
        px-4
        pr-12
        text-white
        placeholder:text-slate-500
        outline-none
        focus:border-violet-500
      "
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        text-slate-400
        hover:text-white
        transition
      "
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
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
                    Create Account
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-500">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="text-violet-400 hover:text-violet-300"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(40px,-40px); }
        }

        @keyframes floatReverse {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-40px,40px); }
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: floatReverse 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
