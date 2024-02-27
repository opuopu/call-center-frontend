import { Form, Input } from "antd";
import Swal from "sweetalert2";
import Loading from "../../utils/Loading.jsx";

import { useEffect } from "react";
import {
  useSingleUserQuery,
  useUpdateUserByManagerMutation,
} from "../../Redux/api/authApi.js";
const EditUser = ({ setShowModal, id }) => {
  const [updateUser, { isLoading }] = useUpdateUserByManagerMutation();
  const { data: profileData } = useSingleUserQuery(id);

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      email: profileData?.data?.email,
      name: profileData?.data?.name,
      userName: profileData?.data?.userName,
    });
  }, [
    form,
    profileData?.data?.name,
    profileData?.data?.email,
    profileData?.data?.userName,
  ]);
  const onFinish = async (data) => {
    try {
      const res = await updateUser({
        id: profileData?.data?._id,
        body: data,
      }).unwrap();
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
        Edit User
      </h5>
      <div className="mt-4">
        <Form onFinish={onFinish} layout="vertical" className="row" form={form}>
          <Form.Item
            className="col-lg-12"
            label="Enter Full Name"
            name="name"
            key="name"
            rules={[
              {
                required: true,
                message: "Full Name is required",
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
            <Input placeholder="enter user name" className="py-2" />
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
            <Input placeholder="enter email" className="py-2" />
          </Form.Item>

          <Form.Item className="d-flex  justify-content-center">
            <button
              type="submit"
              style={{
                backgroundColor: "#54C999",
              }}
              className="nav-btn nav-btn-shadow save-btn my-2"
            >
              {isLoading ? <Loading /> : "Update User"}
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default EditUser;
