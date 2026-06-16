import { Routes, Route } from "react-router-dom";

import SignupForm from "./components/signup-form";
import LoginForm from "./components/login-form";
import Chats from "./components/chats";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LoadingPage from "./components/ui/LoadingPage";
import Developer from "./components/Developer.jsx";
import UnderDevelopment from "./components/UnderDevelopment.jsx";

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
      <Route
        path="/chats"
        element=<>
          <Navbar />
          <Chats />
        </>
      />
      <Route
        path="/developer"
        element=<>
          <Navbar />
          <Developer />
        </>
      />
      <Route
        path="/features"
        element=<>
          <Navbar />
          <UnderDevelopment />
        </>
      />
      <Route
        path="/platform"
        element=<>
          <Navbar />
          <UnderDevelopment />
        </>
      />
      <Route
        path="/pricing"
        element=<>
          <Navbar />
          <UnderDevelopment />
        </>
      />
    </Routes>
  );
}
