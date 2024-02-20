import React, { useEffect } from "react";
import { Layout, Button, ConfigProvider } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "antd";

import { useAppDispatch, useAppSelector } from "../Redux/hooks.js";
import { setCollapsed } from "../Redux/features/LayoutSlice/LayoutSlice.js";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/logo.png";

import { logout, useCurrentUser } from "../Redux/features/auth/authSlice.js";
import { userRole } from "../Constant/Constant.jsx";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator.js";
import { managerPath } from "../Routes/ManagerRoutes.jsx";
import { userPath } from "../Routes/UserRoutes.jsx";
import { sidebardThemes } from "../Themes/Theme.js";
import footerLogo from "../assets/Call Center Coach Logo-F 1 (1).png";
import { useProfileQuery } from "../Redux/api/authApi.js";
import ImageGenerator from "../utils/Image.jsx";
import CustomDropdown from "../Components/UI/Dropdown.jsx";

const MainLayout = () => {
  const navigate = useNavigate();
  const { data: profileData } = useProfileQuery(undefined);
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  const user = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch();
  const { Header, Content, Sider } = Layout;
  let sidebarItems;
  switch (user?.role) {
    case userRole.MANAGER:
      sidebarItems = sidebarItemsGenerator(managerPath, userRole.MANAGER);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userPath, userRole.USER);
      break;

    default:
      break;
  }
  const handleLogout = () => {
    dispatch(logout());
    navigate("/user-login");
  };

  const items = [
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
    <ConfigProvider theme={sidebardThemes}>
      <Layout style={{ height: "100%" }}>
        <Sider
          width={250}
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            backgroundColor: "white",
            height: "100vh",
            boxShadow: "12px 0px 42px 0px rgba(0, 0, 0, 0.05)",
            overflow: "auto",
            position: "fixed",
          }}
        >
          <img src={logo} className="w-100 mx-auto d-block my-2 px-2" alt="" />
          <Menu
            style={{
              marginTop: "10px",
            }}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={sidebarItems}
          />
          <img
            className="img-fluid"
            src={footerLogo}
            alt=""
            style={{ position: "absolute", bottom: 0 }}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              background: "white",
              display: "flex",
              justifyContent: "space-between",

              alignItems: "center",
              paddingRight: "65px",
              boxShadow: " 0px 6px 0px 0px rgba(0, 0, 0, 0.10)",
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
          <Content
            style={{
              paddingTop: "20px",
              height: "100vh",
              backgroundColor: "white",
            }}
          >
            <div
              style={
                {
                  // overflow: "auto",
                }
              }
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
