import {Routes, Route } from "react-router-dom";
import Test from "./pages/Test";

function Routing() {
  return (
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
  );
}

export default Routing;
