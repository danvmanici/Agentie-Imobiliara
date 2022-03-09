import React from "react";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ro",
    name: "Română",
    country_code: "ro",
  },
];

const GlobeIcon = ({ width = 24, height = 24, fill = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
);

const NavBar = () => {
  const { t } = useTranslation();

  const logOut = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("role");
  };

  const checkLogin = () => {
    let isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      return (
        <>
          <li>
            <a href="/" onClick={logOut}>
              Logout
            </a>
          </li>
          <li>
            <a href="/user">Account</a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </>
      );
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.756 192.756"
            >
              <g fillRule="evenodd" clipRule="evenodd">
                <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                <path
                  d="M34.699 154.719s7.145-15.717 14.289-18.098c7.145-2.383-9.525 2.857-9.525 2.857s10.478-18.574 42.389-24.768C66.61 109.949 67.087 99.947 70.42 93.279c-3.81 0-8.573 1.429-10.478 2.381s6.668-10.479 24.291-10.479c3.81-.952-8.573-3.334-11.907-3.334 9.525-2.381 22.861-2.857 26.672-1.905 1.904-6.668 5.238-10.954 6.191-12.859.953-1.905 4.287-7.145 13.812-4.287s12.859 4.763 12.859 4.763 6.082 15.718 28.102 20.004c-7.146-6.192-20.957-12.86-20.957-24.291-11.908-6.668-32.387-12.383-35.246-12.383 2.383-.953 2.857 0 3.811-2.382.953-2.381 1.906-22.861-2.381-27.624-2.857 11.431-5.715 15.717-8.573 19.527 0-4.287 1.429-18.575-4.763-22.861-6.668 15.241-9.959 17.104-16.67 23.814-5.239 5.239-9.049 12.383-9.525 13.812-7.144 1.429-26.672 7.145-39.531 18.099 1.905 0 5.715-2.857 6.668-.476-2.381 1.905-8.573 7.621-12.86 11.431-4.287 3.81-10.955 18.575-11.431 21.432 3.334-.951 4.763-.477 8.097-2.381-1.539 6.193-6.597 30.484 18.098 51.439z"
                  fill="#574a79"
                />
                <path
                  d="M113.762 74.704s10.479-.476 13.336 0 4.287.953 5.717 2.858c1.428 1.905 6.191 4.763 6.191 4.763s-8.098 1.429-11.908-.477c-3.809-1.905-3.334-3.334-5.238-4.763s-4.288-1.904-8.098-2.381zM77.088 132.334s12.86-14.764 36.199-14.764c23.338 0 33.338.475 38.102.951s16.395.252 23.338-10.479c5.238-8.096-4.764-12.859-4.764-12.859s2.568-.476 4.764-1.429c4.287 3.811 9.525 3.811 9.525 5.239 0 1.43-2.857 8.098-4.287 9.525-1.428 1.43-6.666 12.859-15.24 14.766-8.572 1.904-24.768 2.381-28.576 2.381-3.811 0-25.244-.477-34.77 13.812-7.345 11.018 7.621 31.434 23.338 34.293-14.289 7.143-80.968-12.859-32.863-45.248-6.192-.475-11.908 2.384-14.766 3.812z"
                  fill="#574a79"
                />
                <path
                  d="M76.136 59.939s4.763-15.241 6.668-17.622c1.905-2.381 6.191-8.573 8.573-14.765.953 5.715-.953 22.385-3.334 25.243-2.857.476-7.621 2.858-11.907 7.144z"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
        </div>
        <div className="main-navbar">
          <ul>
            <li>
              <a href="/">{t("home")}</a>
            </li>
            <li>
              <a href="/news">{t("news")}</a>
            </li>
            <li>
              <a href="/about-us">{t("about-us")}</a>
            </li>
            <li>
              <a href="/rents">{t("rents")}&#9660;</a>
              <ul className="dropdown">
                <li>
                  <a href="/rents#rezidential">{t("residential")} &#9658;</a>
                  <ul className="dropdown right-menu">
                    <li>
                      <a href="/rents#garsonierarezidential">
                        {t("garsoniera")}
                      </a>
                    </li>
                    <li>
                      <a href="/rents#apartmentrezidential">{t("apartment")}</a>
                    </li>
                    <li>
                      <a href="/rents#houserezidential">{t("house")}</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/rents#comercial">{t("comercial")} &#9658;</a>
                  <ul className="dropdown right-menu">
                    <li>
                      <a href="/rents#garsonieracomerial">{t("garsoniera")}</a>
                    </li>
                    <li>
                      <a href="/rents#apartmentcomerial">{t("apartment")}</a>
                    </li>
                    <li>
                      <a href="/rents#housecomerial">{t("house")}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/sells">{t("sells")}&#9660;</a>
              <ul className="dropdown">
                <li>
                  <a href="/sells#rezidential">{t("residential")} &#9658;</a>
                  <ul className="dropdown right-menu">
                    <li>
                      <a href="/sells#garsonierarezidential">
                        {t("garsoniera")}
                      </a>
                    </li>
                    <li>
                      <a href="/sells#apartmentrezidential">{t("apartment")}</a>
                    </li>
                    <li>
                      <a href="/sells#houserezidential">{t("house")}</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/sells#comercial">{t("comercial")} &#9658;</a>
                  <ul className="dropdown right-menu">
                    <li>
                      <a href="/sells#garsonieracomerial">{t("garsoniera")}</a>
                    </li>
                    <li>
                      <a href="/sells#apartmentcomerial">{t("apartment")}</a>
                    </li>
                    <li>
                      <a href="/sells#housecomerial">{t("house")}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact">{t("contact")}</a>
            </li>
            {checkLogin()}

            <li>
              <GlobeIcon />

              <ul className="dropdown">
                {languages.map(({ code, name, country_code }) => (
                  <li key={country_code}>
                    <button
                      className="btn-black"
                      href="#"
                      onClick={() => {
                        i18next.changeLanguage(code);
                      }}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
