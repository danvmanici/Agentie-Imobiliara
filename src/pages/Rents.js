import React from "react";
import "./Sells-Rents.css";
// import Locuinta from "../components/Locuinta";
// import { useState } from "react";

const Rents = () => {
  // const [image, setImage] = useState("../icons/garsoniera1.jpg");
  // const [description, setDescription] = useState(
  //   "Garsoniera Zona Selgros Se preda cu toate finisajele inclusiv Centrala pe gaz Romstal."
  // );

  return (
    <>
      <main className="content-main">
        <article id="residential" className="content-type">
          <h1>Residential</h1>
          <section id="garsonierezidential">
            <h3>Garsoniera</h3>
            {/* <Locuinta image={image} description={description} /> */}
            <div>
              <img
                src={require("../icons/garsoniera1.jpg")}
                alt="garsoniera1"
              />
              <span>
                Garsoniera Zona Selgros Se preda cu toate finisajele inclusiv
                Centrala pe gaz Romstal.
              </span>
            </div>
          </section>
          <section id="apartmentrezidential">
            <h3>Apartment</h3>
            <div>
              <img
                src={require("../icons/garsoniera1.jpg")}
                alt="garsoniera1"
              />
              <span>
                Garsoniera Zona Selgros Se preda cu toate finisajele inclusiv
                Centrala pe gaz Romstal.
              </span>
            </div>
          </section>
          <section id="houserezidential">
            <h3>House</h3>
            <div>
              <img
                src={require("../icons/garsoniera1.jpg")}
                alt="garsoniera1"
              />
              <span>
                Garsoniera Zona Selgros Se preda cu toate finisajele inclusiv
                Centrala pe gaz Romstal.
              </span>
            </div>
          </section>
        </article>
        <article id="comercial" className="content-type">
          <h1>Commercial</h1>
          <section id="garsonieracomerial">
            <h3>Garsoniera</h3>
            <div>
              <img
                src={require("../icons/garsoniera1.jpg")}
                alt="garsoniera1"
              />
              <span>
                Garsoniera Zona Selgros Se preda cu toate finisajele inclusiv
                Centrala pe gaz Romstal.
              </span>
            </div>
            <div>
              <img
                src={require("../icons/garsoniera1.jpg")}
                alt="garsoniera1"
              />
              <span>
                Garsoniera Zona Selgros Se preda cu toate finisajele inclusiv
                Centrala pe gaz Romstal.
              </span>
            </div>
          </section>
          <section id="apartmentcomerial">
            <h3>Apartment</h3>
            <div>
              <img
                src={require("../icons/garsoniera1.jpg")}
                alt="garsoniera1"
              />
              <span>
                Garsoniera Zona Selgros Se preda cu toate finisajele inclusiv
                Centrala pe gaz Romstal.
              </span>
            </div>
            <div>
              <img
                src={require("../icons/garsoniera1.jpg")}
                alt="garsoniera1"
              />
              <span>
                Garsoniera Zona Selgros Se preda cu toate finisajele inclusiv
                Centrala pe gaz Romstal.
              </span>
            </div>
          </section>
          <section id="housecomerial">
            <h3>House</h3>
            <div>
              <img
                src={require("../icons/garsoniera1.jpg")}
                alt="garsoniera1"
              />
              <span>
                Garsoniera Zona Selgros Se preda cu toate finisajele inclusiv
                Centrala pe gaz Romstal.
              </span>
            </div>
            <div>
              <img
                src={require("../icons/garsoniera1.jpg")}
                alt="garsoniera1"
              />
              <span>
                Garsoniera Zona Selgros Se preda cu toate finisajele inclusiv
                Centrala pe gaz Romstal.
              </span>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Rents;
