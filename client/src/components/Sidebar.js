import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoStatsChart } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

function Sidebar() {
  const location = useLocation();
  const lis = [
    { name: "Stats", link: "/", icon: <IoStatsChart /> },
    { name: "All Jobs", link: "/all-jobs", icon: <FaSearch /> },
    { name: "Add Job", link: "/add-job", icon: <BiAddToQueue /> },
    { name: "Profile", link: "/profile", icon: <ImProfile /> },
  ];

  return (
    <ul className="mt-28 flex h-60 w-full flex-col justify-between text-lg text-slate-500">
      {lis.map((li, i) => {
        const isActive = li.link === location.pathname;
        return (
          <li className="group/sidebar h-1/4" key={i}>
            <Link to={li.link}>
              <div className="flex h-full w-full items-center pl-10 transition-all duration-500 group-hover/sidebar:bg-slate-100 group-hover/sidebar:pl-14">
                <div
                  className={` ${
                    isActive === true ? "text-main" : ""
                  } mr-4 h-6 w-6 transition-all duration-500 group-hover/sidebar:text-main`}
                >
                  {li.icon}
                </div>
                <span
                  className={`group-hover/sidebar:text-black ${
                    isActive === true ? "!text-black" : ""
                  }`}
                >
                  {li.name}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Sidebar;
