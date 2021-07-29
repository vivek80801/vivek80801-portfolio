import React from "react";
import { FaAngleDown } from "react-icons/fa";
import navbar from "../../scss/components/navbar.module.scss";
import { ThemeChangerContext, IThemeContext } from "../context";

const Navbar: React.FC = (): JSX.Element => {
  const [showNav, setShowNav] = React.useState(false);
  const [showThemes, setShowThemes] = React.useState(false);
  const { themes, dispatch } = React.useContext<IThemeContext>(
    ThemeChangerContext
  );
  return (
    <>
      <nav
        className={
          themes === "blue"
            ? navbar.desktopBlue
            : themes === "pink"
            ? navbar.desktopPink
            : themes === "lightBlue"
            ? navbar.desktopLightBlue
            : themes === "yellow"
            ? navbar.desktopYellow
            : navbar.desktopDefault
        }
      >
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
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setShowThemes(!showThemes);
              }}
            >
              Themes <FaAngleDown size={20} />
            </a>
            {showThemes && (
              <ul>
                <li onClick={() => dispatch({ name: "default" })}>default</li>
                <li onClick={() => dispatch({ name: "blue" })}>blue</li>
                <li onClick={() => dispatch({ name: "pink" })}>pink</li>
                <li onClick={() => dispatch({ name: "lightBlue" })}>
                  light blue
                </li>
                <li onClick={() => dispatch({ name: "yellow" })}>yellow</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <nav
        className={
          themes === "blue"
            ? navbar.mobileBlue
            : themes === "pink"
            ? navbar.mobilePink
            : themes === "lightBlue"
            ? navbar.mobileLightBlue
            : themes === "yellow"
            ? navbar.mobileYellow
            : navbar.mobile
        }
      >
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
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setShowThemes(!showThemes);
              }}
            >
              Themes <FaAngleDown size={20} />
            </a>
            {showThemes && (
              <ul>
                <li onClick={() => dispatch({ name: "default" })}>default</li>
                <li onClick={() => dispatch({ name: "blue" })}>blue</li>
                <li onClick={() => dispatch({ name: "pink" })}>pink</li>
                <li onClick={() => dispatch({ name: "lightBlue" })}>
                  light blue
                </li>
                <li onClick={() => dispatch({ name: "yellow" })}>yellow</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
