import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";

function SharedLayout() {
  return (
    <div className="relative grid h-screen w-full grid-cols-[250px_1fr] grid-rows-[96px_100%]">
      <div className="col-span-10">
        <Nav />
      </div>

      <div className="fixed w-[250px]">
        <Sidebar />
      </div>
      <div className="col-start-2 border border-slate-300 bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
}

export default SharedLayout;
