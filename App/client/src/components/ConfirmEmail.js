import axios from "axios";
import { useEffect, useState } from "react";

import NotFound from "../pages/NotFound";
import ConfirmVerification from "./projectpage/ConfirmVerification";

export default function ConfirmEmail() {
  let params = new URL(document.location).searchParams;
  let token = params.get("token");

  const [invalid, setInvalid] = useState(false);

  useEffect(() => {}, [invalid]);

  axios
    .get(`http://localhost:5000/api/email/confirmation/${token}`)
    .then((res) => {
      console.log(res.data);
      if (res.data === "invalid") {
        setInvalid(true);
      }
    });

  return invalid ? <NotFound /> : <ConfirmVerification />;
}
