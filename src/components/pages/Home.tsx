import React from "react";
import Hero from "../layouts/Hero";
import Skill from "../layouts/Skill";
import About from "../layouts/About";
import Projects from "../layouts/Projects";
import Hackthon from "../layouts/Hackthon";
import Contact from "../layouts/Contact";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <main>
        <Hero />
        <Skill />
        <About />
        <Projects />
        <Hackthon />
        <Contact />
      </main>
    </>
  );
};

export default Home;
