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
        <h3 style={styles.levelTitle}>{i18nText.chooseLevel} </h3>
        <div style={styles.grid}>
          {baiHocList.map((bai) => (
            <button
              key={bai.id}
              style={styles.lessonBtn}
              onClick={() => handleSelect(bai)}
            >
              {bai.name}
            </button>
          ))}
        </div>
      </div>

      <button style={styles.backBtn} onClick={handleBack}>
        Menu
      </button>
    </div>
  );
};

export default ChonManChoi;

// ================= CSS =================
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
  },
  board: {
    backgroundColor: "rgba(30, 30, 30, 0.9)",
    border: "5px solid #444",
    borderRadius: "12px",
    padding: "20px 40px",
    textAlign: "center",
    color: "white",
    minWidth: "300px",
  },
  levelTitle: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ffcc00",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px 40px",
    justifyItems: "center",
  },
  lessonBtn: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    transition: "color 0.2s",
  },
  backBtn: {
    marginTop: "30px",
    background: "none",
    border: "none",
    color: "#ffcc00",
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
