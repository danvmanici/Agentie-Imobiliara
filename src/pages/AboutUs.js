import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <main className="content-about">
      <span className="about">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </span>
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
