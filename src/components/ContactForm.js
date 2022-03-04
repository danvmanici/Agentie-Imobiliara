import React from "react";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <main>
      <fieldset className="field">
        <legend>{t("contact-us")}</legend>
        <form className="content-field">
          <section>
            <label for="name">{t("name")}:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("placeholder-name")}
              required
            />
          </section>
          <section>
            <label for="email">{t("email")}:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("placeholder-email")}
              required
            />
          </section>
          <label for="subject"></label>
          <textarea
            id="subject"
            name="subject"
            placeholder={t("placeholder-subject")}
            required
          ></textarea>
          <input type="submit" value={t("submit")} className="send-button" />
        </form>
      </fieldset>
    </main>
  );
};

export default ContactForm;
