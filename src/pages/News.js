import React from "react";
import "./News.css";
import XMLData from "./news.xml";
import axios from "axios";

const News = () => {
  axios
    .get(XMLData, {
      "Content-Type": "application/xml; charset=utf-8",
    })
    .then((response) => {
      const XMLParser = require("react-xml-parser");
      const xml = new XMLParser().parseFromString(response.data);

      document.querySelector("#title0").innerText =
        xml.getElementsByTagName("title")[0].value;
      document.querySelector("#description0").innerText =
        xml.getElementsByTagName("description")[0].value;

      document.querySelector("#title1").innerText =
        xml.getElementsByTagName("title")[1].value;
      document.querySelector("#description1").innerText =
        xml.getElementsByTagName("description")[1].value;

      document.querySelector("#title2").innerText =
        xml.getElementsByTagName("title")[2].value;
      document.querySelector("#description2").innerText =
        xml.getElementsByTagName("description")[2].value;
    });

  return (
    <>
      <article className="news-article">
        <section className="news-section">
          <h3 id="title0" className="news-h3">
            Title
          </h3>
          <div id="description0"></div>
        </section>
        <section className="news-section">
          <h3 id="title1" className="news-h3">
            Title
          </h3>
          <div id="description1"></div>
        </section>
        <section className="news-section">
          <h3 id="title2" className="news-h3">
            Title
          </h3>
          <div id="description2"></div>
        </section>
      </article>
    </>
  );
};

export default News;
