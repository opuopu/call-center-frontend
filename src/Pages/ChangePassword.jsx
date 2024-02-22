import React from "react";
import changePasswordLogo from "../assets/password.svg";
import PasswordChangeForm from "../Components/PasswordChangeForm/PasswordChangeForm.jsx";
import { Container } from "react-bootstrap";
const ChangePassword = () => {
  return (
    <Container className="justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="row mx-auto align-items-center">
        <div className="col-lg-6">
          <img className="img-fluid" src={changePasswordLogo} alt="" />
        </div>
        <div className="col-lg-6">
          <PasswordChangeForm />
        </div>
      </div>
    </Container>
  );
};

export default ChangePassword;
