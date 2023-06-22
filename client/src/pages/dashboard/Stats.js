import React from "react";
import Jobstatus from "../../components/Jobstatus";
import Chart from "../../components/Chart";

function Stats() {
  return (
    <div className="mt-7 h-full">
      <Jobstatus />
      <Chart />
    </div>
  );
}

export default Stats;
