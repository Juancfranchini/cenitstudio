type Variant = 'hero' | 'service' | 'plain'

type ImagePlaceholderProps = {
  /** Proporción CSS, p. ej. "16 / 10". Define la altura del hueco. */
  aspectRatio: string
  /** Máscara diagonal aplicada al hueco. */
  variant?: Variant
  /** Ruta de la foto definitiva. Mientras esté vacía se ve el placeholder. */
  src?: string
  alt?: string
  className?: string
  label?: string
}

const clipByVariant: Record<Variant, string> = {
  hero: 'clip-hero',
  service: 'clip-service',
  plain: '',
}

/**
 * Hueco fotográfico. Conserva ratio, recorte y posición del mockup:
 * al pasar `src` la foto entra en el mismo espacio, sin mover el layout.
 */
export default function ImagePlaceholder({
  aspectRatio,
  variant = 'plain',
  src,
  alt = '',
  className = '',
  label = 'IMAGE PLACEHOLDER',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${clipByVariant[variant]} ${className}`}
      style={{ aspectRatio }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ backgroundColor: 'var(--navy-light)' }}
          role="img"
          aria-label={alt || label}
        >
          <span
            className="px-4 text-center text-[10px] font-semibold uppercase tracking-eyebrow"
            style={{ color: 'var(--dark-muted)' }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
