export default function HeroBackground() {
  return (
    <>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />

      {/* Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-200 blur-[150px] opacity-40" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-300 blur-[150px] opacity-30" />

      {/* Tunko Watermark */}
      <div className="pointer-events-none absolute right-10 top-20 opacity-10">

        <img
          src="/logo.png"
          alt="Tunko"
          className="w-[420px]"
        />

      </div>

    </>
  );
}