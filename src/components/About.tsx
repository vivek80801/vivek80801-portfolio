import React from "react";
import about from "../scss/components/about.module.scss";

const About: React.FC = (): JSX.Element => {
  return (
    <section>
      <div id="about" className={about.about}>
        <h1>about me</h1>
        <p>
          Hello, I am vivek.I wanted to be a selftaught frontend developer. I
          can build static websites. I am looking for an opertunity. You can
          check my projects at <a href="#project"> here</a>. Great software
          build by great team. I participate in different hackthons to build
          projects with teams. you can check my devpost profile{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://devpost.com/vivek80801"
          >
            vivek80801
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
