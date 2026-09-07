"use client";

import { useCallback, useEffect, useState } from "react";

function pickBengaliVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((voice) => voice.lang.toLowerCase().startsWith("bn")) ??
    voices.find((voice) => /bengali|bangla/i.test(voice.name)) ??
    null
  );
}

function whenVoicesReady(): Promise<void> {
  if (window.speechSynthesis.getVoices().length > 0) return Promise.resolve();
  return new Promise((resolve) => {
    window.speechSynthesis.addEventListener("voiceschanged", () => resolve(), { once: true });
    window.setTimeout(resolve, 600);
  });
}

export function useBengaliSpeech(text: string) {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(true);

  const stop = useCallback(() => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }

    void (async () => {
      window.speechSynthesis.cancel();
      await whenVoicesReady();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "bn-IN";
      utterance.rate = 0.92;
      utterance.pitch = 1;
      const voice = pickBengaliVoice();
      if (voice) utterance.voice = voice;

      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);

      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
    })();
  }, [text]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }
    window.speechSynthesis.getVoices();
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return { speaking, supported, speak, stop };
}
