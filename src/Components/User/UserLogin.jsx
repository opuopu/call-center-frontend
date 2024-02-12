import React, { useState } from "react";

import Swal from "sweetalert2";
import "./User.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../Redux/api/authApi";
import { setUser } from "../../Redux/features/auth/authSlice";

function UserLogin() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const [signInUser] = useSignInMutation();

  const newHandleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await signInUser(inputData).unwrap();
      console.log("res", response);
      if (response) {
        const userInfo = {
          ...response.data.user,
        };
        delete userInfo.password;
        // delete userInfo._id;
        dispatch(
          setUser({ token: response?.data?.accessToken, user: userInfo })
        );
      }
      Swal.fire(response?.message, "", "success");
      Navigate("/");
    } catch (err) {
      console.log(err);
      Swal.fire(err?.data?.message, "", "error");
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
