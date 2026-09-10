import ImagePlaceholder from './ImagePlaceholder'

/**
 * Bloque fotográfico del hero: recorte diagonal ascendente hacia la derecha
 * y, por encima, la línea blanca de marca que termina en el punto azul.
 * La línea es SVG independiente, nunca parte de la imagen.
 */
export default function HeroImagePlaceholder({ src }: { src?: string }) {
  return (
    <div className="relative">
      <ImagePlaceholder
        aspectRatio="1.16 / 1"
        variant="hero"
        src={src}
        alt="Planta industrial cliente de Cenit Studio"
      />

      {/* Curva ascendente de marca sobre la diagonal */}
      <svg
        viewBox="0 0 480 420"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-[122%] overflow-visible"
        aria-hidden="true"
      >
        <path
          d="M14 416C126 366 236 280 318 176C372 108 420 56 450 22"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="458" cy="16" r="9" fill="var(--accent-bright)" />
      </svg>
    </div>
  )
}
