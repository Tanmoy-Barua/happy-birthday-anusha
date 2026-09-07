export function Atmosphere() {
  const petals = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 17) % 100}%`,
    delay: `${(i * 0.7) % 8}s`,
    duration: `${10 + (i % 6)}s`,
    size: 10 + (i % 5) * 4,
    drift: `${(i % 2 === 0 ? 40 : -50) - i * 2}px`,
  }));

  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${(i * 23 + 7) % 100}%`,
    top: `${(i * 13 + 3) % 70}%`,
    delay: `${(i * 0.31) % 4}s`,
    duration: `${2.2 + (i % 5) * 0.4}s`,
    size: i % 7 === 0 ? 3 : 2,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.32_0.08_20)_0%,transparent_55%),radial-gradient(ellipse_at_bottom,oklch(0.14_0.03_20)_0%,oklch(0.1_0.02_20)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.16_20_/_0.28),transparent_70%)]" />
      {stars.map((star) => (
        <span
          key={star.id}
          className="star absolute rounded-full bg-[oklch(0.95_0.04_85)]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal absolute top-[-8vh] rounded-[60%_40%_60%_40%] bg-[linear-gradient(135deg,oklch(0.72_0.18_12),oklch(0.55_0.16_20))] opacity-70"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.35,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            ["--drift" as string]: petal.drift,
          }}
        />
      ))}
    </div>
  );
}
