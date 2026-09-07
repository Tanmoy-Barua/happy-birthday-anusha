"use client";

import { formatRemaining, useMilestoneClock } from "@/hooks/use-milestone-clock";
import { cn } from "@/lib/utils";
import { milestones } from "@/lib/milestones";
import { Clock, Lock, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Milestones() {
  const clock = useMilestoneClock();
  const [active, setActive] = useState<number | null>(1);

  return (
    <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 pb-28 pt-12">
      <div className="text-center">
        <p className="text-sm tracking-[0.4em] text-primary uppercase">Ten slow wishes</p>
        <h2 className="mt-3 font-[family-name:var(--font-script)] text-5xl text-[oklch(0.95_0.04_85)] sm:text-6xl">
          For my Ladu
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg italic text-muted-foreground">
          The first memory opens now. Each next one wakes after one hour, like a dream arriving on time.
        </p>
      </div>

      <div className="gold-edge mx-auto mt-8 flex w-full max-w-lg items-center justify-center gap-3 rounded-full bg-[oklch(0.22_0.05_20_/_0.72)] px-5 py-3 text-center backdrop-blur-md">
        <Clock className="size-4 text-primary" />
        {!clock.ready ? (
          <p className="text-sm text-muted-foreground">Waking the clock…</p>
        ) : clock.allOpen ? (
          <p className="font-[family-name:var(--font-display)] text-sm sm:text-base">
            All ten wishes are open. They are yours, Anusha.
          </p>
        ) : (
          <p className="font-[family-name:var(--font-display)] text-sm sm:text-base">
            Wish {String(clock.nextIndex).padStart(2, "0")} opens in{" "}
            <span className="tabular-nums text-primary">{formatRemaining(clock.remainingMs)}</span>
          </p>
        )}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {milestones.map((milestone, index) => {
          const unlocked = clock.ready && index < clock.unlockedCount;
          const isActive = active === milestone.id && unlocked;
          const hoursAway = index + 1 - (clock.unlockedCount || 1);

          return (
            <article
              key={milestone.id}
              className={cn(
                "overflow-hidden rounded-3xl border transition-all duration-500",
                unlocked
                  ? "gold-edge border-primary/35 bg-[oklch(0.2_0.04_20_/_0.55)]"
                  : "border-white/10 bg-[oklch(0.16_0.03_20_/_0.55)]"
              )}
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => unlocked && setActive(isActive ? null : milestone.id)}
                disabled={!unlocked}
              >
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
                  {unlocked ? (
                    <div className="absolute inset-0">
                      {milestone.photos.length === 1 ? (
                        <Image
                          src={milestone.photos[0]}
                          alt={milestone.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="grid h-full grid-cols-2">
                          {milestone.photos.map((photo) => (
                            <span key={photo} className="relative block h-full">
                              <Image
                                src={photo}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="25vw"
                              />
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    </div>
                  ) : (
                    <div className="dream-lock absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <Lock className="size-7 text-primary/80" />
                      <p className="text-xs tracking-[0.35em] text-primary uppercase">Still dreaming</p>
                      <p className="px-6 text-center text-sm text-white/70">
                        Opens in {hoursAway} hour{hoursAway === 1 ? "" : "s"}
                        {index === clock.unlockedCount ? ` · ${formatRemaining(clock.remainingMs)}` : ""}
                      </p>
                    </div>
                  )}
                  <div className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs tracking-[0.28em] text-primary uppercase backdrop-blur-sm">
                    {String(milestone.id).padStart(2, "0")}
                  </div>
                </div>
                <div className="px-5 py-5">
                  <div className="flex items-center gap-2">
                    {unlocked ? <Sparkles className="size-4 text-primary" /> : null}
                    <h3 className="font-[family-name:var(--font-display)] text-2xl">{milestone.title}</h3>
                  </div>
                  {unlocked ? (
                    <p className={cn("mt-3 text-base leading-7 text-[oklch(0.92_0.03_80_/_0.9)]", !isActive && "line-clamp-3")}>
                      {milestone.wish}
                    </p>
                  ) : (
                    <p className="mt-3 text-sm italic text-white/45">A wish is sleeping here.</p>
                  )}
                </div>
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
