import React from "react";
import { useFilter } from "../context/FilterProvider";

export default function JobsContainer() {
  const [filter, setFilter] = useFilter();
  return <div>JobsContainer</div>;
}
