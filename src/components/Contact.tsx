import React from "react";
import contact from "../scss/components/contact.module.scss";

const Contact: React.FC = (): JSX.Element => {
  return (
    <div id="contact" className={contact.container}>
      <h1>contact me</h1>
      <form method="POST" name="contact-form" data-netlify="true">
        <input type="hidden" name="form-name" value="contact-form" />
        <div className={contact.formGroup}>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" placeholder="Enter your name" required />
        </div>
        <div className={contact.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Enter your email" required />
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
        <input className="btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Contact;
