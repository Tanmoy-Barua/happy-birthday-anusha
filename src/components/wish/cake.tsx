"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const CANDLES = [
  { x: 86, h: 46, delay: "0ms" },
  { x: 122, h: 54, delay: "90ms" },
  { x: 158, h: 62, delay: "40ms" },
  { x: 194, h: 52, delay: "130ms" },
  { x: 230, h: 44, delay: "70ms" },
];

export function Cake({ onContinue }: { onContinue: () => void }) {
  const [lit, setLit] = useState(false);
  const [blowing, setBlowing] = useState(false);
  const [out, setOut] = useState(false);
  const [hold, setHold] = useState(0);

  useEffect(() => {
    if (!blowing || out) return;
    const id = window.setInterval(() => {
      setHold((value) => {
        const next = Math.min(100, value + 8);
        if (next >= 100) {
          setOut(true);
          setBlowing(false);
          setLit(false);
        }
        return next;
      });
    }, 80);
    return () => window.clearInterval(id);
  }, [blowing, out]);

  return (
    <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm tracking-[0.4em] text-primary uppercase">Close your eyes, Ladu</p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-5xl">
        Make a wish
      </h2>
      <p className="mt-3 max-w-md text-lg italic text-muted-foreground">
        {out
          ? "It is yours now. May it find you this year."
          : lit
            ? "Hold the button and blow the candles out."
            : "Light the candles first. Then wish with me."}
      </p>

      <div className="relative mt-4 w-[min(94vw,22rem)]">
        <svg viewBox="0 0 320 300" className="h-auto w-full" role="img" aria-label="Birthday cake for Anusha">
          <defs>
            <radialGradient id="plate" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#d7c7a4" />
              <stop offset="100%" stopColor="#8a7350" />
            </radialGradient>
            <linearGradient id="tier-top" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f3d4c6" />
              <stop offset="100%" stopColor="#d9a394" />
            </linearGradient>
            <linearGradient id="tier-side" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c97b78" />
              <stop offset="100%" stopColor="#8e4548" />
            </linearGradient>
            <linearGradient id="frost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff6ea" />
              <stop offset="100%" stopColor="#f0d7c4" />
            </linearGradient>
            <linearGradient id="wax" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff4d6" />
              <stop offset="45%" stopColor="#f2d48a" />
              <stop offset="100%" stopColor="#d7a84a" />
            </linearGradient>
            <radialGradient id="flame-core" cx="50%" cy="70%" r="55%">
              <stop offset="0%" stopColor="#fff7d1" />
              <stop offset="45%" stopColor="#ffd56a" />
              <stop offset="100%" stopColor="#ff7a32" />
            </radialGradient>
            <filter id="flame-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#1a0808" floodOpacity="0.45" />
            </filter>
          </defs>

          <ellipse cx="160" cy="268" rx="118" ry="16" fill="url(#plate)" filter="url(#soft-shadow)" />
          <ellipse cx="160" cy="262" rx="108" ry="10" fill="#b79a6d" opacity="0.55" />

          <path
            d="M58 188 C58 210, 262 210, 262 188 L250 238 C250 252, 70 252, 70 238 Z"
            fill="url(#tier-side)"
          />
          <ellipse cx="160" cy="188" rx="102" ry="22" fill="url(#tier-top)" />
          <path
            d="M72 188 C86 204, 98 176, 112 192 C124 206, 136 178, 150 192 C164 206, 176 176, 190 190 C204 206, 218 176, 232 190 C240 196, 248 186, 250 188"
            fill="url(#frost)"
          />

          <path
            d="M86 148 C86 166, 234 166, 234 148 L226 192 C226 204, 94 204, 94 192 Z"
            fill="url(#tier-side)"
          />
          <ellipse cx="160" cy="148" rx="74" ry="18" fill="url(#tier-top)" />
          <path
            d="M96 148 C108 162, 118 138, 130 152 C142 166, 152 138, 164 152 C176 164, 186 138, 198 150 C208 160, 218 140, 224 148"
            fill="url(#frost)"
          />

          {CANDLES.map((candle) => {
            const top = 148 - candle.h;
            return (
              <g key={candle.x}>
                <rect x={candle.x - 5} y={top} width="10" height={candle.h} rx="3" fill="url(#wax)" />
                <rect x={candle.x - 5.5} y={top + 10} width="11" height="4" rx="1" fill="#c9a35a" opacity="0.85" />
                <ellipse cx={candle.x} cy={148} rx="7" ry="3.2" fill="#fff6ea" />
                <rect x={candle.x - 0.8} y={top - 6} width="1.6" height="7" rx="0.6" fill="#3b2a20" />
                {lit && !out ? (
                  <g
                    className="flicker"
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "center bottom",
                      animationDelay: candle.delay,
                    }}
                    filter="url(#flame-glow)"
                  >
                    <path
                      d={`M ${candle.x} ${top - 28} C ${candle.x + 8} ${top - 14}, ${candle.x + 7} ${top - 8}, ${candle.x} ${top - 6} C ${candle.x - 7} ${top - 8}, ${candle.x - 8} ${top - 14}, ${candle.x} ${top - 28} Z`}
                      fill="url(#flame-core)"
                    />
                    <ellipse cx={candle.x} cy={top - 11} rx="2.1" ry="3.6" fill="#fff8e8" />
                  </g>
                ) : null}
                {out ? (
                  <g className="smoke-rise" style={{ transformBox: "fill-box", animationDelay: candle.delay }}>
                    <ellipse cx={candle.x - 2} cy={top - 14} rx="4" ry="7" fill="#d8cfc6" opacity="0.45" />
                    <ellipse cx={candle.x + 3} cy={top - 22} rx="3" ry="6" fill="#ece7e1" opacity="0.35" />
                  </g>
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>

      {lit && !out ? (
        <div className="mt-2 h-2 w-56 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-primary transition-[width] duration-100"
            style={{ width: `${hold}%` }}
          />
        </div>
      ) : null}

      <div className="mt-6 flex flex-col items-center gap-3">
        {!lit && !out ? (
          <Button
            size="lg"
            className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              setLit(true);
              setHold(0);
            }}
          >
            Light the candles
          </Button>
        ) : null}
        {lit && !out ? (
          <Button
            size="lg"
            className={cn(
              "h-12 rounded-full px-8 text-primary-foreground",
              blowing ? "bg-accent" : "bg-primary hover:bg-primary/90"
            )}
            onPointerDown={() => setBlowing(true)}
            onPointerUp={() => setBlowing(false)}
            onPointerLeave={() => setBlowing(false)}
          >
            Hold to blow
          </Button>
        ) : null}
        {out ? (
          <Button
            size="lg"
            className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            onClick={onContinue}
          >
            See your birthday sky
          </Button>
        ) : null}
      </div>
    </div>
  );
}
