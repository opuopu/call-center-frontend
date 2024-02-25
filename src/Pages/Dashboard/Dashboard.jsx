import React from "react";
import { useAppSelector } from "../../Redux/hooks.js";
import { useCurrentUser } from "../../Redux/features/auth/authSlice.js";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  const user = useAppSelector(useCurrentUser);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-center" style={{ color: "#54C999" }}>
        Welcome Back, {user?.userName}
      </h1>
    </Container>
  );
};

export default Dashboard;
