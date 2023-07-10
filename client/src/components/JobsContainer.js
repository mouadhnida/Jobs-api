import React, { useEffect, useState } from "react";
import { useFilter } from "../context/FilterProvider";
import axios from "axios";
import Job from "./Job";

export default function JobsContainer() {
  const [filter, setFilter] = useFilter();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getJobs();
  }, [filter]);

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
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`/jobs/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getJobs();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-11/12">
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <div className="text-xl font-bold">{data?.totalJobs} Jobs Found</div>
          <ul className="grid grid-cols-2 gap-4 m-lg:grid-cols-1">
            {data?.jobs.map((job) => {
              return <Job job={job} key={job._id} onDelete={handleDelete} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
