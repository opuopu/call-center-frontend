import React from "react";
import { Upload } from "antd";

const Uplaod = ({ setSelectedFile }) => {
  const props = {
    name: "file",
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
