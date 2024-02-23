import React from "react";
import { Container } from "react-bootstrap";

const NoData = ({ text }) => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <h1 className="text-center" style={{ color: "#54C999" }}>
        {text}
      </h1>
    </Container>
  );
};

export default NoData;
