import Man1 from "../Page/TrangDungChung/Man1";
import TrangChonGame from "../Page/TrangDungChung/TrangChonGame";
import TrangMenu from "../Page/TrangDungChung/TrangMenu";
import { Url } from "../Utilities/Constants/Url";
export const publicRouter = [
  { path: Url.TrangMenu, component: TrangMenu },
  { path: "/MemoryCardGame/trang-chon-game", component: TrangChonGame },
  { path: Url.Map1, component: Man1 },
];

export const privateRouter = [];
