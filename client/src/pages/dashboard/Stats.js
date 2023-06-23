import React from "react";
import Jobstatus from "../../components/Jobstatus";
import Chart from "../../components/Chart";

function Stats() {
  return (
    <div className="relative h-full w-[calc(100vw-250px)] pt-8 m-lg:w-full">
      <Jobstatus />
      <Chart />
    </div>
  );
}

export default Stats;
