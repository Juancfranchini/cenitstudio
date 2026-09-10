import { ArrowRight } from 'lucide-react'
import ImagePlaceholder from './ImagePlaceholder'

type ServiceBlockProps = {
  number: string
  titleLines: readonly string[]
  copy: string
  imageAlt: string
  href?: string
  /** Foto definitiva, cuando exista. */
  src?: string
}

/** Misma diagonal que la máscara, para que el texto la bordee. */
const DIAGONAL = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 42%)'

/**
 * Bloque de servicio del mockup: numeral con su filete arriba a la izquierda,
 * hueco fotográfico arriba a la derecha y el texto corriendo a su izquierda,
 * ganando ancho a medida que la diagonal libera espacio.
 */
export default function ServiceBlock({
  number,
  titleLines,
  copy,
  imageAlt,
  href = '#contacto',
  src,
}: ServiceBlockProps) {
  return (
    <article className="flex h-full flex-col">
      <div>
        <div
          className="float-right ml-4 w-[42%] max-w-[200px] xl:ml-5 xl:w-[46%]"
          style={{ shapeOutside: DIAGONAL, shapeMargin: '10px' }}
        >
          <ImagePlaceholder
            aspectRatio="0.65 / 1"
            variant="service"
            src={src}
            alt={imageAlt}
            label="IMAGE"
          />
        </div>

        <div className="pt-1">
          <span className="text-[12px] font-semibold" style={{ color: 'var(--accent-bright)' }}>
            {number}
          </span>
          <span
            aria-hidden="true"
            className="mt-2 block h-px w-[52px]"
            style={{ backgroundColor: 'var(--accent-bright)', opacity: 0.45 }}
          />
        </div>

        <h3
          className="mt-9 text-[19px] font-bold leading-[1.22] tracking-[-0.015em] xl:text-[21px]"
          style={{ color: 'var(--text)' }}
        >
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>

        <p className="body-copy mt-4">{copy}</p>
      </div>

      <a
        href={href}
        className="mt-auto inline-flex w-fit items-center gap-2 pt-7 text-[14px] font-semibold transition-colors duration-200 hover:opacity-80"
        style={{ color: 'var(--accent-bright)' }}
        aria-label={`Ver más sobre ${imageAlt}`}
      >
        Ver más
        <ArrowRight className="h-4 w-4" aria-hidden="true" strokeWidth={2} />
      </a>
    </article>
  )
}
