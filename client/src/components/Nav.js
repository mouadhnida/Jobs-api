import React, { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function Nav() {
  const [isDropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const handleDropDown = () => {
    setDropDown(!isDropDown);
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/landing");
  };
  return (
    <div className="fixed z-50 col-span-12 flex h-24 w-full items-center justify-between border border-b-slate-300 bg-white px-8">
      <div className="flex items-center font-Inter text-2xl font-bold m-md:text-lg">
        <span className="w-12 rounded-lg bg-main text-center text-5xl text-white m-md:w-8 m-md:text-2xl">
          J
        </span>
        <h1 className="pl-4 tracking-widest text-main m-md:pl-2">JobHub</h1>
      </div>
      <h1 className="text-3xl m-md:hidden">Dashboard</h1>
      <div className="relative">
        <button
          onClick={handleDropDown}
          className="flex h-8 w-44 items-center justify-around rounded-md border bg-main text-base text-white shadow-md hover:bg-main2"
        >
          {<FaUserCircle />} {localStorage.getItem("name")}
          {<FaCaretDown />}
        </button>
        {isDropDown && <LogoutButton onClick={handleLogout} />}
      </div>
    </div>
  );
}

export default Nav;
