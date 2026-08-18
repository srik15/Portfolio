const HeroGraphic = () => (
  <svg
    viewBox="0 0 420 320"
    className="hero-ai-graphic animate-float"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e1b4b" />
        <stop offset="45%" stopColor="#4338ca" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#312e81" />
        <stop offset="100%" stopColor="#1e1b4b" />
      </linearGradient>
      <linearGradient id="dataGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5d43da" />
        <stop offset="100%" stopColor="#312e81" />
      </linearGradient>
      <clipPath id="letterA">
        <path d="M20 280 L110 40 L200 280 Z M55 210 H165 L110 80 Z" fillRule="evenodd" />
      </clipPath>
      <clipPath id="letterI">
        <rect x="250" y="40" width="90" height="240" rx="8" />
      </clipPath>
    </defs>

    <g clipPath="url(#letterA)">
      <rect width="220" height="300" fill="url(#skyGrad)" />
      <circle cx="160" cy="80" r="3" fill="white" opacity="0.8" />
      <circle cx="120" cy="60" r="2" fill="white" opacity="0.6" />
      <circle cx="180" cy="110" r="2" fill="white" opacity="0.5" />
      <circle cx="90" cy="100" r="2" fill="white" opacity="0.7" />
      <circle cx="140" cy="45" r="1.5" fill="white" opacity="0.5" />
      <path
        d="M0 220 L60 160 L120 190 L180 130 L220 170 L220 300 L0 300 Z"
        fill="url(#mountainGrad)"
        opacity="0.9"
      />
      <path
        d="M0 250 L80 200 L140 230 L220 180 L220 300 L0 300 Z"
        fill="#1e1b4b"
        opacity="0.7"
      />
    </g>

    <path
      d="M20 280 L110 40 L200 280 Z M55 210 H165 L110 80 Z"
      fillRule="evenodd"
      stroke="#5d43da"
      strokeWidth="3"
      fill="none"
    />

    <g clipPath="url(#letterI)">
      <rect x="250" y="40" width="90" height="240" fill="#0f0a2e" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect
          key={i}
          x={265 + (i % 3) * 18}
          y={55 + i * 26}
          width={8}
          height={14}
          rx="2"
          fill="url(#dataGrad)"
          opacity={0.5 + (i % 3) * 0.15}
        />
      ))}
      <line x1="270" y1="50" x2="270" y2="270" stroke="#5d43da" strokeWidth="2" opacity="0.4" />
      <line x1="295" y1="50" x2="295" y2="270" stroke="#7c5cff" strokeWidth="2" opacity="0.5" />
      <line x1="320" y1="50" x2="320" y2="270" stroke="#5d43da" strokeWidth="2" opacity="0.4" />
    </g>

    <rect x="250" y="40" width="90" height="240" rx="8" stroke="#5d43da" strokeWidth="3" fill="none" />
  </svg>
);

export default HeroGraphic;
