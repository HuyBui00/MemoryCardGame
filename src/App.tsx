import { Routes, Route, Navigate } from "react-router-dom";
import { publicRouter } from "./Router";
import "./i18n";
import { Url } from "./Utilities/Constants/Url";
import SettingButton from "./Utilities/Components/SettingButton";

function App() {
  return (
    <div>
      <SettingButton />
      <Routes>
        <Route path="/" element={<Navigate to={Url.Map1} replace />} />

        {publicRouter.map((route, index) => {
          const Pages = route.component;
          return <Route key={index} path={route.path} element={<Pages />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
