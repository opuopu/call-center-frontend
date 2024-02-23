import React from "react";
import { Layout, ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import { sidebardThemes } from "../Themes/Theme.js";
import LayoutHeader from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import { useAppSelector } from "../Redux/hooks.js";
const MainLayout = () => {
  const { Content } = Layout;
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  return (
    <ConfigProvider theme={sidebardThemes}>
      <Layout style={{ height: "100%" }}>
        {/* sidebar */}
        <Sidebar />
        <Layout>
          {/* header */}
          <LayoutHeader />
          <Content
            className={`responsive-content ${!collapsed ? "collapsed" : ""}`}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
