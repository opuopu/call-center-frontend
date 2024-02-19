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
      sidebarItems = sidebarItemsGenerator(userPath, userRole.MANAGER);
      break;
    default:
      break;
  }

  return (
    <Sider
      width="220px"
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: "white",
        height: "100vh",
        borderRight: "1px solid black",
        overflow: "auto",
        position: "fixed",
      }}
    >
      <div>
        <img src={logo} className="w-100 mx-auto d-block my-2 px-2" alt="" />
        <Menu
          theme="white"
          mode="inline"
          selectedKeys={[pathname]}
          defaultSelectedKeys={["1"]}
          items={sidebarItems}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
