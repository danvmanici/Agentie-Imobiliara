import React from "react";
import "./AboutUs.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <main className="content-about">
      <span className="about">{t("aboutUs")}</span>
      <aside>
        <iframe
          src="https://www.youtube.com/embed/jtxnq6Rn0R4"
          className="about-video"
          title="1"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/pMipxKPEqBU"
          className="about-video"
          title="2"
        ></iframe>
      </aside>
    </main>
  );
};

export default AboutUs;
