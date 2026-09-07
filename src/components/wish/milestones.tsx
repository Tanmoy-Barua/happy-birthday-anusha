"use client";

import { HeartLock } from "@/components/wish/heart-lock";
import { WishQuiz } from "@/components/wish/wish-quiz";
import { formatRemaining, useMilestoneClock } from "@/hooks/use-milestone-clock";
import { cn } from "@/lib/utils";
import { OPENED_MILESTONES_KEY, milestones } from "@/lib/milestones";
import { Clock, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

function readOpened(): number[] {
  try {
    const raw = window.localStorage.getItem(OPENED_MILESTONES_KEY);
    const parsed = raw ? (JSON.parse(raw) as number[]) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function Milestones() {
  const clock = useMilestoneClock();
  const [opened, setOpened] = useState<number[]>([]);
  const [asking, setAsking] = useState<number | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => setOpened(readOpened()), 0);
    return () => window.clearTimeout(id);
  }, []);

  const openWish = (id: number) => {
    setOpened((current) => {
      if (current.includes(id)) return current;
      const next = [...current, id];
      window.localStorage.setItem(OPENED_MILESTONES_KEY, JSON.stringify(next));
      return next;
    });
  };

  const askingMilestone = milestones.find((item) => item.id === asking) ?? null;

  return (
    <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 pb-28 pt-12">
      <div className="text-center">
        <p className="text-sm tracking-[0.4em] text-primary uppercase">Ten slow wishes</p>
        <h2 className="mt-3 font-[family-name:var(--font-script)] text-5xl text-[oklch(0.95_0.04_85)] sm:text-6xl">
          For my Ladu
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg italic text-muted-foreground">
          Each memory sleeps behind a heart. When its hour comes, tap the lock and answer a silly question.
        </p>
      </div>

      <div className="gold-edge mx-auto mt-8 flex w-full max-w-lg items-center justify-center gap-3 rounded-full bg-[oklch(0.22_0.05_20_/_0.72)] px-5 py-3 text-center backdrop-blur-md">
        <Clock className="size-4 text-primary" />
        {!clock.ready ? (
          <p className="text-sm text-muted-foreground">Waking the clock…</p>
        ) : clock.allOpen ? (
          <p className="font-[family-name:var(--font-display)] text-sm sm:text-base">
            All ten hearts are ready. They are yours, Anusha.
          </p>
        ) : (
          <p className="font-[family-name:var(--font-display)] text-sm sm:text-base">
            Wish {String(clock.nextIndex).padStart(2, "0")} unlocks in{" "}
            <span className="tabular-nums text-primary">{formatRemaining(clock.remainingMs)}</span>
          </p>
        )}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {milestones.map((milestone, index) => {
          const ready = clock.ready && index < clock.unlockedCount;
          const revealed = ready && opened.includes(milestone.id);
          const hoursAway = index + 1 - (clock.unlockedCount || 1);
          const hero = milestone.photos[0];
          const extra = milestone.photos[1];

          return (
            <article
              key={milestone.id}
              className={cn(
                "wish-card overflow-hidden rounded-[1.75rem] transition-transform duration-500",
                revealed ? "wish-card-open" : "wish-card-locked"
              )}
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => ready && !revealed && setAsking(milestone.id)}
                disabled={!ready}
                aria-label={
                  revealed
                    ? milestone.title
                      : ready
                      ? `Answer to open wish ${milestone.id}`
                      : `Wish ${milestone.id} is still locked`
                }
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={hero}
                      alt={revealed ? milestone.title : ""}
                      fill
                      className={cn(
                        "object-cover object-[center_20%] transition duration-700",
                        revealed ? "wish-photo" : "wish-photo-hidden"
                      )}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    {revealed ? (
                      <>
                        <div className="wish-glow pointer-events-none absolute inset-0" />
                        <span className="sparkle sparkle-a" />
                        <span className="sparkle sparkle-b" />
                        <span className="sparkle sparkle-c" />
                        {extra ? (
                          <span className="wish-polaroid">
                            <Image
                              src={extra}
                              alt=""
                              fill
                              className="wish-photo object-cover object-[center_18%]"
                              sizes="40vw"
                            />
                          </span>
                        ) : null}
                      </>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[oklch(0.12_0.04_20_/_0.28)]">
                        <HeartLock
                          className={cn(
                            "h-28 w-24 drop-shadow-[0_10px_24px_oklch(0.45_0.16_20_/_0.55)]",
                            ready ? "heartbeat" : "opacity-70"
                          )}
                        />
                        <p className="text-xs tracking-[0.35em] text-primary uppercase">
                          {ready ? "Tap the heart" : "Still dreaming"}
                        </p>
                        {!ready ? (
                          <p className="px-6 text-center text-sm text-white/70">
                            Opens in {hoursAway} hour{hoursAway === 1 ? "" : "s"}
                            {index === clock.unlockedCount
                              ? ` · ${formatRemaining(clock.remainingMs)}`
                              : ""}
                          </p>
                        ) : (
                        <p className="text-sm text-white/80">Answer to unlock</p>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="absolute left-4 top-4 rounded-full bg-[oklch(0.22_0.05_20_/_0.55)] px-3 py-1 text-xs tracking-[0.28em] text-primary uppercase shadow-sm backdrop-blur-md">
                    {String(milestone.id).padStart(2, "0")}
                  </div>
                </div>
                <div className="px-5 py-5">
                  <div className="flex items-center gap-2">
                    {revealed ? <Sparkles className="size-4 text-primary" /> : null}
                    <h3 className="font-[family-name:var(--font-display)] text-2xl">
                      {revealed || ready ? milestone.title : "Locked with love"}
                    </h3>
                  </div>
                  {revealed ? (
                    <p className="mt-3 text-base leading-7 text-[oklch(0.95_0.02_85)]">
                      {milestone.wish}
                    </p>
                  ) : (
                    <p className="mt-3 text-sm italic text-white/45">
                      {ready
                        ? "Tap the heart and answer the silly question."
                        : "A wish is sleeping here."}
                    </p>
                  )}
                </div>
              </button>
            </article>
          );
        })}
      </div>
      {askingMilestone ? (
        <WishQuiz
          milestone={askingMilestone}
          onClose={() => setAsking(null)}
          onUnlock={() => {
            openWish(askingMilestone.id);
            setAsking(null);
          }}
        />
      ) : null}
    </div>
  );
}
