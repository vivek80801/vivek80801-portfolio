import React from "react";
import hero from "../../scss/components/hero.module.scss";
import { IThemeContext, ThemeChangerContext } from "../context";

const Hero: React.FC = (): JSX.Element => {
  const { themes, dispatch } = React.useContext<IThemeContext>(
    ThemeChangerContext
  );
  return (
    <section>
      <div
        className={themes === "default" ? hero.heroDefault : hero.heroBlue}
        style={{ backgroundImage: "/assets/react.png" }}
      >
        <div className={hero.img}>
          <img src="/assets/github-avtar.png" alt="github-avtar" />
        </div>
        <div className="content">
          <h1>Hello, I am vivek.</h1>
          <div className="buttons">
            <a href="#projects">
              <button
                className={
                  themes === "default" ? "btn-primary" : "btn-primaryBlue"
                }
              >
                projects
              </button>
            </a>
            <a href="#contact">
              <button
                className={
                  themes === "default" ? "btn-quaternary" : "btn-quaternaryBlue"
                }
              >
                contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
