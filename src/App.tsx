import { Routes, Route } from "react-router-dom";
import { publicRouter } from "./Router";
import "./i18n";
import SettingButton from "./Utilities/Components/SettingButton";

function App() {
  return (
    <div>
      <SettingButton />
      <Routes>
        {publicRouter.map((route, index) => {
          const Pages = route.component;
          return <Route key={index} path={route.path} element={<Pages />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
