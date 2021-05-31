import React from "react";
import hero from "../scss/components/hero.module.scss";

const Hero: React.FC = (): JSX.Element => {
  return (
    <section>
      <div
        className={hero.hero}
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
        <div className="content">
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
      </div>
    </section>
  );
};

export default Hero;
