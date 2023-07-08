import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFilter } from "../context/FilterProvider";
import useAxios from "../hooks/useAxios";

export default function SearchForm() {
  const [filter, setFilter] = useFilter();
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    e.preventDefault();
    setFilter({
      ...filter,
      [e.target.name]: [e.target.value],
    });
  };

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

  return (
    <div className="flex min-h-[18rem] w-11/12 flex-col gap-8 rounded bg-white p-9 shadow-md">
      <div className="text-2xl">Search From</div>
      <div className="grid grid-cols-3 gap-8 m-md:flex m-md:flex-col m-lg:grid-cols-2">
        <div className="h-18 flex min-w-[9rem] flex-col gap-3">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            name="search"
            type="text"
            className="h-8 rounded border border-slate-300 bg-slate-100"
            onChange={handleChange}
            value={filter.search}
          />
        </div>
        <div className="h-18 flex min-w-[9rem] flex-col gap-3">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            className="h-8 border border-slate-300 bg-slate-100"
            onChange={handleChange}
            value={filter.status}
          >
            <option value="all">all</option>
            <option value="interview">interview</option>
            <option value="declined">declined</option>
            <option value="pending">pending</option>
          </select>
        </div>
        <div className="h-18 flex min-w-[9rem] flex-col gap-3">
          <label htmlFor="jobType">Type</label>
          <select
            name="jobType"
            id="jobType"
            className="h-8 border border-slate-300 bg-slate-100"
            onChange={handleChange}
            value={filter.jobType}
          >
            <option value="all">all</option>
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
            <option value="remote">remote</option>
            <option value="internship">internship</option>
          </select>
        </div>
        <div className="h-18 flex min-w-[9rem] flex-col gap-3">
          <label htmlFor="sort">Sort</label>
          <select
            name="sort"
            id="sort"
            className="h-8 border border-slate-300 bg-slate-100"
            onChange={handleChange}
            value={filter.sort}
          >
            <option value="latest">latest</option>
            <option value="oldest">oldest</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
        <div className="h-18 flex w-full items-end justify-center">
          <button className="h-8 w-full rounded bg-red-100 text-red-900 transition-all duration-300 hover:bg-red-900 hover:text-white">
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}
