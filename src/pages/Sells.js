import React from "react";
import "./Sells-Rents.css";
import Locuinta from "../components/Locuinta";
import { useState } from "react";
import { image as im, description as descript } from "../components/Write.js";

const Sells = () => {
  const [image] = useState(im);
  const [description] = useState(descript);

  return (
    <>
      <main className="content-main">
        <article id="residential" className="content-type">
          <h1>Residential</h1>
          <section id="garsonierezidential">
            <h3>Garsoniera</h3>
            <Locuinta image={image} description={description} />
            <Locuinta image={image} description={description} />
          </section>
          <section id="apartmentrezidential">
            <h3>Apartment</h3>
            <Locuinta image={image} description={description} />
          </section>
          <section id="houserezidential">
            <h3>House</h3>
            <Locuinta image={image} description={description} />
          </section>
        </article>
        <article id="comercial" className="content-type">
          <h1>Commercial</h1>
          <section id="garsonieracomerial">
            <h3>Garsoniera</h3>
            <Locuinta image={image} description={description} />
            <Locuinta image={image} description={description} />
          </section>
          <section id="apartmentcomerial">
            <h3>Apartment</h3>
            <Locuinta image={image} description={description} />
            <Locuinta image={image} description={description} />
          </section>
          <section id="housecomerial">
            <h3>House</h3>
            <Locuinta image={image} description={description} />
            <Locuinta image={image} description={description} />
          </section>
        </article>
      </main>
    </>
  );
};

export default Sells;
