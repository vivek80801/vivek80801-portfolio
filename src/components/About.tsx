import React from "react";
import about from "../scss/components/about.module.scss";

const About: React.FC = (): JSX.Element => {
  return (
    <div id="about" className={about.about}>
      <h1>about me</h1>
      <p>
        Hello, I am vivek.I wanted to be a selftaught frontend developer. I can
        build static websites. I am looking for an opertunity. You can check my
        projects at
        <a href="#project"> here</a>. Great software build by great team.
      </p>
    </div>
  );
};

export default About;
