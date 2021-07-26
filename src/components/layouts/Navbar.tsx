import React from "react";
import navbar from "../../scss/components/navbar.module.scss";

const Navbar: React.FC = (): JSX.Element => {
  const [showNav, setShowNav] = React.useState(false);
  return (
    <>
      <nav className={navbar.desktop}>
        <img src="/assets/github-avtar.png" alt="vivek80801" />
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#skill">skill</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">project</a>
          </li>
          <li>
            <a href="#hackthon">hackthon</a>
          </li>
          <li>
            <a href="#contact">contact me</a>
          </li>
          <li>
            <a href="#social">social</a>
          </li>
        </ul>
      </nav>
      <nav className={navbar.mobile}>
        <img src="/assets/github-avtar.png" alt="vivek80801" />
        <div className={navbar.lines} onClick={() => setShowNav(!showNav)}>
          <div className={navbar.line}></div>
          <div className={navbar.line}></div>
          <div className={navbar.line}></div>
        </div>
        <ul style={showNav ? { display: "flex" } : { display: "none" }}>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#skill">skill</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">project</a>
          </li>
          <li>
            <a href="#hackthon">hackthon</a>
          </li>
          <li>
            <a href="#contact">contact me</a>
          </li>
          <li>
            <a href="#social">social</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
