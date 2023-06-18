import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

function Sidebar() {
  const location = useLocation()
  const lis = [{name:"Stats", link: "/", icon: <IoStatsChart/> },
               {name:"All Jobs", link: "/all-jobs", icon: <FaSearch/>}, 
               {name:"Add Job", link: "/add-job", icon: <BiAddToQueue/>}, 
               {name:"Profile", link: "/profile", icon: <ImProfile/> }];
  
            
  return (
    <ul className="w-full mt-28 text-slate-500 h-60 text-lg flex flex-col justify-between">
      {lis.map((li, i) => {
        const isActive = li.link === location.pathname;
        return (
        <li className="group/sidebar h-1/4" key={i}>
        <Link to={li.link}>
          <div className="flex items-center w-full h-full pl-10 group-hover/sidebar:bg-slate-100 group-hover/sidebar:pl-14 transition-all duration-500">
            <div className={` ${isActive === true ? 'text-main' : ""} mr-4 w-6 h-6 group-hover/sidebar:text-main transition-all duration-500`}>{li.icon}</div>
            <span className={`group-hover/sidebar:text-black ${isActive === true ? '!text-black' : ''}`}>{li.name}</span>
          </div>
        </Link>
        </li>)
      }) 
      }
    </ul>
  )
}

export default Sidebar;
