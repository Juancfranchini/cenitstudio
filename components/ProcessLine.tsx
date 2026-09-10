/**
 * Línea de progreso del proceso. No es recta: recorre las etapas casi
 * horizontal y asciende sobre el tramo final hasta el punto azul,
 * repitiendo el arco del isotipo.
 */
export default function ProcessLine() {
  const stops = [0, 25, 50]

  return (
    <div className="relative hidden h-[120px] w-full lg:block" aria-hidden="true">
      <svg
        viewBox="0 0 1000 120"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0 112H505C610 112 700 92 772 62C838 35 890 18 962 8"
          stroke="var(--accent-bright)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Puntos de recorrido sobre el tramo llano, alineados a cada etapa */}
      {stops.map((left) => (
        <span
          key={left}
          className="absolute h-[7px] w-[7px] -translate-y-1/2 rounded-full"
          style={{ left: `${left}%`, top: '112px', backgroundColor: 'var(--accent-bright)' }}
        />
      ))}

      {/* Punto de llegada */}
      <span
        className="absolute right-[2%] h-[11px] w-[11px] -translate-y-1/2 translate-x-1/2 rounded-full"
        style={{ top: '8px', backgroundColor: 'var(--accent-bright)' }}
      />
    </div>
  )
}

/** Variante vertical para mobile: misma curva, girada. */
export function ProcessLineVertical() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-[3px] top-2 w-px sm:hidden"
      style={{ backgroundColor: 'var(--border)' }}
      aria-hidden="true"
    />
  )
}
