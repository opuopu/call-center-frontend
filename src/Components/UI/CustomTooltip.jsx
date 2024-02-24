import React from "react";
import { Tooltip } from "antd";
const CustomTooltip = ({ text, placement, children }) => {
  return (
    <Tooltip placement={placement} title={text}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
