import { Button, Dropdown } from "antd";
import React from "react";

const CustomDropdown = ({ children, items }) => {
  console.log("itemssss", items);
  return (
    <Dropdown menu={{ items }} placement="bottomCenter" arrow>
      {children}
    </Dropdown>
  );
};

export default CustomDropdown;
