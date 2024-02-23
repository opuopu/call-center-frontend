import React from "react";
import { Spin, Skeleton } from "antd";
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spin
        style={{
          color: "#54C999",
        }}
      />
    </div>
  );
};

export default Loading;
