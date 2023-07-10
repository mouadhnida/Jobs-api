import React, { useEffect, useState } from "react";

import useAxios from "../hooks/useAxios";

import { MdOutlinePendingActions } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import { MdOutlineSchedule } from "react-icons/md";

export default function Jobstatus() {
  const [status, setStatus] = useState({
    pending: 0,
    interview: 0,
    declined: 0,
  });
  const token = localStorage.getItem("token");

  const data = [
    {
      text: "Pending Applications",
      icon: <MdOutlinePendingActions />,
      color: "text-yellow-500",
      bg: "bg-amber-100",
      border: "border-yellow-500",
      number: status.pending || 0,
    },
    {
      text: "Interviews Scheduled",
      icon: <MdOutlineSchedule />,
      color: "text-indigo-500",
      bg: "bg-indigo-100",
      border: "border-indigo-500",
      number: status.interview || 0,
    },
    {
      text: "Jobs Declined",
      icon: <VscError />,
      color: "text-red-500",
      bg: "bg-red-100",
      border: "border-red-500",
      number: status.declined || 0,
    },
  ];

  const [res] = useAxios({
    url: "https://jobhub-juyq.onrender.com/api/v1jobs/stats",
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    if (res && res.data) {
      setStatus(res.data?.defaultStats);
    }
  }, [res]);

  return (
    <ul className="relative flex flex-wrap justify-center w-full gap-4 px-4">
      {data.map((item, i) => (
        <li
          key={i}
          className={`flex h-44 w-[418px] min-w-[50px] flex-col flex-wrap items-center justify-center gap-3 rounded border-b-4 ${item.border} bg-white `}
        >
          <div className={`flex w-full justify-between px-8  ${item.color} `}>
            <h1 className="text-5xl">{item.number}</h1>
            <div
              className={`flex h-14 w-16 items-center justify-center rounded ${item.bg}`}
            >
              <div className="text-3xl">{item.icon}</div>
            </div>
          </div>
          <div className="flex justify-start w-full pl-8">
            <h2 className="text-xl">{item.text}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
