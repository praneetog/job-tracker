import React from "react";
import { FaHome, FaRegCalendarCheck, FaRegUserCircle } from "react-icons/fa";
import tracker from "C:/Users/avnee/OneDrive/Desktop/job-tracker/src/assets/tracker.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-[#090909] text-white p-2 items-center">
      <div className="flex w-full pt-3 pb-4">
        <img
          className="max-w-[80px] pt-2 pl-4 max-h-[80px] object-cover"
          src={tracker}
          alt=""
        />
        <div className="mb-6 h-full flex flex-col justify-center">
          <div className="text-3xl">Job Hunt</div>
          <div className="text-[#DAB6FC]">Career Devlopment</div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center">
        <div className="p-4 flex hover:transition-all hover:bg-gray-600/25 duration-300 shadow-md w-full m-1 rounded-2xl">
          <FaHome className="mr-2 text-[#DAB6FC] text-2xl" /> Home
        </div>
        <div className="p-4 flex hover:transition-all hover:bg-gray-600/25 duration-300 shadow-md w-full m-1 rounded-2xl">
          <FaRegCalendarCheck className="mr-2 text-[#DAB6FC] text-2xl" /> Job
          Tracker
        </div>
        <div className="p-4 flex hover:transition-all hover:bg-gray-600/25 duration-300 shadow-md w-full m-1 rounded-2xl">
          <FaRegUserCircle className="mr-2 text-[#DAB6FC] text-2xl" /> Resources
        </div>
        {/* Add other navigation items here */}
      </div>
    </div>
  );
};

export default Sidebar;
