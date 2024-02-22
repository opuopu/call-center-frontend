import React from "react";
import { Layout, ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import { sidebardThemes } from "../Themes/Theme.js";
import LayoutHeader from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
const MainLayout = () => {
  const { Content } = Layout;
  return (
    <ConfigProvider theme={sidebardThemes}>
      <Layout style={{ height: "100%" }}>
        {/* sidebar */}
        <Sidebar />
        <Layout>
          {/* header */}
          <LayoutHeader />
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
