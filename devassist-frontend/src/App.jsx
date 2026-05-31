import { Routes, Route } from "react-router-dom";

import SignupForm from "./components/signup-form";
import LoginForm from "./components/login-form";
import Chats from "./components/chats";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LoadingPage from "./components/ui/LoadingPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
          </>
        }
      />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
}
