import React from "react";
import { Link } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

function Sidebar() {
  return (
    <ul className="w-full mt-32 text-slate-500 h-60 text-lg flex flex-col justify-between">
      <li className="group/sidebar h-1/4">
        <div className="flex items-center w-full h-full pl-10 group-hover/sidebar:bg-slate-100 group-hover/sidebar:pl-14 transition-all duration-500">
          <IoStatsChart className="mr-4 w-6 h-6 group-hover/sidebar:text-main transition-all duration-500" />
          <span className="group-hover/sidebar:text-black"> Stats</span>
        </div>
      </li>
      <li className="group/sidebar h-1/4">
        <div className="flex items-center w-full h-full pl-10 group-hover/sidebar:bg-slate-100 group-hover/sidebar:pl-14 transition-all duration-500">
          <FaSearch className="mr-4 w-6 h-6 group-hover/sidebar:text-main transition-all duration-500" />
          <span className="group-hover/sidebar:text-black"> All Jobs</span>
        </div>
      </li>
      <li className="group/sidebar h-1/4">
        <div className="flex items-center w-full h-full pl-10 group-hover/sidebar:bg-slate-100 group-hover/sidebar:pl-14 transition-all duration-500">
          <BiAddToQueue className="mr-4 w-6 h-6 group-hover/sidebar:text-main transition-all duration-500" />
          <span className="group-hover/sidebar:text-black"> Add Job</span>
        </div>
      </li>
      <li className="group/sidebar h-1/4">
        <div className="flex items-center w-full h-full pl-10 group-hover/sidebar:bg-slate-100 group-hover/sidebar:pl-14 transition-all duration-500">
          <ImProfile className="mr-4 w-6 h-6 group-hover/sidebar:text-main transition-all duration-500" />
          <span className="group-hover/sidebar:text-black"> Profile</span>
        </div>
      </li>
    </ul>
  );
}

export default Sidebar;
