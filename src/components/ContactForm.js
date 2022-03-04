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
            <h4>
              <label for="name">{t("name")}</label>
            </h4>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("placeholder-name")}
              required
            />
          </section>
          <section>
            <h4>
              <label for="email">{t("email")}</label>
            </h4>
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
          ></textarea>
          <input type="submit" value={t("submit")} />
        </form>
      </fieldset>
    </main>
  );
};

export default ContactForm;
