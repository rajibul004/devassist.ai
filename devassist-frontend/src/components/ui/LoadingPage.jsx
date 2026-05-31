import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/chats");
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="text-center">
        <RingLoader color="#8b5cf6" size={80} />

        <h2 className="mt-8 text-2xl font-semibold text-white">
          Loading DevAssist
        </h2>

        <p className="mt-2 text-slate-400">
          Preparing your workspace...
        </p>
      </div>
    </div>
  );
}