import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import useAxios from "../utils/useAxios";

export default function Chart() {
  // const [data, setData] = useState({});
  const [barChart, setBarChart] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setBarChart(!barChart);
  };

  // const [res, error] = useAxios({
  //   url: "/jobs/stats",
  //   method: "get",
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDg5ZDJjYjlhMjgyNDE1OGFhODUwNjgiLCJuYW1lIjoiaG5pZGEiLCJpYXQiOjE2ODczMDI5MzQsImV4cCI6MTY4OTg5NDkzNH0.1Hm91dCJDAn73CIOAqHZWEHnzGIZ1zXYyRU9FGqbutA",
  //   },
  // });

  // useEffect(() => {
  //   if (res && res.data) {
  //     console.log(res.data?.monthlyApplications);
  //     setData(res.data?.monthlyApplications);
  //   }
  // }, [res]);

  const data = [
    { date: "Jun 2023", count: 2 },
    { date: "Jul 2023", count: 0 },
    { date: "Aug 2023", count: 20 },
    { date: "Sep 2023", count: 13 },
    { date: "Oct 2023", count: 24 },
    { date: "Nov 2023", count: 9 },
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-around gap-10 pt-20">
      <div className="flex flex-col items-center gap-3">
        <p className="text-2xl">Monthly Applications</p>
        <button className="text-xl text-main" onClick={handleClick}>
          {barChart === true ? "Area Chart" : "Bar Chart"}
        </button>
      </div>
      {barChart === true && (
        <ResponsiveContainer width="90%" height={300} className="mr-10">
          <BarChart width={1000} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey="count" />
            <Tooltip />
            <Bar dataKey="count" fill="#2E8A99" barSize={80} />
          </BarChart>
        </ResponsiveContainer>
      )}
      {barChart === false && (
        <ResponsiveContainer width="90%" height={300} className="mr-10">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="1">
                <stop offset="5%" stopColor="#2E8A99" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#2E8A99" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis dataKey="count" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#2E8A99"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
