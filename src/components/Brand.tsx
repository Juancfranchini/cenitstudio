type SvgProps = { className?: string }

/** Isotipo: curva ascendente + punto (acento). */
export function Isotype({
  className,
  stroke = 'currentColor',
  dot = '#2563EB',
}: SvgProps & { stroke?: string; dot?: string }) {
  return (
    <svg viewBox="0 0 64 56" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 50C20 47 34 39 42 27C48 18 51 11 53 5"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="55" cy="8" r="6" fill={dot} />
    </svg>
  )
}

/** Logo completo: isotipo + wordmark CENIT / STUDIO. */
export function Logo({
  className = '',
  tone = 'dark',
}: {
  className?: string
  tone?: 'dark' | 'light'
}) {
  const ink = tone === 'dark' ? '#0F2747' : '#FFFFFF'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Isotype className="h-8 w-9 shrink-0" stroke={ink} />
      <span className="flex flex-col leading-none">
        <span
          className="text-[20px] font-semibold tracking-logo"
          style={{ color: ink }}
        >
          CENIT
        </span>
        <span
          className="mt-1 text-[9px] font-light tracking-[0.42em]"
          style={{ color: ink, opacity: 0.75 }}
        >
          STUDIO
        </span>
      </span>
    </span>
  )
}

/** Curva decorativa larga con punto, usada en hero, proceso y contacto. */
export function Swoosh({
  className,
  stroke = '#2563EB',
  dot = '#2563EB',
  width = 2,
}: SvgProps & { stroke?: string; dot?: string; width?: number }) {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 196C120 190 250 150 320 80C355 45 375 22 388 6"
        stroke={stroke}
        strokeWidth={width}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
      />
      <circle cx="391" cy="8" r="7" fill={dot} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export function IconWhatsApp({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.42 1.32 4.9L2 22l5.4-1.42a9.8 9.8 0 0 0 4.64 1.18h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.47 2 12.04 2Zm0 17.96h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.2.84.86-3.12-.2-.32a8.14 8.14 0 0 1-1.25-4.36c0-4.5 3.67-8.16 8.18-8.16 2.18 0 4.23.85 5.78 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.67 8.17-8.09 8.17Zm4.49-6.12c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.55.12s-.64.8-.78.97c-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35 1 2.51c.12.17 1.71 2.62 4.15 3.67.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  )
}

export function IconMail({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconArrow({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconLinkedIn({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95C21.6 8.75 23 11 23 14.4V21h-4v-5.9c0-1.4-.03-3.2-2-3.2s-2.3 1.53-2.3 3.1V21h-4V9Z" />
    </svg>
  )
}

export function IconInstagram({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
