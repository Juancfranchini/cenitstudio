import Button from './Button'
import HeroImagePlaceholder from './HeroImagePlaceholder'

export default function Hero() {
  return (
    <section id="inicio" className="overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="shell grid items-center gap-12 pb-16 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,520px)_minmax(0,1fr)] xl:gap-12 lg:pb-24 lg:pt-16">
        <div >
          <p className="eyebrow" style={{ color: 'var(--text-muted)' }}>
            Software · Infraestructura · Pauta digital
          </p>

          <h1 className="h-display mt-7 max-w-[520px]" style={{ color: 'var(--text)' }}>
            Tecnología que hace más eficiente tu{' '}
            <span style={{ color: 'var(--accent-bright)' }}>operación.</span>
          </h1>

          <p className="body-copy mt-7 max-w-[440px]">
            Desarrollamos software a medida, infraestructura IT segura y campañas
            publicitarias para que tu empresa opere mejor, venda más y crezca.
          </p>

          <Button href="#contacto" className="mt-9">
            Hablemos
          </Button>
        </div>

        <div className="flex items-stretch gap-5 lg:gap-8">
          <div className="min-w-0 flex-1">
            <HeroImagePlaceholder />
          </div>

          {/* Rótulo vertical del mockup, con su filete azul */}
          <div className="hidden shrink-0 items-center gap-4 sm:flex">
            <span
              aria-hidden="true"
              className="h-[76px] w-px"
              style={{ backgroundColor: 'var(--accent-bright)' }}
            />
            <p
              className="text-[10px] font-semibold uppercase leading-[2.1] tracking-eyebrow"
              style={{ color: 'var(--text)' }}
            >
              Tu negocio
              <br />
              en buenas
              <br />
              manos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
