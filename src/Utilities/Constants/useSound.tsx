// src/hooks/useSound.ts
import { useRef } from "react";

export function useSound() {
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = (text: string, lang: string = "en-US") => {
    if (currentUtterance.current) {
      window.speechSynthesis.cancel(); // chỉ hủy cái cũ
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

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

  const speakWrong = () => {
    speak("Wrong!");
  };

  return { speak, speakFruit, speakWrong };
}
