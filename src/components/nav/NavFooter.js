import React from "react";
import "./NavFooter.css";

function NavFooter() {
    return (
        <>
            <footer className="footer">
                <div className="elements">
                    <a class="navbar-brand" href="#home"><img id="f_logo" alt="logo" src="images/nav_logo.svg" /></a>
                    <div className="links">
                        <div className="first-column">
                            <a href="/">Додаток</a>
                            <a href="/map">Інтерактивна карта</a>
                            <a href="/about">Про нас</a>
                        </div>
                        <div className="second-column">
                            <a href="*">FQA</a>
                            <a href="*">Тех підтримка</a>
                            <a href="*">drommelag@gmail.com</a>
                        </div>
                    </div>
                    <button id="f_btn" className="button">
                        <a href="https://play.google.com"><span><img id="play_btn" alt="icon" src='images/main_page/play_btn.png' /></span>Download on Google Play</a>
                    </button>
                </div>

            </footer>
        </>
    );
}

export default NavFooter;
