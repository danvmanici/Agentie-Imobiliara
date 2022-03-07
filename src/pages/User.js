import React, { useState } from "react";
import UploadFile from "../components/UploadFile";
import "./User.css";
import axios from "axios";

const User = () => {
  let data = sessionStorage.getItem("user");
  data = JSON.parse(data);
  const id = data.id;
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [rgarsoniera, setRGarsoniera] = useState(data.rgarsoniera);
  const [rapartament, setRapartament] = useState(data.rapartament);
  const [rcasa, setRcasa] = useState(data.rcasa);
  const [cgarsoniera, setCGarsoniera] = useState(data.cgarsoniera);
  const [capartament, setCapartament] = useState(data.capartament);
  const [ccasa, setCcasa] = useState(data.ccasa);

  const handleSave = async () => {
    await axios.get(
      `http://127.0.0.1:8000/register/${id}/${name}/${email}/${rgarsoniera}/${rapartament}/${rcasa}/${cgarsoniera}/${capartament}/${ccasa}`,
      {
        params: {
          id: id,
          name: name,
          email: email,
          rgarsoniera: rgarsoniera,
          rapartament: rapartament,
          rcasa: rcasa,
          cgarsoniera: cgarsoniera,
          capartament: capartament,
          ccasa: ccasa,
        },
      }
    );
    console.log(
      name,
      email,
      rgarsoniera,
      rapartament,
      rcasa,
      cgarsoniera,
      capartament,
      ccasa
    );
  };

  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={name}
                              onChange={(e) => setName(() => e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(() => e.target.value)}
                            />
                          </div>
                        </div>

                        <section className="multiselect ">
                          <div>Rezidential</div>
                          <div className="rezidential-comercial ">
                            <span>
                              <span>
                                <input
                                  type="checkbox"
                                  name="agree"
                                  id="rgarsoniera"
                                  value="on"
                                  checked={rgarsoniera}
                                  onChange={() =>
                                    setRGarsoniera(() => Number(!rgarsoniera))
                                  }
                                />
                                <label htmlFor="rgarsoniera">Garsoniera</label>
                              </span>
                              <span>
                                <input
                                  type="checkbox"
                                  name="agree"
                                  id="raapartament"
                                  value="on"
                                  checked={rapartament}
                                  onChange={() =>
                                    setRapartament(() => Number(!rapartament))
                                  }
                                />
                                <label htmlFor="raapartament">Apartament</label>
                              </span>
                              <span>
                                <input
                                  type="checkbox"
                                  name="agree"
                                  id="rcasa"
                                  value="on"
                                  checked={rcasa}
                                  onChange={() =>
                                    setRcasa(() => Number(!rcasa))
                                  }
                                />
                                <label htmlFor="rcasa">Casa</label>
                              </span>
                            </span>
                          </div>
                          <div>Comercial</div>
                          <div className="rezidential-comercial">
                            <span>
                              <span>
                                <input
                                  type="checkbox"
                                  name="agree"
                                  id="cgarsoniera"
                                  value="on"
                                  checked={cgarsoniera}
                                  onChange={() =>
                                    setCGarsoniera(() => Number(!cgarsoniera))
                                  }
                                />
                                <label htmlFor="cgarsoniera">Garsoniera</label>
                              </span>
                              <span>
                                <input
                                  type="checkbox"
                                  name="agree"
                                  id="capartament"
                                  value="on"
                                  checked={capartament}
                                  onChange={() =>
                                    setCapartament(() => Number(!capartament))
                                  }
                                />
                                <label htmlFor="capartament">Apartament</label>
                              </span>
                              <span>
                                <input
                                  type="checkbox"
                                  name="agree"
                                  id="ccasa"
                                  value="on"
                                  checked={ccasa}
                                  onChange={() =>
                                    setCcasa(() => Number(!ccasa))
                                  }
                                />
                                <label htmlFor="ccasa">Casa</label>
                              </span>
                            </span>
                          </div>
                        </section>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 button-save">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg col-4"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSave();
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="data:image/jpeg;base64,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0g9P4CC/qtN5HjvcAPqOXPNktnZdSqmU8Vw30ppbboY773d56AOJ7ASPpHT6KOnijhhaGsiYGMaOAaLDv71z/wDIVtmO7Wr17f36dzPQhd7TMpERcc2wtXr2jQV8D6epbk128EbnMcOh7DwI/wDYNwSFtEUptO6DVz5s2v2QqdMktIC+JxtFUNBxf1Nd6juw9PC688vq2qpmSsdHMxsjHiz2PaHNcOog7iuabSckcUhMmnS8yTv5mbJ8fc1+9zPbl7F1qGPjLKpk+vL+vTsas6DXCcdRei1TYbU6YnnKOV4Hy4Bz4PaMLke0BaCeJ0RtK10Z6pGuYfBy34yjLhdzA01qixFbzjfWHiE5xvrDxCvsvoQXIrecb6w8QnON9YeITZfQFyK3nG+sPEJzjfWHiE2X0Bcit5xvrDxCc431h4hNl9AXIrecb6w8QnON9YeITZfQFyK3nG+sPEJzjfWHiE2X0Bcit5xvrDxCc431h4hNl9AXIrecb6w8QnON9YeITZfQFyKsLS92MYL3eqwFx8BvW903YzUqm3NUU4B+VK3mG995LX9l1WUlHidu+RKTehoVuNmNmanUpubpWbgRzszgebiHW48T1NG891yOhbOckIBD9TlDuPM05cAex0psT3NA7107T6GKnjbFTxsjY30WMaGgdZ3ce3itCvj4Ryp5vry/v07maFBvORgbK7OQabAIacXJ3yyutlK71nfoOAW7RFyJScnd6m0lbJBERQSEREAREQBY9f8A8s94/uiISapERVAREQBERAEREAREQBERAEREAREQGz070PaspEUocgiIpICIiAIiID//2Q=="
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                    <UploadFile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
