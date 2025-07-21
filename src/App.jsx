import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* toogle menu */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden absolute top-4 left-4 z-20 bg-blue-500 text-white px-3 py-2 rounded"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static z-10 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto transition-transform duration-300
        w-64 md:w-[30%] h-full 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <MainContent />
      </div>
    </div>
  );
}
