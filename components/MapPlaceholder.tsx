/**
 * Mapa abstracto de la Zona Norte del GBA: contorno de partidos sobre el eje
 * del río, trazado fino. No es un mapa real ni interactivo.
 */
export default function MapPlaceholder({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 300"
      fill="none"
      className={className}
      role="img"
      aria-label="Mapa esquemático de la Zona Norte del Gran Buenos Aires"
    >
      <g
        stroke="var(--accent-bright)"
        strokeOpacity="0.5"
        strokeWidth="0.9"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Contorno general */}
        <path d="M150 8 96 40 72 88 30 118 44 166 12 206 40 250 92 264 126 292 176 268 196 220 178 176 214 140 196 96 156 78 150 8Z" />

        {/* Divisiones internas, siguiendo el eje del río */}
        <path d="M150 8 128 62 72 88" />
        <path d="M128 62 176 86 156 78" />
        <path d="M128 62 118 124 44 166" />
        <path d="M118 124 196 96" />
        <path d="M118 124 178 176" />
        <path d="M118 124 96 190 40 250" />
        <path d="M96 190 196 220" />
        <path d="M96 190 126 292" />
      </g>

      {/* Punto de ubicación */}
      <circle cx="128" cy="62" r="16" fill="var(--accent-bright)" fillOpacity="0.16" />
      <circle cx="128" cy="62" r="5.5" fill="var(--accent-bright)" />
    </svg>
  )
}
