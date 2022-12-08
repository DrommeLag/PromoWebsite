import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="pt-3 mb-5">
        <Container>
          <Navbar.Brand>
            <img src="images/logo.svg" alt="Logo"></img>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Головна</Nav.Link>
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
