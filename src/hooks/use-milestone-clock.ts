"use client";

import { MILESTONE_START_KEY, UNLOCK_INTERVAL_MS, milestones } from "@/lib/milestones";
import { useEffect, useMemo, useState } from "react";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function formatRemaining(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function readStart(): number {
  const stored = window.localStorage.getItem(MILESTONE_START_KEY);
  if (stored) {
    const parsed = Number(stored);
    if (!Number.isNaN(parsed)) return parsed;
  }
  const value = Date.now();
  window.localStorage.setItem(MILESTONE_START_KEY, String(value));
  return value;
}

export function useMilestoneClock() {
  const [now, setNow] = useState<number | null>(null);
  const [start, setStart] = useState<number | null>(null);

  useEffect(() => {
    const value = readStart();
    const tick = () => setNow(Date.now());
    const begin = window.setTimeout(() => {
      setStart(value);
      tick();
    }, 0);
    const id = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(begin);
      window.clearInterval(id);
    };
  }, []);

  return useMemo(() => {
    if (start == null || now == null) {
      return {
        ready: false,
        unlockedCount: 0,
        remainingMs: 0,
        nextIndex: 1,
        allOpen: false,
      };
    }

    const unlockedCount = Math.min(
      milestones.length,
      1 + Math.floor(Math.max(0, now - start) / UNLOCK_INTERVAL_MS)
    );
    const allOpen = unlockedCount >= milestones.length;
    const nextAt = allOpen ? null : start + unlockedCount * UNLOCK_INTERVAL_MS;
    const remainingMs = nextAt ? Math.max(0, nextAt - now) : 0;

    return {
      ready: true,
      unlockedCount,
      remainingMs,
      nextIndex: Math.min(milestones.length, unlockedCount + 1),
      allOpen,
    };
  }, [now, start]);
}
