import Link from "next/link";

export function SiteNav({ current }: { current: "home" | "milestones" }) {
  return (
    <nav className="relative z-30 flex items-center justify-center gap-2 px-4 pt-5">
      <Link
        href="/"
        className={`rounded-full px-4 py-2 text-sm tracking-wide ${
          current === "home"
            ? "bg-primary/20 text-primary"
            : "text-white/70 hover:text-white"
        }`}
      >
        Birthday night
      </Link>
      <Link
        href="/milestones"
        className={`rounded-full px-4 py-2 text-sm tracking-wide ${
          current === "milestones"
            ? "bg-primary/20 text-primary"
            : "text-white/70 hover:text-white"
        }`}
      >
        Ten wishes
      </Link>
    </nav>
  );
}
