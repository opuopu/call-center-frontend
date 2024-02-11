import React from "react";
import { Modal } from "antd";
const CustomModal = ({ title, showModal, setShowModal, children }) => {
  const handleCloseModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <Modal
      title={title}
      open={showModal}
      onCancel={handleCloseModal}
      okButtonProps={{ style: { visibility: "hidden" } }}
      cancelButtonProps={{ style: { visibility: "hidden" } }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
