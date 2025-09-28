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

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const speakWrong = () => speak("Wrong!");
  const speakCorrect = () => speak("Correct!");

  const playFlip = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio("/MemoryCardGame/sound/flip.mp3"); // tự động lấy từ public
    audioRef.current.play().catch((err) => {
      console.warn("Audio play interrupted:", err);
    });
  };

  const playWinGame = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio("/MemoryCardGame/sound/winGame.mp3"); // tự động lấy từ public
    audioRef.current.play().catch((err) => {
      console.warn("Audio play interrupted:", err);
    });
  };

  const playSuccessSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio("/MemoryCardGame/sound/successSound.mp3"); // tự động lấy từ public
    audioRef.current.play().catch((err) => {
      console.warn("Audio play interrupted:", err);
    });
  };

  const playMenu = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio("/MemoryCardGame/sound/menuSound.mp3"); // tự động lấy từ public
    audioRef.current.muted = true; // trick để browser cho phép autoplay
    audioRef.current.play().then(() => {
      audioRef.current!.muted = false;
    });
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return {
    speak,
    speakWrong,
    playFlip,
    speakCorrect,
    playMenu,
    stopAudio,
    playWinGame,
    playSuccessSound,
  };
}
