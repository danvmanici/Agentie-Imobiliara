import React, { useState } from "react";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";
// import axios from "axios";

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async () => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    await axios.post("http://127.0.0.1:8000/send/", {
      name: name,
      email: email,
      subject: subject,
    });
    console.log(name, email, subject);
  };

  return (
    <main>
      <fieldset className="fields">
        <legend className="leg">{t("contact-us")}</legend>
        <form className="content-field">
          <section>
            <label htmlFor="name">{t("name")}:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("placeholder-name")}
              required
              value={name}
              onChange={(e) => setName(() => e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="email">{t("email")}:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("placeholder-email")}
              required
              value={email}
              onChange={(e) => setEmail(() => e.target.value)}
            />
          </section>
          <label htmlFor="subject"></label>
          <textarea
            id="subject"
            name="subject"
            placeholder={t("placeholder-subject")}
            required
            value={subject}
            onChange={(e) => setSubject(() => e.target.value)}
          ></textarea>
          <input
            type="submit"
            value={t("submit")}
            className="send-button"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
              setSubject(() => "");
              setName(() => "");
              setEmail(() => "");
            }}
          />
        </form>
      </fieldset>
    </main>
  );
};

export default ContactForm;
