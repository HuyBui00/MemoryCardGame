import React from "react";
import { useI18nText } from "../Constants/i18nText";

interface ModalConfirmProps {
  show: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  show,
  title = "Xác nhận",
  message = "Bạn có chắc chắn muốn thực hiện hành động này?",
  onConfirm,
  onCancel,
}) => {
  const i18nText = useI18nText();
  if (!show) return null; // không render khi show = false

  return (
    <div
      className="modal fade show"
      style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg rounded-3 animate__animated animate__zoomIn">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              {i18nText.cancel}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onConfirm}
            >
              {i18nText.ok}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
