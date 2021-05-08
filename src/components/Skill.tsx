import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faSass,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import skill from "../scss/components/skill.module.scss";

const Skill: React.FC = (): JSX.Element => {
  return (
    <div id="skill" className={skill.container}>
      <h1>my skills</h1>
      <div className={skill.skills}>
        <div className={skill.skill}>
          <FontAwesomeIcon size="3x" icon={faHtml5} />
          <p>
            HTML is a building block for any websites. It provide a structure to
            web pages.
          </p>
        </div>
        <div className={skill.skill}>
          <FontAwesomeIcon size="3x" icon={faCss3} />
          <p>
            CSS is used for styling html elements. HTML and CSS works together
            to provide great looking websites
          </p>
        </div>
        <div className={skill.skill}>
          <FontAwesomeIcon size="3x" icon={faJs} />
          <p>
            Javascript is a programming lanuage which is used for many things.
            Before nodejs, It was only a tool for adding intracations on
            websites. But, when nodejs was invented. Javascript can do
            everything. You can create mobile applications, desktop
            applications, web applications, you can also write server side code
            with javascript.
          </p>
        </div>
        <div className={skill.skill}>
          <FontAwesomeIcon size="3x" icon={faBootstrap} />
          <p>
            Bootstrap is css library. This helps us to build webpages faster. It
            gives us pre made class to use.
          </p>
        </div>
        <div className={skill.skill}>
          <FontAwesomeIcon size="3x" icon={faSass} />
          <p>
            Sass is preprocesser for css. Sass gets compiled to css. Browser
            does not understand sass.
          </p>
        </div>
        <div className={skill.skill}>
          <FontAwesomeIcon size="3x" icon={faReact} />
          <p>
            Reactjs is a library of javascript which is used to create single
            page application(SPAs). It is created by facbook and maintained by
            open source community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
