import React from "react";
import warning from "../assets/warning-2.svg";
import { useResetSessionMutation } from "../Redux/api/userResponseApi.js";
import Swal from "sweetalert2";
import Loading from "../utils/Loading.jsx";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../Redux/hooks.js";
import { useCurrentUser } from "../Redux/features/auth/authSlice.js";
const ResetSessions = () => {
  const [resetSession, { isLoading }] = useResetSessionMutation();
  const { role } = useAppSelector(useCurrentUser) || {};
  const navigate = useNavigate();
  const reset = async () => {
    try {
      const res = await resetSession().unwrap();
      if (res?.success) {
        Swal.fire({
          title: "Deleted!",
          text: `${res?.message}`,
          icon: "success",
        });
      }
    } catch (err) {
      Swal.fire(err?.message, "", "error");
    }
  };
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6">
          <img className="img-fluid" src={warning} alt="" />
        </div>
        <div className="col-6">
          <h3>Ah! I see you have answered all of the quizzes.</h3>
          <h5
            style={{
              color: "#54C999",
            }}
          >
            Do you want to reset the session?
          </h5>
          <button
            onClick={reset}
            style={{
              border: "none",
              color: "white",
              backgroundColor: "#54C999",
              padding: "6px 20px",
              borderRadius: "2px",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            {isLoading ? <Loading /> : " Reset And Start Again"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetSessions;
