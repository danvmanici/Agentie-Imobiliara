import React from "react";
import UploadFile from "../components/UploadFile";
import "./User.css";

const User = () => {
  let data = sessionStorage.getItem("user");
  data = JSON.parse(data);
  return (
    <>
      <section className="name-email">
        <span>Name: &nbsp; &nbsp; {data.name}</span>
        <span>Email: &nbsp; &nbsp; {data.email}</span>
      </section>
      <UploadFile />
    </>
  );
};

export default User;
