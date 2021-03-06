import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaSass,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import skill from "../../scss/components/skill.module.scss";
import { IThemeContext, ThemeChangerContext } from "../context";

const Skill: React.FC = (): JSX.Element => {
  const { themes, dispatch } = React.useContext<IThemeContext>(
    ThemeChangerContext
  );
  const size = 70;
  return (
    <section>
      <div
        id="skill"
        className={
          themes === "blue"
            ? skill.containerBlue
            : themes === "pink"
            ? skill.containerPink
            : themes === "lightBlue"
            ? skill.containerLightBlue
            : themes === "yellow"
            ? skill.containerYellow
            : skill.container
        }
      >
        <h1>my skills</h1>
        <div className={skill.skills}>
          <div className={skill.skill}>
            <FaHtml5 size={size} />
            <p>
              HTML is a building block for any websites. It provide a structure
              to web pages.
            </p>
          </div>
          <div className={skill.skill}>
            <FaCss3 size={size} />
            <p>
              CSS is used for styling html elements. HTML and CSS works together
              to provide great looking websites
            </p>
          </div>
          <div className={skill.skill}>
            <FaJs size={size} />
            <p>
              JavaScript is a programming language which is used for many
              things. Before nodejs, It was only a tool for adding interactions
              on websites. But, when nodejs was invented. JavaScript can do
              everything. You can create mobile applications, desktop
              applications, web applications, you can also write server side
              code with JavaScript.
            </p>
          </div>
          <div className={skill.skill}>
            <FaBootstrap size={size} />
            <p>
              Bootstrap is css library. This helps us to build webpages faster.
              It gives us pre made class to use.
            </p>
          </div>
          <div className={skill.skill}>
            <FaSass size={size} />
            <p>
              Sass is preprocessor for css. Sass gets compiled to css. Browser
              does not understand sass.
            </p>
          </div>
          <div className={skill.skill}>
            <FaReact size={size} />
            <p>
              Reactjs is a library of javascript which is used to create single
              page application(SPAs). It is created by facebook and maintained
              by open source community.
            </p>
          </div>
          <div className={skill.skill}>
            <SiTypescript size={size} />
            <p>
              Typescript is a super set javascript. Typescript is basically
              javascript with added features. It adds types to javascript. Every
              valid javascript is a valid typescript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
