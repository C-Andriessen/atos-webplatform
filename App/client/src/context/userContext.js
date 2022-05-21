import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
import { hostContext } from "./hostContext";

const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const host = useContext(hostContext);

  async function getUser() {
    axios.get(`${host}/api/user/`, { withCredentials: true }).then((res) => {
      if (res.data.name) setUser(res.data);
    });
  }

  useEffect(() => {
    getUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export default UserContextProvider;
export { userContext };
