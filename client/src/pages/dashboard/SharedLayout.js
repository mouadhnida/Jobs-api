import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";

function SharedLayout() {
  return (
    <div className="relative grid h-screen w-full grid-cols-[250px_1fr] grid-rows-[96px_1fr]">
      <div className="col-span-10">
        <Nav />
      </div>

      <div className="fixed w-[250px] m-lg:hidden">
        <Sidebar />
      </div>
      <div className="relative col-start-2 border-l border-l-slate-300  bg-slate-100 m-lg:col-start-1 m-lg:col-end-13">
        <Outlet />
      </div>
    </div>
  );
}

export default SharedLayout;
