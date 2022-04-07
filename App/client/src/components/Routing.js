import {Routes, Route } from "react-router-dom";
import Build from "./pages/Build";
import Explanation from "./pages/Explanation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Excercises from "./pages/Opdrachten";
import Register from "./pages/Register";
import Students from "./pages/Students";
import Test from "./pages/Test";

function Routing(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build mode={props.mode} />} />
        <Route path="/test" element={<Test />} />
        <Route path="/explanation" element={<Explanation />} />
        <Route path="/excercises" element={<Excercises />} />
        <Route path="/students" element={<Students />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default Routing;
