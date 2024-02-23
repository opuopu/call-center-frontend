import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { SERVERURL, BASE_URL } from "../../ServerUrl";
// import Stripe from "stripe";
import "./User.css";
import queryString from "query-string";
import { useSelector } from "react-redux";
//const BASE_URL = "http://nawaf.pythonanywhere.com";

function User() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const active = useSelector((state) => state?.CustomerReducer?.currentUser);
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    userType: "",
    email: "",
    firstname: "",
    checked: false,
  });
  console.log(active, "active");
  const handleSubmit = async (e) => {
    let formData = new FormData();
    try {
      e.preventDefault();

      if (
        inputData?.username === "" ||
        inputData?.password === "" ||
        inputData?.confirmpassword === "" ||
        inputData?.userType === "" ||
        inputData?.email === "" ||
        inputData?.firstname === ""
      ) {
        return Swal.fire("No fields can't be empty", "", "error");
      }
      if (inputData?.password !== inputData?.confirmpassword) {
        return Swal.fire(
          "Password and confirm password should be same",
          "",
          "error"
        );
      }
      formData.append("email", inputData?.email);
      formData.append("role", inputData?.userType);
      formData.append("username", inputData?.username);
      formData.append("password", inputData?.password);
      let response = await SERVERURL.post(`auth/users/`, formData);
      console.log("Response from backend: ", response);

      if (response?.status === 201) {
        let data = queryString.stringify({
          company: active?.company_detail[0]?.["0"],
          user: response?.data.id,
        });
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: `${BASE_URL}/api/v1/team/`,
          headers: {
            Authorization: `Token ${sessionStorage?.getItem("clientToken")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: data,
        };

        axios
          .request(config)
          .then((response) => {
            console.log("JSON", JSON.stringify(response.data));
            Swal.fire("User Created", "", "success");
            setInputData({
              username: "",
              password: "",
              confirmpassword: "",
              userType: "",
              email: "",
              firstname: "",
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire("User creation failed", "", "error");
          });

        // Navigate("/team");
        // localStorage.setItem("token", response?.data?.access);
      } else {
        Swal.fire("User creation failed", "", "error");
      }
    } catch (error) {
      console.log(error);
      let ress = "";
      {
        Object.keys(error?.response?.data).map((key) => {
          ress = ress + error?.response?.data[key] + "\n";
        });
      }
      Swal.fire(ress || "User creation failed", "", "error");
    }
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div style={{ height: "100vh" }} className="d-flex align-items-center ">
        <form
          onSubmit={handleSubmit}
          style={{ transform: "translateZ(30px)" }}
          className="user-form mx-auto d-flex justify-content-center align-items-center flex-column"
        >
          <p className="small-sub-heading">Create New User</p>

          <label className="align-self-start user-label">Name</label>
          <input
            onChange={handleChange}
            name="firstname"
            className="user-input"
            type="text"
            placeholder="Enter name"
            value={inputData?.firstname}
          />
          <label className="align-self-start user-label">Username</label>
          <input
            onChange={handleChange}
            name="username"
            className="user-input"
            type="text"
            placeholder="Enter username"
            value={inputData?.username}
          />
          <label className="align-self-start user-label">Email</label>
          <input
            onChange={handleChange}
            name="email"
            className="user-input"
            type="text"
            placeholder="Enter email"
            value={inputData?.email}
          />
          <label className="align-self-start user-label">User Type</label>
          {/* <input
            onChange={handleChange}
            name="userType"
            className="user-input"
            type="text"
            value={inputData?.userType}
          /> */}

          <select
            onChange={handleChange}
            name="userType"
            id="user-select"
            className="user-input"
          >
            <option default disabled selected value="manager">
              Select
            </option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="User">End User</option>
          </select>

          <label className="align-self-start user-label">Password</label>
          <input
            onChange={handleChange}
            name="password"
            className="user-input"
            type={inputData.checked == true ? "text" : "password"}
            placeholder="Enter password"
            value={inputData?.password}
          />
          <label className="align-self-start user-label">
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            name="confirmpassword"
            className="user-input"
            type={inputData.checked == true ? "text" : "password"}
            placeholder="Enter confirm password"
            value={inputData?.confirmpassword}
          />
          <div className="d-flex flex-row justify-content-start w-100 mt-2">
            <input
              onChange={(e) => {
                setInputData({ ...inputData, checked: e.target.checked });
              }}
              className="me-2"
              type="checkbox"
              checked={inputData?.checked}
            />
            <div className="">Show Password</div>
          </div>
          <button className="nav-btn green-button-shadow py-2 my-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default User;
