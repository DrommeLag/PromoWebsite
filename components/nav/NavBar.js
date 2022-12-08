import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <a class="navbar-brand" href="#home"><img id="logo" alt="logo" src="images/nav_logo.svg" /></a>
        <ul>
          <li>
            <a href="/home">Додаток</a>
          </li>
          <li>
            <a href="/map">Інтерактивна карта</a>
          </li>
          <li>
            <a href="/about">Про нас</a>
          </li>
        </ul>
        <button className="button_landing_about" id="nav_btn" ><a href="https://play.google.com">Завантажити додаток</a></button>
      </nav>
    </>
  );
}

export default NavBar;
