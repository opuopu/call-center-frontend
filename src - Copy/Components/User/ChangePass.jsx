import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Stripe from "stripe";
import "./User.css";
import C3Context from "../../Context/C3Context.";

function ChangePass() {
  const { changePass } = useContext(C3Context);

  const { email } = useParams();
  const Navigate = useNavigate();

  const [inputData, setInputData] = useState({
    confirmPassword: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (inputData?.password === inputData?.confirmPassword) {
        changePass(email, inputData?.password)
          .then((data) => {
            console.log("Change Password: ", data);
            localStorage.setItem("user_token", data?.data?.access);
            Navigate("/");
          })
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      } else {
        toast.warn("Password doesn't match", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      <div style={{ height: "90vh" }} className="d-flex align-items-center">
        <form
          onSubmit={handleSubmit}
          style={{ transform: "translateZ(30px)" }}
          className="user-form mx-auto  d-flex justify-content-center align-items-center flex-column"
        >
          <p className="small-sub-heading">Change Password</p>

          <label className="align-self-start user-label">Password</label>
          <input
            onChange={handleChange}
            name="password"
            className="user-input"
            type="password"
            value={inputData?.password}
          />

          <label className="align-self-start user-label">
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            name="confirmPassword"
            className="user-input"
            type="password"
            value={inputData?.confirmPassword}
          />
          <button className="nav-btn green-button-shadow py-2 my-3">
            Change Password
          </button>
        </form>
      </div>
    </>
  );
}

export default ChangePass;
