import React from "react";
import { Form, Input } from "antd";
import Swal from "sweetalert2";
import { useSignupUserMutation } from "../../Redux/api/authApi.js";

import Loading from "../../utils/Loading.jsx";
const CreateUser = ({ setShowModal }) => {
  const [createUser, { isLoading }] = useSignupUserMutation();
  const onFinish = async (data) => {
    try {
      const res = await createUser(data).unwrap();
      if (res?.success) {
        Swal.fire({
          html: `<p style="font-weight:600">Password successfully sent to this email: <span style="color:#54C999;font-weight:600">${data?.email}</span></p>`,
          icon: "success",
        });

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
        Create User
      </h5>
      <div className="mt-4">
        <Form onFinish={onFinish} layout="vertical" className="row">
          <Form.Item
            className="col-lg-12"
            label="Enter Full Name"
            name="name"
            key="name"
            rules={[
              {
                required: true,
                message: "FullName is required",
              },
            ]}
          >
            <Input placeholder="Enter Full Name" className="py-2" />
          </Form.Item>

          <Form.Item
            className="col-lg-12"
            label="Enter User Name"
            name="userName"
            key="userName"
            rules={[
              {
                required: true,
                message: "user name is required",
              },
            ]}
          >
            <Input placeholder="Enter User Name" className="py-2" />
          </Form.Item>
          <Form.Item
            className="col-lg-12"
            label="Enter Email"
            name="email"
            key="email"
            rules={[
              {
                required: true,
                message: "email is required",
              },
            ]}
          >
            <Input placeholder="Enter Email" className="py-2" />
          </Form.Item>

          <Form.Item className="d-flex  justify-content-center">
            <button
              type="submit"
              style={{
                backgroundColor: "#54C999",
              }}
              className="nav-btn nav-btn-shadow save-btn my-2"
            >
              {isLoading ? <Loading /> : "Create User"}
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateUser;
