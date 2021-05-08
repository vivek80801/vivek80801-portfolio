import React from "react";
import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skill />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
