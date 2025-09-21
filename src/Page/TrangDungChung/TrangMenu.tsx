import { useNavigate } from "react-router-dom";
import { useI18nText } from "../../Utilities/Constants/i18nText";
import { Url } from "../../Router/Url";

export default function TrangMenu() {
  const i18n_Text = useI18nText();

  const navigate = useNavigate();

  const handleStart = () => navigate(Url.ChonManChoi);
  const handleOptions = () => navigate("/trang-chon-game");
  const handleExit = () => navigate("/trang-chon-game");

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
      <h1 className="mb-5 display-3 fw-bold">{i18n_Text.title}</h1>

      <div className="d-grid gap-3 col-6 mx-auto">
        <button className="btn btn-outline-light btn-lg" onClick={handleStart}>
          {i18n_Text.start}
        </button>
        <button
          className="btn btn-outline-light btn-lg"
          onClick={handleOptions}
        >
          {i18n_Text.options}
        </button>
        <button className="btn btn-outline-light btn-lg">
          {i18n_Text.guide}
        </button>
        <button className="btn btn-outline-danger btn-lg" onClick={handleExit}>
          {i18n_Text.exit}
        </button>
      </div>
    </div>
  );
}
