import { useState } from "react";

export const useSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = (text: string, rate = 0.9) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      console.warn("Speech Synthesis not supported");
      return;
    }

    if (!text || text.trim().length === 0) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(true);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = (event) => {
      console.error("SpeechSynthesis error", event);
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  return { speak, isSpeaking };
};