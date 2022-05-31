import React, { useState, createContext } from "react";

const hostContext = createContext();

const HostContextProvider = ({ children }) => {
  const [host] = useState("http://localhost:5000");

  return <hostContext.Provider value={host}>{children}</hostContext.Provider>;
};

export default HostContextProvider;
export { hostContext };
