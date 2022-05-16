import Header from "./components/Header";
import Hero from "./components/Hero";
const body = document.querySelector("body");

function App() {
  body.style.backgroundColor = "#2F3136";
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
