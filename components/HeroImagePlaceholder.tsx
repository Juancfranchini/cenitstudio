import ImagePlaceholder from './ImagePlaceholder'

/**
 * Bloque fotográfico del hero: recorte diagonal ascendente hacia la derecha
 * y, por encima, la línea blanca de marca que termina en el punto azul.
 * La línea es SVG independiente, nunca parte de la imagen; el punto va como
 * elemento aparte para que no se deforme al estirarse el trazado.
 */
export default function HeroImagePlaceholder({ src }: { src?: string }) {
  return (
    <div className="relative">
      <ImagePlaceholder
        aspectRatio="1.148 / 1"
        variant="hero"
        src={src}
        alt="Planta industrial cliente de Cenit Studio"
      />

      {/* Curva ascendente de marca sobre la diagonal */}
      <svg
        viewBox="0 0 480 420"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-[106%] overflow-visible lg:w-[130%]"
        aria-hidden="true"
      >
        {/* Tramo sobre la imagen */}
        <path
          d="M10 416C112 392 214 340 292 262C330 224 352 190 369 160"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* Continuación sobre el fondo claro, hasta el punto */}
        <path
          d="M369 160C392 120 424 66 450 22"
          stroke="var(--border)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Punto de llegada */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[99%] top-[4.5%] h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:left-[122%] lg:h-[17px] lg:w-[17px]"
        style={{ backgroundColor: 'var(--accent-bright)' }}
      />
    </div>
  )
}
