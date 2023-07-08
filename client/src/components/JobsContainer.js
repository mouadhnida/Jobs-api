import React, { useEffect, useState } from "react";
import { useFilter } from "../context/FilterProvider";
import axios from "axios";

export default function JobsContainer() {
  const [filter, setFilter] = useFilter();
  const [data, setData] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get(
        `/jobs?search=${filter.search}&status=${filter.status}&jobType=${filter.jobType}&sort=${filter.sort}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res && res.data) {
        setData({
          jobs: res.data?.jobs,
          totalJobs: res.data?.totalJobs,
          numOfPages: res.data?.numOfPages,
        });
      }
    };
    getJobs();
  }, [filter]);
  console.log(data);

  return <div>JobsContainer</div>;
}
