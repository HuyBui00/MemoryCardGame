import { useTranslation } from "react-i18next";

export const translationCodetable = [
  { key: "title", en: "🎮 My Game 🎮", vi: "🎮 Trò Chơi Của Tôi 🎮" },
  { key: "start", en: "Start Game", vi: "Bắt đầu" },
  { key: "continue", en: "Continue", vi: "Tiếp tục" },
  { key: "options", en: "Options", vi: "Cài đặt" },
  { key: "guide", en: "Guide", vi: "Hướng dẫn" },
  { key: "exit", en: "Exit", vi: "Thoát" },
  { key: "cancel", en: "Cancel", vi: "Hủy bỏ" },
  { key: "ok", en: "Ok", vi: "Đồng ý" },
  { key: "setting", en: "Setting", vi: "Cài đặt" },
  { key: "choose_language", en: "Choose language", vi: "Chọn ngôn ngữ" },
  { key: "en", en: "English", vi: "Tiếng Anh" },
  { key: "vi", en: "Vietnamese", vi: "Tiếng Việt" },
];

export const i18n_vi = translationCodetable.reduce((acc, item) => {
  acc[item.key] = item.vi;
  return acc;
}, {} as Record<string, string>);

export const i18n_en = translationCodetable.reduce((acc, item) => {
  acc[item.key] = item.en;
  return acc;
}, {} as Record<string, string>);

export function useI18nText() {
  const { t } = useTranslation();

  return translationCodetable.reduce((acc, item) => {
    acc[item.key] = t(item.key);
    return acc;
  }, {} as Record<string, string>);
}
