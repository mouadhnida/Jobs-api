import React, { useState } from "react";
import { FaLocationArrow, FaCalendar } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import moment from "moment";

export default function Job({ job }) {
  return (
    <li
      key={job.id}
      className="mt-4 h-64 min-w-[300px] rounded border bg-white drop-shadow"
    >
      <div className="flex h-24 gap-8 border-b border-b-slate-300 px-6 py-4">
        <div className="flex h-16 w-16 items-center justify-center rounded bg-main text-4xl text-white">
          B
        </div>
        <div>
          <p className="mb-1 text-xl">{job.position}</p>
          <p className=" text-slate-400">{job.company}</p>
        </div>
      </div>
      <div className="grid min-h-[10rem] grid-cols-2 gap-x-4 px-6 pt-6">
        <div className="flex items-center gap-3 text-lg">
          <FaLocationArrow className=" text-slate-400" />
          {job.jobLocation}
        </div>
        <div className="flex items-center gap-3 text-lg">
          <FaCalendar className=" text-slate-400" />{" "}
          {moment(job.createdAt).format("MMMM Do YYYY")}
        </div>
        <div className="flex items-center gap-3 text-lg">
          <MdWork className=" text-slate-400" />
          {job.jobType}
        </div>
        <div
          className={`flex h-8 w-[100px] items-center justify-center rounded text-lg ${
            job.status === "pending" ? "bg-amber-100 text-yellow-500" : ""
          } ${
            job.status === "interview" ? "bg-indigo-100 text-indigo-500" : ""
          } ${job.status === "declined" ? "bg-red-100 text-red-500" : ""}`}
        >
          {job.status}
        </div>
        <div className="flex gap-5 text-lg ">
          <button className="flex h-8 w-14 items-center justify-center rounded bg-green-200 text-lg text-green-900 shadow transition-all hover:drop-shadow-lg">
            Edit
          </button>
          <button className="flex h-8 w-20 items-center justify-center rounded bg-red-100 text-lg text-red-900 shadow transition-all hover:drop-shadow-lg">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
