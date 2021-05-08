import React from "react";
import hero from "../scss/components/hero.module.scss";

const Hero: React.FC = (): JSX.Element => {
  return (
      <div className={hero.hero} style={{backgroundImage:"/assets/react.png"}}>
      <img src="/assets/github-avtar.png" alt="profile" />
      <h1>Hello, I am vivek.</h1>
      <div className="buttons">
        <a href="#projects">
          <button className="btn-primary">projects</button>
        </a>
        <a href="#contact">
          <button className="btn-quaternary">contact me</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
