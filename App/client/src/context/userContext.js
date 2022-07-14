import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
import { hostContext } from "./hostContext";

const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const host = useContext(hostContext);
  const [imgurl, setImgurl] = useState("");

  async function getUser() {
    axios.get(`${host}/api/user/`, { withCredentials: true }).then((res) => {
      if (res.data.name) {
        setUser(res.data);
        if (res.data.profileImg !== "") {
          setImgurl(`${host}/api/user/profileimg/${user.profileImg}`);
        }
      }
    });
  }

  useEffect(() => {
    getUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgurl]);

  return (
    <userContext.Provider value={{ user, imgurl, setImgurl }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
export { userContext };
