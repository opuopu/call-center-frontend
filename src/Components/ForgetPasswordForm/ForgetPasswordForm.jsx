import React from "react";
import { Form, Input } from "antd";
import { useForgetPasswordMutation } from "../../Redux/api/authApi.js";
import swal from "sweetalert2";
import Loading from "../../utils/Loading.jsx";
const ForgetPasswordForm = ({ setShowModal }) => {
  const [ForgetPassword, { isLoading }] = useForgetPasswordMutation();
  const onFinish = async (data) => {
    try {
      const res = await ForgetPassword(data).unwrap();
      if (res.success) {
        swal.fire(res?.message, "", "success");
        setShowModal((prev) => !prev);
      }
    } catch (err) {
      console.log("Opu vai", err)
      swal.fire(err?.data?.message, "", "error");
    }
  };
  return (
    <div className="mt-4">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="enter email " className="py-2" />
        </Form.Item>
        <Form.Item>
          <button
            type="submit"
            style={{
              border: "none",
              background: "#54C999",
              color: "white",
              padding: "8px",
              width: "100%",
              borderRadius: "2px",
              fontWeight: "600",
            }}
          >
            {isLoading ? <Loading /> : "Submit"}
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPasswordForm;
