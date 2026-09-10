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

/**
 * Bloque de servicio del mockup: numeral arriba a la izquierda, hueco
 * fotográfico anclado arriba a la derecha con recorte diagonal, y el texto
 * corriendo por debajo del numeral, a la izquierda de la foto.
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
    <article className="relative flex h-full flex-col">
      {/* Hueco fotográfico: fuera del flujo, para que el texto quede a su izquierda */}
      <div className="absolute right-0 top-0 w-[42%] max-w-[160px] xl:max-w-[180px]">
        <ImagePlaceholder
          aspectRatio="0.65 / 1"
          variant="service"
          src={src}
          alt={imageAlt}
          label="IMAGE"
        />
      </div>

      <div className="w-full pr-[48%] pt-1">
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
        className="mt-11 w-[60%] text-[21px] sm:w-[56%] font-bold leading-[1.22] tracking-[-0.01em]"
        style={{ color: 'var(--text)' }}
      >
        {titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>

      <p className="body-copy mt-5 w-full flex-1 pr-[48%]">{copy}</p>

      <a
        href={href}
        className="mt-8 inline-flex w-fit items-center gap-2 text-[14px] font-semibold transition-colors duration-200 hover:opacity-80"
        style={{ color: 'var(--accent-bright)' }}
        aria-label={`Ver más sobre ${imageAlt}`}
      >
        Ver más
        <ArrowRight className="h-4 w-4" aria-hidden="true" strokeWidth={2} />
      </a>
    </article>
  )
}
