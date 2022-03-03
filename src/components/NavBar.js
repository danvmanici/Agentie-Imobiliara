import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="logo">
          <a href="/">
            <img src={require("../icons/background.jpg")} alt="logo" />
          </a>
        </div>
        <div class="main-navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/about-us">AboutUs</a>
            </li>
            <li>
              <a href="/rents">Rents&#9660;</a>
              <ul class="dropdown">
                <li>
                  <a href="/rents#rezidential">Residential &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/rents#garsonierarezidential">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/rents#apartmentrezidential">Apartment</a>
                    </li>
                    <li>
                      <a href="/rents#houserezidential">House</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/rents#comercial">Commercial &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/rents#garsonieracomerial">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/rents#apartmentcomerial">Apartment</a>
                    </li>
                    <li>
                      <a href="/rents#housecomerial">House</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/sells">Sells&#9660;</a>
              <ul class="dropdown">
                <li>
                  <a href="/sells#rezidential">Residential &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/sells#garsonierarezidential">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/sells#apartmentrezidential">Apartment</a>
                    </li>
                    <li>
                      <a href="/sells#houserezidential">House</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/sells#comercial">Commercial &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/sells#garsonieracomerial">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/sells#apartmentcomerial">Apartment</a>
                    </li>
                    <li>
                      <a href="/sells#housecomerial">House</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
