import React from "react";

export default function AddJobForm({
  job,
  handleChange,
  handleClear,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="my-12 flex flex-col items-center gap-16"
    >
      <div className="flex min-h-[18rem] w-11/12 flex-col gap-8 rounded bg-white p-9 shadow-md">
        <div className="text-4xl">Add Job</div>
        <div className="grid grid-cols-3 gap-8 m-md:flex m-md:flex-col m-lg:grid-cols-2">
          <div className="h-18 flex min-w-[9rem] flex-col gap-3">
            <label htmlFor="position">Position</label>
            <input
              id="position"
              name="position"
              type="text"
              className="h-8 rounded border border-slate-300 bg-slate-100 pl-2"
              value={job?.position}
              onChange={handleChange}
            />
          </div>
          <div className="h-18 flex min-w-[9rem] flex-col gap-3">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              className="h-8 rounded border border-slate-300 bg-slate-100 pl-2"
              value={job?.company}
              onChange={handleChange}
            />
          </div>
          <div className="h-18 flex min-w-[9rem] flex-col gap-3">
            <label htmlFor="job-Location">Job Location</label>
            <input
              id="jobLocation"
              name="jobLocation"
              type="text"
              onChange={handleChange}
              value={job?.jobLocation}
              className="h-8 rounded border border-slate-300 bg-slate-100 pl-2"
            />
          </div>
          <div className="h-18 flex min-w-[9rem] flex-col gap-3">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              className="h-8 border border-slate-300 bg-slate-100"
              value={job?.status}
              onChange={handleChange}
            >
              <option value="interview">interview</option>
              <option value="declined">declined</option>
              <option value="pending">pending</option>
            </select>
          </div>
          <div className="h-18 flex min-w-[9rem] flex-col gap-3">
            <label htmlFor="jobType">Job Type</label>
            <select
              name="jobType"
              id="jobType"
              className="h-8 border border-slate-300 bg-slate-100"
              value={job?.jobType}
              onChange={handleChange}
            >
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
              <option value="pending">pending</option>
              <option value="internship">internship</option>
            </select>
          </div>
          <div className="h-18 flex w-full items-end justify-between">
            <button
              type="submit"
              className=" h-8 w-[48%] rounded bg-main text-white shadow drop-shadow-md transition-all duration-300 hover:bg-main2"
            >
              Submit
            </button>
            <button
              onClick={handleClear}
              className="h-8 w-[48%] rounded bg-red-100 text-red-900 shadow-lg drop-shadow transition-all duration-300 hover:bg-red-900 hover:text-white"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
