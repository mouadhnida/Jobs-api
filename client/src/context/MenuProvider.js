import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext(null);

export default function MenuProvider({ children }) {
  const [menu, setMenu] = useState(false);
  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
