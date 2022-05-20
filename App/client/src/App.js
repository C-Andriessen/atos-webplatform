import Routing from "./components/Routing";
const body = document.querySelector("body");

function App() {
  body.className = "bg-darkmode";
  return <Routing />;
}

export default App;
