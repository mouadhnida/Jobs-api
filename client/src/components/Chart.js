import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import useAxios from "../utils/useAxios";

export default function Chart() {
  const [data, setData] = useState({});

  const [res, error] = useAxios({
    url: "/jobs/stats",
    method: "get",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDg5ZDJjYjlhMjgyNDE1OGFhODUwNjgiLCJuYW1lIjoiaG5pZGEiLCJpYXQiOjE2ODczMDI5MzQsImV4cCI6MTY4OTg5NDkzNH0.1Hm91dCJDAn73CIOAqHZWEHnzGIZ1zXYyRU9FGqbutA",
    },
  });

  useEffect(() => {
    if (res && res.data) {
      console.log(res.data?.monthlyApplications);
      setData(res.data?.monthlyApplications);
    }
  }, [res]);

  return (
    <div className="relative flex w-full flex-col items-center justify-around gap-10 pt-20">
      <div className="flex flex-col items-center gap-3">
        <p className="text-2xl">Monthly Applications</p>
        <button className="text-xl text-main">Area Chart</button>
      </div>
      <ResponsiveContainer width="100%" height={300} className="mr-10">
        <BarChart width={1000} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="count" />
          <Bar dataKey="count" fill="#2E8A99" barSize={80} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
