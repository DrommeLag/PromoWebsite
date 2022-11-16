import React, { useState } from "react";
import { Container, Button, Image } from "react-bootstrap";
import ModalCity from "./ModalCity";

function MapSection() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Container className="pt-4">
        <div className="d-flex justify-content-between">
          <div className="w-25">
            <h6 className="text-secondary pb-3">Обрати режим</h6>
            <div className="d-flex justify-content-between text-start">
              <div>
                <Button variant="warning" size="sm" className="p-2">
                  <Image src="images/view-points.svg" alt="View points" />
                </Button>{" "}
                <span>Пам'ятки</span>
              </div>
              <div>
                <Button variant="light" size="sm" className="p-2">
                  <Image src="images/lock.svg" alt="View points" />
                </Button>{" "}
                <span>Мова</span>
              </div>
              <div>
                <Button variant="light" size="sm" className="p-2">
                  <Image src="images/lock.svg" alt="View points" />
                </Button>{" "}
                <span>Культура</span>
              </div>
            </div>
          </div>
          <div className="w-50 d-flex justify-content-between">
            <div className="bg-light p-3 rounded">
              Досліджуй Україну за допомогою інтерактивної карти! Для повного
              функціоналу, скачуй додаток за QR кодом нижче!
            </div>
            <Image src="images/character.svg" alt="Character" />
          </div>
        </div>
        <Container>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <Image
              src="images/map.svg"
              alt="Map"
              onClick={() => setModalShow(true)}
            />
            <ModalCity show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Container>
        <Container className="pt-4 pb-4">
          <div className="d-flex justify-content-between">
            <div className="w-25">
              <h6 className="text-secondary">Сподобався інтерактив?</h6>
              <h4 className="text-primary">
                Скануй QR код та встановлюй додаток!
              </h4>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <Button variant="warning" size="sm" className="p-3">
                  <Image src="images/question.svg" alt="View points" />
                </Button>{" "}
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default MapSection;
