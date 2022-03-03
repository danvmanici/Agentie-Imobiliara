import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <main>
      <fieldset className="field">
        <legend>Contact Us</legend>
        <form className="content-field">
          <section>
            <h4>
              <label for="name">Name</label>
            </h4>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name.."
              required
            />
          </section>
          <section>
            <h4>
              <label for="email">Email</label>
            </h4>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email.."
              required
            />
          </section>
          <label for="subject"></label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write some text here.."
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </fieldset>
    </main>
  );
};

export default ContactForm;
