import React, { useState } from "react";
import { Container, Button, Image } from "react-bootstrap";
import CharacterModal from "./CharacterModal";
import ModalCity from "./ModalCity";
import map from "../img/map.svg";

function MapSection() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Container>
        <h6 className="text-secondary p-4">Обрати режим</h6>
        <div className="d-flex justify-content-between align-content-center">
          <div className="d-flex justify-content-start w-25">
            <div className="text-center">
              <Button variant="warning" size="sm" className="p-2">
                <Image src="images/view-points.svg" alt="View points" />
              </Button>{" "}
              <span>Пам'ятки</span>
            </div>
            <div className="text-center">
              <Button variant="light" size="sm" className="p-2">
                <Image src="images/lock.svg" alt="View points" />
              </Button>{" "}
              <span>Мова</span>
            </div>
            <div className="text-center">
              <Button variant="light" size="sm" className="p-2">
                <Image src="images/lock.svg" alt="View points" />
              </Button>{" "}
              <span>Культура</span>
            </div>
          </div>
          <div className="w-50">
            <CharacterModal />
          </div>
        </div>
        <Container>
          <div className="d-flex justify-content-center p-5 mt-5 mb-5">
            <Image src={map} alt="Map" onClick={() => setModalShow(true)} />
            <ModalCity show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Container>
        <Container className="pt-4 pb-5">
          <div className="d-flex justify-content-end">
            <div>
              <Button variant="warning" size="sm" className="p-3">
                <Image src="images/question.svg" alt="View points" />
              </Button>{" "}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default MapSection;
