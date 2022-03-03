import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="logo">
          <a href="/Home.html">
            <img src="./icons/logo.svg" alt="logo" />
          </a>
        </div>
        <div class="main-navbar">
          <ul>
            <li>
              <a href="/Home.html">Home</a>
            </li>
            <li>
              <a href="/News.html">News</a>
            </li>
            <li>
              <a href="/Aboutus.html">AboutUs</a>
            </li>
            <li>
              <a href="/Rents.html">Rents&#9660;</a>
              <ul class="dropdown">
                <li>
                  <a href="/Rents.html#rezidential">Residential &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/Rents.html#garsonierarezidential">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/Rents.html#apartmentrezidential">Apartment</a>
                    </li>
                    <li>
                      <a href="/Rents.html#houserezidential">House</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/Rents.html#comercial">Commercial &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/Rents.html#garsonieracomerial">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/Rents.html#apartmentcomerial">Apartment</a>
                    </li>
                    <li>
                      <a href="/Rents.html#housecomerial">House</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Sells.html">Sells&#9660;</a>
              <ul class="dropdown">
                <li>
                  <a href="/Sells.html#rezidential">Residential &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/Sells.html#garsonierarezidential">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/Sells.html#apartmentrezidential">Apartment</a>
                    </li>
                    <li>
                      <a href="/Sells.html#houserezidential">House</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/Sells.html#comercial">Commercial &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/Sells.html#garsonieracomerial">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/Sells.html#apartmentcomerial">Apartment</a>
                    </li>
                    <li>
                      <a href="/Sells.html#housecomerial">House</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
