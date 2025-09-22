import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface WinAlertProps {
  moves: number;
  onReplay: () => void;
  show: boolean; // bật/tắt modal
  onClose: () => void;
}

const WinAlert: React.FC<WinAlertProps> = ({
  moves,
  onReplay,
  show,
  onClose,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNextLevel = () => {
    const path = location.pathname;
    const match = path.match(/\/Map(\d+)$/);

    if (match) {
      const currentMap = parseInt(match[1], 10);
      const nextMap = currentMap + 1;
      navigate(`/MemoryCardGame/Map${nextMap}`);
    } else {
      navigate("/ChonManChoi");
    }
    onClose();
  };

  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex={-1}
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content rounded-4 shadow-lg">
          <div className="modal-header border-0">
            <h5 className="modal-title w-100 text-center text-success fw-bold">
              🎉 Bạn đã thắng!
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body text-center">
            <p className="fs-5">
              Bạn hoàn thành sau <b>{moves}</b> lượt đi 👏
            </p>
          </div>
          <div className="modal-footer d-flex justify-content-center border-0">
            <button className="btn btn-outline-primary px-4" onClick={onReplay}>
              🔄 Chơi lại
            </button>
            <button className="btn btn-success px-4" onClick={handleNextLevel}>
              ⏭️ Màn tiếp theo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinAlert;
