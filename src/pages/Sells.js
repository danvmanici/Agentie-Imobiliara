import React, { useState } from "react";
import "./Sells-Rents.css";
import Locuinta from "../components/Locuinta";
import { useTranslation } from "react-i18next";

const Sells = () => {
  const { t } = useTranslation();
  const image =
    "https://apartamentepallady.ro/wp-content/uploads/2017/04/tip1-1-1-1000x658.jpg";
  const description = t("description");
  const pret = [220, 280, 300, 400, 500, 199, 330];
  const adresa = [
    "zorilor",
    "horea",
    "baritiu",
    "dorobantilor",
    "floresti",
    "grigorescu",
    "centru",
  ];

  const [help, setHelp] = useState(false);
  const [mypret, setMypret] = useState("");
  const [myadres, setMyadres] = useState("");

  const helper = () => {
    return (
      <div className="nnn">
        <form className="my-form">
          <label htmlFor="pret">Pret:</label>
          <br />
          <input type="text" id="pret" name="pret" defaultValue={mypret} />
          <label htmlFor="adresa">Adresa:</label>
          <br />
          <input type="text" id="adresa" name="adresa" defaultValue={myadres} />
          <label htmlFor="meeting-time">Alege data si ora:</label>
          <input
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };

  const selectLocuinta = (pret, adresa) => {
    if (!!sessionStorage.getItem("isLoggedIn", true)) {
      setMyadres(adresa);
      setMypret(pret);
      setHelp(!help);
      helper();
      console.log(pret, adresa);
    }
  };

  return (
    <>
      <main className="content-main">
        {help && helper()}
        <article id="residential" className="content-type">
          <h1>{t("residential")}</h1>
          <section id="garsonierezidential">
            <h3> {t("garsoniera")}</h3>
            <Locuinta
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[0], adresa[0])}
              pret={pret[0]}
              adresa={adresa[0]}
            />
            <Locuinta
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[1], adresa[1])}
              pret={pret[1]}
              adresa={adresa[1]}
            />
          </section>
          <section id="apartmentrezidential">
            <h3>{t("apartment")}</h3>
            <Locuinta
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[2], adresa[2])}
              pret={pret[2]}
              adresa={adresa[2]}
            />
          </section>
          <section id="houserezidential">
            <h3>{t("house")}</h3>
            <Locuinta
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[3], adresa[3])}
              pret={pret[3]}
              adresa={adresa[3]}
            />
          </section>
        </article>
        <article id="comercial" className="content-type">
          <h1>{t("comercial")}</h1>
          <section id="garsonieracomerial">
            <h3> {t("garsoniera")}</h3>
            <Locuinta
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[4], adresa[4])}
              pret={pret[4]}
              adresa={adresa[4]}
            />
          </section>
          <section id="apartmentcomerial">
            <h3>{t("apartment")}</h3>
            <Locuinta
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[5], adresa[5])}
              pret={pret[5]}
              adresa={adresa[5]}
            />
          </section>
          <section id="housecomerial">
            <h3>{t("house")}</h3>
            <Locuinta
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[6], adresa[6])}
              pret={pret[6]}
              adresa={adresa[6]}
            />
          </section>
        </article>
      </main>
    </>
  );
};

export default Sells;
