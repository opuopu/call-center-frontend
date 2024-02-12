import React from "react";
import Swal from "sweetalert2";
import { Form, Input } from "antd";
import { useUpdatePassWordMutation } from "../../Redux/api/authApi.js";
const UpdatePassword = ({ setShowModal }) => {
  const [updatePassword] = useUpdatePassWordMutation();
  const onFinish = async (data) => {
    if (data?.newPassword !== data?.confirmPassword) {
      return Swal.fire(
        "Password and confirm password should be same",
        "",
        "error"
      );
    }
    try {
      const res = await updatePassword(data).unwrap();
      if (res?.success) {
        Swal.fire(res?.message, "", "success");
        setShowModal((prev) => !prev);
      }
    } catch (err) {
      Swal.fire(err?.data?.message, "", "error");
    }
  };

  return (
    <div>
      <h5
        style={{
          color: "#54C999",
        }}
      >
        Update Password
      </h5>
      <div className="mt-4">
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Enter Old Password"
            name="oldPassword"
            key="oldPassword"
            rules={[
              {
                required: true,
                message: "old password is required",
              },
              {
                min: 6,
                message: "password must be at least 6 characters",
              },
            ]}
          >
            <Input.Password placeholder="enter old password" className="py-2" />
          </Form.Item>
          <Form.Item
            label="Enter New Password"
            name="newPassword"
            key="newPassword"
            rules={[
              {
                required: true,
                message: "new Password is required",
              },
              {
                min: 6,
                message: "password must be at least 6 characters",
              },
            ]}
          >
            <Input.Password placeholder="enter new password" className="py-2" />
          </Form.Item>
          <Form.Item
            label="Enter Confirm Password"
            name="confirmPassword"
            key="confirmPassword"
            rules={[
              {
                required: true,
                message: "confirm password is required",
              },
              {
                min: 6,
                message: "password must be at least 6 characters",
              },
            ]}
          >
            <Input.Password
              placeholder="enter confirm password"
              className="py-2"
            />
          </Form.Item>
          <Form.Item className="d-flex  justify-content-center">
            <button
              type="submit"
              style={{
                backgroundColor: "#54C999",
              }}
              className="nav-btn nav-btn-shadow save-btn my-2"
            >
              Update
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePassword;
