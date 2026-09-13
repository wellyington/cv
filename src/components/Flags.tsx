type FlagProps = { className?: string };

export function FlagUK({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 60 30" className={className} preserveAspectRatio="xMidYMid meet" role="img" aria-label="United Kingdom">
      <clipPath id="uk-clip"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
      <g clipPath="url(#uk-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" clipPath="url(#uk-clip)" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="5" />
      </g>
    </svg>
  );
}

export function FlagSpain({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 60 40" className={className} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Spain">
      <rect width="60" height="40" fill="#c60b1e" />
      <rect y="10" width="60" height="20" fill="#ffc400" />
    </svg>
  );
}

export function FlagBrazil({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 60 42" className={className} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Brazil">
      <rect width="60" height="42" fill="#009c3b" />
      <path d="M30,4 L56,21 L30,38 L4,21 Z" fill="#ffdf00" />
      <circle cx="30" cy="21" r="7" fill="#002776" />
      <path d="M23,19 Q30,15 37,19" stroke="#fff" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
