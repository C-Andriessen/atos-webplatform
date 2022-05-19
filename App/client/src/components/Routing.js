import { Route, Routes } from "react-router-dom";
import DashboardHome from "../pages/DashboardHome";
import DashboardMessage from "../pages/DashboardMessage";
import DashboardReviews from "../pages/DashboardReviews";
import DashboardSettings from "../pages/DashboardSettings";
import Home from "../pages/Home";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/berichten" element={<DashboardMessage />} />
        <Route path="/dashboard/instellingen" element={<DashboardSettings />} />
        <Route path="/dashboard/beoordelingen" element={<DashboardReviews />} />
      </Routes>
    </>
  );
}

export default Routing;
