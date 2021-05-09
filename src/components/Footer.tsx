import React from "react";
import { FaGithub, FaTwitterSquare, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import footer from "../scss/components/footer.module.scss";

const Footer: React.FC = (): JSX.Element => {
  const size = 70;
  return (
    <div id="social" className={footer.footer}>
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
  );
};

export default Footer;
