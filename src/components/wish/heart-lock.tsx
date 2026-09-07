export function HeartLock({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 168"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="heart-gold" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#f4d48a" />
          <stop offset="45%" stopColor="#e0a85c" />
          <stop offset="100%" stopColor="#b76b45" />
        </linearGradient>
        <linearGradient id="heart-body" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#e07a7a" />
          <stop offset="55%" stopColor="#c23d4a" />
          <stop offset="100%" stopColor="#7a1f2c" />
        </linearGradient>
      </defs>
      <path
        d="M46 52 C46 28 70 22 70 46 C70 22 94 28 94 52"
        fill="none"
        stroke="url(#heart-gold)"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M70 150 C18 108 14 62 46 46 C58 38 70 50 70 62 C70 50 82 38 94 46 C126 62 122 108 70 150 Z"
        fill="url(#heart-body)"
        stroke="url(#heart-gold)"
        strokeWidth="3.5"
      />
      <circle cx="70" cy="92" r="9" fill="#2a1014" />
      <rect x="66.5" y="92" width="7" height="16" rx="2.5" fill="#2a1014" />
    </svg>
  );
}
