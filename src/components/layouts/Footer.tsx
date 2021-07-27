import React from "react";
import { FaGithub, FaTwitterSquare, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import footer from "../../scss/components/footer.module.scss";
import { IThemeContext, ThemeChangerContext } from "../context";

const Footer: React.FC = (): JSX.Element => {
  const { themes, dispatch } = React.useContext<IThemeContext>(
    ThemeChangerContext
  );
  const size = 40;
  return (
    <footer>
      <div
        id="social"
        className={themes === "default" ? footer.footer : footer.footerBlue}
      >
        <h1>connect with me</h1>
        <div className={footer.social}>
          <a
            href="https://github.com/vivek80801/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={size} />
          </a>
          <a
            href="https://twitter.com/vivek80801/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare size={size} />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-kumar-1983a8202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={size} />
          </a>
          <a
            href="mailto:vivek80801@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail size={size} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
