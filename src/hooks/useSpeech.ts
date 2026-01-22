import { useState, useRef, useEffect } from "react";

export const useSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const speak = async (text: string) => {
    if (!text || text.trim().length === 0) return;

    // specific check for puter existence
    if (typeof window === "undefined" || !window.puter) {
      console.warn("Puter.js not loaded");
      return;
    }

    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      setIsSpeaking(true);
      setIsPaused(false);

      const audio = await window.puter.ai.txt2speech(text, {
        engine: "generative",
        language: "en-US",
      });

      audioRef.current = audio;

      audio.onended = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        audioRef.current = null;
      };

      audio.onerror = (e) => {
        console.error("Audio playback error", e);
        setIsSpeaking(false);
        setIsPaused(false);
      };

      await audio.play();
    } catch (error) {
      console.error("Puter TTS error:", error);
      setIsSpeaking(false);
      setIsPaused(false);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPaused(true);
    }
  };

  const resume = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPaused(false);
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return { speak, pause, resume, stop, isSpeaking, isPaused };
};