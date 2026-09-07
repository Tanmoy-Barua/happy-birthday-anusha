"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const CANDLES = 5;

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

      <div className="relative mt-10 flex h-64 w-[min(92vw,22rem)] items-end justify-center">
        <div className="absolute bottom-16 flex items-end gap-4">
          {Array.from({ length: CANDLES }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              {lit && !out ? (
                <span
                  className="flicker mb-1 h-5 w-3 rounded-full bg-[radial-gradient(circle,oklch(0.95_0.12_85),oklch(0.7_0.2_40)_70%,transparent)]"
                  style={{ animationDelay: `${i * 90}ms` }}
                />
              ) : (
                <span className="mb-1 h-5 w-3" />
              )}
              <span className="h-10 w-2 rounded-sm bg-[linear-gradient(180deg,oklch(0.95_0.04_85),oklch(0.86_0.08_80))]" />
            </div>
          ))}
        </div>
        <div className="relative h-28 w-56 rounded-[40%] bg-[linear-gradient(180deg,oklch(0.82_0.08_20),oklch(0.55_0.14_15))] shadow-[0_18px_40px_oklch(0.2_0.05_20_/_0.5)]">
          <div className="absolute inset-x-6 top-3 h-6 rounded-full bg-[oklch(0.95_0.03_85_/_0.7)]" />
          <div className="absolute inset-x-10 bottom-3 h-4 rounded-full bg-[oklch(0.42_0.1_20_/_0.35)]" />
        </div>
        <div className="absolute bottom-0 h-8 w-40 rounded-b-3xl bg-[oklch(0.38_0.08_30)]" />
      </div>

      {lit && !out ? (
        <div className="mt-6 h-2 w-56 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-primary transition-[width] duration-100"
            style={{ width: `${hold}%` }}
          />
        </div>
      ) : null}

      <div className="mt-8 flex flex-col items-center gap-3">
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
