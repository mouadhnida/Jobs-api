import React, { createContext, useContext, useState } from "react";

const nameContext = createContext(null);

export default function NameProvider({ children }) {
  const [name, setName] = useState(localStorage.getItem("name"));
  return (
    <nameContext.Provider value={[name, setName]}>
      {children}
    </nameContext.Provider>
  );
}

export function useName() {
  return useContext(nameContext);
}
