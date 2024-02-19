import { Outlet } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import { Analytics } from "@vercel/analytics/react";
export default function App() {
  return (
    <div className="bg-gradient-to-tl from-slate-800 to-slate-700 h-screen w-screen text-white">
      <Analytics />
      <Navbar />
      <Outlet />
    </div>
  );
}
