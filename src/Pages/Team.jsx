import React, { useEffect, useState } from "react";
import DashboardSidebar from "../Components/DashboardSidebar/DashboardSidebar";
import "./Pages.css";

import {
  useChangeUserStatusMutation,
  useRetrivemangerUsersQuery,
} from "../Redux/api/authApi.js";
import Table from "../Components/Table/Table.jsx";
import CustomModal from "../Components/UI/Modal.jsx";
import CreateUser from "../Components/CreateUser/CreateUser.jsx";
import { AiOutlineClose, AiOutlineCheck, AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
function Team() {
  const { data: usersData } = useRetrivemangerUsersQuery(undefined);
  const [modal, setModal] = useState(false);
  const [changeStatus] = useChangeUserStatusMutation();

  const handleActiveUser = async (id, status) => {
    try {
      const res = await changeStatus({ id: id, body: { status } }).unwrap();
      if (res?.success) {
        Swal.fire(res?.message, "", "success");
      }
    } catch (err) {
      Swal.fire(err?.data?.message, "", "error");
    }
  };
  const handleDisableUser = async (id, status) => {
    try {
      const res = await changeStatus({ id: id, body: { status } }).unwrap();
      Swal.fire(res?.message, "", "success");
    } catch (err) {
      Swal.fire(err?.data?.message, "", "error");
    }
  };

  const column = [
    {
      title: "#SL",
      key: "index",
      dataIndex: "index",
    },
    {
      title: "Full Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "User Name",
      key: "userName",
      dataIndex: "userName",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      render: (data) => {
        console.log(data);
        return (
          <div className="d-flex gap-2 ">
            {data?.status2 === "disabled" ? (
              <span>
                <AiOutlineCheck
                  title="active user"
                  onClick={() => handleActiveUser(data?.id, "active")}
                  style={{
                    color: "#54C999",
                    fontWeight: "600",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                />
              </span>
            ) : (
              <span>
                <AiOutlineClose
                  title="disable user"
                  onClick={() => handleDisableUser(data?.id, "disabled")}
                  style={{
                    color: "red",
                    fontWeight: "600",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                />
              </span>
            )}
          </div>
        );
      },
    },
    {
      title: "Edit",
      render: () => {
        return (
          <div>
            <span>
              <AiFillEdit
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              />
            </span>
          </div>
        );
      },
    },
  ];
  const data = usersData?.data?.map((user, index) => {
    return {
      index: index + 1,
      name: user?.name,
      id: user?._id,
      userName: user?.userName,
      email: user?.email,
      status: (
        <p
          style={{
            backgroundColor: user.status === "active" ? "#54C999" : "#DC3545",
            margin: "auto 0",
            color: "#fff",
            textAlign: "center",
            borderRadius: "5px",
            // padding: "5px 10px",
          }}
        >
          {user.status}
        </p>
      ),
      status2: user?.status,
    };
  });
  return (
    <>
      {modal && (
        <CustomModal setShowModal={setModal} showModal={modal}>
          <CreateUser setShowModal={setModal} />
        </CustomModal>
      )}
      <div className="d-flex">
        <DashboardSidebar />
        <div className="d-flex  justify-content-center align-items-center flex-grow-1">
          <div className="container">
            <div className="d-flex justify-content-end mb-4 ">
              <button
                onClick={() => setModal((prev) => !prev)}
                type="submit"
                style={{
                  backgroundColor: "#54C999",
                }}
                className="nav-btn nav-btn-shadow save-btn my-2"
              >
                Create
              </button>
            </div>
            <div className="row">
              <div className="col">
                <Table column={column} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
