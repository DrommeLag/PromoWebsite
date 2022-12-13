import React from "react";
import { Image } from "react-bootstrap";

function CharacterModal() {
  return (
    <div className=" d-flex justify-content-between">
      <div className="bg-light p-3 rounded">
        Досліджуй Україну за допомогою інтерактивної карти! Для повного
        функціоналу, скачуй додаток!
      </div>
      <Image src="images/character.svg" alt="Character" />
    </div>
  );
}

export default CharacterModal;
