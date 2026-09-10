/**
 * Mapa abstracto de la Zona Norte del GBA: franja de partidos apoyada sobre
 * el eje del río, con sus divisiones internas. No es un mapa real ni
 * interactivo; funciona como pieza gráfica de la sección.
 */
export default function MapPlaceholder({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 320"
      fill="none"
      className={className}
      role="img"
      aria-label="Mapa esquemático de la Zona Norte del Gran Buenos Aires"
    >
      <g
        stroke="var(--accent-bright)"
        strokeOpacity="0.55"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Contorno de la franja, con el borde del río a la derecha */}
        <path d="M118 10 86 34 74 66 52 88 44 122 24 148 30 184 16 214 30 250 58 274 74 306 112 300 140 272 158 238 176 206 190 168 202 132 196 96 176 66 150 40 118 10Z" />

        {/* Divisiones entre partidos */}
        <path d="M86 34 112 58 150 40" />
        <path d="M112 58 100 92 176 66" />
        <path d="M100 92 74 66" />
        <path d="M100 92 118 128 196 96" />
        <path d="M118 128 44 122" />
        <path d="M118 128 108 168 202 132" />
        <path d="M108 168 24 148" />
        <path d="M108 168 126 212 190 168" />
        <path d="M126 212 30 184" />
        <path d="M126 212 112 254 176 206" />
        <path d="M112 254 16 214" />
        <path d="M112 254 130 288 158 238" />
        <path d="M112 254 58 274" />
        <path d="M130 288 112 300" />
      </g>

      {/* Punto de ubicación */}
      <circle cx="112" cy="58" r="20" fill="var(--accent-bright)" fillOpacity="0.14" />
      <circle cx="112" cy="58" r="6.5" fill="var(--accent-bright)" />
    </svg>
  )
}
