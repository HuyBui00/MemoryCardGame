import { useNavigate } from "react-router-dom";
import { Url } from "../../Router/Url";
import { useSound } from "../../Utilities/Constants/useSound";
import { useEffect } from "react";

export default function MainPage() {
  const navigate = useNavigate();
  const { playMenu } = useSound();

  useEffect(() => {
    playMenu();
  }, [playMenu]);
  return (
    <div
      className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden no-select"
      style={{
        background: "linear-gradient(to right, #4f46e5, #9333ea, #ec4899)",
      }}
    >
      {/* Header */}
      <h1 className="display-3 fw-bold text-white text-center mb-5">
        🎴 Memory Card Game
      </h1>

      {/* Main Buttons */}
      <div
        className="d-flex flex-column align-items-center gap-3"
        onClick={() => navigate(Url.ChonManChoi)}
      >
        <button className="btn btn-warning btn-lg px-5 py-3 fw-bold shadow-lg play-btn">
          ▶ Play
        </button>
      </div>

      {/* Decorative Floating Icons */}
      {/* Fruits */}
      <div className="decor-icon" style={{ top: "5%", left: "5%" }}>
        🍎
      </div>
      <div className="decor-icon" style={{ bottom: "10%", right: "15%" }}>
        🍌
      </div>
      <div className="decor-icon" style={{ top: "30%", right: "5%" }}>
        🍇
      </div>

      {/* Vehicles */}
      <div
        className="decor-icon"
        style={{ top: "25%", left: "25%", fontSize: "3.5rem", opacity: 0.25 }}
      >
        🚗
      </div>
      <div
        className="decor-icon"
        style={{ bottom: "25%", left: "5%", fontSize: "3.5rem", opacity: 0.25 }}
      >
        🚲
      </div>
      <div
        className="decor-icon"
        style={{ top: "10%", right: "35%", fontSize: "3.5rem", opacity: 0.25 }}
      >
        ✈️
      </div>

      {/* Inline CSS */}
      <style>{`
        /* Ngăn không cho chọn text/icon */
        .no-select {
          user-select: none;
        }

        /* Icon chung */
        .decor-icon {
          position: absolute;
          font-size: 3rem;
          opacity: 0.3;
          pointer-events: none; /* tránh click chọn */
        }

        /* Play button */
        .play-btn {
          font-size: 2rem;
          border-radius: 1rem;
          transition: all 0.3s ease-in-out;
        }
        .play-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(255, 193, 7, 0.9);
          background: linear-gradient(45deg, #ffcd38, #ff9f1c);
          color: black;
        }
        .play-btn:active {
          transform: scale(0.95);
          box-shadow: 0 0 10px rgba(255, 193, 7, 0.7);
        }
      `}</style>
    </div>
  );
}
