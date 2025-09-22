import ChonManChoi from "../Page/TrangDungChung/ChonManChoi";
import Man1 from "../Page/TrangDungChung/Man1";
import Man3 from "../Page/TrangDungChung/Man3";
import TrangChonGame from "../Page/TrangDungChung/TrangChonGame";
import TrangMenu from "../Page/TrangDungChung/TrangMenu";
import { Url } from "./Url";
export const publicRouter = [
  { path: Url.TrangMenu, component: TrangMenu },
  { path: "/MemoryCardGame/trang-chon-game", component: TrangChonGame },
  { path: Url.Map2, component: TrangChonGame },
  { path: Url.Map1, component: Man1 },
  { path: Url.Map3, component: Man3 },
  { path: Url.ChonManChoi, component: ChonManChoi },
];

export const privateRouter = [];
