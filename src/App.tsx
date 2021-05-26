import React from "react";
import "./scss/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import About from "./components/About";
import Projects from "./components/Projects";
import Hackthon from "./components/Hackthon";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skill />
        <About />
        <Projects />
        <Hackthon />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
