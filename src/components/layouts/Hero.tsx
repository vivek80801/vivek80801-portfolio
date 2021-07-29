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
        className={
          themes === "blue"
            ? hero.heroBlue
            : themes === "pink"
            ? hero.heroPink
            : themes === "lightBlue"
            ? hero.heroLightBlue
            : themes === "yellow"
            ? hero.heroYellow
            : hero.heroDefault
        }
        style={{ backgroundImage: "/assets/react.png" }}
      >
        <div className={hero.img1}>
          <div className={hero.img2}>
            <div className={hero.img3}>
              <div className={hero.img4}>
                <div className={hero.img5}>
                  <div className={hero.img6}>
                    <div className={hero.img7}>
                      <div className={hero.img8}>
                        <div className={hero.img9}>
                          <img src="/assets/github-avtar.png" alt="profile" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*    <div className={hero.img}>
          <img src="/assets/github-avtar.png" alt="github-avtar" />
              </div>*/}
        <div className="content">
          <h1>Hello, I am vivek.</h1>
          <div className="buttons">
            <a href="#projects">
              <button
                className={
                  themes === "blue"
                    ? "btn-primaryBlue"
                    : themes === "pink"
                    ? "btn-primaryPink"
                    : themes === "lightBlue"
                    ? "btn-primaryLightBlue"
                    : themes === "yellow"
                    ? "btn-primaryYellow"
                    : "btn-primary"
                }
              >
                projects
              </button>
            </a>
            <a href="#contact">
              <button
                className={
                  themes === "blue"
                    ? "btn-quaternaryBlue"
                    : themes === "pink"
                    ? "btn-quaternaryPink"
                    : themes === "lightBlue"
                    ? "btn-quaternaryLightBlue"
                    : themes === "yellow"
                    ? "btn-quaternaryYellow"
                    : "btn-quaternary"
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
