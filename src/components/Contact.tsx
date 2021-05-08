import React from "react";
import contact from "../scss/components/contact.module.scss";

const Contact: React.FC = (): JSX.Element => {
  return (
    <div id="contact" className={contact.container}>
      <h1>contact me</h1>
      <form method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Contact;

