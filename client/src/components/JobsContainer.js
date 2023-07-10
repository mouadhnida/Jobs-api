import React, { useEffect, useState } from "react";
import { useFilter } from "../context/FilterProvider";
import axios from "axios";
import Job from "./Job";
import Pagination from "./Pagination";

export default function JobsContainer() {
  const [filter] = useFilter();
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [filter, pageNum]);

  const getJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://jobhub-juyq.onrender.com/jobs?search=${filter.search}&status=${filter.status}&jobType=${filter.jobType}&sort=${filter.sort}&page=${pageNum}`,
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
        setPageNum((prevPageNum) =>
          Math.min(prevPageNum, res.data?.numOfPages)
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 100);
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

  const changePage = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setPageNum(Number(e.target.value));
      console.log(pageNum);
    }, 100);
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
          <Pagination
            numOfPages={data?.numOfPages}
            changePage={changePage}
            pageNum={pageNum}
          />
        </div>
      )}
    </div>
  );
}
