import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import viewPoint1 from "../img/view-point1.svg";
import viewPoint2 from "../img/view-point2.svg";
import viewPoint3 from "../img/view-point3.svg";

function ModalCity(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Львів</Modal.Title>
          <h6 className="m-3 text-secondary">12 пам'яток</h6>
        </Modal.Header>
      </Container>
      <Modal.Body>
        <Container className="text-center">
          <Row>
            <Col xs={6} md={4}>
              <Image src={viewPoint1} alt="View point 1" />
            </Col>
            <Col xs={6} md={4}>
              <Image src={viewPoint2} alt="View point 2" />
            </Col>
            <Col xs={6} md={4}>
              <Image src={viewPoint3} alt="View point 3" />
            </Col>
          </Row>
          <p className="pt-4">
            Це місто з маленькими вуличками, та багатою архітектурою, де поряд з
            національною, успішно прижилися польська, єврейська, та вірменська
            культури. Львів вражає численними музеями, величними соборами,
            неймовірними рестораціями, та людьми.
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Назад
        </Button>
        <Button variant="warning">Досліджувати</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCity;
