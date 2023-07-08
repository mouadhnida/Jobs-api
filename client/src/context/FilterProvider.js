import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

export default function FilterProvider({ children }) {
  const [filter, setFilter] = useState({
    search: "",
    status: "all",
    jobType: "all",
    sort: "latest",
  });
  return (
    <FilterContext.Provider value={[filter, setFilter]}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => {
  return useContext(FilterContext);
};
