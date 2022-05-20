import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  async function getUser() {
    axios
      .get("http://localhost:5000/api/user/", { withCredentials: true })
      .then((res) => {
        if (res.data.name) setUser(res.data);
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

export default UserContextProvider;
export { userContext };
