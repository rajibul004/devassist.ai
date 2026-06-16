import { Code2, Rocket, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function UnderDevelopment() {
  return (
    <main
      className="
      min-h-screen
      bg-[#020617]
      text-white
      flex
      items-center
      justify-center
      px-6
      pt-28
      "
    >
      <div
        className="
        max-w-2xl
        text-center
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-10
        shadow-2xl
        "
      >
        <div
          className="
          mx-auto
          w-20
          h-20
          rounded-full
          bg-violet-500/10
          flex
          items-center
          justify-center
          mb-6
          "
        >
          <Wrench size={40} className="text-violet-400 animate-pulse" />
        </div>

        <h1
          className="
          text-4xl
          md:text-5xl
          font-bold
          "
        >
          Under Development
        </h1>

        <p
          className="
          text-zinc-400
          mt-5
          leading-7
          "
        >
          We are building something amazing. This feature is currently in
          progress and will be available soon.
        </p>

        <div
          className="
          flex
          justify-center
          gap-4
          mt-8
          "
        >
          <div className="flex gap-2 text-violet-300">
            <Code2 />
            Coding
          </div>

          <div className="flex gap-2 text-violet-300">
            <Rocket />
            Launching Soon
          </div>
        </div>

        <Link
          to="/"
          className="
          inline-block
          mt-10
          px-6
          py-3
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-indigo-600
          hover:scale-105
          transition
          "
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
