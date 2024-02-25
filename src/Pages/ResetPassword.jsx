import React, { useEffect } from "react";
import changePasswordLogo from "../assets/password.svg";
import { useLocation } from "react-router-dom";
import ResetPasswordForm from "../Components/PasswordResetForm/PasswordResetForm.jsx";
import { useAppDispatch } from "../Redux/hooks.js";
import { setUser } from "../Redux/features/auth/authSlice.js";
const ResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(setUser({ token: token }));
    }
  }, [dispatch, token]);
  return (
    <div className="container " style={{ height: "100vh", marginTop: "120px" }}>
      <div className="row  my-auto align-items-center ">
        <div className="col-lg-6">
          <img className="img-fluid" src={changePasswordLogo} alt="" />
        </div>
        <div className="col-lg-6">
          <ResetPasswordForm email={email} token={token} />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
