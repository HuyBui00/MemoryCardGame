import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useI18nText } from "../Constants/i18nText";
import { useLocation, useNavigate } from "react-router-dom";
import { Url } from "../../Router/Url";

const SettingButton = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // ví dụ bạn muốn kiểm tra nếu url kết thúc bằng "/map1"
  const isTrangChonGame = location.pathname.endsWith("/ChonManChoi");
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShow(false);
    setOpen(false);
  };
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const i18n_Text = useI18nText();

  return (
    <div>
      <div
        className="position-fixed"
        style={{ top: "10px", right: "10px", zIndex: 9999 }}
      >
        <div className="position-relative">
          {/* Nút menu chính (giữ nguyên chỗ) */}
          <button
            className="btn btn-secondary rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "45px", height: "45px" }}
            onClick={() => setOpen((prev) => !prev)}
          >
            ☰
          </button>

          {/* Nút con xổ xuống dưới */}
          {open && (
            <div
              className="position-absolute d-flex flex-column"
              style={{ top: "55px", right: "0" }}
            >
              <button
                className="btn btn-primary mb-2"
                style={{ minWidth: 150 }}
                onClick={() => setShow(true)}
              >
                {i18n_Text.choose_language}
              </button>
              {!isTrangChonGame && (
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigate(Url.ChonManChoi);
                    setOpen(false);
                  }}
                >
                  {i18n_Text.gameExit}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal bootstrap cơ bản */}
      {show && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-center w-100">
                  {i18n_Text.setting}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShow(false)}
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-between">
                <div>{i18n_Text.choose_language}</div>

                <div className="d-flex justify-content-bettween gap-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => changeLanguage("vi")}
                  >
                    {i18n_Text.vi}
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => changeLanguage("en")}
                  >
                    {i18n_Text.en}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingButton;
