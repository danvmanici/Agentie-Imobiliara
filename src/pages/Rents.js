import React from "react";
import "./Sells-Rents.css";
import Locuinta from "../components/Locuinta";
import { useTranslation } from "react-i18next";

const Rents = () => {
  const { t } = useTranslation();
  const image =
    "https://apartamentepallady.ro/wp-content/uploads/2017/04/tip1-1-1-1000x658.jpg";
  const description = t("description");

  return (
    <>
      <main className="content-main">
        <article id="residential" className="content-type">
          <h1>{t("residential")}</h1>
          <section id="garsonierezidential">
            <h3> {t("garsoniera")}</h3>
            <Locuinta image={image} description={description} />
            <Locuinta image={image} description={description} />
          </section>
          <section id="apartmentrezidential">
            <h3>{t("apartment")}</h3>
            <Locuinta image={image} description={description} />
          </section>
          <section id="houserezidential">
            <h3>{t("house")}</h3>
            <Locuinta image={image} description={description} />
          </section>
        </article>
        <article id="comercial" className="content-type">
          <h1>{t("comercial")}</h1>
          <section id="garsonieracomerial">
            <h3> {t("garsoniera")}</h3>
            <Locuinta image={image} description={description} />
            <Locuinta image={image} description={description} />
          </section>
          <section id="apartmentcomerial">
            <h3>{t("apartment")}</h3>
            <Locuinta image={image} description={description} />
            <Locuinta image={image} description={description} />
          </section>
          <section id="housecomerial">
            <h3>{t("house")}</h3>
            <Locuinta image={image} description={description} />
            <Locuinta image={image} description={description} />
          </section>
        </article>
      </main>
    </>
  );
};

export default Rents;
