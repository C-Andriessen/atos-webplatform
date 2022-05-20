import Routing from "./components/Routing";
import UserContextProvider from "./context/userContext";
const body = document.querySelector("body");

function App() {
  body.className = "bg-darkmode";
  return (
    <UserContextProvider>
      <Routing />
    </UserContextProvider>
  );
}

export default App;
