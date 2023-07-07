import React, { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import axios from "axios";

function Nav() {
  const [isDropDown, setDropDown] = useState(false);
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  console.log(cookies.token);

  const handleDropDown = () => {
    setDropDown(!isDropDown);
  };

  const handleLogout = async () => {
    const logout = await axios.get("/auth/logout");
    console.log(logout);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/landing");
  };
  return (
    <div className="fixed z-50 flex items-center justify-between w-full h-24 col-span-12 px-8 bg-white border border-b-slate-300">
      <div className="flex items-center text-2xl font-bold font-Inter m-md:text-lg">
        <span className="w-12 text-5xl text-center text-white rounded-lg bg-main m-md:w-8 m-md:text-2xl">
          J
        </span>
        <h1 className="pl-4 tracking-widest text-main m-md:pl-2">JobHub</h1>
      </div>
      <h1 className="text-3xl m-md:hidden">Dashboard</h1>
      <div className="relative">
        <button
          onClick={handleDropDown}
          className="flex items-center justify-around h-8 text-base text-white border rounded-md w-44 bg-main drop-shadow-2xl hover:bg-main2"
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
