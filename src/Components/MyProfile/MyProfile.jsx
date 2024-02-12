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
  const { setFile, imageUrl, imageFile } = useImageUpload();
  const { _id } = useAppSelector(useCurrentUser);
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
  return (
    <div className="profile-container">
      {modal && (
        <CustomModal setShowModal={setModal} showModal={modal}>
          <UpdatePassword setShowModal={setModal} />
        </CustomModal>
      )}

      <div className="d-flex justify-content-end">
        <button
          onClick={handleModal}
          className="nav-btn nav-btn-shadow save-btn my-2 "
          style={{
            backgroundColor: "#54C999",
          }}
        >
          Change Password
        </button>
      </div>

      <div className="w-50 mx-auto  my-auto  ">
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img
                style={{
                  objectFit: "cover",
                }}
                className="mx-2 profile_image border-0 "
                width={60}
                src={
                  imageUrl ||
                  ImageGenerator(profileData?.data?.image) ||
                  profileImage
                }
                alt=""
              />
              <Uplaod setSelectedFile={setFile} />
            </div>
          </Form.Item>

          <Form.Item
            key="userName"
            name="userName"
            label={<p className="m-0">User Name</p>}
          >
            <Input className="py-2" placeholder="enter user name" />
          </Form.Item>
          <Form.Item
            key="name"
            name="name"
            label={<p className="m-0">Full Name</p>}
          >
            <Input className="py-2" placeholder="enter full Name" />
          </Form.Item>

          <Form.Item
            key="email"
            name="email"
            label={<p className="m-0">Email</p>}
          >
            <Input className="py-2" placeholder="enter email" />
          </Form.Item>
          <Form.Item className="d-flex  justify-content-center">
            <button
              type="submit"
              style={{
                backgroundColor: "#54C999",
              }}
              className="nav-btn nav-btn-shadow save-btn my-2"
            >
              {isLoading ? <Loading /> : "Update Profile"}
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default MyProfileComp;
