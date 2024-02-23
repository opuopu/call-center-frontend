import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Speaker from "../../assets/Shape.png";
import Speaker2 from "../../assets/Speaker2.png";
import "./SpeakerContainer.css";

function SpeakerContainer(props) {
  return (
    <>
      <InputGroup  className={`${props?.check === "mood" ? "Speaker-Input-2" : "Speaker-Input" } mb-3 `}>
        <Button variant="outline-secondary" id="button-addon1">
          <img width="20" src={Speaker2} alt="Speaker" />
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}

export default SpeakerContainer;
