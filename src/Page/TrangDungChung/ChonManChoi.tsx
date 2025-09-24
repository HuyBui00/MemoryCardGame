import React from "react";
import { useNavigate } from "react-router-dom";
import { Url } from "../../Router/Url";
import { useI18nText } from "../../Utilities/Constants/i18nText";

interface BaiHoc {
  id: number;
  name: string;
  component: string;
}

const ChonManChoi: React.FC = () => {
  const navigate = useNavigate();
  const i18nText = useI18nText();
  const handleSelect = (bai: BaiHoc) => {
    navigate(bai.component);
  };

  const baiHocList: BaiHoc[] = [
    { id: 1, name: i18nText.level + " 1", component: Url.Map1 },
    { id: 2, name: i18nText.level + " 2", component: Url.Map2 },
  ];

  const handleBack = () => {
    navigate(Url.TrangMenu);
  };

  return (
    <div style={styles.container}>
      {/* Khung bảng đá */}
      <div style={styles.board}>
        <h3 style={styles.levelTitle}>{i18nText.chooseLevel}</h3>
        <div style={styles.grid}>
          {baiHocList.map((bai) => (
            <button
              key={bai.id}
              className="lesson-btn"
              onClick={() => handleSelect(bai)}
            >
              {bai.name}
            </button>
          ))}
        </div>
      </div>

      <button className="back-btn" onClick={handleBack}>
        ⬅ Menu
      </button>

      {/* CSS riêng cho hiệu ứng */}
      <style>{`
        .lesson-btn {
          background-color: #222;
          border: 2px solid #ffcc00;
          border-radius: 8px;
          padding: 12px 20px;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .lesson-btn:hover {
          transform: scale(1.1);
          background: linear-gradient(45deg, #ffcc00, #ffaa00);
          box-shadow: 0 0 15px rgba(255, 200, 0, 0.8);
          color: #000;
        }
        .lesson-btn:active {
          transform: scale(0.9);
          box-shadow: 0 0 8px rgba(255, 180, 0, 0.6) inset;
        }

        .back-btn {
          margin-top: 35px;
          padding: 12px 28px;
          background-color: #ffcc00;
          border: none;
          border-radius: 8px;
          color: #000;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
        }
        .back-btn:hover {
          transform: scale(1.05);
          background: linear-gradient(45deg, #ffcc00, #ffaa00);
          box-shadow: 0 0 15px rgba(255, 200, 0, 0.8);
        }
        .back-btn:active {
          transform: scale(0.9);
          box-shadow: 0 0 8px rgba(255, 180, 0, 0.6) inset;
        }
      `}</style>
    </div>
  );
};

export default ChonManChoi;

// ================= CSS JS Object cho layout =================
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "url('/stone-bg.png') no-repeat center center / cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Press Start 2P', cursive",
  },
  board: {
    backgroundColor: "rgba(20, 20, 20, 0.85)",
    border: "5px solid #666",
    borderRadius: "15px",
    padding: "30px 50px",
    textAlign: "center",
    color: "white",
    minWidth: "340px",
    boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
  },
  levelTitle: {
    marginBottom: "25px",
    fontSize: "26px",
    fontWeight: "bold",
    color: "#ffcc00",
    textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px 50px",
    justifyItems: "center",
  },
};
