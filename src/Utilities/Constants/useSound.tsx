import { useRef, useEffect, useState } from "react";

export function useSound() {
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) {
        setVoices(v);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speak = (text: string, lang: string = "en-US") => {
    // ✅ chỉ cancel khi đang nói
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    // chọn voice (nếu có)
    const voice = voices.find((v) => v.lang === lang);
    if (voice) utterance.voice = voice;

    currentUtterance.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const speakFruit = (icon: string) => {
    switch (icon) {
      case "🍌":
        speak("Correct! Banana");
        break;
      case "🍎":
        speak("Correct! Apple");
        break;
      case "🍇":
        speak("Correct! Grapes");
        break;
      case "🍓":
        speak("Correct! Strawberry");
        break;
      case "🍍":
        speak("Correct! Pineapple");
        break;
      case "🥝":
        speak("Correct! Kiwi");
        break;
      case "🍑":
        speak("Correct! Peach");
        break;
      case "🍉":
        speak("Correct! Watermelon");
        break;
      default:
        speak("Correct!");
        break;
    }
  };

  // const playSound = (url: string) => {
  //   const audio = new Audio(url);
  //   audio.play().catch((err) => console.warn("Audio play error:", err));
  // };

  const speakWrong = () => speak("Wrong!");
  const speakCorrect = () => speak("Correct!");

  const playFlip = () => {
    const audio = new Audio("/MemoryCardGame/sound/flip.mp3"); // tự động lấy từ public
    audio.play();
  };

  const playMenu = () => {
    const audio = new Audio("/MemoryCardGame/sound/menuSound.mp3"); // tự động lấy từ public
    audio.play();
  };

  return { speak, speakFruit, speakWrong, playFlip, speakCorrect, playMenu };
}
