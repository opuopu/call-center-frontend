import React from "react";
import { Layout, Button } from "antd";
import { useProfileQuery } from "../Redux/api/authApi.js";
import { useAppDispatch, useAppSelector } from "../Redux/hooks.js";
import { logout, useCurrentUser } from "../Redux/features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import ImageGenerator from "../utils/Image.jsx";
import CustomDropdown from "../Components/UI/Dropdown.jsx";
import { setCollapsed } from "../Redux/features/LayoutSlice/LayoutSlice.js";
import { MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;

const LayoutHeader = () => {
  const { data: profileData } = useProfileQuery(undefined);
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(useCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/user-login");
  };
  const items = [
    {
      key: "0",
      label: (
        <p
          style={{
            marginBottom: "0px",
            paddingBottom: "0px",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          {profileData?.data?.role.toUpperCase()}
        </p>
      ),
    },
    {
      key: "1",
      label: (
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#54C999",
            border: "none",
            color: "white",
            padding: "0 16px",
            borderRadius: "4px",
          }}
        >
          Log Out
        </button>
      ),
    },
  ];
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 99,
        background: "white",
        display: "flex",
        justifyContent: "space-between",

        alignItems: "center",
        paddingRight: "65px",
        boxShadow: "0px 9px 11px 5px rgba(0, 0, 0, 0.02)",
      }}
    >
      <div>
        <Button
          type="text"
          icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
          onClick={() => dispatch(setCollapsed())}
          style={{
            marginLeft: collapsed ? "50px" : "200px",
            fontSize: "16px",
            width: 45,
            height: 45,
            marginRight: "10px",
          }}
        />
      </div>
      <div className="d-flex align-items-center gap-2">
        <div className="mb-0">
          <h5 className="" style={{ color: "#54C999" }}>
            {user?.userName}
          </h5>
        </div>

        <CustomDropdown items={items}>
          <img
            style={{
              width: "50px",
              height: "50px",
              padding: "2px",
              borderRadius: "50%",
              cursor: "pointer",
              border: "2px solid #54C999",
            }}
            src={ImageGenerator(profileData?.data?.image)}
            alt=""
          />
        </CustomDropdown>
      </div>
    </Header>
  );
};

export default LayoutHeader;
