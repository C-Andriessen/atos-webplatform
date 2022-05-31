import axios from "axios";
import { useContext } from "react";
import { hostContext } from "../context/hostContext";

export default function Logout() {
  const host = useContext(hostContext);
  axios
    .post(`${host}/api/user/logout`, {}, { withCredentials: true })
    .then(() => {
      window.location.href = "/";
    });
}
