import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import Swal from "sweetalert2";
import { Form, Input } from "antd";

import "react-toastify/dist/ReactToastify.css";

import CustomModal from "../UI/Modal.jsx";
import UpdatePassword from "../UpdatePassword/UpdatePassword.jsx";
import Uplaod from "../UI/Uplaod.jsx";
import useImageUpload from "../../hooks/useImageUpload.jsx";
import profileImage from "../../assets/Group 1.png";
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from "../../Redux/api/authApi.js";
import { useAppSelector } from "../../Redux/hooks.js";
import { useCurrentUser } from "../../Redux/features/auth/authSlice.js";
import ImageGenerator from "../../utils/Image.jsx";
import Loading from "../../utils/Loading.jsx";
function MyProfileComp() {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(true);
  const { setFile, imageUrl, imageFile, setImageUrl } = useImageUpload();
  console.log(imageUrl);
  const { _id } = useAppSelector(useCurrentUser) || {};
  const { data: profileData } = useProfileQuery(_id);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [form] = Form.useForm();

  const handleModal = () => {
    setModal((prev) => !prev);
  };
  const onFinish = async (data) => {
    try {
      const formData = new FormData();
      if (imageFile) {
        formData.append("file", imageFile);
      }
      formData.append("data", JSON.stringify(data));
      const res = await updateProfile(formData).unwrap();
      Swal.fire(res?.message, "", "success");
      setEdit((prev) => !prev);
    } catch (err) {
      Swal.fire(err?.data?.message, "", "error");
    }
  };

  // set default value
  useEffect(() => {
    form.setFieldsValue({
      email: profileData?.data?.email,
      name: profileData?.data?.name,
      userName: profileData?.data?.userName,
      file: profileData?.data?.image,
    });
  }, [
    form,
    profileData?.data?.name,
    profileData?.data?.email,
    profileData?.data?.userName,
    profileData?.data?.image,
  ]);
  const handleEditStatus = (e) => {
    e.preventDefault();
    setEdit((prev) => !prev);
    form.setFieldsValue(profileData?.data);
    setImageUrl(null);
  };
  return (
    <div className="container">
      {modal && (
        <CustomModal setShowModal={setModal} showModal={modal}>
          <UpdatePassword setShowModal={setModal} />
        </CustomModal>
      )}

      <div className="d-flex justify-content-end">
        <button
          onClick={handleModal}
          className="nav-btn nav-btn-shadow save-btn mb-4  "
          style={{
            backgroundColor: "#54C999",
          }}
        >
          Change Password
        </button>
      </div>

      <div
        className="w-full mx-auto  my-auto  "
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div className="d-flex flex-column align-items-center shadow-sm p-4">
          <img
            style={{
              width: "220px",
              height: "220px",
              border: "2px solid #54C999",
              borderRadius: "50%",
              marginBottom: "6px",
              objectFit: "cover",
            }}
            className="img-fluid "
            src={
              imageUrl ||
              ImageGenerator(profileData?.data?.image) ||
              profileImage
            }
            alt=""
          />
          {!edit && (
            <Uplaod
              setSelectedFile={setFile}
              disabled={edit}
              text="Click on the edit button to upload."
            />
          )}
        </div>

        <Form
          disabled={edit}
          layout="vertical"
          onFinish={onFinish}
          form={form}
          className="w-75 shadow-sm p-4"
        >
          <Form.Item
            rules={[{ required: true, message: "User Name Is Required" }]}
            key="userName"
            name="userName"
            label={<p className="m-0">User Name</p>}
          >
            <Input className="py-2 input" placeholder="Enter User Name" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Full  Name Is Required" }]}
            key="name"
            name="name"
            label={<p className="m-0">Full Name</p>}
          >
            <Input className="py-2 input" placeholder="Enter Full Name" />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Email Is Required" }]}
            key="email"
            name="email"
            label={<p className="m-0">Email</p>}
          >
            <Input className="py-2 input" placeholder="Enter Email" />
          </Form.Item>
          <Form.Item className="d-flex  justify-content-end">
            {edit ? (
              <button
                onClick={handleEditStatus}
                style={{
                  backgroundColor: "#000",
                }}
                className="nav-btn save-btn my-2  fw-bold"
              >
                Edit
              </button>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#54C999",
                  }}
                  className="nav-btn save-btn my-2 fw-bold"
                >
                  {isLoading ? <Loading /> : "Update Profile"}
                </button>
                <button
                  onClick={handleEditStatus}
                  style={{
                    backgroundColor: "#000",
                  }}
                  className="nav-btn save-btn my-2 fw-bold"
                >
                  Cancel
                </button>
              </div>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default MyProfileComp;
