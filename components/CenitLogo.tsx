type Tone = 'light' | 'dark'

type CenitLogoProps = {
  /** `light` = sobre fondo claro · `dark` = sobre fondo navy */
  tone?: Tone
  className?: string
}

/**
 * Isotipo Cenit: curva ascendente que termina en un punto.
 * El arco es la trayectoria, el punto es la llegada.
 */
export function CenitIsotype({
  tone = 'light',
  className,
}: {
  tone?: Tone
  className?: string
}) {
  const stroke = tone === 'light' ? 'var(--navy)' : 'var(--dark-text)'
  return (
    <svg viewBox="0 0 56 52" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 47C12.5 43.4 22.4 37.1 29.8 28.6C35.4 22.2 39.1 15.6 41.6 8.5"
        stroke={stroke}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="46.5" cy="6.5" r="6" fill="var(--accent-bright)" />
    </svg>
  )
}

/** Logo completo: isotipo + CENIT con STUDIO debajo. */
export default function CenitLogo({ tone = 'light', className = '' }: CenitLogoProps) {
  const ink = tone === 'light' ? 'var(--navy)' : 'var(--dark-text)'
  return (
    <span className={`inline-flex items-center gap-[10px] ${className}`}>
      <CenitIsotype tone={tone} className="h-[30px] w-[32px] shrink-0" />
      <span className="flex flex-col">
        <span
          className="text-[19px] font-bold leading-none tracking-wordmark"
          style={{ color: ink }}
        >
          CENIT
        </span>
        <span
          className="mt-[5px] text-[8px] font-medium leading-none tracking-studio"
          style={{ color: ink, opacity: 0.72 }}
        >
          STUDIO
        </span>
      </span>
    </span>
  )
}
