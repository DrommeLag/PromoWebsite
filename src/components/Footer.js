import React from "react";
import { Container, Link } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="bg-secondary">
        <Container className="d-flex justify-content-between pt-4">
          <Image src="images/logo.svg" alt="Logo"></Image>
          <Container className=" w-50 text-light d-flex justify-content-between">
            <a href="/home" className="nav-link">
              Головна
            </a>
            <a href="/about" className="nav-link">
              Про додаток
            </a>
            <a href="/map" className="nav-link">
              Інтерактивна карта
            </a>
          </Container>
          <div className="text-light">
            <span>Зв'яжіться з нами</span>
            <br></br>
            <a>drommelag.corp@gmail.com</a>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
