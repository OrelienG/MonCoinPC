export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        role="presentation"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 opacity-20"
        width="900"
        height="900"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="mesh" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="450" cy="450" r="400" fill="url(#mesh)" />
      </svg>
    </div>
  );
}
