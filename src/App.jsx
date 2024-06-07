import React from "react";
import { FaHome, FaRegCalendarCheck, FaRegUserCircle } from "react-icons/fa";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
const App = () => {
  return (
    <div className="p-2 h-screen bg-[#090909]">
      <div className="flex bg-[#090909] h-full rounded-3xl shadow-2xl shadow-purple-500/75 p-2">
        <Sidebar className="shadow-2xl shadow-cyan-500/75" />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
