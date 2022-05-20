import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import DashboardHome from "../pages/DashboardHome";
import DashboardMessage from "../pages/DashboardMessage";
import DashboardReviews from "../pages/DashboardReviews";
import DashboardSettings from "../pages/DashboardSettings";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Register from "../pages/Register";
import Schools from "../pages/Schools";
import Signin from "../pages/SignIn";
import Student from "../pages/Student";
import Students from "../pages/Students";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/berichten" element={<DashboardMessage />} />
        <Route path="/dashboard/instellingen" element={<DashboardSettings />} />
        <Route path="/dashboard/beoordelingen" element={<DashboardReviews />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/registreer" element={<Register />} />
        <Route path="/scholen" element={<Schools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opdrachten" element={<Projects />} />
        <Route path="/studenten" element={<Students />} />
        <Route path="/studenten/student" element={<Student />} />
      </Routes>
    </>
  );
}

export default Routing;
