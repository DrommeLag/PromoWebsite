import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="pt-3">
        <Container>
          <Navbar.Brand href="#home">
            <img src="images/logo.svg" alt="Logo"></img>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/home">Головна</Nav.Link>
            <Nav.Link href="/about">Про додаток</Nav.Link>
            <Nav.Link href="/map">Інтерактивна карта</Nav.Link>
          </Nav>
          <Button variant="warning">Встановити додаток</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
