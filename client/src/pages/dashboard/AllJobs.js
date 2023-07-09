import React from "react";
import JobsContainer from "../../components/JobsContainer";
import SearchForm from "../../components/SearchForm";

function AllJobs() {
  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <SearchForm />
      <JobsContainer />
    </div>
  );
}

export default AllJobs;
