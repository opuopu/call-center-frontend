import React, { useEffect, useState } from "react";
import DashboardSidebar from "../Components/DashboardSidebar/DashboardSidebar";
import "./Pages.css";

import { useRetrivemangerUsersQuery } from "../Redux/api/authApi.js";
import Table from "../Components/Table/Table.jsx";
import CustomModal from "../Components/UI/Modal.jsx";
import CreateUser from "../Components/CreateUser/CreateUser.jsx";

function Team() {
  const { data: usersData } = useRetrivemangerUsersQuery(undefined);
  const [modal, setModal] = useState(false);
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
      title: "Actions",
      render: () => {
        return <div>action button</div>;
      },
    },
  ];
  const data = usersData?.data?.map((user, index) => {
    return {
      index: index + 1,
      name: user?.name,
      userName: user?.userName,
      email: user?.email,
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
