import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useMenu } from "../context/MenuProvider";
import { IoStatsChart } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

export default function Modal() {
  const [menu, setMenu] = useMenu();
  const location = useLocation();
  const lis = [
    { name: "Stats", link: "/", icon: <IoStatsChart /> },
    { name: "All Jobs", link: "/all-jobs", icon: <FaSearch /> },
    { name: "Add Job", link: "/add-job", icon: <BiAddToQueue /> },
    { name: "Profile", link: "/profile", icon: <ImProfile /> },
  ];
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-3xl">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*body*/}
            <div className="relative flex-auto py-6">
              <ul className="flex h-80 w-80 flex-col justify-between text-lg text-slate-500">
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
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
              <button
                className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={() => setMenu(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
