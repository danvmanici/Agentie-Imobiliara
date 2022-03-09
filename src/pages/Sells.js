import React, { useState } from "react";
import "./Sells-Rents.css";
import Locuinta from "../components/Locuinta";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { getAppointments } from "../functions/getAppointments";
import TabelProgramari from "../components/TabelProgramari";

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
  const id = [0, 1, 2, 3, 4, 5, 6];

  const [help, setHelp] = useState(false);
  const [mypret, setMypret] = useState("");
  const [myadres, setMyadres] = useState("");
  const [locuintaId, setLocuintaId] = useState("");
  const [date, setDate] = useState("");
  // desenez butoanele
  const role = sessionStorage.getItem("role");
  //desenez tabelul de programari
  const [programare, setProgramare] = useState(false);
  const [programari, setProgramari] = useState([]);

  //start creare programare
  const handleSubmitAppointment = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/appointment/${locuintaId}/${date}`,
      {
        params: {
          locuintaId: locuintaId,
          date: date,
        },
      }
    );
    alert(res.data);
    console.log(locuintaId, date);
  };

  const helper = () => {
    return (
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
          onChange={(e) => setDate(() => e.target.value)}
        ></input>
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmitAppointment();
          }}
        />
      </form>
    );
  };

  const selectLocuinta = (pret, adresa, id) => {
    if (!!sessionStorage.getItem("isLoggedIn", true)) {
      setMyadres(adresa);
      setMypret(pret);
      setLocuintaId(id);
      setHelp(!help);
    }
  };
  //end creare programare

  const selectAppointments = async (id) => {
    const app = await getAppointments(id);
    setProgramari(() => [...app]);
    setProgramare(!programare);
  };

  const selectCalendar = (id) => {
    console.log("cal", id);
  };
  const selectGraph = (id) => {
    console.log("graph", id);
  };

  return (
    <>
      <main className="content-main">
        {help && helper()}
        {programare && <TabelProgramari programari={programari} />}
        <article id="residential" className="content-type">
          <h1>{t("residential")}</h1>
          <section id="garsonierezidential">
            <h3> {t("garsoniera")}</h3>
            <Locuinta
              id={id[0]}
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[0], adresa[0], id[0])}
              pret={pret[0]}
              adresa={adresa[0]}
              role={role}
              selectAppointments={() => selectAppointments(id[0])}
              selectCalendar={() => selectCalendar(id[0])}
              selectGraph={() => selectGraph(id[0])}
            />
            <Locuinta
              id={id[1]}
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[1], adresa[1], id[1])}
              pret={pret[1]}
              adresa={adresa[1]}
              role={role}
              selectAppointments={() => selectAppointments(id[1])}
              selectCalendar={() => selectCalendar(id[1])}
              selectGraph={() => selectGraph(id[1])}
            />
          </section>
          <section id="apartmentrezidential">
            <h3>{t("apartment")}</h3>
            <Locuinta
              id={id[2]}
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[2], adresa[2], id[2])}
              pret={pret[2]}
              adresa={adresa[2]}
              role={role}
              selectAppointments={() => selectAppointments(id[2])}
              selectCalendar={() => selectCalendar(id[2])}
              selectGraph={() => selectGraph(id[2])}
            />
          </section>
          <section id="houserezidential">
            <h3>{t("house")}</h3>
            <Locuinta
              id={id[3]}
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[3], adresa[3], id[3])}
              pret={pret[3]}
              adresa={adresa[3]}
              role={role}
              selectAppointments={() => selectAppointments(id[3])}
              selectCalendar={() => selectCalendar(id[3])}
              selectGraph={() => selectGraph(id[3])}
            />
          </section>
        </article>
        <article id="comercial" className="content-type">
          <h1>{t("comercial")}</h1>
          <section id="garsonieracomerial">
            <h3> {t("garsoniera")}</h3>
            <Locuinta
              id={id[4]}
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[4], adresa[4], id[4])}
              pret={pret[4]}
              adresa={adresa[4]}
              role={role}
              selectAppointments={() => selectAppointments(id[4])}
              selectCalendar={() => selectCalendar(id[4])}
              selectGraph={() => selectGraph(id[4])}
            />
          </section>
          <section id="apartmentcomerial">
            <h3>{t("apartment")}</h3>
            <Locuinta
              id={id[5]}
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[5], adresa[5], id[5])}
              pret={pret[5]}
              adresa={adresa[5]}
              role={role}
              selectAppointments={() => selectAppointments(id[5])}
              selectCalendar={() => selectCalendar(id[5])}
              selectGraph={() => selectGraph(id[5])}
            />
          </section>
          <section id="housecomerial">
            <h3>{t("house")}</h3>
            <Locuinta
              id={id[6]}
              image={image}
              description={description}
              selectLocuinta={() => selectLocuinta(pret[6], adresa[6], id[6])}
              pret={pret[6]}
              adresa={adresa[6]}
              role={role}
              selectAppointments={() => selectAppointments(id[6])}
              selectCalendar={() => selectCalendar(id[6])}
              selectGraph={() => selectGraph(id[6])}
            />
          </section>
        </article>
      </main>
    </>
  );
};

export default Sells;
