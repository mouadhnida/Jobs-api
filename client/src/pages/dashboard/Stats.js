import React from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { VscError } from "react-icons/vsc";
import { MdOutlineSchedule } from "react-icons/md";

function Stats() {
  const data = [
    {
      text: "Pending Applications",
      icon: <MdOutlinePendingActions />,
      color: "text-yellow-500",
      bg: "bg-amber-100",
      border: "border-yellow-500",
    },
    {
      text: "Interviews Scheduled",
      icon: <MdOutlineSchedule />,
      color: "text-indigo-500",
      bg: "bg-indigo-100",
      border: "border-indigo-500",
    },
    {
      text: "Jobs Declined",
      icon: <VscError />,
      color: "text-red-500",
      bg: "bg-red-100",
      border: "border-red-500",
    },
  ];
  return (
    <div className="mt-7 h-full">
      <ul className="relative flex w-full justify-center gap-4">
        {data.map((item, i) => (
          <li
            key={i}
            className={`flex h-44 w-[418px] flex-col flex-wrap items-center justify-center gap-3 rounded border-b-4 ${item.border} bg-white `}
          >
            <div className={`flex w-full justify-between px-8 ${item.color} `}>
              <h1 className="text-5xl">0</h1>
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
      <div>
        <p>Monthly Applications</p>
        <button>Area Chart</button>
        <div></div>
      </div>
    </div>
  );
}

export default Stats;
