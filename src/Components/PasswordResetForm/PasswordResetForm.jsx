import React from "react";
import { Form, Input } from "antd";
import { useResetPasswordMutation } from "../../Redux/api/authApi.js";
import Swal from "sweetalert2";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks.js";
import { useParams } from "react-router-dom";
import { logout } from "../../Redux/features/auth/authSlice.js";
const ResetPasswordForm = ({ email, token }) => {
  const dispatch = useAppDispatch();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { password, confirmPassword } = values;

    if (password !== confirmPassword) {
      return Swal.fire(
        "Password and Confirm password does not match",
        "",
        "warning"
      );
    }
    const formatedData = {
      email: email,
      token: token,
      password,
    };
    try {
      const res = await resetPassword(formatedData).unwrap();
      if (res?.success) {
        Swal.fire(res?.message, "", "success");
        dispatch(logout());
        navigate("/user-login");
      }
    } catch (err) {
      Swal.fire(err?.message, "", "error");
    }
  };
  return (
    <div>
      <h5 className="mb-4">Reset Your Password</h5>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Enter Your New Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please Enter New Password",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Re Enter Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please Enter Confirm Password",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <button
            style={{
              width: "100%",
              border: "none",
              backgroundColor: "#54C999",
              padding: "6px 0",
              color: "white",
              fontWeight: "600",
              borderRadius: "2px",
            }}
            type="submit"
          >
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
