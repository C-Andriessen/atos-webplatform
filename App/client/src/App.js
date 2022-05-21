import Routing from "./components/Routing";
import HostContextProvider from "./context/hostContext";
import UserContextProvider from "./context/userContext";
const body = document.querySelector("body");

function App() {
  body.className = "bg-darkmode";
  return (
    <HostContextProvider>
      <UserContextProvider>
        <Routing />
      </UserContextProvider>
    </HostContextProvider>
  );
}

export default App;
