import React from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";

function Nav() {
  return (
    <div className=" fixed z-50 col-span-12 flex h-24 w-full items-center justify-between bg-white px-8">
      <div className="flex items-center font-Inter text-2xl font-bold">
        <span className="w-12 rounded-lg bg-main text-center text-5xl text-white">
          J
        </span>
        <h1 className=" pl-4 tracking-widest text-main">JobHub</h1>
      </div>
      <h1 className=" text-3xl">Dashboard</h1>
      <div>
        <button className="flex h-8 w-44 items-center justify-around rounded-md border bg-main text-base text-white  drop-shadow-2xl">
          {<FaUserCircle />} Mouadhnida {<FaCaretDown />}
        </button>
      </div>
    </div>
  );
}

export default Nav;
