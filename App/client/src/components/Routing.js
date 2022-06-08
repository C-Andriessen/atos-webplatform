import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Logout from "../pages/Logout";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import RecoverPassword from "../pages/RecoverPassword";
import Register from "../pages/Register";
import Schools from "../pages/Schools";
import Signin from "../pages/SignIn";
import Student from "../pages/Student";
import Students from "../pages/Students";
import ConfirmEmail from "./ConfirmEmail";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard page={"Dashboard"} />} />
        <Route
          path="/dashboard/instellingen"
          element={<Dashboard page={"Instellingen"} />}
        />
        <Route
          path="/dashboard/berichten"
          element={<Dashboard page={"Berichten"} />}
        />
        <Route
          path="/dashboard/beoordelingen"
          element={<Dashboard page={"Beoordelingen"} />}
        />
        <Route path="/login" element={<Signin />} />
        <Route path="/registreer" element={<Register />} />
        <Route path="/scholen" element={<Schools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opdrachten" element={<Projects />} />
        <Route path="/studenten" element={<Students />} />
        <Route path="/studenten/student" element={<Student />} />
        <Route path="/confirm" element={<ConfirmEmail />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/wachtwoordvergeten" element={<ForgotPassword />} />
        <Route path="/herstelwachtwoord" element={<RecoverPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
