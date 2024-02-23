import React from "react";
import { useAppSelector } from "../Redux/hooks.js";
import { useCurrentUser } from "../Redux/features/auth/authSlice.js";
import { useLocation } from "react-router-dom";
import { userRole } from "../Constant/Constant.jsx";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator.js";
import { managerPath } from "../Routes/ManagerRoutes.jsx";
import { userPath } from "../Routes/UserRoutes.jsx";
import { Layout, Menu } from "antd";
import logo from "../assets/logo.png";
import footerLogo from "../assets/Call Center Coach Logo-F 1 (1).png";
const { Sider } = Layout;
const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  const user = useAppSelector(useCurrentUser);
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

  return (
    <Sider
      width={250}
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        zIndex: 999,
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
        items={sidebarItems}
      />
      <img
        className="img-fluid"
        src={footerLogo}
        alt=""
        style={{ position: "absolute", bottom: 0 }}
      />
    </Sider>
  );
};

export default Sidebar;
