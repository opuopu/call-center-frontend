import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Swal from "sweetalert2";
import "./User.css";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignInMutation } from "../../Redux/api/authApi";
import { setUser, useCurrentUser } from "../../Redux/features/auth/authSlice";
import { useAppSelector } from "../../Redux/hooks.js";
import CustomModal from "../UI/Modal.jsx";
import ForgetPasswordForm from "../ForgetPasswordForm/ForgetPasswordForm.jsx";

function UserLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useAppSelector(useCurrentUser) || {};
  const Navigate = useNavigate();
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const [signInUser] = useSignInMutation();

  const newHandleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await signInUser(inputData).unwrap();

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

      if (response?.data?.user?.needPasswordChange) {
        navigate("/change-password");
      } else {
        Navigate(
          location?.state?.from?.pathname || `/${response?.data?.user?.role}`,
          {
            replace: true,
          }
        );
      }
    } catch (err) {
      console.log(err);
      Swal.fire(err?.data?.message, "", "error");
    }
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      {modal && (
        <CustomModal
          showModal={modal}
          setShowModal={setModal}
          title="Forget Password"
        >
          <ForgetPasswordForm setShowModal={setModal} />
        </CustomModal>
      )}
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
            onClick={handleModal}
            className="mt-2"
            style={{
              color: "gray",
              cursor: "pointer",
              border: "none",
              background: "none",
            }}
          >
            Forget Password?
          </button>
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
