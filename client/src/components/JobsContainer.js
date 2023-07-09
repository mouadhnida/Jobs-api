import React, { useEffect, useState } from "react";
import { useFilter } from "../context/FilterProvider";
import axios from "axios";
import { FaLocationArrow, FaCalendar } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Job from "./Job";
import moment from "moment";

export default function JobsContainer() {
  const [filter, setFilter] = useFilter();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getJobs = async () => {
      try {
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
        setLoading(true);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    };
    getJobs();
  }, [filter]);

  return (
    <div className="w-11/12">
      {loading && <p>loading...</p>}
      <div className="text-xl font-bold">{data?.totalJobs} Jobs Found</div>
      <ul className="grid grid-cols-2 gap-4">
        {data?.jobs.map((job) => {
          return <Job job={job} />;
        })}
      </ul>
    </div>
  );
}
