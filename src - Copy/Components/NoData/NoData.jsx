import React from "react";
import { Container } from "react-bootstrap";

const NoData = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h1 className="text-center" style={{ color: "#54C999" }}>Sorry No Context Found!</h1>
    </Container>
  );
};

export default NoData;
