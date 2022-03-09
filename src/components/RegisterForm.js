import React, { useState } from "react";
import "./RegisterForm.css";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("client");

  const handleSubmit = async () => {
    // await axios.post(
    //   "http://127.0.0.1:8000/register/",
    //   {
    //     name: name,
    //     email: email,
    //     password: password,
    //   },
    //   {
    //     headers: {
    //       "x-csrf-token": document.querySelector("#csrf"),
    //     },
    //   }
    // );
    await axios.get(
      `http://127.0.0.1:8000/register/${name}/${email}/${password}/${select}`,
      {
        params: {
          name: name,
          email: email,
          password: password,
          role: select,
        },
      }
    );
    console.log(name, email, password, select);
  };

  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

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
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
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
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(() => e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-around align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                          value={select}
                          onChange={(e) => setSelect(() => e.target.value)}
                        >
                          <option default value="client">
                            Client
                          </option>
                          <option value="agent">Agent Imobiliar</option>
                        </select>
                      </div>

                      <div className="d-flex justify-content-around align-items-center mb-4">
                        <span>Already have an account?</span>
                        <a href="/login">Sing In!</a>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg col-12"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                            setName(() => "");
                            setEmail(() => "");
                            setPassword(() => "");
                          }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://www.kindpng.com/picc/m/37-371045_open-door-png-open-door-clipart-transparent-background.png"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
