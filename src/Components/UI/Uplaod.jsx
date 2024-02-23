import React from "react";
import { Upload, Tooltip } from "antd";

const Uplaod = ({ setSelectedFile, disabled, text }) => {
  const props = {
    name: "file",
    disabled: disabled,
    multiple: false,
    showUploadList: false,
    customRequest: ({ file }) => {
      setSelectedFile(file);
    },
  };
  const handleButton = (e) => {
    e.preventDefault();
  };
  return (
    <Upload {...props}>
      <button
        onClick={(e) => handleButton(e)}
        style={{
          border: 0,
          backgroundColor: "#54C999",
          color: "#fff",
          borderRadius: "3px",
        }}
      >
        Choose File
      </button>
    </Upload>
  );
};

export default Uplaod;
