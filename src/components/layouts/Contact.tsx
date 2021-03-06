import React from "react";
import contact from "../../scss/components/contact.module.scss";
import { IThemeContext, ThemeChangerContext } from "../context";

const Contact: React.FC = (): JSX.Element => {
  const { themes, dispatch } = React.useContext<IThemeContext>(
    ThemeChangerContext
  );
  return (
    <section>
      <div
        id="contact"
        className={
          themes === "blue"
            ? contact.containerBlue
            : themes === "pink"
            ? contact.containerPink
            : themes === "lightBlue"
            ? contact.containerLightBlue
            : themes === "yellow"
            ? contact.containerYellow
            : contact.container
        }
      >
        <h1>contact me</h1>
        <form method="POST" name="contact-form" data-netlify="true">
          <input type="hidden" name="form-name" value="contact-form" />
          <div className={contact.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={contact.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={contact.formGroup}>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <input
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
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
