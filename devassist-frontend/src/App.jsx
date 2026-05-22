import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/signup-form";
import LoginForm from "./components/login-form";
import Chats from "./components/chats";

function LoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-3xl bg-zinc-900 rounded-2xl p-6 shadow-xl">
        <LoginForm />
      </div>
    </div>
  );
}
function SignupPage() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-zinc-900 rounded-2xl p-6 shadow-xl">
        <SignupForm />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
}
export default App;
