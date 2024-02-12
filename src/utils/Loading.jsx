import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const Loading = () => {
  return (
    <Spin
      indicator={
        <LoadingOutlined style={{ fontSize: 24, color: "#fff" }} spin />
      }
    />
  );
};

export default Loading;
