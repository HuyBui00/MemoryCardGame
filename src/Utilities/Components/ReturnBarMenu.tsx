import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Url } from "../Constants/Url";
import ModalConfirm from "./ModalConfirm";

const ReturnBarMenu = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleBackClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    navigate(Url.TrangMenu);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary d-flex align-items-center"
        onClick={handleBackClick}
      >
        <i className="bi bi-arrow-left me-2"></i>
        Quay lại Menu
      </button>

      <ModalConfirm
        show={showModal}
        title="Xác nhận quay lại"
        message="Bạn có chắc chắn muốn quay lại trang Menu không?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default ReturnBarMenu;
