import React, { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../context/MenuProvider";
import { FaAlignLeft } from "react-icons/fa";
import LogoutButton from "./LogoutButton";

function Nav() {
  const [isDropDown, setDropDown] = useState(false);
  const [menu, setMenu] = useMenu();
  const navigate = useNavigate();

  const handleDropDown = () => {
    setDropDown(!isDropDown);
  };
  const handleCheck = () => {
    setMenu(!menu);
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/landing");
  };
  return (
    <div className="fixed z-40 col-span-12 flex h-24 w-full items-center justify-between border border-b-slate-300 bg-white px-8 m-sm:px-2">
      <input
        type="checkbox"
        id="menu"
        className="hidden"
        checked={menu}
        onChange={handleCheck}
      />
      <label
        htmlFor="menu"
        className="z-50 hidden cursor-pointer text-3xl text-main m-lg:block"
      >
        <FaAlignLeft />
      </label>
      <div className="flex items-center font-Inter text-2xl font-bold m-md:text-lg">
        <span className="w-12 rounded-lg bg-main text-center text-5xl text-white m-md:w-8 m-md:text-2xl">
          J
        </span>
        <h1 className="pl-4 tracking-widest text-main m-md:pl-2 m-lg:pl-1">
          JobHub
        </h1>
      </div>
      <h1 className="text-3xl m-lg:hidden">Dashboard</h1>
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
