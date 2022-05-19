import Header from "../components/Header";

import AboutSection from "../components/homepage/AboutSection";
import ExplanationSection from "../components/homepage/ExplanationSection";
import Hero from "../components/homepage/Hero";
import ResultSection from "../components/homepage/ResultSection";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ExplanationSection />
      <AboutSection />
      <ResultSection />
    </>
  );
}

export default Home;
