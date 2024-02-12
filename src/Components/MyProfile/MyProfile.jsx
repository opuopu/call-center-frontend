import React, { useContext, useEffect, useState } from "react";
import "./MyProfile.css";
import ProfilePic from "../../assets/Group 1.png";
import C3Context from "../../Context/C3Context.";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProfileQuery } from "../../Redux/api/authApi";
import CustomModal from "../../UI/Modal.jsx";
import UpdatePassword from "../UpdatePassword/UpdatePassword.jsx";

function MyProfileComp() {
  const { getProfiledata, changeProfile } = useContext(C3Context);
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal((prev) => !prev);
  };
  console.log(modal);
  const [profileValues, setProfileValues] = useState({
    name: "",
    userName: "",
    email: "",
    image_url: "",
  });
  const [file, setFile] = useState("");

  const handleOnChange = (e) => {
    setProfileValues({ ...profileValues, [e.target.name]: e.target.value });
  };

  const {
    data: profileData,
    isLoading,
    isSuccess,
  } = useProfileQuery(undefined);

  // Following function is used to updaate the user profilel:

  const updateProfile = async () => {
    changeProfile(profileValues?.name, profileValues?.email, file)
      .then((data) => {
        console.log("Profile Update: ", data);
        toast("Profile updated successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((data) => {
        toast.error("OOPs something went wrong!", {
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
  };

  const handleOpenFile = () => {
    let file = document.querySelector(".open_file");
    file.click();
  };

  const handleSubmitFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div>
      {modal && (
        <CustomModal setShowModal={setModal} showModal={modal}>
          <UpdatePassword setShowModal={setModal} />
        </CustomModal>
      )}
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
      <ToastContainer />
      <div className="profile-container">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex justify-content-between align-items-center">
            <img
              className="mx-2 profile_image"
              width={60}
              src={
                profileValues?.image_url
                  ? `http://nawaf.pythonanywhere.com${profileValues?.image_url}`
                  : ProfilePic
              }
              alt=""
            />
            <input
              onChange={handleSubmitFile}
              className="align-self-end open_file d-none"
              type="file"
            />
            <button
              onClick={handleOpenFile}
              className="nav-btn align-self-end choose-file-btn"
            >
              Choose File
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "6px",
            }}
          >
            <button
              style={{
                backgroundColor: "#54C999",
              }}
              className="nav-btn nav-btn-shadow save-btn my-2"
            >
              Save Changes
            </button>
            <button
              onClick={handleModal}
              className="nav-btn nav-btn-shadow save-btn my-2"
            >
              Change Password
            </button>
          </div>
        </div>

        <div className="my-5 account-container">
          <h4 className="my-5">Account</h4>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="input-div">
              <label className="align-self-start" htmlFor="name">
                Name
              </label>
              <input
                // value={profileValues?.name}
                defaultValue={profileData?.data?.name}
                className="custom-box-style input_outline"
                type="text"
                id="name"
                name="name"
                onChange={handleOnChange}
              />
            </div>
            <div className="input-div">
              <label className="align-self-start " htmlFor="username">
                User Name
              </label>
              <input
                defaultValue={profileData?.data?.userName}
                className="custom-box-style input_outline"
                type="text"
                id="username"
                name="userName"
                onChange={handleOnChange}
              />
            </div>
            <div className="input-div">
              <label className="align-self-start" htmlFor="email">
                Email
              </label>
              <input
                defaultValue={profileData?.data?.email}
                className="custom-box-style input_outline"
                type="text"
                id="email"
                name="email"
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>
        {/* <div className="my-5 account-container">
          <h4 className="my-5">Password</h4>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="input-div">
              <label className="align-self-start" htmlFor="name">
                Current Password
              </label>
              <input
                defaultValue={profileData?.data?.password}
                className="custom-box-style input_outline"
                type="text"
                id="name"
              />
            </div>
            <div className="input-div">
              <label className="align-self-start " htmlFor="username">
                New Password
              </label>
              <input
                className="custom-box-style input_outline"
                type="text"
                id="username"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={updateProfile}
            className="nav-btn nav-btn-shadow save-btn my-2"
          >
            Save Changes
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default MyProfileComp;
