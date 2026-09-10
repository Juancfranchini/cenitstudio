/**
 * Línea de progreso del proceso. No es recta: recorre las etapas casi
 * horizontal y asciende sobre el tramo final hasta el punto azul,
 * repitiendo el arco del isotipo.
 */
export default function ProcessLine() {
  const stops = [0, 25, 50]

  return (
    <div className="relative hidden h-[96px] w-full lg:block" aria-hidden="true">
      <svg
        viewBox="0 0 1000 96"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0 90H505C608 90 698 74 770 50C836 28 890 14 962 6"
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
          style={{ left: `${left}%`, top: '90px', backgroundColor: 'var(--accent-bright)' }}
        />
      ))}

      {/* Punto de llegada */}
      <span
        className="absolute right-[2%] h-[11px] w-[11px] -translate-y-1/2 translate-x-1/2 rounded-full"
        style={{ top: '6px', backgroundColor: 'var(--accent-bright)' }}
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
