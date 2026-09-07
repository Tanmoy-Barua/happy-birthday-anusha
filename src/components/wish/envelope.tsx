"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Envelope({
  opened,
  onOpen,
  onRead,
}: {
  opened: boolean;
  onOpen: () => void;
  onRead: () => void;
}) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-16">
      <p className="mb-2 text-center text-sm tracking-[0.4em] text-primary uppercase">
        A letter for Ladu
      </p>
      <p className="mb-8 text-center text-base italic text-muted-foreground">
        {opened ? "The seal is broken. Take the letter." : "Press the seal, or the button below."}
      </p>

      <div className="relative h-[22rem] w-[min(92vw,22.5rem)] select-none sm:h-[24rem]">
        <button
          type="button"
          onClick={opened ? onRead : onOpen}
          className="absolute inset-0 outline-none"
          style={{ perspective: "1100px" }}
          aria-label={opened ? "Read the letter" : "Open the envelope"}
        >
          <div
            className={cn(
              "absolute left-1/2 z-[2] w-[78%] overflow-hidden rounded-[4px] border border-[oklch(0.82_0.06_70_/_0.45)] paper text-left shadow-[0_18px_40px_oklch(0.1_0.04_20_/_0.4)] transition-all duration-700 ease-out",
              opened
                ? "top-2 h-44 -translate-x-1/2 -translate-y-2 rotate-[-2deg]"
                : "top-[4.6rem] h-36 -translate-x-1/2 translate-y-3"
            )}
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,oklch(0.62_0.16_18),oklch(0.48_0.12_20))]" />
            <div className="px-6 py-5">
              <p className="font-[family-name:var(--font-script)] text-[2.35rem] leading-none text-[oklch(0.42_0.12_20)]">
                Anusha
              </p>
              <p className="mt-2 text-[0.95rem] italic text-[oklch(0.38_0.06_30)]">
                Happy birthday, my Ladu.
              </p>
              <p className="mt-4 text-[0.8rem] leading-5 text-[oklch(0.45_0.05_40_/_0.75)]">
                A little world, folded just for you.
              </p>
            </div>
          </div>

          <svg
            viewBox="0 0 360 220"
            className="absolute bottom-8 left-0 z-[3] h-auto w-full drop-shadow-[0_28px_40px_oklch(0.12_0.04_20_/_0.55)]"
            aria-hidden
          >
            <defs>
              <linearGradient id="env-back" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8a3a3a" />
                <stop offset="100%" stopColor="#5c2428" />
              </linearGradient>
              <linearGradient id="env-front" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7a3034" />
                <stop offset="55%" stopColor="#5a2226" />
                <stop offset="100%" stopColor="#43181c" />
              </linearGradient>
              <linearGradient id="env-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ead39a" />
                <stop offset="100%" stopColor="#c9a35a" />
              </linearGradient>
              <linearGradient id="env-left" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6d292d" />
                <stop offset="100%" stopColor="#4d1d21" />
              </linearGradient>
              <linearGradient id="env-right" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#6d292d" />
                <stop offset="100%" stopColor="#4d1d21" />
              </linearGradient>
            </defs>
            <rect x="18" y="58" width="324" height="148" rx="10" fill="url(#env-back)" />
            <path d="M18 72 L180 168 L342 72 L342 196 Q342 206 332 206 L28 206 Q18 206 18 196 Z" fill="url(#env-front)" />
            <path d="M18 72 L180 168 L18 196 Z" fill="url(#env-left)" opacity="0.95" />
            <path d="M342 72 L180 168 L342 196 Z" fill="url(#env-right)" opacity="0.95" />
            <path
              d="M32 80 L180 162 L328 80"
              fill="none"
              stroke="url(#env-gold)"
              strokeWidth="1.4"
              opacity="0.55"
            />
            <path
              d="M28 206 L180 168 L332 206"
              fill="none"
              stroke="#2a1012"
              strokeWidth="1"
              opacity="0.35"
            />
          </svg>

          <div
            className="absolute bottom-[7.35rem] left-0 z-[5] w-full origin-top transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
              transform: opened ? "scaleY(-1) translateY(2px)" : "scaleY(1)",
              transformOrigin: "top center",
            }}
          >
            <svg viewBox="0 0 360 120" className="h-auto w-full" aria-hidden>
              <defs>
                <linearGradient id="flap-closed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#b45a5a" />
                  <stop offset="45%" stopColor="#8d3d40" />
                  <stop offset="100%" stopColor="#6b2b2f" />
                </linearGradient>
                <linearGradient id="flap-gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f0d9a0" />
                  <stop offset="100%" stopColor="#c9a35a" />
                </linearGradient>
              </defs>
              <path d="M18 8 L180 112 L342 8 Q342 2 336 2 L24 2 Q18 2 18 8 Z" fill="url(#flap-closed)" />
              <path
                d="M30 12 L180 104 L330 12"
                fill="none"
                stroke="url(#flap-gold)"
                strokeWidth="1.35"
                opacity="0.7"
              />
              <path d="M18 8 L180 18 L342 8" fill="#c97878" opacity="0.22" />
            </svg>
          </div>

          <div
            className={cn(
              "absolute left-1/2 z-[6] flex size-[4.25rem] -translate-x-1/2 items-center justify-center rounded-full",
              opened ? "seal-drop" : "top-[9.4rem]"
            )}
            style={opened ? { top: "9.4rem" } : undefined}
          >
            <svg viewBox="0 0 72 72" className="size-full drop-shadow-[0_8px_14px_oklch(0.2_0.08_20_/_0.55)]" aria-hidden>
              <defs>
                <radialGradient id="wax" cx="35%" cy="30%" r="75%">
                  <stop offset="0%" stopColor="#9a3b3b" />
                  <stop offset="70%" stopColor="#6b1f24" />
                  <stop offset="100%" stopColor="#4a1418" />
                </radialGradient>
              </defs>
              <circle cx="36" cy="36" r="33" fill="url(#wax)" />
              <circle cx="36" cy="36" r="28" fill="none" stroke="#e6c57a" strokeWidth="2.2" />
              <circle cx="36" cy="36" r="24.5" fill="none" stroke="#c9a35a" strokeWidth="0.8" opacity="0.7" />
              <text
                x="36"
                y="46"
                textAnchor="middle"
                fill="#e8c872"
                fontSize="28"
                fontFamily="var(--font-script), cursive"
              >
                L
              </text>
            </svg>
          </div>
        </button>
      </div>

      <div className="mt-2 flex flex-col items-center gap-3">
        {!opened ? (
          <Button
            size="lg"
            className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            onClick={onOpen}
          >
            Break the seal
          </Button>
        ) : (
          <Button
            size="lg"
            className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            onClick={onRead}
          >
            Read the letter
          </Button>
        )}
      </div>
    </div>
  );
}
