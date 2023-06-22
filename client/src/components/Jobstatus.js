import React, { useEffect, useState } from "react";
import axios from "axios";

import useAxios from "../utils/useAxios";

import { MdOutlinePendingActions } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import { MdOutlineSchedule } from "react-icons/md";

export default function Jobstatus() {
  const [status, setStatus] = useState({
    pending: 0,
    interview: 0,
    declined: 0,
  });
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

  const [res, error] = useAxios({
    url: "/jobs",
    method: "get",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDg5ZDJjYjlhMjgyNDE1OGFhODUwNjgiLCJuYW1lIjoiaG5pZGEiLCJpYXQiOjE2ODczMDI5MzQsImV4cCI6MTY4OTg5NDkzNH0.1Hm91dCJDAn73CIOAqHZWEHnzGIZ1zXYyRU9FGqbutA",
    },
    params: { limit: 1000 },
  });

  useEffect(() => {
    if (res && res.data) {
      const newStatus = { pending: 0, interview: 0, declined: 0 };
      res.data.jobs.forEach((job) => {
        switch (job.status) {
          case "pending":
            newStatus.pending += 1;
            break;
          case "interview":
            newStatus.interview += 1;
            break;
          case "declined":
            newStatus.declined += 1;
            break;
          default:
            break;
        }
      });
      setStatus(newStatus);
    }
  }, [res]);

  return (
    <ul className="relative flex w-full justify-center gap-4">
      {data.map((item, i) => (
        <li
          key={i}
          className={`flex h-44 w-[418px] flex-col flex-wrap items-center justify-center gap-3 rounded border-b-4 ${item.border} bg-white `}
        >
          <div className={`flex w-full justify-between px-8 ${item.color} `}>
            <h1 className="text-5xl">{item.number}</h1>
            <div
              className={`flex h-14 w-16 items-center justify-center rounded ${item.bg}`}
            >
              <div className="text-3xl">{item.icon}</div>
            </div>
          </div>
          <div className="flex w-full justify-start pl-8">
            <h2 className="text-xl">{item.text}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
