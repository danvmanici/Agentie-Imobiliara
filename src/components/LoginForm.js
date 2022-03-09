import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    // await axios.post("http://127.0.0.1:8000/login/", {
    //   email: email,
    //   password: password,
    // });
    const res = await axios.get(
      `http://127.0.0.1:8000/register/${email}/${password}`,
      {
        params: {
          email: email,
          password: password,
        },
      }
    );
    console.log(res.data);
    if (!!res.data) {
      sessionStorage.setItem("user", JSON.stringify(res.data));
      sessionStorage.setItem("isLoggedIn", true);
      window.location.href = "/user";
    }
    console.log(email, password);
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://st.depositphotos.com/1552219/1341/i/600/depositphotos_13418740-stock-photo-lock-and-key.jpg"
              className="img-fluid"
              alt="Phone"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign In
                </p>
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(() => e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(() => e.target.value)}
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <span>Don't have an account?</span>
                <a href="/register">Sing Up!</a>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg col-12"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  setEmail(() => "");
                  setPassword(() => "");
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
