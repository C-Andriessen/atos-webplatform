import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { hostContext } from "../context/hostContext";

import NotFound from "../pages/NotFound";
import ConfirmVerification from "./projectpage/ConfirmVerification";

export default function ConfirmEmail() {
  const host = useContext(hostContext);
  let params = new URL(document.location).searchParams;
  let token = params.get("token");

  const [invalid, setInvalid] = useState(false);

  useEffect(() => {}, [invalid]);

  axios.get(`${host}/api/email/confirmation/${token}`).then((res) => {
    if (res.data === "invalid") {
      setInvalid(true);
    }
  });

  return invalid ? <NotFound /> : <ConfirmVerification />;
}
