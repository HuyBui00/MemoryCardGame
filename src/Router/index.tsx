import ChonManChoi from "../Page/TrangDungChung/ChonManChoi";
import Man1 from "../Page/TrangDungChung/Man1";
import MainPage from "../Page/TrangDungChung/MenuPage";
import TrangChonGame from "../Page/TrangDungChung/TrangChonGame";
// import TrangMenu from "../Page/TrangDungChung/TrangMenu";
import { Url } from "./Url";
export const publicRouter = [
  { path: Url.TrangMenu, component: MainPage },
  { path: "/MemoryCardGame/trang-chon-game", component: TrangChonGame },
  { path: Url.Map2, component: TrangChonGame },
  { path: Url.Map1, component: Man1 },
  { path: Url.ChonManChoi, component: ChonManChoi },
  // { path: Url.MainPage, component: MainPage },
];

export const privateRouter = [];
