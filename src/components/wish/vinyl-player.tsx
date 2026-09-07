"use client";

import { cn } from "@/lib/utils";
import { Pause, Play, SkipBack, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SRC = "/audio/happy-birthday-anusha.mp3";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VinylPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => setCurrent(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || 0);
    const onEnded = () => setPlaying(false);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const tryPlay = audio.play();
    if (tryPlay) {
      tryPlay.catch(() => setPlaying(false));
    }

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  };

  const restart = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    void audio.play();
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrent(value);
  };

  const progress = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <div className="mt-8 flex w-full max-w-sm flex-col items-center">
      <audio ref={audioRef} src={SRC} preload="auto" playsInline />

      <div className="relative size-[16.5rem] sm:size-[18.5rem]">
        <div
          className={cn("vinyl absolute inset-0 rounded-full", playing && "vinyl-spin")}
          aria-hidden
        >
          <div className="vinyl-grooves absolute inset-[8%] rounded-full" />
          <div className="absolute left-1/2 top-1/2 flex size-[5.6rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-[3px] border-[#2a1a12] bg-[radial-gradient(circle_at_50%_40%,#5a2a22,#1a0c0a)] shadow-[inset_0_0_12px_#000]">
            <svg viewBox="0 0 80 80" className="size-14">
              <ellipse cx="40" cy="62" rx="18" ry="6" fill="#3a2418" />
              <rect x="36" y="28" width="8" height="32" rx="3" fill="#f4e4c1" />
              <path d="M40 14 C48 22 46 28 40 32 C34 28 32 22 40 14 Z" fill="#ffb347" />
              <path d="M40 18 C44 23 43 27 40 29 C37 27 36 23 40 18 Z" fill="#fff6d6" />
            </svg>
          </div>
          <span className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a0c0a]" />
        </div>
        <div
          className={cn(
            "pointer-events-none absolute right-2 top-3 origin-[18px_18px] transition-transform duration-700",
            playing ? "rotate-[28deg]" : "rotate-[-8deg]"
          )}
        >
          <svg width="92" height="120" viewBox="0 0 92 120" className="drop-shadow-lg">
            <circle cx="18" cy="18" r="10" fill="#c9c2b8" />
            <circle cx="18" cy="18" r="4" fill="#5a5550" />
            <path d="M22 24 L68 96" stroke="#b8b0a6" strokeWidth="6" strokeLinecap="round" />
            <rect x="62" y="94" width="16" height="10" rx="2" fill="#8a837a" />
          </svg>
        </div>
      </div>

      <p className="mt-6 text-sm font-medium tracking-[0.18em] text-white">
        Happy birthday, Anusha Barua
      </p>

      <div className="mt-4 w-full px-2">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={current}
          onChange={(event) => seek(Number(event.target.value))}
          className="vinyl-seek w-full"
          style={{ ["--progress" as string]: `${progress}%` }}
          aria-label="Song progress"
        />
        <div className="mt-1 flex justify-between text-xs text-white/55">
          <span>{formatTime(current)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-6">
        <button
          type="button"
          className="text-white/55 transition hover:text-white"
          onClick={restart}
          aria-label="Play from the start"
        >
          <SkipBack className="size-6" />
        </button>
        <button
          type="button"
          onClick={toggle}
          className="flex size-16 items-center justify-center rounded-full bg-[linear-gradient(180deg,#ff7aa2,#e85a8c)] text-white shadow-[0_10px_28px_oklch(0.6_0.18_12_/_0.45)] transition hover:brightness-110"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause className="size-7 fill-white" /> : <Play className="size-7 fill-white pl-0.5" />}
        </button>
        <button
          type="button"
          className="text-white/55 transition hover:text-white"
          onClick={() => {
            const audio = audioRef.current;
            if (!audio) return;
            audio.muted = !audio.muted;
            setMuted(audio.muted);
          }}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="size-6" /> : <Volume2 className="size-6" />}
        </button>
      </div>
    </div>
  );
}
