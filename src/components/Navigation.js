import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="pt-3">
        <Container>
          <Navbar.Brand>
            <img src="images/logo.svg" alt="Logo"></img>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Головна</Nav.Link>
            <Nav.Link href="/map">Інтерактивна карта</Nav.Link>
            <Nav.Link href="/about">Про нас</Nav.Link>
          </Nav>
          <Button variant="warning" className="p-3">
            Завантажити додаток
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
