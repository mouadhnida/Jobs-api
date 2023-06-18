import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";

function SharedLayout() {
  return (
    <div className="relative grid h-screen w-full grid-cols-[250px_100%] grid-rows-[96px_100%]">
      <div className="col-span-10">
        <Nav />
      </div>

      <div className="w-[250px] fixed">
        <Sidebar />
      </div>
      <div className="col-start-2 border">
        <Outlet />
      </div>
    </div>
  );
}

export default SharedLayout;
