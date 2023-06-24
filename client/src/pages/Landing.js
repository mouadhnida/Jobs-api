import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as JobHunt } from "../assets/images/job-hunt.svg";

function Landing() {
  return (
    <div className="grid min-h-screen  w-full grid-cols-2 grid-rows-[86px_1fr] bg-slate-100 pb-5 pl-12">
      <div className="col-span-10 flex w-full items-center font-Inter text-2xl font-bold">
        <span className="w-12 rounded-lg bg-main text-center text-5xl text-white">
          J
        </span>
        <h1 className="pl-4 tracking-widest text-main">JobHub</h1>
      </div>
      <div className="flex flex-col items-center justify-center m-lg:col-span-2 m-lg:items-start">
        <h1 className="text-4xl font-extrabold text-main1 ">
          Welcome <span className="text-main">to JobHub,</span>
        </h1>
        <p className="max-w-[550px] pb-7 pt-7 text-slate-500">
          Your all-in-one job tracking solution. Simplify your job search and
          stay organized with our powerful app. Track your applications, manage
          interview schedules, and monitor the status of each opportunity. With
          Job Hub, you'll never miss a step in your career journey. Take control
          of your job search and land your dream job today.
        </p>
        <button className="flex h-10 w-44 items-center justify-around rounded-md border bg-main text-xl text-white drop-shadow-md">
          <Link to="/register">Login/Register</Link>
        </button>
      </div>
      <div className=" flex justify-center m-lg:hidden">
        <JobHunt className=" h-auto w-2/3" />
      </div>
    </div>
  );
}

export default Landing;
