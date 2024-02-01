import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
// import Stripe from "stripe";
import qs from "qs";
import Swal from "sweetalert2";
import "./User.css";
import { currentUserData } from "../../Redux/uReducer";
import { useDispatch } from "react-redux";
import { SERVERURL } from "../../ServerUrl";
import { useNavigate } from "react-router-dom";
function UserLogin() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const newHandleClick = async (e) => {
    e.preventDefault();
    let stringy = qs.stringify(inputData);
    let formData = new FormData();
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);
    try {
      const response = await SERVERURL.post("auth/token/login/", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencode",
        },
      });
      if (response) {
        console.log(response?.data?.token?.auth_token);
        sessionStorage.setItem(
          "clientToken",
          response?.data?.token?.auth_token
        );
        dispatch(currentUserData(response?.data));
        Swal.fire("Login successfully", "", "success");
        Navigate("/");
      }
    } catch (err) {
      console.log(err);
      Swal.fire(
        err?.response?.data?.non_field_errors[0] || "Login successfully",
        "",
        "error"
      );
    }
  };
  const loginClicked = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${SERVERURL}/auth/user/login/`,
        inputData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            // Authorization: "TOKEN 878586c77a8029bd34c5fde58c38d952eb0a5ded",
          },
        }
      );
      console.log("response", response);

      if (response?.data?.status) {
        dispatch(currentUserData(response?.data?.user));
        swal("Successfully", response?.data?.message, "success");
      }
    } catch (error) {
      console.error("error", error);

      swal("Failed", error?.response?.data?.message, "error");
    }
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div style={{ height: "90vh" }} className="d-flex align-items-center">
        <div
          // onSubmit={newHandleClick}
          style={{ transform: "translateZ(30px)" }}
          className="user-form mx-auto  d-flex justify-content-center align-items-center flex-column"
        >
          <p className="small-sub-heading">Login User</p>

          <label className="align-self-start user-label">Email</label>
          <input
            onChange={handleChange}
            name="email"
            className="user-input"
            type="text"
            value={inputData?.email}
          />

          <label className="align-self-start user-label">password</label>
          <input
            onChange={handleChange}
            name="password"
            className="user-input"
            type="password"
            value={inputData?.password}
          />
          <button
            className="nav-btn green-button-shadow py-2 my-3"
            onClick={(e) => {
              newHandleClick(e);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
