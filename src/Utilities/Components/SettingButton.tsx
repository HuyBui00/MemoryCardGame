import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useI18nText } from "../Constants/i18nText";

const SettingButton = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const [show, setShow] = useState(false);

  const i18n_Text = useI18nText();

  return (
    <div>
      {/* Button Setting */}
      <button
        className="btn btn-secondary position-fixed rounded-circle d-flex align-items-center justify-content-center"
        style={{ top: "10px", right: "10px", width: "45px", height: "45px" }}
        onClick={() => setShow(true)}
      >
        <i className="bi bi-gear-fill"></i>
      </button>

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
