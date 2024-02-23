import React from "react";
import changePasswordLogo from "../assets/password.svg";
import PasswordChangeForm from "../Components/PasswordChangeForm/PasswordChangeForm.jsx";
const ChangePassword = () => {
  return (
    <div className="container " style={{ height: "100vh", marginTop: "120px" }}>
      <div className="row  my-auto align-items-center ">
        <div className="col-lg-6">
          <img className="img-fluid" src={changePasswordLogo} alt="" />
        </div>
        <div className="col-lg-6">
          <PasswordChangeForm />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
