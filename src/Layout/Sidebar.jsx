import React, { useState } from "react";
import { useAppSelector } from "../Redux/hooks.js";
import {
  useCurrentToken,
  useCurrentUser,
} from "../Redux/features/auth/authSlice.js";
import { useLocation } from "react-router-dom";
import { userRole } from "../Constant/Constant.jsx";
import sidebarItemsGenerator from "../utils/sidebarItemsGenerator.js";
import { managerPath } from "../Routes/ManagerRoutes.jsx";
import { userPath } from "../Routes/UserRoutes.jsx";
import { Layout, Menu } from "antd";
import logo from "../assets/logo.png";
const { Sider } = Layout;
const Sidebar = () => {
  const token = useAppSelector(useCurrentToken);
  const { pathname } = useLocation();
  const user = useAppSelector(useCurrentUser);
  const collapsed = useAppSelector((state) => state.layout.collapsed);

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
  console.log(pathname);
  const items = [
    { key: "1", label: "hello" },
    { key: "/manager/pathname", label: "hello" },
  ];
  return (
    <Sider
      width="220px"
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
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        defaultSelectedKeys={pathname}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
