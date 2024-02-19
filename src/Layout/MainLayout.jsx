import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet } from "react-router-dom";
import {} from "antd";
import Sidebar from "./Sidebar.jsx";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../Redux/hooks.js";
import { setCollapsed } from "../Redux/features/LayoutSlice/LayoutSlice.js";

const { Header, Content } = Layout;
const MainLayout = () => {
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  const dispatch = useAppDispatch();
  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header
          style={{
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "65px",
            // paddingRight: "60px",
          }}
        >
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
  );
};

export default MainLayout;
